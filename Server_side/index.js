const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors({
  origin: ["https://deploy-mern-1whq.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true,
}));
app.use(express.json());
app.post("/", (req, res)=>{
  res.json({
    "message" : "deployment working perfectly, yaaayyyy"
  })
})
 
app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
