import { IPost } from "../types/types.index";

export default function PostCard({ post }: { post: IPost }) {
    return (
        <div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 max-w-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 uppercase">
                    {post.title}
                </h2>
                <p className="text-gray-600 whitespace-pre-line">{post.body}</p>
            </div>
        </div>
    )
}
