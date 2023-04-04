const images = {};

const imageContext = require.context(
	"../assets/skills",
	true,
	/\.(png|jpe?g|svg)$/
);
imageContext.keys().forEach((key) => {
	const imageName = key.replace(/^.*[\\/]/, "");
	images[imageName] = imageContext(key);
});

export default images;
