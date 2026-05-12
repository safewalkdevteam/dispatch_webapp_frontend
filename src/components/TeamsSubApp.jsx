import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TeamsSubAppMain from './TeamsSubAppMain';
import TeamsSubAppAdd from './TeamsSubAppAdd';

const TeamsSubApp = ({ teams, getTeams }) => {
    const activeTeams = teams.filter(team => team.active);
    const inactiveTeamas = teams.filter(team => !team.active);

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