// const mobileScreen = window.matchMedia("(max-width: 990px )");
// $(document).ready(function () {
//     $(".dashboard-nav-dropdown-toggle").click(function () {
//         $(this).closest(".dashboard-nav-dropdown")
//             .toggleClass("show")
//             .find(".dashboard-nav-dropdown")
//             .removeClass("show");
//         $(this).parent()
//             .siblings()
//             .removeClass("show");
//     });
//     $(".menu-toggle").click(function () {
//         if (mobileScreen.matches) {
//             $(".dashboard-nav").toggleClass("mobile-show");
//         } else {
//             $(".dashboard").toggleClass("dashboard-compact");
//         }
//     });
// });



const inputs = document.querySelectorAll(".input");

function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});


// --------------------------- //


let arrow = document.querySelectorAll(".arrow ");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}
let nav_link = document.querySelectorAll(".icon-link");
for (var i = 0; i < nav_link.length; i++) {
    nav_link[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu1");
console.log(sidebarBtn);


$(function () {

    resizeScreen();
    $(window).resize(function () {
        resizeScreen();
    });
    $('.bx-menu1').click(function () {

        if (document.body.clientWidth > 400) {
            $('.sidebar').toggleClass('close');
        } else {
            $('.sidebar').toggleClass('small-screen');
        }
    });

    function resizeScreen() {
        if (document.body.clientWidth > 400) {
            $('.sidebar').addClass('close');
        } else {
            $('.sidebar').removeClass('close');
        }
    }

    function resizeScreen() {
        if (document.body.clientWidth > 400) {
            $('.sidebar').addClass('close');
        } else {
            $('.sidebar').removeClass('close');
        }
    }

    $(".account-detail-btn").click(function () {
        // Close all open windows
        $(".content").stop().slideUp(300);
        // Toggle this window open/close
        $(this).next(".content").stop().slideToggle(300);
    });

});


// ------------------------------------------- //

let arrow2 = document.querySelectorAll(".arrow2 ");
// for (var i = 0; i < arrow.length; i++) {
//     arrow2[i].addEventListener("click", (e) => {
//         let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
//         arrowParent.classList.toggle("showMenu2");
//     });
// }
let nav_link2 = document.querySelectorAll(".icon-link2");
for (var i = 0; i < nav_link2.length; i++) {
    nav_link2[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu2");
    });
}

let sidebar2 = document.querySelector(".sidebar2");
let sidebarBtn2 = document.querySelector(".bx-menu2");
console.log(sidebarBtn2);



$(function () {

    resizeScreen2();
    $(window).resize(function () {
        resizeScreen2();
    });
    $('.bx-menu2').click(function () {

        if (document.body.clientWidth > 400) {
            $('.sidebar2').toggleClass('close2');
        } else {
            $('.sidebar2').toggleClass('small-screen2');
        }
    });

    function resizeScreen2() {
        if (document.body.clientWidth < 400) {
            $('.sidebar2').addClass('close2');
        } else {
            $('.sidebar2').removeClass('close2');
        }
    }

    function resizeScreen2() {
        if (document.body.clientWidth < 400) {
            $('.sidebar2').addClass('close2');
        } else {
            $('.sidebar2').removeClass('close2');
        }
    }

});

// ------------------------------------------- //
// ---------------- Validation form start --------------------------- //

function validation() {
    var customer_name = document.getElementById("customer_name").value;
    var lead_id = document.getElementById("lead_id").value;
    var Father_Mother_Spouse = document.getElementById("Father_Mother_Spouse").value;
    var Mother_name = document.getElementById("Mother_name").value;
    var gender = document.getElementById("gender").value;
    var pb_marital_status = document.getElementById("pb_marital_status").value;
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var annual_income = document.getElementById("annual_income").value;
    var email = document.getElementById("email").value;
    var mob_no = document.getElementById("mob_no").value;
    var phone = document.getElementById("phone").value;
    var present_address = document.getElementById("present_address").value;
    var permanent_address = document.getElementById("permanent_address").value;

    var text1 = document.getElementById("error_text1");
    var text2 = document.getElementById("error_text2");
    var text3 = document.getElementById("error_text3");
    var text4 = document.getElementById("error_text4");
    var text5 = document.getElementById("error_text5");
    var text6 = document.getElementById("error_text6");
    var text7 = document.getElementById("error_text7");
    var text8 = document.getElementById("error_text8");
    var text9 = document.getElementById("error_text9");
    var text10 = document.getElementById("error_text10");
    var text11 = document.getElementById("error_text11");
    var text12 = document.getElementById("error_text12");
    var text13 = document.getElementById("error_text13");
    var text14 = document.getElementById("error_text14");



    if ((!(/^[a-zA-Z]*$/.test(customer_name))) || customer_name == "" || customer_name == null || customer_name == undefined ){
        text1.innerHTML = "Enter valid Name"
    } else {
        text1.innerHTML = ""
    }
    if (lead_id == "" || lead_id == null || lead_id == undefined) {
        text2.innerHTML = "Enter valid Lead ID"
    } else {
        text2.innerHTML = ""
    }
    if (Father_Mother_Spouse == "" || Father_Mother_Spouse == null || Father_Mother_Spouse == undefined) {
        text3.innerHTML = "Enter valid Name"
    } else {
        text3.innerHTML = ""
    }
    if (Mother_name == "" || Mother_name == null || Mother_name == undefined) {
        text4.innerHTML = "Enter valid Name"
    } else {
        text4.innerHTML = ""
    }
    if (gender == "" || gender == null || gender == undefined) {
        text5.innerHTML = "Enter valid Gender"
    } else {
        text5.innerHTML = ""
    }
    if (pb_marital_status == "" || pb_marital_status == null || pb_marital_status == undefined) {
        text6.innerHTML = "Enter valid Status"
    } else {
        text6.innerHTML = ""
    }
    if (dob == "" || dob == null || dob == undefined) {
        text7.innerHTML = "Enter valid date"
    } else {
        text7.innerHTML = ""
    }
    if (age == "" || age == null || age == undefined) {
        text8.innerHTML = "Enter valid Age"
    } else {
        text8.innerHTML = ""
    }
    if (annual_income == "" || annual_income == null || annual_income == undefined) {
        text9.innerHTML = "Enter valid Annual Income"
    } else {
        text9.innerHTML = ""
    }
    if (email == "" || email == null || email == undefined) {
        text10.innerHTML = "Enter valid Email"
    } else {
        text10.innerHTML = ""
    }
    if (mob_no == "" || mob_no == null || mob_no == undefined) {
        text11.innerHTML = "Enter valid Mobile No"
    } else {
        text11.innerHTML = ""
    }
    if (phone == "" || phone == null || phone == undefined) {
        text12.innerHTML = "Enter valid Phone No"
    } else {
        text12.innerHTML = ""
    }
    if (present_address == "" || present_address == null || present_address == undefined) {
        text13.innerHTML = "Enter valid Address"
    } else {
        text13.innerHTML = ""
    }
    if (permanent_address == "" || permanent_address == null || permanent_address == undefined) {
        text14.innerHTML = "Enter valid Address"
    } else {
        text14.innerHTML = ""
    }

    
    
} 

// ---------------- Validation form end  --------------------------- //