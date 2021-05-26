// const MOCK_DATA = [];

// for(let id = 0; id < 10; id++){
//   MOCK_DATA.push({
//     id,
//     name:`mock kitten ${id}`,
//     price: 100.00,
//     image: "http://placekitten.com/200/300",
//     createdAt: 0,
//   });
// }
const BACKUP_LOCATION = './backup.json';
const fetchData = async (url='https://60a45748fbd48100179dbe04.mockapi.io/frontend/items')=>{
  try{
    return (await window.fetch(url)).json();
  }catch({message}){
    console.warn('Loading backup due to error: ', message);
    return (await window.fetch(BACKUP_LOCATION)).json();
  }
};
export default fetchData;
