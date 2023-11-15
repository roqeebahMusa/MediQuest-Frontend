import styled from "@emotion/styled"
import service from "../../../assets/MediQuestLAB/services.jpg"

const Services = () => {
  return (
    <Container>
        <ImageDiv>
            <img src={service} />
        </ImageDiv>
        <DivTexts>
            <P>OUR SERVICES</P>
            <Appoint>
            <P2>Appointment Booking</P2>
            <P3>MediQuest Lab offers and provides patients
                the ability to book an appointment for medical
                tests with ease within their location</P3>
            </Appoint>

            <AppointTwo>
            <P21>Results Keeping</P21>
            <P32>MediQuest Lab makes sure that
                all your medical reports are kept safe </P32>
            </AppointTwo>

        </DivTexts>
    </Container>
  )
}

export default Services








const Container = styled.div`
    width: 100%;
    height: 65vh;
    background-color: #031B4E;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    }

    @media screen and (max-width: 430px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: fit-content;
    padding: 15px;
    height: 80vh;
    }
`

const ImageDiv = styled.div`
    width: 35%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 90%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }

    @media screen and (max-width: 768px) {
    width: 50%;
    height: 80%;

    img {
        object-fit: cover;
    }
    }

    @media screen and (max-width: 430px) {
        width: 90%;
    height: 50%;

    img {
        object-fit: cover;
    }

    }

    @media screen and (max-width: 380px) {
        width: 90%;
    height: 40%;

    img {
        object-fit: cover;
    }

    }
`

const DivTexts = styled.div`
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;


@media screen and (max-width: 430px) {
    width: 90%;
    height: 53%;
}

@media screen and (max-width: 330px) {
    width: 90%;
    height: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
    
`

const P = styled.div`
    color: #4EB2E4;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
width: 80%;

@media screen and (max-width: 768px) {
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 430px) {
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 330px) {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

const Appoint = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;


    @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 430px) {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 380px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
}
`

const AppointTwo = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 430px) {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 380px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
}
`


const P2 = styled.div`
    color: #FFF;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;

@media screen and (max-width: 768px) {
    font-size: 25px;
    width: 100%;
}

@media screen and (max-width: 430px) {
    font-size: 20px;
    width: 100%;
}

@media screen and (max-width: 380px) {
    font-size: 16px;
}
`

const P21 = styled.div`
    color: #FFF;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;

@media screen and (max-width: 768px) {
    font-size: 25px;
    width: 100%;

}

@media screen and (max-width: 430px) {
    font-size: 20px;
    width: 100%;
}

@media screen and (max-width: 330px) {
    font-size: 20px;
}
`

const P3 = styled.div`
    color: #F5F5F5;
font-size: 20px;
font-style: normal;
line-height: normal;


@media screen and (max-width: 768px) {
    font-size: 14px;
}

@media screen and (max-width: 330px) {
    font-size: 13px;
}
`

const P32 = styled.div`
    color: #F5F5F5;
font-size: 20px;
font-style: normal;
/* font-weight: 500; */
line-height: normal;


@media screen and (max-width: 768px) {
    font-size: 16px;
}

@media screen and (max-width: 380px) {
    font-size: 13px;
}
`