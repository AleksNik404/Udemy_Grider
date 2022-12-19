interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const Child2: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// export const Child = ({ color }: ChildProps) => {
//   return <div>{color}</div>;
// };
