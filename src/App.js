// начало в readME.md

import { Route, Routes, NavLink } from 'react-router-dom'; //самый бвзовый роутинг
import React from 'react';
/*если кратко:
Link - для создания ссылок. Такой же как и <a>
NavLink - для создания активных ссылок.
Routes - для маршрутизации.
Route - Это как бы url для компонента.
*/
import Earn from './components/Earn'; // импорт компонента Earn
import Profile from './components/Profile';

function App() {
    return (
        <>
            <Routes>
                {/* тут "Содержатся" пути они же Route'ы*/}
                <Route path="/earn" element={<Earn />} /> {/* указывается путь и компонент */}
                <Route path="/profile" element={<Profile />} />
            </Routes>

            <footer>
                <span>
                    <NavLink
                        to={'/earn'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        style={{ textDecoration: 'none' }}
                    >
                        {' '}
                        {/* to - куда ссылается. isActive - активен ли */}
                        Earn
                    </NavLink>
                </span>
                <span>
                    <NavLink
                        to={'/profile'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        style={{ textDecoration: 'none' }}
                    >
                        Profile
                    </NavLink>
                </span>
            </footer>
        </>
    );
}

export default App;
