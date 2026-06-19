import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ActiveTeamComponent from './ActiveTeamComponent';


const TeamsSubAppMain = ({activeTeams, removeTeam}) => {
    return (
        <section className="flex flex-col flex-wrap">
            <section className="m-4 flex flex-row flex-nowrap justify-between items-center">
                <h2 className="bg-[#9ca3af] text-slate-100 text-base py-1 px-4 rounded-full">
                    {activeTeams.length} active
                </h2>
                <Link
                    to="add"
                    className="text-base text-[#333] no-underline bg-[#F8DB28] p-2"
                >Add Active Team</Link>
            </section>
            {activeTeams.length === 0 ?
                <h2 className="flex flex-col flex-nowrap justify-center items-center flex-1">No teams are active.</h2>
                :
                <ul className="my-0 mx-4 list-none">
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