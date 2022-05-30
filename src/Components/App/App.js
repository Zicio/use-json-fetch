import UniComponent from "../UniComponent/UniComponent";

function App() {
  return (
    <div className="app">
      <UniComponent type={"data"} />
      <UniComponent type={"error"} />
      <UniComponent type={"loading"} />
    </div>
  );
}

export default App;
