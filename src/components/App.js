import React,{useState,useEffect} from 'react';

import ResourceList from './ResourceList';

import Users from './Users'
const App = () => {
  
  const [resourceName, setResourceName] = useState('post');
  

  
    return (
      <React.Fragment>
        <Users />
        <button onClick={() => setResourceName('posts' )}>Posts</button>
        <button onClick={() =>  setResourceName('todos' )}>Todos</button>
        <ResourceList resourceName={resourceName}/>
      </React.Fragment>
    )
  
}
export default App;