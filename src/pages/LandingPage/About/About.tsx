import styled from "@emotion/styled"
import about from "../../../assets/MediQuestLAB/about.jpg"


const About = () => {
  return (
    <Container>
      
       <ContainerTwo>
        
         <AboutPic src={about}></AboutPic>
        <AboutUs>
            <P>ABOUT US</P>
            <P2>Who We Are?</P2>
            <P3>The laboratory appointment booking app aims to <br /> streamline  the process of booking medical <br />
                lab tests and services for users.
                
                MediQuest Lab platform also helps in keeping user’s <br />medical reports informations and allows users <br />
                to be able to book for an appointment with ease <br />
                within their vicinity</P3>
        </AboutUs>
       </ContainerTwo>
    </Container>
  )
}

export default About








const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: 768px) {
        background-color: coral;
        width: 100%;
        display: flex;
        /* justify-content: center;
        align-items: center; */
    }

`

const ContainerTwo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
    }

         @media screen and (max-width: 430px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 50px;
      }

        @media screen and (max-width: 330px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 50px;
      }
`

const AboutPic = styled.img`
    width: 400px;
    height: 60vh;
    border-radius: 10px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 50%;    
        object-fit: cover;
    }

        @media screen and (max-width: 430px) {
        width: 70%;
        height: 55%;
      }

      @media screen and (max-width: 380px) {
        width: 70%;    
        object-fit: fill;
        height: 50%;
    }

        @media screen and (max-width: 330px) {
          width: 100%;
        height: 50%;
        width: 90%;    
        object-fit: fill;
        height: 50%;
      }
`

const AboutUs = styled.div`
    width: 50%;
    height: 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @media screen and (max-width: 768px) {
        display: flex;
        width: 60%;
        justify-content: center;
        align-items: center;
    }

        @media screen and (max-width: 430px) {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
      }

      @media screen and (max-width: 380px) {
        width: 90%;
        height: 50%;
        display: flex;
         justify-content: space-between;
        align-items: center;
      }

        @media screen and (max-width: 330px) {
        width: 100%;
        height: 45%;
      }
`

const P = styled.div`
    color: #4EB2E4;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 80%;
    height: 43px;

    @media screen and (max-width: 768px) {
        width: 80%;   
    }

    @media screen and (max-width: 430px) {
        text-align: center;
        font-size: 27px;
        height: 15%;
        width: 100%;
      }

        @media screen and (max-width: 380px) {
            width: 100%;
        text-align: center;
        font-size: 28px;
      }
    
`

const P2 = styled.div`
    color: #031B4E;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 80%;
    height: 36px;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        width: 80%; 
    }

    @media screen and (max-width: 430px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15%;
        font-size: 22px;
        margin-bottom: 20px;
    }

        @media screen and (max-width: 380px) {
        width: 100%;
        text-align: center;
        height: 25%;
        font-size: 25px;
    }

    @media screen and (max-width: 330px) {
        width: 100%;
        text-align: center;
        font-size: 25px;
    }
`

const P3 = styled.div`
    width:80%;
    height: 200px;
    color: black;

    @media screen and (max-width: 768px) {
        height: 48%;
        width: 80%; 
        font-size: 13px;
    }

        @media screen and (max-width: 430px) {
        width: 100%;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items:center ;
        height: 33%;
        padding: 35px;
        margin-bottom: 40px;   
        text-align: justify;
     }

    @media screen and (max-width: 380px) {
        width: 100%;
        font-size: 10px;
        height: 35%;
        padding: 1px;
      }

      @media screen and (max-width: 330px) {
         width: 100%;
         font-size: 10px;
      }
`