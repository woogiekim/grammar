const {app, BrowserWindow} = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 730,
    height: 395
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})