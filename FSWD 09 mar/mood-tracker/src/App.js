import React, { useState } from "react";

function App() {

  // state to store mood
  const [mood, setMood] = useState("🙂 Neutral");

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>

      <h1>Mood Tracker</h1>

      <h2>Your Mood: {mood}</h2>

      <button onClick={() => setMood("😊 Happy")}>
        Happy
      </button>

      <button onClick={() => setMood("😢 Sad")}>
        Sad
      </button>

      <button onClick={() => setMood("😡 Angry")}>
        Angry
      </button>

      <button onClick={() => setMood("😴 Sleepy")}>
        Sleepy
      </button>

      <button onClick={() => setMood("🥱 Tired")}>
  Tired
</button>

    </div>
  );
}

export default App;