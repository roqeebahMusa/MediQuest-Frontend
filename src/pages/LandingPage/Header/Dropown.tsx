import styled from "@emotion/styled"
import { Link } from "react-router-dom"


interface IProps {
  props: any;
}

const Dropown:React.FC<IProps> = () => {
  return (
    <Container>

        <CTwo>
        <Navigations>
       
       <Link className="link"
            style={{
            textDecoration: "none",
            color: "#0D3859"
       }}  
           to={'/'}>

            <p>Home</p>
           </Link>
   
        <Link className="link"
             style={{
              textDecoration: "none",
              color: "#0D3859"
         }}
            to={'/about'}>

                <p>About</p>

            </Link>
   
        <Link className="link"
             style={{
              textDecoration: "none",
              color: "#0D3859"
         }}
            to={'/'}>

                <p>Services</p>

            </Link>
   
        <Link className="link" 
             style={{
              textDecoration: "none",
              color: "#0D3859"
         }}
            to={'/'}>

            <p>Contact us</p>

            </Link>
   
      </Navigations>
   
      <Forms>
        <Button>Register</Button>
        <Button>Log in</Button>
      </Forms>
        </CTwo>
   </Container>

  )
}

export default Dropown







const Container = styled.div`
     position:absolute;
    right:0%;
    left: 40%;
    top:9.5%;
    background: white;
    filter: opacity(70%);
    color:white;
    padding: 120px;
    display: flex;
    flex-direction: column;
    width:15px;
    z-index:100;

    @media screen and (max-width: 330px) {
        padding: 90px;
        height: 500px;
    }

    @media screen and (max-width: 430px) {
      height: 200px;
      padding: 90px;
      position: absolute;
      right: 0%;
      left: 55%;
    }

    @media screen and (max-width: 380px) {
      height: 200px;
      padding: 88px;
      position: absolute;
      right: 0%;
      left: 49%;
    }

       @media screen and (max-width: 330px) {
      height: 200px;
      padding: 88px;
      position: absolute;
      right: 0%;
      left: 40%;
    }

`

const CTwo = styled.div`
    right:5%;
/* 
    @media screen and (max-width: 380px) {
        width: 90%;
    } */

`



const Navigations = styled.div`
  width: 35%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  flex-direction: column;

  .link {
    /* background-color: red; */
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

 p {
    color: #0D3859;
    font-size: 23px;
    font-weight: 600;
 }

 @media screen and (max-width: 330px) {
        /* background-color: red; */
        width: 120px;
        padding: 20px;
        height: 120px;
        right: 9%;
        position: absolute;


    }

    
 @media screen and (max-width: 430px) {
        /* background-color: red; */
        width: 120px;
        padding: 20px;
        bottom: 10%;
        top: 1%;
        height: 120px;
        right: 9%;
        position: absolute;

        p {
          font-size: 17px;
        }
    }


`

const Forms = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
align-items: center;
gap: 31px;
justify-content: center;
flex-direction: column;


 @media screen and (max-width: 330px) {
   width: 150px;
        padding: 20px;
        height: 150px;
        right: 2%;
        top: 60%;
        position: absolute;
 }

  @media screen and (max-width: 430px) {
   width: 150px;
        padding: 20px;
        height: 150px;
        right: 2%;
        top: 58%;
        position: absolute;
        display: flex;
        gap: 18px;
 }



`

const Button = styled.button`
    width: 180px;
    height: 50px;
    border-radius: 5px;
    background: #4EB2E4;
    border: 0;
    font-size: 16px;
    font-weight: 600;


    @media screen  and (max-width: 330px) {
        width: 170px;
        height: 100px;
}

@media screen  and (max-width: 430px) {
        width: 180px;
        height: 40px;
}

@media screen and (max-width: 430px) {
  width: 160px;
  height: 40px;   
    }
`