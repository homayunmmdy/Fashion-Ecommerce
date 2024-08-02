import React from 'react'

const Hero = () => {
    return (
        <div>
            <section id="hero" className="relative z-0	min-h-[520px] jarallax-img title-img bg-no-repeat w-full"
            style={{backgroundImage: "url(hero-img.png)"}}
            >
                <div className="py-32 xl:px-28 text-center">
                    <h2 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-thin">About self love &amp; Relationships</h2>
                    <p className="text-xl sm-text-2xl lg:text-4xl xl:px-40 py-10 text-stone-700">Hi, I’m a Fitness enthusiast eager to
                        share everything that i
                        learned
                        through
                        my 5 year transformation </p>
                </div>
                {/* <div id="jarallax-container-0" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; z-index: -100; clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%);"><div style="background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; background-image: url(&quot;https://demo.templatesjungle.com/amanda-tailwind/images/hero-img.png&quot;); position: fixed; top: 0px; left: 0px; width: 1351px; height: 853.5px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; will-change: transform, opacity; margin-top: -217.25px; transform: translate3d(0px, 217.25px, 0px);"></div></div> */}
                </section>
        </div>
    )
}

export default Hero