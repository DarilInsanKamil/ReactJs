import React, { useEffect, useState } from 'react';
import './App.css';
import { FaRegHandPaper, FaRegHandPeace, FaRegHandRock, } from 'react-icons/fa';
import {
  Container, Button, ButtonClick, Choice, ButtonPlay, Txt,
  Result
} from './styled/homeStyled'
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'


function App() {
  const [user, setUser] = useState("");
  const [comp, setComp] = useState("");
  const [res, setRes] = useState("");
  const [counter, setCounter] = useState(0)
  const [play, setPlay] = useState(false)

  const random = () => {
    setTimeout(() => {
      let choice = ['batu', 'gunting', 'kertas']
      setComp(choice[Math.floor(Math.random() * 3)])
    }, 5000)
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
  // console.log(user)
  // console.log(play)
  const { height, width } = useWindowSize()
  return (



    <Container>
      {
        res === 'Win' ? <Confetti
          height={height}
          width={width}
        /> : null
      }
      <Txt>Not Squid Game but Suit Game</Txt>
      <Choice>
        {
          user === 'kertas' ? <FaRegHandPaper size={80} /> : null
        }
        {
          user === 'gunting' ? <FaRegHandPeace size={80} /> : null
        }
        {
          user === 'batu' ? <FaRegHandRock size={80} /> : null
        }

        {
          comp === 'kertas' ? <FaRegHandPaper size={80} /> : null
        }
        {
          comp === 'gunting' ? <FaRegHandPeace size={80} /> : null
        }
        {
          comp === 'batu' ? <FaRegHandRock size={80} /> : null
        }
      </Choice>
      <Result>{res}</Result>
      <ButtonClick>
        {
          counter <= 0 ? <Button onClick={Kertas}>
            <FaRegHandPaper size={80} />
          </Button> : <Button onClick={Kertas} disabled={true}>
            <FaRegHandPaper size={80} />
          </Button>
        }

        {
          counter <= 0 ? <Button onClick={Batu}>
            <FaRegHandRock size={80} />
          </Button> : <Button disabled={true}>
            <FaRegHandRock size={80} />
          </Button>
        }

        {
          counter <= 0 ? <Button onClick={Gunting}>
            <FaRegHandPeace size={80} />
          </Button> : <Button disabled={true}>
            <FaRegHandPeace size={80} />
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
