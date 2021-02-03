import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <img className={s.coverImg}
                 src="https://women4it.eu/wp-content/uploads/2020/02/Canva-html-php-java-source-code-2-scaled-e1581350484417-1600x420.jpg"
                 alt="img"/>
            <div className={s.description}>
                <img src={props.profile.photos.large} alt="photo"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <h1>{props.profile.fullName}</h1>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.contacts.facebook}</p>
                <p>{props.profile.contacts.instagram}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;