const express = require("express");
const cors = require("cors");

const AttendeeRoute = require("./rotues/attendee");
const SignUpRoute = require("./rotues/signup");

const app = express();

app.use(
	cors({
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
		credentials: true,
	})
);
app.use(express.json());
app.use("/static", express.static("uploads"));

app.use(AttendeeRoute);
app.use(SignUpRoute);

app.listen(7777);
