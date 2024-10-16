https://musical-valkyrie-340301.netlify.app/

# Daily Expense Tracker

This is a simple and efficient application for tracking your daily expenses. The app is built with **React** and uses **useReducer** and **Context API** for state management. It stores data locally using **localStorage**, so your expenses persist even after you close the app. The app also includes a **custom hook** to easily access the context where needed.

## Features

- **Track daily expenses**: Add, edit, and delete your expenses.
- **Persistent storage**: Expenses are saved in `localStorage`, so you don't lose your data on refresh.
- **Calendar view**: Select dates for specific expenses.
- **Progress bar**: Visualize your spending progress.
- **Responsive and accessible**: Built with `@headlessui/react` and `@heroicons/react` for a clean UI.
- **Custom hook**: Access the state via a custom hook that wraps around the Context API.

## Screenshots

Here are some screenshots of the app:

![Home Page](./home.png)
![Expense List](./list1.png)
![Expense List](./list2.png)

## Dependencies

Here is a list of the main dependencies used in this project:

- **[@headlessui/react](https://headlessui.dev/)**: A set of completely unstyled, fully accessible UI components.
- **[@heroicons/react](https://heroicons.com/)**: Beautiful hand-crafted SVG icons for your React projects.
- **[prop-types](https://www.npmjs.com/package/prop-types)**: Typechecking for React props to ensure proper use of components.
- **[react](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[react-calendar](https://www.npmjs.com/package/react-calendar)**: A customizable calendar component for React.
- **[react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar)**: A circular progress bar component for React.
- **[react-date-picker](https://www.npmjs.com/package/react-date-picker)**: A date picker for selecting dates.
- **[react-dom](https://www.npmjs.com/package/react-dom)**: React library for rendering components to the DOM.
- **[react-swipeable-list](https://www.npmjs.com/package/react-swipeable-list)**: A swipeable list component for creating actions like deleting or editing items.
- **[uuid](https://www.npmjs.com/package/uuid)**: A library for generating unique IDs, used to uniquely identify each expense.
