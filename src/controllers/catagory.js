import { Mixin } from 'mixwith';

export default Mixin(baseClass => class extends baseClass {
	getCatagory = async catagoryId => {
		return await this.database.model('catagory').findById(catagoryId).exec();
	}
});
