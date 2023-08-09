import React from 'react'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import {OrbitControls} from '@react-three/drei'
import Cube from './Cube'







const Section = styled.div`
height : 100vh;
scroll-snap-align:center;
display:flex;
flex-direction:column;
align-item:center;
width:1400px;
justify-content:space-between;

`;
const Container = styled.div`
display:flex;
justify-content:space-between;
width:60%;
height: 100vh;
// scroll-snap-align:center;
margin-left:21%;
`;
const Left= styled.div`
flex:3;
position:relative;


`;
const Right = styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;



`;
const Title=styled.h1`
font-size:60px;

`;

const Des=styled.h5`

font-size:19px;
color:#

`;
const Button=styled.button`

border-radius:5px;
cursor: pointer;
border: 2px solid #DB005B; //#3498db
background-color: #DB005B;
height: 55px;
width: 110px;
color: white;
font-size: 20px;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);


.Button:hover {
  border-color: #06f;
  color: #06f;
  fill: #06f;
}
`;
const Who = () => {
  return (
    <Section>
     
      <Container>
<Left>
<Canvas camera={{fov:25,position:[5,5,5]}}>
    <OrbitControls enableZoom={false} autoRotate />
   <ambientLight intensity={1}/>
    <directionalLight position={[3,2,1]}/>
<Cube/>

</Canvas>
  
</Left>
<Right>
<Title>Exploreing the Dreams</Title>
  
<Des>A individual who dances,reads,games,code with passion
  </Des>
<Button>Projects </Button>
</Right>

      </Container>
    </Section>
  )
}
export default Who