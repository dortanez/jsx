const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name='Danisa'/>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))