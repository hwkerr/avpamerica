import { useOutletContext } from "react-router-dom";

function Profile() {
    const user = useOutletContext();

    const getLoggedInProfile = () => (
        <div>
            {user.first + " " + user.last}
        </div>
    );

    const getLoggedOutProfile = () => (
        <div>
            Not logged in
        </div>
    );
    
    return (
        user ? getLoggedInProfile() : getLoggedOutProfile()
    );
}

export default Profile;