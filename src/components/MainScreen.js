import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import NewQuestion from './NewQuestion';

class MainScreen extends Component {
    render() {
        return (
            <Router>
                <Menu />

                <Switch>
                    <Route path="/" exact>

                    </Route>
                    <Route path="/newQuestion">
                        <NewQuestion />
                    </Route>
                    <Route path="/leaderBoard">
                        
                    </Route>
                    <Route path="/question/:questionId">
                        
                    </Route>
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
