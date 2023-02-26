// import React from "react";

import Link from "next/link";

import styles from "styles/Navbar.module.scss";

export default function Navbar() {

    const links = [
      {
        id: 1,
        link: "Home",
        href: "/",
      },
      {
        id: 2,
        link: "About",
        href: "/about",
      },
      {
        id: 3,
        link: "Projects",
        href: "/projects",
      },
    ];

  return (
    <header>
      <nav>
        <Link href="/">SC</Link>
        <ul >
          {links.map(({ id, link, href }) => (
            <li key={id}>
              <Link href={href}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  
}
