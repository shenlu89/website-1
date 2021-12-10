import type { FC } from 'react'

import { Layout } from '../components/Layout'
import type * as types from '.contentlayer/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Playground } from '../components/Playground'

const mdxComponents = { Playground }

export const PageLayout: FC<{ page: types.Page }> = ({ page }) => {
  const MDXContent = useMDXComponent(page.body.code)
  return (
    <Layout doc={page}>
      <div className="max-w-4xl py-8 mx-auto">
        <h1>{page.title}</h1>
        <MDXContent components={mdxComponents} />
      </div>
    </Layout>
  )
}
