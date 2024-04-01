import Image from "next/image";
import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { PiWallet } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

import { usePathname  } from 'next/navigation'
import { useAuth } from "@pangeacyber/react-auth";
import { useEffect, useState } from 'react';

export default function SideBar() {
    const { user, authenticated } = useAuth();
    const pathname = usePathname();

    const [sidebarItems, setSidebarItems] = useState([
      { name: "Dashboard", href: "/", icon: <GrHomeRounded /> },
      { name: "Transactions", href: "/transactions", icon: <RiMoneyDollarCircleLine /> },
      { name: "Analytics", href: "/analytics", icon: <SiGoogleanalytics /> },
      { name: "Budgets", href: "/budgets", icon: <PiWallet /> },
      { name: "Settings", href: "/settings", icon: <CiSettings /> },
  ]);

    useEffect(() => {
        if (authenticated) {
            setSidebarItems(prevItems => [
                ...prevItems,
                { name: `User (${user.profile.first_name})`, href: "/user", icon: <FaRegUserCircle /> }
            ]);
        }
    }, [authenticated]);

    if (!authenticated) return null;

    return (
        <div>
            <aside className="sidebar">
                <div className="sidebar__top">
                    <Image src="/Designer.png" 
                    width={80} 
                    height={80} 
                    className="sidebar__logo"
                    alt="Logo"
                    />
                  <p className="sidebar__logo-name">Finch</p>
                </div>
                <ul className="sidebar__list">
                {sidebarItems.map(({ name, href, icon }) => (
                  <li className="sidebar__item" key={name}>
                    <Link
                  className={`sidebar__link ${
                    pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    {icon}
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
                  </li>
                ))}
                </ul>
            </aside>
        </div>
    );
};
