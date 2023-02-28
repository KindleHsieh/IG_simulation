import IGContainer from "components/IGContainer";
import IGHeader from "components/IGHeader";
import IGUser from "components/IGUser";

import { useAppSelector } from "../../hooks";

const Following: React.FC = () => {
  // TODO del.
  // const friends = [
  //   {
  //     id: 1,
  //     location: "Singapore",
  //     account: "max_999",
  //     isFollowing: true,
  //     avatar: "/images/avatars/a1.png",
  //   },
  //   {
  //     id: 2,
  //     location: "Singapore",
  //     account: "fm_999",
  //     isFollowing: true,
  //     avatar: "/images/avatars/a2.png",
  //   },
  //   {
  //     id: 3,
  //     location: "Singapore",
  //     account: "joanne_999",
  //     isFollowing: true,
  //     avatar: "/images/avatars/a3.png",
  //   },
  //   {
  //     id: 4,
  //     location: "Singapore",
  //     account: "focus_999",
  //     isFollowing: true,
  //     avatar: "/images/avatars/a4.png",
  //   }
  // ];
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;

  return (
    <>
    <IGHeader/>
    <IGContainer>
      <p>Following</p>
      <div className="shadow-md mt-8 mx-2 box-border">
        {friends.map((item)=>{
          const {id, account, avatar, isFollowing} = item;
          return (
            <div key={id} className="-mt-3">
              <IGUser id={id} account={account} avatar={avatar} isFollowing={isFollowing} showFollow={true}/>
            </div>
          );
        })}
      </div>
    </IGContainer>
    </>
  )
};

export default Following;
