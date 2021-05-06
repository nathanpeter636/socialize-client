import React, {useContext} from 'react'

import { Card, Icon, Label, Image, Button} from 'semantic-ui-react'

import moment from 'moment'
import { Link } from 'react-router-dom'

import { AuthContext} from '../context/auth'

import LikeButton from '../components/LikeButton'

import DeleteButton from '../components/DeleteButton'

import MyPopup from '../util/MyPopup'



function PostCard({post: { body, createdAt, id, username, likes, likeCount, commentCount}}) {


  const { user } = useContext(AuthContext);


  

  
    function likePost(){

        console.log('like cliked')
    }



    return (

        <Card>
          <MyPopup content="View post">
        <Card.Content fluid as={Link} to={`/posts/${id}`}>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
          <Card.Description>
            {body}
          </Card.Description>
        </Card.Content>
        </MyPopup>
        <Card.Content extra>
       
        <LikeButton user={user} post={{id , likes, likeCount}}/>

        <MyPopup content="Comment on post">
        
        
          <Button as='div' labelPosition='right' as={Link} to={`/posts/${id}`}>
          <Button color='blue' basic>
            <Icon name='comments' />
        
          </Button>
          <Label basic color='blue' pointing='left' >
            {commentCount}
          </Label>
        </Button>
        </MyPopup>
   

    {user && user.username === username && <DeleteButton postId={id} /> }
        </Card.Content>
      </Card>
        
    )
}

export default PostCard
