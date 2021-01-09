import s from './Friends.module.css';
import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    let friendsElement = props.friends.map(f => <FriendsItem name={f.name} img={f.img}/>)

    return (
        <div className={s.friendsWrapper}>
            <div className={s.title}>Friends</div>
            <div className={s.friends}>
                {friendsElement}
            </div>
        </div>
    );
}

export default Friends;
