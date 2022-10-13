// $(document).ready(function(){
//     $.getJSON("../JSON/materi.json", function(data){
//         console.log(data)

//         $('.title').html(data.title);
//     })
// })

function judul(evt, nmrIsi) {
    var i, isian, pilihan;
    isian = document.getElementsByClassName("judul");
    for (i = 0; i < isian.length; i++) {
      isian[i].style.display = "none";
    }
    pilihan = document.getElementsByClassName("menubar");
    for (i = 0; i < pilihan.length; i++) {
      pilihan[i].className = pilihan[i].className.replace(" active", "");
    }
    document.getElementById(nmrIsi).style.display = "block";
    evt.currentTarget.className += " active";
  }

