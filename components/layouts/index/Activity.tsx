import ImageCard from "@/components/stateless/Image-Card";

const Activity = () => {
  return (
    <section className="bg-bg-light text-bg-dark dark:text-bg-light dark:bg-bg-dark py-10 transition">
      <div className="container text-center">
        <div className="flex justify-center">
          <h3 className="mr-2 text-2xl font-semibold">What I Do</h3>
          <p className="self-center font-medium">私がやること</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 mt-10">
          <ImageCard
            src="/img/dotfiles.webp"
            width={450}
            height={300}
            alt={`dotfiles`}
            title="Linux Ricing & Experiment"
          />
          <ImageCard
            src={`/img/dotfiles.webp`}
            width={450}
            height={300}
            alt={`dotfiles`}
            title="Make Complicated Things"
          />
          <ImageCard
            src={`/img/dotfiles.webp`}
            width={450}
            height={300}
            alt={`dotfiles`}
            title="Watching Anime's"
          />
          <ImageCard
            src={`/img/dotfiles.webp`}
            width={450}
            height={300}
            alt={`dotfiles`}
            title="Playing Music"
          />
        </div>
        {/* <div className="hidden xl:block w-40 h-80 rounded-tr-full rounded-br-full bg-bg-dark absolute top-[70rem] left-0 shadow"></div> */}
      </div>
    </section>
  );
};

export default Activity;
