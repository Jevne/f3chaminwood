'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import f3White from '../../../public/f3-chaminwood-tranparent.webp';

interface NavItem {
  text: string;
  href?: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  { text: 'Our Mission', href: '/mission' },
  {
    text: 'Locations',
    href: '/locations',
    subItems: [
      { text: 'Buck Town', href: '/location/bucktown' },
      { text: 'The Island', href: '/location/theisland' },
      { text: 'The Wood', href: '/location/thewood' },
      { text: 'Three Rivers', href: '/location/threerivers' },
    ],
  },
  { text: 'For New Guys', href: '/fng' },
  { text: 'Contact Us', href: '/contact' },
];

function Header({ href }: { href: string }) {
  console.log("href ==>", href);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const subMenuRef = useRef<HTMLDivElement | null>(null);

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      subMenuRef.current &&
      !subMenuRef.current.contains(event.target as Node)
    ) {
      setOpenSubMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isNavOpen]);

  const renderNavItem = (item: NavItem, index: number) => (
    <li key={item.text} className="text-white py-2 border-b">
      {item.subItems ? (
        <div ref={subMenuRef}>
          <button
            className={`flex items-center px-3  ${openSubMenu === index ? 'text-white-500' : ''}`}
            onClick={() => handleSubMenuToggle(index)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {item.text}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul
            className={`bg-gray-700 mt-2 ${openSubMenu === index ? 'block' : 'hidden'}`}
          >
            {item.subItems?.map((subItem, i) => (
              <li
                key={subItem.text}
                className={`text-white py-1 px-4 ${item.subItems?.length && item.subItems.length > i + 1 ? 'border-b' : ''}`}
              >
                <Link
                  href={subItem.href || '#'}
                  className="text-white hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {subItem.text}
                </Link>
              </li>
            )) ?? null}
          </ul>
        </div>
      ) : (
        <Link
          href={item.href || '#'}
          className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          {item.text}
        </Link>
      )}
    </li>
  );

  return (
    <header className="p-5 text-left">
      <div className="topnav" id="myTopnav">
        <nav className="bg-gray-650">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Image
                      src={f3White}
                      alt="F3 White"
                      width={200}
                      height={100} // Add height to prevent layout shift
                      className="image"
                    />
                  </Link>
                </div>

                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navItems.map((item, index) => (
                      <div key={item.text} className="relative group">
                        <Link
                          href={item.href || '#'}
                          className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          onClick={() => {
                            if (item.subItems) {
                              handleSubMenuToggle(index);
                            }
                          }}
                        >
                          {item.text}
                        </Link>
                        {item.subItems && (
                          <ul
                            className={`absolute left-0 mt-2 py-2 w-48 bg-gray-700 rounded-md shadow-lg transition-all duration-200 submenu ${
                              openSubMenu === index ? 'block' : 'hidden'
                            } group-hover:block`}
                          >
                            {item.subItems.map((subItem) => (
                              <li key={subItem.text}>
                                <Link
                                  href={subItem.href || '#'}
                                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                                >
                                  {subItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isNavOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            className={`fixed top-0 right-0 h-screen w-screen z-50 transition-opacity duration-300 ${isNavOpen ? 'block' : 'hidden'}`}
            style={{ backgroundColor: 'rgba(31, 41, 55, 0.9)' }} // bg-gray-900 with opacity 90%
          >
            <div
              className="absolute top-0 right-0 h-full w-80 border"
              style={{ backgroundColor: '#1f2937' }}
            >
              <div className="flex flex-col justify-between">
                <button
                  className="self-end text-gray-400 hover:text-white pt-2"
                  onClick={() => setIsNavOpen(false)}
                  style={{
                    background: 'black',
                    padding: '0.35rem',
                    color: 'white',
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <ul className="mt-4">{navItems.map(renderNavItem)}</ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
