import CopyIcon from "../Icons/CopyIcon"
import { CopiedText, CopyButtonStyle } from "./CopyButton.style"

export default function CopyButton() {
  return (
    <CopyButtonStyle>
      <CopiedText>Copied</CopiedText>
      <CopyIcon />
    </CopyButtonStyle>
  )
}
