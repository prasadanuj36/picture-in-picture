#  Picture-in-Picture

The [Screen Capture](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) API facilitates screen capture in the form of `MediaSream`.<br> 
Using the above API a Picture in Picture web app can be made. To start 
capturing video from the screen , you call `getDisplayMedia()` on 
the instance of `Media.navigator.mediaDevices` :

`const mediaStream = await navigator.mediaDevices.getDisplayMedia();`

The `Promise` returned by `getDisplayMedia()` resolves to a `MediaSream` which streams the captured media.
