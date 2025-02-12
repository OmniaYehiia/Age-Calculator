const inputB = document.getElementById("birthday");
const res = document.getElementById("res"); 
const btn = document.getElementById("calcBtn");

function Calc() {
    const birthdate = inputB.value;
    if (birthdate === "")
        alert("Please enter your date of birth to calculate");
    else {
        getAge(birthdate);
    }
}

function getAge(birthdate) {
    let birthDate = new Date(birthdate);
    let today = new Date();

    let year = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if ( days < 0) {
        let prevMnth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMnth.getDate();
        months--;
    }
    
    if (months < 0) {
        months += 12;
        year--;
    }

    res.innerText = `Your Age Is ${year} Years And ${months} Months And ${days} Days`;
}


btn.addEventListener("click", Calc);
inputB.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        Calc(); 
    }
});