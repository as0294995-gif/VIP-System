document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("من فضلك أدخل اسم المستخدم وكلمة المرور");
            return;
        }

        if (username === "admin" && password === "1234") {

            localStorage.setItem("vipUser", username);

            window.location.href = "dashboard.html";

        } else {

            alert("اسم المستخدم أو كلمة المرور غير صحيحة");

        }

    });

});
