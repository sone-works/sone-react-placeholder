type PlaceholderProps = {
  display: string
  className?: string
  color?: string
  height?: string
  width?: string
}

export default function Placeholder({
  display,
  className,
  color = 'blue',
  height = 'auto',
  width = '100%',
}: PlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        alignItems: 'center',
        display: 'flex',
        border: '1px dashed',
        borderColor: color,
        fontSize: '1rem',
        color,
        height,
        width,
      }}
    >
      <span>{display}</span>
    </div>
  )
}
