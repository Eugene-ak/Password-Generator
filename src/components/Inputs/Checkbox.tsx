export default function Checkbox({ name, displayText }: { name: string, displayText: string}) {
  return (
    <div>
      <input type="checkbox" name={name} />
      <label htmlFor={name}>{displayText}</label>
    </div>
  )
}
