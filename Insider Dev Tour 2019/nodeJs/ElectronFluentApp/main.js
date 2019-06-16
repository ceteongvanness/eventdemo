var app = require('electron').app
var BrowserWindow = require('electron').BrowserWindow
var path = require('path')

var mainWindow = null

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    center: true,
    transparent: true, 
    frame: false, 
    movable: true, 
    width: 1280, 
    height: 900,
    show: false,
    webPreferences: {
      webSecurity: false,
      experimentalFeatures: true,
      experimentalCanvasFeatures: true
    }
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.on('closed', function () { mainWindow = null })
  mainWindow.on('ready-to-show',function() {
    var nativeHandleBuffer = mainWindow.getNativeWindowHandle();
    var electronVibrancy = require('bindings')('Vibrancy');

    function enableVibrancy (buffer) {
      electronVibrancy.SetVibrancy(true, buffer);
    }
    function disableVibrancy (buffer) {
      electronVibrancy.SetVibrancy(false, buffer);
    }

    // Whole window vibrancy with Material 0 and auto resize
    enableVibrancy(nativeHandleBuffer);

    mainWindow.show();
  })
})
