import { useState } from "react"
export default function App() {
  const [task, setTask] = useState([])
  const [newtask, setNewtask] = useState("")
  const deleteTask = (index)=>{
    setTask(task.filter((_,i)=> i!=index))
  }
  const toggleTask = (index)=>{
    const copy = [...task]
    copy[index].completed = !copy[index].completed
    setTask([...copy])
  }

  const submitHandle=(e)=>{
    e.preventDefault()
    if(newtask.trim()===""){
      
      setNewtask("")

      return
    }
    if(task.some((item)=> item.name.toLowerCase()=== newtask.toLowerCase())){
      alert("task already exist")
      setNewtask("")
      return
    }
    console.log(newtask)
    setTask([...task, {name: newtask, completed: false}])
    setNewtask("")
    console.log(task)
  }
  return (
    <div>
      <h3>to do app</h3>
      <form onSubmit={(e)=> submitHandle(e)}>
        <input type="text" placeholder="enter task" value = {newtask} onChange={(e)=> setNewtask(e.target.value)}/>
        <button>add task</button>
      </form>
      {task.map(function(ele, index){
        return <div key={index}> <h4>{ele.name}</h4>
        <button onClick={()=> deleteTask(index)}> delete </button>
        <button onClick={()=>toggleTask(index)}>{ele.completed? "Undo":"Done"}</button>
        </div>
      })}
    </div>
  )
}