# Tamagotchi Lab - Lab Exercise Intro

![Hero image](./assets/hero.png)

In this lab, you will build a Tamagotchi game incorporating the web technologies and techniques you've worked with thus far:

- Git
- HTML
- CSS
- JavaScript
- DOM Manipulation

## Minimum Requirements

- Display three buttons when the page is initially displayed.
- Display three stats that randomly increment a value between 0 and 3 at a set interval.
- A player can click on a button to set the corresponding stat to `0`.
- Provide lose logic, and display a losing message.
- Provide a `Play Again` button that will reset the game.

## Items of note

- Using `id`/`class` attributes will help you target elements for styling and wiring up your click event listeners. These have already been added for you in this lab!
- Programs, including games, frequently focus on manipulating and displaying that data to a user. Decide on the data structures held in variables you will use to maintain the game's state (its current data or status).
- Lots of little functions with small jobs help accomplish big things!

## Pseudocode 

Pseudocode is a detailed description of what an application must do, written in natural language instead of a particular programming language.

Well-written pseudocode should be easily translated into actual code. The best way to get started is to start with the big picture of what the app needs to do:

```
1) Define the required variables used to track the state of the game.

2) Store cached element references.

3) Upon loading, the game state should be initialized, and a function should be 
   called to render this game state.

4) The state of the game should be rendered to the user.

5) Handle each instance of a player clicking a button with the use of a `handleClick` function.

6) Handle game over logic.  

7) Create Reset functionality.
```

Next, we can start expanding on these steps with detailed pseudocode.

The remainder of this exercise walks through those steps. Follow along from start to finish, and you'll have a complete game of Tamagotchi that meets the minimum requirements!

