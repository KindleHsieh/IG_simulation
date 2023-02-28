import Loading from "components/Loading";
import IGPost from "./components/IGPost"

import {useGetIGPostsQuery} from "services/homeServices"



const IGPostList: React.FC = () => {
  const {data, isLoading} = useGetIGPostsQuery("all");
    // //TODO del.
    // const data = [
    //   {
    //     "id": 1,
    //     "location": "布魯斯前端",
    //     "account": "bruce_1234",
    //     "avatar": "/images/avatars/a1.png",
    //     "photo": "/images/posts/main1.png",
    //     "likes": 999,
    //     "description": "我的老天鵝！",
    //     "hashTags": "#鵝鵝",
    //     "createTime": "1 HOURS AGO"
    //   },
    //   {
    //     "id": 2,
    //     "location": "7-11你好門市",
    //     "account": "__0831_xxx__",
    //     "avatar": "/images/avatars/a2.png",
    //     "photo": "/images/posts/main2.png",
    //     "likes": 333,
    //     "description": "我的老天鵝！",
    //     "hashTags": "#鵝鵝",
    //     "createTime": "5 HOURS AGO"
    //   },
    //   {
    //     "id": 3,
    //     "location": "Taipei",
    //     "account": "gogogo_0214",
    //     "avatar": "/images/avatars/a3.png",
    //     "photo": "/images/posts/main3.png",
    //     "likes": 777,
    //     "description": "我的老天鵝！",
    //     "hashTags": "#鵝鵝",
    //     "createTime": "6 HOURS AGO"
    //   },
    //   {
    //     "id": 4,
    //     "location": "信義區",
    //     "account": "zoe_0000",
    //     "avatar": "/images/avatars/a4.png",
    //     "photo": "/images/posts/main4.png",
    //     "likes": 824,
    //     "description": "我的老天鵝！",
    //     "hashTags": "#鵝鵝",
    //     "createTime": "7 HOURS AGO"
    //   },
    //   {
    //     "id": 5,
    //     "location": "南港區",
    //     "account": "zoe_0000",
    //     "avatar": "/images/avatars/a5.png",
    //     "photo": "/images/posts/main5.png",
    //     "likes": 98,
    //     "description": "我的老天鵝！",
    //     "hashTags": "#鵝鵝",
    //     "createTime": "10 HOURS AGO"
    //   }
    // ];
    return (
      <>
      {
        isLoading && (
          <div className= "w-full flex justify-center mt-20">
            <Loading />
          </div>
        )
      }
      {
        !isLoading &&
        data?.map(
          (item)=> {
            const {id, account, location, avatar, photo, likes, description, hashTags, createTime} = item;
            return <IGPost key={id} account={account} location={location} avatar={avatar} photo={photo} likes={likes} description={description} hashTags={hashTags} createTime={createTime}/>
          }
          )
      }
      </>
    )
    
  }

export default IGPostList


// {/* 取得資料的方法一，使用item
//         {/* {data?.map(
//         (item)=> <IGPost key={item.id} account={item.account} location={item.location} avatar={item.avatar} photo={item.photo} likes={item.likes} description={item.description} hashTags={item.hashTags} createTime={item.createTime}/>
//         )} */}

//       {/* 取得資料的方法二，使用const把資料取出來 */}
//       {data?.map(
//         (item)=> {
//           const {account, location, avatar, photo, likes, description, hashTags, createTime} = item;
//           return <IGPost account={account} location={location} avatar={avatar} photo={photo} likes={likes} description={description} hashTags={hashTags} createTime={createTime}/>
//         }
//         )}