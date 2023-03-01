import { PlusCircle } from "phosphor-react";
import { Container } from "./styles";


export function Input() {
  return (
    <Container>
      <input type="text" placeholder="Adicone uma nova tarefa" />
      <button>
        Criar
        <PlusCircle className="plus" size={16} />
      </button>
    </Container>
  )
}