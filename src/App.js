import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
//import testrun from './jsondata/testrun';
import axios from 'axios';
import { testrun } from './jsondata/testrun';

var allDetails =  [];
class App extends Component {
  state = {
    clients: [], 
  };

   componentDidMount() {
    this.getDetails()
 
  }

   getDetails(){
    testrun.map(i =>{
     var  id = i.NIN
      axios.get("https://kadsrramiddlewaredev.azurewebsites.net/api/Enrollments/get-kadsrrainfo/"+ id)
      .then(res => {
        allDetails.push(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
    })
}

  render() {
    const {clients} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>KADSSRA DETAILS</h2>
              {clients.map(client =>
                  <div key={client.id}>
                    {client.name} ({client.email})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;
