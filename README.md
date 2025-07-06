## Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/) (v0.145.0 recommended)
- Basic knowledge of HTML, CSS, and Markdown

### Local Development

1. Clone this repository
2. Navigate to the project directory
3. Run `hugo server -D` to start a local development server with draft content enabled
4. Visit `http://localhost:1313` in your browser

## Site Configuration

All main site configuration is managed through the `config.toml` file. Here are the key sections you can modify:

### Basic Settings

```toml
baseURL = "http://example.com/"  # Change to your domain
languageCode = "en-us"
title = "Sydney Speech Clinic"  # Change site title if needed
```

### Contact Information

```toml
[params.contact]
  contact_no = '02 8404 0715'  # Your phone number
  mail_id = "info@sydneyspeechclinic.com.au"  # Your email
  address = "1 Pottery Lane, Lane Cove, 2066"  # Your address
```

### Social Media Links

Configure your social media profiles in the `[params.social]` section:

```toml
[params.social]
  facebook_url = "https://www.facebook.com/sydneyspeechclinic"
  instagram_url = "https://www.instagram.com/sydneyspeechclinic"
  linkedin_url = "https://www.linkedin.com/company/sydneyspeechclinic"
  twitter_url = "https://www.twitter.com/sydneyspeechclinic"
```

### Navigation Menus

The site has two navigation menus: main menu and quick links. Modify them in the `[[menu.main]]` and `[[menu.quick_links]]` sections:

```toml
[[menu.main]]
  name = "Home"  # Menu item name
  url = "/"      # URL for the link
  weight = 1     # Order in the menu (lower numbers appear first)
```

## Content Management

### Homepage Content

The homepage content is defined in `content/_index.md`. This file contains frontmatter with sections for:

- Logo configuration
- Hamburger menu content
- Online therapy information
- Video clinic details
- Blog section settings
- Comprehensive care section
- Support clinic details
- Newsletter subscription form

Example:
```yaml
---
title: "Sydney Speech Clinic | Home"
date: 2025-04-09

logo: "/images/logo.svg"
logo_alt: "Sydney Speech Clinic Logo"

hamburger:
  title: "Comprehensive **Speech and Occupational Therapy** for All Ages"
  description: "At our allied health clinic, we are dedicated to improving..."
  
# Additional sections follow...
---
```

### Blog Posts

Add new blog posts by creating Markdown files in the `content/blog/` directory:

```yaml
---
title: "Building Vocabulary During Shared Book Reading"
date: 2025-04-01
author: "Sydney Speech Clinic"
description: "Research shows that reading with children from a young age..."
image: "/images/blog-detail-banner.webp"
tags: ["VocabularyBuilding", "SharedReading", "ChildDevelopment"]
related:
  - blog/post3.md
  - blog/post4.md
---

Your blog content goes here...
```

### Team Members

Team members are organized by category in the `content/team/` directory:
- `speech-therapists/`
- `occupational-therapists/`
- `administrative-staff/`

Each team member has their own Markdown file with specific frontmatter:

```yaml
---
title: "John Smith"
role: "Speech Pathologist"
category: "speech-therapists"
image: "/images/speech-thera-8.webp"
sections:
  - title: "Experience"
    content: "3 years of specialized experience in pediatric speech pathology"
  - title: "Expertise"
    items:
      - "Expert in treating childhood apraxia of speech"
      - "Specialized in voice therapy for professional voice users"
---
```

### Group Therapies

Group therapy information is stored in the `content/group-therapy/` directory, organized by therapy type. The main index file contains:

```yaml
---
title: "Group Therapy Programs"
main_heading: "Empowering Children Through Collaborative Learning"
main_description: "Join our interactive group sessions designed to enhance skills..."
features_heading: "Key Features"
features_subheading: "Areas of focus in this program will include"
---
```

## Data Files

The site uses YAML data files to manage frequently updated content without changing templates.

### FAQs (`data/faqs.yml`)

The FAQs are organized by therapy group:

```yaml
chefs_group:
  - question: "What is the C.H.E.F.S Group?"
    answer: "A program for kids aged 7-11 to build social skills through cooking activities."
  - question: "Who can join the C.H.E.F.S Group?"
    answer: "Children aged 7-11 interested in social development."

communication_workshop:
  - question: "What is the Communication Workshop?"
    answer: "A program for kids aged 10-12 to improve verbal and non-verbal communication."
  # More questions...
```

To modify FAQs:
1. Open `data/faqs.yml`
2. Add, edit, or remove questions under the appropriate therapy group
3. Each FAQ needs both a `question` and `answer` field

### Testimonials (`data/testimonials.yml`)

Patient testimonials are managed in a structured format:

```yaml
title: "What Our Patients Say"
subtitle: "Discover what our happy patients have to say about their experiences at Allied Health Clinic"
reviews:
  - image: "/images/tra-1.webp"
    name: "Sarah Thompson"
    location: "Sydney, NSW"
    text: "The team at Sydney Clinic transformed my child's confidence with their speech therapy sessions."
  # More testimonials...
```

To update testimonials:
1. Open `data/testimonials.yml`
2. Edit the title/subtitle or add/modify individual reviews
3. Each review needs `image`, `name`, `location`, and `text` fields
4. Place testimonial images in the `static/images/` directory

## Customization

### Theme Customization

- CSS styles are located in the `static/css/` directory
- JavaScript files are in the `static/js/` directory
- Images should be placed in the `static/images/` directory

### Template Modifications

- Main page templates are in the `layouts/` directory
- Reusable components are in `layouts/partials/`
- Content type templates are in their respective directories (e.g., `layouts/blog/`)
