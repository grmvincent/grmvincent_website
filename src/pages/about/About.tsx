import React, {useEffect} from 'react';

function About() {
    useEffect(() => {
        document.title = 'grmvincent | about';
    }, []);

    return (
        <div>
            <h1>About</h1>
        </div>
    );
}

export default About;
