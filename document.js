const connectUrl = `https://sheet.best/api/sheets/fb5536de-4f13-4048-bb7d-901b820e0b86`;



const btnSubmit = $("#btnSubmit");


btnSubmit.addEventListener("click", () => {

    const firstName = $("#Firstname").value;
    const lastName = $("#Lastname").value;
    const studentId = $("#StudentId").value;
    const currentSemister = $("#CurrentSemister").value;
    const age = $("#Age").value;

    if (firstName && lastName && studentId) {

        const postData = {
            firstName: firstName,
            lastName: lastName,
            studentId: studentId,
            currentSemister: currentSemister,
            age: age
        }

        axios.post(connectUrl, postData).then(response => {
            console.log(response);
            $("#Firstname").value = '';
            $("#Lastname").value = '';
            $("#StudentId").value = '';
            $("#CurrentSemister").value = '';
            $("#Age").value = '';
        });
        console.log("Submit...", postData)
    } else {
        console.log("SOrry we can't submit...")
    }

});

function $(selector) {
    return document.querySelector(selector);
}
