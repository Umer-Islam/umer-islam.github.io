import { client } from "@/lib/sanity";
import Image from "next/image";

interface Data {
  title: string;
  overview: string;
  projectLink: string;
  GithubLink: string;
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type =='Portfolio'] {
    title,
      overview,
      projectLink,
      GithubLink,
      _id,
      'imageUrl': image.asset-> url
  }`;
  const data = await client.fetch(query);
  return data;
}
export const revalidate= 60;
export default async function Projects() {
  const data: Data[] = await getProjects();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Projects
        </h1>
      </div>

      <div className="grid gap-y-8 sm:gap-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {data.map((project) => (
          <article
            key={project._id}
            className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100"
          >
            <div className="h-56 w-full relative">
              <Image
                fill
                src={project.imageUrl}
                alt="Image of the project"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-6 text-center pb-3">
              <a href={project.projectLink} target="_blank">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>

              <p className="  line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {project.overview}
              </p>
<div className=" flex justify-between mb-2">
  <button className="  border border-gray-200 rounded-full hover:bg-teal-300 px-4 bg-teal-500 hover:text-black dark:bg-[bg-teal-900]" ><a href={project.projectLink} target='_blank'>Link</a></button>
  <button className=" border border-gray-200 rounded-full dark:hover:bg-white dark:hover:text  hover:bg-black  px-2 dark:bg-[#333333] bg-[#333333] text-white  "><a href={project.GithubLink} target='_blank'>Github</a></button>
</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}