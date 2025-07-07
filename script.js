// script.js
document.addEventListener('DOMContentLoaded', async () => {
    const carouselInner = document.querySelector('.project-carousel-inner');

    // Define your project data (or fetch from a JSON file)
    const projects = [
        {
            title: "Project Alpha: AI Chatbot",
            description: "Developed a conversational AI chatbot using natural language processing (NLP) to assist users with common queries and provide personalized recommendations.",
            imageUrl: "https://placehold.co/600x400/081F5E/FFFFFF?text=Project+Alpha",
            link: "#"
        },
        {
            title: "Project Beta: E-commerce Platform",
            description: "Built a full-stack e-commerce solution with user authentication, product catalog, shopping cart, and secure payment gateway integration.",
            imageUrl: "https://placehold.co/600x400/004d40/FFFFFF?text=Project+Beta",
            link: "#"
        },
        {
            title: "Project Gamma: Data Visualization Dashboard",
            description: "Created an interactive dashboard to visualize complex datasets, allowing users to filter, sort, and gain insights from real-time information.",
            imageUrl: "https://placehold.co/600x400/4a148c/FFFFFF?text=Project+Gamma",
            link: "#"
        },
        {
            title: "Project Delta: Mobile Game Development",
            description: "Designed and implemented a 2D mobile puzzle game for Android and iOS, focusing on intuitive gameplay mechanics and engaging level design.",
            imageUrl: "https://placehold.co/600x400/880e4f/FFFFFF?text=Project+Delta",
            link: "#"
        },
        {
            title: "Project Epsilon: Smart Home Automation",
            description: "Developed a prototype smart home system integrating various sensors and actuators, controllable via a web interface and voice commands.",
            imageUrl: "https://placehold.co/600x400/1b5e20/FFFFFF?text=Project+Epsilon",
            link: "#"
        }
    ];

    // Function to create a carousel item
    const createCarouselItem = (project, isActive) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carousel-item', 'project-carousel-item');
        if (isActive) {
            itemDiv.classList.add('active');
        }

        itemDiv.innerHTML = `
            <div class="row project-item-row">
                <div class="col-12 col-md-6 project-text-column">
                    <div class="project-text-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <a href="${project.link}" class="project-link btn btn-primary custom-btn" target="_blank">
                            View Project <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 project-image-column">
                    <div class="project-image-wrapper">
                        <img src="${project.imageUrl}" class="img-fluid project-image rounded" alt="${project.title} Screenshot">
                    </div>
                </div>
            </div>
        `;
        return itemDiv;
    };

    // Populate the carousel
    projects.forEach((project, index) => {
        const item = createCarouselItem(project, index === 0); // First item is active
        carouselInner.appendChild(item);
    });

    // Initialize Bootstrap Carousel (if not already done by data-bs-ride="carousel")
    // const myCarousel = new bootstrap.Carousel(document.getElementById('projectShowcaseCarousel'), {
    //     interval: 5000 // Auto-advance every 5 seconds
    // });
});