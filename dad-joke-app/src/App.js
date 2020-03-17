import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        }
    }

    componentDidMount(){
      fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
    }

  render(){
    var {isLoaded, items} = this.state;

    if(!isLoaded){
      return(<div>Loading...</div>)
    }
    else{
      return (
        <div className="App">
          <ul>
            {items.map(item => (
                <li key={item.id}>
                  {item.setup}
                </li>
            ))};
          
          </ul>
        </div>
      );
    }
  }
}

export default App;
