import MainNav from "./MainNav";
import QuickNav from "./QuickNav";
import { Link } from "react-router-dom";

const Sidebar = (links) => {
    return (
        <section className="root__sidebar">
            <section style={{
                padding: "1.25em"
            }} className="sidebar__header">
                <h1
                    style={{
                        fontSize: "1.25em"
                    }}
                >Safewalk</h1>
                <h2
                    style={{
                        fontSize: "0.9rem"
                    }}
                >DISPATCH</h2>
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