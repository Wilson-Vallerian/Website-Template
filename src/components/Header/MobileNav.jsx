import { useEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";
import MobileNavList from "./MobileNavList";

const AUTO_CLOSE = 3000;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (open) {
      timeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, AUTO_CLOSE);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);

  function handleClick() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setOpen(false);
    } else {
      setOpen(false);
    }
  }

  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      {open && (
        <ul className="nav-mobile">
          <MobileNavList to="/" onClick={handleClick}>
            Home
          </MobileNavList>
          <MobileNavList to="/dashboard" onClick={handleClick}>
            Dashboard
          </MobileNavList>
          <MobileNavList to="/services" onClick={handleClick}>
            Services
          </MobileNavList>
          <MobileNavList to="/about" onClick={handleClick}>
            About
          </MobileNavList>
          <MobileNavList to="/legals" onClick={handleClick}>
            Legals
          </MobileNavList>
        </ul>
      )}
    </>
  );
}
