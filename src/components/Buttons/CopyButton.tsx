import { MutableRefObject, useRef } from "react";
import CopyIcon from "../Icons/CopyIcon";
import { CopiedText, CopyButtonStyle } from "./CopyButton.style";
import { copyText } from "../../../utils/functions";

export default function CopyButton({ text }: { text: string }) {
  const copiedText: MutableRefObject<HTMLSpanElement | null> = useRef(null);

  return (
    <CopyButtonStyle onClick={() => copyText(text, copiedText)}>
      <CopiedText ref={copiedText}>Copied</CopiedText>
      <CopyIcon />
    </CopyButtonStyle>
  );
}
