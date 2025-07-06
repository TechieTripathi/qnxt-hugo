// Application data
const aiApplications = [
    {
        sector: "Defense/Military",
        application: "Autonomous Systems & UAVs",
        benefits: "Enhanced surveillance capabilities",
        roi: "40% efficiency improvement",
        complexity: "High"
    },
    {
        sector: "Defense/Military",
        application: "Cybersecurity & Threat Detection",
        benefits: "Advanced threat identification",
        roi: "60% reduction in false positives",
        complexity: "Medium"
    },
    {
        sector: "Renewable Energy",
        application: "Energy Production Forecasting",
        benefits: "Improved energy yield",
        roi: "25-40% performance improvement",
        complexity: "Medium"
    },
    {
        sector: "Renewable Energy",
        application: "Grid Optimization",
        benefits: "Enhanced grid stability",
        roi: "10-20% cost savings",
        complexity: "High"
    },
    {
        sector: "Logistics",
        application: "Route Optimization",
        benefits: "Cost savings and efficiency",
        roi: "$100K-$200K savings per MW",
        complexity: "Low-Medium"
    },
    {
        sector: "Logistics",
        application: "Supply Chain Analytics",
        benefits: "End-to-end visibility",
        roi: "25% improvement in visibility",
        complexity: "Medium"
    },
    {
        sector: "Finance",
        application: "Fraud Detection",
        benefits: "Advanced fraud prevention",
        roi: "50% improvement in detection",
        complexity: "Medium"
    },
    {
        sector: "Finance",
        application: "Credit Risk Assessment",
        benefits: "Faster credit decisions",
        roi: "25% faster processing",
        complexity: "Medium"
    },
    {
        sector: "Healthcare",
        application: "Medical Imaging & Diagnostics",
        benefits: "Accurate disease detection",
        roi: "99% accuracy in cancer detection",
        complexity: "High"
    },
    {
        sector: "Healthcare",
        application: "Predictive Analytics",
        benefits: "Early intervention",
        roi: "30% improvement in early detection",
        complexity: "Medium"
    }
];

