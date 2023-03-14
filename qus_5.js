const urlRegex = /^https?:\/\/[\w\d\S]+?\.[\w]+$/i;

function checkUrl(input){
if(urlRegex.test(input)){
    console.log(`${input} is a valid URL`);
}
else{
    console.log(`${input} is not a valid URL`);

}
}

checkUrl("https://www.google.com")