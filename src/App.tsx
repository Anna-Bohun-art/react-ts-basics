import { useState } from 'react';

import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';
import Header from './components/Header.tsx';
import goalsImage from './assets/goals.jpg';
import {  } from './components/NewGoal.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}
export default function App() {
  const[goals, setGoals] = useState<CourseGoal[]>([]);
  function handleDeleteGoal(id: number):void{
    setGoals(prevGoals=> prevGoals.filter((goal)=> goal.id !==id)
    )
  }
  function handleAddGoal(goal: string, summary:string){
    setGoals(prevGoals => {
      const newGoal: CourseGoal= {
        id: Math.random(),
        title: goal,
        description: summary,
    }
      return [...prevGoals, newGoal];
    });
  } 
  return(
  <main>
    <Header image={{src:goalsImage, alt: "a list of goals"}}>
      <h1>
        Your Course Goals
      </h1>
    </Header>
    <NewGoal onAddGoal={handleAddGoal}/>
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
  </main>
  );
}
