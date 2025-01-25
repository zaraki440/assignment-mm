// Function to switch to the gallery view
function showGallery() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('aboutContent').style.display = 'none';
    document.getElementById('eventsContent').style.display = 'none';
    document.getElementById('appointmentContent').style.display = 'none';
    document.getElementById('galleryContent').style.display = 'block';
}

// Function to switch to the about view
function showAbout() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('galleryContent').style.display = 'none';
    document.getElementById('eventsContent').style.display = 'none';
    document.getElementById('appointmentContent').style.display = 'none';
    document.getElementById('aboutContent').style.display = 'block';
}

// Function to switch to the events view
function showEvents() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('aboutContent').style.display = 'none';
    document.getElementById('galleryContent').style.display = 'none';
    document.getElementById('appointmentContent').style.display = 'none';
    document.getElementById('eventsContent').style.display = 'block';
}

// Function to switch to the appointment view
function showAppointment() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('aboutContent').style.display = 'none';
    document.getElementById('eventsContent').style.display = 'none';
    document.getElementById('galleryContent').style.display = 'none';
    document.getElementById('appointmentContent').style.display = 'block';
}

// Function to switch back to the main view
function showMain() {
    document.getElementById('galleryContent').style.display = 'none';
    document.getElementById('aboutContent').style.display = 'none';
    document.getElementById('eventsContent').style.display = 'none';
    document.getElementById('appointmentContent').style.display = 'none';
    document.getElementById('mainContent').style.display = 'flex';
}

// Modal functionality for gallery
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImages = document.getElementById('modalImages');
    const closeBtn = document.querySelector('.close');

    // Add click event to gallery images
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('click', async function() {
            const id = this.getAttribute('data-id');
            const response = await fetch('images.json');
            const data = await response.json();
            const item = data[id];

            modal.style.display = 'block';
            modalTitle.textContent = item.title;
            modalDescription.textContent = item.description;

            // Clear previous images
            modalImages.innerHTML = '';

            // Add new images
            item.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = item.title;
                img.classList.add('modal-image');
                modalImages.appendChild(img);
            });
        });
    });

    // Close the modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Event Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const eventModal = document.getElementById('eventModal');
    const eventModalTitle = document.getElementById('eventModalTitle');
    const eventModalImage = document.getElementById('eventModalImage');
    const eventModalDescription = document.getElementById('eventModalDescription');
    const closeEventModalBtn = eventModal.querySelector('.close');

    // Add click event to event images
    const eventImages = document.querySelectorAll('.event-image');
    eventImages.forEach(image => {
        image.addEventListener('click', function() {
            const eventTitle = this.nextElementSibling.textContent;
            const eventDescription = this.nextElementSibling.nextElementSibling.textContent;

            eventModal.style.display = 'block';
            eventModalTitle.textContent = eventTitle;
            eventModalImage.src = this.src;
            eventModalDescription.textContent = eventDescription;
        });
    });

    // Close the event modal
    closeEventModalBtn.addEventListener('click', function() {
        eventModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === eventModal) {
            eventModal.style.display = 'none';
        }
    });

    // Handle join event button click
    document.getElementById('joinEventBtn').addEventListener('click', function() {
        alert('Thank you for participating in the event');
        eventModal.style.display = 'none';
    });
});

// Add click event to the gallery link
document.getElementById('galleryLink').addEventListener('click', function(event) {
    event.preventDefault();
    showGallery();
});

// Add click event to the about link
document.getElementById('aboutLink').addEventListener('click', function(event) {
    event.preventDefault();
    showAbout();
});

// Add click event to the events link
document.getElementById('eventsLink').addEventListener('click', function(event) {
    event.preventDefault();
    showEvents();
});

// Add click event to the "Make an appointment" link
document.querySelector('a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    showAppointment();
});

// Add click event to the "Back to Main" button
document.getElementById('backToMain').addEventListener('click', function() {
    showMain();
});

// Add click event to the "Back to Main" button in the about section
document.getElementById('backToMainFromAbout').addEventListener('click', function() {
    showMain();
});

// Add click event to the "Back to Main" button in the events section
document.getElementById('backToMainFromEvents').addEventListener('click', function() {
    showMain();
});

// Add click event to the "Back to Main" button in the appointment section
document.getElementById('backToMainFromAppointment').addEventListener('click', function() {
    showMain();
});

// Handle appointment form submission
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;

    // Display confirmation modal
    const appointmentModal = document.getElementById('appointmentModal');
    const appointmentModalMessage = document.getElementById('appointmentModalMessage');
    
    appointmentModalMessage.textContent = `Thank you, ${name}! Your appointment has been scheduled for ${date} at ${time}. We will contact you at ${email} if there are any changes.`;
    appointmentModal.style.display = 'block';

    // Clear the form
    document.getElementById('appointmentForm').reset();
});

// Close the appointment modal
document.querySelector('#appointmentModal .close').addEventListener('click', function() {
    document.getElementById('appointmentModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('appointmentModal')) {
        document.getElementById('appointmentModal').style.display = 'none';
    }
});