const express = require("express");
const { User } = require("../../models/user");
const { Event } = require("../../models/event");

const router = express.Router();

// Find All Events / GET
router.get("/", async (req, res) => {
  const events = await Event.find();

  if (!events)
    return res
      .status(400)
      .json({ isSuccess: false, msg: "이벤트가 존재하지 않습니다." });

  res.status(200).json({
    isSuccess: true,
    events: events,
  });
});

// Get Events with Pagination / GET
router.get("/skip/:skip", async (req, res) => {
  try {
    const eventCount = await Event.countDocuments();
    const eventFindResult = await Event.find()
      .skip(Number(req.params.skip))
      .limit(12)
      .sort({ date: -1 });

    res.status(200).json({
      isSuccess: true,
      allEventsCnt: eventCount,
      events: eventFindResult,
    });
  } catch (e) {
    res.status(400).json({ isSuccess: false, msg: e.message });
  }
});

// Create Event / POST
router.post("/create", (req, res) => {
  const { userId, title, content, date } = req.body;

  User.findOne({ _id: userId }).then((user) => {
    if (!user) return res.status(400).json({ isSuccess: false });

    const newEvent = new Event({
      title,
      content,
      date,
      creator: userId,
    });

    newEvent.save().then(() => {
      User.findByIdAndUpdate(userId, {
        $push: {
          events: newEvent._id,
        },
      })
        .then(() => {
          res.status(200).json({ isSuccess: true });
        })
        .catch((e) => {
          res.status(400).json({ isSuccess: false });
        });
    });
  });
});

// Get Event Detail / GET
router.get("/:id", (req, res) => {
  const id = req.params.id;

  Event.findOne({ _id: id }).then((event) => {
    if (!event)
      return res
        .status(400)
        .json({ isSuccess: false, msg: "해당 이벤트가 존재하지 않습니다." });

    res.status(200).json({ isSuccess: true, event });
  });
});

// Update Event / PUT
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { title, content, date } = req.body;

  Event.findByIdAndUpdate(id, {
    $push: {
      title,
      content,
      date,
    },
  })
    .then(() => {
      res.status(200).json({ isSuccess: true });
    })
    .catch((e) => {
      res.status(400).json({ isSuccess: false });
    });
});

// Delete Event / DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await User.deleteOne({ events: req.params.id });
    await Event.deleteOne({ _id: id });

    return res.status(200).json({ isSuccess: true });
  } catch (e) {
    return res.status(400).json({ isSuccess: false });
  }
});

module.exports = router;