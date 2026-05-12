import { Outlet, Link } from "react-router-dom";

const SubAppLayout = ({ header }) => {
    return (
        <section
            style={{
                height: "100%",
                display: "flex",
                flexFlow: "column nowrap",
                borderRight: "1px solid black"
            }}
            className="root__subapp">
            <h2 style={{
                fontSize: "1.5em",
                padding: "0.25em 1em",
                flex: "0 0 2rem"
            }}>{header}</h2>
            <Outlet />
        </section>
    )
}

export default SubAppLayout;