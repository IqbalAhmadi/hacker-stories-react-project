import * as React from 'react'

//“ Since we do not want to re-define a variable within a function every time this function runs, we could define this variable outside of the component as well. In this case, the title does not depend on any information that’s within the function component (e.g. parameters coming from the function’s signature), hence it’s okay to move it outside. Therefore it will be defined only once and not every time the function is called:” 👇 
// const title = 'React'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: ' Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
  title: 'Redux',
    url: 'https://redux.js.org/',
    author: ' Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

//! NOTE: We now have 3 components called App, List, and Search

// App component 
function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      {/* I moved these lines into its own function called Search  */} 
      {/* <label htmlFor="search">Search: </label>
      <input id="search" type="text" /> */}

      <Search />

      <hr />
      <List />  {/* This is the first react component created. I am using <List /> here as an extract of a large codes 👇 the we used to write. I wrote that code as separate function List that you can see below afterr commented codes }


      {/* <ul>
        {list.map(function (item) {
          return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            </li>
          )
        })}
      </ul> */}
    </div>
  );
}

// Search component 
function Search(){
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

// List component 
function List(){
  return(
    <ul>
      {list.map(function(item){
        return(
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default App;


// //* we can use js object too as below
// const welcome = {
//   greeting: 'Hey ',
//   title: 'React 👋',
// }
// const descMessage = {
//   message: 'This is my second project with React. So far, I love it ❤️.',
// }
// function App() { // A component has to start with a capital letter

//   return (
//     <div>
//       <h1>
//         {welcome.greeting}{welcome.title}
//       </h1>
//       <h2>
//         {descMessage.message}
//       </h2>
      
//       {/* <h1>Hello {title} 👨‍💻</h1> */}
//       <label htmlFor='search'>Search: </label>
//       <input id='search' placeholder='Enter here' type='text'/>
//       <p>React is one of the most powerful JavaScript libraries.</p>
//     </div>
//   );
// }

// export default App;

// “could define a function that returns the title and execute it within the curly braces” 👇
// import * as React from 'react';

// function getTitle(title) {
//   return title;
// }

// function App() {
//   return (
//     <div>
//       <h1>Hello {getTitle('React')}</h1>

//       <label htmlFor="search">Search: </label>
//       <input id="search" type="text" />
//     </div>
//   );
// }
// export default App;



//* Old boilerplate code 👇
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
