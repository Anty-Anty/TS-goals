import { useRef, type SubmitEvent } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    const submitHandler = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        e.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    };



    return (
        <form onSubmit={submitHandler}>
            <p>
                <label htmlFor="goal">
                    Your goal
                </label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">
                    Short summary
                </label>
                <input id="summary" type="text" ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal;