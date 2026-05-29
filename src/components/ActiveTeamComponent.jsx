import { Link } from "react-router-dom";
import { statusClassMappings } from "../../statusClassMappings";

const ActiveTeamComponent = ({team, onRemoveClick}) => {
    const teamMembers = ["Alice", "Bob"];
    const status = statusClassMappings[team.status]
    return (
        <section
            style={{
                border: "2px solid #aaa",
                borderRadius: "0.5em",
                padding: "0.5em 1em",
                margin: "1em auto"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <h2
                    style={{
                        color: "#111",
                        fontSize: "1rem",
                        marginBottom: "0.25em"
                    }}
                >Team {team.teamColour}</h2>
                <span
                    style={{
                        fontWeight: "bold",
                        padding: "0.1em 0.5em",
                        borderRadius: "1em",
                        color: `${status.colour}`,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4em"
                    }}
                    className={`${status.className}`}
                >{status.name}
                </span>
            </div>
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