const {GraphQLID, GraphQLObjectType, GraphQLSchema} = require('graphql');
const VideoType = require('./../schemas/VideoType');
const {getVideoById} = require('./../mock/data');

const queryType = new GraphQLObjectType({
	name: 'QueryType',
	description: 'The root query type',
	fields: {
		video: {
			type: VideoType,
			args: {
				id: {
					type: GraphQLID,
					description: 'The unique identifier for a given video'
				}
			},
			resolve: (_, {id}) => getVideoById(id)
		}
	}
});

module.exports = new GraphQLSchema({
	query: queryType
});
