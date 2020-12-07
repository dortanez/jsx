const Person = (props) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <h2>{props.name.length > 8 ? props.name.substr(0,6) : props.name}</h2>
            <h3>{props.age >= 18 ? 'please go vote!' : 'you must be 18'}</h3>
            <ul>{props.hobbies.map(h => 
                (<li>{h}</li>)
            )}</ul>
        </div>
    )
}