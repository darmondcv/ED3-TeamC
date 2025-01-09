const cameraFeed = document.getElementById('camera-feed');
const stopButton = document.getElementById('stop-camera');

// ESP32-CAM URL (replace with your IP address if different)
const esp32CamUrl = 'http://192.168.20.26/';

// Set the ESP32-CAM feed URL
cameraFeed.src = esp32CamUrl;

// Handle joystick control
const joystickContainer = document.getElementById('joystick-container');
const manager = nipplejs.create({
    zone: joystickContainer,
    mode: 'static',
    position: { left: '50%', top: '50%' },
    color: 'blue', // Joystick color
    size: 200, // Increase joystick size in pixels
    restOpacity: 0.8, // Set idle opacity
});

manager.on('move', (evt, data) => {
    if (data.direction) {
        console.log('Moving: ${data.direction.angle} (${data.distance}px)');
        // Send control commands to the ESP32-CAM
        // Use fetch or WebSocket to communicate commands to the ESP32-CAM server
    }
});

manager.on('end', () => {
    console.log('Joystick released');
    // Send a stop command to the ESP32-CAM
});

// Stop camera button functionality
stopButton.addEventListener('click', () => {
    cameraFeed.src = ''; // Stop displaying the feed
    console.log('Camera feed stopped');
});