import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

export default getRouteProps(({ post, comments }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>

    <article>
      <h1>{post.title}</h1>

      <p>{post.body}</p>
       
      <div>
        All Comments:
        <ul>
          {comments.map(comment => (
            post.id === comment.postId ?
              <li key={comment.id}>
                {comment.id} : {comment.body}
              </li> : null
          ))}
        </ul>
      </div>
    </article>
  </div>
))