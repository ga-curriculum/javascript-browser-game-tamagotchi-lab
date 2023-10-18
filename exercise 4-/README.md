# Tamagotchi Lab - Lab Exercise 4

![Hero image](./assets/hero.png)

## Step 4

#### The state of the game should be rendered to the user. 

a. Create an empty function called `render()`, then set it aside for now. 

b. Create a function called `updateStates()`.

c. In the `updateStates()` function, increment each property of  `state` by a random number between 0 and 3. 
> 💡 While not strictly necessary, a helper function that handles the logic of generating a random number might be helpful here! 

d. Remove the console.log in `runGame()`. Then, inside `runGame()`, invoke `updateStates()` and `render()`.

e. Inside `render()`, assign each cached stat element's [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) to their corresponding property in `state`. 
> 💡 For example, boredomStatEl's textContent would be set equal to state.boredom. 

Let's pause a second to run through the current flow of our program. When the page loads, we call `init()`. `init()` starts a timer that calls `runGame()` every 2000 milliseconds. 

`runGame()` calls `updateStates()`, which increments each of the stats in our `state` variable by a random number between 0-3. Once this happens, `runGame()` calls `render()`. `render()` updates the user interface to reflect the current state of each stat. 

Then, around two seconds later, `runGame()` is called again. Our state updates. We render these changes to the UI. Two seconds later, `runGame()` is called again - the whole process repeats on and on. 

For now, we don't have any condition by which this timer will end, so we've made something of an endless loop! We'll address that in the next step! 

## Step 5

#### 