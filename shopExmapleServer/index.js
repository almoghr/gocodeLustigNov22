import express from "express";
const app = express();

// REST API
// CRUD
// create - post - more secured so login \ register will also go with post
// read - get
// update - put \ patch
// delete - delete

app.use(express.json());

app.get("/api/greeting", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/product/:productId/", (req, res) => {
  const params = req.params;
  console.log(params);
  res.send(params.productId);
});
app.get("/api/calculator", (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  if (req.query.requestor.toLowerCase() === "tictac") {
    console.log("hello there");
  }
  res.send(`the answer is ${sum}`);
});

app.post("/api/addProduct", (req, res) => {
  const newProduct = { ...req.body };
  res.send(newProduct);
});
app.put("/api/editProduct/:productId", (req, res) => {
  const { productId } = req.params;
  const obj = {
    title: "necklace",
    price: "500",
    description: "24k Gold Necklace",
    isForFemales: true,
  };
  const newProductProperties = { ...req.body };
  const newProductAfterMerge = { ...obj, ...newProductProperties };
  res.send(newProductAfterMerge);
});

app.delete("/api/deleteProduct/:productId", (req, res) => {
  const arrayOfObj = [
    {
      id: 1,
      title: "necklace",
      price: "500",
      description: "24k Gold Necklace",
      isForFemales: true,
    },
    {
      id: 2,
      title: "necklace",
      price: "500",
      description: "24k Gold Necklace",
      isForFemales: true,
    },
    {
      id: 3,
      title: "necklace",
      price: "500",
      description: "24k Gold Necklace",
      isForFemales: true,
    },
    {
      id: 4,
      title: "necklace",
      price: "500",
      description: "24k Gold Necklace",
      isForFemales: true,
    },
    {
      id: 5,
      title: "necklace",
      price: "500",
      description: "24k Gold Necklace",
      isForFemales: true,
    },
  ];

  const { productId } = req.params;
  const productIndex = arrayOfObj.findIndex(
    (p) => p.id === parseInt(productId)
  );
  const clone = [...arrayOfObj];
  if (productIndex === -1) {
    res.send({error:"you have sent a wrong id of a product, there is no such product with this id",
      clone,
    });
  }
  clone.splice(productIndex, 1);
  res.send(clone);
});
app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
