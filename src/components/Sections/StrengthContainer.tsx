import {
  StrengthContainerSection,
  StrengthIndicators,
  StrengthLabel,
  StrengthText,
} from "./StrengthContainer.style";

export default function StrengthContainer({ count }: { count: number }) {
  const value =
    count === 1
      ? "Too Weak!"
      : count === 2
      ? "Weak"
      : count === 3
      ? "Medium"
      : count === 4
      ? "Strong"
      : "";

  const strengthClass =
    value === "Too Weak!"
      ? "weakest"
      : value === "Weak"
      ? "weak"
      : value === "Medium"
      ? "medium"
      : value === "Strong"
      ? "strong"
      : "";

  return (
    <StrengthContainerSection>
      <StrengthText>Strength</StrengthText>
      <div>
        <StrengthLabel>{value}</StrengthLabel>
        <StrengthIndicators className={strengthClass}>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </StrengthIndicators>
      </div>
    </StrengthContainerSection>
  );
}
