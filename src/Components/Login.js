import React from 'react'
import styled from 'styled-components'


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Surfing } from '@mui/icons-material';
//https://www.freepnglogos.com/uploads/espn-png-logo/pn-white-png-logo-18.png
const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: calc(100vh - 70px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url("http://secure-media.hotstar.com/static/sunset/us/assets/web/background-2.png");
    ::before{
       
    }
`
const SignUp = styled.div`
 padding-left: 44%;
 letter-spacing: 1.5px;
 
 button{
    margin-top: 40px;
    background-color: grey;
    border-radius: 25px;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  
 }

 &:hover{
    background: black;
 }



    `
const Con = styled.div`
    padding-bottom: 4cm;
    padding-left:30%;
    img{
        width: 4cm;
        padding-left: 1cm;
        display; flex;
        align-items: center;
    }
`
const Logo1 = styled.img`
padding-bottom: 0.7cm

`
const Logo2 = styled.img`
padding-bottom: 0.5cm
   
`
const Logo3 = styled.img`
padding-bottom: 0.3cm

`

function Login() {
    return (
        <Container>
            <Con>
                <Logo1 src='https://giftsubscription.espnplus.com/images/logo.png'></Logo1>
                <Logo3 src='https://www.seekpng.com/png/full/623-6234032_disney-white-disney-logo-png.png'></Logo3>
                <Logo2 src='https://i.natgeofe.com/n/4da26b5c-18ee-413f-96dd-4cf3fb4a68a0/2fl-white.png'></Logo2>
                <SignUp>
                    <button >
                        SignUp
                    </button>
                </SignUp>

            </Con>



        </Container>
    )
}

export default Login