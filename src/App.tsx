import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

import { GlobalStyle } from "./styles/global";

import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id: string;
  content: string;
  isCheck: boolean;
}

const tasks: ITask[] = [
  {
    id: uuidv4(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCheck: true
  },
  {
    id: uuidv4(),
    content: 'Acordar 6h',
    isCheck: true
  },
  {
    id: uuidv4(),
    content: 'Estudar javascript',
    isCheck: true
  }
]

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Input />
      <Dashboard tasks={tasks}/>
    </>
  )
}

export default App
