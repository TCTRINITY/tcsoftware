const firstName = "Mr. Harris";



//alert(`Hello, ${firstName}`);

//Get the dark mode button into a variable.
const darkModeBtn = document.getElementById("dark-mode-btn");


//Make sure our button is saved in the variable. 
console.log(darkModeBtn);

let darkMode = false; // one way to make the page turn back to what it was before you pressed the button 






darkModeBtn.addEventListener("click", function(){
    //console.log("clicked");
    //alert(`Hello, ${firstName}`);

    //get the page body and we are doing that by uisng the CSS selctor: body 
    const pageBody = document.querySelector("body"); //exactly matches CSS selector? --> I am getting the body of the page 
    //console.log(pageBody);
    const catsHeading = document.querySelector("h1");

    //pageBody.style["background-color"]="black";
    //console.log(pageBody.classList)

    //toggling btw light and dark mode
    pageBody.classList.toggle("dark");

    //darkModeBtn.hidden = true; //this adds the hidden property and the button goes away 

    //easier approach is this:
    //darkModeBtn.innerText="Light Mode";


    //this flips the value of dark mode (false --> true, true --> false)
    darkMode = !darkMode;

    if (darkMode) {
        darkModeBtn.innerText = "Light Mode";
    } else{
        darkModeBtn.innerText = "Dark Mode";
    }
    

    //another way to write the if statement above is this way:
    // if (darkModeBtn.innerText == "Dark Mode") {
    //     darkModeBtn.innerText = "Light Mode";
    // } else{
    //     darkModeBtn.innerText = "Dark Mode";
    // }



    catsHeading.style["color"]="yellow";

})
