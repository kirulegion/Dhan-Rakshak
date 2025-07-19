"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tour", href: "/tour" },
  { label: "Hotel", href: "/hotel" },
  { label: "Dashbaord", href: "/dashboard" },
  { label: "About us", href: "/aboutus" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-md rounded-full px-4 py-2">
      <ul className="relative flex space-x-6 text-white font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href} className="relative">
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-md bg-white/20 backdrop-blur-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <Link
                href={item.href}
                className="relative z-10 px-4 py-2 rounded-md"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
