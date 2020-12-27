new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('hi');
        const tl = gsap.timeline();
        tl.fromTo(title,0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1})
    }
});