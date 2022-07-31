const MyColors = () => {
  const colors = ['red', 'blue', 'yellow', 'black'];
  return (
    <div>
      {colors.map((color, index) => {
        return <h5 key={index}>{color}</h5>;
      })}
    </div>
  );
};
export default MyColors;
