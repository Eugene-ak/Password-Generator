import CopyButton from "../Buttons/CopyButton"
import PasswordField from "../Inputs/PasswordField"
import { TopSectionDiv } from "./TopSection.style"

export default function TopSection() {
  return (
    <TopSectionDiv>
      <PasswordField />
      <CopyButton />
    </TopSectionDiv>
  )
}
