import React from 'react'
import styled from 'styled-components'


const Logo=styled.p`

font-size:42px;
padding: 4px;
background: linear-gradient(to right, #DB005B 0, hsl(0,0%,100%) 10%, hsl(0, 0%, 30%) 30%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: shine 40s infinite linear;

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


`


const Section = styled.div`

display:flex;
justify-content: center;
align-items:center;
`


const Container = styled.div`
margin-top:10px;
width:60%;
display:flex;
justify-content:space-between;
align-items:center;

`
const Links = styled.div`
margin-top:20px;
display:flex;
align-items:center;
gap:20px;


`
const Button = styled.button`



border-radius:5px;

cursor: pointer;
border: 1px solid #3498db;
background-color: transparent;
height: 45px;
width: 95px;
color: white;
font-size: 20px;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);

.Button:hover {
  border-color: #06f;
  color: #06f;
  fill: #06f;
}





`
const List = styled.ul`
list-style:none;
display:flex;
gap:30px;
`


const Navbar = () => {
  return (
    <Section>
      <Container>
          <Logo>Dream</Logo>
<List >
<li>
    
    <Links>

 Home
    </Links>
  </li>
  <li>
    
    <Links>

    About
    </Links>
  </li>
  <li>
    
    <Links>

    Work
    </Links>
  </li>
  <li>

    

    <Button >Hire me</Button>
   
  </li>
</List>
</Container>

    </Section>
  )
}
export default Navbar