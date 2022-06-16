function ingCount() {
    var ingredients__count = document.getElementById('ingredients__count').value
    var result
    const numbers = [0.75, 1.75, 0.125, 0.5, 0.625, 0.5, 1.5];
    switch (ingredients__count) {
        case "4 servings":
            result = numbers
            break;
        case "8 servings":
            result = numbers.map((num) => num * 2);
            break;
        case "0 servings":
            result = numbers.map((num) => null);
            break;
    }
    var i;
    for(i=0; i<7; i++) {
        document.getElementById('result'+i).innerHTML = result[i]
    }
    document.addEventListener("DOMContentLoaded", ingCount);

}