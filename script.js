let homeButtonClickCount = 0;

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link');
  const testMessage = document.createElement('div');
  testMessage.className = 'test-message';
  var emoji = String.fromCodePoint(0x1f495);
  testMessage.textContent = 'я люблю Настеньку' + emoji;

  document.body.appendChild(testMessage);

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = this.getAttribute('data-target');
      const targetPage = document.getElementById(targetId);

      document.querySelectorAll('.page').forEach(function (page) {
        page.classList.remove('current');
      });

      document.querySelectorAll('.nav-link').forEach(function (navLink) {
        navLink.classList.remove('current');
      });

      targetPage.classList.add('current');
      this.classList.add('current');

      if (targetId === 'home') {
        homeButtonClickCount++;

        if (homeButtonClickCount === 3) {
          testMessage.classList.add('active');

          setTimeout(function () {
            testMessage.classList.remove('active');
            homeButtonClickCount = 0;
          }, 3000);
        }
      }
    });
  });
});
