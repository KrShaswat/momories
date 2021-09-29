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

### Database setup (mongoDb atlas)
   1. go to mongodb website make an account
   2. Build a cluster
   3. give database access (dont use special characters or use hex code of that special characcter in password)
   4. WITHOUT dotenv
      1. const CONNECTION_URL = 'mongo app connection url, add your password remove <>'
      2. const PORT = process.env.PORT || 5000;
   5. Connect to Atlas and check (add a then and catch to show error)
      ```javascript 
      mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
         .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
         .catch((error) => console.log(error.message));
      ```
___
## Setup Folder Structure - for scalability

### Routes folder

   1. setup routes folder
      1. make a routes folder in server
      2. make a files posts.js
         1. import express
         2. declare a varible to method express.Router()
         3. make a root get request
         ```javascript
            import express from 'express'
            const router = express.Router()
            router.get('/', (req, res) => {
               res.send('THIS WORKS')
            });
            export default router;
         ```
      3. setup routes in index.js
         1. import the router file
         ```javascript
            import postRoutes from './routes/posts.js';

            const app = express();

            app.use('/posts', postRoutes);
         ```
      4. check on localhost:5000/posts
### Controllers

   1. make a new folder controller in server
   2. make new file in controller as posts.js
      ```javacript
         export const getPosts = (req, res) => {
            res.send('this works')
         }
      ```
   3. import the posts.js from controllers folder in routes post.js
      ```javascript
         import { getPosts } from '../controllers/posts.js';
         const router =express.Router()
         router.get('/', getPosts)
         export default router
      ```

### Models
   1. make a models folder in server
   2. make a file in models PostMessage.js
   3. import mongoose (since here we are making a mongo schema)
   4. make a Schema
   5. make a model through schema
   6. export model
   ```javascript
      import mongoose from 'mongoose'
      const anotherSchema = mongoose.Schema({
         key: Type
      })
      const Model = mongoose.model('Model', anotherSchema)
      export default Model
   ```
   7. import the Schema into controller to give the logic to create the posts