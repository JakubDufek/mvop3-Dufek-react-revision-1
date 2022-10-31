import App from "./App"

function CardDynamic(props) {
    return (
    <div classname = "CardDynamic">
    <h2>{props.name}</h2>
    <p>{props.text}</p>
    <a href={props.url} target="_blank">wiki</a>
    </div>
    )
    }
    export default CardDynamic