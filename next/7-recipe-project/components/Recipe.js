export default function Recipe(props) {
  const {
    id,
    title,
    description,
    meal,
    cook_time,
    preparation_time,
    total_time,
    steps,
    ingredients,
    servings,
    createdAt,
    updatedAt,
    notes,
  } = props;
  return (
    <div className="recipe">
      <h3>
        <a href={`/${id}`}>{title}</a>
      </h3>
      <p>{description}</p>
      <p>
        <span>Created At: {createdAt}</span>
        <span>Updated At: {updatedAt}</span>
      </p>
    </div>
  );
}
