

const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

menuIcon.innerHTML = `<table onclick="checkMenu()">
    <tr><td> <img src="../images/icon-dev.png" height="35px"> &#9661;</td></tr>
</table>`;

function checkMenu() {
    // Menu is Open with Option to Close Menu
    if (menu.style.display === "none") {
        menuIcon.innerHTML = `<table onclick="checkMenu()">
            <tr><td> <img src="../images/icon-dev.png" height="35px"> &#9661;</td></tr>
        </table>`;
        menu.style.display = "block";
    }
    // Menu is Closed with Option to Open Menu
    else {
        menuIcon.innerHTML = `<table onclick="checkMenu()">
            <tr><td> <img src="../images/icon-dev.png" height="35px"> &#9654;</td></tr>
        </table>`;
        menu.style.display = "none";
    }
}


menu.innerHTML = `<table width="100%">
    <tr><td>
        <a href="../index.html"><button>HOME</button></a>
    </td></tr>
    <tr><td>
        <a href="../101-HTML.html"><button>HTML</button></a>
    </td></tr>
    <tr><td>
        <a href="../101-CSS.html"><button>CSS</button></a>
    </td></tr>
    <tr><td>
        <a href="../101-PHP.html"><button>PHP</button></a>
    </td></tr>
    <tr><td>
        <a href="../101-SQL.html"><button>SQL</button></a>
    </td></tr>
    <tr><td>
        <a href="../101-JS.html"><button>JS</button></a>
    </td></tr>
    <tr><td>
        <a href="../101-LI.html"><button>LI</button></a>
    </td></tr>
    <tr><td>
        <a href="../og-mini-games/index.html"><button>MINI GAMES</button></a>
    </td></tr>
    <tr><td>
        <a href="../sims/sims.html"><button>SIMS 4</button></a>
    </td></tr>
</table>`;
document.addEventListener('DOMContentLoaded', function() {
    const currentPagePath = window.location.pathname;
    const menuLinks = document.querySelectorAll('#menu a');

    // Extract the filename (and any relative path) from the current page path
    const parts = currentPagePath.split('/');
    const currentPageFile = parts[parts.length - 1];

    menuLinks.forEach(link => {
        const linkURL = link.getAttribute('href');
        //console.log(linkURL);
        const button = link.querySelector('button');

        if (currentPageFile === linkURL) {
            if (button) {
                button.style.backgroundColor = '#fa0';
                button.style.color = 'black';
            }
        }
    });
});