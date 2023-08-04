const express = require("express");
const router = express.Router();

const postsRouter = require("./posts.js");
const commentsRouter = require("./comments.js");
const userRouter = require('./users.js');

router.use(express.json());
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use('/users', userRouter);

module.exports = router;