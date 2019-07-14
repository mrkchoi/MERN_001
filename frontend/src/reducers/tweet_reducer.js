import {
  RECEIVE_TWEETS,
  RECEIVE_USER_TWEETS,
  RECEIVE_NEW_TWEETS
} from '../actions/tweet_actions';

const TweetsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_TWEETS:
      newState.all = action.tweets.data;
    case RECEIVE_USER_TWEETS:
      newState.user = action.tweets.data;
    case RECEIVE_NEW_TWEETS:
      newState.new = action.tweet.data;
      return newState;
    default:
      return state;
  }
}

export default TweetsReducer;
