import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        name="Juan María Castro Arjona"
        userName="juanma"
        isFollowing
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        name="Gloria Romero González"
        userName="gloro"
        isFollowing={false}
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        name="Manuel López Arribas"
        userName="manu"
        isFollowing={false}
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        name="Samuel Guita Rota"
        userName="samu"
        isFollowing={true}
      />
    </section>
  );
}
