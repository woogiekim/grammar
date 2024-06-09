const {app, BrowserWindow} = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({titleBarStyle: 'hidden',
    width: 730,
    height: 370,
    minWidth: 730,
    minHeight: 365
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})