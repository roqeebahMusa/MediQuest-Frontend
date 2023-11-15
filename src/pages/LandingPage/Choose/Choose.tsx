import styled from "@emotion/styled"
import ChooseLists from "./ChooseLists"
import success from "../../../assets/MediQuestLAB/Success (1).png"
import time from "../../../assets/MediQuestLAB/Save time.png"
import ChooseListsTwo from "./ChooseListsTwo"
import hands from "../../../assets/MediQuestLAB/Handshake.png"
import info from "../../../assets/MediQuestLAB/Information.png"


const Choose = () => {
  return (
    <Container>
        <P>Why Choose MediQuest?</P>
       <Serv>
        <Cards>
       <ChooseLists
            image={success}
            ftexts="Conveniency"
            htexts="Registering and booking of
            appointment on this 
            platform is not difficult
            rather simple"
        />

        <ChooseLists 
            image={time}
            ftexts="Time-saving"
            htexts="All information that will be 
            provided to you on this
            platform is really geniue"
        />
        
       </Cards>

       <CardsTwo>
        <ChooseListsTwo
           image={hands}
            ftexts="Reliability"
            htexts="You can Trust MediQuest Lab
            with all your personal 
            Information and your
            test results" />

            <ChooseListsTwo 
             image={info}
            ftexts="Access to information"
            htexts="You will have an easy access 
            to all your information on this
            platform" />
            
       </CardsTwo>

       </Serv>
    </Container>
  )
}

export default Choose








const Container = styled.div`
    width: 100%;
    height: 65vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;


    @media screen and (max-width: 768px) {
    display: flex;
    height: 98vh;
    justify-content: space-around;
}

      @media screen and (max-width: 430px) {
    height: 90vh;
    }

`

const Serv = styled.div`
    display: flex;
    height: 65%;
    /* background-color: red; */
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    justify-content: center;
    gap: 12px;
    align-items: center;
}

/* @media screen and (max-width: 380px) {
    background-color: blue;
} */
`

const P = styled.div`
    color: #031B4E;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
display: flex;
height: 20%;
justify-content: center;
align-items: last baseline;

@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 25px;
    height: 8%;
    }
`

const Cards = styled.div`
    width: 50%;
    height: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
}

    @media screen and (max-width: 430px) {
    display: flex;
    align-items: center;
    height: 70vh;
}
`


const CardsTwo = styled.div`
    width: 50%;
    height: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
}

    @media screen and (max-width: 430px) {
    display: flex;
    align-items: center;
    height: 90%;
}
`