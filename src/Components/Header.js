import React ,{useEffect} from 'react'
import styled from 'styled-components'
import "../styles/Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { auth, provider } from "../Components/Firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/users/userSlice";

const Nav = styled.nav`
    height: 70px;
    background: #090b25;
    display: flex;
    align-items: center;
    padding:  0 46px;

`
const Login = styled.a`
background-color: rgba(0, 0, 0, 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0.2s ease 0s;
&:hover {
  background-color: #f9f9f9;
  color: #000;
  border-color: transparent;
}
`


const Logo = styled.img`

    height: 40px;
    padding-bottom: 11px;
    padding-left:20px;

`
const Profile = styled.div`


`

const NavMenu = styled.div`
display: flex;
flex:1;



a{
  display: flex;
  align-items: center;
  padding: 0 12px;
  span{
   padding-top:2px
  }

}


`
function Header() {

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate('/home', {replace: true});
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (

    <Nav>

      <MenuIcon></MenuIcon>


      <Logo src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" className='logo'></Logo>
      {
        !userName ? (
          <Login>Login</Login>) :

          <>
            <NavMenu>
              <a href='/'>TV</a>
              <a href='/'>Movies</a>
              <a href='/'>Sports</a>
              <a href='/'>Disney <span>+</span></a>
              <a href='/' ><p className="kids">KiDS</p></a>

            </NavMenu>
            <Profile>
              <Avatar></Avatar>
            </Profile>

          </>
      }

    </Nav>


  )
}

export default Header