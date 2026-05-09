import { useEffect, useState } from 'react';

function TeamsSubApp() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(`/api/teams`)
            .then((res) => res.json())
            .then((data) => setTeams(data))
            .catch((err) => setTeams([]));
    }, []);

    return (
        <section className={`${teams.length === 0 ? 'empty' : ''}`}>
            {teams.length === 0 ?
                <h2>No teams are active.</h2>
                :
                teams.map(team =>
                    <div key={team.id}>
                        {team.name}
                    </div>)}
        </section>
    );
}

export default TeamsSubApp;