import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const States = () => {
  return (
    <>
      <center>
        <Imag>
          <h2>...HAVE THE MOST UNIQUE EXPERIENCE...</h2>
        </Imag>
      </center>
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
              <span>Visit ANDHRA </span>
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
              <span>Visit TAMILNADU</span>
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
              <span>Visit TELANGANA</span>
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
              <span>Visit PUNJAB</span>
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
              <span>Visit KARNATAKA</span>
            </button>
          </Link>
        </Box>
        <Box>
          <img
            src="https://www.gujarattourism.com/content/dam/gujrattourism/images/homebanner/winterbanner.jpg"
            height="200px"
            width="300px"
          />
          <br />
          <Link to={'./karnataka'}>
            <button>
              <span>Visit GUJARAT</span>
            </button>
          </Link>
        </Box>
      </Container>
    </>
  );
};
export default States;
const Imag = styled.div`
background-image: url('https://media.istockphoto.com/id/1264553585/vector/tourists-and-tour-guide-travelling-people-group-with-camera-excursion-with-tour-cicerone.jpg?s=170667a&w=0&k=20&c=1rRAp6_iTC11YukcNkkcn3fD7gevoflAdRyv_Esus8Y=');
background-size: cover;
height: 480px;
width: 90%;
// border-radius:10%;
h2{
  font-size:50px;
  color: black;
}
@media(max-width:900px){
  height:50%;
  width:75%;
}
`;
const Container = styled.div`
  border:2px solid BLACK;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  padding:1rem;

`;
const Box = styled.div`
  margin:1rem;
  padding:2rem;
  background-color:white;
  img{
    border-radius:5px;
  }
  border-radius:5px;
  button{
    cursor: pointer;
    background-color: skyblue;
    border: none;
    padding: 1rem;
    color:white;
    border-radius: 5px;
    transition:  0.5s;
    font-size:25px;
    width: 100%;
    &:hover{
        background-color: #009AEE;
        color:black;
    }
  }
`;
