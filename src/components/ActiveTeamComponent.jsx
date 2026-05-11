import { Link } from "react-router-dom";

const ActiveTeamComponent = ({teamColour, onRemoveClick}) => {
    const teamMembers = ["Alice", "Bob"];
    return (
        <section
            style={{
                border: "2px solid #aaa",
                borderRadius: "0.5em",
                padding: "0.5em 1em",
                margin: "1em auto"
            }}
        >
            <h2
                style={{
                    color: "#111",
                    fontSize: "1rem",
                    marginBottom: "0.25em",
                }}
            >Team {teamColour}</h2>
            <p
                style={{
                    fontSize: "1rem",
                    marginBottom: "1em"
                }}
            >{teamMembers.join(", ")}</p>
            <div style={{
                display: "flex",
                flexFlow: "row nowrap",
                columnGap: "1em"
            }}>
                <button
                    style={{
                        border: "none",
                        backgroundColor: "transparent",
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "underline"
                    }}
                >
                    Edit Team
                </button>
                <button
                    style={{
                        border: "none",
                        backgroundColor: "transparent",
                        color: "red",
                        cursor: "pointer",
                        textDecoration: "underline"
                    }}
                    onClick={onRemoveClick}
                >
                    Remove Team
                </button>
            </div>
        </section>
    )
}

export default ActiveTeamComponent;