import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import TopNavbar from '@/Components/navbar/TopNavbar';
import BottomNavbar from '@/Components/navbar/BottomNavbar';
import AnimatedFooter from '@/Components/AnimatedFooter/AnimatedFooter';
import LastFooter from '@/Components/Footer/LastFooter';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
        
        <div>
           <TopNavbar/>

                <main>{children}</main>
            <AnimatedFooter/>
            <LastFooter/>
            <BottomNavbar/>
           
        </div>
        
        </>
        
    );
}
