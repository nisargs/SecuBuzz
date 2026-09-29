import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { mainNav } from '../data/site';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }: {isActive: boolean;}) =>
  `whitespace-nowrap text-sm transition-colors duration-150 ease-out ${
  isActive ? 'text-ink' : 'text-muted hover:text-ink'}`;


  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-10">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {mainNav.map((item) =>
            <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/download"
            className="hidden h-9 items-center whitespace-nowrap rounded-md bg-accent px-4 text-sm font-semibold text-accent-ink transition-colors duration-150 ease-out hover:bg-accent/90 sm:inline-flex">
            Join closed testing
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md text-muted hover:text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}>
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open &&
        <motion.nav
          id="mobile-nav"
          aria-label="Mobile"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="border-t border-line bg-bg px-5 pb-6 pt-2 md:hidden">
          
            {[...mainNav, { label: 'Join closed testing', to: '/download' }].map((item) =>
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
            `block border-b border-line py-3.5 text-base ${isActive ? 'text-accent' : 'text-ink'}`
            }>
            
                {item.label}
              </NavLink>
          )}
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

}