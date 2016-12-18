const {GraphQLObjectType, GraphQLSchema} = require('graphql');
const VideoType = require('./../schemas/VideoType');

const queryType = new GraphQLObjectType({
	name: 'QueryType',
	description: 'The root query type',
	fields: {
		video: {
			type: VideoType,
			resolve: () => Promise.resolve({
				id: 1,
				title: 'GraphQL',
				duration: 180,
				watched: false
			})
		}
	}
});

module.exports = new GraphQLSchema({
	query: queryType
});
