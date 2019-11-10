import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router'

const BasicLayout: React.FC<PropsWithChildren<RouteComponentProps>> = (
  props: PropsWithChildren<RouteComponentProps>
) => {
  const { children, location } = props
  console.debug(location)
  return <>{children}</>
}

export default BasicLayout
