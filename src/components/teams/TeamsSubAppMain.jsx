import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ActiveTeamComponent from './ActiveTeamComponent';


const TeamsSubAppMain = ({activeTeams, removeTeam}) => {
    return (
        <section
            style={{
                display: "flex",
                flexFlow: "column nowrap",
                height: "100%"
            }}
            className={`${activeTeams.length === 0 ? 'empty' : ''}`}>
            <section style={{
                margin: "1em",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h2 style={{
                    backgroundColor: "#9ca3af",
                    color: "whitesmoke",
                    fontSize: "1rem",
                    padding: "0.25em 1em",
                    borderRadius: "1em"
                }}>
                    {activeTeams.length} active
                </h2>
                <Link
                    to="add"
                    style={{
                        fontSize: "1rem",
                        color: "#333",
                        textDecoration: "none",
                        backgroundColor: "#F8DB28",
                        fontSize: "1rem",
                        padding: "0.5em"
                    }}
                >Add Active Team</Link>
            </section>
            {activeTeams.length === 0 ?
                <h2
                    style={{
                        display: "flex",
                        flexFlow: "column nowrap",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1"
                    }}
                >No teams are active.</h2>
                :
                <ul
                    style={{
                        margin: "0 1em",
                        listStyleType: "none",
                    }}>
                    {activeTeams.map(team =>
                        <li key={team.teamColour}>
                            <ActiveTeamComponent
                                team={team}
                                onRemoveClick={() => removeTeam(team.teamColour)}
                            />
                        </li>
                    )}
                </ul>
            }
        </section>
    );
}

export default TeamsSubAppMain;