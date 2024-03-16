import type { ReactElement } from 'react'
import Layout from '@/components/layout'
//import NestedLayout from '../components/nested-layout'
import type { NextPageWithLayout } from './_app'
import Home from './home'
 
const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
 //<NestedLayout>{page}</NestedLayout>
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
 
export default Page