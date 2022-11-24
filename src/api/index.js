import axios from 'axios';

export const getDigimon =()=>{
return axios.get('https://digimon-api.herokuapp.com/api/digimon')
.then(res=>res.data)
.catch(err=>console.log(err));
};

