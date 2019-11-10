import * as path from 'path'
import * as url from 'url'
import { app, BrowserWindow } from 'electron'
import setApplicationMenu from './utils/menu'

let mainWindow: Electron.BrowserWindow | null

function createWindow(): void {
  mainWindow = new BrowserWindow({
    height: 768,
    width: 1024,
    webPreferences: {
      nodeIntegration: true
    }
  })

  setApplicationMenu()

  // global.title = 'Yay! Welcome to umi-electron-typescript!';

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:8000/#/')
    mainWindow.webContents.openDevTools({ mode: 'undocked' })
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, './dist/renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
