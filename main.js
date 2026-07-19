/* =====================================================
   A Special Chapter For You, Mom — COMPLETE SCRIPT
   Merged: Core Interactive Engine & Advanced Animations
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // ===================================================
  // 1. GLOBAL STATE & CORE ELEMENTS
  // ===================================================
  const loader = document.getElementById('loader');
  const enterBtn = document.getElementById('enter-btn');
  const loaderReveal = document.getElementById('loader-reveal');
  const loaderText = document.getElementById('loader-text');
  const siteWrapper = document.getElementById('site-wrapper');
  
  const musicBtn = document.getElementById('music-btn');
  const bgMusic = document.getElementById('bg-music');
  
  const envelopeBtn = document.getElementById('envelope-btn');
  const letterPaper = document.getElementById('letter-paper');
  const letterBackdrop = document.getElementById('letter-backdrop');
  const letterClose = document.getElementById('letter-close');

  // ===================================================
  // 2. LOADER & RITUALISTIC ENTER SEQUENCE
  // ===================================================
  // Simulate asset loading rhythm, then reveal the gift button
  setTimeout(() => {
    if (loaderText) loaderText.style.display = 'none';
    if (loaderReveal) loaderReveal.classList.add('is-visible');
  }, 2600);

  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      // Smooth transition out for loader
      loader.classList.add('is-hidden');
      siteWrapper.classList.add('is-visible');

      // Attempt elegant autoplay of background scored music
      playBackgroundMusic();
      
      // Kickstart the cinematic typewriter subtitle in Hero
      initTypewriter();
    });
  }

  // ===================================================
  // 3. AUDIO SYSTEM ARCHITECTURE
  // ===================================================
  function playBackgroundMusic() {
  // Give the browser 100 milliseconds to process the button click, then fire the audio
  setTimeout(() => {
    bgMusic.play().then(() => {
      musicBtn.setAttribute('aria-pressed', 'true');
    }).catch(err => {
      console.log("Audio play failed:", err);
    });
  }, 100);
}

  if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
      const isPlaying = musicBtn.getAttribute('aria-pressed') === 'true';
      if (isPlaying) {
        bgMusic.pause();
        musicBtn.setAttribute('aria-pressed', 'false');
      } else {
        bgMusic.play();
        musicBtn.setAttribute('aria-pressed', 'true');
      }
    });
  }

  // ===================================================
  // 4. INTERACTIVE HERO TYPEWRITER
  // ===================================================
  function initTypewriter() {
    const subtitleEl = document.getElementById('hero-subtitle-text');
    if (!subtitleEl) return;

    const message = "Thank you for every beautiful sacrifice, your endless grace, and the warmth you bring into our lives daily. This day is completely yours.";
    let index = 0;
    subtitleEl.innerHTML = '<span class="cursor" aria-hidden="true"></span>';

    function type() {
      if (index < message.length) {
        // Dynamic insert before the cursor block element
        subtitleEl.insertAdjacentHTML('beforeend', message.charAt(index));
        index++;
        setTimeout(type, 45);
      } else {
        // Soft phase out cursor structure when finished
        const cursor = subtitleEl.querySelector('.cursor');
        if (cursor) cursor.style.animation = 'none';
      }
    }
    setTimeout(type, 600);
  }

  // ===================================================
  // 5. TIMELINE ACCELERATING GLOW ENGINE
  // ===================================================
  const timelineSection = document.getElementById('chapters-section');
  const timelineGlow = document.getElementById('timeline-glow');

  if (timelineSection && timelineGlow) {
    window.addEventListener('scroll', () => {
      const rect = timelineSection.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Calculate how far down the timeline section the user has scrolled
      if (rect.top < viewHeight && rect.bottom > 0) {
        const totalHeight = rect.height;
        const scrolledIntoSection = viewHeight - rect.top;
        let progress = scrolledIntoSection / (totalHeight + viewHeight * 0.2);
        
        // Clamp bounds securely between 0% and 100%
        progress = Math.max(0, Math.min(1, progress));
        timelineGlow.style.top = `${progress * 100}%`;
      }
    }, { passive: true });
  }

  // ===================================================
  // 6. LIGHTBOX MODAL GRID INTERACTIVE
  // ===================================================
  const galleryItems = document.querySelectorAll('.gallery__item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  
  let currentImgIndex = 0;
  const galleryData = [];

  // Parse structural elements cleanly into data cache mapping
  galleryItems.forEach((item, index) => {
    const src = item.getAttribute('data-src');
    const caption = item.getAttribute('data-caption');
    galleryData.push({ src, caption });

    item.addEventListener('click', () => {
      currentImgIndex = index;
      openLightbox(currentImgIndex);
    });
  });

  function openLightbox(idx) {
    if (!lightbox || galleryData.length === 0) return;
    lightboxImg.src = galleryData[idx].src;
    lightboxCaption.textContent = galleryData[idx].caption;
    
    lightbox.classList.add('is-open');
    if (lightboxBackdrop) lightboxBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    if (lightboxBackdrop) lightboxBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentImgIndex = (currentImgIndex - 1 + galleryData.length) % galleryData.length;
      openLightbox(currentImgIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentImgIndex = (currentImgIndex + 1) % galleryData.length;
      openLightbox(currentImgIndex);
    });
  }

  // ===================================================
  // 7. ENVELOPE / PAPER MESSAGING SYSTEM
  // ===================================================
  if (envelopeBtn) {
    envelopeBtn.addEventListener('click', () => {
      envelopeBtn.classList.add('is-open');
      
      // Delay presentation slightly so envelope flap completion matches rhythm
      setTimeout(() => {
        if (letterPaper) letterPaper.classList.add('is-open');
        if (letterBackdrop) letterBackdrop.classList.add('is-open');
      }, 950);
    });
  }

  function closeLetter() {
    if (letterPaper) letterPaper.classList.remove('is-open');
    if (letterBackdrop) letterBackdrop.classList.remove('is-open');
    // Gently close flap assembly after window drops down
    setTimeout(() => {
      if (envelopeBtn) envelopeBtn.classList.remove('is-open');
    }, 600);
  }

  if (letterClose) letterClose.addEventListener('click', closeLetter);
  if (letterBackdrop) letterBackdrop.addEventListener('click', closeLetter);

  // ===================================================
  // 8. INTERSECTION OBSERVER FOR SCROLL REVEALS
  // ===================================================
  const revealTargets = document.querySelectorAll('.reveal-up, .reveal-fade');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in-view');
        // Unobserve immediately if you only want animations to fire once
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealTargets.forEach(target => revealObserver.observe(target));

  // ===================================================
  // 9. LUXURY CANVAS CONFETTI ENGINE (FINALE)
  // ===================================================
  const canvas = document.getElementById('confetti-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const colors = [
      '#C59B63', // Champagne Golden
      '#ECCEC4', // Luxury Rose Gold
      '#F4E4C6', // Cream Soft Ivory
      '#7A5843'  // Muted Warm Umber
    ];
    
    let particles = [];
    
    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class ConfettiParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height - 20;
        this.size = Math.random() * 6 + 4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 1.5 + 1;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        
        // Loop back up if particle drifts past floor boundary
        if (this.y > canvas.height) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
        }
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        // Draw elegant, soft confetti squares/rectangles
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }
    
    // Spawn custom particle array population
    for (let i = 0; i < 75; i++) {
      particles.push(new ConfettiParticle());
    }
    
    function loopConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(loopConfetti);
    }
    
    // Fire confetti cascade seamlessly
    loopConfetti();
  }

  // ===================================================
  // 10. CURSOR GLOW ELEMENT FOLLOWER (DESKTOP)
  // ===================================================
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  document.body.appendChild(cursorGlow);

  let currentX = 0, currentY = 0;
  let targetX = 0, targetY = 0;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!cursorGlow.classList.contains('is-active')) {
      cursorGlow.classList.add('is-active');
    }
  }, { passive: true });

  // Smooth lerp follow physics frame tracking
  function renderCursorGlow() {
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;
    cursorGlow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame(renderCursorGlow);
  }
  requestAnimationFrame(renderCursorGlow);
});