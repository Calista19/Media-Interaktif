function judul() {
    var i, isian, pilihan, materian, meteripilihan;
    isian = document.getElementsByClassName("judul");
    for (i = 0; i < isian.length; i++) {
      isian[i].style.display = "none";
    }
    materian = document.getElementsByClassName("materi");
    for (i = 0; i < materian.length; i++){
      materian[i].style.display = "none";
    }
    pilihan = document.getElementsByClassName("menubar");
    for (i = 0; i < pilihan.length; i++) {
      pilihan[i].className = pilihan[i].className.replace(" menubaractive", "", "");
    }
    document.getElementById(nmrIsi).style.display = "block";
    document.getElementById(mtr).style.display = "block";
    evt.currentTarget.className += " menubaractive";

  }

