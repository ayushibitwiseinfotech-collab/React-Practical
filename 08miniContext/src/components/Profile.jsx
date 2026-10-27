import { useContext } from "react";
import UserContext from "../context/UserContext.js";

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div>Please log in.</div>;
    }

    return (
        <div>
            <h2>Welcome, {user.username}!</h2>
        </div>
    );
}

export default Profile;