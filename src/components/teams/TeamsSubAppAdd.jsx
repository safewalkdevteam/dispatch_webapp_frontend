import { Link } from "react-router-dom";
import InactiveTeamComponent from "./InactiveTeamComponent";

const TeamsSubAppAdd = ({inactiveTeams, addTeam}) => {
    return (
        <section
            style={{
                display: "flex",
                height: "100%",
                flexFlow: "column nowrap"
            }}
            className={`${inactiveTeams.length === 0 ? 'empty' : ''}`}>
            <Link
                to=".."
                style={{
                    margin: "1em 0 0 1em",
                    fontSize: "1rem",
                    color: "#333",
                    textDecoration: "none",
                    backgroundColor: "#F8DB28",
                    fontSize: "1rem",
                    padding: "0.5em 1em",
                    alignSelf: "flex-start"
                }}
            >Back
            </Link>
            {inactiveTeams.length === 0 ?
                <h2
                    style={{
                        display: "flex",
                        flexFlow: "column nowrap",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1"
                    }}
                >All teams are active.</h2>
                :
                <ul
                    style={{
                        margin: "0 1em",
                        listStyleType: "none",
                    }}>
                    {inactiveTeams.map(team =>
                        <li key={team.teamColour}>
                            <InactiveTeamComponent
                                teamColour={team.teamColour}
                                onAddClick={() => addTeam(team.teamColour)}
                            />
                        </li>
                    )}
                </ul>
            }
        </section>
    )
}

export default TeamsSubAppAdd;