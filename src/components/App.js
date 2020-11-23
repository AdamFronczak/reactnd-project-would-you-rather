import { getAllUsers } from 'actions/users';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import logo from './../logo.svg';
import './App.css';
import MainScreen from './MainScreen';
import SignIn from './SignIn';

class App extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <React.Fragment>
                <LoadingBar loading={this.props.loading} />
                <div className="App">
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
            </React.Fragment>
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
        getUsers: () => dispatch(getAllUsers())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
