var config = require("./config/config.js");
var spawn = require("./src/spawn.js");
var WebSocket = require("ws");

console.log("[SERVER] Starting Server...");
var Conn = new WebSocket("ws://" + Settings.client + "/" + Settings.port);

console.log("[SERVER] Server Started at " + Conn + "! Waiting for Connections...";