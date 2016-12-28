const VideoQuery = require('./../queries/VideoQuery');
const VideoMutation = require('./../mutations/VideoMutation');
const {GraphQLSchema} = require('graphql');

module.exports = new GraphQLSchema({
	query: VideoQuery,
	mutation: VideoMutation
});
