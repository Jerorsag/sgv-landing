import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

export function initAnimations() {
	if (typeof window === 'undefined') return;

	// Set initial states for animations - valores mínimos para máxima fluidez
	gsap.set('.hero-content', { opacity: 0, y: 20 });
	gsap.set('.hero-title', { opacity: 0, y: 12 });
	gsap.set('.hero-description', { opacity: 0, y: 12 });
	gsap.set('.hero-cta', { opacity: 0, scale: 0.99 });
	gsap.set('.hero-image', { opacity: 0, x: 20, scale: 0.99 });
	gsap.set('.section-header', { opacity: 0, y: 10 });
	gsap.set('.service-card', { opacity: 0, y: 10, scale: 0.995 });
	gsap.set('.feature-item', { opacity: 0, y: 8, scale: 0.995 });
	gsap.set('.testimonials-header', { opacity: 0, y: 10 });
	gsap.set('.testimonial-card', { opacity: 0, y: 10, scale: 0.995 });

	// Hero Section - Entrada ultra fluida e instantánea
	const heroTimeline = gsap.timeline({ defaults: { ease: 'power1.out' } });
	heroTimeline
		.to('.hero-content', { 
			opacity: 1, 
			y: 0, 
			duration: 0.2,
			ease: 'power1.out'
		})
		.to('.hero-title', { 
			opacity: 1, 
			y: 0, 
			duration: 0.18,
			ease: 'power1.out'
		}, '-=0.18')
		.to('.hero-description', { 
			opacity: 1, 
			y: 0, 
			duration: 0.18,
			ease: 'power1.out'
		}, '-=0.15')
		.to('.hero-cta', { 
			opacity: 1, 
			scale: 1, 
			duration: 0.2,
			ease: 'back.out(1.02)'
		}, '-=0.15')
		.to('.hero-image', { 
			opacity: 1, 
			x: 0, 
			scale: 1, 
			duration: 0.2,
			ease: 'power1.out'
		}, '-=0.18');

	// Section Headers Animation - ultra fluida
	const sectionHeaders = document.querySelectorAll('.section-header, .testimonials-header');
	sectionHeaders.forEach((header) => {
		gsap.fromTo(header,
			{
				opacity: 0,
				y: 10,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.25,
				ease: 'power1.out',
				scrollTrigger: {
					trigger: header,
					start: 'top 98%',
					end: 'top 50%',
					toggleActions: 'play none none reverse',
				},
			}
		);
	});

	// Service Cards - Animación ultra fluida
	const serviceCards = document.querySelectorAll('.service-card');
	if (serviceCards.length > 0) {
		gsap.fromTo(serviceCards, 
			{
				opacity: 0,
				y: 8,
				scale: 0.995,
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.2,
				stagger: {
					amount: 0.06,
					from: 'start',
					ease: 'power1.out',
				},
				ease: 'power1.out',
				scrollTrigger: {
					trigger: serviceCards[0]?.parentElement,
					start: 'top 98%',
					end: 'top 60%',
					toggleActions: 'play none none reverse',
				},
			}
		);
	}

	// Feature Items - Animación ultra fluida
	const featureItems = document.querySelectorAll('.feature-item');
	if (featureItems.length > 0) {
		gsap.fromTo(featureItems, 
			{
				opacity: 0,
				y: 6,
				scale: 0.995,
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.2,
				stagger: {
					amount: 0.05,
					from: 'start',
					ease: 'power1.out',
				},
				ease: 'power1.out',
				scrollTrigger: {
					trigger: featureItems[0]?.parentElement,
					start: 'top 98%',
					end: 'top 60%',
					toggleActions: 'play none none reverse',
				},
			}
		);
	}

	// Testimonial Cards - Animación ultra fluida
	const testimonialCards = document.querySelectorAll('.testimonial-card');
	if (testimonialCards.length > 0) {
		gsap.fromTo(testimonialCards, 
			{
				opacity: 0,
				y: 8,
				scale: 0.995,
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.2,
				stagger: {
					amount: 0.05,
					from: 'start',
					ease: 'power1.out',
				},
				ease: 'power1.out',
				scrollTrigger: {
					trigger: testimonialCards[0]?.parentElement,
					start: 'top 98%',
					end: 'top 60%',
					toggleActions: 'play none none reverse',
				},
			}
		);
	}

	// Navbar background on scroll - instantáneo y fluido
	const navbar = document.querySelector('#navbar');
	if (navbar) {
		ScrollTrigger.create({
			start: 'top -80',
			end: 99999,
			onEnter: () => {
				gsap.to(navbar, {
					backgroundColor: 'rgba(255, 255, 255, 0.98)',
					backdropFilter: 'blur(12px)',
					boxShadow: '0 4px 14px rgba(95, 167, 127, 0.08), 0 2px 5px rgba(0, 0, 0, 0.05)',
					duration: 0.12,
					ease: 'power1.out',
				});
			},
			onLeaveBack: () => {
				gsap.to(navbar, {
					backgroundColor: 'rgba(255, 255, 255, 0.95)',
					backdropFilter: 'blur(8px)',
					boxShadow: 'none',
					duration: 0.12,
					ease: 'power1.out',
				});
			},
		});
	}

	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href === '#' || href === '#contacto') {
				if (href === '#contacto') {
					e.preventDefault();
					const target = document.querySelector(href);
					if (target) {
						const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
						window.scrollTo({
							top: targetPosition,
							behavior: 'smooth',
						});
					}
				}
				return;
			}

			e.preventDefault();
			const target = document.querySelector(href);
			if (target) {
				const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth',
				});
			}
		});
	});

	// Refresh ScrollTrigger on resize
	let resizeTimer;
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			ScrollTrigger.refresh();
		}, 250);
	});
}
