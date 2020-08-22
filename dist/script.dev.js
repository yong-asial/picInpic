"use strict";

var videoElement = document.getElementById('video');
var button = document.getElementById('button');
var reloadButton = document.getElementById('reload-button'); // Prompt to select media stream, pass to video element, then play

var selectMediaSteam = function selectMediaSteam() {
  var mediaStream;
  return regeneratorRuntime.async(function selectMediaSteam$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (!(!'pictureInPictureEnabled' in document)) {
            _context.next = 5;
            break;
          }

          window.alert('Your browser or device does NOT support this feature');
          button.disabled = true;
          return _context.abrupt("return");

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(navigator.mediaDevices.getDisplayMedia());

        case 7:
          mediaStream = _context.sent;
          videoElement.srcObject = mediaStream;

          videoElement.onloadedmetadata = function () {
            videoElement.play();
          };

          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

button.addEventListener('click', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          if (!(!videoElement || !videoElement.srcObject)) {
            _context2.next = 5;
            break;
          }

          window.alert('Please select screen first and then click Start Again');
          reloadButton.click();
          return _context2.abrupt("return");

        case 5:
          // Disable button
          button.disabled = true; // Start picture in picture

          _context2.next = 8;
          return regeneratorRuntime.awrap(videoElement.requestPictureInPicture());

        case 8:
          // Reset button
          button.disabled = false;
          _context2.next = 16;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          window.alert('Your browser or device does NOT support this feature');
          window.alert(JSON.stringify(_context2.t0));

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
reloadButton.addEventListener('click', function () {
  location.reload();
}); // On Load

selectMediaSteam();