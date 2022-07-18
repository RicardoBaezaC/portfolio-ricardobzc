import './Card.css'

export const Card = ({title, description, imgURL, url}) => {
    return(
        <a className="card-container" href={url} target="_blank" rel="noopener noreferrer">
            <img src={imgURL} alt={"project-"+title.toLowerCase()}/>
            <div className="card">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </a>
    )
}