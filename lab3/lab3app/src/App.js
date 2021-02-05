import React from 'react';
import HomePage  from './components/homepage'

function App() {
    const fname = 'Edequiel';
    return(
        <HomePage firstName={fname} />
    )
}

export default App;