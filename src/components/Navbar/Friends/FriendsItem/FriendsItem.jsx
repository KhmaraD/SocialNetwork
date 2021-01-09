import s from "../Friends.module.css";
import React from "react";

const FriendsItem = (props) => {
    return (
        <div className={s.friendsItem}>
            <img
                src={props.img} alt="img"/>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default FriendsItem;