function load(){
    var xhr = new XMLHttpRequest();
        xhr.open("GET","data.txt");
        xhr.onload = function(){
           // alert(xhr.responseText);
            var div = document.getElementById('content');
                div.innerHTML = xhr.responseText;
        }
        xhr.send();
        
}