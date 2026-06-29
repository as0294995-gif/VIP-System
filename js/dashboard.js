document.addEventListener("DOMContentLoaded", () => {

    const user = localStorage.getItem("vipUser");

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    const username = document.getElementById("username");

    if (username) {
        username.textContent = user;
    }

    const logout = document.getElementById("logout");

    if (logout) {
        logout.addEventListener("click", () => {

            if (confirm("هل تريد تسجيل الخروج؟")) {

                localStorage.removeItem("vipUser");

                window.location.href = "login.html";

            }

        });
    }

});
