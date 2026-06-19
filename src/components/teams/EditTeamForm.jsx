import { useState } from "react";
import { statusClassMappings } from "../../constants/statusClassMappings";
import TeamsSubApp from "./TeamsSubApp";
import Modal from "../ui/Modal";
import DeleteConfirmationForm from "./DeleteConfirmationForm";

const EditTeamForm = ({ team, onSubmit, onClose, onRemoveClick }) => {
    const [formData, setFormData] = useState({
        status: team.status,
        members: team.members
    });
    const [isModalOpen, setIsModalOpen] = useState(() => false);

    const handleSubmit = (e) => {
        console.log("FORM SUBMIT")
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <form
            style={{
                padding: "0.5em",
                fontSize: "1.25rem",
                width: "clamp(300px, 50vw, 500px)"
            }}
            onSubmit={handleSubmit}>
            <fieldset
                style={{
                    border: "none"
                }}
            >
                <legend
                    style={{
                        marginBottom: "0.25em",
                        fontSize: "1.4rem",
                        fontWeight: "bold"
                    }}
                >Select Team Status</legend>
                {Object.keys(statusClassMappings).map(status => 
                    <div>
                        <label>
                            <input
                                style={{
                                    marginRight: "1em"
                                }}
                                type="radio"
                                name={"status"}
                                value={status}
                                onChange={() => setFormData(prev => ({
                                    ...prev,
                                    status: status
                                }))}
                                checked={formData.status === status}
                            />
                            {statusClassMappings[status].name}
                        </label>
                    </div>
                )}
            </fieldset>
            <div style={{
                display: 'flex',
                gap: '0.5em',
                flexFlow: "row nowrap",
                margin: "1em 0"
            }}>
                <div
                    style={{
                        display: "flex",
                        flexFlow: "row nowrap",
                        columnGap: "1em"
                    }}
                >
                    <button style={{fontSize: "inherit", padding: "0.25em 1em", border: "none", "backgroundColor": "green"}} type="submit">Save</button>
                    <button style={{fontSize: "inherit", padding: "0.25em 1em", border: "none", "backgroundColor": "lightgray"}} type="button" onClick={onClose}>Cancel</button>
                </div>
                <button
                    type="button"
                    style={{
                        fontSize: "inherit",
                        padding: "0.25em 1em",
                        backgroundColor: "red",
                        border: "none",
                        cursor: "pointer"
                    }}
                    onClick={() => setIsModalOpen(true)}
                >
                    Delete
                </button>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Confirmation ${team.teamColour}`}
            >
                <DeleteConfirmationForm
                    onConfirm={onRemoveClick}
                />
            </Modal>
        </form>
    );
};

export default EditTeamForm;