const VideoType = require('./../schemas/VideoType');
const {createVideo} = require('./../mock/data');
const {
	GraphQLBoolean,
	GraphQLInt,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType
} = require('graphql');

const VideoInputType = new GraphQLInputObjectType({
	name: 'VideoInputType',
	fields: {
		title: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The title of a video'
		},
		duration: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'the length of the vide in seconds'
		},
		watched: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Whether or not the video has been watched'
		}
	}
});

module.exports = new GraphQLObjectType({
	name: "VideoMutations",
	description: "The root video mutation type",
	fields: {
		createVideo: {
			type: VideoType,
			args: {
				video: {
					type: new GraphQLNonNull(VideoInputType)
				}
			},
			resolve: (_, args) => {
				return createVideo(args.video);
			}
		}
	}
});
