import React from 'react'
import styled from '@emotion/styled'

const ChooseListsTwo = (props: any) => {
  return (
    <Container>
         <Icon>
        <img src={props?.image} />
      </Icon>

       <Informations>
        <P>{props?.ftexts}</P>
        <P2>{props?.htexts}</P2>
      </Informations>
    </Container>
  )
}

export default ChooseListsTwo











const Container = styled.div`
  width: 38%;
  height: 100%;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28%;
    }

    @media screen and (max-width: 430px) {
      width: 45%;
      height: 90%;
}

`

const Icon = styled.div`
  width: 50%;
  height: 20%;
  /* background-color: brown; */
  display: flex;
  justify-content: center;

  img {
    width: 45%;
  }

  @media screen and (max-width: 430px) {
      height: 25%;

      img {
      width: 40%;
      height: 85%;
    }
}

@media screen and (max-width: 380px) {

img {
width: 50%;
}
}

@media screen and (max-width: 330px) {

img {
width: 40%;
height: 60%;
}
}
`

const Informations = styled.div`
  width: 90%;
  height: 65%;
  display: flex;
  /* background-color: rebeccapurple; */
  justify-content: center;
  align-items: center;
  flex-direction: column;

      @media screen and (max-width: 430px) {
     display: flex;
     justify-content: space-around;
     align-items: center;
}

      @media screen and (max-width: 768px) {
     display: flex;
     justify-content: space-around;
     align-items: center;
     height: 55%;
}
`

const P = styled.div`
  color: #4EB2E4;
font-size: 18px;
width: 100%;
text-align: center;
font-style: normal;
font-weight: 700;
line-height: normal;

@media screen and (max-width: 430px) {
      font-size: 22px;
}

@media screen and (max-width: 768px) {
      font-size: 22px;
}

@media screen and (max-width: 380px) {
      font-size: 20px;
}

@media screen and (max-width: 330px) {
      font-size: 20px;
}
`

const P2 = styled.div`
  color: #101010;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (max-width: 768px) {
      font-size: 15px;
}

  @media screen and (max-width: 430px) {
     font-size: 14px;
}

@media screen and (max-width: 380px) {
      font-size: 12px;
}

@media screen and (max-width: 330px) {
      font-size: 11px;
      text-align: center;
}
`