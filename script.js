document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom cinematic ease
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. Initialize Lucide Icons
    lucide.createIcons();

    // 2.5 Lazy-load hero video after page renders (keeps LCP as the poster image)
    const heroVideo = document.querySelector('.hero-lazy-video');
    const heroPoster = document.querySelector('.hero-poster-img');
    if (heroVideo && heroPoster) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const source = heroVideo.querySelector('source[data-src]');
                if (source) {
                    source.src = source.getAttribute('data-src');
                    heroVideo.load();
                    heroVideo.play().then(() => {
                        heroVideo.style.display = '';
                        heroPoster.style.display = 'none';
                    }).catch(() => {
                        // Video autoplay blocked, keep poster visible
                    });
                }
            }, 100);
        });
    }

    // 3. Header Scroll Effect
    const header = document.querySelector('.site-header');
    let isTicking = false;
    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                isTicking = false;
            });
            isTicking = true;
        }
    }, { passive: true });

    // 3.5 Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenuOverlay && mobileMenuClose) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('active');
            lenis.stop(); // Prevent background scrolling
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            lenis.start(); // Re-enable background scrolling
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOverlay.classList.remove('active');
                lenis.start();
            });
        });
    }

    // 4. GSAP Animations (Emil Kowalski & Taste Skill principles)
    const cinematicEase = "power3.out";

    // Defer heavy GSAP/ScrollTrigger initializations to avoid forced reflows during initial paint
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {

    // Reveal Text (Lines sliding up)
    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach((text) => {
        gsap.fromTo(text, 
            { y: 24, opacity: 0, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: text,
                    start: "top 88%",
                },
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                duration: 1.0,
                ease: cinematicEase
            }
        );
    });

    // Fade Ins (Standard blocks)
    const revealFades = document.querySelectorAll('.reveal-fade');
    revealFades.forEach((fade) => {
        gsap.fromTo(fade, 
            { y: 15, opacity: 0, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: fade,
                    start: "top 88%",
                },
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                duration: 1.0,
                ease: cinematicEase
            }
        );
    });

    // Staggered reveals (Lists, pillars, grids)
    const revealStaggers = document.querySelectorAll('.reveal-stagger');
    revealStaggers.forEach((container) => {
        const children = container.children;
        gsap.fromTo(children, 
            { y: 20, opacity: 0, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: container,
                    start: "top 88%",
                },
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                duration: 1.0,
                stagger: 0.08, // Stagger interval in ms
                ease: cinematicEase
            }
        );
    });

    // Subtle Parallax for Images
    const parallaxImages = document.querySelectorAll('.parallax-img');
    parallaxImages.forEach((img) => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            y: "8%", // gentle shift
            ease: "none"
        });
    });

    // Image Clip-Path Reveals (Unmasking)
    const imageMasks = document.querySelectorAll('.image-mask img');
    imageMasks.forEach((img) => {
        gsap.fromTo(img, 
            { clipPath: "inset(0 0 100% 0)" },
            {
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top 88%",
                },
                clipPath: "inset(0 0 0 0)",
                duration: 1.4,
                ease: "power3.inOut"
            }
        );
    });

    // 5. Trust & Legacy Number Counter (Fixed class triggers)
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target'));
        const suffix = stat.getAttribute('data-suffix') || '';
        
        gsap.fromTo(stat, 
            { innerHTML: 0 },
            {
                scrollTrigger: {
                    trigger: stat,
                    start: "top 90%",
                },
                innerHTML: target,
                duration: 2.5,
                ease: "power2.out",
                snap: { innerHTML: 1 },
                onUpdate: function() {
                    stat.innerHTML = Math.round(this.targets()[0].innerHTML) + suffix;
                }
            }
        );
    });

    // 6. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetAttr = this.getAttribute('href');
            if (targetAttr === '#') return;
            const target = document.querySelector(targetAttr);
            if(target) {
                lenis.scrollTo(target, { offset: -80, duration: 1.2 });
            }
        });
    });


    // 8. Interactive Floor Plan Hotspots
    const hotspotBtns = document.querySelectorAll('.hotspot-btn');
    const dimensionsPanel = document.getElementById('dimensionsPanel');
    const selectedRoomName = document.getElementById('selectedRoomName');
    const selectedRoomDim = document.getElementById('selectedRoomDim');

    if (hotspotBtns.length > 0 && dimensionsPanel && selectedRoomName && selectedRoomDim) {
        hotspotBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Toggle active class on buttons
                hotspotBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const room = btn.getAttribute('data-room');
                const dim = btn.getAttribute('data-dim');
                const roomTitle = btn.textContent;

                if (room === 'default') {
                    selectedRoomName.textContent = "Typical 2 BHK Unit Layout";
                    selectedRoomDim.textContent = "Rera Carpet 740 sq.ft";
                } else {
                    selectedRoomName.textContent = roomTitle;
                    selectedRoomDim.textContent = `Dimensions: ${dim}`;
                }

                // Smooth micro-feedback bounce on the dimensions overlay panel
                gsap.fromTo(dimensionsPanel,
                    { scale: 0.98, borderLeftColor: "#C6A06A" },
                    { scale: 1.0, borderLeftColor: "#003B36", duration: 0.4, ease: "back.out(1.7)" }
                );
            });
        });
    }

    // 9. Scroll Popup Logic
    let popupShown = false;
    const scrollPopup = document.getElementById('scrollPopup');
    const popupCloseBtn = document.querySelector('.scroll-popup-close');
    
    if (scrollPopup) {
        ScrollTrigger.create({
            trigger: "#intro",
            start: "bottom center",
            onEnter: () => {
                if (!popupShown) {
                    scrollPopup.classList.add('active');
                    popupShown = true;
                }
            }
        });
        
        popupCloseBtn?.addEventListener('click', () => {
            scrollPopup.classList.remove('active');
        });
        
        scrollPopup.addEventListener('click', (e) => {
            if (e.target === scrollPopup) {
                scrollPopup.classList.remove('active');
            }
        });
    }
        }); // End inner rAF
    }); // End outer rAF
});

// Global Lightbox Functions
function openLightbox(src) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightbox && lightboxImg) {
        lightbox.style.display = "block";
        lightboxImg.src = src;
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox) {
        lightbox.style.display = "none";
    }
}
