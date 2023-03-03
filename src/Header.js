import React from 'react';
import styled from 'styled-components';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <Head>
      <div>
        <SiYourtraveldottv
          style={{ color: 'black', marginLeft: '19px', marginTop: '6px' }}
          size={50}
        />
      </div>
      <div>
        <Font>
          <div style={{ marginRight: '10px', marginTop: '5px' }}>
            <Link to={'./'}>
              <AiFillHome size={25} />
              Home
            </Link>
          </div>

          <div style={{ marginRight: '10px', marginTop: '5px' }}>
            <IoIosArrowBack size={25} />
            Back
          </div>
        </Font>
      </div>
    </Head>
  );
}
const Head = styled.div`
  background-color:skyblue;
  margin-top:-8px;
  height:60px;
  width:100%;
  position:fixed;
  display:flex;
  justify-content:space-between;
`;
const Font = styled.div`
  font-size:30px;
  padding-top:8px;
  padding-right:30px;
  display:flex;
  
`;
