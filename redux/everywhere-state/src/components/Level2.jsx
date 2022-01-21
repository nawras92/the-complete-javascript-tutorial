import { useSelector } from "react-redux";
import Level3 from "./Level3";
const Level2 = (props) => {
  const value = useSelector((state) => state.getValue.value);

  return (
    <div style={{ backgroundColor: "gray", margin: "1rem", padding: "1.2rem" }}>
      <h2>Level 2 </h2>
      <p>the value in level2 is: {value} </p>
      <Level3 />
    </div>
  );
};

export default Level2;
