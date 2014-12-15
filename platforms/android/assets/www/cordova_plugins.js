cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraConstants.js",
        "id": "org.apache.cordova.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
        "id": "org.apache.cordova.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/Camera.js",
        "id": "org.apache.cordova.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverHandle.js",
        "id": "org.apache.cordova.camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/GlobalizationError.js",
        "id": "org.apache.cordova.globalization.GlobalizationError",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/globalization.js",
        "id": "org.apache.cordova.globalization.globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "file": "plugins/com.keith.cordova.plugin.canvascamera/www/CanvasCamera.js",
        "id": "com.keith.cordova.plugin.canvascamera.CanvasCamera",
        "clobbers": [
            "plugin.CanvasCamera",
            "CanvasCamera"
        ]
    },
    {
        "file": "plugins/org.wbt11a.nativecamera/www/CameraConstants.js",
        "id": "org.wbt11a.nativecamera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/org.wbt11a.nativecamera/www/CameraPopoverOptions.js",
        "id": "org.wbt11a.nativecamera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.wbt11a.nativecamera/www/Camera.js",
        "id": "org.wbt11a.nativecamera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.wbt11a.nativecamera/www/CameraPopoverHandle.js",
        "id": "org.wbt11a.nativecamera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/com.performanceactive.plugins.camera/www/js/customcamera.js",
        "id": "com.performanceactive.plugins.camera.customCamera",
        "clobbers": [
            "navigator.customCamera"
        ]
    },
    {
        "file": "plugins/co.mwater.foregroundcameraplugin/www/CameraConstants.js",
        "id": "co.mwater.foregroundcameraplugin.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/co.mwater.foregroundcameraplugin/www/CameraPopoverOptions.js",
        "id": "co.mwater.foregroundcameraplugin.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/co.mwater.foregroundcameraplugin/www/Camera.js",
        "id": "co.mwater.foregroundcameraplugin.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/co.mwater.foregroundcameraplugin/www/CameraPopoverHandle.js",
        "id": "co.mwater.foregroundcameraplugin.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.camera": "0.3.4",
    "org.apache.cordova.globalization": "0.3.3",
    "com.keith.cordova.plugin.canvascamera": "1.0.0dev",
    "org.wbt11a.nativecamera": "0.1.4",
    "com.performanceactive.plugins.camera": "1.4",
    "co.mwater.foregroundcameraplugin": "0.1.1",
    "com.clarknikdelpowell.realtime_camera": "0.2.0"
}
// BOTTOM OF METADATA
});