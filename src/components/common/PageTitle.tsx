const PageTitle: React.FC<{ content: string }> = ({ content }) => {
  return (
    <h1 className="mb-[70px] mt-[150px] text-balance text-center text-[30px] font-medium text-stone-800 laptop:text-[50px]">
      {content}
    </h1>
  )
}

export default PageTitle
