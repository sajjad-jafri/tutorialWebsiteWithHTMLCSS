//Loading Navigation
document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
});


//For mobile view to show menu bar
function showSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex'
}


// To hide menu bar
function hideSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none'
}