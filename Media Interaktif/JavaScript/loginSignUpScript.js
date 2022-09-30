const container = document.querySelector(".container"),
      pwShowHode = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-text"),
      login = document.querySelector(".login-link"),
      login2 = document.querySelector(".login-link2");

    //   kode js yang akan menampilkan atau menyembunyikan password
    pwShowHode.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            pwFields.forEach(pwFields => {
                if(pwFields.type === "password"){
                    pwFields.type = "text";

                    pwShowHode.forEach(icon => {
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                } else{
                    pwFields.type = "password";

                    pwShowHode.forEach(icon => {
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })
        })
    })


    // kode js untuk login dan signup
    signUp.addEventListener("click", () => {
        container.classList.add("active");
    });
    login.addEventListener("click", () => {
        container.classList.remove("active");
    });
    login2.addEventListener("click", () => {
        container.classList.remove("active");
    })


