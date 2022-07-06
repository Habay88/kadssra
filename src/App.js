import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
 import ReactHTML from 'react-html-to-excel';
 import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import axios from 'axios';
import { testrun } from './jsondata/testrun';
import {kadnin} from './jsondata/kadnin';

var allDetails =  [];
export default class App extends Component {
  state = {
    clients: [],loading : true
  };

   componentDidMount() {
    this.getDetails()
    this.setState({clients:allDetails})
    //console.log(this.state.clients)
 
  }

   getDetails(){
    testrun.map(i =>{
     var  id = i.NIN
      axios.get("https://kadsrramiddlewaredev.azurewebsites.net/api/Enrollments/get-kadsrrainfo/"+ id)
      .then(res => {
        allDetails.push(res.data.data)
     //   console.log(res.data.data)
      })
      .then(()=> {
        this.setState({clients: allDetails})
        this.setState({loading: false})
        console.table(this.state.clients)
      }
      )
      .catch(err => console.log(err))
    })
}

  render() {
    
    return (
      <>

       {this.state.loading ? null : 
       <>
       <h2 className='text-center text-info mt-3'>KADSSRA DETAILS</h2>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
        <ReactHTML ToExcel className="btn btn-info" table="emp-table" filename="KADSSRA EXCEL FILE" sheet="Sheet" buttonText="Export to Excel" />
        </div>
          <table className='table table-striped' id='emp-table'>
            <thead>
              <tr>
            <td>Name</td>
            <td>NIN</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Full Name</td>
            <td>DOB</td>
            <td>Gender</td>
            <td>Telephone</td>
            <td>Photo</td>
            <td>KADSSRA ID</td>
            <td>Middle Name</td>
            <td>Other Name</td>
            <td>Maiden Name</td>
            <td>Email</td>
            <td>Title</td>
            <td>Aztec code</td>
              </tr>
            </thead>
            <tbody> 
                
          {this.state.clients && this.state.clients.map((items, i ) => (
            <tr key={i}>
              <td>{items.id}</td>
              <td>{items.firstName}</td>
              <td>{items.nin}</td>
              {/* <td>{item.NIN}</td>
              <td>{item.fullName}</td>
              <td>{item.dob}</td>
              <td>{item.gender}</td>
              <td>{item.telephone}</td>
              <td>{item.photo}</td>
              <td>{item.kadsrraId}</td>
              <td>{item.middleName}</td>
              <td>{item.otherName}</td>
              <td>{item.maidenName}</td>
              <td>{item.email}</td>
              <td>{item.title}</td>
              <td>{item.aztecCode}</td> */}
            </tr>
         ))}
      </tbody>
          </table>
     
      </div>
      </section>
       </>
       }
        
          
</>
  );     
}}