import { useSelector } from "react-redux";
import Level4 from "./Level4";
const Level3 = () => {
  const value = useSelector((state) => state.getValue.value);

  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        margin: "1rem",
        padding: "1.2rem",
      }}
    >
      <h2>Level 3 </h2>
      <p>the value in level3 is: {value} </p>
      <Level4 />
    </div>
  );
};

export default Level3;
