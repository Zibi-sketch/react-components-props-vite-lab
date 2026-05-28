import blogData from "../data/blog";


import Article from "./Article";

function ArticleList(articles) {
    const postsArray = articles.posts || [];
    return (
        <main className="List">
            {
                postsArray.map((post) => {
                    return (
                        <Article
                            key={post.id}
                            title={post.title}
                            date={post.date}
                            preview={post.preview}
                        />
                    );
                })
            }
        </main>
    )
}

export default ArticleList;