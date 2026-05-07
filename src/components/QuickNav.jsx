import { NavLink } from "react-router-dom";

const QuickNav = ({ quickAccessLinks }) => {
    return (
        <section className="quicknav">
            <h2>QUICK ACCESS</h2>
            <nav>
                <ul>
                    {quickAccessLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink  to={link.url} target="_blank" rel="noopener noreferrer">
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default QuickNav;