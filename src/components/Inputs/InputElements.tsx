export default function InputElements() {
  return (
    <div>
      <div>
        <span>Character length</span>
        <span>10</span>
        <input type="range" name="passwordLength" />
      </div>
      <div>
        <input type="checkbox" name="uppercase" />
        <label htmlFor="uppercase">Include Uppercase Letters</label>
        <input type="checkbox" name="lowercase" />
        <label htmlFor="lowercase">Include Lowercase Letters</label>
        <input type="checkbox" name="numbers" />
        <label htmlFor="numbers">Include Numbers</label>
        <input type="checkbox" name="symbols" />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
    </div>
  );
}
