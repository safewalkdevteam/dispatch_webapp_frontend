import { useEffect } from 'react';

function TeamsSubApp() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("/api/teams")
            .then((res) => res.json())
            .then((data) => setTeams(data));
    }, []);

    return (
        <section>
            {teams.map(team =>
                <div key={team.id}>
                    {team.name}
                </div>)}
        </section>
    );
}

export default TeamsSubApp;