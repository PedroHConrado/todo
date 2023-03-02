import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Container } from "./styles";

interface InputProps {
  addTask: (task: string) => void;
}
export function Input({ addTask }: InputProps) {
  const [task, setTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();

    addTask(task);

    setTask("");
  }
  return (
    <Container>
      <form onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicone uma nova tarefa"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button type="submit">
          Criar
          <PlusCircle className="plus" size={16} />
        </button>
      </form>
    </Container>
  );
}
