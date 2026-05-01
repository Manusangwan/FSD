import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { addTodo } from "../redux/actions"

export default function TodoForm(){
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const [task, setTask] = useState("");

    return(
        <div>
            <form onSubmit={(e)=> e.preventDefault()}>
                <input
                type = "text"
                value = {task}
                placeholder="Enter the task "
                onChange={(e)=> setTask(e.target.value)}
                />
                <button onClick={()=> dispatch(addTodo(task))}> Add </button>
            </form>
            {todos.map((task)=>{
                return(
                    <div key={task.id}>{task.text}</div>
                )
            })}
        </div>
    )
}