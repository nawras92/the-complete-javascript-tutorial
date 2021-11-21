import { Link } from "react-router-dom";
export default function Header(props) {
  const { title, text } = props;
  const style = {
    color: "#fff",
    textDecoration: "none",
  };
  return (
    <header className="header">
      <h1 className="header-heading">{title}</h1>
      <p className="header-text">{text}</p>
      <nav className="header-nav">
        <li className="header-nav-item">
          <Link to="/" style={style}>
            Home
          </Link>
        </li>
        <li className="header-nav-item">
          <Link to="/blog" style={style}>
            Blogs
          </Link>
        </li>
      </nav>
    </header>
  );
}

Header.defaultProps = {
  title: "My website",
  text: "this is my text",
};
