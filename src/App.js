import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
   constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.getData = this.getData.bind(this);
  }
    onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
    submitForm(e) {
    e.preventDefault();
    this.getData()
  } 
  
  getData() {  
    const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(this.state),
  };
  const url = "https://post-a-form.herokuapp.com/api/movies/";
    
  fetch(url, config)
.then(res => res.json())
  .then(res => {
    if (res.error) {
      alert(res.error);
    } else {
      alert('Added film succesfully');
    }
  }).catch(e => {
    console.error(e);
    alert('Error during an employee addition');
  });
  }
  
  render () {
  return (
    
  


  // <div>
  //     <form>
  //        <text input="name"> </text>
  //        <text URL="name of poster"></text>
  //        <textarea alt="why do you like this film?"> </textarea>
  //        <button> Send</button>
  //     </form>
<div className="FormEmployee">
  <h1> Film entry</h1>
  <form onSubmit={this.submitForm}>
    <fieldset>
      <legend>Information</legend>
      <div className="form-data">
        <label htmlFor="lastname">Name of film</label>
        <input
          type="text"
          id="lastname"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
      </div>

      <div className="form-data">
        <label htmlFor="firstname">Film Poster URL</label>
        <input
          type="text"
          id="firstname"
          name="poster"
          onChange={this.onChange}
          value={this.state.poster}
        />
      </div>

      <div className="form-data">
        <label htmlFor="comment">Comment
        </label>
        <input
          type="comment"
          id="comment"
          name="comment"
          onChange={this.onChange}
          value={this.state.comment}
        />
      </div>
      <hr />
      <div className="form-data">
        <input type="submit" value="Send Form" />
      </div>
    </fieldset>
  </form>
</div>

  



  
  );
}
}

export default App;
