import PostCard from "@/app/components/PostCard";
import { IPost } from "@/app/types/types.index";

export default async function PostPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=25");
    const posts = await res.json();
    return (
        <>
            <h1 className="text-3xl font-bold text-center my-8">Total Posts: {posts.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[80%] mx-auto my-4">
                {
                    posts?.map((post: IPost) => (
                        <PostCard key={post?.id} post={post} />
                    ))
                }
            </div>
        </>
    )
}
