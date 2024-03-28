window.addEventListener('load', () => {
  if (window.screen.width <= 437) {
    let mobileMenuToggled = false;
    let mobileLinkDropdownToggled = false;
    const menuBtn = document.querySelector('.navbar_menu__btn');
    const linkListBtn = document.querySelector('.mobile_link_dropdown__btn');
    menuBtn.addEventListener('click', () => {
      mobileMenuToggled = !mobileMenuToggled;

      if (mobileMenuToggled) {
        document.querySelector('body').style.overflowY = 'hidden';
        menuBtn.closest('.navbar').classList.add('collapsed');
      } else {
        document.querySelector('body').style.overflowY = 'scroll';
        menuBtn.closest('.navbar').classList.remove('collapsed');
      }
    });
    linkListBtn.addEventListener('click', () => {
      mobileLinkDropdownToggled = !mobileLinkDropdownToggled;

      if (mobileLinkDropdownToggled) {
        document.querySelector('.mobile_link__dropdown').classList.add('collapsed');
      } else {
        document.querySelector('.mobile_link__dropdown').classList.remove('collapsed');
      }
    });
  }
});