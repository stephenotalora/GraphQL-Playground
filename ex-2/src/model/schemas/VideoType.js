const {
	GraphQLID,
	GraphQLInt,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString,
	GraphQLBoolean
} = require('graphql');

module.exports = new GraphQLObjectType({
	name: 'video',
	description: 'A video for an app',
	fields: {
		id: {
			type: GraphQLID,
			description: 'The id of a video'
		},
		title: {
			type: GraphQLString,
			description: 'The title of a video'
		},
		duration: {
			type: GraphQLInt,
			description: 'The length of the video in seconds'
		},
		watched: {
			type: GraphQLBoolean,
			description: 'Whether or not the video has been watched'
		}
}});
