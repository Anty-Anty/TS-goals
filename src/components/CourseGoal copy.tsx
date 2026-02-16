// import CourseGoal from "./components/CourseGoal copy";

// const App = () => {
//   return (
//     <main>
//       <CourseGoal title="Learn Teact + TS">
//         <p>Learn it from ground up</p>
//       </CourseGoal>
//     </main >
//   );
// }
 
// export default App;

// OPTION WITH CHILDREN prop

import { type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal = (props: CourseGoalProps) => {
    return (
        <article>

            <div>
                <h2>{props.title}</h2>
                {props.children}
            </div>

            <button>
                Delete
            </button>

        </article>
    )
}


export default CourseGoal