function FirstComponent(){
    return (
        <h1>My very first component</h1>
    )
}


function NamedComponent({name}){
    return (
        <p>My name is {name}</p>
    )
}


function App(){
    return(
        <div>
            <FirstComponent />
            <NamedComponent name="nick" />
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)