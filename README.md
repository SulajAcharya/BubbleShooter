# Bubble Shooter Game

Welcome to **Bubble Shooter**, an exciting and action-packed shooting game where your goal is to shoot and destroy enemies while avoiding collisions and collecting points. The game features dynamic gameplay with various mechanics, including shooting projectiles, dodging enemies, and particle effects that make the game visually appealing.

## Game Description

Bubble Shooter is a simple yet engaging game where you control a shooter in the center of the screen. The goal is to eliminate the enemies by shooting projectiles while avoiding enemy collisions. The game will test your reaction time and aiming skills as you try to reach the highest score possible.

### How to Play

1. **Control the Shooter:**
   - Use a **virtual joystick** (located on the screen) to move the shooter in all directions. The joystick responds to touch or pointer events.
   - **Click anywhere on the screen** to shoot projectiles towards the target. The projectiles are fired from the center of the screen, and the direction is calculated based on where you click.

2. **Shoot Projectiles:**
   - When you drag the joystick away from the center, projectiles are fired continuously if the joystick moves more than a certain distance. This allows for rapid firing.
   - The projectiles will travel towards the position where the joystick is pointing, and they can hit and destroy enemies.

3. **Destroy Enemies:**
   - Enemies appear randomly on the screen, and you need to destroy them by hitting them with projectiles.
   - Enemies break into smaller particles when destroyed, and you earn points for each enemy hit.
   - If an enemy collides with your shooter, the game will end, and you'll need to start over.

4. **Game Over & Score:**
   - The game ends when the player collides with an enemy. At this point, the score will be compared to the highest score you've achieved, and a score dialog will pop up showing your result.
   - Your highest score is saved locally, so you can track your progress over time.

5. **Start a New Game:**
   - You can restart the game by clicking the "Start Game" button on the game-over screen. The score will reset, and a new round will begin.

## Features

- **Joystick Controls:** Move the shooter and fire projectiles using an on-screen virtual joystick.
- **Random Enemies:** Enemies spawn at random positions on the screen, and the difficulty increases as time goes on.
- **Particle Effects:** Destroyed enemies break into smaller particles, adding visual flair to the game.
- **Score Tracking:** Keep track of your current score and the highest score achieved.
- **Game Over Screen:** View your score and start a new game when you lose.

## Rules

1. **Shoot Enemies:** Aim and shoot projectiles at enemies to destroy them. Each enemy destroyed will give you points.
2. **Avoid Collisions:** If your shooter collides with any enemy, the game ends.
3. **Survival:** Survive as long as possible by destroying enemies and avoiding collisions.

## Fun Facts

- The **joystick mechanic** adds an interactive and unique control system, allowing for a more engaging gameplay experience.
- As the game progresses, enemies become more challenging, which increases the overall difficulty.
- The **particle system** adds a visual effect when enemies are destroyed, making the destruction feel more satisfying.

## Code Description

The game is built using HTML5, CSS3, and JavaScript. The key components of the game are:

1. **HTML Structure:**
   - The structure includes a `<canvas>` element for rendering the game graphics.
   - The score is displayed in the top left corner.
   - A score board is shown when the game is over, allowing users to view their score and restart the game.

2. **CSS Styling:**
   - The game uses modern CSS techniques to create a responsive layout with a fixed score display and a joystick that follows the user's touch or mouse.
   - The styling also includes a smooth animation for the joystick and particle effects.

3. **JavaScript Logic:**
   - **Game Loop:** The game uses `requestAnimationFrame` for creating a smooth animation loop. Every frame, the enemies, projectiles, and particles are updated.
   - **Shooter & Projectile Mechanics:** The shooter can move based on the joystick's position, and projectiles are fired at the target location.
   - **Enemy Spawning:** Enemies spawn randomly at the edges of the screen, and they move towards the center. The difficulty increases as the game progresses.
   - **Collision Detection:** The game checks for collisions between the player and enemies using `Math.hypot` to calculate the distance between two points (the player and enemy).

4. **Storage:**
   - The highest score is saved in **localStorage**, so players can track their progress even after refreshing the page or closing the browser.

5. **Joystick Controls:**
   - The joystick is an interactive element created using `pointerdown`, `pointermove`, and `pointerup` events. The joystick controls the shooter’s movement, and the projectiles are fired continuously as long as the joystick is moved.

## Extra Features & Improvements

- **Sound Effects:** Adding sound effects for shooting, destroying enemies, and collisions could enhance the gaming experience.
- **Mobile-Friendly:** The joystick is designed to work well on both mobile and desktop devices. On mobile, you can directly touch and drag the joystick, while on desktop, you can use your mouse.
- **Difficulty Levels:** The game could feature different difficulty levels, such as slow enemies or faster spawning rates as you progress.
- **Power-Ups:** Introducing power-ups like rapid fire, shield, or larger projectiles could add more depth to the gameplay.

## Technologies Used

- **HTML5 Canvas:** For rendering the graphics and animations of the game.
- **CSS3:** For styling the page and creating animations, such as the joystick movement.
- **JavaScript:** The game logic, including collision detection, player controls, and particle effects, is handled by JavaScript.

## How to Play

1. Open the game in your browser.
2. Use the joystick to move the shooter.
3. Click anywhere on the screen to shoot projectiles.
4. Destroy as many enemies as possible.
5. Try to beat your highest score!

## Conclusion

This game is a fun and engaging way to pass the time and improve your reflexes. Whether you're on mobile or desktop, Bubble Shooter provides an immersive experience with intuitive controls, exciting gameplay, and beautiful visual effects. Enjoy playing!

