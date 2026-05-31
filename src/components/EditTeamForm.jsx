import { useState } from "react";

const EditTeamForm = ({ team, onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        teamColour: team.teamColour,
        members: team.members
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1em' }}>
                <label htmlFor="teamColour">Team Colour</label>
                <input
                    id="teamColour"
                    type="text"
                    value={formData.teamColour}
                    onChange={(e) => setFormData(prev => ({
                        ...prev,
                        teamColour: e.target.value
                    }))}
                />
            </div>
            <div style={{ marginBottom: '1em' }}>
                <label htmlFor="members">Members</label>
                <input
                    id="members"
                    type="text"
                    value={formData.members}
                    onChange={(e) => setFormData(prev => ({
                        ...prev,
                        members: e.target.value
                    }))}
                />
            </div>
            <div style={{ display: 'flex', gap: '0.5em', justifyContent: 'flex-end' }}>
                <button type="button" onClick={onClose}>Cancel</button>
                <button type="submit">Save</button>
            </div>
        </form>
    );
};

export default EditTeamForm;