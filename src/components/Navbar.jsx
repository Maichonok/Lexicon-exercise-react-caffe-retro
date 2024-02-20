import "./Navbar.css";

const links = [
  { id: 0, title: "Hot", path: "/" },
  { id: 1, title: "Juicy", path: "/juicy" },
  { id: 2, title: "Cozy", path: "/cozy" },
];

export default function Navbar() {
  const listLinks = links.map((link) => (
    <a key={link.id} className="link">
      {link.title}
    </a>
  ));

  return <nav className="navbar">{listLinks}</nav>;
}
