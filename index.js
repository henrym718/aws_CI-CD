import express from "express"
const app = express()
const port = 4001

    
app.use(express.json())
app.get("/", (req, res)=> res.status(200).json({status: 200}))
app.listen(port, ()=> console.log("Server running on port" + port))

export default app