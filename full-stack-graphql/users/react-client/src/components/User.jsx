const User = (props) => {
  const { id, firstName, username, favNumber, isActive } = props;

  return (
    <div className="user">
      <h3>
        {id} - {firstName} - {username}
      </h3>
      <p> Fav number: {favNumber}</p>
      <p>this user is: {isActive ? 'active' : 'NOT active'}</p>
      <hr />
    </div>
  );
};

export default User;
