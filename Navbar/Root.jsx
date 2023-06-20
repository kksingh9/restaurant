
import { Outlet } from 'react-router-dom';
import CartNavbar from './Navbar';

function RootLayout() {
    return <>
            <CartNavbar />
            <Outlet />
    </>
}

export default RootLayout;