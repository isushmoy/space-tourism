import gsap from 'gsap';

// Function to check reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const animateContent = () => {
    if (!prefersReducedMotion) {
        gsap.fromTo(
            ".appear",
            { opacity: 0.25, y: 20 },
            { opacity: 1, y: 0, duration: 1 }
        );
    } else {
        // Reduced motion version
        gsap.fromTo(
            ".appear",
            { opacity: 0 },
            { opacity: 1, duration: 0.5 }
        );
    }
};

const onLoading = () => {
    if (!prefersReducedMotion) {
        gsap.fromTo(
            ".onLoad",
            { opacity: 0.25, y: 20 },
            { opacity: 1, y: 0, duration: 1 }
        );
    } else {
        // Reduced motion version
        gsap.fromTo(
            ".onLoad",
            { opacity: 0 },
            { opacity: 1, duration: 0.5 }
        );
    }
};

export { animateContent as default, onLoading };