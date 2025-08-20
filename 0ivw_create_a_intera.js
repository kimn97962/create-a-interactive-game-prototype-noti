// Interactive Game Prototype Notifier

// Game Data
const games = [
  { id: 1, name: "Escape the Maze", prototype: true, notification: "New prototype update available!" },
  { id: 2, name: "Space Invaders", prototype: false, notification: "" },
  { id: 3, name: "Puzzle Master", prototype: true, notification: "Prototype update available! Try the new level!" },
  { id: 4, name: "Racing Champions", prototype: false, notification: "" },
  { id: 5, name: "Virtual Quest", prototype: true, notification: "Prototype updated! Explore the new world!" }
];

// Notifier Function
function notify() {
  const prototypeGames = games.filter(game => game.prototype);
  const notifications = prototypeGames.map(game => game.notification);

  // Display notifications
  notifications.forEach(notification => console.log(notification));
}

// Run Notifier
notify();