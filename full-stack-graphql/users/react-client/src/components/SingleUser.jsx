import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import queries from '../api/queries';
import User from './User';

const SingleUser = () => {
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
  return (
    <div className="user">
      {getUserLoading && <p>Loading Get User...</p>}
      {getUserError && <p>Error: {getUserError.message}</p>}
      {getUserData && getUserData.getUser && <User {...getUserData.getUser} />}
    </div>
  );
};

export default SingleUser;
