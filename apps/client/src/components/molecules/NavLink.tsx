import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const [currentHash, setCurrentHash] = useState<string>("");

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    updateHash();

    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isActive = currentHash === href;

  return (
    <Link
      href={href}
      className={clsx(
        "transition-colors font-medium",
        "text-frippy-dark-gray hover:text-frippy-blue",
        isActive && "text-frippy-blue font-bold underline",
      )}
    >
      {children}
    </Link>
  );
}
