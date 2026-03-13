let currentUrl = window.location.href.toLowerCase();

let score = 0;

console.log("Current website URL: ", currentUrl)

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

console.log("Current phishing score: ", score)
