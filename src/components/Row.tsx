import Block, { type blockProps } from "./Block";

type RowProps = {
  blocks: blockProps[];
};

const Row = ({ blocks }: RowProps) => {
  return (
    <div className="row">
      {blocks.map((block) => (
        <Block key={block.index} {...block} />
      ))}
    </div>
  );
};

export default Row;
