let currentUrl = window.location.href;

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

console.log("Current phishing score: ", score)
