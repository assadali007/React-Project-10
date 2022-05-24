

export default function Star(props) {

    const starIcon = props.filled ? 'star-filled.png' : 'star-empty.png'

   return (
       <>
           <p>{props.name}</p>

           <img src={`../images/${starIcon}`}
                className="card--favorite" onClick={props.handleClick} />
       </>

   )

}