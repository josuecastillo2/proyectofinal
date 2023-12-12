// Get the 'Yes' button element
const yesBtn = document.querySelector('#yesBtn');

// Add click event listener for the 'Yes' button
yesBtn.addEventListener('click', function () {
    alert('¡paola eres lo mas grande que tengo  !');
    alert('Me haces la persona más feliz');
});

// Get the 'No' button element
const noBtn = document.querySelector('#noBtn');

// Add mouseover event listener for the 'No' button
noBtn.addEventListener('mouseover', function () {
    // Generate random values for positioning the 'No' button
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;

    // Apply random positioning to the 'No' button
    noBtn.style.setProperty('top', `${randomY}%`);
    noBtn.style.setProperty('left', `${randomX}%`);
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
