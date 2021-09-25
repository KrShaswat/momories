## Intial Setup

1. Make two folders
   1. client - npx create-react-app ./
   2. server - npm init -y
2. Modules reaquired
   1. Server: 
      1. body-parser
      2. cors: cross origin resource sharing
      3. express
      4. mongoose
      5. nodemon
   NOTE: to use import in js we need to add a line in package.json file below "main": "type": "module",

   2. Client:
      1. redux - state management
      2. moment - to work with time
      3. redux-thunk - to use async fucntions using redux
      4. axios - to access apis
      5. react-file-base64 - react component to convert file to base64
---
## App initailization and check

### 1. Client: 
   1. delete src - then create new src and index.js, App.js
   2. index.js
      1. import - React, ReactDOM
      2. import from local: App.js
      3. Render: ReactDOM.render(<App />, document.getElementById('root'))
   3. App.js
      1. import - react
      2. functions (exported)- App - with any h1 (to check)

### 2. Server: 
   1. initialize the express app 
   2. now use all methods in that app instance
      1. app.use(express.json(limit: "30mb"))
      2. app.use(express.urlencoded(limit: "30mb", extended: "true"))

## Database setup (mongoDb atlas)
   1. go to mongodb website make an account
   2. Build a cluster
      1. 