import React from "react";
import "./profile.scss"
import { useSelector } from "react-redux";
import { useState } from "react";
import editUser from "../../service/editUser";
import { useNavigate } from "react-router-dom";
import Accounts from "../../components/Accounts";
// import { useParams } from "react-router-dom";

const Profile = () => {
const userData = useSelector((state) => state.profile)
const token = useSelector((state) => state.token.token)
// const userId = useParams()
const navigate = useNavigate()
const [displayForm, setDisplayForm] = useState(false);
const [firstName, setFirstName] = useState(""); 
const [lastName, setLastName] = useState(""); 
const handleDisplayForm = ()=> {
    setDisplayForm(!displayForm);
}
const handleForm = () => {
    if(firstName !== "" && lastName !== ""){
    editUser(firstName, lastName, token);
    setDisplayForm(!displayForm)
    console.log(userData);
    navigate(`/profile/${userData.id}`)
    }
// Send datas with editUser()

}

    return(

        <div>
            <main className="container__profile">
                {
                    displayForm && 
                    <div className="container__profile-header">
                    <h1>Welcome back</h1>
                    <div className="container__profile-form">
                        <div className="inputBox">
                            <input type="text" placeholder={userData.firstName} onChange={(e)=> setFirstName(e.target.value)} required/>
                            <input type="text" placeholder={userData.lastName} onChange={(e)=> setLastName(e.target.value)} required/>
                            
                        </div>
                        <div className="buttonBox">
                            <button onClick={handleForm}>Save</button>
                            <button onClick={handleDisplayForm}>Cancel</button>
                        </div>
                    </div>
                </div>
                }
                {
                    !displayForm && 
                    <div className="container__profile-header">
                    <h1>{`Welcome back ${userData.firstName} ${userData.lastName}`}</h1>
                    <button onClick={handleDisplayForm}>Edit Name</button>
                </div>
                }
                <Accounts />
            </main>
        </div>
    )
}

export default Profile;