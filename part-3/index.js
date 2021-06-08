function Person({name,age,hobbies}){
    const adult = age > 18
    const hasSixChar = name.length > 8
    return(
        <div>
            <p>Learn some information about this person</p>
            <p>{adult ? "Please go vote!" : "you must be 18"}</p>
            <p>name:{ hasSixChar ? name.substr(0,6) : name }</p>
            <p>age:{age}</p>
            <p>hobbies:</p>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}


function App(){
    return(
        <div>
            <Person name="nick" age={28} hobbies={["gym","golf","run"]}/>
            <Person name="stephen" age={12} hobbies={["movie","golf","run"]}/>
            <Person name="monica" age={28} hobbies={["movie","golf","study"]}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)