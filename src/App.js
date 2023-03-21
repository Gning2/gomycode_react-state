import React from 'react'
import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  state = {
    person: {
      fullName: 'Papa Amadou GNING',
      bio: 'Code is my language.',
      imgSrc: "/male-app-developer.png",
      profession: 'Web Developer',
    },
    show: true,
    monterA: new Date(),
    buttonText: 'Masquer le Profil',
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        mounterA: new Date(),
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show,
      buttonText: prevState.show ? 'Afficher le Profil' : 'Masquer le Profil', }));
  };

  render(){
    const { person, show, monterA, buttonText } = this.state;
    return(
      <div className='' style={{height:'625px',backgroundImage:`url("https://img.freepik.com/free-photo/closeup-computer-display-software-developer-typing-database-functions-script-it-startup-agency-display-concept-programer-writing-source-code-scrolling-text-programming-language_482257-33542.jpg?size=626&ext=jpg&ga=GA1.1.2133773859.1677351968&semt=ais")`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <button  style={{marginLeft:"25px",marginTop:'25px'}} className="btn btn-success" onClick={this.toggleShow}>{buttonText}</button>
        {show && (
          <div className='d-flex' style={{marginLeft:"50px"}}>
            <div className="p-4">
              <img src={person.imgSrc} alt={person.fullName} style={{width:'250px'}}/>
            </div>
            <div className="" style={{marginTop:'100px'}}>
              <span style={{fontSize:"28px",fontWeight:"bold",fontFamily: 'Mynerve',background:`linear-gradient(rgb(25,135,88),white)`,WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>{person.fullName}</span><span style={{fontSize:"18px",fontWeight:"bold",fontFamily: 'Inter',color:"white"}}>.{person.profession}</span>
              <p style={{fontSize:"18px",fontWeight:"bold",fontFamily: 'Inter',color:`white`}}>{person.bio}</p>
            </div>
          </div>
        )}
        <p style={{fontSize:"18px",fontWeight:"bold",fontFamily: 'Inter',color:`white`,marginLeft:"25px"}}>
          Le composant a été monté à 
          { monterA.toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})}
        </p>
      </div>
    )
  }
}
export default App;
