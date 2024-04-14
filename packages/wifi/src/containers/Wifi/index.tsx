import React, { useCallback, useEffect, useRef, useState } from "react";
import qrcode from "qrcode";
import styles from "./styles.module.scss";

const INITIAL_DATA = {
  ssid: "",
  security: "WPA",
  password: "",
  hidden: false,
};

type FromType = typeof INITIAL_DATA;

// https://github.com/lucafaggianelli/3d-qr-code-generator
const getWifiEasyConnectUri = (data: FromType) => {
  const parts = [`S:${data.ssid}`];

  if ((data.security || "none") !== "none") {
    parts.push(`T:${data.security}`);
    parts.push(`P:${data.password}`);
  }

  if (data.hidden) {
    parts.push(`H:true`);
  }

  return `WIFI:${parts.join(";")}`;
};

export default function Section() {
  const [data, setData] = useState<FromType>(() => INITIAL_DATA);
  useEffect(() => {}, []);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleChange = useCallback(
    ({ target }) =>
      setData((data) => ({
        ...data,
        [target.name]:
          target.type === "checkbox" ? target.checked : target.value,
      })),
    [],
  );

  useEffect(() => {
    const content = getWifiEasyConnectUri(data);
    console.log({ data, content });
    qrcode.toCanvas(
      canvasRef.current,
      content,
      { margin: 0, scale: 5 },
      function (error) {
        if (error) {
          console.error(error);
        }
      },
    );
  }, [data]);

  return (
    <section className={styles.Section}>
      <h2>WiFi</h2>
      <div className={styles.Row}>
        <form className={styles.Form}>
          <label>
            <div>SSID</div>
            <input
              type="text"
              name="ssid"
              value={data.ssid}
              onChange={handleChange}
            />
          </label>
          <label>
            <div>Security</div>
            <select
              name="security"
              value={data.security}
              onChange={handleChange}
            >
              <option value="none">None</option>
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
            </select>
          </label>
          <label>
            <div>Password</div>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </label>
          <label>
            <div>
              <input
                type="checkbox"
                name="hidden"
                checked={data.hidden}
                onChange={handleChange}
              />
              <span>Hidden</span>
            </div>
          </label>
        </form>
        <div className={styles.Canvas}>
          <canvas ref={canvasRef} width="125" height="125"></canvas>
        </div>
      </div>
    </section>
  );
}
