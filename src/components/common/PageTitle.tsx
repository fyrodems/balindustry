import React from 'react'

const PageTitle: React.FC<{ content: string }> = ({ content }) => {
  return (
    <h2 className="mb-[70px] mt-[150px] text-center text-[50px] font-medium text-stone-800">
      {content}
    </h2>
  )
}

export default PageTitle
