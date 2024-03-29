# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Running the app](#running-the-app)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Logic](#logic)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](./public/screenshot.png "Screenshot of app interface")

### Links

- Solution URL: [GitHub - https://github.com/Eugene-ak/Password-Generator.git](https://github.com/Eugene-ak/Password-Generator.git)
- Live Site URL: [Live Site](https://password-generator-beige-nine.vercel.app/)

### Running the app

To start the development server, use the command `npm run dev`

To build the application for production mode, use `npm run build`

## My process

### Built with

- Typescript
- [Vite](https://vitejs.dev/guide/) - Framework
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### Logic

The app determines the strength state of the password based on the following conditions:

- If the length of the password is 4 characters or less, the password becomes `too weak`.

- If the password is 5 characters long, the following applies:
  - If the type of characters to include is 3 or less, the password strength is `too weak`.
  - On the other hand, if the type of characters to include is more than 3, the password strength is `weak`. This is better than `too weak`.

- If the password to be generated is 6 or 7 characters long, the following applies:
  - If the type of characters to include is 2 or less, the password strength will be `too weak`.
  - If the type of characters to include is 3, the password strength will be `weak`.
  - If all four types of characters are to be included, it will have a `medium` strength.

- If the length of characters is 8 and above (maximum of 20), the following applies:
  - If the type of characters to include is only 1, the strength is `too weak`.
  - If the type of characters to include is 2, the strength is `weak`.
  - If the type of characters to include is 3, the strength is `medium`.
  - If all 4 types are selected, the strength is `strong`.

The hierarchy of strength states in ascending order is `too weak` > `weak` > `medium` > `strong`.

#### NB: When a length of 0 or none of the checkboxes are checked, no password will be generated.

### What I learned

- This project has taught me how to use styled components for styling in react applications. Below is an     example snippet;
```css
import styled from "styled-components";

export const StyledHeader = styled.h4`
  width: 540px;
  margin: 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #817d92;

  @media screen and (max-width: 580px) {
    width: 343px;
  }
`;
```

This style can then be used as a custom component for all h4 elements. Example;
```html
<StyledHeader>Password Generator</StyledHeader>
```


- I also learned a new algorithm for suffling items in an array. This is known as the *Fisher-Yates* algorithm. It is also known as *Knuth* algorithm.
```js
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
```

## Author

- Website - [Eugene K. S. Amedior](https://portfolio-website-27ll.onrender.com/)
- Frontend Mentor - [@Eugene-ak](https://www.frontendmentor.io/profile/Eugene-ak)
- Twitter - [@Eugene_aks](https://twitter.com/Eugene_aks)
