import { useRef } from "react"
import CopyIcon from "../Icons/CopyIcon"
import { CopiedText, CopyButtonStyle } from "./CopyButton.style"

export default function CopyButton() {

  const copiedText = useRef<HTMLInputElement | null>(null);
  
  const displayCopiedText = () => {
    copiedText.current.style.display = "flex";
    setTimeout(() => {
      copiedText.current.style.display = "none";
    }, 2000);
  }

  return (
    <CopyButtonStyle onClick={displayCopiedText}>
      <CopiedText ref={copiedText}>Copied</CopiedText>
      <CopyIcon />
    </CopyButtonStyle>
  )
}
