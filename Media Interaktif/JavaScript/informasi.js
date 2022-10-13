function bukaIsi(evt, nmrIsi) {
    var i, isian, pilihan;
    isian = document.getElementsByClassName("isi");
    for (i = 0; i < isian.length; i++) {
      isian[i].style.display = "none";
    }
    pilihan = document.getElementsByClassName("pilihan");
    for (i = 0; i < pilihan.length; i++) {
      pilihan[i].className = pilihan[i].className.replace(" pilihanAktif", "");
    }
    document.getElementById(nmrIsi).style.display = "block";
    evt.currentTarget.className += " pilihanAktif";
  }