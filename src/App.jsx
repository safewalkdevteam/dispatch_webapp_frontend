import './App.css'
import Sidebar from './components/Sidebar'
import BoundariesSubApp from './components/BoundariesSubApp'
import CallInFormSubApp from './components/CallInFormSubApp'
import TeamsSubApp from './components/TeamsSubApp'
import Map from './components/Map'
import { Routes, Route, useLocation, matchPath } from 'react-router-dom'
import SubAppLayout from './SubAppLayout'

function App() {
    const location = useLocation();
    const mainLinks = [
        {
            name: "Boundaries",
            url: "/boundaries",
            route: "/boundaries/*",
            component: <BoundariesSubApp />
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
            component: <TeamsSubApp />
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
            <Map />
		</>
	)
}

export default App
