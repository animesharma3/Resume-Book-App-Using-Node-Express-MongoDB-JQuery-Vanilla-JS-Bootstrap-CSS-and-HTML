const builders = document.querySelectorAll('.builder')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
let currTab = 0
showTab(currTab)

function showTab(n) {
    for (let i=0; i<builders.length; i++) {
        if (i == n) {
            builders[i].style.display = 'initial'
        } else {
            builders[i].style.display = 'none'
        }
    }
    if (n == 0) {
        prevBtn.style.display = 'none'
        prevBtn.disabled = true
    } else {
        prevBtn.style.display = 'initial'
        prevBtn.disabled = false
    }
    if (n == builders.length-1) {
        nextBtn.innerHTML = 'Preview'
    } else {
        nextBtn.innerHTML = 'Next'
    }
}

function nextPrev(n) {
    builders[currTab].style.display = 'none'
    currTab += n
    if (currTab >= builders.length) {
        document.querySelector('form').submit()
        return false
    }
    showTab(currTab)
}