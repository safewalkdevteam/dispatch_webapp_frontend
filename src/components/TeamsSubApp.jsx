import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TeamsSubAppMain from './TeamsSubAppMain';
import TeamsSubAppAdd from './TeamsSubAppAdd';

const TeamsSubApp = () => {

    const [teams, setTeams] = useState(() => []);

    const activeTeams = teams.filter(team => team.active);
    const inactiveTeamas = teams.filter(team => !team.active);

    const baseUrl = `http://${import.meta.env.VITE_SERVER_HOST}/api/teams`

    const getTeams = () => fetch(baseUrl)
        .then((res) => res.json())
        .then((data) => setTeams(data))
        .catch((err) => {
            console.log("err", err)
            setTeams([])
        });

    useEffect(() => {
        getTeams();
    }, []);

    const toggleTeam = (teamColour, active) => {
        fetch(`${baseUrl}/${teamColour}/active?active=${active}`, {
            method: "PATCH"
        })
        .then(() => getTeams());
    }

    return (
        <div style={{
            overflow: "auto",
            scrollbarGutter: "stable"
        }}>
            <Routes>
                <Route index element={
                    <TeamsSubAppMain
                        activeTeams={activeTeams}
                        removeTeam={(teamColour) => toggleTeam(teamColour, false)}
                    />
                } />
                <Route path="add" element={
                    <TeamsSubAppAdd
                        inactiveTeams={inactiveTeamas}
                        addTeam={(teamColour) => toggleTeam(teamColour, true)}
                    />
                }></Route>
            </Routes>
        </div>
    );
}

export default TeamsSubApp;