const app = require("./server");

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
