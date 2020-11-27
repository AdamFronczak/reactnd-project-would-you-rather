import { getAllQuestions } from 'actions/questions';
import { getAllUsers } from 'actions/users';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './../logo.svg';
import './App.css';
import MainScreen from './MainScreen';
import Menu from './Menu';
import SignIn from './SignIn';

class App extends Component {
    componentDidMount() {
        this.props.getAllUsers();
        this.props.getAllQuestions();
    }

    render() {
        return (
            <Router>
                <LoadingBar loading={this.props.loading} />
                <div className="App">
                    <Menu />
                    { this.props.currentUser.id
                        ? 
                        <MainScreen />
                        :
                        <React.Fragment>
                            <img src={logo} className="App-logo" alt="logo" />
                            <div>
                                <SignIn />
                            </div>       
                        </React.Fragment>    
                    }
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loadingBar.default,
        currentUser: state.currentUser
    };
}

function mapDispatchToProps(dispatch) {
  return {
        getAllUsers: () => dispatch(getAllUsers()),
        getAllQuestions: () => dispatch(getAllQuestions())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
