const sequelize = require("../config/db");
const Article = require("../models/articleModel");

const seedArticles = async () => {
  try {
    await sequelize.sync({ force: true });

    const articles = [
      {
      title: "The Edelman Trust Barometer 2025: A Deep Dive",
      author: "Richard Edelman",
      content:
      "The 2025 Edelman Trust Barometer reveals a sharp global decline in trust across institutions. This article explores the key insights, data trends, and what it means for brands and governments moving forward...",
      views: 1340,
      shares: 320,
      summary: null,
      },
      {
      title: "How Edelman is Reinventing Public Relations in the Digital Age",
      author: "Jane Holloway",
      content:
      "As the largest independent PR firm, Edelman is leading the charge in integrating AI, digital storytelling, and influencer marketing. We examine the strategies that have set them apart from traditional PR agencies...",
      views: 950,
      shares: 200,
      summary: null,
      },
      {
      title: "Edelman’s Climate Dilemma: Clients, Criticism, and COP30",
      author: "Michael Deans",
      content:
      "With mounting pressure from environmental groups, Edelman's ties to fossil fuel companies have come under scrutiny. This article unpacks the ethical considerations and the firm's future in climate advocacy...",
      views: 780,
      shares: 180,
      summary: null,
      },
      {
      title: "Behind the Scenes at Edelman: Culture, Clients, and Crisis Comms",
      author: "Anna Lee",
      content:
      "What’s it like to work at Edelman? From global campaigns to managing Fortune 500 crises, this piece gives an insider view of the firm's internal culture and client relationships...",
      views: 1100,
      shares: 250,
      summary: null,
      },
      {
      title: "Building Trust in the Age of AI: Edelman’s Strategic Playbook",
      author: "Daniel Moore",
      content:
      "In an era where misinformation spreads rapidly, Edelman is helping brands navigate trust and authenticity. This article covers their approach to AI governance, digital ethics, and brand accountability...",
      views: 890,
      shares: 195,
      summary: null,
      },
      {
      title: "From Family Firm to Global Powerhouse: The Edelman Legacy",
      author: "Sarah Kim",
      content:
      "Founded in 1952, Edelman remains family-owned and operated. We trace its journey from a small Chicago office to a global force shaping public perception for top brands worldwide...",
      views: 720,
      shares: 170,
      summary: null,
      },
      {
      title: "How Edelman Uses Data to Drive Campaign Success",
      author: "James Lin",
      content:
      "Data and analytics are at the heart of Edelman’s modern PR strategies. Learn how they combine data science with storytelling to deliver measurable impact...",
      views: 610,
      shares: 130,
      summary: null,
      },
      {
      title: "Meet the Minds Behind Edelman's Global Strategy",
      author: "Olivia Nash",
      content:
      "This profile spotlights the senior leadership at Edelman, highlighting their backgrounds, specialties, and the vision guiding the firm into the future...",
      views: 990,
      shares: 215,
      summary: null,
      },
      {
      title: "Edelman's Role in Navigating Brand Crises",
      author: "Thomas Reeves",
      content:
      "When a brand hits a PR crisis, Edelman steps in with structured response frameworks and experienced consultants. We examine recent high-profile case studies...",
      views: 820,
      shares: 185,
      summary: null,
      },
      {
      title: "The Evolution of Public Relations: Edelman's Perspective",
      author: "Carla Rodriguez",
      content:
      "Over seven decades, Edelman has witnessed and influenced major shifts in PR. This article reflects on those changes and where the industry is headed...",
      views: 875,
      shares: 210,
      summary: null,
      },
      {
      title: "Edelman's AI Lab: Ethics and Innovation in Comms",
      author: "Victor Shah",
      content:
      "Edelman’s AI Lab is exploring how artificial intelligence can be used responsibly in communications. Discover the pilot projects and policy principles in place...",
      views: 745,
      shares: 160,
      summary: null,
      },
      {
      title: "The Rise of Purpose-Driven Branding with Edelman",
      author: "Natalie Green",
      content:
      "Purpose is more than a buzzword at Edelman — it’s core to their client campaigns. Explore how brands are aligning with social causes authentically...",
      views: 680,
      shares: 145,
      summary: null,
      },
      {
      title: "Edelman and the Changing Landscape of Influencer Marketing",
      author: "Leo Brooks",
      content:
      "Edelman’s approach to influencer marketing is grounded in credibility and engagement. Here's how they’re helping brands build long-term trust via creators...",
      views: 930,
      shares: 230,
      summary: null,
      },
      {
      title: "Local Voices, Global Impact: Edelman’s Regional Offices",
      author: "Priya Desai",
      content:
      "From São Paulo to Singapore, Edelman’s regional teams bring local insight to global campaigns. We highlight a few recent success stories...",
      views: 560,
      shares: 120,
      summary: null,
      },
      {
      title: "How Edelman Trains the Next Generation of Communicators",
      author: "Liam Carter",
      content:
      "Edelman’s internship and leadership programs are building future PR leaders. Learn about their immersive training methods and mentorship culture...",
      views: 720,
      shares: 150,
      summary: null,
      },
      {
      title: "The Digital PR Playbook for 2025",
      author: "Alex Johnson",
      content:
      "This article explores how digital PR strategies are evolving, with a focus on AI and data-driven decision-making processes.",
      views: 1450,
      shares: 310,
      summary: null,
      },
      {
      title: "Revolutionizing Corporate Ethics with PR",
      author: "Emily Carter",
      content:
      "Discover how public relations teams are playing a pivotal role in redefining corporate ethics and transparency across industries.",
      views: 1320,
      shares: 280,
      summary: null,
      },
      {
      title: "Top 10 PR Strategies for Small Businesses",
      author: "Michael Brown",
      content:
      "Learn the top 10 actionable PR strategies tailored for small businesses to build trust and grow their audience.",
      views: 980,
      shares: 220,
      summary: null,
      },
      {
      title: "AI-Powered Storytelling in PR Campaigns",
      author: "Sophia Lee",
      content:
      "Artificial intelligence is changing the way PR campaigns are created. Explore how AI is driving storytelling innovation.",
      views: 1560,
      shares: 330,
      summary: null,
      },
      {
      title: "Building Public Trust Post-Pandemic",
      author: "James Miller",
      content:
      "This article examines how brands are rebuilding public trust and reestablishing credibility in a post-pandemic world.",
      views: 1200,
      shares: 290,
      summary: null,
      },
      {
      title: "The Rise of Employee-Driven PR",
      author: "Olivia Green",
      content:
      "Employee advocacy is becoming a cornerstone of modern PR strategies. Learn how employees are shaping brand narratives.",
      views: 950,
      shares: 210,
      summary: null,
      },
      {
      title: "How PR Amplifies Social Justice Movements",
      author: "Liam Carter",
      content:
      "This article discusses the role of public relations in amplifying social justice causes and driving meaningful change.",
      views: 1120,
      shares: 305,
      summary: null,
      },
      {
      title: "The Future of Virtual Reality in PR",
      author: "Emma White",
      content:
      "Virtual reality is transforming the way PR campaigns engage audiences. Explore its potential in experiential marketing.",
      views: 1340,
      shares: 320,
      summary: null,
      },
      {
      title: "Data-Driven Insights for PR Success",
      author: "Daniel Moore",
      content:
      "Data analytics is revolutionizing PR strategies. Discover how brands are using data to make informed decisions.",
      views: 1430,
      shares: 300,
      summary: null,
      },
      {
      title: "How to Manage PR Crises in a Digital World",
      author: "Ava Walker",
      content:
      "In the digital age, PR crises can escalate quickly. Learn effective strategies to manage and mitigate public fallout.",
      views: 1170,
      shares: 290,
      summary: null,
      },
      {
      title: "The Role of Transparency in Building Brand Loyalty",
      author: "Ethan Hill",
      content:
      "Transparency is critical to building long-term brand loyalty. Explore how brands are embracing open communication.",
      views: 1280,
      shares: 340,
      summary: null,
      },
      {
      title: "The Evolution of Sustainability in PR",
      author: "Sophia King",
      content:
      "This article explores how sustainability has become a core focus for PR campaigns, driving meaningful consumer engagement.",
      views: 1390,
      shares: 320,
      summary: null,
      },
      {
      title: "How Podcasts Are Changing the PR Landscape",
      author: "Jack Morgan",
      content:
      "Podcasts are becoming an essential part of PR strategies. Discover how brands are using audio content to connect with audiences.",
      views: 1250,
      shares: 310,
      summary: null,
      },
      {
      title: "The Importance of Emotional Connections in PR",
      author: "Amelia Clark",
      content:
      "Emotional storytelling is at the heart of successful PR campaigns. Learn how to create narratives that resonate deeply.",
      views: 1020,
      shares: 260,
      summary: null,
      },
      {
      title: "How PR Is Empowering Nonprofits in 2025",
      author: "William Scott",
      content:
      "Nonprofits are leveraging PR to amplify their mission and reach new audiences. Explore innovative strategies for 2025.",
      views: 1130,
      shares: 280,
      summary: null,
      },
      {
      title: "The Role of AI in Media Relations",
      author: "Mia Torres",
      content:
      "AI tools are transforming media relations by automating tasks and providing deep insights. Discover key innovations.",
      views: 1360,
      shares: 350,
      summary: null,
      },
      {
      title: "Building Trust Through Purpose-Driven PR",
      author: "Henry Bennett",
      content:
      "Purpose-driven PR campaigns are becoming a hallmark of successful brands. Learn how to align with social causes authentically.",
      views: 1220,
      shares: 290,
      summary: null,
      },
      {
      title: "How to Create PR Campaigns for Gen Z",
      author: "Zoe Adams",
      content:
      "Gen Z is reshaping the PR landscape. Discover how to create campaigns that resonate with this influential generation.",
      views: 940,
      shares: 240,
      summary: null,
      },
      {
      title: "The Growing Impact of Influencer Collaborations",
      author: "Lucas Reed",
      content:
      "Influencer collaborations are becoming a cornerstone of PR strategies. Learn how to build meaningful partnerships.",
      views: 1100,
      shares: 290,
      summary: null,
      },
      {
      title: "How to Navigate PR Challenges in Emerging Markets",
      author: "Isabella Green",
      content:
      "Emerging markets present unique PR challenges. This article explores strategies for building trust and engagement.",
      views: 890,
      shares: 220,
      summary: null,
      },
      {
      title: "The Role of Social Media in Modern PR",
      author: "Ethan Price",
      content:
      "Social media is redefining how PR campaigns are executed. Learn how to leverage platforms for maximum impact.",
      views: 1040,
      shares: 260,
      summary: null,
      },
      {
      title: "How to Use PR to Drive Community Engagement",
      author: "Liam Foster",
      content:
      "Community engagement is at the heart of modern PR. Discover strategies to connect with audiences on a deeper level.",
      views: 970,
      shares: 270,
      summary: null,
      },
      {
      title: "The Future of PR in a Digital-First World",
      author: "Emma Collins",
      content:
      "Digital transformation is reshaping PR. Explore how brands are adapting to a digital-first approach in their campaigns.",
      views: 1210,
      shares: 320,
      summary: null,
      },
      {
      title: "How to Create Memorable PR Campaigns",
      author: "Ava Sanders",
      content:
      "Memorable PR campaigns leave a lasting impression. Learn how to craft stories that captivate audiences.",
      views: 1020,
      shares: 250,
      summary: null,
      },
      {
      title: "How PR Is Shaping Corporate Culture",
      author: "Oliver Wood",
      content:
      "Corporate culture is becoming a focus of PR strategies. Discover how brands are using PR to shape internal and external perceptions.",
      views: 1280,
      shares: 340,
      summary: null,
      },
      {
      title: "The Rise of Personal Branding in PR",
      author: "Noah Wright",
      content:
      "Personal branding is taking center stage in PR. Learn how individuals are using PR strategies to build their personal brands.",
      views: 1190,
      shares: 300,
      summary: null,
      },
      {
      title: "How Interactive Content Is Transforming PR",
      author: "Sophia Bennett",
      content:
      "Interactive content is revolutionizing PR strategies. Discover how to engage audiences through interactive storytelling.",
      views: 1100,
      shares: 280,
      summary: null,
      },
      {
      title: "The Power of Collaboration in PR Campaigns",
      author: "Daniel Cooper",
      content:
      "Collaboration is key to PR success. This article explores how brands are partnering with stakeholders to drive impact.",
      views: 970,
      shares: 240,
      summary: null,
      },
      {
      title: "How PR Is Tackling Misinformation",
      author: "Grace Allen",
      content:
      "Misinformation is a growing challenge. Learn how PR campaigns are addressing this issue and building trust.",
      views: 1230,
      shares: 350,
      summary: null,
      },
      {
      title: "The Future of AI in PR Campaigns",
      author: "Sophia Bennett",
      content:
      "Artificial intelligence is revolutionizing PR campaigns. Explore how AI tools are creating unprecedented opportunities for personalization and efficiency.",
      views: 1320,
      shares: 310,
      summary: null,
      },
      {
      title: "Navigating PR Challenges in a Global Market",
      author: "Ethan Price",
      content:
      "As markets become increasingly globalized, PR professionnels face new challenges. This article explores strategies for navigating these complexities.",
      views: 880,
      shares: 190,
      summary: null,
      },
      {
      title: "The Importance of Ethical Storytelling in PR",
      author: "Amelia Clark",
      content:
      "Ethical storytelling is becoming a cornerstone of PR strategies. Learn how brands are using transparency to build trust and authenticity.",
      views: 1050,
      shares: 260,
      summary: null,
      },
      {
      title: "How to Build a Resilient Brand in the Digital Age",
      author: "Henry Bennett",
      content:
      "Building brand resilience is crucial in the digital age. Discover key strategies for maintaining credibility and trust in a fast-paced world.",
      views: 1040,
      shares: 250,
      summary: null,
      },
      {
      title: "Revolutionizing Crisis Management with Data",
      author: "Olivia Green",
      content:
      "Data-driven insights are transforming crisis management strategies. This article explores how brands are leveraging data to minimize risks.",
      views: 1230,
      shares: 350,
      summary: null,
      },
      {
      title: "How Small Businesses Are Leveraging PR for Growth",
      author: "Zoe Adams",
      content:
      "PR is no longer just for big brands. Learn how small businesses are using innovative PR strategies to reach new audiences and achieve growth.",
      views: 790,
      shares: 200,
      summary: null,
      },
      {
      title: "The Power of Employee Advocacy in PR",
      author: "Emma White",
      content:
      "Employee advocacy is becoming a powerful tool for brands. Explore how empowering employees can amplify a company's PR efforts.",
      views: 920,
      shares: 240,
      summary: null,
      },
      {
      title: "The Future of Sustainability in PR",
      author: "Michael Brown",
      content:
      "Sustainability is no longer optional for brands. Learn how PR campaigns are incorporating sustainability to align with consumer values.",
      views: 1120,
      shares: 295,
      summary: null,
      },
      {
      title: "How Podcasts Are Transforming Brand Storytelling",
      author: "Jack Morgan",
      content:
      "Podcasts have become a key medium for storytelling in PR. Discover how brands are using podcasts to engage with niche audiences effectively.",
      views: 1010,
      shares: 270,
      summary: null,
      },
      {
      title: "The Rise of Interactive Content in PR",
      author: "Sophia Lee",
      content:
      "Interactive content is engaging audiences like never before. Explore how PR campaigns are leveraging these tools for maximum impact.",
      views: 940,
      shares: 230,
      summary: null,
      },
      {
      title: "How Purpose-Driven PR is Shaping the Future",
      author: "Daniel Moore",
      content:
      "Purpose-driven PR campaigns are not just a trend. Learn how brands are aligning with social causes to create meaningful connections.",
      views: 980,
      shares: 240,
      summary: null,
      },
      {
      title: "The Evolving Role of Social Media in PR",
      author: "James Miller",
      content:
      "Social media platforms are changing the PR landscape. Discover how brands are adapting their strategies to stay relevant and effective.",
      views: 1250,
      shares: 320,
      summary: null,
      },
      {
      title: "The Importance of Diversity in PR Campaigns",
      author: "Isabella Green",
      content:
      "Diversity in PR is more important than ever. Learn how inclusive campaigns are driving stronger engagement and brand loyalty.",
      views: 1180,
      shares: 310,
      summary: null,
      },
      {
      title: "How to Build Trust in an Era of Misinformation",
      author: "Grace Allen",
      content:
      "Misinformation is a growing challenge. Learn effective strategies to build and maintain trust with your audience.",
      views: 1260,
      shares: 360,
      summary: null,
      },
      {
      title: "The Future of PR in the Metaverse",
      author: "Liam Carter",
      content:
      "As the metaverse grows, PR strategies are evolving. This article explores opportunities and challenges in this new frontier.",
      views: 940,
      shares: 270,
      summary: null,
      },
      {
      title: "How Nonprofits Are Leveraging PR for Growth",
      author: "Sophia King",
      content:
      "Nonprofits are using PR to amplify their missions. Discover best practices and inspiring examples.",
      views: 830,
      shares: 215,
      summary: null,
      },
      {
      title: "The Role of Authenticity in Modern Branding",
      author: "Ethan Price",
      content:
      "Authenticity is the key to modern branding. Learn how brands are staying true to their values while engaging audiences.",
      views: 1180,
      shares: 335,
      summary: null,
      },
      {
      title: "How AI Is Personalizing PR Campaigns",
      author: "Amelia Clark",
      content:
      "AI is enabling hyper-personalized PR campaigns. Explore tools and techniques that are making this possible.",
      views: 1020,
      shares: 280,
      summary: null,
      },
      {
      title: "The Evolution of Thought Leadership in PR",
      author: "Daniel Cooper",
      content:
      "Thought leadership is evolving in the digital age. Learn how to establish authority and credibility in your field.",
      views: 970,
      shares: 260,
      summary: null,
      },
      {
      title: "The Impact of Virtual Events on PR Strategies",
      author: "Olivia Nash",
      content:
      "Virtual events are reshaping how brands connect with audiences. Discover best practices for hosting impactful events.",
      views: 880,
      shares: 240,
      summary: null,
      },
      {
      title: "The Importance of Emotional Storytelling in PR",
      author: "Michael Deans",
      content:
      "Emotional storytelling is capturing hearts and minds. Learn how to craft narratives that resonate deeply with audiences.",
      views: 1130,
      shares: 310,
      summary: null,
      },
      {
      title: "How to Measure the ROI of PR Campaigns",
      author: "Anna Lee",
      content:
      "Measuring ROI is crucial for PR success. This article explores metrics and tools to evaluate campaign performance.",
      views: 950,
      shares: 270,
      summary: null,
      },
      {
      title: "How PR Is Supporting Corporate Social Responsibility",
      author: "Carla Rodriguez",
      content:
      "Corporate social responsibility is a focus for many brands. Learn how PR supports CSR initiatives effectively.",
      views: 870,
      shares: 230,
      summary: null,
      },
      {
      title: "The Growing Importance of Employee Advocacy",
      author: "Thomas Reeves",
      content:
      "Employee advocacy is driving brand success. Discover how to empower employees to become brand ambassadors.",
      views: 1190,
      shares: 350,
      summary: null,
      },
      {
      title: "The Rise of Interactive PR Campaigns",
      author: "Victor Shah",
      content:
      "Interactive campaigns are engaging audiences like never before. Learn how to create memorable experiences.",
      views: 760,
      shares: 200,
      summary: null,
      },
      {
      title: "How PR Is Addressing Climate Change",
      author: "Natalie Green",
      content:
      "Climate change is a pressing issue for brands. Discover how PR is helping companies communicate their sustainability efforts.",
      views: 1230,
      shares: 345,
      summary: null,
      },
      {
      title: "The Role of Podcasts in Modern PR",
      author: "Priya Desai",
      content:
      "Podcasts are becoming a powerful PR tool. Explore how brands are using them to connect with niche audiences.",
      views: 970,
      shares: 255,
      summary: null,
      },
      {
      title: "How to Build Strong Media Relationships",
      author: "James Lin",
      content:
      "Media relationships are crucial for PR success. Learn how to build and maintain strong connections with journalists.",
      views: 940,
      shares: 270,
      summary: null,
      },
      {
        title: "Leveraging AI Sentiment Analysis in PR Listening",
        author: "Rachel Park",
        content:
          "This article discusses leveraging ai sentiment analysis in pr listening and provides actionable insights for communications professionals.",
        views: 1560,
        shares: 255,
        summary: null,
      },
      {
        title: "The Role of Chatbots in Stakeholder Engagement",
        author: "David Kim",
        content:
          "This article discusses the role of chatbots in stakeholder engagement and provides actionable insights for communications professionals.",
        views: 1238,
        shares: 324,
        summary: null,
      },
      {
        title: "Greenwashing vs. Genuine Sustainability: PR’s Responsibility",
        author: "Laura Hughes",
        content:
          "This article discusses greenwashing vs. genuine sustainability: pr’s responsibility and provides actionable insights for communications professionals.",
        views: 1504,
        shares: 294,
        summary: null,
      },
      {
        title: "Using Data Visualization to Tell Compelling PR Stories",
        author: "Carlos Ramirez",
        content:
          "This article discusses using data visualization to tell compelling pr stories and provides actionable insights for communications professionals.",
        views: 1120,
        shares: 324,
        summary: null,
      },
      {
        title: "Micro-Influencers: The Hidden Gems of PR",
        author: "Fiona Chen",
        content:
          "This article discusses micro-influencers: the hidden gems of pr and provides actionable insights for communications professionals.",
        views: 979,
        shares: 285,
        summary: null,
      },
      {
        title: "Real-Time Crisis Monitoring with Social Analytics",
        author: "Samuel Brooks",
        content:
          "This article discusses real-time crisis monitoring with social analytics and provides actionable insights for communications professionals.",
        views: 1136,
        shares: 312,
        summary: null,
      },
      {
        title: "From PR to XR: Extended Reality Campaigns Explained",
        author: "Karen Lopez",
        content:
          "This article discusses from pr to xr: extended reality campaigns explained and provides actionable insights for communications professionals.",
        views: 999,
        shares: 242,
        summary: null,
      },
      {
        title: "Storytelling with Short-Form Video: A PR Guide",
        author: "Peter Singh",
        content:
          "This article discusses storytelling with short-form video: a pr guide and provides actionable insights for communications professionals.",
        views: 962,
        shares: 173,
        summary: null,
      },
      {
        title: "Building Thought Leadership on LinkedIn",
        author: "Linda Roberts",
        content:
          "This article discusses building thought leadership on linkedin and provides actionable insights for communications professionals.",
        views: 1507,
        shares: 249,
        summary: null,
      },
      {
        title: "Measuring Trust with Blockchain Technology",
        author: "Jason Lee",
        content:
          "This article discusses measuring trust with blockchain technology and provides actionable insights for communications professionals.",
        views: 1014,
        shares: 259,
        summary: null,
      },
      {
        title: "Community-Led PR: Harnessing User-Generated Content",
        author: "Monica Patel",
        content:
          "This article discusses community-led pr: harnessing user-generated content and provides actionable insights for communications professionals.",
        views: 1548,
        shares: 330,
        summary: null,
      },
      {
        title: "Diversity Metrics in Communications: Moving Beyond Talk",
        author: "Gregory Evans",
        content:
          "This article discusses diversity metrics in communications: moving beyond talk and provides actionable insights for communications professionals.",
        views: 1000,
        shares: 162,
        summary: null,
      },
      {
        title: "The Intersection of PR and Customer Experience",
        author: "Stephanie Clark",
        content:
          "This article discusses the intersection of pr and customer experience and provides actionable insights for communications professionals.",
        views: 1117,
        shares: 156,
        summary: null,
      },
      {
        title: "How Voice Search Is Changing PR Strategies",
        author: "Jordan Scott",
        content:
          "This article discusses how voice search is changing pr strategies and provides actionable insights for communications professionals.",
        views: 899,
        shares: 168,
        summary: null,
      },
      {
        title: "Gamification Techniques for PR Engagement",
        author: "Paula Nguyen",
        content:
          "This article discusses gamification techniques for pr engagement and provides actionable insights for communications professionals.",
        views: 1565,
        shares: 206,
        summary: null,
      },
      {
        title: "Cross-Channel Reputation Management in 2025",
        author: "Benjamin Turner",
        content:
          "This article discusses cross-channel reputation management in 2025 and provides actionable insights for communications professionals.",
        views: 1524,
        shares: 250,
        summary: null,
      },
      {
        title: "PR for Decentralized Autonomous Organizations (DAOs)",
        author: "Isabel Gomez",
        content:
          "This article discusses pr for decentralized autonomous organizations (daos) and provides actionable insights for communications professionals.",
        views: 989,
        shares: 188,
        summary: null,
      },
      {
        title: "The Science of Timing Press Releases",
        author: "Roger Hayes",
        content:
          "This article discusses the science of timing press releases and provides actionable insights for communications professionals.",
        views: 1012,
        shares: 311,
        summary: null,
      },
      {
        title: "Neuromarketing Insights for PR Professionals",
        author: "Chloe Martin",
        content:
          "This article discusses neuromarketing insights for pr professionals and provides actionable insights for communications professionals.",
        views: 935,
        shares: 276,
        summary: null,
      },
      {
        title: "Building Brand Memory Through Repetition",
        author: "Anthony Walker",
        content:
          "This article discusses building brand memory through repetition and provides actionable insights for communications professionals.",
        views: 1129,
        shares: 239,
        summary: null,
      },
      {
        title: "Geo-Targeted PR Campaigns: Localizing Global Messages",
        author: "Nina Johansson",
        content:
          "This article discusses geo-targeted pr campaigns: localizing global messages and provides actionable insights for communications professionals.",
        views: 1447,
        shares: 343,
        summary: null,
      },
      {
        title: "Harnessing Employee Podcasts for Internal PR",
        author: "Owen Davis",
        content:
          "This article discusses harnessing employee podcasts for internal pr and provides actionable insights for communications professionals.",
        views: 1012,
        shares: 150,
        summary: null,
      },
      {
        title: "Predictive Analytics: Anticipating PR Outcomes",
        author: "Victoria Bell",
        content:
          "This article discusses predictive analytics: anticipating pr outcomes and provides actionable insights for communications professionals.",
        views: 1007,
        shares: 231,
        summary: null,
      },
      {
        title: "Cybersecurity Communications After a Data Breach",
        author: "Harold Chen",
        content:
          "This article discusses cybersecurity communications after a data breach and provides actionable insights for communications professionals.",
        views: 1201,
        shares: 242,
        summary: null,
      },
      {
        title: "Using Interactive Infographics to Boost Media Pick‑Up",
        author: "Brenda Flores",
        content:
          "This article discusses using interactive infographics to boost media pick‑up and provides actionable insights for communications professionals.",
        views: 1248,
        shares: 162,
        summary: null,
      },
      {
        title: "The Ethics of Deepfakes in Corporate Communications",
        author: "Marcus Knight",
        content:
          "This article discusses the ethics of deepfakes in corporate communications and provides actionable insights for communications professionals.",
        views: 1345,
        shares: 312,
        summary: null,
      },
      {
        title: "Cross‑Border PR Compliance: GDPR and Beyond",
        author: "Elena Rossi",
        content:
          "This article discusses cross‑border pr compliance: gdpr and beyond and provides actionable insights for communications professionals.",
        views: 1247,
        shares: 165,
        summary: null,
      },
      {
        title: "SaaS Product Launch PR: From Beta to Buzz",
        author: "Arthur Grant",
        content:
          "This article discusses saas product launch pr: from beta to buzz and provides actionable insights for communications professionals.",
        views: 1130,
        shares: 292,
        summary: null,
      }
    ];

    await Article.bulkCreate(articles);
    console.log("Database has been seeded!");
  } catch (error) {
    console.error("Failed to seed the database:", error);
  } finally {
    process.exit();
  }
};

seedArticles();
