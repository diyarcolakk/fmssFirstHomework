import axios from "axios"; //Getting axios package from axios.

async function getData(id) {
  //Getting first request
  const { data: firstRequest } = await axios(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  //Getting second request
  const { data: secondRequest } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  const newObj = { firstRequest, Posts: secondRequest }; // Two request in a same Object that was required
  console.log(newObj);
}

// I am going to export here because i need to import in index.js
export default getData;
