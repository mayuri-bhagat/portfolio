import React, { useState } from 'react'
import styled from 'styled-components'
// import Webdev from './Webdev';
// import Projects from './projects';

const Section = styled.div`
height : 100vh;
scroll-snap-align:center;
display:flex;
flex-direction:column;
align-item:center;
width:1400px;
justify-content:space-between;

`;

const data = [
  "Web Developer",
  "Python Dev",
  "React js",
  "Three js",
  "UI/UX"
  


];
const Container = styled.div`
display:flex;
justify-content:space-between;
width:60%;
height: 100vh;
// scroll-snap-align:center;
margin-left:21%;
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
gap:20px;


`;
const Right = styled.div`

flex:1;
position:relative;


`;
const List = styled.ul`
list-style:none;
display:flex;
flex-direction:column;
gap:20px;
`;
const Listitem = styled.li`
font-size:50px;
font-weight:bold;
cursor:pointer;
color:hsl(0,0%,28%);
text-transform:uppercase;
position:relative;
padding: 4px;
background: linear-gradient(to right, #DB005B 0, hsl(0,0%,100%) 10%, hsl(0, 0%, 30%) 20%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: shine 9s infinite linear;

@keyframes shine {
  0% {
    background-position: 0;
    
  }
  60% {
    background-position: 600px;
    
  }
  100% {
    background-position: 600px;
  
  }
}

// :after{
//   content:"${(props) => props.text}";
//   position: absolute;
//   top:0;
//   left:0;
//   color:pink;
//   width:0;
//   overflow:hidden;
//   white-space:nowrap;
// }
// &:hover{
//   ::after{
//     animation:moveText 0.5s linear both;
//     @keyframe moveText{
//       to{
// width:100%;
//       }
//     }
//   }
// }
`;

const Works = () => {
  const [work, setwork] = useState("Web design");
  return (
    <Section>
      <Container>

        <Left>
          <List>
            {data.map((item) => (
              <Listitem key={item} text={item} onClick={() => setwork(item)}>
                {item}
              </Listitem>
            )
            )
            }
          </List>
        </Left>
        <Right>
          {/* {work === "Web developer" ? 
          (<Webdev/>):
           work === "Projects" ? 
           (<Projects/>):
            (<Projectdevlopment/>
            )
            } */}
        </Right>
      </Container>
    </Section>
  );
};
export default Works
