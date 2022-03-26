import { useState } from "react";
import { motion } from "framer-motion";
import cards from "./cards";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <h1>Expandable Cards</h1>
      <motion.div
        transition={{ layout: { duration: 0.6 } }}
        layout
        className="card"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderRadius: "1.5rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <motion.h2 layout="position">
          {cards[0].name}
          <span className="emoji" role="img">
            {cards[0].emoji}
          </span>
        </motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="expand_text"
          >
            <p>{cards[0].meaning}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
