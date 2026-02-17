interface CourseGoalProps {
    title: string;
    description: string;
    id: number;
    onDelete: (id:number) => void;
}

const CourseGoal = (props: CourseGoalProps) => {
    return (
        <article>

            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>

            <button onClick={() => props.onDelete(props.id)}>
                Delete
            </button>

        </article>
    )
}


export default CourseGoal