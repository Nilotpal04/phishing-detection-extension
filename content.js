let currentUrl = window.location.href.toLowerCase();

let score = 0;

console.log("Current website URL: ", currentUrl)

//URL based rules

if(!currentUrl.startsWith("https"))
{
    score += 10;
    console.log("Warniing: website is not using HTTPS");
}

if(currentUrl.length > 75) {
    score += 10;
    console.log("Warning: URL is suspiciously long");
}

if(currentUrl.includes("@")) {
    score += 10;
    console.log("Warning: URL contains '@' symbol");
}

let dashCount = (currentUrl.match(/-/g) || []).length;

if(dashCount > 3) {
    score += 10;
    console.log("Warning: Too many dashes in URL");
}

let dotCount = (currentUrl.match(/\./g) || []).length;

if(dotCount > 5) {
    score += 10;
    console.log("Warning: Too many dots in URL");
}

let digitCount = (currentUrl.match(/\d/g) || []).length;

if(digitCount > 5) {
    score += 10;
    console.log("Warning: Too many numbers in URL")
}

//Page content based rules

let passwordFields = document.querySelectorAll("input[type='password']").length;

if(passwordFields > 0) {
    score += 25;
    console.log("Warning: Password input field detected");
}

let inputFields = document.querySelectorAll("input").length;

if(inputFields > 10) {
    score += 10;
    console.log("Warning: Too many input fields detected");
}

let iframes = document.querySelectorAll("iframe");

let hiddenIframes = 0;

iframes.forEach(frame => {

    let style = window.getComputedStyle(frame);

    if(
        style.display === "none" ||
        style.visibility === "hidden" ||
        frame.width === "0" ||
        frame.height === "0"
    ){
        hiddenIframes++;
    }

});

if(hiddenIframes > 2){
    score += 10;
    console.log("Warning: Suspicious hidden iframes detected");
}

let buttons = document.querySelectorAll("button");

let suspiciousWords = ["login", "verify", "submit", "update", "confirm"];

buttons.forEach(button => {
    let text = button.innerText.toLocaleLowerCase();

    suspiciousWords.forEach(word => {
        if(text.includes(word)) {
            score += 10;
            console.log("Warning: Suspicious button text detected:", word);
        }
    });
})

let pageText = document.body.innerText.toLowerCase();
let domain = window.location.hostname.toLowerCase();

let brands = ["paypal","paytm","gpay","phonepe","upi"];

brands.forEach(brand => {

    if(pageText.includes(brand) && !domain.includes(brand)){

        score += 20;

        console.log("Warning: Brand/domain mismatch detected:", brand);

    }

});

console.log("Current phishing score: ", score)
