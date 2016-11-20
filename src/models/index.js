import catagory   from './catagory';
import comment    from './comment';
import issue      from './issue';
import user       from './user';
import suggestion from './suggestion';
import analysis   from './analysis';
import opinion    from './opinion';
import fact       from './fact';

export default {
    bases : {
        catagory,
        comment,
        issue,
        user
    },
    discriminators : {
        comment : {suggestion, analysis, opinion, fact}
    }
}
