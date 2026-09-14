## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a way of writing HTML-style code inside JavaScript.I used it because it makes the structure of the webpage easier to understand when I write React components.

### 2. What is the difference between props and state?

Props are values that one component sends to another component.State is data that can change inside a component.For example, the selected technologies are stored in state because users can add or remove them.

### 3. What does the useState hook do, and where did you use it in this project?

The useState hook helps us store data that may change later. In this project, I used it for the technology data, loading status, selected stack, and mobile menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook runs some code when the component loads or updates. I used it to fetch the technology data from the JSON file when the website starts.

### 5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list. It helps React understand which item has changed, been added, or been removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different things based on a condition. In my project, I show Loading technologies.while the data is loading. I also show the empty stack message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. A child can receive a function as a prop and call that function when something happens. For example, the TechnologyCard component receives the Add to Stack function from App and calls it when the user clicks the button.