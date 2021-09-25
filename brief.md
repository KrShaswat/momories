### Intial Setup

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