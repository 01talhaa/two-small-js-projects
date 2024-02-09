const endDate = '1 February 2024 11:59 PM'
const title = 'Next Semester Starting on'
document.querySelector("#title").innerHTML = title;
document.querySelector("#end-Date").innerHTML = endDate;
const input = document.querySelectorAll("input")

const clock = ()=> {
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end - now)/1000;

    if (diff <= 0 ) return;
    input[0].value = (Math.floor(diff / 3600 / 24));
    input[1].value = (Math.floor(diff / 3600) % 24);
    input[2].value = (Math.floor(diff / 60) % 60);
    input[3].value = (Math.floor(diff % 60));
}

clock()

setInterval(
    () => {
        clock()
    }, 1000
)