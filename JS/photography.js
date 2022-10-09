//Nav Bar For Mobile and  Tab layout
function openNav(){
    var nav = document.getElementById('menus');
    nav.classList.toggle('show');
    document.getElementById('closeNav').style.display = 'block';
    document.getElementById('mask').style.display = 'block';
    document.getElementById('soc-icon').style.display = 'flex';
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
}
function closeNav(){
    var nav = document.getElementById('menus');
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
    } else {
        nav.classList.toggle('show');
    }
    document.getElementById('mask').style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    document.getElementById('closeNav').style.display = 'none';
    document.getElementById('soc-icon').style.display = 'none';
}

document.getElementById('mask').onclick = function(){
    var nav = document.getElementById('menus');
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
    } else {
        nav.classList.toggle('show');
    }
    document.getElementById('mask').style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    document.getElementById('closeNav').style.display = 'none';
    document.getElementById('soc-icon').style.display = 'none';
}

// Image Viewer

var imgs = document.getElementsByClassName('img-container');
var imgCont = document.getElementById('imgviewr');
var closeVw =  document.getElementById('closeView');
var arrKeys = document.getElementsByClassName('arrw');


// making a function to close viewer

for (let i=0; i < imgs.length; i++){
    imgs[i].onclick = function(){
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        let imgClass = document.getElementsByClassName('image');
        let imgSrc = imgClass[i].getAttribute('src');
        imgCont.style.display = 'flex';
        closeVw.style.visibility = 'visible';
        imgCont.innerHTML = "<img src='"+ imgSrc + "' class='largeImg'/>" + '<span id="closeView">X</span>';
        for(let j=0; j<arrKeys.length; j++){
            arrKeys[j].style.visibility = 'visible';
        }
        
    }
}
closeVw.onclick = function(){
    // imgCont.style.visibility='hidden';
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    closeVw.style.visibility = 'hidden';
    imgCont.style.display = 'none';
    for(let j=0; j<arrKeys.length; j++){
    
    arrKeys[j].style.visibility = 'hidden';
}
}

imgCont.ondblclick = function(){
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    imgCont.style.display = 'none';
    for(let j=0; j<arrKeys.length; j++){
    
        arrKeys[j].style.visibility = 'hidden';
    }
} 
