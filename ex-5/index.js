const Promise = require('bluebird');
const graphqlHTTP = require('express-graphql');
const server = require('express')();
const root = require('./src/model/root');

server.use('/graphql', graphqlHTTP({
	schema: root,
	graphiql: true
}));

server.listen(3000, '127.0.0.1', () => {
	console.log('server started on port 3000');
});
