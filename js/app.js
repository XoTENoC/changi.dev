const aboutBtn = document.getElementById("about");
const blogBtn = document.getElementById("blog");
const tutorialBtn = document.getElementById("tutorial");
const galleryBtn = document.getElementById("gallery");
const homeBtn = document.getElementById("home");

aboutBtn.onclick = function() {
    location.href = "./about.html";
};

blogBtn.onclick = function() {
    location.href = "./blog.html";
};

tutorialBtn.onclick = function() {
    location.href = "./tutorial.html";
};

galleryBtn.onclick = function() {
    location.href = "./gallery.html";
};

homeBtn.onclick = function() {
    location.href = "./index.html";
};