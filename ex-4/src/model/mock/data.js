const Promise = require('bluebird');

const VIDEO_MOCK = [{
	id: 'a',
	title: 'Rouge One a Star Wars Story',
	duration: 8040,
	watched: true
}, {
	id: 'b',
	title: 'Moana',
	duration: 8820,
	watched: true
}];

exports.getVideoById = (id) => {
	const [video] = VIDEO_MOCK.filter((video) => video.id === id);
	return Promise.resolve(video);
};

exports.getAllVideos = () => {
	return Promise.resolve(VIDEO_MOCK);
};

exports.createVideo = ({duration, title, watched}) => {
	const newVideo = {
		id: (new Buffer(title, 'utf8')).toString('base64'),
		duration, title, watched
	};

	VIDEO_MOCK.push(newVideo);
	return newVideo;
};
