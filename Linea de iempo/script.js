// Script para interactividad
document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
  
    // Función para desplazar la línea del tiempo hacia la izquierda
    leftBtn.addEventListener('click', () => {
      timeline.scrollBy({ left: -300, behavior: 'smooth' });
    });
  
    // Función para desplazar la línea del tiempo hacia la derecha
    rightBtn.addEventListener('click', () => {
      timeline.scrollBy({ left: 300, behavior: 'smooth' });
    });
  
    // Animaciones al aparecer eventos
    const events = document.querySelectorAll('.event');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    events.forEach((event) => {
      observer.observe(event);
    });
  });

  
// Script para interactividad
document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');
    const events = document.querySelectorAll('.event');
    const floatingImage = document.getElementById('floating-image');
  
    // Mostrar imagen flotante al pasar el cursor
    events.forEach((event) => {
      event.addEventListener('mouseover', (e) => {
        const imageSrc = event.getAttribute('data-image');
        if (imageSrc) {
          floatingImage.style.display = 'block';
          floatingImage.style.backgroundImage = `url(${imageSrc})`;
          floatingImage.style.backgroundSize = 'cover';
          floatingImage.style.backgroundPosition = 'center';
          floatingImage.style.backgroundRepeat = 'no-repeat';
          floatingImage.style.width = '200px';
          floatingImage.style.height = '150px';
        }
      });
  
      event.addEventListener('mousemove', (e) => {
        floatingImage.style.top = `${e.pageY + 10}px`;
        floatingImage.style.left = `${e.pageX + 10}px`;
      });
  
      event.addEventListener('mouseout', () => {
        floatingImage.style.display = 'none';
      });
    });
  
    // Funcionalidad de desplazamiento con botones
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
  
    leftBtn.addEventListener('click', () => {
      timeline.scrollBy({ left: -300, behavior: 'smooth' });
    });
  
    rightBtn.addEventListener('click', () => {
      timeline.scrollBy({ left: 300, behavior: 'smooth' });
    });
  });

  // Script para interactividad
document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');
    const events = document.querySelectorAll('.event');
    const floatingImage = document.getElementById('floating-image');
    const infoBox = document.getElementById('info-box');
    const infoText = document.getElementById('info-text');
  
    // Mostrar imagen flotante al pasar el cursor
    events.forEach((event) => {
      event.addEventListener('mouseover', (e) => {
        const imageSrc = event.getAttribute('data-image');
        if (imageSrc) {
          floatingImage.style.display = 'block';
          floatingImage.style.backgroundImage = `url(${imageSrc})`;
          floatingImage.style.backgroundSize = 'cover';
          floatingImage.style.backgroundPosition = 'center';
          floatingImage.style.backgroundRepeat = 'no-repeat';
          floatingImage.style.width = '200px';
          floatingImage.style.height = '150px';
        }
      });
  
      event.addEventListener('mousemove', (e) => {
        floatingImage.style.top = `${e.pageY + 10}px`;
        floatingImage.style.left = `${e.pageX + 10}px`;
      });
  
      event.addEventListener('mouseout', () => {
        floatingImage.style.display = 'none';
      });
  
      // Mostrar información adicional al hacer clic
      event.addEventListener('click', () => {
        const additionalInfo = event.getAttribute('data-info');
        infoText.textContent = additionalInfo;
        infoBox.style.display = 'block';
      });
    });
  
    // Funcionalidad de desplazamiento con botones
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
  
    leftBtn.addEventListener('click', () => {
      timeline.scrollBy({ left: -300, behavior: 'smooth' });
    });
  
    rightBtn.addEventListener('click', () => {
      timeline.scrollBy({ left: 300, behavior: 'smooth' });
    });
  });
  

  