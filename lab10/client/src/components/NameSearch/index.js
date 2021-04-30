import React from 'react';
import '../formstyle.css';

class NameSearch extends React.Component {
    readName(event) {

        event.preventDefault();

        let element = document.querySelector("#name")

        fetch("/employees/" + element.value)//digs into database
        .then((res) => {
            return res.json();
        })

        .then((processed) => {

            let reporting = document.querySelector("#reportingArea"); //displays data in the reporting area if true/false

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.age;
            }
        });
        element.value = "";
    }

    render() {
        return(
            <div className="formwrapper">
                <h2>Name</h2>
            <form onSubmit={this.readName}>
                <input id="name" type="text"/>
                <button>Submit</button>
            </form>
            </div>
        )
    }

}

export default NameSearch;
