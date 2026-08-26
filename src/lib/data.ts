export const schoolInfo = {
    name: "Max Muller Public School",
    tagline: "Inspiring Excellence, Cultivating Character",
    established: 1982,
    location: "No. 158, 8th Main, BEML Layout, Basaveshwaranagar, Bengaluru – 560 079",
    shortLocation: "Basaveshwaranagar, Bengaluru",
    phone: "080 23233455 / 8951774344",
    phones: ["080 23233455", "8951774344"],
    whatsapp: "9731226002",
    whatsappUrl: "https://wa.me/919731226002",
    email: "mmpschool6@gmail.com",
    timings: "9:00 AM – 4:00 PM (Mon – Sat)",
    officeHours: "Office open on all working days 9:00 AM to 4:00 PM (Closed on Sundays & National Holidays)",
    affiliation: "Recognized by Govt. of Karnataka / Co-Educational Institution",
    grades: "Montessori to Grade X",
    stats: [
        { value: "1982", label: "Founded", sub: "40+ Years of Legacy" },
        { value: "PreK—10", label: "Grades", sub: "Montessori to Class X" },
        { value: "1:20", label: "Class Ratio", sub: "Individual Attention" },
        { value: "100%", label: "Board Pass", sub: "Consistent Distinction" }
    ]
};

