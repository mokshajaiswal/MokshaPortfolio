import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { like, dislike, heart, addComment } from '../redux/slices/postInteractionsSlice';
import { RootState } from '../redux/store';
import './InteractionWidget.css';
import flower3 from '../assets/about/flower3.png'; 
import likeimage from '../assets/Icons/like.png'; 
import dislikeimage from '../assets/Icons/dislike.png'; 
import commentimage from '../assets/Icons/comment.png'; 
import heartimage from '../assets/Icons/heart.png'; 

interface Props {
  pageId: string;
}

const InteractionWidget: React.FC<Props> = ({ pageId }) => {
  const dispatch = useDispatch();
  const pageData = useSelector((state: RootState) => state.postInteractions[pageId] || {
    likes: 0,
    dislikes: 0,
    hearts: 0,
    comments: [],
  });

  const [comments, setComments] = useState<string[]>([
    'Alex: This photo is stunning! Great work!',
    'Jordan: The colors and composition are amazing.',
    'Taylor: Such a peaceful and inspiring scene!',
  ]);

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim() && name.trim()) {
        setComments([...comments, `${name}: ${comment}`]);
      setComment('');
      setName('');
    }
  };

  return (
    <div className="interaction-widget">
      <div className="feedback-header">
      <img src={flower3} style={{borderRadius : 0}} alt="Flower Icon" className="flower-icon" />
        <h3>Feedback</h3>
        <img src={flower3} style={{borderRadius : 0}} alt="Flower Icon" className="flower-icon" />
      </div>



      <div className="reactions">
        <button className="reaction-button" onClick={() => dispatch(like(pageId))}>
          <img src={likeimage} style={{borderRadius : 0}} alt="Like" />
        </button>
        <span className="reaction-count">{pageData.likes}</span>



        <button className="reaction-button" onClick={() => dispatch(dislike(pageId))}>
          <img src={dislikeimage} alt="Dislike" />
        </button>
        <span className="reaction-count">{pageData.dislikes}</span>
        <button className="reaction-button" onClick={() => dispatch(heart(pageId))}>
          <img src={heartimage} alt="Heart" />
        </button>
        <span className="reaction-count">{pageData.hearts}</span>


        <div className="commentimage-container">
        <div className="comments-counter">
          <img src={commentimage} alt="Comments" className="comment-icon" />
          
          </div>
          <span className="comment-count">{comments.length}</span>
        </div>
      </div>
      
      

      <div className="comment-section">
        <h4>Comment</h4>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-name"
        />
        <textarea
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="input-comment"
        ></textarea>
        <button onClick={handleAddComment} className="submit-button">Submit</button>
      </div>
      

      <div className="comments-display">
  {comments.length > 0 ? (
    comments.map((c, index) => {
      const [name, commentText] = c.split(': ', 2); // Split name and comment text
      return (
        <div key={index} className="comment-box">
          <p className="comment-name"> {name} </p>
          <div className="comment-divider"></div>
          <p className="comment-text">{commentText}</p>
        </div>
      );
    })
  ) : (
    <p className="no-comments">No comments yet.</p>
  )}
</div>
    </div>
  );
};

export default InteractionWidget;