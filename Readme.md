# Real time web

A 1v1 multiplayer bomberman game created with Socket.io where 2 users can create a room to play a game of bomberman against each other. They have the ability to chat while playing.

<img src="https://user-images.githubusercontent.com/43671292/78981850-226e1b80-7b21-11ea-9ba1-9378acc65393.png" width="1000"/>

## Data life cycle

<img src="https://user-images.githubusercontent.com/43671292/81092633-2f541400-8f01-11ea-8152-66f6016cf474.png" width="1000" />

## Installation

```
git clone https://github.com/GiovanniKaaijk/real-time-web-1920.git
```
Get into the right folder
```
cd /real-time-web-1920
```
Install used npm packages
```
npm install
```
Run the project
```
npm start
```
Run the webpack builder
```
npm run dev
```

## Socket events
| Event             | When                                   | What does it do?                                                     |
|-------------------|----------------------------------------|----------------------------------------------------------------------|
| message    | if someone sends a message            | Sends a message in the current room                          |
| createGame        | if someone creates a new room | Creates a new room and puts this user in the room |
| joinGame         | When a user joins a room      | Puts the user in the room and starts the game                         |
| updatePlayer | when a player moves                  | Updates the player position    |
| placeBomb          | when a player presses spacebar           | Places a bomb on the player position |
| randombomb       | when a new tweet comes in                 | Generates a random spawn position for the bomb                |

## Features

### Rooms
Users can create their own room to play a game in with a friend. This works with the Socket.io room feature.
```js
socket.join(`room-` + gameID)
```

### Chat
Within the room, players can chat with each other. The chat will only be send within that room
```js
io.to(`room-${data.gameID}`).emit('message', data.input)
```

### Twitter API
By streaming from the Twitter API, I keep track of incoming tweets. When a new tweet with the keyword bomb is being posted, a random bomb spawns within the playing field in every room.
```js
client.stream('statuses/filter', {track: 'bomb'}, function(stream) {
    stream.on('data', function(event) {
        console.log(event.text);
        if(event.text !== undefined) {
        console.log(event.text);
        if(lastTweet !== event.text) {
            io.emit('randombomb', ['bomb', 'random',  Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1])
        }
        lastTweet = event.text
        }
    });
});
```

### Map creator
Each room will generate an unique bomberman playing field for that single room. This is generated by the server and sent to the users via the socket.
<img src="https://user-images.githubusercontent.com/43671292/78982365-454cff80-7b22-11ea-81d1-f50889b1c350.png" width="1000"/>

## Upcoming features

- Tournaments
- Keep track of user stats by having user accounts

## API

To run the API I am using an NPM package called Twitter, this package makes it easier to use the Twitter API. When using the app, set up an .env file containing the following keys:

```js
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: String,
  consumer_secret: String,
  access_token_key: String,
  access_token_secret: String
});

```

### Packages

- "chalk": "^4.0.0",
- "dotenv": "^8.2.0",
- "ejs": "^3.0.2",
- "express": "^4.17.1",
- "http": "0.0.1-security",
- "path": "^0.12.7",
- "socket.io": "^2.3.0",
- "twitter": "^1.7.1",
- "webpack": "^4.42.1"

## Keep up to date
Make sure you pull the repository once in a while since we are still working on this project, you can do this by using ```git pull```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
