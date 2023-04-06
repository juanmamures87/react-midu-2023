import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard name="Juan María Castro Arjona" userName="juanma" />
      <TwitterFollowCard name="Gloria Romero González" userName="gloro" />
      <TwitterFollowCard name="Manuel López Arribas" userName="manu" />
      <TwitterFollowCard name="Samuel Guita Rota" userName="samu" />
    </section>
  );
}
