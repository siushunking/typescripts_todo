import React, { FC, useState,ChangeEvent } from 'react';
import Fetch from './components/fetch';
import { ITask } from './interfaces/interfaces';

const App:FC =()=>{
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void  =>{
   if(event.target.name === 'task'){
    setTask(event.target.value)
   }else{
    setDeadline(Number(event.target.value))
   }
  }

  const addTask = (): void=> {
    const newTask = {taskName: task, deadline: deadline}
    setTodoList([...todoList, newTask])
    console.log(todoList);
    setTask('')
    setDeadline(0)
  }
 

  return (
    <div >
        <div>
        <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        <button onClick={addTask}>Add Task</button>
        </div>
         
         {todoList.map((item: ITask, key: number)=>
          {return <div> {item.taskName} </div>}
         )}

        <Fetch />
 
    </div>
  );
}

export default App;
