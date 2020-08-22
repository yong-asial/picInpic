const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const reloadButton = document.getElementById('reload-button');

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
    if (!videoElement || !videoElement.srcObject) {
      window.alert('Please select screen first and then click Start Again');
      reloadButton.click();
      return;
    }
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

reloadButton.addEventListener('click', () => {
  location.reload();
})

// On Load
selectMediaSteam();