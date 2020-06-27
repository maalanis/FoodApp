import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
       Authorization: 'Bearer eg14STX-_bxKJQD9QxUmOy_e-QgdcLejXFTNvycNO0PuwXrwJMsIEQS0Qy8tS0jgXJ_l5QTAWOWa2lxeTFWU6yLjyyhC7UhUUjOGQagi2Gt2XFzU6CtQzt2ebgTzXnYx'
   }
});