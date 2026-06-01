import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TeamsSubAppMain from './TeamsSubAppMain';
import TeamsSubAppAdd from './TeamsSubAppAdd';

const TeamsSubApp = ({ teams, getTeams }) => {
    const activeTeams = teams.filter(team => team.status !== "OFF_DUTY");
    const inactiveTeamas = teams.filter(team => team.status === "OFF_DUTY");

    const baseUrl = `http://${import.meta.env.VITE_SERVER_HOST}/api/teams`

    const toggleTeam = (teamColour, status) => {
        fetch(`${baseUrl}/${teamColour}/status?status=${status}`, {
            method: "PATCH"
        })
        .then(() => getTeams());
    }

    return (
        <div
            style={{
                overflow: "auto",
                scrollbarGutter: "stable"
            }}
        >
            <Routes>
                <Route index element={
                    <TeamsSubAppMain
                        activeTeams={activeTeams}
                        removeTeam={(teamColour) => toggleTeam(teamColour, "OFF_DUTY")}
                    />
                } />
                <Route path="add" element={
                    <TeamsSubAppAdd
                        inactiveTeams={inactiveTeamas}
                        addTeam={(teamColour) => toggleTeam(teamColour, "AVAILABLE")}
                    />
                }></Route>
            </Routes>
        </div>
    );
}

export default TeamsSubApp;