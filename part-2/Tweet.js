const Tweet = (props) => {
    return (
        <div>
            <h2>{props.username} ({props.name})</h2>
            <h3>{props.message}</h3>
            <p>{props.date}</p>
        </div>
    )
}