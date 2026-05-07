import { Outlet, Link } from "react-router-dom";

const SubAppLayout = ({ header }) => {
    return (
        <section className="root__subapp">
            <h2>{header}</h2>
            <Outlet />
        </section>
    )
}

export default SubAppLayout;