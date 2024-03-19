import PageTitle from '@/components/common/PageTitle'
import { Content } from './content'

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <PageTitle content={params.id} />
      {/* <div>{JSON.stringify()}</div> */}
      {/* <Content id={params.id} /> */}
    </>
  )
}
