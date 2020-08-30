import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  const specificReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
  
  const listedReviews = specificReviews.map(review =>{
      return (
        <Review
          key={review.id}
          review={review}
          deleteReview={this.props.deleteReview}/>
      )
    }
    )

  render() {
    return (
      <ul>
        Reviews
        {listedReviews}
      </ul>
    );
  }
};

export default Reviews;
