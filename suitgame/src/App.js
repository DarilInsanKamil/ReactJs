import React, { useEffect, useState } from 'react';
import './App.css';
import { FaRegHandPaper, FaRegHandPeace, FaRegHandRock } from 'react-icons/fa';
import {
  Container, Button, ButtonClick, Choice, ButtonPlay,
  Result
} from './styled/homeStyled'


function App() {
  const [user, setUser] = useState("");
  const [comp, setComp] = useState("");
  const [res, setRes] = useState("");
  const [counter, setCounter] = useState(0)
  const [play, setPlay] = useState(false)

  const random = () => {
    let choice = ['batu', 'gunting', 'kertas']
    setTimeout(() => {
      setComp(choice[Math.floor(Math.random() * 3)])
    }, 3000)
  }
  useEffect(() => {
    random()
  }, [])

  const refresh = () => {
    window.location.reload()
  }
  const logic = () => {
    if (user === 'kertas' && comp === 'kertas') {
      setRes('Seri')
    } else if (user === 'batu' && comp === 'batu') {
      setRes('Seri')
    } else if (user === 'gunting' && comp === 'gunting') {
      setRes('Seri')
    } else if (user === 'kertas' && comp === 'batu') {
      setRes('Win')
    } else if (user === 'kertas' && comp === 'gunting') {
      setRes('Lose')
    } else if (user === 'gunting' && comp === 'kertas') {
      setRes('Win')
    } else if (user === 'gunting' && comp === 'batu') {
      setRes('Lose')
    } else if (user === 'batu' && comp === 'gunting') {
      setRes('Win')
    } else if (user === 'batu' && comp === 'kertas') {
      setRes('Lose')
    }
  }
  useEffect(() => {
    logic()
  }, [logic])

  const Kertas = () => {
    setUser('kertas')
    setCounter(+ 1)
    setPlay(true)
  }
  const Batu = () => {
    setUser('batu')
    setCounter(+ 1)
    setPlay(true)
  }
  const Gunting = () => {
    setUser('gunting')
    setCounter(+ 1)
    setPlay(true)
  }

  return (
    <Container>
      <h1>Not Squid Game but Suit Game</h1>
      <Choice>
        {
          user === 'kertas' ? <FaRegHandPaper size={100} /> : null
        }
        {
          user === 'gunting' ? <FaRegHandPeace size={100} /> : null
        }
        {
          user === 'batu' ? <FaRegHandRock size={100} /> : null
        }
        {
          comp === 'kertas' ? <FaRegHandPaper size={100} /> : null
        }
        {
          comp === 'gunting' ? <FaRegHandPeace size={100} /> : null
        }
        {
          comp === 'batu' ? <FaRegHandRock size={100} /> : null
        }
      </Choice>
      <Result>{res}</Result>
      <ButtonClick>
        {
          counter <= 0 ? <Button onClick={Kertas}>
            <FaRegHandPaper size={100} />
          </Button> : <Button onClick={Kertas} disabled={true}>
            <FaRegHandPaper size={100} />
          </Button>
        }

        {
          counter <= 0 ? <Button onClick={Batu}>
            <FaRegHandRock size={100} />
          </Button> : <Button disabled={true}>
            <FaRegHandRock size={100} />
          </Button>
        }

        {
          counter <= 0 ? <Button onClick={Gunting}>
            <FaRegHandPeace size={100} />
          </Button> : <Button disabled={true}>
            <FaRegHandPeace size={100} />
          </Button>
        }

      </ButtonClick>
      {
        res === "Seri" || res === "Lose" || res === "Win" ? <ButtonPlay onClick={refresh}>Main Lagi</ButtonPlay> : null
      }
    </Container>
  );
}

export default App;
