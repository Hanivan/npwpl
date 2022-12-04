import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="grid place-items-center h-screen">
        <div>
          <h1>Under Construction</h1>
          <Link
            href={`/`}
            className="text-center w-full inline-block underline"
          >
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
