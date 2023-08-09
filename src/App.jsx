import  Contact  from "./Components/Contact"
import Hero from "./Components/Hero"
import  Works  from "./Components/Works"
import Who from "./Components/Who"
import  styled  from "styled-components"
import Test from "./Components/Test"


const Container = styled.div`
height : 100vh;
scroll-snap-type:y mandatory;
scroll-behaviour:smooth;
overflow-y:auto;
scrollbar-width:none;
background:url("./img/bg.jpeg");
// background:url("./img/starry_sky.jpg");
// background:url("./img/stary_blue.jpg");

color:white;
&::-webkit-scrollbar{
  display:none; 

}
`

function App() {

  return (
    
    <Container>
    <Hero/>
    <Who/>
    <Works/>
    <Contact/>
    <Test/>
    </Container>
  )
}

export default App
