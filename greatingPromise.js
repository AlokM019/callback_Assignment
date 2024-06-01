//Greating promise
function great(name){

   return new Promise(function exec(resolve,reject){

      if(name){
         resolve(`Hello, ${name}!`);
      }else{
         reject(`Name not found`)
      }
      
   });
}

great("Mithun")
.then(message=> {
   console.log(message)

})
.catch(error =>{
   console.log(error)
})

