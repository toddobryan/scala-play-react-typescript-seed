import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Link,
    useRouteMatch,
    match
} from 'react-router-dom';
import Client from "./Client";
import "./App.css";

const playLogo = require("./images/play.svg") as string;
const reactLogo = require("./images/react.svg") as string;
const scalaLogo = require("./images/scala.svg") as string;

export default function App() {
    const [titleFromPlay, setTitleFromPlay] = useState('');

    useEffect(() => {
        const awaitAndSetTitle = async () => {
            const summary = await Client.getSummary();
            setTitleFromPlay(summary.content)
        };
        awaitAndSetTitle();
    }, []);

    return (
        <Router>
            <div className="App">
                <h1>Welcome to {titleFromPlay}</h1>
                <nav>
                    <Link to="scala">
                        <img width={400} height={400} src={scalaLogo} alt="Scala Logo"/>
                    </Link>
                    <Link to="play">
                        <img width={400} height={400} src={playLogo} alt="Play Framework Logo"/>
                    </Link>
                    <Link to="react">
                        <img width={400} height={400} src={reactLogo} alt="React Logo"/>
                    </Link>
                </nav>
                <Tech/>
                <div>
                    <h2>Check out the project on GitHub for more information</h2>
                    <h3>
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://github.com/toddobryan/scala-play-react-typescript-seed">
                            scala-play-react-typescript-seed
                        </a>
                    </h3>
                </div>
            </div>
        </Router>
    );
}

function Tech() {
    const match: match<{'tech': string}> | null = useRouteMatch('/:tech');
    return <div>Current Route: {match?.params['tech'] || 'No match'}</div>;
}