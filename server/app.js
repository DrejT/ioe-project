// Import the WebSocket library
const WebSocket = require("ws");

// Create a new WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Broadcast function to send messages to all clients
function broadcast(message) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

// When a connection is established
wss.on("connection", (ws) => {
  console.log("A new client connected!");

  // Send a welcome message to the new client
  ws.send("Welcome to the WebSocket server!");

  // Set up message event listener
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Broadcast received message to all clients
    broadcast(`Client says: ${message}`);
  });

  // Handle client disconnection
  ws.on("close", () => {
    console.log("A client disconnected.");
  });

  // Handle error events
  ws.on("error", (error) => {
    console.error(`WebSocket error: ${error}`);
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
