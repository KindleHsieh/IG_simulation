import IGUser from "components/IGUser";
import { useAppSelector } from "../../../../hooks";

// const friends = [
//     {
//     id: 1,
//     location: "Singapore",
//     account: "max_999",
//     isFollowing: true,
//     avatar: "/images/avatars/a1.png",
//     },
//     {
//     id: 2,
//     location: "Singapore",
//     account: "fm_999",
//     isFollowing: true,
//     avatar: "/images/avatars/a2.png",
//     },
//     {
//     id: 3,
//     location: "Singapore",
//     account: "joanne_999",
//     isFollowing: true,
//     avatar: "/images/avatars/a3.png",
//     },
//     {
//     id: 4,
//     location: "Singapore",
//     account: "focus_999",
//     isFollowing: true,
//     avatar: "/images/avatars/a4.png",
//     }
// ];

const IGProfile:React.FC = () =>{
    const friendReducer = useAppSelector((state)=>state.friendReducer);
    const friends = friendReducer.friends;
    return (
        <div className="mt-8 ml-8 shadow-lg box-border p-2">
        <IGUser
        account="bruce_fe"
        location="布魯斯前端"
        avatar="/images/avatar.png"
        size="medium"/>
        <p className="font-bold text-gray-400 mt-4 mx-4 mb-3 text-sm">You are following</p>
        {friends.map((item)=>{
            return(
                <div key={item.id} className="-mt-3">
                    <IGUser
                    account={item.account}
                    id = {item.id}
                    location={item.location}
                    avatar={item.avatar}
                    isFollowing={item.isFollowing}
                    showFollow/> 
                </div>
            )
        })}
        </div>
    )
}
export default IGProfile;