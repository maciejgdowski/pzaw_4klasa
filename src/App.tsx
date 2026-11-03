import { useEffect, useState } from "react"

interface ITask {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">("all");
  const [sort, setSort] = useState<"alpha" | "state" | "original">("original");
  const [search, setSearch] = useState("");

  const changeCompletion = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    )
  }
  const handleDeletion = (id: number) => {
    setTasks(oldTasks => oldTasks.filter((task) => task.id !== id))
  }

  useEffect(() => {
    console.log("tasks: ", tasks);
  }, [tasks])

  useEffect(() => {
    console.log("filter:", filter)
  }, [filter])

  useEffect(() => {
    if (sort == "alpha"){
      tasks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort == "state"){
      tasks.sort((a, b) => Number(b.completed) - Number(a.completed));
    }
  }, [sort])



  useEffect(() => {
    if (search.trim().length === 0) return;

    console.log("search: ", search);
    tasks.map((task) => {
      console.log(task.name.includes(search))
      if (task.name.includes(search)) {
        return task
      }
    })
  }, [search])

  return (
    <div className="container">
      <form onSubmit={(e) => {
        e.preventDefault();
        if (newTask.trim().length === 0) return;
        const task = {
          id: Math.random(),
          name: newTask,
          completed: false
        }
        setTasks(prevTasks => [...prevTasks, task])
        setNewTask("");
      }} className="d-flex gap-2 mt-2 mb-4">
        <input className="form-control" type="text" name="newTask" id="newTask" placeholder="Add a new task" onChange={(e) => setNewTask(e.target.value)} value={newTask} />
        <button type="submit" className="btn btn-primary fw-bold">+</button>
      </form>

      <input type="text" name="" id="" placeholder="Znajdz task" value={search} onChange={(e) => setSearch(e.target.value)} />

      <div>
        <div className="d-flex gap-2">
          <span onClick={() => setFilter("all")}>Wszystkie</span>
          <span>|</span>
          <span onClick={() => setFilter("completed")}>Wykonane</span>
          <span>|</span>
          <span onClick={() => setFilter("uncompleted")}>Niewykonane</span>
        </div>
        {
          tasks.length > 0 ? (
            <>
              {
                filter === "all" ? (
                  tasks.map(task => (
                    <div className="w-100 d-flex justify-content-between align-items-center border gap-2 rounded p-2" key={task.id}>
                      <input type="checkbox" name="completed" checked={task.completed} onChange={(e) => changeCompletion(task.id)} />
                      <span className="flex-grow-1 fs-5">{task.name}</span>
                      <button type="button" onClick={() => handleDeletion(task.id)}>Delete</button>
                    </div>
                  ))
                ) :
                  filter === "completed" ? (
                    tasks.filter((task) => task.completed).length > 0 ? (
                      tasks.filter((task) => task.completed).map(task => (
                        <div className="w-100 d-flex justify-content-between align-items-center border gap-2 rounded p-2" key={task.id}>
                          <input type="checkbox" name="completed" checked={task.completed} onChange={(e) => changeCompletion(task.id)} />
                          <span className="flex-grow-1 fs-5">{task.name}</span>
                          <button type="button" onClick={() => handleDeletion(task.id)}>Delete</button>
                        </div>
                      ))
                    ) : (<div>
                      nie ma takich zadań
                    </div>)
                  ) :
                    tasks.filter((task) => !task.completed).length > 0 ? (
                      tasks.filter((task) => !task.completed).map(task => (
                        <div className="w-100 d-flex justify-content-between align-items-center border gap-2 rounded p-2" key={task.id}>
                          <input type="checkbox" name="completed" checked={task.completed} onChange={(e) => changeCompletion(task.id)} />
                          <span className="flex-grow-1 fs-5">{task.name}</span>
                          <button type="button" onClick={() => handleDeletion(task.id)}>Delete</button>
                        </div>
                      ))
                    ) : (<div>
                      Brak takich zadań
                    </div>)
              }
              <div className="d-flex gap-2 mt-3">
                Pozostało zadań do wykonania: {tasks.filter((task) => !task.completed).length}
                <button onClick={() => setTasks(oldTasks => oldTasks.filter((task) => !task.completed))}>Usuń wykonane</button>
              </div>
            </>
          ) :
            <div>
              Nie masz jeszcze zadań
            </div>
        }
      </div>
    </div>
  )

}

export default App
