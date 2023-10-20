import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/NavBar';


export default function RootLayout({user, setCurrentUser}) {
    return (
        <div>
            <header>
                <NavBar setCurrentUser={setCurrentUser} user={user}/>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}