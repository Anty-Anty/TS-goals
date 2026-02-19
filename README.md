# CourseGoalsApp – Frontend

A small React + TypeScript application for creating, listing, and deleting personal course goals.
Built as a practice project to explore typed components, prop models, state updates, and component composition.

## Live demo

https://tsgoals.netlify.app/

## Tech Stack

- React (Vite)
- TypeScript
- React Hooks:
    - `useState`
    - `useRef`
- Component-based architecture
- Basic CSS styling (optional modules/styles)

## Why I Built This

I built this app to practice TypeScript in a real React workflow, focusing on:
- Strongly typed props & reusable interfaces
- Union types and custom types for component models (`CourseGoalType`)
- Managing state updates safely in React with TypeScript
- Splitting logic across smaller components
- Passing callback functions (e.g., delete handlers) with correct types
- Practicing form handling with `useRef` and event types like `SubmitEvent`

## Key Technical Decisions
<details>

### 1. Typed Goal Model

A `CourseGoalType` interface defines the structure of each goal:

```jsx
export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};
```

### 2. Controlled Data Flow

`App` manages the list of goals.

Child components pass actions upward via typed callback functions.

Prevents unnecessary complex state logic and keeps data flow predictable.

### 3. Ref-based Form Handling

NewGoal uses useRef for input collection instead of controlled components, helping practice different form approaches.

### 4. Reusable UI Components

Components such as:
- CourseGoalList
- CourseGoal
- InfoBox
- Header
show how to build small, typed, maintainable UI pieces.

</details>

## Features
🎯 Goal Management
- Add a new goal with:
    - Title
    - Short summary
- Automatically assigns an `id`
- Inputs clear after submission

🗂 Goal List
D- isplays all created goals
- Each goal shows:
    - Title
    - Description
    - Delete button
- Clicking delete removes a goal from the list (lifted state logic in `App`)

⚠️ Smart Messages
- Shows a hint box when there are no goals
- Shows a warning box when the list gets long
    (“Don’t put too much on your plate!”)

🧠 State & Typing
- Typed state management with `useState<CourseGoalType[]>`
- Strict typing for event handlers
- Callback typing for deletion handlers

## Screenshots

### Main Dashboard
![Dashboard](public/screenshots/dashboard.webp)

### Add Goal
![Add Goal](public/screenshots/add-goal.webp)

### Warning
![Warning](public/screenshots/warning.webp)