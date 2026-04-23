# 🎒 Far Travel

A simple packing list application built with **React**. This project was developed as a practical exercise while I was taking a React course on **Udemy** to strengthen my frontend foundations.

## Main Features

- **Dynamic Adding:** Users can add items with specific quantities to their travel list.
- **Status Tracking:** Items can be toggled as "packed" with a visual strike-through effect.
- **Custom Sorting:** The list can be sorted by input order, alphabetical description, or item quantity.
- **Real-time Stats:** A footer that calculates the total items and the percentage of items already packed.

* **Batch Actions:** Includes a "Clear List" feature with a confirmation prompt for safety.

## What I Practiced

Through this project, I applied several core React concepts:

- **Component-Based Architecture:** Splitting the UI into reusable components like `Logo`, `Form`, `PackingList`, and `Stats`.
- **Lifting State Up:** Moving the `items` state to the parent `App` component to allow data sharing between sibling components.
- **Controlled Components:** Managing form inputs (`input` and `select`) using React state.
- **Immutability:** Updating arrays and objects using the spread operator (`...`) and non-mutating methods like `.map()` and `.filter()`.
- **Derived State:** Learning to calculate values (like percentage) on-the-fly instead of creating unnecessary extra states.

## 🛠 Tech Stack

- **Framework:** React.js
- **Logic:** JavaScript (ES6+)
- **Styling:** CSS

---

_This is one of my early steps in mastering React. I am focused on learning the right way to manage data flow and building cleaner, more modular code._
