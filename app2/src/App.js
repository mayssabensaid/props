
import './App.css';
import FullName from './Profile/Component/FullName';
import PropTypes from 'prop-types';
import Bio from './Profile/Component/Bio';
import HandleName from './Profile/Component/HandleName' ;
import Profession from './Profile/Component/Profession';


function App() {
 
  const handleEvent = () => {
    alert("MAYSSA BEN SAID");
    
  };
  return (
    <>
    
    <body style={{margin:"150px 100px",fontSize:"1.2rem" , }}>
    <h1>My Profile </h1>
    {/*  And invoking the <FullName/> component… */}
      <FullName firstName="Mayssa" lastName="ben said">
      
      </FullName>
      <br/>
      <div style={{border:"black double",  marginTop:"20px", }} id="about">
      <Bio FullName="Mayssa ben said" Age="28" Gender="Female" Interests="Learning,  Watching  NETFLIX, travelling "  />
      </div>
      <br/>
      
      
      <div id="profession"><Profession/></div>
      {/* <button onClick={handleEvent}>User</button> */}
      <div>
        <HandleName handleEvent={handleEvent}/>
      </div>
      
      
    </body>
    

    </>
  );
  function ReactHeader({ version = "16" }) {
    return <h1> React {version} Documentation </h1>;
   }
}

export default App;
