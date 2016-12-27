const VideoType = require('./../schemas/VideoType');
const {getAllVideos, getVideoById} = require('./../mock/data');

const {
	GraphQLID,
	GraphQLList,
	GraphQLObjectType,
	GraphQLSchema
} = require('graphql');

const VideoArgs = {
	id: {
		type: GraphQLID,
		description: 'The unique identifier for a given video'
	}
};

const queryType = new GraphQLObjectType({
	name: 'QueryType',
	description: 'The root query type',
	fields: {
		video: {
			type: VideoType,
			args: VideoArgs
			resolve: (_, {id}) => getVideoById(id)
		},
		videos: {
			type: new GraphQLList(VideoType),
			resolve: getAllVideos
		}
	}
});

module.exports = new GraphQLSchema({
	query: queryType
});
