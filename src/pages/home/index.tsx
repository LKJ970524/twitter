import PostForm from "components/posts/PostForm";
import PostBox from "components/posts/PostBox";

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileUrl?: string;
  likes?: string[];
  likeCount?: number;
  comments?: any;
}

const posts: PostProps[] = [
  {
    id: "1",
    email: "test@test.com",
    content: "ㅈ까",
    createdAt: "2024-04-11",
    uid: "123456789",
  },
  {
    id: "2",
    email: "test@test.com",
    content: "시발",
    createdAt: "2024-04-11",
    uid: "123789",
  },
  {
    id: "3",
    email: "test@test.com",
    content: "가능한건가 개발자",
    createdAt: "2024-04-11",
    uid: "123456",
  },
  {
    id: "4",
    email: "test@test.com",
    content: "취업 왜 안되는겨",
    createdAt: "2024-04-11",
    uid: "123789456",
  },
  {
    id: "5",
    email: "test@test.com",
    content: "내용뭔데",
    createdAt: "2024-04-11",
    uid: "123789789",
  },
  {
    id: "6",
    email: "test@test.com",
    content: "싯털 취업좀",
    createdAt: "2024-04-11",
    uid: "123789456456",
  },
];

export default function HomePage() {
  return (
    <div className="home">
      <div className="home__top">
        <div className="home__title">Home</div>
        <div className="home__tabs">
          <div className="home__tab home__tab-active">For you</div>
          <div className="home__tab">Following</div>
        </div>
      </div>
      {/* 포스트 폼 */}
      <PostForm />
      {/* 트윗 포스트 */}
      <div className="post">
        {posts?.map((post) => (
          <PostBox post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
