import CopyIcon from "../../assets/images/icon-copy.svg"
import { TopSectionDiv } from "./TopSection.style"

export default function TopSection() {
  return (
    <TopSectionDiv>
      <input type="text" value={"Password"} />
      <button>
        <img src={CopyIcon} alt="copy" />
      </button>
    </TopSectionDiv>
  )
}
