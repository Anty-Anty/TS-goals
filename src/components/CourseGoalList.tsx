import type { ReactNode } from 'react';

import CourseGoal from "./CourseGoal";

import { type CourseGoalType } from "../App"

import InfoBox from "./InfoBox";

interface CourseGoalListProps {
    goals: CourseGoalType[];
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {

    if (goals.length === 0) {
        return (
            <InfoBox mode='hint'>
                You have no course goals yet. Start adding some!
            </InfoBox>
        )
    };

    let warningBox: ReactNode;

    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode="warning">
                You are collecting a lot of goals. Don't put too much on your plate!
            </InfoBox>
        );
    }

    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal
                            title={goal.title}
                            description={goal.description}
                            onDelete={onDeleteGoal}
                            id={goal.id}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
};

export default CourseGoalList;