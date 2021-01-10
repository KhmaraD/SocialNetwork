import React from 'react';
import {addPostActionCreator, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostText(text));
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>);
}

export default MyPostsContainer;