const industryData = {
    defense: {
        title: "Defense/Military",
        overview: "Transform defense operations with cutting-edge AI and data science solutions that enhance national security, improve operational efficiency, and provide strategic advantages in modern warfare scenarios.",
        challenges: [
            "Complex threat landscape requiring real-time analysis",
            "Need for autonomous decision-making systems",
            "Integration with legacy defense systems",
            "Cybersecurity and data protection requirements",
            "Regulatory compliance and security clearance"
        ],
        opportunities: [
            "Autonomous weapons and surveillance systems",
            "Predictive maintenance for military equipment",
            "Intelligence analysis and threat detection",
            "Mission planning optimization",
            "Combat simulation and training systems"
        ],
        kpis: [
            "Threat detection accuracy: 95%+",
            "Response time reduction: 40%",
            "Operational cost savings: 30%",
            "Mission success rate improvement: 25%",
            "Equipment downtime reduction: 35%"
        ],
        technologies: [
            "Computer Vision & Image Recognition",
            "Natural Language Processing",
            "Reinforcement Learning",
            "Edge Computing",
            "Cybersecurity AI",
            "Autonomous Navigation Systems"
        ]
    },
    healthcare: {
        title: "Healthcare",
        overview: "Revolutionize healthcare delivery with AI-powered diagnostics, predictive analytics, and personalized treatment solutions that improve patient outcomes, reduce costs, and enhance operational efficiency across medical facilities.",
        challenges: [
            "Regulatory compliance and data privacy (HIPAA)",
            "Integration with existing healthcare systems",
            "Clinical validation requirements",
            "Healthcare professional adoption and training",
            "Interoperability between medical devices"
        ],
        opportunities: [
            "AI-powered medical imaging and diagnostics",
            "Drug discovery and development acceleration",
            "Personalized treatment recommendations",
            "Hospital operations optimization",
            "Telemedicine and remote patient monitoring"
        ],
        kpis: [
            "Diagnostic accuracy improvement: 30%",
            "Treatment time reduction: 25%",
            "Cost per patient reduction: 20%",
            "Patient satisfaction increase: 35%",
            "Readmission rate reduction: 40%"
        ],
        technologies: [
            "Deep Learning for Medical Imaging",
            "Natural Language Processing",
            "Predictive Analytics",
            "Clinical Decision Support Systems",
            "Genomics Analysis",
            "Wearable Device Integration"
        ]
    },
    renewable: {
        title: "Renewable Energy",
        overview: "Optimize renewable energy systems with advanced analytics, forecasting, and grid management solutions that maximize efficiency, reduce costs, and accelerate the global transition to sustainable clean energy.",
        challenges: [
            "Intermittent energy production variability",
            "Grid stability and integration complexities",
            "Weather dependency and forecasting accuracy",
            "Energy storage optimization",
            "Regulatory and policy compliance"
        ],
        opportunities: [
            "Smart grid optimization and management",
            "Energy production forecasting",
            "Predictive maintenance for wind/solar farms",
            "Energy trading and market optimization",
            "Carbon footprint tracking and reduction"
        ],
        kpis: [
            "Energy yield improvement: 25%",
            "Grid stability enhancement: 40%",
            "Maintenance cost reduction: 30%",
            "Carbon footprint reduction: 50%",
            "Energy storage efficiency: 35%"
        ],
        technologies: [
            "Time Series Forecasting",
            "IoT Data Analytics",
            "Machine Learning",
            "Digital Twin Technology",
            "Weather Prediction Models",
            "Smart Grid Technologies"
        ]
    },
    finance: {
        title: "Finance",
        overview: "Transform financial services with AI-driven risk management, fraud detection, algorithmic trading, and compliance solutions that enhance security, improve profitability, and ensure regulatory adherence.",
        challenges: [
            "Regulatory compliance requirements (SOX, Basel III)",
            "Real-time fraud detection needs",
            "Market volatility and risk management",
            "Customer data protection and privacy",
            "Legacy system integration challenges"
        ],
        opportunities: [
            "Automated fraud detection and prevention",
            "Credit risk assessment and scoring",
            "Algorithmic trading optimization",
            "Regulatory compliance automation",
            "Customer experience personalization"
        ],
        kpis: [
            "Fraud detection improvement: 50%",
            "Risk assessment accuracy: 40%",
            "Processing time reduction: 60%",
            "Compliance cost reduction: 35%",
            "Customer acquisition increase: 25%"
        ],
        technologies: [
            "Machine Learning Algorithms",
            "Anomaly Detection",
            "Natural Language Processing",
            "Real-time Analytics",
            "Blockchain Integration",
            "Robotic Process Automation"
        ]
    },
    logistics: {
        title: "Logistics",
        overview: "Streamline supply chain operations with AI-powered route optimization, demand forecasting, inventory management, and warehouse automation solutions that reduce costs and improve delivery performance.",
        challenges: [
            "Complex multi-modal transportation networks",
            "Dynamic demand and supply fluctuations",
            "Inventory optimization across multiple locations",
            "Last-mile delivery efficiency",
            "Global supply chain disruptions"
        ],
        opportunities: [
            "Route and delivery optimization",
            "Demand forecasting and planning",
            "Warehouse automation and robotics",
            "Supply chain visibility and tracking",
            "Sustainable logistics solutions"
        ],
        kpis: [
            "Delivery time reduction: 20%",
            "Transportation cost savings: 15%",
            "Inventory optimization: 25%",
            "Customer satisfaction: 30%",
            "Carbon emission reduction: 35%"
        ],
        technologies: [
            "Route Optimization Algorithms",
            "Demand Forecasting Models",
            "Computer Vision",
            "IoT Sensors",
            "Robotic Process Automation",
            "GPS and Tracking Systems"
        ]
    }
};

const sectorROI = {
    defense: 40,
    healthcare: 30,
    renewable: 25,
    finance: 25,
    logistics: 20
};

// DOM elements
let applicationsGrid, industryDetails, calculatorResults, contactForm, mobileNav;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    applicationsGrid = document.getElementById('applicationsGrid');
    industryDetails = document.getElementById('industryDetails');
    calculatorResults = document.getElementById('calculatorResults');
    contactForm = document.getElementById('contactForm');
    mobileNav = document.getElementById('mobileNav');
    
    // Initialize sections
    renderApplications('all');
    setupEventListeners();
    setupSmoothScrolling();
    setupIntersectionObserver();
});

