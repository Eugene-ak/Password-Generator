import Arrow from "../../assets/images/icon-arrow-right.svg";
import { GenerateBtn } from "./GenerateButton.style";

export default function GenerateButton() {
  return (
    <GenerateBtn>Generate
      <img src={Arrow} alt="" />
    </GenerateBtn>
  )
}
