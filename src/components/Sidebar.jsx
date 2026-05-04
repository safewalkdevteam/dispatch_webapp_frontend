import MainNav from "./MainNav";
import QuickNav from "./QuickNav";

const Sidebar = () => {
    return (
        <section className="root__sidebar">
            <h1>Safewalk</h1>
            <h2>DISPATCH</h2>
            <hr />
            <MainNav />
            <hr />
            <QuickNav />
            <hr />
            <button style={{
                backgroundColor: "transparent",
                border: "none",
                font: "inherit"
            }}>{"< Collapse"}</button>
        </section>
    )
}

export default Sidebar;