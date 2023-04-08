import React, { ReactNode } from 'react'
import Meta from './meta'

type Props = {
  preview: boolean
  children: ReactNode
}

export default function Layout({ preview, children }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* //TODO: Nav */}
        <main>{children}</main>
      </div>
      {/* //TODO: Footer */}
    </>
  )
}
