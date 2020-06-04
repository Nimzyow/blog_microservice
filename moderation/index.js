const app = require("./server");

const PORT = process.env.PORT || 4003;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