// Mobile navigation functions
function toggleMobileMenu() {
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
}

function closeMobileMenu() {
    if (mobileNav) {
        mobileNav.classList.remove('active');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Industry selector
    const industrySelect = document.getElementById('industrySelect');
    if (industrySelect) {
        industrySelect.addEventListener('change', showIndustryDetails);
    }
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // Tab button event listeners
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sector = this.textContent.trim();
            const sectorKey = sector === 'All Sectors' ? 'all' : getSectorKeyFromName(sector);
            showSector(sectorKey, this);
        });
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        });
    });
}

// Applications portfolio functions
function showSector(sector, clickedButton) {
    // Update active tab
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
    
    // Render applications for selected sector
    renderApplications(sector);
}

function getSectorKeyFromName(sectorName) {
    const mapping = {
        'Defense': 'defense',
        'Healthcare': 'healthcare',
        'Renewable Energy': 'renewable',
        'Finance': 'finance',
        'Logistics': 'logistics'
    };
    return mapping[sectorName] || sectorName.toLowerCase();
}

function renderApplications(sector) {
    if (!applicationsGrid) return;
    
    const filteredApps = sector === 'all' 
        ? aiApplications 
        : aiApplications.filter(app => getSectorKey(app.sector) === sector);
    
    applicationsGrid.innerHTML = filteredApps.map(app => `
        <div class="application-card fade-in">
            <div class="application-header">
                <h4>${app.application}</h4>
                <span class="sector-tag">${app.sector}</span>
            </div>
            <p>${app.benefits}</p>
            <div class="application-metrics">
                <div class="metric">
                    <span class="metric-label">ROI</span>
                    <span class="metric-value">${app.roi}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Complexity</span>
                    <span class="metric-value">${app.complexity}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function getSectorKey(sectorName) {
    const mapping = {
        'Defense/Military': 'defense',
        'Healthcare': 'healthcare',
        'Renewable Energy': 'renewable',
        'Finance': 'finance',
        'Logistics': 'logistics'
    };
    return mapping[sectorName] || sectorName.toLowerCase();
}

// Industry insights functions
function showIndustryDetails() {
    const select = document.getElementById('industrySelect');
    if (!select) return;
    
    const selectedIndustry = select.value;
    
    if (!selectedIndustry || !industryData[selectedIndustry]) {
        if (industryDetails) {
            industryDetails.innerHTML = '<p>Select an industry above to view detailed insights, challenges, and opportunities.</p>';
        }
        return;
    }
    
    const industry = industryData[selectedIndustry];
    
    if (industryDetails) {
        industryDetails.innerHTML = `
            <div class="industry-content fade-in">
                <h3>${industry.title}</h3>
                <p>${industry.overview}</p>
                
                <div class="industry-grid">
                    <div class="industry-section">
                        <h4>Key Challenges</h4>
                        <ul>
                            ${industry.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="industry-section">
                        <h4>Opportunities</h4>
                        <ul>
                            ${industry.opportunities.map(opportunity => `<li>${opportunity}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="industry-section">
                        <h4>Success Metrics</h4>
                        <ul>
                            ${industry.kpis.map(kpi => `<li>${kpi}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="industry-section">
                        <h4>Technology Stack</h4>
                        <ul>
                            ${industry.technologies.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}

// ROI Calculator functions
function calculateROI() {
    const sectorSelect = document.getElementById('calcSector');
    const investmentInput = document.getElementById('calcInvestment');
    const complexitySelect = document.getElementById('calcComplexity');
    const timelineInput = document.getElementById('calcTimeline');
    
    if (!sectorSelect || !investmentInput || !complexitySelect || !timelineInput) {
        showCalculatorError('Calculator form elements not found.');
        return;
    }
    
    const sector = sectorSelect.value;
    const investment = parseFloat(investmentInput.value);
    const complexity = complexitySelect.value;
    const timeline = parseInt(timelineInput.value);
    
    // Validate inputs
    if (!sector) {
        showCalculatorError('Please select an industry sector.');
        return;
    }
    
    if (!investment || isNaN(investment)) {
        showCalculatorError('Please enter a valid investment amount.');
        return;
    }
    
    if (!complexity) {
        showCalculatorError('Please select project complexity.');
        return;
    }
    
    if (!timeline || isNaN(timeline)) {
        showCalculatorError('Please enter a valid timeline.');
        return;
    }
    
    if (investment < 1000) {
        showCalculatorError('Investment amount must be at least $1,000.');
        return;
    }
    
    if (timeline < 1 || timeline > 24) {
        showCalculatorError('Timeline must be between 1 and 24 months.');
        return;
    }
    
    // Calculate ROI based on sector and complexity
    const baseROI = sectorROI[sector] || 20;
    const complexityMultiplier = getComplexityMultiplier(complexity);
    const timelineMultiplier = getTimelineMultiplier(timeline);
    
    const effectiveROI = baseROI * complexityMultiplier * timelineMultiplier;
    const annualReturn = investment * (effectiveROI / 100);
    const totalReturn = annualReturn * 3; // 3-year projection
    const paybackPeriod = Math.ceil(investment / (annualReturn / 12));
    
    displayROIResults({
        investment,
        effectiveROI,
        annualReturn,
        totalReturn,
        paybackPeriod,
        timeline
    });
}

function getComplexityMultiplier(complexity) {
    const multipliers = {
        'low': 0.8,
        'medium': 1.0,
        'high': 1.3
    };
    return multipliers[complexity] || 1.0;
}

function getTimelineMultiplier(timeline) {
    if (timeline <= 3) return 0.7;
    if (timeline <= 6) return 1.0;
    if (timeline <= 12) return 1.2;
    return 1.4;
}

function displayROIResults(results) {
    if (!calculatorResults) return;
    
    calculatorResults.innerHTML = `
        <div class="fade-in">
            <h3>Projected Results</h3>
            <div class="result-item">
                <span class="result-label">Initial Investment:</span>
                <span class="result-value">$${results.investment.toLocaleString()}</span>
            </div>
            <div class="result-item">
                <span class="result-label">Projected ROI:</span>
                <span class="result-value">${results.effectiveROI.toFixed(1)}%</span>
            </div>
            <div class="result-item">
                <span class="result-label">Annual Return:</span>
                <span class="result-value">$${results.annualReturn.toLocaleString()}</span>
            </div>
            <div class="result-item">
                <span class="result-label">3-Year Total Return:</span>
                <span class="result-value">$${results.totalReturn.toLocaleString()}</span>
            </div>
            <div class="result-item">
                <span class="result-label">Payback Period:</span>
                <span class="result-value">${results.paybackPeriod} months</span>
            </div>
            <div class="result-item">
                <span class="result-label">Net Profit (3 years):</span>
                <span class="result-value">$${(results.totalReturn - results.investment).toLocaleString()}</span>
            </div>
        </div>
    `;
}

function showCalculatorError(message) {
    if (!calculatorResults) return;
    
    calculatorResults.innerHTML = `
        <div class="fade-in">
            <h3>Calculation Error</h3>
            <p style="color: var(--color-error); text-align: center; margin: var(--space-16) 0;">${message}</p>
        </div>
    `;
}

// Contact form functions
function handleContactSubmit(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const companyInput = document.getElementById('contactCompany');
    const sectorInput = document.getElementById('contactSector');
    const messageInput = document.getElementById('contactMessage');
    
    if (!nameInput || !emailInput) {
        showContactMessage('Form elements not found.', 'error');
        return;
    }
    
    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        company: companyInput ? companyInput.value.trim() : '',
        sector: sectorInput ? sectorInput.value : '',
        message: messageInput ? messageInput.value.trim() : ''
    };
    
    if (!formData.name || !formData.email) {
        showContactMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(formData.email)) {
        showContactMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    showContactMessage('Thank you for your interest! We will contact you within 24 hours to schedule your consultation.', 'success');
    contactForm.reset();
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showContactMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.contact-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `contact-message status status--${type} fade-in`;
    messageDiv.textContent = message;
    messageDiv.style.marginTop = 'var(--space-16)';
    
    // Insert after form
    if (contactForm && contactForm.parentNode) {
        contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}