import React from "react";
import "./profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import editUser from "../../service/editUser";
import Accounts from "../../components/Accounts";
import { profileActions } from "../../store/profile";

/**
 * Page Profile
 * @returns {JSX} React Component
 */
const Profile = () => {
  // Retrieves profile Store
  const userData = useSelector((state) => state.profile);
  // Retrieves token Store
  const token = useSelector((state) => state.token.token);
  // States made to display or not the form
  const [displayForm, setDisplayForm] = useState(false);
  // firstName and lastName holds inputs via listeners
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
 /**
  * Changes the value of displayForm to its opposite whenever it's called
  */
  const handleDisplayForm = () => {
    setDisplayForm(!displayForm);
  };

  /**
   * Handles the form allowing to edit user's firstName and lastName
   * Function editUser() the PUT request to the API
   * dispatch() used to update the profiles store 
   */
  const handleForm = () => {
    if (firstName !== "" && lastName !== "") {
      editUser(firstName, lastName, token);
      setDisplayForm(!displayForm);
      dispatch(profileActions.getNames({firstName : firstName, lastName : lastName}));
    }
  };

  return (
    <div>
      <main className="container__profile">
        {displayForm && (
          <div className="container__profile-header">
            <h1>Welcome back</h1>
            <div className="container__profile-form">
              <div className="inputBox">
                <input
                  type="text"
                  placeholder={userData.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder={userData.lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="buttonBox">
                <button onClick={handleForm}>Save</button>
                <button onClick={handleDisplayForm}>Cancel</button>
              </div>
            </div>
          </div>
        )}
        {!displayForm && (
          <div className="container__profile-header">
            <h1>{`Welcome back ${userData.firstName} ${userData.lastName}`}</h1>
            <button onClick={handleDisplayForm}>Edit Name</button>
          </div>
        )}
        <Accounts />
      </main>
    </div>
  );
};

export default Profile;
