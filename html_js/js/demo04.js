let cityArrs = ['北京', '南京', '上海', '广州', '深圳', '杭州', '武汉', '成都', '重庆', '青岛', '大连'];
let selectArr = "0".repeat(cityArrs.length);

window.onload = () => {
    displayCities();
    buttonClick();
}

const displayCities = () => {
    let parentDiv = document.getElementById('cityContainer');

    cityArrs.map(value => {
        let checkboxObj = document.createElement('input');
        checkboxObj.setAttribute('type', 'checkbox');
        checkboxObj.setAttribute('value', value);
        checkboxObj.setAttribute('class', 'city');

        let spanObj = document.createElement('span');
        spanObj.innerHTML = value;
        spanObj.innerHTML += "&nbsp&nbsp&nbsp&nbsp&nbsp"

        parentDiv.append(checkboxObj);
        parentDiv.append(spanObj);
    })
}

const buttonClick = () => {

    // 展示内容
    document.getElementById('btnDisplay').onclick = () => {
        let cityArray = document.getElementsByClassName('city');

        let displayStr = "你选中的城市有：";

        for (let index in cityArray) {
            if (cityArray[index].checked) {
                displayStr += cityArray[index].value + "&nbsp";
            }
        }

        document.getElementById("displayArea").innerHTML = displayStr;
    }

    // 全选
    document.getElementById('btnAll').onclick = () => {
        
    }

}

