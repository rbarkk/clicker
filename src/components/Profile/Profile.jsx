import React, { useState, useEffect } from 'react';
import './Profile.css';
import stat from '../stat';

const Profile = () => {
    const [sum, setSum] = useState(0);

    useEffect(() => {
        const newSum = stat.reduce((acc, item) => acc + item.value, 0);
        setSum(newSum);
    }, [stat]);

    return (
        <div className="container">
            <header>
                <h1>Profile</h1>
                <div className="av_icon">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsPt0GSMe1SdGd-EfQWECKXL2gwH7CzTMUroRGmYtrw&s"
                        alt="avatar"
                    />
                </div>
            </header>

            <main>
                <p>Состояние</p>
                <h1>$ {sum}</h1>
                {stat.map((item) => (
                    <span className="item" key={item.id}>
                        <h3>{item.title}</h3>
                        <span>{item.value}</span>
                    </span>
                ))}
            </main>
        </div>
    );
};

export default Profile;
