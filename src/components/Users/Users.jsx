import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import style from "./Users.module.css"

const Users = (props) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
            <div className={style.usersWrapper}>
                {
                    props.users.map(u => <User user={u}
                                               key={u.id}
                                               followingInProgress={props.followingInProgress}
                                               unfollow={props.unfollow}
                                               follow={props.follow}/>
                    )
                }
            </div>
        </div>
    );
}

export default Users;