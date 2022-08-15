import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Tweet = ( { json }) => {

    const tweetData = {
        id: json.data.id,
        text: json.data.text,
        username: `@${json.includes.users[0].username}`,
    }

   return (
    <div className = "card">
      <Card style={{width: '50rem'}}>
        <Card.Body>
         <Card.Header>${tweetData.username}</Card.Header>
         <Card.Title>${tweetData.text}</Card.Title>
         <Button href={`https://twitter.com/${tweetData.username}/status/${tweetData.id}`}>
            Go To Tweet
         </Button>
         </Card.Body>
      </Card>
      </div>
   )


};

export default Tweet;