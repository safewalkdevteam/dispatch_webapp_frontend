import MainNav from "./MainNav";
import QuickNav from "./QuickNav";
import { Link } from "react-router-dom";

const Sidebar = (links) => {
    return (
        <section className="root__sidebar">
            <section className="sidebar__header">
                <h1>Safewalk</h1>
                <h2>DISPATCH</h2>
            </section>
            <MainNav mainLinks={links.mainLinks} />
            <hr />
            <QuickNav quickAccessLinks={links.quickAccessLinks} />
            <section className="sidebar__footer">
                <Link to="/" className="collapse">
                    {"Collapse"}
                </Link>
            </section>
        </section>
    )
}

export default Sidebar;