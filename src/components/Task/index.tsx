import { Circle, Trash } from "phosphor-react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ITask } from "../../App";
import { Container } from "./styles";

interface TaskProps {
  id?: string;
  task: ITask;
  deleteTask: (taskID: string) => void;
  changeCheck: (taskID: string) => void;
}

export function Task({ task, deleteTask, changeCheck}: TaskProps) {
  return (
    <Container>
      {(task.isCheck) ? (
        <>
        <button>
            <BsFillCheckCircleFill
              className="isCheck"
              size={17.45}
              color="#5E60CE"
              onClick={() => changeCheck(task.id)}
            />
          </button>
          <span className="isCheck">{task.content}</span>
        </>
      ) : (
        <>
          <button onClick={() => changeCheck(task.id)}>
            <Circle size={17.45} color="#4EA8DE"/>
          </button>
          <span>{task.content}</span>
        </>
      )}

      <button onClick={() => deleteTask(task.id)}>
        <Trash className="trash" size={24} color="#808080" />
      </button>
    </Container>
  );
}
