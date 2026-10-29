"use client";

import { useState } from "react";
import Link from "next/link";

export default function SideMenu({ onNavigate }) {
  // which submenu is expanded ("pages" | "blog" | null); only one at a time
  const [openSub, setOpenSub] = useState(null);

  const toggleSub = (key) => (e) => {
    e.preventDefault();
    setOpenSub((cur) => (cur === key ? null : key));
  };

  const subStyle = (key) => ({ display: openSub === key ? "block" : "none" });

  return (
    <div className="side_menu">
      <ul className="list menu_right">
        <li>
          <Link href="/" onClick={onNavigate}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={onNavigate}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" onClick={onNavigate}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/service" onClick={onNavigate}>
            Service
          </Link>
        </li>
        <li>
          <a href="#" onClick={toggleSub("pages")}>
            Pages
          </a>
          <ul className="list" style={subStyle("pages")}>
            <li>
              <Link href="/elements" onClick={onNavigate}>
                Elements
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" onClick={toggleSub("blog")}>
            Blog
          </a>
          <ul className="list" style={subStyle("blog")}>
            <li>
              <Link href="/blog" onClick={onNavigate}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog-single" onClick={onNavigate}>
                Blog Details
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact" onClick={onNavigate}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
