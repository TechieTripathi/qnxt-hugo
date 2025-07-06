// ========== our team page popup =========
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables with null checks
  const popup = document.getElementById('speech-therapist-cr-popup');
  const overlay = document.getElementById('overlay-popup');
  const cards = document.querySelectorAll('.speech-therapist-info');
  const closeButtons = document.querySelectorAll('.speech-therapist-card-popup-close');
  
  // Track current active popup
  let activePopup = null;

  // Only initialize click handlers if elements exist
  if (popup && overlay && cards.length > 0) {
    // Card click handler
    cards.forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.dataset.id; // Use the unique ID
        
        if (!id) { // Check if ID exists
          console.warn('Missing required data-id attribute on card');
          return;
        }

        // Mark the clicked card (useful for returning focus later)
        cards.forEach(c => c.removeAttribute('data-active')); // Clear previous active markers
        this.setAttribute('data-active', 'true');

        // Hide current active popup if exists
        if (activePopup) {
          activePopup.style.display = 'none';
        }

        // Show matching popup using the ID
        const targetPopup = document.querySelector(`.speech-therapist-card-popup[data-id="${id}"]`);

        if (targetPopup) {
          targetPopup.style.display = 'flex';
          popup.style.display = 'block';
          overlay.style.display = 'flex';
          document.body.style.overflow = 'hidden';
          activePopup = targetPopup;

          // Set focus to close button for accessibility
          const closeBtn = targetPopup.querySelector('.speech-therapist-card-popup-close');
          if (closeBtn) {
            closeBtn.focus();
          }
        } else {
          console.warn(`No popup found for id: ${id}`);
        }
      });
    });

    // Close popup function
    const closePopup = () => {
      if (popup && overlay) {
        if (activePopup) {
          activePopup.style.display = 'none';
          activePopup = null;
        }
        popup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Return focus to the last clicked card
        const lastCard = document.querySelector('.speech-therapist-info[data-active="true"]');
        if (lastCard) {
          lastCard.focus();
          lastCard.removeAttribute('data-active');
        }
      }
    };

    // Close button handlers
    if (closeButtons.length > 0) {
      closeButtons.forEach(button => {
        button.addEventListener('click', closePopup);
      });
    }

    // Overlay click handler
    overlay.addEventListener('click', closePopup);

    // ESC key handler
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && activePopup) {
        closePopup();
      }
    });

    // Trap focus within popup when open
    document.addEventListener('keydown', function(e) {
      if (!activePopup || e.key !== 'Tab') return;

      const focusableElements = activePopup.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    });
  }
});

// =====form=====
function toggleDropdown() {
  const dropdown = document.getElementById('dropdownMenu');
  if (dropdown) {
    dropdown.classList.toggle('show');
  }
}

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', function (e) {
  const dropdown = document.getElementById('dropdownMenu');
  const servicesButton = document.getElementById('services');
  
  if (dropdown && !dropdown.contains(e.target) && e.target !== servicesButton) {
    dropdown.classList.remove('show');
  }
});

