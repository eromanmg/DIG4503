import React from "react";
import '../formstyle.css';

class AgeSearch extends React.Component {
    readAges(event) {
        event.preventDefault();

                let element = document.querySelector("#age")

                fetch("/ages/" + element.value) //digs into database
                .then((res) => {
                    return res.json();
                })

                .then((processed) => {

                    let reporting = document.querySelector("#reportingArea"); //allows age or name to be displayed in the reporting area

                    if(processed.error) {
                        reporting.innerHTML = processed.error; //if succesful, name or age sis displayed, if not error
                    } else {
                        reporting.innerHTML = processed.name;
                    }
                });
                
                element.value  = "";
            }

            render() {
                return(
                    <div className="formwrapper"> 
                        <h2>Age</h2>
                    <form onSubmit={this.readAges}>
                        <input id="age" type="text"/>
                        <button>Submit</button>
                     </form>
                    </div>
                )
            }
    }

    export default AgeSearch;
