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
    var {isLoaded} = this.state;

    function refreshPage(){
        window.location.reload(false);
    }
    if(!isLoaded){
      return(<div>Loading...</div>)
    }
    else{
      return (
        <div className="App">
          <div id="Setup">    
          {this.state.items.setup}
          </div>     
          <div id="Punchline">
           {this.state.items.punchline}
          </div>
          <div id="Button">
            <button onClick={refreshPage}>Click for another!</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
