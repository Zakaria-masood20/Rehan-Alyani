(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    //event listener to the theme button
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
    //evet listener to the submit button
    document.querySelector(".main-btn").addEventListener("click", function (event) {
        event.preventDefault();

        //get the form data
        const name = document.querySelector("input[name='name']").value;
        const email = document.querySelector("input[name='email']").value;
        const subject = document.querySelector("input[name='SUBJECT']").value;
        const message = document.querySelector("input[name='message']").value;

        //construct the mailto URL with the form data
        const mailtoURL = 'mailto:${email}?subject=${emcodeURIComponent(subject)}&body=${encodeURIComponent(message)}';

        //create a new <a> element with the mailto link
        const mailtoLink = document.createElement("a");
        mailtoLink.href = mailtoURL;

        //trigger a click event on the <a> element to open the default email app
        mailtoLink.click();
    });
})();
