module.exports = {
	multipleMongooseToObject: function (mongooseArray) {
		return (mongooseArray = mongooseArray.map((item) => item.toObject()));
	},
	mongooseToObject: function (mongoose) {
		return mongoose ? mongoose.toObject() : mongoose;
	},
};
