import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App";
import InfoBox from './InfoBox.tsx';
import { type ReactNode } from 'react';

type CourseGoalListProps = {
    goals: CourseGoalType[];
    onDeleteGoal: (id: number)=> void;
  }
export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps){
  if(goals.length === 0){
    return <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
    </InfoBox>
  }
  let warningBox: ReactNode;
  if(goals.length >= 4){
    warningBox =(
      <InfoBox mode="warning" severity='high'>
        You're collecting too much goals. Don't put too much on your plate!
     </InfoBox>
    );
    return warningBox;
  }
    return(
      <>
        {warningBox}
        <ul>
          {goals.map((goal)=> {
          return(
            <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete= {onDeleteGoal}>
                <p>
                  {goal.description}
                </p>
              </CourseGoal>
            </li>
          )   
        })}
      </ul>
    </>
    )
}