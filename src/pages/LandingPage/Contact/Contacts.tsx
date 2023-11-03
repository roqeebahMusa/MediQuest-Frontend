import styled from "@emotion/styled"
import contact from "../../assets/MediQuestLAB/contact.jpg"
import loc from "../../assets/MediQuestLAB/loca.jpg"
import fone from "../../assets/MediQuestLAB/fone.jpg"
import mail from "../../assets/MediQuestLAB/mail.jpg"

const Contacts = () => {
  return (
    <Container>
      <ImageDiv>
        <img src={contact} />
      </ImageDiv>

      <ContactDiv>
        <P>CONTACT US</P>
        <P2>Get in touch</P2>
        <LocationDiv>
          <img src ={loc} />
          <span>No 88 old Ojo Road, Agboju,
            Lagos State</span>
        </LocationDiv>

        <PhoneDiv>
        <img src ={fone} />
        
        <Phone>
        <span>+234 907 359 76439</span>
        <span>+234 907 359 76439</span>
        <span>+234 907 359 76439</span>
        </Phone>

        </PhoneDiv>

        <MailDiv>
          <img src ={mail} />
          <span>mediQuestLab@gmail.com</span>
        </MailDiv>

      </ContactDiv>

    </Container>
  )
}

export default Contacts













const Container = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;


  @media screen and (max-width: 768px) {
    /* background-color: sienna; */
}

@media screen and (max-width: 430px) {
    /* background-color: sienna; */
    display: flex;
    flex-wrap: wrap;
    height: 75vh;
    justify-content: center;
    align-items: center;
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

    @media screen and (max-width: 430px) {
        width: 100%;
        height: 45%;

    img {
        object-fit: contain;
        border-radius: 10px;
    }

    }
}
`

const ContactDiv = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;


  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
}

@media screen and (max-width: 430px) {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    gap: 0;
    justify-content: space-around;
    align-items: center;
    height: 52%;
}
`

const P = styled.div`
  width: 80%;
  color: #4EB2E4;
/* font-family: Poppins; */
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;

  @media screen and (max-width: 430px) {
   font-size: 30px;
}
`

const P2 = styled.div`
  color: #161C4B;
  width: 80%;
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: normal;



  @media screen and (max-width: 430px) {
   font-size: 28px;
}
`

const LocationDiv = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  align-items: center;
  gap: 20px;


  img {
    width: 4%;
    height: 30px;
    object-fit: contain;
  }

  
      span {
    color: #000;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
  }


  @media screen and (max-width: 768px) {
    /* background-color: gold; */


    img {
      width: 6%;
      object-fit: contain;
    }
}

@media screen and (max-width: 430px) {
   /* background-color: silver; */
   height: 15%;

   span{
    font-size: 12px;
   }
}
`

const PhoneDiv = styled.div`
    width: 80%;
  height: 20%;
  display: flex;
  align-items: center;
  gap: 20px; 

  img {
    width: 4%;
    height: 30px;
    object-fit: contain;
  }

  @media screen and (max-width: 430px) {
   height: 24%;

   img {
    width: 7%;
    height: 28px;
   }
}
`

const Phone = styled.div`
      width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;

  span {
    color: #000;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

@media screen and (max-width: 768px) {
    /* background-color: gold; */


    img {
      width: 6%;
      object-fit: contain;
    }

}

@media screen and (max-width: 430px) {
   /* background-color: silver; */
   height: 90%;
   width: 80%;

   
    span{
      font-size: 12px;
    }

}
`

const MailDiv = styled.div`
    width: 80%;
  height: 20%;
  display: flex;
  align-items: center;
  gap: 20px;


  span {
    color: #000;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

img {
   width: 4%;
    height: 30px;
    object-fit: contain;
}


@media screen and (max-width: 768px) {
  /* background-color: gold; */


  img {
    width: 6%;
    object-fit: contain;
  }
}

@media screen and (max-width: 430px) {
   /* background-color: silver; */
   height: 15%;
}
`