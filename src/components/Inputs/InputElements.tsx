import Checkbox from "./Checkbox";

export default function InputElements() {
  return (
    <div>
      <div>
        <span>Character length</span>
        <span>10</span>
        <input type="range" name="passwordLength" />
      </div>
      <div>
        <Checkbox name="uppercase" displayText="Include Uppercase Letters"/>
        <Checkbox name="lowercase" displayText="Include Lowercase Letters"/>
        <Checkbox name="numbers" displayText="Include Numbers"/>
        <Checkbox name="symbols" displayText="Include Symbols"/>
      </div>
    </div>
  );
}
