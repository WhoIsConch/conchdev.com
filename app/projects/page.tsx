import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col flex-1">
      <p className="text-lg">
        Look, I figured out Next.JS routing, too. Anyway,
      </p>
    <div className="flex flex-col gap-4 justify-center flex-1">
      <h1 className="text-4xl font-bold">My Projects</h1>
      <p className="text-lg">
        Unfortunately, I don&apos;t have a lot of active public projects right
        now. I have an internship at a place, but I&apos;m not really building
        anything interesting.
      </p>
      <br />
      <div className="flex flex-row flex-wrap gap-x-12 gap-y-4">
        <ProjectCard
          title="Budgeteer"
          body={`A Flutter-built app to help manage a budget. While longer open-source, 
                Budgeteer won 9th place in FBLA's National Leadership Conference.`}
        />
        <ProjectCard
          title="Connect"
          body={`Also discontinued, the Pycord-based Discord bot was a 
                text-based social media app entirely within Discord.`}
        />
        <ProjectCard
          title="SimpleCTE"
          body={`Next and last in line on the FBLA projects, SimpleCTE was a 
                    national qualifier as a database application for managing a 
                    school's CTE program and its relationships.`}
          buttonLink="https://www.github.com/WhoIsConch/SimpleCTE"
          buttonText="No way, a project I can go to?"
        />
        <ProjectCard
          title="...And the rest."
          body={`If you care that much, feel free to take a look 
            at my GitHub profile to see the random repos I create and all 
            of my unfinished projects.`}
          buttonLink="https://www.github.com/WhoIsConch"
          buttonText="Take a gander"
        />
      </div>
    </div>

    </div>
  );
}
