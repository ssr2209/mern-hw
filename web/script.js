
// Typing Effect for Hero Tagline
document.addEventListener('DOMContentLoaded', function() {
    const taglineElement = document.querySelector('.hero-tagline .typing-effect');
    if (taglineElement) {
        const taglines = [
            "Innovate. Lead. Transform.",
            "Agentforce & Responsible AI.",
            "Shape the Future with Us."
        ];
        let taglineIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentTagline = taglines[taglineIndex];
            if (isDeleting) {
                taglineElement.textContent = currentTagline.substring(0, charIndex - 1);
                charIndex--;
            } else {
                taglineElement.textContent = currentTagline.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentTagline.length) {
                setTimeout(() => isDeleting = true, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                taglineIndex = (taglineIndex + 1) % taglines.length;
            }

            const typeSpeed = isDeleting ? 50 : 100;
            setTimeout(type, typeSpeed);
        }
        type();
    }

    // Animated Counters for Stats
    const statCards = document.querySelectorAll('.stat-card');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const target = +statNumber.dataset.target;
                let current = 0;
                const increment = target / 200; // Adjust for speed

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        statNumber.textContent = Math.ceil(current) + (target === 1 ? '' : '+');
                        requestAnimationFrame(updateCounter);
                    } else {
                        statNumber.textContent = target + (target === 1 ? '' : '+');
                    }
                };
                updateCounter();
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    statCards.forEach(card => {
        observer.observe(card);
    });

    // Scroll-triggered Fade and Slide Animations
    const animateOnScroll = document.querySelectorAll('.page-section, .card, .timeline-container');

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, { threshold: 0.1 });

    animateOnScroll.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        scrollObserver.observe(element);
    });

    // Dynamic Speaker Card Insertion (Example Data)
    const speakers = [
        {
            name: "Dr. Jane Doe",
            title: "AI Ethicist, Tech Corp",
            bio: "Dr. Doe is a leading expert in ethical AI development and responsible technology. She advocates for human-centered AI solutions.",
            linkedin: "#"
        },
        {
            name: "Mr. John Smith",
            title: "Agentforce Architect, Global Solutions",
            bio: "Mr. Smith has extensive experience in building scalable Agentforce applications and integrating AI into enterprise systems.",
            linkedin: "#"
        },
        {
            name: "Ms. Emily White",
            title: "Data Scientist, Innovate Labs",
            bio: "Ms. White specializes in machine learning and data privacy, focusing on secure and fair AI models.",
            linkedin: "#"
        }
    ];

    const speakersContainer = document.getElementById('speakers-container');
    if (speakersContainer) {
        speakers.forEach(speaker => {
            const speakerCard = document.createElement('div');
            speakerCard.classList.add('card');
            speakerCard.innerHTML = `
                <img src="https://via.placeholder.com/128" alt="${speaker.name}" class="speaker-image">
                <h3 class="speaker-name">${speaker.name}</h3>
                <p class="speaker-title">${speaker.title}</p>
                <p class="speaker-bio">${speaker.bio}</p>
                <a href="${speaker.linkedin}" target="_blank" class="linkedin-link">
                    <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.064-2.065 2.062 2.062 0 012.064-2.063 2.064 2.064 0 012.064 2.063 2.062 2.062 0 01-2.064 2.065zm-.011 0H5.326V9h3.414V7.433zM6.943 9H2.066V20.452H6.943z"/>
                    </svg>
                    LinkedIn
                </a>
            `;
            speakersContainer.appendChild(speakerCard);
        });
    }

    // Chart.js for Responsible AI Pillars (on about.html)
    const responsibleAIChartCtx = document.getElementById('responsibleAIChart');
    if (responsibleAIChartCtx) {
        new Chart(responsibleAIChartCtx, {
            type: 'pie',
            data: {
                labels: ['Fairness', 'Accountability', 'Transparency', 'Privacy', 'Safety'],
                datasets: [{
                    data: [20, 20, 20, 20, 20],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }

    // Chart.js for Sessions (on index.html or events.html)
    const sessionsChartCtx = document.getElementById('sessionsChart');
    if (sessionsChartCtx) {
        new Chart(sessionsChartCtx, {
            type: 'doughnut',
            data: {
                labels: ['Career-Focused Session', 'Project Expo'],
                datasets: [{
                    data: [50, 50],
                    backgroundColor: [
                        'rgba(51, 87, 255, 0.8)',
                        'rgba(255, 87, 51, 0.8)'
                    ],
                    borderColor: [
                        'rgba(51, 87, 255, 1)',
                        'rgba(255, 87, 51, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }

    // Chart.js for Impact (on index.html or about.html)
    const impactChartCtx = document.getElementById('impactChart');
    if (impactChartCtx) {
        new Chart(impactChartCtx, {
            type: 'bar',
            data: {
                labels: ['Current Members', 'Projected Members (Year 1)', 'Projected Members (Year 2)'],
                datasets: [{
                    label: 'Number of Members',
                    data: [100, 250, 500],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }
});
