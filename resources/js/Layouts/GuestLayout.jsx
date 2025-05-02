import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import TopNavbar from '@/Components/navbar/TopNavbar';
import BottomNavbar from '@/Components/navbar/BottomNavbar';
import AnimatedFooter from '@/Components/AnimatedFooter/AnimatedFooter';
import LastFooter from '@/Components/Footer/LastFooter';



export default function GuestLayout({ children }) {
    return (
        <div>
            

            <TopNavbar/>



            <div >
                {children}
            </div>
            <AnimatedFooter/>
            <LastFooter/>
            <BottomNavbar/>
        </div>
    );
}
