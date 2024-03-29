import {
  StrengthContainerSection,
  StrengthIndicators,
  StrengthLabel,
  StrengthText,
} from "./StrengthContainer.style";

export default function StrengthContainer({
  count,
  rangeValue,
}: {
  count: number;
  rangeValue: number;
}) {
  const value =
    rangeValue > 0 && rangeValue <= 4 && count >= 1 && count <= 4
      ? "Too Weak!"
      : rangeValue === 5 && count >= 1 && count < 4
      ? "Too Weak!"
      : rangeValue === 5 && count === 4
      ? "Weak"
      : rangeValue > 5 && rangeValue <= 7 && count === 3
      ? "Weak"
      : rangeValue > 5 && rangeValue <= 7 && count < 3
      ? "Too Weak!"
      : rangeValue > 5 && rangeValue <= 7 && count >= 1 && count <= 2
      ? "Weak"
      : rangeValue > 5 && rangeValue <= 7 && count === 4
      ? "Medium"
      : rangeValue >= 8 && count === 1
      ? "Too Weak!"
      : rangeValue >= 8 && count === 2
      ? "Weak"
      : rangeValue >= 8 && count === 3
      ? "Medium"
      : rangeValue >= 8 && count === 4
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
