import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'juanma',
    name: 'Juan María Castro Arjona',
    isFollowing: true
  },
  {
    userName: 'gloro',
    name: 'Gloria Ortega Zumiero',
    isFollowing: false
  },
  {
    userName: 'manu',
    name: 'Manu Martinez Santiago',
    isFollowing: false
  },
  {
    userName: 'samu',
    name: 'Samuel Aguirre Trujillo',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='App'>
      {users.map(({ name, userName, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
