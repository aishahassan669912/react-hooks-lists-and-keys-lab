import React from "react";

function NavBar() {
  const links = [
    { id: 1, name: "home", href: "#home" },
    { id: 2, name: "about", href: "#about" },
    { id: 3, name: "projects", href: "#projects" }
  ];

  return (
    <nav>
      {links.map((link) => (
        <a key={link.id} href={link.href}>
          {link.name}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;