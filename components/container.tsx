import React, { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Container = ({ children }: Props): JSX.Element => {
  return <div className="container mx-auto px-5">{children}</div>
}
