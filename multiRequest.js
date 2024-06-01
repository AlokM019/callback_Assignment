//7. multiple request and store their data into single object with the keys
async function multipleRequest(){
   const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1")
   const response2 = await fetch( "https://jsonplaceholder.typicode.com/posts/1")
   const to_do = await response1.json();
   const post_details = await response2.json();
   let result = {todo: to_do, post: post_details}
   console.log(result)
}

multipleRequest()

//another way with the error handling
async function fetchdata(url){

   const response = await fetch(url);
   return await response.json();
}

async function combinedData(){
   const todoUrl = "https://jsonplaceholder.typicode.com/todos/1"
   const postUrl = "https://jsonplaceholder.typicode.com/posts/1"

   try{
      const  [todoresponse,postresponse] = await Promise.all([
         fetchdata(todoUrl),
         fetchdata(postUrl)
      ])

      const combinedData = {
         todo2: todoresponse,
         post2: postresponse
      }
      console.log(combinedData);

   }catch(error){
      console.error(`Error while fetching data: `,error)
   }
   
}

combinedData();