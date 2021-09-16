import './App.css';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert'


function App() {
  function sendEmail(e) {
    e.preventDefault();
document.querySelectorAll('input')[0].value === '' || document.querySelectorAll('input')[1].value === '' || document.querySelector('textarea').value === ''? swal ( "Oops" ,  "All fields are required!" ,  "error" ):
    emailjs.sendForm('service_itpuu8d', 'template_ctg494g', e.target, 'user_TENXeDimXk9r66sv1Rui0') //change with your values from Emailjs
      .then((result) => {
          console.log(result.text);
          swal("Message Sent!", "I Got Your Message!", "success");
          e.target.reset()
      }, (error) => {
          console.log(error.text);
          swal ( "Oops" ,  "Something went wrong!" ,  "error" )
      });
  }
 function resetCheck(){
  document.querySelectorAll('input')[0].value !== '' || document.querySelectorAll('input')[1].value !== '' || document.querySelector('textarea').value !== ''?
  document.querySelector('.btn-warning').disabled=false
  : document.querySelector('.btn-warning').disabled=true
 }

 function resetForm(){
   document.querySelector('.form').reset()
 }
  return (
    <Form className='form' onSubmit={sendEmail}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" name="name" onChange={resetCheck} placeholder="Enter Your Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name="email" onChange={resetCheck} placeholder="Enter Your Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" name="message" rows={3} />
  </Form.Group>
  <>
  <Button variant="success" type="submit">
    Submit
  </Button>{' '}
  <Button variant="warning" type='reset' onClick={resetForm} disabled>Reset</Button>
  </>
</Form>
  );
}

export default App;
