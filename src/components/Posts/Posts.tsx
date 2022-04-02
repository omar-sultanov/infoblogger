import { useEffect, useState } from 'react'
import '../Posts/Posts.css'
import axios from 'axios';
import Icon from '../Icon/Icon';

interface dataFormProps {
  PostId: string,
  PostCompany: string
}
const Posts = ({ PostId, PostCompany }: dataFormProps) => {
  interface IPost {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
  }
  const [post, setPost] = useState<IPost[]>([]);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${PostId}`);
        const a = []
        for (let i = 0; i < 3; i++) {
          a.push(response.data[i])
        }
        setPost(a)
      } catch (error) {
        console.error(error);
      }
    }  
    getPosts()
  }, [PostId])

  return (
    <div className='Posts'>
      <div className='items'>
        <div className='icon'>
          <div className='icon_svg'>
            <svg id={`${!PostId && 'visible'}`} width="100" height="78" viewBox="0 0 100 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M92.8571 0H71.4286L57.1429 31.2V78H100V31.2H78.5714L92.8571 0ZM35.7143 0H14.2857L0 31.2V78H42.8571V31.2H21.4286L35.7143 0Z" fill="#FEE9CD" />
            </svg>
          </div>
          <div className='ellip_circle'>
            <Icon />
          </div>
        </div>
        <div className="item">
          <h1>{PostCompany}</h1>
          <div>
            {post.map((item, index) =>
              <div key={index}>
                <h3>{item?.title}</h3>
                <p>{item?.body}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts