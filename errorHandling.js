//9. display error message on the webpage

async function fetchData(url) {
   const response = await fetch(url);
   if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
   }
   return await response.json();
}

async function displayData() {
   const url = "https://jsonplaceholder.typicode.com/posts/123456789";
   const outputElement = document.getElementById('output');

   try {
       const result = await fetchData(url);
       outputElement.textContent = JSON.stringify(result, null, 2);
   } catch (error) {
       outputElement.textContent = `Error occurred: ${error.message}`;
   }
}

displayData();
