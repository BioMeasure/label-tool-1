/**
 * Top menu bar
 */
import { Menu, MenuItemConstructorOptions, app } from 'electron'

const template: MenuItemConstructorOptions[] = [
  {
    label: '编辑',
    submenu: [
      {
        label: '撤销',
        role: 'undo'
      },
      {
        label: '重做',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: '剪切',
        role: 'cut'
      },
      {
        label: '复制',
        role: 'copy'
      },
      {
        label: '粘贴',
        role: 'paste'
      },
      {
        label: '粘贴并匹配样式',
        role: 'pasteAndMatchStyle'
      },
      {
        label: '删除',
        role: 'delete'
      },
      {
        label: '全选',
        role: 'selectAll'
      }
    ]
  },
  {
    label: '视图',
    submenu: [
      {
        label: '重新加载',
        role: 'reload'
      },
      {
        label: '强制重新加载',
        role: 'forceReload'
      },
      {
        type: 'separator'
      },
      {
        label: '实际大小',
        role: 'resetZoom'
      },
      {
        label: '放大',
        role: 'zoomIn'
      },
      {
        label: '缩小',
        role: 'zoomOut'
      },
      {
        type: 'separator'
      },
      {
        label: '进入全屏',
        role: 'togglefullscreen'
      }
    ]
  },
  {
    label: '窗口',
    role: 'window',
    submenu: [
      { label: '最小化', role: 'minimize' },
      { label: '关闭', role: 'close' }
    ]
  },
  {
    label: '帮助',
    submenu: [
      {
        label: '文档'
      },
      {
        label: '进入开发者工具',
        role: 'toggleDevTools'
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {
        label: `关于 ${app.getName()}`,
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit',
        label: '退出'
      }
    ]
  })
}

export default function setApplicationMenu(): void {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
