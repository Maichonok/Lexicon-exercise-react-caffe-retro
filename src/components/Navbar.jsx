import "./Navbar.css";

const links = [
  { title: "Hot", path: "/" },
  { title: "Juicy", path: "/juicy" },
  { title: "Cozy", path: "/cozy" },
];

export default function Navbar() {
  const listLinks = links.map((link) => (
    <a className="link" key={link.id}>
      {link.title}
    </a>
  ));

  return <nav className="navbar">{listLinks}</nav>;
}
