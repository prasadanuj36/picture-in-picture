const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream , pass to video , then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }
    catch (error) {
        console.log('Whoopsss', error)
    }
}

button.addEventListener('click', async () => {
    //  Disable button
    button.disabled = true;

    //Start PIP
    await videoElement.requestPictureInPicture();

    // Reset Button
    button.disabled = false;
});

// on load

selectMediaStream();