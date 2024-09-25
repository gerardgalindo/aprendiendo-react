export function TwitterFollowCard({formatUserName, userName, name, isFollowing}) {
    const imageSrc = `https://unavatar.io/${userName}`

    return (        
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
                className="tw-followCard-avatar"
                src={imageSrc} 
                alt="midudev"/>
            <div className="tw-followCard-header-info">
                <strong>{name}</strong>
                <span>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className="tw-followCard-button">
                Seguir
            </button>
        </aside>
    </article>
    )
}