import axios from "axios";

async function getData(id) {
  const { data: firstRequest } = await axios(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const { data: secondRequest } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  const newObj = { firstRequest, Posts: secondRequest };
  console.log(newObj);
}

export default getData;
