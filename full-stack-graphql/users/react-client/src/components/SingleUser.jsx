import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import queries from '../api/queries';
import mutations from '../api/mutations';
import User from './User';
import EditForm from './EditForm';

const SingleUser = () => {
  // editClicked state
  const [editClicked, setEditClicked] = useState(false);
  // currentuser State
  const [currentUser, setCurrentUser] = useState({
    id: 0,
    firstName: '',
    username: '',
    favNumber: 0,
    isActive: false,
  });
  // navigate
  const navigate = useNavigate();
  // Get id from params
  const params = useParams();
  const { id: userID } = params;
  const { getUser } = queries;
  const {
    loading: getUserLoading,
    error: getUserError,
    data: getUserData,
  } = useQuery(getUser, {
    variables: {
      userID,
    },
  });

  // useMutation - delete User
  const { removeUser } = mutations;
  const [removeUserMutationFunc] = useMutation(removeUser);

  // handle delete
  const handleDeleteClicked = () => {
    console.log('delete clicked');
    removeUserMutationFunc({
      variables: {
        userID,
      },
    });
    navigate('/users');
  };

  //effects
  //
  useEffect(() => {
    if (getUserData) {
      setCurrentUser(getUserData.getUser);
    }
  }, [getUserData]);
  return (
    <div className="user">
      <div className="user-details">
        {getUserLoading && <p>Loading Get User...</p>}
        {getUserError && <p>Error: {getUserError.message}</p>}
        {getUserData && getUserData.getUser && (
          <User {...getUserData.getUser} />
        )}
      </div>
      <div className="user-controls">
        <button
          style={{ background: 'tomato', color: ' white' }}
          onClick={handleDeleteClicked}
        >
          X delete
        </button>
        <button
          onClick={() => setEditClicked(!editClicked)}
          style={{ background: 'green', color: ' white' }}
        >
          Edit User
        </button>
      </div>
      <div className="extras">
        {editClicked && <EditForm {...currentUser} />}
      </div>
    </div>
  );
};

export default SingleUser;
