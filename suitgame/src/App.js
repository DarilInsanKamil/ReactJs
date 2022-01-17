import React, { useState } from 'react';
import './App.css';
import { FaRegHandPaper, FaRegHandPeace, FaRegHandRock } from 'react-icons/fa';


function App() {
  const [user, setUser] = useState(null);
  const [userWin, setUserWin] = useState([]);

  let random = Math.floor(Math.random() * 10)

  function suit(random) {
    if (random % 2 === 0) {
      return 'Batu'
    } else if (random >= 1 && random <= 5) {
      return 'Gunting'
    } else if (random >= 6 && random <= 10) {
      return 'Kertas'
    }
  }
  
  const comp = suit(random)
console.log(comp)
  const refresh = () => {
    window.location.reload()
  }

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <button onClick={() => setUser('kertas')}>
        <FaRegHandPaper size={48} />
      </button>
      <button onClick={() => setUser("batu")}>
        <FaRegHandRock size={48} />
      </button>
      <button onClick={() => setUser("gunting")}>
        <FaRegHandPeace size={48} />
      </button>
      <p>{userWin}</p>
      {
        userWin === "seri" || userWin === "kamu kalah" || userWin === "kamu menang" ? <button onClick={refresh}>Main Lagi</button> : null
      }
    </div>
  );
}

export default App;
