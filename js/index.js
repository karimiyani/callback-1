console.log("start");
function loginUser (email, password){
    setTimeout ( () => {
        console.log("data is ready");
        return  { userEmail : email};
    },3000);  
}
const user = loginUser("gomnam@yahoo.com", 1234);
console.log("end");
// start
// end
// data is ready


console.log(user);
// start
// end
// undefined
// data is ready

console.log("*********solution*********");

//solution 1
console.log("start");

function loginUser2 (email, password, callback){
    setTimeout ( () => {
        console.log("data is ready");
        callback  ({ userEmail : email});
    },3000);  
}
const user2 = loginUser2("gomnam@yahoo.com", 1234, (user2)=>{
    console.log(user2);
});
console.log("end");
// start
// end
// data is ready
// {userEmail: 'gomnam@yahoo.com'}