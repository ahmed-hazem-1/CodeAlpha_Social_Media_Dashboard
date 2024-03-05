// -------buttons and links------- //

document.addEventListener('DOMContentLoaded', function () {
    var isPageRefreshed = localStorage.getItem('isPageRefreshed');

    if (isPageRefreshed) {
        showDashboard();
    }

    var socialLinks = document.querySelectorAll('.social-link');
    var socialContents = document.querySelectorAll('.social-content');

    socialLinks.forEach(function (link, index) {
        link.addEventListener('click', function () {
            socialLinks.forEach(function (otherLink) {
                otherLink.style.backgroundColor = '#ffffff';
                otherLink.style.Color = '#303030';
                otherLink.style.transform = 'scale(1)';
            });

            link.style.backgroundColor = '#303030';
            link.style.Color = '#ffffff';
            link.style.transition = 'transform 0.5s ease-in-out';

            socialContents.forEach(function (content) {
                content.style.opacity = 0;
                content.style.display = 'none';
            });

            setTimeout(function () {
                socialContents[index].style.opacity = 1;
                socialContents[index].style.display = 'block';
            }, 100);
        });
    });

    localStorage.setItem('isPageRefreshed', true);
});

// ------make dashboard visible on page refresh----- //

function showDashboard() {
    var dashboard = document.getElementById('Dashboard');
    dashboard.style.display = 'block';

    var otherElements = document.querySelectorAll('.social-content:not(#Dashboard)');
    otherElements.forEach(function (element) {
        element.style.display = 'none';
    });
}

// ---- imaganry followers ----  //

document.addEventListener('DOMContentLoaded', function () {
    const socialMediaBlocks = [
        { followersCount: 1000, rateElementId: 'followersCountFace', arrowIconElementId: 'arrowIconFace' },
        { followersCount: 500, rateElementId: 'followersCountTwitter', arrowIconElementId: 'arrowIconTwitter' },
        { followersCount: 1500, rateElementId: 'followersCountInstegram', arrowIconElementId: 'arrowIconInstegram' },
        { followersCount: 800, rateElementId: 'followersCountLinked', arrowIconElementId: 'arrowIconLinked' },
    ];

    function updateFollowers(socialMediaBlock) {
        const newFollowersCount = socialMediaBlock.followersCount + Math.floor(Math.random() * 21) - 10;

        const followersChange = newFollowersCount - socialMediaBlock.followersCount;

        document.getElementById(socialMediaBlock.rateElementId).textContent = newFollowersCount;

        const arrowIconElement = document.getElementById(socialMediaBlock.arrowIconElementId);
        arrowIconElement.innerHTML = (followersChange > 0) ? '↑' : '↓';
        arrowIconElement.className = (followersChange > 0) ? 'arrow-up' : 'arrow-down';

        arrowIconElement.style.transition = 'color 0.5s';
        setTimeout(function () {
            arrowIconElement.style.color = '';
        }, 500);

        socialMediaBlock.followersCount = newFollowersCount;
    }

    socialMediaBlocks.forEach(function (block) {
        setInterval(function () {
            updateFollowers(block);
        }, 1000);
    });




// Toggle left div visibility
const leftDiv = document.querySelector('.left');
const navButton = document.querySelector('.navButton');
const body = document.body;

navButton.addEventListener('click', function () {
    body.classList.toggle('left-visible');
});

});

