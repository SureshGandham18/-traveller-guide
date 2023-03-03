import React from 'react';
// import './states.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const States = () => {
  return (
    <>
      <Imag>
        <h2>Have the most Unique Experience</h2>
      </Imag>
      <Container>
        <Box>
          <img
            src="https://etimg.etb2bimg.com/photo/89314482.cms"
            height="200px"
            width="300px"
          />
          <br />
          <Link to={'./andhra'}>
            <button>
              <span>Visit Andhra</span>
            </button>
          </Link>
        </Box>
        <Box>
          <img
            src="https://cdn.britannica.com/12/100812-050-27483D5E/Mamallapuram-Shore-Temple-Chennai-India-Tamil-Nadu.jpg"
            height="200px"
            width="300px"
          />
          <br />
          <Link to={'./tamil'}>
            <button>
              <span>Visit Tamil Nadu</span>
            </button>
          </Link>
        </Box>
        <Box>
          <img
            src="https://image.telanganatoday.com/wp-content/uploads/2022/07/Charminar-1_V_jpg--816x480-4g.webp?sw=1920&dsz=816x480&iw=659&p=false&r=1"
            height="200px"
            width="300px"
          />
          <br />
          <Link to={'./telan'}>
            <button>
              <span>Visit Telangana</span>
            </button>
          </Link>
        </Box>
        <Box>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Golden_Temple%2C_Amritsar%2C_Punjab_UNAG.jpg/260px-Golden_Temple%2C_Amritsar%2C_Punjab_UNAG.jpg"
            height="200px"
            width="300px"
          />
          <br />
          <Link to={'./punjab'}>
            <button>
              <span>Visit Punjab</span>
            </button>
          </Link>
        </Box>
        <Box>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/7f/77/2d/temple-big-shiva.jpg?w=500&h=300&s=1"
            height="200px"
            width="300px"
          />
          <br />
          <Link to={'./karnataka'}>
            <button>
              <span>Visit Karnataka</span>
            </button>
          </Link>
        </Box>
      </Container>
    </>
  );
};
export default States;
const Imag = styled.div`
background-image: url('https://4.imimg.com/data4/SV/GV/MY-10346591/tour-guide-for-jaipur-rajsthan-north-india-500x500.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 400px;
width: 1000px;
align-items: center;
margin-left: 12%;
margin-top:-40px;
margin-bottom: 80px;
border-radius: 20%;
// border:23px solid white;
h2{
  font-size:50px;
  padding-left: 80px;
  padding-top: 150px;
  color: black;
}
`;
const Container = styled.div`
  border:2px solid white;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  padding:2rem;

`;
const Box = styled.div`
  margin:2rem;
  padding:2rem;
  background-color:white;
  img{
    border-radius:15%;
  }
  border-radius:15%;
  button{
    cursor: pointer;
    background-color: skyblue;
    border: none;
    padding: 1rem;
    color: ;
    border-radius: 5px;
    transition: all 0.5s;
    font-weight: 500;
    width: 100%;
    &:hover{
        background-color: #009AEE;
    }
}
`;
