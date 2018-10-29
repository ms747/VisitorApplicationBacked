const express = require("express");
const cors = require("cors");

const AttendeeRoute = require("./rotues/attendee");
const SignUpRoute = require("./rotues/signup");
const { isAuth } = require("./authentication/is-auth");

const app = express();

app.use(
	cors({
		origin: ["http://10.10.10.1:3000","http://localhost:3000"],
		methods: ["GET", "POST"],
		credentials: true,
	})
);
app.use(express.json());
app.use("/static", express.static("uploads"));

app.use(AttendeeRoute);
app.use(SignUpRoute);
app.get("/isauth", isAuth);

app.use((err, req, res, next) => {
	console.log(err.statusCode);
	res.json({ error: err }).status(err.statusCode);
});

app.listen(7777);
