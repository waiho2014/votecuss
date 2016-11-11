import { Mixin } from 'mixwith';

export default Mixin(baseClass => class extends baseClass {
	getUser = async (userId) => {
		return await this.database.model('User').findById(userId).exec();
	}
});