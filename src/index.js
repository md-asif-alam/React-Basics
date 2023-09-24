// var React = require('react');

import React from 'react';

// var ReactDOM = require("react-dom");

import ReactDOM from 'react-dom';

import './index.css';

// ReactDOM.render(<>
// <h1>Hello World!!!</h1>
// <p>Just for Learning!!</p>
// <h2>Please continue learning!!!</h2>
// </>
// , document.getElementById('root'));

// ReactDOM.render(<>
//   <h1>Thapa Technical NetFlix Pick!!!</h1>
//   <p>Here are the list of my 5 fav series!!!</p>
//   <ol>
//     <li> Mirzapur </li>
//     <li> Panchayat </li>
//     <li> Kota Factory </li>
//     <li> Dark </li>
//     <li> Hostel Daze </li>
//   </ol>

//   </>
//   ,document.getElementById('root')
// );
// const fname="Vinod";
// const lname="Thapa";
// ReactDOM.render(
//   <>
//   <h1>{`This is ${fname} ${lname}`} </h1>
//   <p> My lucky number is {3*3} </p>
//   <p> My lucky number is {Math.random()} </p>
//   </>
//   ,document.getElementById('root')
// );

// const name="Md Asif Alam";

// const date=new Date().toLocaleDateString();
// const time=new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//   <h1>{`Hello My name is ${name}`} </h1>
//   <p> Todays date {date} </p>
//   <p> Todays time {time} </p>
//   </>
//   ,document.getElementById('root')
// );

//JSX attribute

const name="Md Asif Alam";
const img1="https://picsum.photos/200/300"
const img2="https://picsum.photos/250/300"
const img3="https://picsum.photos/300/300"
const links="https://classroom.pepcoding.com/resources/"

// .heading{
//   color: #fa9191;
//   text-align:center;
//   text-transform:capitialize;
//   font-weight:bold;
//   text-shadow: 0px 2px 4px #ffe9c5;
//   margin: 50px 0;
//   font-family: 'Josefin Sans', sans-serif;
// }

const heading={
  color: '#fa9191',
  textTransform: 'capitialize',
  textAlign:'center',
  fontWeight:'bold',
  textShadow: '0px 2px 4px #ffe9c5',
  margin: '50px 0',
  fontFamily: '"Josefin Sans", sans-serif'
}

ReactDOM.render(
  <>

  <h1 style={heading}>{`Hello My name is ${name}`} </h1>
  <div className='img_div'>
  <img src={img1} alt='randomImages'/>
  <img src={img2} alt='randomImages'/>
  <a href={links} target='_blank'>
  <img src={img3} alt='randomImages'/>
  </a>
  </div>
  </>
  ,document.getElementById('root')
);