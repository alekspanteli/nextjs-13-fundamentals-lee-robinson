import Counter from "./counter"

export async function generateStaticParams() {
    return [{
        slug: 'streasdam'
    }]
}

export default function IndividualBlogPost() {
    return (
        <>
            <h1>Live stream starts soon</h1>
            <p>
                Text goes here
            </p>
            <Counter />
        </>
    )
}