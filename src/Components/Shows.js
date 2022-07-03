import React from 'react'
import styled from 'styled-components'
// import { selectMovies } from '../movies/movieSlice'
// import { useSelector } from 'react-redux'
// import { ConstructionOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const Container = styled.div`
    

`
const Wrap = styled.div`
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;

border-radius: 10px;
overflow: hidden;

img{
    width: 100%;
    cursor: pointer;
    height: 100%;
    object-fit: cover;
    padding-left: 20px;
    box-sizing: border-box;
    float: left;
    
    
}

&:hover{
    transform: scale(1.15);
    
}


`
const Content = styled.div`
    
    // padding: 30px 10px 26px;
    // grid-gap: 25px;
    // display: grid;
     grid-template-columns: repeat(4, minmax(0,1fr));
    display: flex;
    grid-gap: 25px;
    padding-bottom: 2cm;

`

const Shows = () => {
    // const movies = useSelector(selectMovies)

    // console.log("This is ovie", movies)
    return (
        <Container>
            <h3>Latest & Trending</h3>
            <Content>
                <Wrap>
                    <Link to="/detail">
                        <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40'></img>
                    </Link>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2251/1282251-v-d5e46b9253a8'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9317/1269317-v-c851767a526b'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8787/1258787-v-724dc1c3599c'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3394/1233394-v-610a9421f91d'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4158/1254158-v-8293462a94f2'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3191/1263191-v-1068113e5df4'></img>
                </Wrap>
            </Content>

            <h3>Shows Recommended For You</h3>
            <Content>
                <Wrap>
                    <Link to="/detail">
                        <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4604/1104604-v-3d0ef383f6f4'></img>
                    </Link>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2876/862876-v'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4516/1074516-v-2f4f07b1e4ec'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7967/1247967-v-51ec0bfc1a58'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8946/38946-v'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8189/1248189-v-f4e1cbe767aa'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5735/1285735-v-c0b1aa73cb9b'></img>
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2456/1282456-v-d59f2acafedc'></img>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Shows;