import MainNav from "./MainNav";
import QuickNav from "./QuickNav";
import { Link } from "react-router-dom";

const Sidebar = (links) => {
    return (
        <section className="root__sidebar">
            <section className="p-5 border-b-1 border-solid border-[#2A303C]">
                <h1 className="text-xl">Safewalk</h1>
                <h2 className="text-sm">DISPATCH</h2>
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