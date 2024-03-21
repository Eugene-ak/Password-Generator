import Checkbox from "./Checkbox";

export default function InputElements() {
  return (
    <div>
      <Checkbox name="uppercase" displayText="Include Uppercase Letters" />
      <Checkbox name="lowercase" displayText="Include Lowercase Letters" />
      <Checkbox name="numbers" displayText="Include Numbers" />
      <Checkbox name="symbols" displayText="Include Symbols" />
    </div>
  );
}
