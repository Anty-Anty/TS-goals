import { useState } from "react";

import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import NewGoal from "./components/NewGoal";


import goalsImg from './assets/goals.jpg';

export type CourseGoalType = {
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

  const deleteGoalHandler = (id: number) => {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal/>

      <CourseGoalList
        goals = {goals}
        onDeleteGoal = {deleteGoalHandler}
      />

    </main>
  );
}

export default App