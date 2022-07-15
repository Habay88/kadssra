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
    clients: [testrun,kadnin],
    loading : true
  };

    componentDidMount() {
    
      kadnin.map(i =>{
       var  id = i.NIN
        axios.get("https://kadsrramiddlewaredev.azurewebsites.net/api/Enrollments/get-kadsrrainfo/"+ id)
        .then(res => {
          allDetails.push(res.data.data)
       //   console.log(res.data.data)
        })
            .then(() => {
            //console.log("What is this ? ",allDetails)
          this.setState({clients: allDetails})
                this.setState({ loading: false })

         
        }
        )
        .catch(err => console.table(err))
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
            <td>TITLE</td>
            <td>Full Name</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>ID</td>
            <td>NIN</td>
            <td>E-MAIL</td>
            <td>D.O.B</td>
            <td>Telephone</td>
            <td>Gender</td>
            <td>KADSSRA ID</td>
            <td>Photo</td>
            <td>AZTEC CODE</td>
              </tr>
            </thead>
            <tbody>   
                                    {this.state.clients.map((items, i) => {

                                        //let myValue = items.filter(function (val) { return val !== null; })
                                        // console.log("These are my values ", myValue)
                                        if (items) { return (
                                            <tr key={i}>
                                                <td>{items.title}</td>
                                                <td>{items.fullName}</td>
                                                <td>{items.firstName}</td>
                                                <td>{items.lastName}</td>
                                          
                                                <td>{items.id}</td>
                                                <td>{items.nin}</td>
                                                <td>{items.email}</td>
                                                <td>{items.dob}</td>
                                                <td>{items.telephone}</td>
                                                <td>{items.gender}</td>
                                                
                                                <td>{items.kadsrraId}</td>
                                                <td>{items.photo}</td>
                                                <td>{items.aztecCode}</td>
                                                
                                            </tr>
                                        )
                                    }
                                    })}
      </tbody>
          </table>
     
      </div>
      </section>
       </>
       }
        
          
</>
  );     
}}