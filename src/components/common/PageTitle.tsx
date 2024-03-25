const PageTitle: React.FC<{ content: string }> = ({ content }) => {
  return (
    <h1 className="mb-[70px] mt-[150px] text-center text-[50px] font-medium text-stone-800">
      {content}
    </h1>
  )
}

export default PageTitle