export const navigation = [
    { name: 'Home', href: '/' },
    { 
        name: 'About Us', 
        href: '/about',
        children: [
            { name: 'Overview & Heritage', href: '/about' },
            { name: 'Vision & Mission', href: '/about#vision-mission' },
            { name: 'Leadership & Messages', href: '/leadership' },
        ]
    },
    { 
        name: 'Academics', 
        href: '/academics',
        children: [
            { name: 'Montessori & Kindergarten', href: '/academics#montessori' },
            { name: 'Primary (Grades 1—5)', href: '/academics#primary' },
            { name: 'Middle & High (Grades 6—10)', href: '/academics#secondary' },
        ]
    },
    { 
        name: 'Admissions', 
        href: '/admissions',
        children: [
            { name: 'Admissions 2025-26', href: '/admissions' },
            { name: 'Process & Documents', href: '/admissions#process' },
        ]
    },
    { name: 'Campus & Facilities', href: '/campus' },
    { name: 'Student Life', href: '/student-life' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Events', href: '/events' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
];

export const corePillars = [
    {
        title: "Academic Excellence",
        desc: "Delivering a comprehensive and dynamic curriculum that encourages curiosity, innovation, and analytical thinking.",
        icon: "GraduationCap"
    },
    {
        title: "Character Formation",
        desc: "Instilling timeless values such as honesty, respect, compassion, and perseverance to build responsible individuals.",
        icon: "HeartHandshake"
    },
    {
        title: "Inclusive Environment",
        desc: "Providing equal opportunities for every child, promoting an atmosphere of mutual respect, unity, and safety.",
        icon: "Users"
    },
    {
        title: "Creative & Critical Thinking",
        desc: "Encouraging students to think independently, express themselves with confidence, and solve real-world problems.",
        icon: "Lightbulb"
    },
    {
        title: "Community Engagement",
        desc: "Involving learners in social and environmental initiatives that develop deep empathy, civic pride, and leadership.",
        icon: "Globe"
    },
    {
        title: "Teacher Empowerment",
        desc: "Supporting our faculty through continuous professional development so they mentor students with mastery and care.",
        icon: "Sparkles"
    }
];

export const leadershipMessages = [
    {
        role: "Chairman",
        name: "Hemalatha J",
        image: "/images/msgs_chairman-300x300.jpg",
        quote: "Education is the most powerful tool for transformation—both for individuals and for society at large. Since our founding in 1982, we have remained steadfast in our mission to provide holistic, value-based education that nurtures young minds and prepares them to face the challenges of a dynamic world.",
        paragraphs: [
            "Leadership is not just about guiding others—it is about inspiring them to find their purpose, unlocking their potential, and shaping a better future for all. At Max Muller Group of Institutions, our journey over the decades has been deeply rooted in these ideals.",
            "My leadership philosophy is grounded in empathy, vision, and integrity. I believe in creating an educational environment where students feel safe, inspired, and empowered to become confident learners and compassionate citizens.",
            "I am proud of our dedicated team of educators who work tirelessly to uphold the standards and values we cherish. Together, we ensure that every child entrusted to us not only excels in academics but also grows into a responsible and humane individual."
        ]
    }
];

export const academicsDetailed = [
    {
        id: "montessori",
        title: "Montessori & Kindergarten (Pre-K to UKG)",
        ageGroup: "Ages 2.5 — 5.5 Years",
        description: "A specially prepared sensorial environment designed to ignite early curiosity, independent motor skills, and foundational literacy and numeracy through hands-on activity.",
        highlights: [
            "Child-centric Montessori apparatus and sensorial learning materials",
            "Language immersion, phonics, storytelling, and early vocabulary building",
            "Practical life activities promoting fine motor coordination and self-reliance",
            "Play-based social interaction, creative arts, and joyful discovery",
            "Low student-to-teacher ratio ensuring warm, individualized care"
        ],
        badge: "Early Childhood"
    },
    {
        id: "primary",
        title: "Primary School (Grades 1 — 5)",
        ageGroup: "Ages 6 — 10 Years",
        description: "A structured, concept-driven curriculum bridging play with academic inquiry. Emphasizes conceptual clarity in Mathematics, Environmental Sciences, Languages, and Creative Arts.",
        highlights: [
            "Strong foundation in Mathematics, English, Kannada/Hindi, and General Science",
            "Activity-based learning with multimedia classrooms and scientific curiosity",
            "Co-curricular integration: Visual Arts, Vocal Music, Dance, and Physical Education",
            "Character building through moral science, teamwork, and structured library hours",
            "Continuous and comprehensive evaluation without exam stress"
        ],
        badge: "Foundational Years"
    },
    {
        id: "secondary",
        title: "Middle & High School (Grades 6 — 10)",
        ageGroup: "Ages 11 — 16 Years",
        description: "Rigorous academic preparation coupled with critical thinking, advanced science laboratories, computer programming, and holistic readiness for SSLC / State Board examinations.",
        highlights: [
            "Advanced coursework in Physics, Chemistry, Biology, Mathematics, and Social Sciences",
            "High-tech computer lab with 30+ PCs, coding modules, and internet research skills",
            "Comprehensive board examination readiness program with regular mentorship",
            "Leadership opportunities through Student Council, House Systems, and Inter-School Fests",
            "Sports specialization: Basketball, Cricket, Taekwondo, Volleyball, and Yoga"
        ],
        badge: "Graduation Track"
    }
];

export const facilitiesList = [
    {
        id: "classrooms",
        title: "Smart Classrooms",
        description: "Spacious, well-ventilated, and digitally equipped learning spaces designed to ensure maximum individual attention and collaborative group work.",
        image: "/images/square1.jpg",
        features: ["Ergonomic seating", "Digital interactive boards", "Student work display zones", "Natural lighting & ventilation"]
    },
    {
        id: "computer-lab",
        title: "High-Tech Computer Lab",
        description: "Over 30+ modern computer workstations with dedicated high-speed broadband internet, supervised by qualified technology educators.",
        image: "/images/square2.jpg",
        features: ["30+ Modern workstations", "Dedicated broadband connection", "Coding & digital literacy tools", "Monitored & safe internet access"]
    },
    {
        id: "library",
        title: "Resource Library (150+ Capacity)",
        description: "The intellectual heart of the school accommodating over 150 students simultaneously, housing thousands of fiction, non-fiction, reference volumes, and journals.",
        image: "/images/square3.jpg",
        features: ["150+ Student reading capacity", "Extensive fiction & non-fiction collection", "Academic journals & periodicals", "Quiet study & research zones"]
    },
    {
        id: "studios",
        title: "Specialist Creative Studios",
        description: "Dedicated spaces for Mathematics, Music, Dance, Theatre, and Visual Arts where students discover and nurture their unique creative talents.",
        image: "/images/square.jpg",
        features: ["Hands-on Mathematics activity lab", "Vocal & Instrumental Music room", "Classical & Contemporary Dance studio", "Visual arts & craft workshop"]
    },
    {
        id: "sports",
        title: "Sports & Fitness Arena",
        description: "Comprehensive indoor and outdoor athletic facilities fostering physical fitness, discipline, and sportsmanship across diverse disciplines.",
        image: "/images/slider1.jpg",
        features: ["Basketball & Volleyball courts", "Badminton & Gymnastics facilities", "Cricket & Football training", "Aerobics, Taekwondo & Yoga"]
    }
];

export const admissionProcess = [
    {
        step: "01",
        title: "Submit Online Enquiry / Collect Form",
        desc: "Fill out the online admission form or collect the registration kit directly from the school admissions desk."
    },
    {
        step: "02",
        title: "Submit Documents & Form",
        desc: "Drop the completed registration form with required certificates in the school admission drop-box (9:00 AM – 4:00 PM)."
    },
    {
        step: "03",
        title: "Student Interaction / Assessment",
        desc: "Shortlisted candidates and parents are invited for an informal interaction (Montessori) or baseline assessment (Grades 1-10)."
    },
    {
        step: "04",
        title: "Enrollment & Fee Confirmation",
        desc: "Upon selection, complete the admission formalities and secure your child's seat on a first-come, first-served basis."
    }
];

export const requiredDocuments = [
    "Original / Attested Copy of Child's Birth Certificate",
    "Transfer Certificate (TC) from previous recognized school (for Grade 2 upwards)",
    "Previous Academic Year's Progress Report / Marks Card",
    "4 Recent Passport-sized Color Photographs of the Student",
    "2 Passport-sized Photographs of each Parent / Guardian",
    "Copy of Child's Aadhar Card & Parent's Aadhar Card",
    "Proof of Residence (Electricity Bill / Passport / Rental Agreement / Voter ID)",
    "Caste / Category Certificate (if applicable for state records)"
];

export const faqList = [
    {
        category: "Admissions",
        question: "When do admissions open for the Academic Year 2025-26?",
        answer: "Admissions for the 2025-26 academic year are currently open for Montessori through Grade 10. Due to limited seat capacity to maintain healthy teacher-student ratios, admissions are processed on a first-come, first-served basis."
    },
    {
        category: "Admissions",
        question: "What is the age criteria for Montessori and Grade 1?",
        answer: "For Montessori 1 (Pre-KG), the child should be 2.5 to 3 years old by June 1st of the admission year. For Grade 1, the child should ideally be 5.5 to 6 years old as per state education norms."
    },
    {
        category: "Academics",
        question: "What is the curriculum and board affiliation?",
        answer: "Max Muller Public School follows a comprehensive state-recognized curriculum integrated with modern holistic pedagogical standards, preparing students thoroughly for Class 10 SSLC Board examinations with strong foundational mastery in STEM, Languages, and Humanities."
    },
    {
        category: "Campus",
        question: "What sports and co-curricular activities are available?",
        answer: "We offer professional training in Basketball, Volleyball, Badminton, Cricket, Football, Gymnastics, Taekwondo, and Yoga, alongside creative arts, music, dance, theater, and science clubs."
    },
    {
        category: "Campus",
        question: "What are the school timings and office hours?",
        answer: "The school administrative office operates from 9:00 AM to 4:00 PM, Monday through Saturday (closed on Sundays and National Holidays). Regular class timings are communicated during orientation."
    },
    {
        category: "Admissions",
        question: "How can parents visit the campus?",
        answer: "Parents can schedule a campus tour by submitting an online inquiry, calling 080 23233455 / 8951774344, or walking in to our Basaveshwaranagar campus between 9:00 AM and 3:30 PM on any working day."
    }
];

export const galleryCategories = ["All", "Campus", "Activities", "Events", "Academic Life"];
export const galleryImages = [
    { src: "/images/slider1.jpg", category: "Campus", alt: "Max Muller Public School Building & Campus", title: "Main Campus Facade" },
    { src: "/images/slider2.jpg", category: "Academic Life", alt: "Students in Interactive Classroom", title: "Collaborative Learning" },
    { src: "/images/1.jpg", category: "Activities", alt: "Student Extra-curricular Activities", title: "Creative Arts & Expression" },
    { src: "/images/2.jpg", category: "Campus", alt: "School Infrastructure & Grounds", title: "Outdoor Sports Arena" },
    { src: "/images/3.jpg", category: "Events", alt: "Annual School Celebrations", title: "Cultural Celebrations" },
    { src: "/images/4.jpg", category: "Campus", alt: "Modern Learning Facilities", title: "Resource Library & Labs" },
    { src: "/images/5.jpg", category: "Activities", alt: "Sports & Physical Education", title: "Martial Arts & Taekwondo" },
    { src: "/images/6.jpg", category: "Events", alt: "Investiture Ceremony & Awards", title: "Student Council Leadership" },
    { src: "/images/7.jpg", category: "Campus", alt: "Spacious Classrooms", title: "Smart Classroom Tech" },
    { src: "/images/8.jpg", category: "Activities", alt: "Inter-School Sports Champions", title: "Athletic Excellence" }
];

export const upcomingEvents = [
    {
        date: "APR 2025",
        day: "15",
        title: "Admissions Open Day & Campus Walkthrough",
        time: "10:00 AM — 1:00 PM",
        location: "Main Auditorium",
        category: "Admissions",
        description: "Interactive session for prospective parents with school academic leadership, followed by a guided tour of laboratories, library, and sports facilities."
    },
    {
        date: "MAY 2025",
        day: "02",
        title: "Montessori Parent Orientation Program",
        time: "9:30 AM — 11:30 AM",
        location: "Montessori Activity Hall",
        category: "Orientation",
        description: "Guiding parents on early childhood developmental milestones and smooth transition into Montessori schooling."
    },
    {
        date: "JUN 2025",
        day: "05",
        title: "Commencement of New Academic Session 2025-26",
        time: "8:30 AM",
        location: "All Grades",
        category: "Academic",
        description: "Welcome assembly and reopening of school for all students from Montessori to Class 10."
    }
];

export const testimonials = [
    {
        quote: "Enrolling our daughter in Max Muller Public School was one of the best decisions we made. The individual care given by teachers in the Montessori section has made her extraordinarily confident and expressive.",
        author: "Priya & Rajesh Venkatesh",
        relation: "Parents of Ananya (Grade 3)",
        stars: 5
    },
    {
        quote: "The balance between academic rigor and moral discipline is remarkable. My son has developed a strong interest in science and taekwondo thanks to the dedicated faculty and modern labs.",
        author: "K. R. Nagaraj",
        relation: "Parent of Varun (Grade 8)",
        stars: 5
    },
    {
        quote: "40+ years of trust truly shows. The administrative staff is supportive, the campus is safe, and the focus on Indian values with modern skills is exactly what we wanted for our child.",
        author: "Meenakshi Sundaram",
        relation: "Parent of Rohan (Grade 10)",
        stars: 5
    }
];
