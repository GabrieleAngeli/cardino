/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
		alert()
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
		alert()
		
        app.receivedEvent('deviceready');
		navigator.notification.vibrateWithPattern([100, 200, 100, 200, 100, 100, 100, 800]);
		/*
		navigator.camera.getPicture(app.onSuccess, app.onFail, { quality: 50,
			destinationType: Camera.DestinationType.DATA_URL
		});
    	*/
		
		/*cordova.plugins.barcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );*/
		
		var objCanvas = document.getElementById("canvas");
    	//cordova.plugins.CanvasCamera.initialize(objCanvas);
		cordova.plugins.CanvasCamera.init();
		/*
		alert('qui ci simao') 
		
		canvasMain = document.getElementById("camera");
		CanvasCamera.initialize(canvasMain);
		// define options
		var opt = {
		  quality: 75,
		  destinationType: CanvasCamera.DestinationType.DATA_URL,
		  encodingType: CanvasCamera.EncodingType.JPEG,
		  saveToPhotoAlbum:true,
		  correctOrientation:true,
		  width:640,
		  height:480
		};
		CanvasCamera.start(opt);
		*/
	},
	
	onSuccess: function(imageData) {
		var image = document.getElementById('myImage');
		image.src = "data:image/jpeg;base64," + imageData;
	},
	
	onFail: function(message) {
		alert('Failed because: ' + message);
	},
	
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();