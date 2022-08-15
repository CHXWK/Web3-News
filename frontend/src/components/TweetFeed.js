import React, { useEffect, useReducer } from 'react'
import Tweet from "./Tweet";
import socketIOClient from 'socket.io-client';

const reducer = (state, action ) => {
    switch(action.type) {
        case "add_tweet":
            return {
                ...state,
                tweets: [action.payload, ...state.tweets],
                error: null,
                isWaiting: false,
                errors: [],
            };
        default:
            return state;
    }
}

const TweetFeed = () => {
    const initialState = {
        tweets: []
    };

const [state, dispatch] = useReducer(reducer, initialState);
const {tweets} = state;

const streamTweets = () => {
    let socket;

    socket = socketIOClient("http://localhost:4000");
    socket.on("connect", () => {});
    socket.on("tweet", (json) => {
        if (json.data) {
            dispatch({type: "add_tweet", payload: json});
        }
    });
}

    useEffect(() => {
        streamTweets();
    }, []);

    const showTweets = () => {
        if(tweets.length > 0) {
            return (
                <React.Fragment>
                    {tweets.map((tweet) => (
                        <Tweet key={tweet.data.id} json={tweet} />
                    ))}
                </React.Fragment>
            );
        }
    };

  return (
    <div>
        {showTweets()}
    </div>
  );
};

export default TweetFeed;
