 // Create event listener
 document.getElementById('button'). addEventListener('click', loadText);

 function loadText(){
     // Cretae XHR Object
     var xhr = new XMLHttpRequest();
     //OPEN - type, url/file, async
     //console.log(xhr);
     xhr.open('GET', 'sample.txt', true);

     xhr.onload = function(){
         if(this.status == 200){
            // console.log(this.responseText);
            document.getElementById('text').innerHTML = this.responseText;
         }else if (this.status == 404){
             document.getElementById('text').innerHTML = ' Page not found';
         }
     }

     // xhr.onreadystatechange = function(){
     //     if (this.readyState == 4 && this.status == 200){
     //         //console.log(this.responseText);
     //     }
     // }




     // Sends request
     xhr.send();

    }