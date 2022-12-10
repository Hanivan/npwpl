import Image from "next/image";
import ButtonImage from "@/components/stateless/ButtonImage";
import { useEffect, useState } from "react";

export const githubUserInfo = {
  avatar_url: "",
  bio: "",
  blog: "",
  company: "",
  email: "",
  followers: 0,
  following: 0,
  html_url: "",
  name: "",
  login: "",
  repos_url: "",
  public_repos: 0,
  location: "",
};

const Greeting = () => {
  const [data, setData] = useState(githubUserInfo);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/Hanivan`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <section
      className="h-auto text-bg-dark bg-bg-light dark:text-bg-light dark:bg-bg-dark pt-28 transition"
      id="contact"
    >
      <div className="container">
        <div className="flex justify-center md:justify-start">
          <h3 className="mr-2 text-3xl font-semibold w-20">Who am i?</h3>
          <p className="self-end text-xl font-medium border-b-4 border-secondary pb-1">
            私は誰？
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-8 justify-evenly">
          <p className="w-3/4 text-center mt-4 md:mt-0 mx-auto md:mx-0 md:text-left md:w-[600px] order-2 md:order-1">
            Hallo-Hallo!! I&rsquo;m Hanivan Rizky Sobari. A developer who likes
            to fix a bug. I like Japanese things, especially the anime and J-Pop
            music. My goal is to become a full stack web developer. And, I
            prefer walking
          </p>
          {isLoading ? (
            <Image
              src={`https://avatars.githubusercontent.com/u/66857547?v=4`}
              alt="Hanivan Rizky S"
              width={264}
              height={264}
              className="order-1 md:order-2 bg-bg-dark mx-auto md:mx-0"
            />
          ) : (
            <Image
              src={`${
                data.avatar_url ||
                "https://avatars.githubusercontent.com/u/66857547?v=4"
              }`}
              alt={`${data.location || "Hanivan Rizky S"}`}
              width={264}
              height={264}
              className="order-1 md:order-2 bg-bg-dark mx-auto md:mx-0 shadow-md rounded"
            />
          )}
        </div>
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold">
            Let&rsquo;s Join The Journey!
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 py-8">
            <ButtonImage
              title="@Hanivan"
              href="https://github.com/Hanivan"
              src="/img/github.svg"
              alt="github"
              width={18}
              height={18}
            />
            <ButtonImage
              title="@hanivanrizky"
              href="https://instagram.com/hanivanrizky"
              src="/img/instagram.svg"
              alt="instagram"
              width={18}
              height={18}
            />
            <ButtonImage
              title="@hanivanrizky"
              href="https://www.linkedin.com/in/hanivanrizky"
              src="/img/linkedin.svg"
              alt="linkedin"
              width={18}
              height={18}
              imgClassName="inline-block mr-1 -mt-1"
            />
            <ButtonImage
              title="@hanivanrizky"
              href="https://hanivanrizky.t.me"
              src="/img/telegram.svg"
              alt="telegram"
              width={18}
              height={18}
              imgClassName="inline-block mr-1 -mt-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
