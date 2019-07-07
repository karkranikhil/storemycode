import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/header'
import Collapsible from './components/collapsible'
import * as codeDetails from './code/index'
function App() {
  const getMyCode =(data)=>{
    return (
      data.map(item =><Collapsible {...item} key={item.id}/>)
    )
    
  }
  return (
    <>
    <Header/>
    <Container fixed style={{'marginTop': '2rem'}}>
      {getMyCode(codeDetails.javascript)}
    </Container> 
    
    </>
  );
}

export default App;
