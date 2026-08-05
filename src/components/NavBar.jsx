
export default function NavBar() {
    return (
    <nav className="navbar">
        <div className="navbar-left">
            <a href="/" className="logo">
                Sara Nguyen
            </a>
        </div>
        <div className="navbar-center">
            <ul className="nav-links">
            <li>
                <a href="/skills">Skills</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/certifications">Certifications</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            </ul>
        </div>
        <div className="navbar-right">
            <a href="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
            </a>
            <a href="/account" className="user-icon">
            <i className="fas fa-user"></i>
            </a>
        </div>
    </nav>
  );
}