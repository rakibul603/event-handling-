document.getElementById("btn-update-title")
    .addEventListener('click', function () {
        // console.log('btn click')
        const pageElement = document.getElementById('page-title');
        // console.log(pageElement)
        pageElement.innerText = "Update title text"

    })


document.getElementById('btn-login').addEventListener('click', function () {
    // console.log('bnt-click')
    const userEvent = document.getElementById('user-log');
    userEvent.innerText = 'Log In'
})


document.getElementById('btn-update').addEventListener("click", function(){
    console.log('bnt click')
})
