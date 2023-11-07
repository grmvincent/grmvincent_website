import React, {useEffect} from 'react';

function Home() {
    useEffect(() => {
        document.title = 'grmvincent | home';
    }, []);

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
