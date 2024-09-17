import PropTypes, { string } from 'prop-types';
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

ProfileCard.propTypes={
 imageUrl:PropTypes.string.isRequired,
 name:PropTypes.string.isRequired,
 bio:PropTypes.string.isRequired

}
export default ProfileCard;