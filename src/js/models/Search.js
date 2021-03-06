import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`http://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;

            // console.log(res); // Connection status
            // console.log(this.result); // Search result
        } catch (error) {
            alert(error);
        }

    }
}