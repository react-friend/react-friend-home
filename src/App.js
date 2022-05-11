import "./App.css";
import SampleWrapper from "./Components/SampleWrapper/SampleWrapper";

function App() {
  return (
    <div className="App">
      <SampleWrapper display={true}>
        <div>
          <p>child</p>
        </div>
      </SampleWrapper>
    </div>
  );
}

export default App;
