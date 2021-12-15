import MUISwitch from "@mui/material/Switch";

const Switch = (props) => {
  const { checked, onChange } = props;
  return <MUISwitch checked={checked} onChange={onChange} />;
};

export default Switch;
