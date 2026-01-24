import Link from 'next/link';

export default function ProjectCard(
    { title, body, buttonLink, buttonText }: {
        title: string;
        body: string;
        buttonLink?: string;
        buttonText?: string;
    }
) {
    let button;

    if (buttonLink && buttonText) {
        button = <Link href={buttonLink} className="ml-auto mt-auto underline text-lg hover:text-gray-400 transition duration-200">
                    {buttonText}
                </Link>
    }
    return <div className="flex-1 flex flex-col gap-4 max-w-2xl min-w-xs rounded-lg p-4 -mx-4 hover:bg-black transition duration-200">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-lg">{body}</p>
        {button}
    </div>
}