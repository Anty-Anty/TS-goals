import { useState } from "react";

import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from './assets/goals.jpg';

type CourseGoalType = {
  title: string;
  description: string;
  id: number;
}

const App = () => {

  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  const addGoalHandler = () => {
    const newGoal: CourseGoalType = {
      id: Math.random(),
      title: "Learn React + TS",
      description: "Have fun!"
    };
    setGoals(prevGoals => {

      return [...prevGoals, newGoal]
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>

      <button onClick={addGoalHandler}>Add Goal</button>

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              description={goal.description}
            />
          </li>
        ))}
      </ul>

    </main>
  );
}

export default App