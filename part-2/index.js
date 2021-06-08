function Tweet({username,name,date,message}){
    return (
        <ul>
            <li>username:{username}</li>
            <li>name:{name}</li>
            <li>date:{date}</li>
            <li>message:{message}</li>
        </ul>
    )
}


function App(){
    return (
        <div>
            <Tweet username="nickzhou" name="nick" date="2020-01-02" message="hello,world"/>
            <Tweet username="stephenzhou" name="stephen" date="2020-05-02" message="hope everything is going well"/>
            <Tweet username="smz1680" name="smz" date="2020-02-02" message="we are all good"/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)