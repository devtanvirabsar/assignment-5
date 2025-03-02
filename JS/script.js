let taskBar = document.querySelectorAll('.taskBar');
let history = document.querySelector('#logs')
let clearBtn = document.querySelector('#clearBtn')
let bgColor = document.querySelector('#background-theme')
let point = document.querySelector('#point');
let dailyTask = document.querySelector('#daily-task');
let body = document.querySelector('#body');
let day = document.querySelector('#day');
let month = document.querySelector('#month')
let blogPage = document.querySelector('#calander');


let numberPoint = parseInt(point.innerText)
let dailyPoints = parseInt(dailyTask.innerText)


const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

let date = new Date()

let hours = date.getHours();
let ampm = hours >= 12 ? "PM" : "AM";

 console.log(date.getMinutes(), ampm)

day.innerHTML = days[date.getDay()]
month.innerHTML = months[date.getMonth()] + " " + date.getMonth() + " " + date.getFullYear()

let count = 1;
let dailyPoint = 6;
for(let task of taskBar){
    task.addEventListener('click', function(e){
        let cl = "bg-[#F4F7FF] p-3 lg:text-[14px] rounded-md mb-3";
        let parent = e.target.parentElement;
        let pChild = parent.parentElement;
        let grant = pChild.children;
        let arr = [];

        alartFunc()

        let countSum = count + numberPoint
        let dicrase = dailyPoint - dailyPoints
        for(let p of grant){
            arr.push(p)
        }
        let title = arr[1].innerText
        let findId = e.target.className;
        let disabled = arr[3].children[1];

        if(findId.includes('btn')){
            count++
            dailyPoint--
            let p = document.createElement('p');
            p.innerText = 'You have Complete The Task' + title + " at " + hours + ':' + date.getMinutes() +':' + date.getSeconds() + ' '+ ampm
            p.className = cl
            history.appendChild(p)
            point.innerHTML = countSum
            dailyTask.innerHTML = dailyPoint
            if(disabled.id === 'lastBtn'){
                alFunc()
            }
            disabled.disabled = true

        }
    })
}

blogPage.addEventListener('click', function(){
    window.location.href = './blog.html'
})

function alartFunc(){
    alert('Board update successfully ')
}
function alFunc(){
    alert('congrates!!! You have completed all the current task')
}
clearBtn.addEventListener('click', function (){
    history.innerHTML = ''
})
bgColor.addEventListener('click',function(){
    let randomNumber = Math.floor(Math.random() * 100000000);
    let color = '#' + randomNumber
    body.style.background = color;
   
})
