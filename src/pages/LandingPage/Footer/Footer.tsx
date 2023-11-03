import styled from "@emotion/styled"
import facebk from "../../assets/MediQuestLAB/fbk.jpg"
import tweet from "../../assets/MediQuestLAB/tweet.jpg"
import insta from "../../assets/MediQuestLAB/insta.jpg"
import link from "../../assets/MediQuestLAB/link.jpg"





const Footer = () => {
  return (
    <Container>
      <MediDiv>
        <P>MediQuest Lab</P>
      </MediDiv>

      <DivOne>
        <span>
          <p>MediQuest</p>
          Home <br />
          About <br />
          Careers <br />
          Blog <br />
          Contact us <br />
        </span>
      </DivOne>

      <DivTwo>

        <span>
          <p>SERVICES <br /></p>

            Games <br />
            Publishing <br />
            Solutions <br />
        </span>
      </DivTwo>

      <DivThree>

      <span>
          <p>ABOUT <br /></p>

            Home <br />
            About <br />
        </span>

      </DivThree>

      <DivFour>
        <p>FOLLOW</p>
        <Socials>
          <div>
            <img src={facebk} />
          </div>

          <div>
          <img src={tweet} />
          </div>

          <div>
            <img src={insta} />
          </div>

          <div>
          <img src={link} />
          </div>

        </Socials>
      </DivFour>


    </Container>
  )
}

export default Footer











const Container = styled.div`
  width: 100%;
height: 40vh;
background: #031B4E;
display: flex;
justify-content: center;
align-items: center;


@media screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

@media screen and (max-width: 430px) {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 0px;
  flex-wrap: wrap;
  height: 50vh;
}

@media screen and (max-width: 330px) {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 0px;
  flex-wrap: wrap;
  height: 50vh;
}
`

const MediDiv = styled.div`
  width: 25%;
  height: 20%;
  text-align: center;


  @media screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 430px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}

@media screen and (max-width: 330px) {
  height: 40px;
  width: 100%;
  
}
`

const P = styled.div`
  color: #FFF;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;

@media screen and (max-width: 768px) {
  font-size: 22px;
}

@media screen and (max-width: 430px) {
  font-size: 18px;
}

@media screen and (max-width: 330px) {
  font-size: 18px;
}
`

const DivOne = styled.div`
  width: 18%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    color: #FFF; 
font-size: 18px;
font-style: normal;
  }

  p{
    font-weight: 600;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}

span {
  font-size: 16px;
}

p {
  font-size: 18px;
}

  @media screen and (max-width: 430px) {
  /* background-color: red;  */
  width: 25%;
  height: 54%;
  display: flex;
  justify-content: center;
  align-items: center;
}

span {
  font-size: 16px;
}

p {
  font-size: 16px;
}

  @media screen and (max-width: 330px) {
  width: 30%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 16px;
}

span {
  font-size: 13px;
}

`

const DivTwo = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  flex-direction: column;



  span {
    color: #FFF; 
font-size: 18px;
font-style: normal;
  }

  p{
    font-weight: 600;
    font-size: 20px;
  }


    @media screen and (max-width: 768px) {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}

span {
  font-size: 16px;
}

p {
  font-size: 18px;
}

@media screen and (max-width: 430px) {
  width: 25%;
  height: 55%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

span {
  font-size: 16px;
}

p {
  font-size: 16px;
}

@media screen and (max-width: 330px) {
  width: 48%;
  height: 38%;
  display: flex;
  justify-content: center;
  align-items: center;


  p {
  font-size: 16px;
}

span {
  font-size: 13px;
}
}
`

const DivThree = styled.div`
  width: 20%;
  height: 80%;



  span {
    color: #FFF; 
font-size: 18px;
font-style: normal;
  }

  p{
    font-weight: 600;
    font-size: 20px;
  }


    @media screen and (max-width: 768px) {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}

span {
  font-size: 16px;
}

p {
  font-size: 18px;
}


@media screen and (max-width: 430px) {
  width: 25%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
}

span {
  font-size: 16px;
}

p {
  font-size: 16px;
}

  @media screen and (max-width: 330px) {
  height: 30%;
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

p {
  font-size: 15px;
}

span {
  font-size: 13px;
}
`

const DivFour = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;


  p{
    font-weight: 600;
    font-size: 20px;
    color: #FFF;
  }

    @media screen and (max-width: 768px) {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 18px;
}

  @media screen and (max-width: 430px) {
  width: 50%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 16px;
}

@media screen and (max-width: 330px) {
  width: 55%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 16px;
}
`

const Socials = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  gap: 15px;

  div {
    width: 50px;
    height: 50px;
    background-color: #f5f5f5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  @media screen and (max-width: 768px) {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  div {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
}

@media screen and (max-width: 430px) {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

  div {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
 
  @media screen and (max-width: 330px) {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

  div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`