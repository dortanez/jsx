const App = () => {
    return (
        <div>
            <Tweet username='dortanez' name='Danisa Ortanez' date='12-22-2020' message='Hello people'/>
            <Tweet username='dustywind' name='April Winterhand' date='12-23-2020' message="It's windy out"/>
            <Tweet username='stormynight' name='Doctor Prime' date='12-22-2020' message='My cats are out'/>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))