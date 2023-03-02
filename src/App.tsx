import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

import { GlobalStyle } from "./styles/global";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export interface ITask {
  id: string;
  content: string;
  isCheck: boolean;
}

const tasks: ITask[] = [];

function App() {
  const [newTasks, setNewTasks] = useState<ITask[]>([]);

  function createNewTask(task: string) {
    setNewTasks([...newTasks, {
      id: uuidv4(),
      content: task,
      isCheck: false
    }])
  }

  function deleteTask(taskID: string) {
    const tasksWithoutDeletedOne = newTasks.filter(task => {
      return task.id !== taskID
    })
    console.log(tasksWithoutDeletedOne)
    setNewTasks(tasksWithoutDeletedOne)
  }

  function changeCheck(taskID: string) {
    const completedTasks = newTasks.map(task => {
      if(task.id === taskID){
        return {
          ...task, 
          isCheck: !task.isCheck
        }
      }
      return task;
    });
    console.log(completedTasks)
    setNewTasks(completedTasks);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Input addTask={createNewTask} />
      <Dashboard changeCheck={changeCheck} deleteTask={deleteTask} tasks={newTasks} />
    </>
  );
}

export default App;
