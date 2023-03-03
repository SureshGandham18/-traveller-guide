import React from 'react';

import ImageSlider from './ImageSlider';
import { SiYourtraveldottv } from 'react-icons/si';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Home = () => {
  return (
    <>
      <Container>
        <center>
          <Head style={{ paddingTop: '60px' }}>
            <SiYourtraveldottv style={{ color: 'skyblue' }} size={50} />
            &nbsp;Tourist GUIDE &nbsp;
            <SiYourtraveldottv style={{ color: 'skyblue' }} size={50} />
          </Head>
          <ImageSlider />
          <br />
          <br />
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            to={'./states'}
          >
            <Btn>Let's GO</Btn>
          </Link>
        </center>
      </Container>
    </>
  );
};
export default Home;
const Container = styled.div``;
const Head = styled.div`
margin-bottom:40px;
  padding-top:13px;
  font-size: 80px;
  background: -webkit-linear-gradient(pink, skyblue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Btn = styled.div`
  background-color:skyblue;
  margin-left:40%;
  margin-right:40%;
  padding:8px;
  font-weight:1000;
  font-size:20px;
  transition:0.2s;
  &:hover{
    margin-top:-5px;
    background-color:lightpink;
    color:black;
    padding:13px;
    border-radius:15px
  }
  // margin-bottom:50px;
`;
