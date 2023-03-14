const urlRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-z0-9_-]{5,30}[a-z0-9]$/i;
function validateLinkedInProfile(input){
    if(urlRegex.test(input)){
        console.log(`${input} is a valid Linkedin URL`);
    }
    else{
        console.log(`${input} is not a valid linkedin URL`);
    
    }
    }
    
    validateLinkedInProfile("https://www.linkedin.com/in/nitish123");
validateLinkedInProfile("https://www.linkedin.com/in/reetish");
validateLinkedInProfile("https://www.linkedin.com/in/satish");
validateLinkedInProfile("https://www.linkedin.com/in/rahu");