const app = require("./server");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("V55");
  console.log(`Listening on ${PORT}`);
});
