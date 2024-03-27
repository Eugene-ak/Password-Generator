import { MutableRefObject, useRef } from "react";
import CopyIcon from "../Icons/CopyIcon";
import { CopiedText, CopyButtonStyle } from "./CopyButton.style";

export default function CopyButton({ text }: { text: string }) {
  const copiedText: MutableRefObject<HTMLSpanElement | null> = useRef(null);

  const copyText = () => {
    // Check if the password field has a value other than default and make sure reference to the copy button is undefined
    if (text && copiedText.current) {
      navigator.clipboard.writeText(text);
      // Display copied text for 2seconds and revert to default state on successful copy
      copiedText.current.style.display = "flex";
      setTimeout(() => {
        if (copiedText.current) {
          copiedText.current.style.display = "none";
        }
      }, 2000);
    }
  };

  return (
    <CopyButtonStyle onClick={copyText}>
      <CopiedText ref={copiedText}>Copied</CopiedText>
      <CopyIcon />
    </CopyButtonStyle>
  );
}
