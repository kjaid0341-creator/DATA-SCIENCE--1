// // 1. Select the necessary elements
// const toggleSwitch = document.querySelector('#checkbox');
// const themeText = document.querySelector('.theme-switch-wrapper em');
// const nav = document.getElementById('mainNav');

// // // 2. Function to switch themes and update text
// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'light');
//         if (themeText) themeText.textContent = "Enable Dark Mode";
//     } else {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         if (themeText) themeText.textContent = "Enable Light Mode";
//     }    
// }

// // 3. Event Listener for the theme toggle
// toggleSwitch.addEventListener('change', switchTheme, false);

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
// });

// // 5. Smooth Scroll for Navigation Links
// document.querySelectorAll('.nav-item').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         const href = this.getAttribute('href');
        
//         // Only trigger if it's an internal link (starts with #)
//         if (href.startsWith('#') && href !== '#') {
//             e.preventDefault();
//             const targetElement = document.querySelector(href);
//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             }
//         }
//     });
// });