import React from 'react';
import HomePage  from './components/homepage';
import Body from './components/body';

function App() {
    const fname = 'Edequiel';
    return(
        <div className= "p">
        <HomePage firstName={fname} />
        <Body />
        </div>
    )
}


export default App;