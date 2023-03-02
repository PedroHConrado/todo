import { Container } from "./styles";
import Clipboard from "../../assets/Clipboard.svg";
import { Task } from "../Task";
import { ITask } from "../../App";

interface DashboardProps {
  deleteTask: (taskID: string) => void;
  changeCheck: (taskID: string) => void;
  tasks: ITask[];
}

export function Dashboard({ tasks, deleteTask, changeCheck }: DashboardProps) {
  return (
    <Container>
      <header>
        <div>
          <span className="tasks">Tarefas criadas</span>
          <span className="quantity">{tasks.length}</span>
        </div>
        <div>
          <span className="completed">Concluidas</span>
          <span className="quantity">{tasks.length}</span>
        </div>
      </header>
      <main>
        {(tasks.length < 1) ? (
          <div className="no-task">
            <img src={Clipboard} alt="Clipboard" />
            <h3>Voce ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <div className="with-task">
            {tasks.map(task => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  changeCheck={changeCheck}
                />
              );
            })}
          </div>
        )}
      </main>
    </Container>
  );
}
