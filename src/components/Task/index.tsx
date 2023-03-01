import { CheckCircle, Circle, Trash } from "phosphor-react";
import { Container } from "./styles";

interface TaskProps {
  id?: string;
  content: string;
  isCheck: boolean;
}

export function Task({content, isCheck }: TaskProps) {
  return (
    <Container>
      <button>
        <Circle size={24} color="#4EA8DE" />
      </button>
      <span>
        {content}
      </span>
      <button >
        <Trash className="trash" size={24} color="#808080" />
      </button>
    </Container>
  );
}