import './App.css'
import Sidebar from './components/Sidebar'
import BoundariesSubApp from './components/BoundariesSubApp'
import CallInFormSubApp from './components/CallInFormSubApp'
import TeamsSubApp from './components/TeamsSubApp'
import Map from './components/Map'
import { Routes, Route, useLocation } from 'react-router-dom'
import SubAppLayout from './SubAppLayout'

function App() {
    const location = useLocation();
    const mainLinks = [
        {
            name: "Boundaries",
            url: "/boundaries",
            component: <BoundariesSubApp />
        },
        {
            name: "Call-In Form",
            url: "/call-in",
            component: <CallInFormSubApp />
        },
        {
            name: "Teams",
            url: "/teams",
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
                        mainLinks.find(link => link.url === location.pathname)?.name || "Sub App"
                    }/>
                }>
                    {mainLinks.map(link => (
                        <Route key={link.url} path={link.url} element={link.component} />
                    ))}
                    {quickAccessLinks.map(link => (
                        <Route key={link.url} path={link.url} />
                    ))}
                </Route>
            </Routes>
            <Map />
		</>
	)
}

export default App
