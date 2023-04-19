import React, { type ReactNode } from 'react'
import { Meta } from './meta'

interface Props {
  preview: boolean
  children: ReactNode
}

export const Layout = ({ preview, children }: Props): JSX.Element => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}
