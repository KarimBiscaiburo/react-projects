import { useState } from "react";

function TwitterFollowCard({name, userName}) {
    const [isFollowing, setIsFollowing] = useState(false);
    const buttonClassName = isFollowing ? "tw-followCard-button is--following" : "tw-followCard-button";

    const handleFollowing = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${userName}`}
                    alt="foto de perfil" 
                />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-info_username">@{userName}</span>
                </div>
            </header>

            <aside>
                <button onClick={handleFollowing} className={buttonClassName}> 
                    {isFollowing ? "Siguiendo" : "Seguir"}
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard;