import React from 'react'
import styled from 'styled-components'


// •

const Container = styled.nav`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`
const Background = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
 
`

const Control = styled.nav`
  display: flex;
  padding-top: 10%;
`
const Subtitle = styled.div`
padding-top: 40px;
font-size: 19px;

`
const About = styled.div`
padding-top: 20px;
font-size: 21px;
line-height: 1.4;
  
`
const Play = styled.button`
cursor: pointer;
  font-size: 25px;
  display:flex;
  border: none;
  background: none;
  align-items: center;

  img{
    width:20%;
}
span{
  padding-left: 10%;
  color: white;
}

`
const Watchlist = styled.button`
cursor: pointer;
  font-size: 25px;
  display:flex;
  border: none;
  background: none;

  align-items: center;
  img{
    width:40%;
}
span{
  padding-left: 10%;
  color: white;
}`
const Share = styled.button`
cursor: pointer;
  font-size: 25px;
  
  padding-left: 20%
  display: flex;
  border: none;
  background: none;
  
  img{
    width:40%;
  
    
}
span{
  padding-left: 10%;
  color: white;
}`
const Title = styled.div` 
padding-top: 10cm;
font-family: 'Bubblegum Sans', cursive;
font-size: 2cm;
`

function Detail() {
  return (
    <Container>
       <Title>Doctor Strange in the Multiverse Madness</Title>
      <Subtitle>2 hr 6 min • 2022 • SuperHero • 16+ • U/A 13+</Subtitle>
      <About>When the multiverse is unlocked, Doctor Strange must enlist helpfrom old new allies in order to confront a surprising adversary.</About>
      <Background>
  
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9939/1279939-h-3be10a34342b">
        </img>
      </Background>
      <Control>
        <Play> <img src='https://img.icons8.com/fluency/344/play.png'></img><span>Watch Now</span></Play>
        <Watchlist>
          <img src='https://cdn-icons-png.flaticon.com/128/1828/1828817.png'></img>
        </Watchlist>
        <Share>
          <img src='https://cdn-icons-png.flaticon.com/128/189/189676.png'></img>
        </Share>
        <img src='https://raw.githubusercontent.com/SanjayKumar-M/Web-Ui/main/preview.png'></img>
      </Control>

    </Container>
  )
}

export default Detail