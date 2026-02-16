interface CourseGoal {
    title: string;
    description: string;
}

const CourseGoal = (props: CourseGoal) => {
    return (
        <article>

            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>

            <button>
                Delete
            </button>

        </article>
    )
}


export default CourseGoal