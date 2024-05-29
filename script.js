const colors = {
    violet: { hex: "#ee82ee", complementary: "#117d11", name: "Dark Green" },
    red: { hex: "#ff0000", complementary: "#00ffff", name: "Cyan" },
    orange: { hex: "#ffa500", complementary: "#00a5ff", name: "Light Blue" },
    yellow: { hex: "#ffff00", complementary: "#0000ff", name: "Blue" },
    green: { hex: "#008000", complementary: "#ff7fff", name: "Light Magenta" },
    cyan: { hex: "#00ffff", complementary: "#ff0000", name: "Red" },
    blue: { hex: "#0000ff", complementary: "#ffff00", name: "Yellow" },
    indigo: { hex: "#4b0082", complementary: "#b4ff7d", name: "Light Green" }
};

function change(event) {
    event.stopPropagation();

    var box = event.currentTarget;
    var colorId = box.id;
    
    var clicked = box.classList.contains("clicked");

    box.classList.toggle("clicked");

    var title = box.querySelector(".flexbox-title");
    var hex = box.querySelector(".flexbox-hex");

    if (clicked) {
        box.style.backgroundColor = colors[colorId].hex;
        title.textContent = colorId.charAt(0).toUpperCase() + colorId.slice(1);
        hex.textContent = colors[colorId].hex;
    } else {
        box.style.backgroundColor = colors[colorId].complementary;
        title.textContent = colors[colorId].name;
        hex.textContent = colors[colorId].complementary;
    }
}

document.addEventListener("click", function(event) {
    var boxes = document.querySelectorAll(".colorBox");
    boxes.forEach(function(box) {
        box.classList.remove("clicked");
        var colorId = box.id;
        box.style.backgroundColor = colors[colorId].hex;
        var title = box.querySelector(".flexbox-title");
        var hex = box.querySelector(".flexbox-hex");
        title.textContent = colorId.charAt(0).toUpperCase() + colorId.slice(1);
        hex.textContent = colors[colorId].hex;
    });
});
