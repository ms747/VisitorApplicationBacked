const express = require("express");
const cors = require("cors");
	
const session = require("express-session");

const AttendeeRoute = require("./rotues/attendee");

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({ secret: "my test", resave: false, saveUninitialized: false }));
app.use("/static", express.static("uploads"));

app.use(AttendeeRoute);

app.listen(7777);
