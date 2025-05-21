import { useState } from "react";
import Status from "./status";
import "./App.css";

function App() {
  const [bleStatus, setBleStatus] = useState(false);
  const [wifiStatus, setWifiStatus] = useState(false);
  const [airplaneModeStatus, setAirplaneModeStatus] = useState(false);
  return (
    <div>
      <Status
        value={bleStatus}
        setValue={setBleStatus}
        buttonTitle={"BLE"}
        sensor={"BLE STATUS "}
        color="red"
      />
      <Status
        value={wifiStatus}
        setValue={setWifiStatus}
        buttonTitle={"WIFI"}
        sensor={"WIFI STATUS "}
        color="green"
      />
      <Status
        value={airplaneModeStatus}
        setValue={setAirplaneModeStatus}
        buttonTitle={"AIRPLANE"}
        sensor={"AIRPLANE STATUS "}
        color="yellow"
      />
    </div>
  );
}

export default App;