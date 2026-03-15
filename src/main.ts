import app from "./app"
import router from "./router"

const port = process.env.PORT || 3000

app.use('/api/v1', router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
