import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            {/*<img className={s.coverImg}*/}
            {/*     src="https://women4it.eu/wp-content/uploads/2020/02/Canva-html-php-java-source-code-2-scaled-e1581350484417-1600x420.jpg"*/}
            {/*     alt="img"/>*/}
            <div className={s.description}>
                <img src={props.profile.photos.large || userPhoto } alt="photo" className={s.mainPhoto} />
                { props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

                {/*{ editMode ? <ProfileDataForm profile={props.profile}/> : <ProfileData profile={props.profile}/> }*/}
                <ProfileData profile={props.profile}/>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            </div>
        </div>
    );
}

const ProfileData = (props) => {
    return (
        <div>
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            { props.profile.lookingForAJob &&
            <div>
                <b>My profession skills</b>: {props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>:
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key] }/>
            })}
            </div>
        </div>
    );
}

const ProfileDataForm = (props) => {
    return (
        <div>
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            { props.profile.lookingForAJob &&
            <div>
                <b>My profession skills</b>: {props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>:
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key] }/>
            })}
            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo;