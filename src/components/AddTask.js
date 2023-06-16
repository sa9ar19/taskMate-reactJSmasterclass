
export const AddTask = ({taskList, setTaskList, task, setTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        if(task.id) {
            const date = new Date()
            const updatedTasklist = taskList.map((todo) => (
                todo.id === task.id ? {id: task.id, name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
            ))
            setTaskList(updatedTasklist);
            setTask({})
        }
        else {
            const date = new Date()
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newTask])
            setTask({})
        }
        
    }

  return (
    <div className="addTask">
        <form onSubmit={handleSubmit}> 
            <input type="text" value={task.name || ""} name="task" placeholder="add task" autoComplete="off" onChange={e => setTask({...task, name: e.target.value})} />
            <button type="submit">{task.id ? "Update" : "Add"}</button>
        </form>
    </div>
  )
}
