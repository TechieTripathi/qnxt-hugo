

// home Crousel
var owl = $('.reveiw-carousel');
 owl.owlCarousel({
   margin: 16,
   loop: true,
   nav: true,
   navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <mask id="mask0_319_5930" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25"> <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0.51709)" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_319_5930)"> <path d="M7.825 13.5171H20V11.5171H7.825L13.425 5.91709L12 4.51709L4 12.5171L12 20.5171L13.425 19.1171L7.825 13.5171Z" fill="#27A9E1"/> </g> </svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <mask id="mask0_319_5940" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25"> <rect width="24" height="24" transform="matrix(1 0 0 -1 0 24.5171)" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_319_5940)"> <path d="M16.175 11.5171H4V13.5171H16.175L10.575 19.1171L12 20.5171L20 12.5171L12 4.51709L10.575 5.91709L16.175 11.5171Z" fill="#27A9E1"/> </g> </svg>'],
   dots: true,
   autoWidth:true,
//    stagePadding: 20,
   responsive: {
     0: {
       items: 1
     },
     600: {
       items: 1
     },
     1000: {
       items: 1
     }
   }
})


$(document).ready(function () {
    $('.header__icon--menu').on('click', () => {
      $('.menu-drawer').toggleClass('active-menu');
    })
    // load more
    $('#qna-load-more').on('click', () => {
      $('#tabs-content').toggleClass('load-more-dt');
      if ($('#tabs-content').hasClass('load-more-dt')) {
        $('#qna-load-more').html('Show Less');
      }
      else {
        $('#qna-load-more').html('Load More');
      }
    })
    $(".set > a").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".content")
          .slideUp(200);
        $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      } else {
        $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
        $(this)
          .find("i")
          .removeClass("fa-plus")
          .addClass("fa-minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
          .siblings(".content")
          .slideDown(200);
      }
    });
  });
  
  
  
  
  
  $(document).ready(function () {
    $('#open-menu-btn').click(function () {
      $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
      $('#overlay').addClass('active-behind');
      $('body').css('overflow', 'hidden');
    });
  
    $('.x-header-menu-close').click(function () {
      $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
      $('#overlay').removeClass('active-behind');
      $('body').css('overflow', 'unset');
    });
    $('.menu-bar-show-overlay').click(function () {
      $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
      $('#overlay').removeClass('active-behind');
      $('body').css('overflow', 'unset');
    })
  
    $('.mobile-search-accordian').click(function () {
      // Close all open split-accordion-text elements
    //   $('.split-accordion-text').not($(this).next('.split-accordion-text')).slideUp();
  
      // Toggle the visibility of the clicked split-accordion-text
      $(this).next('.split-accordion-text').slideToggle();
    });
  });
  


//   =========youtube video popup =========

// Get elements
const modal = document.getElementById('youtubeModal');
const trigger = document.getElementById('youtubePopupTrigger');
const closeBtn = document.getElementById('closeBtn');
const youtubeVideo = document.getElementById('youtubeVideo');

// Open modal and prevent body scrolling
if (trigger) {
  trigger.addEventListener('click', function() {
    const modal = document.getElementById('modal'); // Adjust ID
    const youtubeVideo = document.getElementById('youtube-video'); // Adjust ID
    if (modal && youtubeVideo) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent scrolling
      const videoSrc = youtubeVideo.src;
      youtubeVideo.src = videoSrc + "?autoplay=1"; // Enable autoplay
    } else {
      console.warn('Modal or YouTube video element not found');
    }
  });
} else {
  console.warn('Trigger element not found');
}

// Close modal on close button click or overlay click and allow body scrolling
if (closeBtn) {
  closeBtn.addEventListener('click', closeModal);
} else {
  console.warn('Close button element not found');
}
// modal.addEventListener('click', function(event) {
//   if (event.target === modal) {
//     closeModal();
//   }
// });

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
  youtubeVideo.src = ""; // Stop the video by clearing the src
}


// blog explore

// Select all blog content elements
const blogContents = document.querySelectorAll('.blog-clinic-content');

// Function to remove expanded class from all except the hovered one
function removeExpandedExcept(current) {
    blogContents.forEach(content => {
        if (content !== current) {
            content.classList.remove('expanded');
        }
    });
}

// Add event listeners to each content block
blogContents.forEach(content => {
    content.addEventListener('mouseenter', function () {
        this.classList.add('expanded'); // Expand current
        removeExpandedExcept(this); // Collapse others
    });
});



