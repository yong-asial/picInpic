const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
const selectMediaSteam = async () => {
  try {
    if (!'pictureInPictureEnabled' in document) {
      window.alert('Your browser or device does NOT support this feature');
      button.disabled = true;
      return;
    }
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (e) {
    console.error(e);
  }
};

button.addEventListener('click', async () => {
  try {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
  } catch (e) {
    console.log(e);
    window.alert('Your browser or device does NOT support this feature');
    window.alert(JSON.stringify(e));
  }

});

// On Load
selectMediaSteam();