import styled from "@emotion/styled"
import Medi from "../../../assets/MediQuestLAB/MediQuestLab.jpg"
import { Link } from "react-router-dom"
import {BiMenu} from "react-icons/bi"
import {FaTimes} from "react-icons/fa"
import { useState } from "react"
import Dropown from "./Dropown"


const Header = () => {

  const [toggle, setToggle] = useState(false);

  const handlechange = () => { 
    setToggle(!toggle) 
  }

  return (
    <Container>
      <FirstWrap>
        <img className="image" src={Medi} />
      </FirstWrap>

      <Navigations>
       
       <Link 
            style={{
            textDecoration: "none",
            color: "#0D3859"
       }}
           to={'/'}>Home</Link>

        <Link
             style={{
              textDecoration: "none",
              color: "#0D3859"
         }}
            to={'/about'}>About</Link>

        <Link 
             style={{
              textDecoration: "none",
              color: "#0D3859"
         }}
            to={'/'}>Services</Link>

        <Link 
             style={{
              textDecoration: "none",
              color: "#0D3859"
         }}
            to={'/'}>Contact us</Link>

      </Navigations>

      <Forms>
      <Link 
             style={{
              textDecoration: "none",
              color: "#0D3859"
         }}
            to={'/register'}><button>Register</button></Link>
            <button><Link 
             style={{
              textDecoration: "none",
              color: "#0D3859"
         }}
            to={'/login'}>Log in</Link></button>
        
        
      </Forms>

      <Tog>
               
               {toggle ? <FaTimes fontSize={"30px"} color="#4EB2E4" onClick={handlechange}/>:
                <BiMenu fontSize={"30px"} color="#4EB2E4" onClick={handlechange}/>}
                
               {toggle ? <Dropown props={handlechange} />: null}
      </Tog>

    </Container>
  )
}

export default Header





const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center; 


  @media screen and (max-width: 430px) {
        display: flex;
        justify-content: space-between;
      }
`

const FirstWrap = styled.div`
  width: 10%;
  height: 90%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center; 


  @media screen and (max-width: 768px) {
        width: 13%;
      }


      @media screen and (max-width: 430px) {
        width: 35%;
        /* background-color: blue; */
      }

      @media screen and (max-width: 380px) {
        width: 30%;

      }

      @media screen and (max-width: 330px) {
        width: 30%;
      }

  .image {
    width: 100%;

     @media screen and (max-width: 430px) {
        width: 80%;
      }

      @media screen and (max-width: 330px) {
        width: 100%;
      }

  }
`

const Navigations = styled.div`
  width: 35%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center; 

  @media screen and (max-width: 768px) {
        width: 40%;
      }

      @media screen and (max-width: 430px) {
        display: none;
      }

       @media screen and (max-width: 380px) {
        display: none;
      }

       @media screen and (max-width: 330px) {
        display: none;
      }



  p {
    color: #0D3859;
// font-family: Inter;
font-size: 16px;
font-style: normal;
line-height: normal;
  }
`

const Forms = styled.div`
  width: 25%;
  height: 90%;
  display: inline-flex;
align-items: center;
gap: 31px;
justify-content: center;


@media screen and (max-width: 768px) {
        width: 30%;
      }

      @media screen and (max-width: 430px) {
        display: none;
      }

       @media screen and (max-width: 380px) {
        display: none;
      }

       @media screen and (max-width: 330px) {
        display: none;
      }


  button {
    width: 125px;
    height: 40px;
    border-radius: 5px;
    background: #4EB2E4;
    border: 0;
}
`
const Tog = styled.div`
  display: none;


  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: center;
    align-items: center;
    width: 20%;
  }
`