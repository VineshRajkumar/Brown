import React from 'react'
import { useEffect,useState } from 'react'
import PostForm from '@/components/post-form/PostForm'
import serviceObj from '@/appwrite/config'
import { useNavigate,useParams } from 'react-router-dom'
import { Container } from '@/components'

const EditPost = () => {
    const [post, setPost] = useState(null)
    const {slug} = useParams();
    const navigate = useNavigate()
    
    useEffect(() => {
        
        if(slug){
            serviceObj.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                    // console.log(post)
                }
            })
        }
        else{
            navigate('/Brown')
        }
    }, [slug,navigate])
    

  return post ? (
    <div className='my-8 mx-8 border-2 border-black' >
        <Container>
            
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost
