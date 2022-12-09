import React, {useState} from 'react'
import Project from "../../components/Project"


export default function Portfolio() {
    const [tasks, setTasks] = useState(["project 1", "project 2", "project 3"])
    return (
        <ul>
            {tasks.map((item,i)=><Project key={i} task={item}/>)}
        </ul>
    )
}