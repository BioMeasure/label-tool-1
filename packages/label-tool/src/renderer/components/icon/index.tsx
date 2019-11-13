import React, { HTMLAttributes } from 'react'
import { Icon as AntdIcon } from 'antd'
import { ReactComponent as PicFillSvg } from '@/assets/icons/pic-fill.svg'
import { ReactComponent as ToolFillSvg } from '@/assets/icons/tool-fill.svg'

interface IconProps {
  type: 'pic' | 'tool'
}

const PicFillIcon: React.FC<HTMLAttributes<{}>> = props => <AntdIcon component={PicFillSvg} {...props} />
const ToolFillIcon: React.FC<HTMLAttributes<{}>> = props => <AntdIcon component={ToolFillSvg} {...props} />

const Icon: React.FC<IconProps & HTMLAttributes<{}>> = props => {
  const { type, ...rest } = props
  switch (type) {
    case 'pic':
      return <PicFillIcon {...rest} />
    case 'tool':
      return <ToolFillIcon {...rest} />
  }
}

export default React.memo(Icon)
