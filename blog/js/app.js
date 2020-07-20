const aboutBtn = document.getElementById("about");
const blogBtn = document.getElementById("blog");
const tutorialBtn = document.getElementById("tutorial");
const galleryBtn = document.getElementById("gallery");
const homeBtn = document.getElementById("home");
const githubLink = document.getElementById("github");
const unsplashLink = document.getElementById("unsplash");
const instaLink = document.getElementById("insta");

aboutBtn.onclick = function() {
    location.href = "../about.html";
};

blogBtn.onclick = function() {
    location.href = "../blog.html";
};

tutorialBtn.onclick = function() {
    location.href = "../tutorial.html";
};

galleryBtn.onclick = function() {
    location.href = "../gallery.html";
};

homeBtn.onclick = function() {
    location.href = "../index.html";
};

githubLink.onclick = function() {
    location.href = "https://github.com/XoTENoC";
};

unsplashLink.onclick = function() {
    location.href = "https://unsplash.com/@changi_pro";
};

instaLink.onclick = function() {
    location.href = "https://www.instagram.com/nathaniel.chang/";
};