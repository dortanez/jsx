const App = () => {
    return (
        <div>
            <Person name='Danisa' age={27} hobbies={['playing basketball', 'going to the beach', 'watching movies', 'reading books']}/>
            <Person name='Bengy' age={54} hobbies={['playing basketball', 'going to the beach', 'watching movies', 'reading books']}/>
            <Person name='Alexandra' age={14} hobbies={['playing basketball', 'going to the beach', 'watching movies', 'reading books']}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))