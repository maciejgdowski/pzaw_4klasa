import { useState, type ReactNode } from "react";

const FoldableTitle = ({ title, children }: { title: string; children: ReactNode }) => {
  const [isFolded, setIsFolded] = useState(false);
  return (
    <>
      <h1 className="my-3">
        {title}
        <span role="button" onClick={() => setIsFolded(!isFolded)}>
          {isFolded ? "⏵" : "⏷"}
        </span>
      </h1>
      {!isFolded && children}
    </>
  );
};

export default FoldableTitle;
