import { Mixin } from 'mixwith';

export default Mixin(baseClass => class extends baseClass {
	getIssue = async (issueId) => {
		return await this.database.model('Issue').findById(issueId).exec();
	}
});