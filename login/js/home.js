var Name = localStorage.getItem('userName');
var OutBtn=document.getElementById('logout');
function display(){
    var container = ``;
    container+=`<h1>Welcome ${Name}</h1>`
    document.getElementById('welcome').innerHTML=container

}
console.log(Name)
display();
function logout(){
    localStorage.removeItem('userName');
    window.location.href = '../index.html'; 

}
OutBtn.addEventListener('click', function() {
    logout();
});

