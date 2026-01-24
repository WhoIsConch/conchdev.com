export default function Marquee() {
    return <div className="overflow-hidden mt-auto py-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="animate-marquee" style={{ '--duration': '160s' } as React.CSSProperties}>
            <p className="px-64">
                React and Next.js are actually pretty cool to work with, I can&apos;t lie. I enjoy TypeScript and the JSX format,
                but there&apos;s one big issue that puts me off from it, still makes it feel foreign. It isn&apos;t any of the new
                technologies, it isn&apos;t the fact that I&apos;m using a full stack framework to build a simple static site, and 
                it isn&apos;t even the fact that CSS sucks (it sucks less with Tailwind). No, it isn&apos;t any of that. 
                The single biggest downside I noticed about using Next.js for this website is the fact that I can&apos;t 
                create a marquee anymore. Apparently the element is deprecated, but the nice thing about using HTML is that 
                browsers prioritize backwards compatibility the same way ICE agents prioritize your local kindergarten 
                teacher instead of actual criminals. No, instead of using the basic &lt;marquee/&gt; element, I have to 
                either code it myself or install an npm package to do it for me. You&apos;re lucky I care about you enough
                to figure out how to put a marquee on my website in 2026. I mean, I don&apos;t necessarily *care* 
                about you, considering I have no idea who you are at this moment (I don&apos;t keep logs) but I&apos;m sure you&apos;re
                someone I might care about. If I don&apos;t care about you, I at least appreciate you for making it to the end of my 
                marquee. If you made it to the end of my last marquee on the former website, you get two great big thumbs up for that 
                AND you get added to my exclusive club reserved only for the coolest of cats, for which you are certainly one. Let me
                know if you got it this far on both marquees so I can get you your official cool cat license. If you don&apos;t end up
                qualifying for the cool cat license, you&apos;d better be careful. Trust me, you don&apos;t want to be seen walking 
                around without your cool cat license. It&apos;s like walking around Minneanapolis without your passport (but instead
                of getting shot in the head, people just know you aren&apos;t cool. Which is objectively worse, honestly).
            </p>

            <p className="px-64">
                React and Next.js are actually pretty cool to work with, I can&apos;t lie. I enjoy TypeScript and the JSX format,
                but there&apos;s one big issue that puts me off from it, still makes it feel foreign. It isn&apos;t any of the new
                technologies, it isn&apos;t the fact that I&apos;m using a full stack framework to build a simple static site, and 
                it isn&apos;t even the fact that CSS sucks (it sucks less with Tailwind). No, it isn&apos;t any of that. 
                The single biggest downside I noticed about using Next.js for this website is the fact that I can&apos;t 
                create a marquee anymore. Apparently the element is deprecated, but the nice thing about using HTML is that 
                browsers prioritize backwards compatibility the same way ICE agents prioritize your local kindergarten 
                teacher instead of actual criminals. No, instead of using the basic &lt;marquee/&gt; element, I have to 
                either code it myself or install an npm package to do it for me. You&apos;re lucky I care about you enough
                to figure out how to put a marquee on my website in 2026. I mean, I don&apos;t necessarily *care* 
                about you, considering I have no idea who you are at this moment (I don&apos;t keep logs) but I&apos;m sure you&apos;re
                someone I might care about. If I don&apos;t care about you, I at least appreciate you for making it to the end of my 
                marquee. If you made it to the end of my last marquee on the former website, you get two great big thumbs up for that 
                AND you get added to my exclusive club reserved only for the coolest of cats, for which you are certainly one. Let me
                know if you got it this far on both marquees so I can get you your official cool cat license. If you don&apos;t end up
                qualifying for the cool cat license, you&apos;d better be careful. Trust me, you don&apos;t want to be seen walking 
                around without your cool cat license. It&apos;s like walking around Minneanapolis without your passport (but instead
                of getting shot in the head, people just know you aren&apos;t cool. Which is objectively worse, honestly).
            </p>
        </div>
    </div>
}