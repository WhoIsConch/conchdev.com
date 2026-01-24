import ProjectCard from "../ui/ProjectCard";

export default function ContactPage() {
    return <div className="flex flex-col gap-4 pb-8">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-lg">
            Listen, I don&apos;t know in what universe you would be on this 
            website and don&apos;t have a means of contacting me already, so 
            this portion of the site is dedicated to bots who want to send me
            scam emails. Shout out to the goats offering me money in exchange 
            for applying for jobs for them to work overseas.
        </p>
        <div className="flex flex-row flex-wrap gap-x-12 gap-y-4">
            <ProjectCard 
                title="Discord"
                body={`Probably my preferred method of communication, but I might
                    not respond if you don't share a server with me. That's why 
                    you should join my favorite server first, then contact me. You'll
                    know who I am.`}
                buttonText="Join The Coding Realm"
                buttonLink="https://discord.gg/6g48wnhP8E"
            />
            <ProjectCard 
                title="Twitter"
                body="Sorry Elon, I'm still not calling it X."
                buttonText="@UnsoughtConch"
                buttonLink="https://www.x.com/UnsoughtConch"
            />
            <ProjectCard 
                title="Email"
                body={`I know it's the big '26, but I still 
                    think emails are cool sometimes.`}
                buttonText="conch@conchdev.com"
                buttonLink="mailto:conch@conchdev.com"
            />
        </div>
    </div>
}