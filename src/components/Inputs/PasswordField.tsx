import { PasswordStyle } from "./PasswordField.style";

export default function PasswordField({
  passwordValue,
}: {
  passwordValue: string;
}) {
  return <PasswordStyle type="text" value={passwordValue} placeholder={"Password"} readOnly />;
}
