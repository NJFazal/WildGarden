import '../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Logo from "./wglogo.png";


function Home() {

    return(
        
<Container>  

<img src={Logo} alt="wglogo" />
          
  
    <h1>Increasing global biodiversity, one garden at a time. </h1>  
 
<Button variant="outline-success" href={"/createAccount"}>Create Account</Button>
<Button variant="outline-success" href={"/LoginPage"}>Login</Button>  

</Container>
)}

export default Home