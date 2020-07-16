import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
// const APIKEY = "&apikey=trilogy";
const query = "?results=200&nat=u";

export default {
  search: function () {
    return axios.get(BASEURL + query);
  }
};
