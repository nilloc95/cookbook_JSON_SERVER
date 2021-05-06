const greeting = 'Hello World';
console.log(greeting);

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result
};

let response = getData('http://localhost:3000/recipes/1')
  .then(data => {
    test.textContent += data.title
  });

console.log(test)
