const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE (FAIL)
app.post("/api/test-error", (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        const err = new Error("Name is required");
        err.statusCode = 400;
        return next(err);
    }

    res.json({ success: true });
});

// GLOBAL ERROR MIDDLEWARE (LAST)
app.use(errorHandler);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});