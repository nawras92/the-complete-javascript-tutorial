export default function PageHeader(props) {
  const { title } = props;
  return (
    <header className="page-header">
      <h1 className="page-heading">{title}</h1>
    </header>
  );
}
