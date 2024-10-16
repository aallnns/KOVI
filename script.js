document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const reviewText = document.getElementById('review-text').value;
    const reviewsList = document.getElementById('reviews-list');
    
    const newReview = document.createElement('p');
    newReview.textContent = reviewText;
    
    reviewsList.appendChild(newReview);
    document.getElementById('review-text').value = ''; // очищуємо форму
});

