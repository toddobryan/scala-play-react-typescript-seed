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
const typescriptLogo = require("./images/typescript.svg") as string;

export default function App() {
    const [timeFromPlay, setTimeFromPlay] = useState('');

    const awaitAndSetTime = async () => {
        const time = await Client.getTimeFromPlay();
        setTimeFromPlay(time.content)
    };

    useEffect(() => {
        awaitAndSetTime();
    }, []);

    return (
        <Router>
            <div className="App">
                <h1>Welcome to Scala Play React Typescript Seed!</h1>
                <div>Time loaded from Play server is now: {timeFromPlay}</div>
                <div><button onClick={() => awaitAndSetTime()}>Reset</button></div>
                <nav>
                    <Link to="scala">
                        <img width={300} height={300} src={scalaLogo} alt="Scala Logo"/>
                    </Link>
                    <Link to="play">
                        <img width={300} height={300} src={playLogo} alt="Play Framework Logo"/>
                    </Link>
                    <Link to="react">
                        <img width={300} height={300} src={reactLogo} alt="React Logo"/>
                    </Link>
                    <Link to="typescript">
                        <img width={300} height={300} src={typescriptLogo} alt="TypeScript Logo"/>
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
    const path: match<{'tech': string}> | null = useRouteMatch('/:tech');
    return <div>Current Route: {path?.params['tech'] || 'No match'}</div>;
}