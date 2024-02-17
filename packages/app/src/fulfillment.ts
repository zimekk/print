import { Router, json } from "express";
import {
  type SmartHomeV1ExecuteResponseCommands,
  smarthome,
} from "actions-on-google";

// https://github.com/actions-on-google/actions-on-google-nodejs?tab=readme-ov-file#smart-home

// Create an app instance
const app = smarthome();

// Register handlers for Smart Home intents

app.onExecute(async (body, headers) => {
  console.debug("ExecuteRequest:", body, headers);
  const commands: SmartHomeV1ExecuteResponseCommands[] = [];
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
  console.debug("QueryRequest:", body, headers);
  return {
    requestId: body.requestId,
    payload: {
      devices: [],
    },
  };
});

app.onSync(async (body, headers) => {
  console.debug("SyncRequest:", body, headers);
  return {
    requestId: body.requestId,
    payload: {
      devices: [],
    },
  };
});

app.onDisconnect(async (body, headers) => {
  console.debug("DisconnectRequest:", body);
  return {};
});

export default () =>
  Router().post(
    "/fulfillment",
    json(),
    (req, res, next) => (console.log(req.body), next()),
    app,
  );
