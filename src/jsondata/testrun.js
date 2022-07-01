import React ,{StrictMode}from 'react';
import axios from 'react-axios'

export const  testrun = [
  
{NAME:'EL RUFAI NASIRU AHMED', NIN:50579994877},
{NAME:'HADIZA SABUWA BALARABE', NIN:16180626411},
{NAME:'BALARABE ABBAS LAWAL', NIN:49770067376},
{NAME:'BARIATU YUSUF MOHAMMED', NIN:77803137620},
{NAME:'ADEBISI JIMI LAWAL', NIN:26818034040},
{NAME:'SALISU SULEIMAN', NIN:75457668789},
{NAME:'SAUDE AMINA ATOYEBI', NIN:22113613610},
{NAME:'CHRIS A. UMAR', NIN:92668550432},
{NAME:'JAMES ATUNG KANYIP', NIN:91356383196},
{NAME:'Aliyu Baba Ahmed', NIN:42332863824},
{NAME:'Umar Manko', NIN:28543241688},
{NAME:'Muhammad Abdullahi Anka', NIN:22073302394},
{NAME:'PHOEBE SUKAI YAYI', NIN:84000784219},
{NAME:'BAYERO HAFIZ', NIN:18752007029},
{NAME:'BALARABA ZAHRA ALIYU', NIN:65845263463},
{NAME:'IBRAHIM S JAAFARU', NIN:89471885121},

]
let id = "";
let url = "https://www.getone/"+id;
let allDetails = [];

function getDetails(){
    testrun.map(i =>{
      id = i.NIN
      axios.get(url)
      .then(res => {
        allDetails.push(res.data)
      })
      .catch(err => console.log(err))
    })
}
