import React, {useEffect} from 'react';

function NoMatch() {
    useEffect(() => {
        document.title = 'grmvincent | no match';
    }, []);

    return (
        <div>
            <h1>No Match !</h1>
        </div>
    );
}

export default NoMatch;
