import { Router, json } from "express";
import {
  type SmartHomeV1ExecuteRequestExecution,
  type SmartHomeV1ExecuteResponseCommands,
  smarthome,
} from "actions-on-google";

// https://github.com/google-home/smarthome-local/blob/master/app-done/functions/index.js

// Hardcoded user ID
const USER_ID = "123";

const data = {
  on: false,
  isPaused: false,
  isRunning: false,
};

const updateDevice = (execution: SmartHomeV1ExecuteRequestExecution) => {
  const { params, command } = execution;
  let state: Partial<typeof data>;
  switch (command) {
    case "action.devices.commands.OnOff":
      state = { on: params.on };
      break;
    case "action.devices.commands.StartStop":
      state = { isRunning: params.start };
      break;
    case "action.devices.commands.PauseUnpause":
      state = { isPaused: params.pause };
      break;
  }

  return state;
};

// https://github.com/actions-on-google/actions-on-google-nodejs?tab=readme-ov-file#smart-home

// Create an app instance
const app = smarthome();

// Register handlers for Smart Home intents

app.onExecute(async (body, headers) => {
  console.debug("ExecuteRequest:", body);
  console.debug(body.inputs);

  // Execution results are grouped by status
  const result: SmartHomeV1ExecuteResponseCommands = {
    ids: [],
    status: "SUCCESS",
    states: {
      online: true,
    },
  };

  const intent = body.inputs[0];
  console.debug(intent.payload.commands);
  intent.payload.commands.forEach((command) => {
    for (const device of command.devices) {
      for (const execution of command.execution) {
        result.ids.push(device.id);
        Object.assign(result.states, updateDevice(execution));
      }
    }
  });

  const commands = [result];
  return {
    requestId: body.requestId,
    payload: {
      commands,
    },
  };
});

interface DeviceStatesMap {
  [key: string]: any;
}

app.onQuery(async (body, headers) => {
  console.debug("QueryRequest:", body);
  console.debug(body.inputs);

  const intent = body.inputs[0];
  console.debug(intent.payload.devices);
  const devices: DeviceStatesMap = intent.payload.devices.reduce(
    (devices, device) =>
      Object.assign(devices, {
        [device.id]: {
          on: data.on,
          isPaused: data.isPaused,
          isRunning: data.isRunning,
          currentRunCycle: [
            {
              currentCycle: "rinse",
              nextCycle: "spin",
              lang: "en",
            },
          ],
          currentTotalRemainingTime: 1212,
          currentCycleRemainingTime: 301,
        },
      }),
    {},
  );

  return {
    requestId: body.requestId,
    payload: {
      devices,
    },
  };
});

app.onSync(async (body, headers) => {
  console.debug("SyncRequest:", body);
  console.debug(body.inputs);
  return {
    requestId: body.requestId,
    payload: {
      agentUserId: USER_ID,
      devices: [
        {
          id: "washer",
          type: "action.devices.types.WASHER",
          traits: [
            "action.devices.traits.OnOff",
            "action.devices.traits.StartStop",
            "action.devices.traits.RunCycle",
          ],
          name: {
            defaultNames: ["My Washer"],
            name: "Washer",
            nicknames: ["Washer"],
          },
          deviceInfo: {
            manufacturer: "Acme Co",
            model: "acme-washer",
            hwVersion: "1.0",
            swVersion: "1.0.1",
          },
          willReportState: true,
          attributes: {
            pausable: true,
          },
          otherDeviceIds: [
            {
              deviceId: "deviceid123",
            },
          ],
        },
      ],
    },
  };
});

app.onDisconnect(async (body, headers) => {
  console.debug("DisconnectRequest:", body);
  return {};
});

export default () =>
  Router()
    .post("/fulfillment", json(), app)
    .post("/updatestate", json(), (req, res) => {
      console.info(req.body);

      Object.assign(data, {
        ...req.body,
      });

      return res.json({});
    });
