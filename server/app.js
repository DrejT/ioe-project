const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const port = 8080;

// Create an HTTP server
const server = http.createServer(app);

// Create a new WebSocket server and attach it to the HTTP server
const wss = new WebSocket.Server({ noServer: true });

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

// Handle upgrade request and route it to WebSocket
server.on("upgrade", (request, socket, head) => {
  const pathname = request.url;

  if (pathname === "/ws") {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit("connection", ws, request);
    });
  } else {
    socket.destroy();
  }
});

// Define a simple GET route
app.get("/", (req, res) => {
  res.send("WebSocket server is running on ws://localhost:8080/ws");
});

// Start the server
server.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
  console.log(`WebSocket server is running on ws://localhost:${port}/ws`);
});
