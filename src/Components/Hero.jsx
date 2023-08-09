import { MeshDistortMaterial, Sphere ,OrbitControls} from '@react-three/drei';
import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber';


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
scroll-snap-align:center;
margin-left:21%;
`;


const Left= styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;


`;
const Right = styled.div`
position:relative;

flex:3;
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
const Img=styled.img`
width:600px;
height:600px;
object-fit:contain;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
margin:auto;
animation:animate 2s infinite ease alternate;
@keyframes animate{
  to{
    transform:translateY(20px);
  }
}
`;



const Hero=()=> {
  return (
    <Section>
      <Navbar />
      <Container>
<Left>
  <Title>Explore,Dream,
    Discover</Title>
  <Des>
Hello I am Akanksha a student learning to actualize my solutions with code.
</Des>
<Button>learn more</Button>
  
</Left>
<Right>
<Canvas >
    <OrbitControls enableZoom={false} autoRotate />
   <ambientLight intensity={1}/>
    <directionalLight position={[3,2,1]}/>
    <Sphere args={[1,120,200]} scale={2.3} ><MeshDistortMaterial
  
  color="#38285c"
  attach="material"
  distort={0.5}
  speed={2}
  />
</Sphere>
  

</Canvas>
  <Img src="./img/woman_moon.png"/>
</Right>

      </Container>
    </Section>
  )
}

export default Hero