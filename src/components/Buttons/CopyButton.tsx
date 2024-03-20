import CopyIcon from "../../assets/images/icon-copy.svg"
import { CopyButtonStyle } from "./CopyButton.style"

export default function CopyButton() {
  return (
    <CopyButtonStyle>
      Copied
      <img src={CopyIcon} alt="copy" />
    </CopyButtonStyle>
  )
}
