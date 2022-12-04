const Parallax = () => {
  return (
    <section className="h-40 text-bg-dark bg-middle-fuji bg-cover bg-no-repeat bg-center bg-fixed flex justify-center align-center items-center">
      <div className="container">
        <div className="text-center">
          <h1 className="text-2xl font-medium">Did you summon me?</h1>
          <a
            href="#contact"
            className="bg-secondary rounded-full py-2 px-4 mt-2 inline-block text-bg-light font-medium hover:shadow transition hover:opacity-75"
          >
            Yes! Come here
          </a>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
