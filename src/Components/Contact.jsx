import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const Section = styled.div`
height : 100vh;
scroll-snap-align:center;
display:flex;
flex-direction:column;
align-item:center;
width:1400px;
justify-content:space-between;

`
const Left=styled.div`
flex:1;
dislay:flex;
align-items:center;
justify-content:center;
margin-right:20px

`;
const Right = styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
background-color:white;
height:80vh;

`;
const Container=styled.div`
width:60%;
align:center;
display:flex;
justify-content:space-between;
gap:5px;
margin-left:300px



`;
const Form=styled.form`
width:400px;
display:flex;
flex-direction:column;
gap:15px


`;
const Input=styled.input`
padding:20px;
border-radius:5px;
border:none;
`;
const TextArea=styled.textarea`
padding:20px;
border:none;
border-radius:5px;

`;
const Title=styled.h1`
font-weight:100px;
`;
const Button=styled.button`

border-radius:5px;
cursor: pointer;
border: 2px solid #DB005B; //#3498db
background-color: #DB005B;
height: 55px;
width: 220px;
color: white;
font-size: 20px;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);


.Button:hover {
  border-color: #06f;
  color: #06f;
  fill: #06f;
}
`;



 const Contact = () => {
  const ref=useRef()

const [success,setsuccess] = useState(null)
const handlesubmit=(e)=>{
e.preventDefault();
emailjs.sendForm('service_xd8dmt9', 'template_vcrvr0h', form.current, 'EAoylgOq133US9RKo')
.then((result) => {
    console.log(result.text);
    setsuccess(true)
}, (error) => {
    console.log(error.text);
    setsuccess(false)

}
);
};

  return (
    <Section>
<Container>
  <Left>
<Form ref={ref} onSubmit={handlesubmit}>
<Title>Contact Me</Title>
<Input placeholder="Name" name="name"/>
<Input placeholder="Email" name="email"/>
<TextArea placeholder="Write your message" rows={7} name="message"/>
<Button type="submit">Submit</Button>
{success && 
"Your email has been sent . well get back to you soon"}

</Form>

  </Left>
  <Right>

  </Right>
</Container>
    </Section>
  )
}
export default Contact