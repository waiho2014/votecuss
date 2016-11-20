import { Mixin } from 'mixwith';

export default Mixin(baseClass => class extends baseClass {
	getComment = async commentId => {
		return await this.database.model('comment').findById(commentId).exec();
	}
});
