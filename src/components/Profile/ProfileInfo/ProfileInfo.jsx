import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({isOwner, profile, savePhoto, status, updateStatus, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.description}>
                <div className={s.photoWrapper}>
                    <img src={profile.photos.large || userPhoto } alt="photo" className={s.mainPhoto} />
                    { isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>

                { editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={ () => {setEditMode(true)} } 
                                   profile={profile} 
                                   isOwner={isOwner} 
                                   status={status} 
                                   updateStatus={updateStatus}/> }
            </div>
        </div>
    );
}

const ProfileData = ({isOwner, profile, goToEditMode, updateStatus, status}) => {
    return (
        <div className={s.profileDataWrapper}>
            <div className={s.nameWrapper}>
                {isOwner && <div className={s.editProfileInfoBtn}>
                    <button onClick={goToEditMode}>Edit</button>
                </div>}
                <div className={s.fullName}>
                    <h1>{profile.fullName}</h1>
                </div>
            </div>
            <div className={s.aboutMeWrapper}>
                <div className={s.aboutMe}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                    <div className={s.lookingForAJob}>
                        {profile.lookingForAJob ? "I am looking for a job" : "I have a job"}
                    </div>

                    {profile.lookingForAJob &&
                    <div className={s.skills}>
                        <b>My professional skills</b>: <br/>{profile.lookingForAJobDescription}
                    </div>
                    }

                    <div>
                        <b>About me</b>: {profile.aboutMe}
                    </div>
                </div>
                <div className={s.contactsWrapper}>
                    <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
                </div>
            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return contactValue &&
                <div className={s.contact}><b>{contactTitle}</b>: <a href={contactValue}>{contactValue}</a></div>
}

export default ProfileInfo;