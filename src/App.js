import logo from './logo.svg';
import './App.css';

function App() {

  function formal(user){
    return user.firstname + " " + user.lastname;
  }

  function getGreeting(user){
    if(user){
    return <h1>'welcome' + " " + user + " "</h1>
  }

  return <h3>fuck off </h3>
}

  const user = {
    firstname:"Nishchay",
    lastname: " Bhuker"}
  //const element = <h1>hello</h1>
  return (
    <>
    
    <>getGreeting()</>
   </>
  );
}

export default App;
