import React, { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      textArea: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      textArea: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.fname, this.state.lname, this.state.textArea);
    this.setState({
        fname: "",
        lname: "",
        textArea: ""
      });
    if (this.state.fname === "") {
      alert('First Name needed')
    } else if (this.state.lname === "") {
      alert('Last Name needed')
    } else if (this.state.fname === "" && this.state.lname === "") {
      alert('First and Last Name needed')
    };
  }

  render() {
    return (
      <div className="footer">
        <hr />
        <div className="comments">
          <h1 className="review">Leave us a comment about service!</h1>
          <input className="name" type="text" placeholder="First Name" />
          <input className="name" type="text" placeholder="Last Name" />
          <br />
          <textarea rows="5" cols="36" id="feedback" placeholder="Give us your feedback..." onChange={this.handleChange} value={this.state.textArea} />
        </div>
        <div className="submit-button">
          <button onClick={this.handleSubmit} type="submit">Submit</button>
        </div>
        <footer>
          <p className="copyright">Copyright &copy; 1965 All Rights Reserved</p>
        </footer>
      </div>
    );
  }
}

export default Footer;