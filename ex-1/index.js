const app = require('express')();
const graphqlHTTP = require('express-graphql');
const {graphql, buildSchema} = require('graphql');

const schema = buildSchema(`
	type Video {
		id: ID,
		title: String,
		duration: Int,
		watched: Boolean
	}

	type Query {
		video: Video
	}

	type Schema {
		query: Query
	}
`);

const resolvers = {
	video: () => ({
		id: '1',
		title: 'bar',
		duration: 90,
		watched: true
	})
};

const query = `
query myFirstQuery {
	video {
		id,
		title,
		duration,
		watched
	}
}`;

// mount middleware on /graphql
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true,
	rootValue: resolvers
}));

app.listen(3000, '127.0.0.1', () => {
	console.warn(`Server running on port 3000`);
});
