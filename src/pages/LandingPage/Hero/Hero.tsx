import React from 'react'
import styled from "@emotion/styled"
import ggg from "../../../assets/MediQuestLAB/pers.jpg"

const Hero:React.FC = () => {
  return (
    <Container>
      <Image src={ggg}></Image>
      <MediHead>
        <P>MediQuest</P>
          <h4>Advanced Healthcare Made Personal for you!</h4>
          <P2> The laboratory appointment booking app aims 
          to streamline the process of booking medical 
          laboratory tests and services for customers.</P2>

        <P3>Search for the Test you want to take to see lab
          that is close to you to take the test</P3>
          <Select>
              <option disabled>Select</option>
              <option>Festac</option>
              <option>Agboju</option>
              <option>Mile 2</option>
              <option>Badagry</option>
          </Select>
      </MediHead>
    </Container>
  )
}
export default Hero



const Container = styled.div`
  width: 100%;
  height: 89vh;
  background-color: aliceblue;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
        width: 100%;
}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(40%);


  @media screen and (max-width: 430px) {
    object-fit: fit;
  }

`

const MediHead = styled.div`
  width: 52%;
  height: 75vh;
  position: absolute;
  /* background-color: gray; */
  left: 4%;



  h4 {
    color: white;
    /* text-align: center; */
    width: 61%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

    @media screen and (max-width: 768px) {
        width: 80%;
        height: 80%;

        
        h4 {
          width: 61%;
        }
      }


      @media screen and (max-width: 430px) {
        width: 90%;
        height: 70%;
        display: flex;
        align-items: center;
        flex-direction: column;


        h4 {
          width: 89%;
          margin-right: 10px;
        }
      }

      @media screen and (max-width: 380px) {
        width: 90%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4 {
          width: 95%;
          margin-left: 20px;
          font-size: 15px;
        }

      }

      @media screen and (max-width: 330px) {
         width: 90%;
        height: 90%;
         display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4 {
          width: 90%;
          font-size: 13px;
        }

      }

`

const P = styled.div`
  color: #4EB2E4;
font-size: 92px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-left: 24px;

@media screen and (max-width: 768px) {
        width: 100%;
        font-size: 75px;
      }


      @media screen and (max-width: 430px) {
        width: 100%;
        font-size: 63px;

      }

      @media screen and (max-width: 380px) {
        width: 100%;
        font-size: 60px;
        
      }

      @media screen and (max-width: 330px) {
         width: 100%;
          font-size: 48px;
      }


`

const P2 = styled.div`
  color: #FFF;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-left: 24px;

span {
  font-weight: bold;
}


@media screen and (max-width: 768px) {
        width: 100%;
        font-size: 20px;
        margin-top: 10px;
      }


      @media screen and (max-width: 430px) {
        width: 100%;
        font-size: 16px;
        margin-top: 10px;

      }

      @media screen and (max-width: 380px) {
        width: 100%;
        font-size: 15px;
        margin-top: 10px;

      }

      @media screen and (max-width: 330px) {
         font-weight: 300;
         width: max-content;
         width: 100%;
         font-size: 15px;
         margin-top: 10px;

      }
`

const P3 = styled.div`
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-left: 24px;
padding-top: 30px;


@media screen and (max-width: 768px) {
        width: 100%;
        font-size: 20px;
        font-weight: 600;
      }


      @media screen and (max-width: 430px) {
        width: 100%;
        font-size: 15px;


      }

      @media screen and (max-width: 380px) {
        width: 100%;
        font-size: 14px;
        font-weight: 600;
      }

      @media screen and (max-width: 330px) {
         width: 90%;
         font-weight: 500;
         padding: 20px;
         font-size: 13px;
      }
`

const Select = styled.select`
  width: 60%;
  height: 50px;
  border: 2px solid #FFF;
background: rgba(78, 178, 228, 0.21);
border-radius: 8px;
margin-top: 30px;
margin-left: 24px;
outline: #FFF;
color: white;
cursor: pointer;


option {
  width: 100%;
  font-size: 15px;
}




@media screen and (max-width: 768px) {
         height: 11%;
         font-size: 15px;
         padding-left: 10px;
      }


      @media screen and (max-width: 430px) {
        width: 90%;
        font-size: 13px;
        padding-left: 8px;
        height: 12%;
        margin-right: 5%;

      }

      @media screen and (max-width: 380px) {
        width: 90%;
        height: 10%;
      }

      @media screen and (max-width: 330px) {
        height: 9%;
}
`