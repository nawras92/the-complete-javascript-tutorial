import { useRouter } from 'next/router';
import { deleteOne } from '../api/recipe';
import { accessToken } from '../api/recipe';

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

export function SingleControls({ id }) {
  const router = useRouter();
  const handleDelete = async () => {
    const result = window.confirm(
      'Are you sure you want to delete this recipe?'
    );
    if (result) {
      try {
        // Send delete request to the backend
        const response = await fetch('/api/deleteRecipe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });
        const returnedData = await response.json();
        const { ok, message } = returnedData;
        if (!ok) {
          throw new Error(message);
        }
        //Success
        // Redirect to homepage
        router.push('/');
        console.log(message);
      } catch (e) {
        console.log(e);
      }
    }

    //error
  };
  return (
    <div className="controls">
      <a href={`/edit/${id}`} className="button button-warning">
        Edit
      </a>
      <a className="button button-danger" onClick={handleDelete}>
        Delete
      </a>

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
          .button-danger {
            background: tomato;
          }
          .button-warning {
            background: orange;
          }
        `}
      </style>
    </div>
  );
}
