import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import NotFound from './NotFound';
import Question from './Question';
import QuestionList from './QuestionList';
import Results from './Results';

class MainScreen extends Component {
    render() {
        return (
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
                    <Question />
                </Route>
                <Route path="/results/:questionId">
                    <Results />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
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
