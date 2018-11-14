import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Rank from './Components/Rank/Rank';
import Predictions from './Components/Predictions/Predictions';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initalState = {
  input: '',
  imageUrl: '',
  box: {},
  pred: {},
  route: 'home',
  isSignedIn: false,
  isPredTriggered: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }  
}

class App extends Component {
  constructor() {
    super();
    this.state = initalState
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }  
    })
  }

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const img = document.getElementById('inputImage');
    const width = Number(img.width);
    const height = Number(img.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  calculatePrediction = data => {
    const age = data.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name;
    const gender = data.outputs[0].data.regions[0].data.face.gender_appearance.concepts;   
    const multicultural_appearance = data.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts;

    return {
      age: age,
      gender: gender,
      multicultural_appearance: multicultural_appearance
    }
  }

  displayFaceBox = (box) => {
    this.setState({box:box});
  }

  predictionTrigger = (pred) => {
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(this.calculatePrediction(response));
      this.setState({pred: this.calculatePrediction(response)});
      this.setState({isPredTriggered: true})
    })
    .catch(err => console.log(err))
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          // instead of changing the all object with Object.assign we can modify
          // just the property entries of user
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
        .catch(err => console.log(err));
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err))
  }  

  onPredDone = () => {
    this.setState({isPredTriggered: false})
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initalState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const {isSignedIn, isPredTriggered,imageUrl, route, box, pred} = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions}/>
        <Navigation isSignedIn= {isSignedIn} onRouteChange= {this.onRouteChange}/>
        { route === 'home' ?
          <div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} predictionTrigger={this.predictionTrigger}/> 
            <div>
              {isPredTriggered ? <Predictions pred={pred} onPredDone={this.onPredDone}/> : ''}
            </div>
          </div>
          :
          (
            this.state.route === 'signin' ?
            <Signin loadUser={this.loadUser} onRouteChange= {this.onRouteChange}/> 
            :
            <Register loadUser={this.loadUser} onRouteChange= {this.onRouteChange}/> 
          )
        }
      </div>
    );
  }
}

export default App;
