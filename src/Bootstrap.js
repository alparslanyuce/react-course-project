import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav} from 'react-bootstrap';

function Bootstrap(){
return (
    <div>
        <h3>Bootstrap components</h3>
        <Button>button</Button>
        <Button variant="success">button</Button>
        


    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
      <Nav.Link href="/Profile">Profile</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>Contact</Nav.Link>
      </Nav.Item>

    </Nav>     
    </div>
)
}

export default Bootstrap