import blogData from "../data/blog";


function About({ image, about }) {
    return (
        <aside className="About">
            <p>{about}</p>
            <img src={image} alt="blog logo" />

        </aside>
    )
}

export default About;