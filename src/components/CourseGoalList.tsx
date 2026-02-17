import CourseGoal from "./CourseGoal";

import { type CourseGoalType} from "../App"

interface CourseGoalListProps {
    goals: CourseGoalType[];
    onDeleteGoal: (id:number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal
                        title={goal.title}
                        description={goal.description}
                        onDelete = {onDeleteGoal}
                        id={goal.id}
                    />
                </li>
            ))}
        </ul>
    )
};

export default CourseGoalList;