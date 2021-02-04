import React from 'react';
import HomePage  from './components./homepage'

function App() {
    const fname = 'Edequiel';
    return(
        <HomePage firstname={fname} />
    )
}

export default App;