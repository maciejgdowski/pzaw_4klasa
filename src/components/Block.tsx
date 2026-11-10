import Cross from "./Cross";
import Circle from "./Circle";

export type Mark = "X" | "O";

export interface blockProps {
  index: number;
  value: Mark | null;
  onClick: (index: number) => void;
}

const Block = ({ index, value, onClick }: blockProps) => {
  return (
    <div className="col-4 p-0" onClick={() => onClick(index)}>
      <div className="bg-danger m-1 position-relative ratio-1x1" style={{ padding: "6rem" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center p-3 overflow-hidden">
          {value === "X" ? <Cross /> : value === "O" ? <Circle /> : null}
        </div>
      </div>
    </div>
  );
};

export default Block;
