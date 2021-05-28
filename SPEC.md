# Frontend Take-Home

The objective of this take-home assignment is to create a simple
shopping cart experience for adopting cats.

## Notes:

- You are not required to use our tech stack (React), but it is preferred.

- You will be evaluated on the quality of the code, which includes (but not limited to) the following dimensions

  - Structure of components

  - Code organization

  - Testing

  - Correctness and adherence to the business logic rules

- Feel free to use any pre-existing CSS/styling template

- Please spend at most 4 hours on this

## Layout:

- Single page with a "shopping cart" icon (or whatever you feel is appropriate) in a fixed toolbar at the top of the page

  - Clicking on the cart should load a popup displaying the cats that have been added, along with the total adoption cost

  - You **do not** need to implement anything beyond this point (e.g. checkout button/experience)

- The type of cat, image, and adoption cost should be represented in a grid (feel free to be creative with how the information is presented)

- The app should support responsive layouts with at least two breakpoints:

  - "Desktop" resolution (we'll let you decide what makes sense here)

  - "Smartphone" resolution (we'll let you decide what makes sense here)

## Business Logic

- Cat adoption rules

  - The cat data should be loaded as a GET request from this endpoint: [[https://60a45748fbd48100179dbe04.mockapi.io/frontend/items]{.ul}](https://60a45748fbd48100179dbe04.mockapi.io/frontend/items)

    - Currently the data is fixed, but the app should support a dynamic number of items

  - You can only adopt 1 kind of each cat, and can adopt at most 3 cats at once
