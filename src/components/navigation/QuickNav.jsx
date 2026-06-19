import { NavLink } from "react-router-dom";

const QuickNav = ({ quickAccessLinks }) => {
    return (
        <section className="quicknav">
            <h2 className="mt-3 ml-4 mb-0 mr-4 text-sm">QUICK ACCESS</h2>
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