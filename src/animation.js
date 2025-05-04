

export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}



// variants = { fadeIn("up", 0.2) }
// initial = "hidden"
// whileInView = { "show"}
// viewport = {{ once: false, amount: 0.9 }}


// initial={{ width: 0 }}
// animate={{ width: "100%" }}
// exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}