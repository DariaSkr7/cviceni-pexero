console.log('Funguju!');

const karticky = document.querySelectorAll('.karticka');

karticky.forEach((karta) => {
  karta.addEventListener('click', () => {
    karta.classList.toggle('otocena');

    setTimeout(() => {
      const otoceneKarty = document.querySelectorAll('.karticka:not(.otocena)');
      if (otoceneKarty.length === 2) {
        otoceneKarty.forEach((otocenaKarta) => {
          console.log(otocenaKarta);
          otocenaKarta.classList.toggle('otocena');
        });
      }
    }, 500);
  });
});

// karticky[0].classList.remove('otocena')
