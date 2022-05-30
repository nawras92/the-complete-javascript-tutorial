import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import mutations from '../api/mutations';
const AddUser = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    username: '',
    favNumber: 0,
    isActive: false,
  });

  const handleChange = (event) => {
    const newObj = {
      ...formValues,
      [event.target.name]: event.target.value,
    };
    if (event.target.name === 'isActive') {
      newObj.isActive = !formValues.isActive;
    }
    setFormValues(newObj);
  };

  //navigate
  const navigate = useNavigate();

  // add user mutation
  const { addUser: addUserMutation } = mutations;
  const [addUserMutationFunc] = useMutation(addUserMutation);

  //submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    addUserMutationFunc({
      variables: {
        ...formValues,
        userID: new Date().valueOf(),
        favNumber: Number(formValues.favNumber),
      },
    });
    navigate('/users');
  };
  return (
    <div>
      <h1>You can add a user here</h1>
      <form>
        <div className="group">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
          />
        </div>
        <hr />
        <div className="group">
          <label htmlFor="username">User Name: </label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <hr />
        <div className="group">
          <label htmlFor="favNumber">Fav Number: </label>
          <input
            type="number"
            name="favNumber"
            value={formValues.favNumber}
            onChange={handleChange}
          />
        </div>
        <hr />
        <div className="group">
          <label htmlFor="isActive">Is User Active: </label>
          <input
            type="checkbox"
            name="isActive"
            value={formValues.isActive}
            onChange={handleChange}
          />
        </div>
        <hr />
        <div className="group">
          <button onClick={handleSubmit}>Add User</button>
        </div>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
