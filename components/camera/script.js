function moveObject(direction) {
    const mockObject = document.getElementById('mock-object');
    const motorPositionEl = document.getElementById('motor-position');
    const xPosEl = document.getElementById('x-position');
    const yPosEl = document.getElementById('y-position');

    let x = parseInt(xPosEl.innerText, 10) || 0;
    let y = parseInt(yPosEl.innerText, 10) || 0;
    let motorPosition = parseInt(motorPositionEl.innerText, 10) || 0;

    // Update positions based on direction
    switch (direction) {
        case 'forward':
            y = Math.max(0, y - 10); // Move up
            motorPosition += 5;
            break;
        case 'backward':
            y = Math.min(430, y + 10); // Move down
            motorPosition += 5;
            break;
        case 'left':
            x = Math.max(0, x - 10); // Move left
            motorPosition += 5;
            break;
        case 'right':
            x = Math.min(590, x + 10); // Move right
            motorPosition += 5;
            break;
        case 'left-up':
            x = Math.max(0, x - 10); // Move left
            y = Math.max(0, y - 10); // Move up
            motorPosition += 5;
            break;
        case 'right-up':
            x = Math.min(590, x + 10); // Move right
            y = Math.max(0, y - 10); // Move up
            motorPosition += 5;
            break;
        case 'left-down':
            x = Math.max(0, x - 10); // Move left
            y = Math.min(430, y + 10); // Move down
            motorPosition += 5;
            break;
        case 'right-down':
            x = Math.min(590, x + 10); // Move right
            y = Math.min(430, y + 10); // Move down
            motorPosition += 5;
            break;
        case 'stop':
            // Do nothing
            break;
    }

    // Update object position
    mockObject.style.left = `${x}px`;
    mockObject.style.top = `${y}px`;

    // Update motor position and coordinates
    motorPositionEl.innerText = motorPosition % 360;
    xPosEl.innerText = x;
    yPosEl.innerText = y;
}
