import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const addAt = (userName) => `@${userName}`

    return(
        <section className="App">
            <TwitterFollowCard 
                userName="midudev"
                name="Miguel Ángel Durán"
                isFollowing
                formatUserName={addAt}
            />
            <TwitterFollowCard 
                userName="geryster3"
                name="Gerard"
                isFollowing={false}
                formatUserName={addAt}
            />
        </section>
    )
}