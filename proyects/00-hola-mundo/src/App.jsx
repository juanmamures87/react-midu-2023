import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="juanma" initialIsFollowing>
        Juan María Castro Arjona
      </TwitterFollowCard>
      <TwitterFollowCard userName="gloro">
        Gloria Romero González
      </TwitterFollowCard>
      <TwitterFollowCard name="" userName="manu">
        Manuel López Arribas
      </TwitterFollowCard>
      <TwitterFollowCard name="" userName="samu">
        Samuel Guita Rota
      </TwitterFollowCard>
    </section>
  );
}
