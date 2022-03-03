
  
  function validation() {

    var firstName=document.getElementById("fname").value
    var lastName=document.getElementById("lname").value
    var email=document.getElementById("email").value
    
    
    if ( firstName=="" || lastName ==""|| email=="" )
        {alert("Information required");
        
      return false
      }
  
    else 
  
    {
      
        onSubmitted()
        
        
    }
  
  };
  
  function onSubmitted () {
  
    let checkedLanguage;
  
    if(document.getElementById("chinese").checked === true)
    
    {checkedLanguage = "chinese"}
  
    else if(document.getElementById("japanese").checked === true)
    
    {checkedLanguage = "japanese"}
  
    else if(document.getElementById("german").checked === true)
    
    {checkedLanguage = "german"}

    let checkedLanguage;
  
    if(document.getElementById("french").checked === true)
    
    {checkedLanguage = "french"}
  
    else if(document.getElementById("spanish").checked === true)
    
    {checkedLanguage = "spanish"}
  
    else if(document.getElementById("italian").checked === true)
    
    {checkedLanguage = "italian"}

    if(document.getElementById("arabic").checked === true)
    
    {checkedLanguage = "arabic"}
  
    else if(document.getElementById("portugese").checked === true)
    
    {checkedLanguage = "portugese"}
  
    else if(document.getElementById("much more").checked === true)
    
    {checkedLanguage = "much more"}

  
    sessionStorage.setItem("firstName", document.getElementById("fname").value);
    sessionStorage.setItem("lastName", document.getElementById("lname").value);
    sessionStorage.setItem("email",document.getElementById("email").value);
    sessionStorage.setItem("lenguage",checkedLanguage);
    sessionStorage.setItem("text",document.getElementById("text").value);
  
    
  
    alert("Go Back");
    
    
    
    
  }
  
  function newPage (){
      
          
    var firstname = sessionStorage.getItem("firstName");
    var lastname = sessionStorage.getItem("lastName");
    var email=sessionStorage.getItem("email");
    var lenguage=sessionStorage.getItem("lenguage");
    var text=sessionStorage.getItem("text");
    
  
  
    if(lenguage=="english") 
    {
        //document.getElementById(
        document.getElementById("result").innerHTML = firstname+" "+lastname+" "+email
        document.getElementById("textarea").innerHTML ="comments: "+text
    }
  
    else if (lenguage=="deutsch")
    {
        document.getElementById("result").innerHTML = firstname+" "+lastname+" "+email
        document.getElementById("textarea").innerHTML =""+text
    }
  
    else if(lenguage=="spanish") 
    {
        document.getElementById("result").innerHTML = firstname+" "+lastname+" "+email
        document.getElementById("textarea").innerHTML =""+text
    } else {
  
    document.getElementById("result").innerHTML =" "
    }
  
  }