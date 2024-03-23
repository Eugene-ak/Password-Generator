import { useRef } from "react"
import CopyIcon from "../Icons/CopyIcon"
import { CopiedText, CopyButtonStyle } from "./CopyButton.style"

export default function CopyButton() {

  const copiedText = useRef(null);
  
  const displayCopiedText = () => {
    setTimeout(() => {
      copiedText.current.style.display = "none";
    }, 2000);
    copiedText.current.style.display = "flex";
  }

  return (
    <CopyButtonStyle onClick={displayCopiedText}>
      <CopiedText ref={copiedText}>Copied</CopiedText>
      <CopyIcon />
    </CopyButtonStyle>
  )
}
