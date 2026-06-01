import { useState } from "react";
import { statusClassMappings } from "../../statusClassMappings";
import TeamsSubApp from "./TeamsSubApp";
import Modal from "./Modal";

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
                width: "clamp(20em, 40%, 40em)",
                height: "100%"
            }}
            onSubmit={handleSubmit}>
            <fieldset>
                <legend>Select Team Status</legend>
                {Object.keys(statusClassMappings).map(status => 
                    <div>
                        <label>
                            <input
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
                flexFlow: "row nowrap"
            }}>
                <div
                    style={{
                        display: "flex",
                        flexFlow: "row nowrap"
                    }}
                >
                    <button type="submit">Save</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </div>
                <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                >
                    delete
                </button>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Confirmation ${team.teamColour}`}
            >
                <p>hasdfadsf</p>
            </Modal>
        </form>
    );
};

export default EditTeamForm;