const stickyNav = document.getElementById('stickyNavMobile');
const content = document.querySelector('.content');
const navOffset = stickyNav.offsetTop;

const updateStickyNavigation = () => {
  const isSticky = window.scrollY > navOffset;

  stickyNav.classList.toggle('sticky', isSticky);
  content.style.marginTop = isSticky ? stickyNav.offsetHeight + 'px' : 0;
};

const handleScroll = () => updateStickyNavigation();

window.addEventListener('scroll', handleScroll);

updateStickyNavigation();
