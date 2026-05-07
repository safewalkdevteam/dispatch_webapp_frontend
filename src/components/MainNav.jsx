import { NavLink, useNavigate, useLocation } from "react-router-dom";

const MainNav = ({ mainLinks }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (url) => {
        console.log(url, location.pathname, location.pathname === url);
        if (location.pathname === url) {
            navigate("/");
            return;
        }
        navigate(url);
    }

    return (
        <section>
            <h2>MAIN</h2>
            <nav>
                <ul>
                    {mainLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink onClick={(e) => {
                                e.preventDefault();
                                handleClick(link.url);
                             }} to={link.url}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default MainNav;