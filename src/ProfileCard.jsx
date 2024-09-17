import "./ProfileCard.css";

function ProfileCard(props){
    return (
        <div className="profile-card">
            <img src={props.imageUrl} alt="something" />
            <h2>{props.name}</h2>
            <p>{props.bio}</p>

        </div>
    );

}

export default ProfileCard;