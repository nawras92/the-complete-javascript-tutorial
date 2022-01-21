import { useSelector } from "react-redux";
import Level2 from "./Level2";
const Level1 = () => {
  const value = useSelector((state) => state.getValue.value);

  return (
    <div
      style={{ backgroundColor: "tomato", margin: "1rem", padding: "1.2rem" }}
    >
      <h2>Level 1 </h2>
      <p>the value in level1 is: {value} </p>
      <Level2 xValue={value} />
    </div>
  );
};

export default Level1;
