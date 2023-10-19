import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/NavBar';


export default function RootLayout() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}