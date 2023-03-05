type GreeterProps = {
  me?: boolean,
  name: string
}

const Greeter = ({me, name}: GreeterProps) => {
  return (
    <div className="rounded border-2 font-sans inline-flex m-2" style={{
      borderColor: "var(--color-primary)",
      color: "var(--color-primary-contrast)"
    }}>
      <span className="h-full p-2" style={{background: "var(--color-primary"}}>{me ? "Welcome home " : "This room belongs to "}</span>
      <span className="p-2" style={{
        fontFamily: "var(--header-font)",
        color: "var(--color-primary)"
      }}>{name}</span>
    </div>
  )
}
export default Greeter