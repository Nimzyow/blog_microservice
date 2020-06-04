const { app, handleEvent } = require("./server");
const axios = require("axios");

const PORT = process.env.PORT || 4002;

app.listen(PORT, async () => {
  console.log(`Server listening on ${PORT}`);

  const res = await axios.get("http://localhost:4005/events");

  for (const event of res.data) {
    console.log("Processing event:", event.type);

    handleEvent(event.type, event.data);
  }
});
