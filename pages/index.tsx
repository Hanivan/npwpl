import Banner from "@/layouts/index/Banner";
import Activity from "@/layouts/index/Activity";
import Parallax from "@/layouts/index/Parallax";
import Greeting from "@/layouts/index/Greeting";
import BaseLayout from "@/components/layouts/BaseLayout";

export default function Home() {
  return (
    <>
      <BaseLayout>
        <Banner />
        <Activity />
        <Parallax />
        <Greeting />
      </BaseLayout>
    </>
  );
}
