function toggleAside() {
    var aside = document.getElementById("myAside");
    var computedStyle = window.getComputedStyle(aside);
    var left = computedStyle.getPropertyValue("left");

    if (left === "-290px" || left === "") {
        aside.style.left = "0";
        aside.classList.add("open"); // добавляем класс для показа подложки
    } else {
        aside.style.left = "-290px";
        aside.classList.remove("open"); // убираем класс для скрытия подложки
    }
}