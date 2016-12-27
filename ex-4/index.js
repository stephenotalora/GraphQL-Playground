const Promise = require('bluebird');
const graphqlHTTP = require('express-graphql');
const server = require('express')();
const VideoQuery = require('./src/model/queries/VideoQuery');

server.use('/graphql', graphqlHTTP({
	schema: VideoQuery,
	graphiql: true
}));

server.listen(3000, '127.0.0.1', () => {
	console.log('server started on port 3000');
});
