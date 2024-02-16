import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const onChangeComment = event => setCommentText(event.target.value)
  const onChangeName = event => setName(event.target.value)
  const [commentList, setCommentList] = useState([])

  const onAddComment = event => {
    event.preventDefault()
  
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentList(prevStateList => [...prevStateList, newComment])
    setName('')
    setCommentText('')
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onChangeComment}
          value={commentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
     <CommentsList>
     {commentList.map(each =>(
      <CommentItem key={each.id} commentDetails={each}/>
     ))}
     </CommentsList>
    </CommentsContainer>
  )
}
export default Comments
