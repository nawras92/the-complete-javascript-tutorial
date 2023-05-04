export function GeneralControls(props) {
  const { showAll = true, showAdd = true } = props;
  return (
    <div className="controls">
      {showAll && (
        <a href="/" className="button button-info">
          All Recipes
        </a>
      )}
      {showAdd && (
        <a href="/add" className="button button-success">
          Add Recipe
        </a>
      )}

      <style jsx>
        {`
          .controls {
            background: #f4f4f4;
            margin: 1rem auto;
            max-width: 80%;
            border-radius: 10px;
            text-align: center;
          }
          .button {
            text-decoration: none;
            display: inline-block;
            margin: 0.3rem;
            padding: 0.8rem 0.6rem;
            border-radius: 10px;
            font-weight: bold;
            color: white;
          }
          .button-success {
            background: green;
          }
          .button-info {
            background: lightblue;
            color: #333;
          }
        `}
      </style>
    </div>
  );
}
