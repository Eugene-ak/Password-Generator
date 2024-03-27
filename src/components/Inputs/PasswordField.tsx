import { MutableRefObject, useEffect, useRef } from "react";
import { PasswordStyle } from "./PasswordField.style";

export default function PasswordField({
  passwordValue,
}: {
  passwordValue: string;
}) {
  const passwordFieldValue: MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  // Make sure appropriate styles apply to the password field on every render
  useEffect(() => {
    if (passwordFieldValue.current) {
      if (passwordFieldValue.current.value === "P4$5W0rD!") {
        passwordFieldValue.current.style.color = "var(--secondary-background)";
      } else {
        passwordFieldValue.current.style.color = "var(--app-white)";
      }
    }
  });

  return (
    <PasswordStyle
      type="text"
      value={passwordValue.length === 0 ? "P4$5W0rD!" : passwordValue}
      ref={passwordFieldValue}
      readOnly
    />
  );
}
