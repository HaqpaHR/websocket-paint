const express = require("express");
const app = express();
const WSServer = require("express-ws")(app);
const aWss = WSServer.getWss();
const cors = require('cors')
const {json} = require("express");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.ws("/", (ws, req) => {
  ws.on("message", (msg) => {
    msg = JSON.parse(msg);
    switch (msg.method) {
      case "connection":
        connectionHandler(ws, msg);
        break;
        case "draw":
        broadcastConnection(ws, msg);
        break;
    }
  });
});

app.post();
app.get();

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});

const connectionHandler = (ws, msg) => {
  ws.id = msg.id;
  broadcastConnection(ws, msg);
};

const broadcastConnection = (ws, msg) => {
  aWss.clients.forEach((client) => {
    if ((client.id === msg.id)) {
      client.send(JSON.stringify(msg));
    }
  });
};
