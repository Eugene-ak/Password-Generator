import { MutableRefObject, useRef } from "react";
import CopyIcon from "../Icons/CopyIcon";
import { CopiedText, CopyButtonStyle } from "./CopyButton.style";

export default function CopyButton({ text }: { text: string }) {
  const copiedText: MutableRefObject<HTMLSpanElement | null> = useRef(null);

  const displayCopiedText = () => {
    if (text && copiedText.current) {
      navigator.clipboard.writeText(text);
      copiedText.current.style.display = "flex";
      setTimeout(() => {
        if (copiedText.current) {
          copiedText.current.style.display = "none";
        }
      }, 2000);
    }
  };

  return (
    <CopyButtonStyle onClick={displayCopiedText}>
      <CopiedText ref={copiedText}>Copied</CopiedText>
      <CopyIcon />
    </CopyButtonStyle>
  );
}
