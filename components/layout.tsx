import React, { type ReactNode } from 'react'

import { ComingSoonTag } from './ComingSoonTag/comingSoonTag'
import { Meta } from './meta'

interface Props {
  preview: boolean
  children: ReactNode
}

export const Layout = ({ preview, children }: Props): JSX.Element => {
  return (
    <>
      <Meta />
      <ComingSoonTag />
      <div style={{ height: '95vh', display: 'grid' }}>
        <main style={{ alignSelf: 'center' }}>{children}</main>
      </div>
    </>
  )
}
