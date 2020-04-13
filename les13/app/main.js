function randN(min = 0, max = 255){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandColor(){
    return `rgb(${randN()},${randN()},${randN()})`;
}

//DOM - Document Object Model
console.log(square.style);
square.style.backgroundColor = getRandColor();

square.onclick = function(){
    square.style.backgroundColor = getRandColor();
}

btnSize.onclick = function(){
    const sizePx = size.value + 'px'; 
    square.style.width = sizePx;
    square.style.height = sizePx;
}

selectRad.oninput = function(){
    square.style.borderRadius = selectRad.value;
}

btnSize.oninput = function(){
    console.log('изменилось значение кнопки');
}

btnUp.onclick = function(){
    scroll(0, 0);
}

setTimeout(function(){
    square.style.width = '100px';
    square.style.height = '100px';
}, 3000);

setInterval(function(){
    btnUp.style.color = getRandColor();
    btnUp.style.backgroundColor = getRandColor();
}, 5000);


// 

// scroll(0, 0);