import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions';
import Tweets from './tweets';

const msp = state => {
  return ({
  tweets: Object.values(state.tweets.all)    
  });
}

const mdp = dispatch => {
  return ({
    fetchTweets: () => dispatch(fetchTweets())
  });
}

export default connect(msp, mdp)(Tweets);
