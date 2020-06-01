const app = require("./server");

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
