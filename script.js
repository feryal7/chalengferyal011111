function toggleFAQ(element) {
    let answer = element.nextElementSibling;
    let icon = element.querySelector(".toggle-icon");

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.src = "p.jpg"; 
    } else {
        answer.style.display = "block";
        icon.src = "m.jpg";   
    }
}