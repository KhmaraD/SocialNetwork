import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
debugger;
    if (props.users.length === 0 ) {
        props.setUsers( [
            {
                id: 1,
                photoUrl: 'https://www.denofgeek.com/wp-content/uploads/2019/06/vikings-season-6-ragnar.jpg?fit=670%2C377',
                followed: false,
                fullName: 'Dmytro',
                status: 'I am a boss',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://www.denofgeek.com/wp-content/uploads/2019/06/vikings-season-6-ragnar.jpg?fit=670%2C377',
                followed: false,
                fullName: 'Lena',
                status: 'I am a boss too',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
            // {
            //     id: 3,
            //     photoUrl: 'https://www.denofgeek.com/wp-content/uploads/2019/06/vikings-season-6-ragnar.jpg?fit=670%2C377',
            //     followed: true,
            //     fullName: 'Ihor',
            //     status: 'I am not a boss',
            //     location: {city: 'Dnipro', country: 'Ukraine'}
            // },
            // {
            //     id: 4,
            //     photoUrl: 'https://www.denofgeek.com/wp-content/uploads/2019/06/vikings-season-6-ragnar.jpg?fit=670%2C377',
            //     followed: true,
            //     fullName: 'Lion',
            //     status: 'I dont now who i am',
            //     location: {city: 'Katovice', country: 'Poland'}
            // }
        ])
    }
debugger;
    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="photo" className={styles.usersPhoto}/>
                        </div>
                        { u.followed
                            ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                            : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}

                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;