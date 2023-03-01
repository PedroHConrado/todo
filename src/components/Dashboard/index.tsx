import { Container } from "./styles";
import Clipboard from "../../assets/Clipboard.svg";
import { Task } from "../Task";
import { ITask } from "../../App";

interface DashboardProps {
  tasks: ITask[];
}

export function Dashboard({ tasks }: DashboardProps) {
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
          <>
            <img src={Clipboard} alt="Clipboard" />
            <h3>Voce ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </>
        ) : (
          <>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  content={task.content}
                  isCheck={task.isCheck}
                />
              );
            })}
          </>
        )}
      </main>
    </Container>
  );
}
