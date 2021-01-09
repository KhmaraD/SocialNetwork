import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.coverImg}
                 src="https://women4it.eu/wp-content/uploads/2020/02/Canva-html-php-java-source-code-2-scaled-e1581350484417-1600x420.jpg"
                 alt="img"/>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;