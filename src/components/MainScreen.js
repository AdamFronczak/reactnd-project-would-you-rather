import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LeaderBoard from './LeaderBoard';
import Menu from './Menu';
import NewQuestion from './NewQuestion';
import Question from './Question';
import QuestionList from './QuestionList';

class MainScreen extends Component {
    render() {
        return (
            <Router>
                <Menu />

                <Switch>
                    <Route path="/" exact>
                        <QuestionList />
                    </Route>
                    <Route path="/add">
                        <NewQuestion />
                    </Route>
                    <Route path="/leaderboard">
                        <LeaderBoard />
                    </Route>
                    <Route path="/questions/:questionId">
                        <Question questionId={1} />
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
