import MainNav from "./MainNav";
import QuickNav from "./QuickNav";

const Sidebar = () => {
    return (
        <section className="root__sidebar">
            <section className="sidebar__header">
                <h1>Safewalk</h1>
                <h2>DISPATCH</h2>
            </section>
            <MainNav />
            <hr />
            <QuickNav />
            <section className="sidebar__footer">
                <button style={{
                    backgroundColor: "transparent",
                    border: "none",
                    font: "inherit",
                    cursor: "pointer",
                    color: "#777A81"
                }}>{"Collapse"}</button>
            </section>
        </section>
    )
}

export default Sidebar;