function addHomework() {
    var input = document.getElementById("homeworkInput");
    var homework = input.value;
    if (homework.trim() !== "") {
        var homeworkList = document.getElementById("homework-list");
        var item = document.createElement("div");
        item.classList.add("homework-item");
        item.innerHTML = homework;
        item.onclick = function() {
            this.classList.toggle("completed");
        };
        homeworkList.appendChild(item);
        input.value = "";
    }
}
