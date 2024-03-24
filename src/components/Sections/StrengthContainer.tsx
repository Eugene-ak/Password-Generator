import {
  StrengthContainerSection,
  StrengthIndicators,
  StrengthLabel,
  StrengthText,
} from "./StrengthContainer.style";

export default function StrengthContainer() {
  return (
    <StrengthContainerSection>
      <StrengthText>Strength</StrengthText>
      <div>
        <StrengthLabel>Too weak!</StrengthLabel>
        <StrengthIndicators className="strong">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </StrengthIndicators>
      </div>
    </StrengthContainerSection>
  );
}
