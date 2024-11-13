import ProfileCard from "../components/profile/ProfileCard";
import UserJobs from "../components/profile/userJobs";

function ProfilePage() {
  return (
    <div className="relative mt-12 flex w-full flex-wrap justify-center gap-8 px-2">
      <div className="sticky top-36 hidden md:block">
        <div className="sticky top-36">
          <ProfileCard />
        </div>
      </div>
      <div className="top-36 block md:hidden">
        <ProfileCard />
      </div>
      <div>
        <UserJobs />
      </div>
    </div>
  );
}

export default ProfilePage;
