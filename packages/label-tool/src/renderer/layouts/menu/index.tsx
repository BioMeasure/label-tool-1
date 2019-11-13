import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router'
import styles from './index.less'
import Icon from '@/components/icon'

interface MenuProps {
  icon: typeof Icon
}

const MenuLayout: React.FC<PropsWithChildren<RouteComponentProps>> = (
  props: PropsWithChildren<RouteComponentProps>
) => {
  const { children } = props
  return <>{children}</>
}

export default MenuLayout
