import React from 'react';
import './Earn.css';

const Earn = () => {
    const balance = 1000;
    return (
        <main className="cards_wrapper">
            <div className="cards">
                <h1>ProgBank</h1>
                <p>Баланс</p>
                <h2>$ {balance}</h2>
            </div>
        </main>
    );
};

export default Earn;
