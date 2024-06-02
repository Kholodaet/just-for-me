import Swiper from 'swiper/bundle';
import 'swiper/css';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Function: show notification
const showNotification = msg => {
  iziToast.settings({
    timeout: 5000,
    titleColor: '#fff',
    position: 'topRight',
    messageColor: '#fff',
    icon: '',
    close: false,
  });

  iziToast.error({
    message: msg,
    class: 'error-notification',
    timeout: 5000,
    titleColor: '#fff',
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    progressBarColor: '#B51B1B',
    close: true,
  });
};

/* Step 1: Fetch review data from server, 
and only if we get status ok, go to the next step
*/
const fetchReviews = async () => {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );

    if (response.status !== 200) {
      throw new Error(response.status);
    }

    return response.data;
  } catch (error) {
    throw new Error(`Fetching reviews failed: ${error.message}`);
  }
};

/*
Step 2: Creating Slider instance and render 
slides based on response data from server.
***/
// Create Swiper instance
const swiper = new Swiper('#reviews-slider', {
  autoHeight: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 991px
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
});
// Save slider wrapper for render slides
const sliderWrapper = document.querySelector('.reviews-wrapper');

/*
Step 3: Using data fetched from server 
create a mockup of HTML, and render it as a li element
***/
fetchReviews()
  .then(reviews => {
    const markup = reviews
      .map(({ author, avatar_url, review }) => {
        return `
            <li class="review-card swiper-slide">
                <p class="review-card-text">${review}</p>
                <div class="review-card-author">
                    <img
                        class="review-card-author-avatar"
                        src="${avatar_url}"
                        alt="review author photo"
                        width="40"
                        height="40"
                    />
                    <p class="review-card-author-name">${author}</p>
                </div>
            </li>
        `;
      })
      .join('');
    // Add HTML to slider  wrapper
    sliderWrapper.insertAdjacentHTML('afterbegin', markup);
  })
  .catch(error => {
    sliderWrapper.insertAdjacentHTML(
      'afterbegin',
      `<p class="reviews-error-text">Not found</p>`
    );
    showNotification(error.message);
  });
