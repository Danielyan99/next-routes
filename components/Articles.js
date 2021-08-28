import Link from "next/link";

export default function Article(props) {

    console.log(props)
    return (
        <>
            its Article page<br/>
            <Link href="/">go to home</Link>
        </>
    )
}



