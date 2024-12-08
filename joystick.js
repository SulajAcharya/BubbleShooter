let joystickStart = { x: 0, y: 0 }; // Start position of joystick
let joystickDelta = { x: 0, y: 0 }; // Movement delta of joystick
let isDragging = false;
let fireInterval = null; // Interval for continuous firing

// Handle joystick drag start
joystick.addEventListener('pointerdown', (e) => {
    isDragging = true;
    joystickStart = { x: e.clientX, y: e.clientY };

    // Start firing projectiles continuously
    fireInterval = setInterval(() => {
        if (Math.hypot(joystickDelta.x, joystickDelta.y) > 10) {
            const velocity = {
            x: joystickDelta.x / 10,
            y: joystickDelta.y / 10,
        };

        projectiles.push(
            new Shooter(canvas.width / 2, canvas.height / 2, 5, 'white', velocity)
        );

        }
    }, 100); // Fire every 100ms
});

// Handle joystick movement
window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;

    // Calculate the delta (movement)
    const deltaX = e.clientX - joystickStart.x;
    const deltaY = e.clientY - joystickStart.y;

    // Limit joystick movement within the container
    const distance = Math.min(75, Math.sqrt(deltaX ** 2 + deltaY ** 2));
    const angle = Math.atan2(deltaY, deltaX);

    joystickDelta = {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
    };

    // Update joystick position
    joystick.style.transform = `translate(${joystickDelta.x}px, ${joystickDelta.y}px)`;
});

// Handle joystick release
window.addEventListener('pointerup', () => {
    if (!isDragging) return;

    isDragging = false;

    // Stop firing projectiles
    clearInterval(fireInterval);
    fireInterval = null;

    // Reset joystick position
    joystick.style.transform = 'translate(0, 0)';
    joystickDelta = { x: 0, y: 0 };

});