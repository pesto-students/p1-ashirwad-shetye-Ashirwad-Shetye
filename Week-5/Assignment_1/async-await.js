
//async function

const getData = async () => {
  const response = await fetch();
  const data = await response.json();
  return data;
}

console.log(getData());