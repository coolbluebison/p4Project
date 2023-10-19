import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/NavBar';


export default function RootLayout({user}) {
    return (
        <div>
            <header>
                <NavBar user={user}/>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}