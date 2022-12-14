import express from 'express'
import cors from "cors"
import {Users} from './data.js'
const app = express();

app.use(cors())

app.get("/",(req,res)=>{
    const {q} = req.query

    const keys = ["first_name","last_name","email"]

    const search = (data) => {
        return data.filter((item)=>
            keys.some((key)=>item[key].toLowerCase().includes(q))
        )
    }
    return res.json(search(Users).splice(0,10))
})


app.listen(4000, () => { console.log("Backend server is running!") })

