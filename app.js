const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const { default: mongoose } = require('mongoose');

const schema = require('./server/schema/schema');

const app = express();
const cors =require("cors");
const port = process.env.PORT||4000;

app.use(cors());
app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema: schema
    
}));

 mongoose.connect(`mongodb+srv://nivedhaa:m1tIoZPhf8j7UZxQ@cluster-graph.cvhycmc.mongodb.net/?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology:true})


// mongoose.connect(`mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPassword}@cluster-graph.cvhycmc.mongodb.net/${process.env.mongoDatabase}?retryWrites=true&w=majority
// `,{useNewUrlParser: true, useUnifiedTopology:true})
.then(()=> {
app.listen({port:port},()=>{ 
    console.log('Listening for requests on my awesome port 4000');
});
})
.catch((e)=> console.log("Error:::"+e));