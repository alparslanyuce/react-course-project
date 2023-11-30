import { useEffect, useState } from "react"
function Test(){
    const[postId, setPostId] = useState(1)
    const[post, setPost] = useState(false)

    // useEffect(() =>{
    //     console.log('component render oldu')
    // })
    useEffect(() =>{
        console.log('component ilk yüklendiğinde çalışır')
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        let interval = setInterval(() => console.log('interval çalıştı!'),1000)
        return () => {
            console.log('component destroyed')
            clearInterval(interval)
        }
    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
        // console.log('postId değişti', postId)
    },[postId])
return (
    <div>
        <h3>{postId}</h3>
        {post && JSON.stringify(post)}
        <button onClick={() => setPostId(postId => postId+ 1)}>Sonraki konu
        
        </button>
        <hr/>
        test componenti
    </div>
)
}
export default Test