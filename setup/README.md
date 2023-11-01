# ![JavaScript Browser Game - Tamagotchi Lab - Setup](./assets/hero.png)

## Setup 

Open your Terminal application and navigate to your ~/code/ga/labs directory:

```bash
cd ~/code/ga/labs
```

Make a new directory called `tamagotchi-lab`, then enter this directory:

```bash
mkdir tamagotchi-lab
cd tamagotchi-lab
```

Then, create a `js` directory, and a `css` directory. You can make both of these directories at the same time by adding a space between them after the mkdir command!

```bash
mkdir js css
```

Next, create an `app.js` file in the `js` directory, a `style.css` file in the `css` directory, and an `index.html` file in the root of the project. Create all of these files at the same time by adding a space between them after the touch command. These files will hold your work for this lab:

```bash
touch ./js/app.js ./css/style.css index.html
```

With the files created, open the contents of the directory in VS Code:

```bash
code .
```

### Starter code

There is some starter code associated with this lab. First the HTML for your `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tamagotchi</title>
    <link rel="stylesheet" href="./css/style.css" />
    <script src="./js/app.js" defer></script>
  </head>

  <body>
    <header>
      <h1>Tamagotchi</h1>
    </header>
    <main>

      <!-- game interface / UI section -->
      <section class="button-wrapper">
        <button id="play">play</button>
        <button id="feed">feed</button>
        <button id="sleep">sleep</button>
      </section>

      <!-- game data section -->
      <section class="stats-wrapper">
        <p>Boredom: 
          <span id="boredom-stat">...</span>
        </p>
        <p>Hunger: 
          <span id="hunger-stat">...</span>
        </p>
        <p>Sleepiness:
          <span id="sleepiness-stat">...</span>
        </p>
      </section>

      <!-- game display / messaging section -->
      <section class="game-state-wrapper">
        <h2 id="message" class="hidden">
          Oh no! You Lose!
        </h2>
        <img 
          src="../assets/wolf-1.png" 
          class="game-graphic" 
          alt="a cute pixelated wolf" 
        />
        <button id="restart" class="hidden">Play Again</button>
      </section>
      
    </main>
  </body>
</html>
```

Next, add this CSS into your `css/style.css` file: 

```css
/* global styles  */
* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-color: #e6e6e6;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

/* element styles */
h1 {
  font-size: 3.5rem;
}

h2 {
  font-size: 1.7rem;
}

/* headings */
header {
  text-align: center;
}

/* layout */
main {
  max-width: 90vw;
  margin: 0 auto;
}

.button-wrapper {
  display: flex;
  justify-content: space-around;
}

.stats-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}

.game-state-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* button styling*/
button {
  font-size: 1.5rem;
  line-height: 1em;
  padding: 1.5rem;
  background-color: #4597f8;
  color: white;
  border: 0;
  border-radius: 0.5rem;
  transition: background-color 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

button:hover {
  background-color: #3880d7;
}

button:active {
  background-color: #2e6bb6;
}

/* images */
.game-graphic {
  max-height: 33vmin;
}

.hidden {
  visibility: hidden;
}

```

Finally, there is a bit of optional boilerplate you can add to your JavaScript to make it easier to find sections inside of it. Add it to your js/app.js if you'd like.

```javascript
/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

```

## Start the app

Open the `index.html` file in your browser and access the console output in your browser's dev tools.