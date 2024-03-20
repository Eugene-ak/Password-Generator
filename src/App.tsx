import ButtonIcon from "./assets/images/icon-arrow-right.svg";

function App() {
  return (
    <>
      <h4>Password Generator</h4>
      <div>
        <input type="text" value={"Password"} />
        <button>Copy</button>
      </div>
      <div>
        <span>Character length</span>
        <span>10</span>
        <input type="range" name="passwordLength" />
        <input type="checkbox" name="uppercase" />
        <label htmlFor="uppercase">Include Uppercase Letters</label>
        <input type="checkbox" name="lowercase" />
        <label htmlFor="lowercase">Include Lowercase Letters</label>
        <input type="checkbox" name="numbers" />
        <label htmlFor="numbers">Include Numbers</label>
        <input type="checkbox" name="symbols" />
        <label htmlFor="symbols">Include Symbols</label>

        <div>
          <span>Strength</span>
          <span>Medium</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
        <button>Generate -&gt;</button>
      </div>
    </>
  );
}

export default App;
