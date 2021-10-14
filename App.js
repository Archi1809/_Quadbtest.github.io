import React from "react";
import "./App.css";

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: "",
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Stream Movies </h1>{" "}
        {items
          ? items.map((item) => (
              <ul key={item.id}>
                {/* {item ? console.log(item.name) : console.log(item)} */}
				{console.log(item["id"])}
                <li>{item.name}</li>
                <li>{item.url}</li>
                <li> {item.genre}</li>
                <li>{item.language}</li>
				<button class="here-there">Summary</button>
              </ul>
            ))
          : null}
      </div>
    );
  }
}

export default App;
