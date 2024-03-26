const Parameter: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <span className="font-bold">{name}</span>
      <span>{value}</span>
    </div>
  )
}

export default Parameter
