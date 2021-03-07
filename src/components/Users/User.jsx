import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={styles.userItem}>
            <span>
                <div className={styles.usersPhotoWrapper}>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo"
                         className={styles.usersPhoto}/>
                    </NavLink>
                </div>
            </span>
            <span>
                <div className={styles.userName}>{user.name}</div>
            </span>
            {user.followed
                ? <button disabled={followingInProgress
                    .some(id => id === user.id)}
                          onClick={() => {
                              unfollow(user.id)
                          }}>
                    Unfollow</button>

                : <button disabled={followingInProgress
                    .some(id => id === user.id)}
                          onClick={() => {
                              follow(user.id)
                          }}>
                    Follow</button>}
        </div>
    );
}

export default User;