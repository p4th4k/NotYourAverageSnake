<div style="display: flex; align-items:center; gap: 1em;">
<img src="./frontend/images/favicon.png" width="50px" height="50px"/>
<h1>NotYourAverageSnake</h1>
</div>

NotYourAverageSnake is an enhanced and modern twist on the classic snake game. While preserving the nostalgic charm of the original, it introduces exciting features like bombs, shields, and poisoned apples.

Live Demo: [NotYourAverageSnake](https://p4th4k.github.io/NotYourAverageSnake/frontend/index.html)

# Table of Contents
1. [Techstack](#techstack)
2. [Features](#features)
3. [Process](#process)
4. [Learnings](#learnings)
5. [Improvements](#improvements)
6. [Contributing](#contributing)
7. [License](#license)

# TechStack
- HTML
- CSS
- Javascript

# Features
- Classical snake gameplay with modern touch
- Introducing bombs, shields, and poisioned apples for dynamic gameplay
- Mobile-friendly design for gaming on the go
- Game UI and sound effects

# Process

It initially started as a mini weekend project to learn about canvas api. But then I decided to take it a step further and add other features such as poisionedapples, bombs etc.

With the addition of new features, the codebase started growing. So I seperated the code from a single file into multiple files. A seperate file for all the global variables and functions. A seperate file for the initilisation of the game and running the gameloop. And other components of game like the snake, food, audio into its own seperate file.

Once the game was complete, I added support for touch screen devices as well and created a simple game UI. Also I implement score and highscore functionality using localStorage.

# Learnings
- Object Oriented Programming
    - How to create and use classes
    - Inheritance

<br>

- Single Responsibility Principle
    - Seperated responsibility into its own class
    - Extracted that class into its own module

<br>

- Interface Segregation Principle
    - A class is not forced to implement a interface which it does not use

<br>

- Canvas API
    - How to setup canvas
    - Draw 2D shapes and images on it 
    - Make shapes and images move
    - Collision Detection and gameLoop

<br>

- Mobile Support 
    - How to enable mobile-friendly gameplay using 'touchstart' event listner

<br>

- localStorage API
    - Getting and setting short bits of data

<br>

- Audio
    - Finding and using Audio in game

# Improvements

- The code can be further optimised
- More Props could be added
- Implementing the functionality to host local game rooms and leaderboards
- Better UI and sound effects

# Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

# License 

[MIT](https://choosealicense.com/licenses/mit/)
