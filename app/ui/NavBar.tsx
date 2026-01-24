'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathName = usePathname();

    const navLinks = [
        {name: 'Home', href: '/'},
        {name: 'Projects', href: '/projects'},
        {name: 'Contact', href: '/contact'}
    ];

    return <div className="w-full h-10 md:h-20 flex items-center place-content-center md:place-content-end gap-4 p-12">
        {navLinks.map((link) => {
            const isActive = pathName === link.href;

            return (
            <Link 
                key={link.name}
                href={link.href} className={`${isActive ? 'bg-black' : ''} rounded-lg p-2 md:p-3 hover:bg-black transition duration-200 text-lg md:text-2xl`}>
                {link.name}
            </Link>
            );
        })}
    </div>
}