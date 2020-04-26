import React, { useState, useEffect } from "react";
import { render } from "react-dom";

export default function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [placeholder, setPlaceholder] = useState("Loading");

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/task-list")
      .then(response =>
        response.status > 400
          ? setPlaceholder("Something went wrong!")
          : response.json()
      )
      .then(data => {
        setData(data);
        setIsLoaded(true);
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <ul>
        {isLoaded
          ? data.map(item => (
              <li key={item.id}>
                <input type="radio" checked={item.isDone} readOnly />
                {item.text}
              </li>
            ))
          : placeholder}
      </ul>
    </>
  );
}

render(<App />, document.getElementById("app"));





// import React, { Component } from "react";
// import { render } from "react-dom";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       loaded: false,
//       placeholder: "Loading"
//     };
//   }

//   componentDidMount() {
//     fetch("http://127.0.0.1:8000/api/task-list")
//       .then(response => {
//         if (response.status > 400) {
//           return this.setState(() => {
//             return { placeholder: "Something went wrong!" };
//           });
//         }
//         return response.json();
//       })
//       .then(data => {
//         this.setState(() => {
//           return {
//             data,
//             loaded: true
//           };
//         });
//       });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.data.map(item => {
//           return (
//             <li key={item.id}>
//               {item.id} - {item.text}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

// export default App;

// const container = document.getElementById("app");
// render(<App />, container);
