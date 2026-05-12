import { NavLink } from "react-router-dom";

const QuickNav = ({ quickAccessLinks }) => {
    return (
        <section className="quicknav">
            <h2 style={{
                margin: "0.75em 1em 0 1em",
                fontSize: "0.75rem"
            }}>QUICK ACCESS</h2>
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