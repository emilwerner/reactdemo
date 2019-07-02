
import data from './MOCK_DATA2.json';

export default class coworkerService {
    getFilteredCoworkers(filter) {
        if(!filter){
            return data.slice(0,12);
        }       
        var filteredItems = data.filter(item => {
            const name = item.first_name + " " + item.last_name;
            return name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
        })
        return filteredItems.slice(0,12);
    } 
}

