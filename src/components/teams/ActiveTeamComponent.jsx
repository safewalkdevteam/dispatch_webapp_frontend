import { useState } from "react";
import { statusClassMappings } from "../../constants/statusClassMappings";
import Modal from "../ui/Modal";
import EditTeamForm from "./EditTeamForm";

const ActiveTeamComponent = ({team, onRemoveClick}) => {
    const [isModalOpen, setIsModalOpen] = useState(() => false);
    const teamMembers = ["Alice", "Bob"];
    const status = statusClassMappings[team.status]
    const onEdit = () => {}
    return (
        <section
            className="border-2 border-solid border-[#aaa] rounded-lg px-4 py-2 mx-auto my-4"
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
                    className={`team-status ${status.className}`}
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
                    onClick={() => setIsModalOpen(true)}
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
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Edit ${team.teamColour}`}
            >
                <EditTeamForm
                    team={team}
                    onSubmit={onEdit}
                    onClose={() => setIsModalOpen(false)}
                    onRemoveClick={onRemoveClick}
                />
            </Modal>
        </section>
    )
}

export default ActiveTeamComponent;