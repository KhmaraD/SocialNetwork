import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {

    let postsElement =
        [...props.posts]
            .reverse()
            .map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <MyPostsFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    );
})

const maxLength10 = maxLengthCreator(10);

const AddNewPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder="entre text"
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const MyPostsFormRedux = reduxForm({form: "ProfileAddNewPostsForm"})(AddNewPostsForm);

export default MyPosts;