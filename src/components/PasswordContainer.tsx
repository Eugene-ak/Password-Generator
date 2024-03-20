import CopyIcon from "../assets/images/icon-copy.svg"

export default function PasswordContainer() {
  return (
    <div>
      <input type="text" value={"Password"} />
      <button>
        <img src={CopyIcon} alt="copy" />
      </button>
    </div>
  )
}
