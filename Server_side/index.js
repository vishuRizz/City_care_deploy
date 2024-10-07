const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors({
  origin: ["https://city-care.vercel.app"], 
  methods: ["POST", "GET"],
  credentials: true, 
}));
app.use(express.json());
app.get("/", (req, res)=>{
  res.json({
    "message" : "deployment working perfectly, yaaayyyy"
  })
})
 
app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
