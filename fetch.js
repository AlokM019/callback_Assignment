//6.Fetch results asynchronously

async function fetchData() {
   const response = await fetch(" https://jsonplaceholder.typicode.com/todos/1");
   const data = await response.json();
   console.log(data);
}

fetchData() //getting the output



//another way to fetch and handle the error if occurs
async function fetchDataAndLog() {
   try {
     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
     if (!response.ok) {
       throw new Error('Network response was not ok ' + response.statusText);
     }
     const data = await response.json();
     console.log(data);
   } catch (error) {
     console.error('There has been a problem with your fetch operation:', error);
   }
}
 
fetchDataAndLog();
 