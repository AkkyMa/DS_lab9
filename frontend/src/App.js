import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return <MainPage/>
}

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.update_comments = this.update_comments.bind(this);
        this.on_click = this.on_click.bind(this);
        this.state = {'comments': []}
    }

    update_comments() {
        fetch("/api/get_comments")
            .then(response => response.json())
            .then(data => this.setState({comments: data.comments}))
    }

    componentDidMount() {
        setInterval(this.update_comments, 5000);
        this.update_comments();
    }

    on_click(e) {
        e.preventDefault();

        let nickname_element = document.getElementById("nickname-input");
        let message_element = document.getElementById("message-input");

        let nickname = nickname_element.value;
        let message = message_element.value;

        message_element.value = '';

        fetch('/api/post_comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'author': nickname, 'text': message})
        })
        .then(this.update_comments)
    }

    render() {
        return <div id="main-div">
            <div id="main-window">
                <div id="nickname-div">
                    <form>
                        <label id="nickname-label" htmlFor="nickname-input">Nickname:</label>
                        <input id="nickname-input"></input>
                    </form>
                </div>
                <Comments comments={this.state.comments}/>
                <div id="message-div">
                    <form className="take-full">
                        <input type='text' id="message-input"></input>
                        <input type='submit' id="message-submit" value="Надіслати" onClick={this.on_click}/>
                    </form>
                </div>
            </div>
        </div>
    }
}

class Comments extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div id="comments-div">
            {this.props.comments.map(function(com) {
                return <div>
                    <div className="msg-header-div">
                        <p>{com.author} пишет:</p>
                    </div>
                    <div className="msg-body-div">
                        <p>{com.text}</p>
                    </div>
                </div>
            })}
        </div>
    }
}

export default App;
