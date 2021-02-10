import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'HoHoHo!', likesCount: 10}
    ],
};

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("work to IT");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(4);
});

test('message of new posts should be correct', () => {
    //1. test data
    let action = addPostActionCreator("work to IT");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[3].message).toBe("work to IT");
});

test('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});