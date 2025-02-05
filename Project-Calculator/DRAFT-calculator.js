
/* querySelector is similar to getElementById but it searches the JS file for the specific variable/selector, getElementById returns array and gets ALL selectors */
document.getElementById("seven").addEventListener(
    "click", function(e) {
                console.log("Seven was clicked");
                console.log(e.target);
                console.log(e.target.textContent);
    }
);
//querySelector method returns the first only one HTML element that matches a provided CSS selector argument, no Array
document.querySelector(".calculator__keys").addEventListener("click", function(e) {
    document.querySelector(".calculator__display");
    console.log(e.target.textContent); 
});