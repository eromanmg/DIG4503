import React from 'react';
import '../Heading.css';

class HomePage extends React.Component {

    render(fname) {
        return (
        <div className="h1">
            <h1>Hello, this is {this.props.firstName}'s Portfolio 1 Assignment</h1>
            </div>
        )
        
    }
    
}

export default HomePage;