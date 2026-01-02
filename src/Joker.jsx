import { useState, useEffect } from "react";

export default function Joker() {
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const [joke, setJoke] = useState({
        setup: "",
        punchline: ""
    });

    const getNewJoke = async () => {
        const response = await fetch(URL);
        const jsonResponse = await response.json();

        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    };

    // fetch joke when component loads
    useEffect(() => {
        getNewJoke();
    }, []);

    return (
        <div>
            <hr></hr>
            <h3>Joker!</h3>

            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>

            <button onClick={getNewJoke}>New Joke</button>
        </div>
    );
}
