import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  return (
    <div className="splash">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Vite</h1>
      <button type="button">{"Start"}</button>
    </div>
  );
}
