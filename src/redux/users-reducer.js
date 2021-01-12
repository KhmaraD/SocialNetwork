const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmytro',
            status: 'I am a boss',
            location: {city: Kyiv, country: Ukraine}
        },
        {
            id: 2,
            followed: false,
            fullName: 'Lena',
            status: 'I am a boss too',
            location: {city: Kyiv, country: Ukraine}
        },
        {
            id: 3,
            followed: true,
            fullName: 'Ihor',
            status: 'I am not a boss',
            location: {city: Dnipro, country: Ukraine}
        },
        {
            id: 4,
            followed: true,
            fullName: 'Lion',
            status: 'I dont now who i am',
            location: {city: Katovice, country: Poland}
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if ( u.id === action.userId ) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if ( u.id === action.userId ) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: [ ...state.users, ...action.users ]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users})

export default usersReducer;