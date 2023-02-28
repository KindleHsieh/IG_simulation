import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";

import IGStory from "./components/IGStory";
import IGPostList from "./IGPostList";
import IGProfile from "./components/IGProfile";





const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg:justify-center">
          {/* left */}
          <div className="w-full lg:w-[600px]">
            <IGStory />
            <IGPostList />
          </div>
          {/* right */}
          <div className="hidden lg:block lg:w-[424px]">
            <IGProfile />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
