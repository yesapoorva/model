let express = require('express')
let app = express();
const { auth } = require('express-openid-connect');
let indexRouter = require('./routes/index.js')

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'YoGjvyPDXdZ3lYAL9hzOp2dT7zjj1MMK',
    clientSecret: 'l3Pq5TRmK7HUBm1ycQTvmQBwc6IGSBnAyigbrmnfLdnbu0ql3EqDbVT8X9LeWDsp',
    issuerBaseURL: 'https://dev-w38yxw4z565hl5dx.us.auth0.com',
    authorizationParams: {
      respone_type: 'code',
      audience: "https://dev-w38yxw4z565hl5dx.us.auth0.com/api/v2/",
      // audience: "http://localhost:4000",
      scope: 'openid offline_access profile email'
  }
  };

app.set("views", "views")
app.set("view engine", "ejs")

app.use(auth(config));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use('/', indexRouter)

let port = 3000;
app.listen(port, () => {
    console.log(`app listening on ${port}`)
})