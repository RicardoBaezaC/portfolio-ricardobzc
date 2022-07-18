import './SocialIcon.css'

export const SocialIcon = ({ name, image, url }) => {
    return (
        <div className="logo">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={image} className={name} alt={"logo-"+name} />
            </a>
        </div>
    )
}