const BACKUP_LOCATION = "./backup.json";
const fetchData = async (
  url = "https://60a45748fbd48100179dbe04.mockapi.io/frontend/items"
) => {
  try {
    throw new Error("remove after testing");
    return (await window.fetch(url)).json();
  } catch ({ message }) {
    console.warn("Loading backup due to error: ", message);
    return (await window.fetch(BACKUP_LOCATION)).json();
  }
};
export default fetchData;
