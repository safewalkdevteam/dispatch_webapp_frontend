import Sidebar from './components/navigation/Sidebar'
import BoundariesSubApp from './components/BoundariesSubApp'
import CallInFormSubApp from './components/CallInFormSubApp'
import TeamsSubApp from './components/teams/TeamsSubApp'
import Map from './components/map/Map'
import { Routes, Route, useLocation, matchPath } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SubAppLayout from './SubAppLayout'
import { groupColourMappings } from "./constants/groupColourMappings";

function App() {
    const [teams, setTeams] = useState(() => []);
    const [groupedBoundaries, setGroupedBoundaries] = useState({});
    const location = useLocation();


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

    useEffect(() => {
        fetch("/boundaries.geojson")
            .then((res) => res.json())
            .then((data) => {
                setGroupedBoundaries(
                    data.features
                        .filter(feature => feature.geometry.type == "Polygon")
                        .reduce((groups, polygon) => {
                            const { fill } = polygon.properties;

                            if (!groups[fill]) {
                                groups[fill] = {
                                    hover: false,
                                    hidden: false,
                                    name: groupColourMappings[fill],
                                    boundaries: {
                                        type: "FeatureCollection",
                                        features: []
                                    }
                                }
                            }

                            groups[fill].boundaries.features.push(polygon)
                            return groups
                        }, {})
                );
            })
            .catch((err) => {console.log(err)
                setGroupedBoundaries({})
    }   );
    }, []);

    const mainLinks = [
        {
            name: "Boundaries",
            url: "/boundaries",
            route: "/boundaries/*",
            component: (
                <BoundariesSubApp
                    groupedBoundaries={groupedBoundaries}
                    setGroupedBoundaries={setGroupedBoundaries}
                />
            )
        },
        {
            name: "Call-In Form",
            url: "/call-in",
            route: "/call-in/*",
            component: <CallInFormSubApp />
        },
        {
            name: "Teams",
            url: "/teams",
            route: "/teams/*",
            component: (
                <TeamsSubApp
                    teams={teams}
                    getTeams={getTeams}
                />
            )
        }
    ]

    const quickAccessLinks = [
        {
            name: "BetterImpact",
            url: "https://safewalk.betterimpact.com/"
        },
        {
            name: "Email",
            url: "https://mail.google.com/mail/u/0/#inbox"
        },
        {
            name: "Logbook",
            url: "https://safewalk.betterimpact.com/volunteer/logbook"
        },
        {
            name: "Roster",
            url: "https://safewalk.betterimpact.com/volunteer/roster"
        }
    ]

	return (
		<>
            <Sidebar
                mainLinks={mainLinks}
                quickAccessLinks={quickAccessLinks}
            />
            <Routes>
                <Route key="subapp" element={
                    <SubAppLayout header={
                        mainLinks.find(link => matchPath({
                            path: link.route,
                            caseSensitive: true
                        }, location.pathname))?.name || "Sub App"
                    }/>
                }>
                    {mainLinks.map(link => (
                        <Route key={link.route} path={link.route} element={link.component} />
                    ))}
                    {quickAccessLinks.map(link => (
                        <Route key={link.route} path={link.route} />
                    ))}
                </Route>
            </Routes>
            <div style={{
                flex: "1",
                display: "flex",
                flexFlow: "column nowrap",
                height: "100%"
            }}>
                <h2 style={{
                    fontSize: "1.5em",
                    padding: "0.25em 1em",
                    flex: "0 0 2rem",
                    backgroundColor: "whitesmoke",
                    borderBottom: "1px solid black"
                }}>alskdfsa</h2>
                <Map
                    groupedBoundaries={groupedBoundaries}
                />
            </div>
		</>
	)
}

export default App
