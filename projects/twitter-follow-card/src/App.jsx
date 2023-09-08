import "./app.css";
import TwitterFollowCard from "./components/TwitterFollowCard";

function App() {

  return (
    <div className="app">
      <TwitterFollowCard
        name={"Miguel Ángel Durán"}
        userName={"midudev"}
      />
      <TwitterFollowCard
        name={"goncy.tsx"}
        userName={"goncy"}
      />
      <TwitterFollowCard
        name={"Elon Musk"}
        userName={"elonmusk"} 
      />
      <TwitterFollowCard
        name={"Marcos Galperin"}
        userName={"marcos_galperin"} 
      />
    </div>
    )
}

export default App
