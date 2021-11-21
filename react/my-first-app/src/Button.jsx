const Button = (props) => {
  const { title, onClick } = props;
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
