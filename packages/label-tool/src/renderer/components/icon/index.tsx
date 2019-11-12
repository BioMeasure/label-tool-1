import * as React from 'react'
import { Icon } from 'antd'
import { ReactComponent as ToolSvg } from '@/assets/icons/tool.svg'

const ToolIcon: React.FC = props => <Icon component={ToolSvg} {...props} />

export { ToolIcon }
