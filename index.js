const express = require('express')
const graphQLHTTP = require('express-graphql').graphqlHTTP
const app = express()
const schema = require('./schema')

app.use('/graphql',graphQLHTTP({
 schema,
 graphiql:true
}))


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log("PORT Listening in  ==>>  ",PORT))