import { /*type ReactNode,*/ /*type FC,*/ type PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
    id:number;
    title: string;
    onDelete: (id: number)=> void;
}>;

export default function CourseGoal({ id, title, children, onDelete}: CourseGoalProps){
    return(
        <article>
        <div>
            <h2>
                {title}
            </h2>
            <p>{children}</p>
            <button onClick={()=> onDelete(id)}>Delete</button>
        </div>
    </article>
    )
}
//export default CourseGoal;

/*export default function CourseGoal({ title, children
}: CourseGoalProps){
    return(
        <article>
            <div>
                <h2>
                    {title}
                </h2>
                <p>{children}</p>
                <button>Delete</button>
            </div>
        </article>
    )
}*/