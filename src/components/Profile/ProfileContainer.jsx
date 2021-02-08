import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";

const ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                props.history.push("/login");
            }
        }
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, []);

    return (
        <Profile {...props}
                 profile={props.profile}
                 status={props.status}
                 updateSattus={props.updateStatus}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)
