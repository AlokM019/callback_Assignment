//8.

async function dataFetch(url) {
   const response = await fetch(url);
   if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
   }
   return await response.json();
}

async function browserConsole() {
   const url = "https://jsonplaceholder.typicode.com/posts";
   try {
       const result = await dataFetch(url);
       console.log(result);
   } catch (error) {
       console.error("Error occurred: ", error);
   }
}

browserConsole();
