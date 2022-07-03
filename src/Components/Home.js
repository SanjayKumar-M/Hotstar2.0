import React, { useEffect } from 'react'
import styled from 'styled-components'
import "../styles/Home.css"
import Imageslider from './Imageslider'
import Shows from './Shows'
// import db from './Firebase'
// import { useDispatch } from "react-redux";
// import movieSlice from '../movies/movieSlice'

const Container = styled.div`

min-width:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    &:before{
       
        background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
        content: "";
        position: absolute;
        background-position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;        
        z-index: -1;
        height:100vh;
    }
   
`

function Home() {

  // const dispatch = useDispatch();

  //   useEffect(()=> {

  //     db.collection("movies").onSnapshot((snapshot)=>{
  //       let tempMovies = snapshot.docs.map((doc)=>{
  //         return{ id: doc.id, ...doc.data() }
  //       })
  //       dispatch(setMovies(tempMovies));
  //     })


  //   }, [])
  

  return (
    <div className=" navigation">
      <Container>
        <Imageslider />
        <Shows />
        
      </Container>
    </div>
  )
}

export default Home