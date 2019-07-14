import React from 'react'
import { AuthRoute } from './util/route_util';
import { ProtectedRoute } from './util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './components/nav/navbar_container';

import MainPage from './components/main/main_page';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';

import TweetsContainer from './components/tweets/tweets_container';
import ProfileContainer from './components/profile/profile_container';
import TweetComposeContainer from './components/tweets/tweets_compose_container';

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <ProtectedRoute exact path="/tweets" component={TweetsContainer}/>
        <ProtectedRoute exact path="/profile" component={ProfileContainer}/>
        <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer}/>
      </Switch>

    </div>
  );
};

export default App;
