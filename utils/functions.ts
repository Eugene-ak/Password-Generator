import { MutableRefObject } from "react";
import { toast } from "sonner";

export const copyText = (text: string, copiedText: MutableRefObject<HTMLSpanElement | null>) => {
    // Check if the password field has a value other than default and make sure reference to the copy button is undefined
    if (text && copiedText?.current) {
      navigator.clipboard.writeText(text);
      // Display copied text for 2seconds and revert to default state on successful copy
      copiedText.current.style.display = "flex";
      toast.success("Copied to clipboard!");
      setTimeout(() => {
        if (copiedText.current) {
          copiedText.current.style.display = "none";
        }
      }, 2000);
    }
  };