/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';
import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';

export default function Sidebar() {
  const {
    user: { docId, fullName, username, userId, following }
  } = useUser();
  const [test, setTest] = useState(0);

  console.log('fullName, username, userId', fullName, username, userId);
  return (
    <div className="p-4">
      {/* <button
        type="button"
        onClick={() => {
          console.log(test);
          setTest(Math.random());
        }}
      >
        Click Me!
      </button> */}
      <User username={username} fullName={fullName} test={test} />
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  );
}
