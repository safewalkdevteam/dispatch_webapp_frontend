import { Link } from "react-router-dom";

const InactiveTeamComponent = ({teamColour, onAddClick}) => {
    return (
        <section
            style={{
                border: "2px solid #aaa",
                borderRadius: "0.5em",
                padding: "0.5em 1em",
                margin: "1em auto",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-between"
            }}
        >
            <h2
                style={{
                    color: "#111",
                    fontSize: "1rem",
                }}
            >Team {teamColour}</h2>
            <button
                style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                }}
                onClick={onAddClick}
            >
                Add Team
            </button>
        </section>
    )
}

export default InactiveTeamComponent;