// Datas For Question
const questions = [
  {
    question: "Which one is the first search engine in internet?",
    answers: [
      { text: "Google", correct: false, optionNumber: "A" },
      { text: "Archie", correct: true, optionNumber: "B" },
      { text: "Yahoo", correct: false, optionNumber: "C" },
      { text: "Altavista", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which one is the first web browser invented in 1990?",
    answers: [
      { text: "Internet Explorer", correct: false, optionNumber: "A" },
      { text: "Mosaic", correct: false, optionNumber: "B" },
      { text: "Mozilla", correct: false, optionNumber: "C" },
      { text: "Nexus", correct: true, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which of the following programming language is used to create programs like applets?",
    answers: [
      { text: "COBOL", correct: false, optionNumber: "A" },
      { text: "C Language", correct: false, optionNumber: "B" },
      { text: "Java", correct: true, optionNumber: "C" },
      { text: "Basic", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "First computer virus is known as",
    answers: [
      { text: "Rabbit", correct: false, optionNumber: "A" },
      { text: "Creeper Virus", correct: true, optionNumber: "B" },
      { text: "Elk Cloner", correct: false, optionNumber: "C" },
      { text: "SCA Virus", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which one programming language is exclusively used for artificial intelligence?",
    answers: [
      { text: "C", correct: false, optionNumber: "A" },
      { text: "JAVA", correct: false, optionNumber: "B" },
      { text: "J2EE", correct: false, optionNumber: "C" },
      { text: "Prolog", correct: true, optionNumber: "D" },
    ],
  },
  {
    question: "Firewall in computer is used for?",
    answers: [
      { text: "Security", correct: true, optionNumber: "A" },
      { text: "Data Transmission", correct: false, optionNumber: "B" },
      { text: "Authentication", correct: false, optionNumber: "C" },
      { text: "Monitoring", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is not an operating system?",
    answers: [
      { text: "DOS", correct: false, optionNumber: "A" },
      { text: "MAC", correct: false, optionNumber: "B" },
      { text: "C", correct: true, optionNumber: "C" },
      { text: "Linux", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is not a database management system?",
    answers: [
      { text: "MySQL", correct: false, optionNumber: "A" },
      { text: "Oracle", correct: false, optionNumber: "B" },
      { text: "Sybase", correct: false, optionNumber: "C" },
      { text: "COBOL", correct: true, optionNumber: "D" },
    ],
  },
  {
    question: "Number of layers in the OSI Model?",
    answers: [
      { text: "9", correct: false, optionNumber: "A" },
      { text: "7", correct: true, optionNumber: "B" },
      { text: "3", correct: false, optionNumber: "C" },
      { text: "11", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "1024 bit is equal to how many byte?",
    answers: [
      { text: "1 Byte", correct: false, optionNumber: "A" },
      { text: "128 Byte", correct: true, optionNumber: "B" },
      { text: "32 Byte", correct: false, optionNumber: "C" },
      { text: "64 Byte", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "MAC Operating System is developed by which company?",
    answers: [
      { text: "IBM", correct: false, optionNumber: "A" },
      { text: "Microsoft", correct: false, optionNumber: "B" },
      { text: "Apple", correct: true, optionNumber: "C" },
      { text: "Samsung", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Where is the headquarter of Microsoft office located?",
    answers: [
      { text: "Texas", correct: false, optionNumber: "A" },
      { text: "New York", correct: false, optionNumber: "B" },
      { text: "California", correct: false, optionNumber: "C" },
      { text: "Washington", correct: true, optionNumber: "D" },
    ],
  },
  {
    question: ".gif is an extension of?",
    answers: [
      { text: "Image File", correct: true, optionNumber: "A" },
      { text: "Video File", correct: false, optionNumber: "B" },
      { text: "Audio File", correct: false, optionNumber: "C" },
      { text: "Word File", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which one is the first fully supported 64-but operating system?",
    answers: [
      { text: "Windows Vista", correct: false, optionNumber: "A" },
      { text: "MAC", correct: false, optionNumber: "B" },
      { text: "Linux", correct: true, optionNumber: "C" },
      { text: "Windows XP", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "<script>_</script> tag can be placed within?",
    answers: [
      { text: "Header", correct: false, optionNumber: "A" },
      { text: "Body", correct: false, optionNumber: "B" },
      { text: "A and B", correct: true, optionNumber: "C" },
      { text: "None", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "How to stop a docker container immediately?",
    answers: [
      { text: "$ docker terminate", correct: false, optionNumber: "A" },
      { text: "$ docker kill", correct: true, optionNumber: "B" },
      { text: "$ docker stop", correct: false, optionNumber: "C" },
      { text: "$ docker close", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Where are the online repositories configured on a Debian/Ubuntu Machine?",
    answers: [
      { text: "/etc/apt/sources.list", correct: true, optionNumber: "A" },
      { text: "/etc/apt/yum.repos", correct: false, optionNumber: "B" },
      { text: "/etc/fstab", correct: false, optionNumber: "C" },
      { text: "/etc/apt/repos", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which command can be used to know the terminal type in linux? ",
    answers: [
      { text: "tty", correct: true, optionNumber: "A" },
      { text: "pts", correct: false, optionNumber: "B" },
      { text: "who", correct: false, optionNumber: "C" },
      { text: "terminal", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "What are the most common Linux boot managers?",
    answers: [
      { text: "Bootmanager/Bootflag", correct: false, optionNumber: "A" },
      { text: "Bootmand/MBR", correct: false, optionNumber: "B" },
      { text: "LILO/GRUB", correct: true, optionNumber: "C" },
      { text: "Bootd/init.d", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which of the following is used to get information sent via get method in PHP?",
    answers: [
      { text: "$_GET", correct: true, optionNumber: "A" },
      { text: "$GET", correct: false, optionNumber: "B" },
      { text: "$GETREQUEST", correct: false, optionNumber: "C" },
      { text: "None", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is NOT a type of computer virus?",
    answers: [
      { text: "worm", correct: false, optionNumber: "A" },
      { text: "firewall", correct: true, optionNumber: "B" },
      { text: "Trojan horse", correct: false, optionNumber: "C" },
      { text: "Adware", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which of the following is a programming language used for developing web-based applications?",
    answers: [
      { text: "C++", correct: false, optionNumber: "A" },
      { text: "Java", correct: true, optionNumber: "B" },
      { text: "Python", correct: false, optionNumber: "C" },
      { text: "Ruby", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is NOT an example of cloud computing?",
    answers: [
      { text: "Dropbox", correct: false, optionNumber: "A" },
      { text: "Miscrosoft Excel", correct: true, optionNumber: "B" },
      { text: "Google Drive", correct: false, optionNumber: "C" },
      { text: "Amazon Web Services", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which of the following storage devices has the fastest access time?",
    answers: [
      { text: "Hard disk drive", correct: false, optionNumber: "A" },
      { text: "Solid-state drive", correct: true, optionNumber: "B" },
      { text: "Compact disc", correct: false, optionNumber: "C" },
      { text: "USB flash drive", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is an example of a network topology?",
    answers: [
      { text: "TCP/IP", correct: false, optionNumber: "A" },
      { text: "Ethernet", correct: false, optionNumber: "B" },
      { text: "Bus", correct: true, optionNumber: "C" },
      { text: "SSL", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: 'What does the acronym "URL" stand for?',
    answers: [
      { text: "Universal Resource Locator", correct: true, optionNumber: "A" },
      { text: "User Relative Link", correct: false, optionNumber: "B" },
      { text: "United Resource Language", correct: false, optionNumber: "C" },
      { text: "User Recognition Link", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is NOT a type of computer memory?",
    answers: [
      { text: "ROM", correct: false, optionNumber: "A" },
      { text: "RAM", correct: false, optionNumber: "B" },
      { text: "CPU", correct: true, optionNumber: "C" },
      { text: "Cache", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which of the following is an example of a mobile operating system?",
    answers: [
      { text: "Windows", correct: false, optionNumber: "A" },
      { text: "MacOS", correct: false, optionNumber: "B" },
      { text: "iOS", correct: true, optionNumber: "C" },
      { text: "Linux", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which of the following programming languages is used to create iOS mobile applications?",
    answers: [
      { text: "Java", correct: false, optionNumber: "A" },
      { text: "C++", correct: false, optionNumber: "B" },
      { text: "Objective-C", correct: true, optionNumber: "C" },
      { text: "Python", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: 'What does the acronym "HTML" stand for?',
    answers: [
      { text: "Hypertext Markup Language", correct: true, optionNumber: "A" },
      { text: "Hyperlink Markup Language", correct: false, optionNumber: "B" },
      { text: "Hyperspace Markup Language", correct: false, optionNumber: "C" },
      { text: "Hypermedia Markup Language", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is an example of a search engine?",
    answers: [
      { text: "Facebook", correct: false, optionNumber: "A" },
      { text: "Twitter", correct: false, optionNumber: "B" },
      { text: "Google", correct: true, optionNumber: "C" },
      { text: "Instagram", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which of the following is an example of a cloud-based productivity suite?",
    answers: [
      { text: "Miscrosoft Office", correct: false, optionNumber: "A" },
      { text: "Google Workspace", correct: true, optionNumber: "B" },
      { text: "Adobe Creative Suite", correct: false, optionNumber: "C" },
      { text: "CorelDRAW Graphics Suite", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: 'What does the acronym "VPN" stand for?',
    answers: [
      { text: "Virtual Private Network", correct: true, optionNumber: "A" },
      { text: "Virtual Public Network", correct: false, optionNumber: "B" },
      { text: "Visible Private Network", correct: false, optionNumber: "C" },
      { text: "Visible Public Network", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is NOT a type of computer port?",
    answers: [
      { text: "USB", correct: false, optionNumber: "A" },
      { text: "HDMI", correct: false, optionNumber: "B" },
      { text: "Ethernet", correct: false, optionNumber: "C" },
      { text: "Saas", correct: true, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which of the following is an example of a computer programming paradigm?",
    answers: [
      { text: "Object-oriented programming", correct: true, optionNumber: "A" },
      { text: "Social programming", correct: false, optionNumber: "B" },
      { text: "Marketing programming", correct: false, optionNumber: "C" },
      { text: "Entertainment programming", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is NOT a type of computer input device?",
    answers: [
      { text: "Mouse", correct: false, optionNumber: "A" },
      { text: "Keyboard", correct: false, optionNumber: "B" },
      { text: "Monitor", correct: true, optionNumber: "C" },
      { text: "Touchpad", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is an example of a web browser?",
    answers: [
      { text: "Firefox", correct: true, optionNumber: "A" },
      { text: "Photoshop", correct: false, optionNumber: "B" },
      { text: "Acrobat Reader", correct: false, optionNumber: "C" },
      { text: "InDesign", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: 'What does the acronym "ISP" stand for?',
    answers: [
      { text: "Internet Srevice Provider", correct: true, optionNumber: "A" },
      {
        text: "International System Provider",
        correct: false,
        optionNumber: "B",
      },
      {
        text: "Information System Provider",
        correct: false,
        optionNumber: "C",
      },
      { text: "Internet Storage Provider", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which protocol is used to send emails?",
    answers: [
      { text: "HTTP", correct: false, optionNumber: "A" },
      { text: "FTP", correct: false, optionNumber: "B" },
      { text: "SMTP", correct: true, optionNumber: "C" },
      { text: "SNMP", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which company developed the Java programming language?",
    answers: [
      { text: "Microsoft", correct: false, optionNumber: "A" },
      { text: "Apple", correct: false, optionNumber: "B" },
      { text: "Sun Microsystems", correct: true, optionNumber: "C" },
      { text: "IBM", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is a type of volatile memory?",
    answers: [
      { text: "RAM", correct: true, optionNumber: "A" },
      { text: "ROM", correct: false, optionNumber: "B" },
      { text: "Hard Disk", correct: false, optionNumber: "C" },
      { text: "Flash Drive", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: [
      { text: "<style>", correct: true, optionNumber: "A" },
      { text: "<css>", correct: false, optionNumber: "B" },
      { text: "<script>", correct: false, optionNumber: "C" },
      { text: "<link>", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which command is used to display the current directory in Linux?",
    answers: [
      { text: "pwd", correct: true, optionNumber: "A" },
      { text: "cd", correct: false, optionNumber: "B" },
      { text: "ls", correct: false, optionNumber: "C" },
      { text: "dir", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which language is primarily used for statistical analysis?",
    answers: [
      { text: "Python", correct: false, optionNumber: "A" },
      { text: "R", correct: true, optionNumber: "B" },
      { text: "Java", correct: false, optionNumber: "C" },
      { text: "C++", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is a markup language?",
    answers: [
      { text: "HTML", correct: true, optionNumber: "A" },
      { text: "JavaScript", correct: false, optionNumber: "B" },
      { text: "Python", correct: false, optionNumber: "C" },
      { text: "PHP", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which tool is used for version control in software development?",
    answers: [
      { text: "Docker", correct: false, optionNumber: "A" },
      { text: "Kubernetes", correct: false, optionNumber: "B" },
      { text: "Git", correct: true, optionNumber: "C" },
      { text: "Ansible", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which programming language is primarily used for statistical analysis?",
    answers: [
      { text: "Python", correct: false, optionNumber: "A" },
      { text: "Java", correct: false, optionNumber: "B" },
      { text: "R", correct: true, optionNumber: "C" },
      { text: "C++", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which company developed the Android operating system?",
    answers: [
      { text: "Apple", correct: false, optionNumber: "A" },
      { text: "Microsoft", correct: false, optionNumber: "B" },
      { text: "Google", correct: true, optionNumber: "C" },
      { text: "Samsung", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is NOT a programming language?",
    answers: [
      { text: "Python", correct: false, optionNumber: "A" },
      { text: "HTML", correct: true, optionNumber: "B" },
      { text: "JavaScript", correct: false, optionNumber: "C" },
      { text: "Java", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which protocol is used to transfer files over the internet?",
    answers: [
      { text: "HTTP", correct: false, optionNumber: "A" },
      { text: "FTP", correct: true, optionNumber: "B" },
      { text: "SMTP", correct: false, optionNumber: "C" },
      { text: "IMAP", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is a NoSQL database?",
    answers: [
      { text: "MySQL", correct: false, optionNumber: "A" },
      { text: "PostgreSQL", correct: false, optionNumber: "B" },
      { text: "MongoDB", correct: true, optionNumber: "C" },
      { text: "SQLite", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which company developed the C programming language?",
    answers: [
      { text: "Microsoft", correct: false, optionNumber: "A" },
      { text: "Apple", correct: false, optionNumber: "B" },
      { text: "IBM", correct: false, optionNumber: "C" },
      { text: "Bell Labs", correct: true, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which protocol is used for secure communication over a computer network?",
    answers: [
      { text: "FTP", correct: false, optionNumber: "A" },
      { text: "HTTP", correct: false, optionNumber: "B" },
      { text: "HTTPS", correct: true, optionNumber: "C" },
      { text: "SMTP", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which of the following is a popular JavaScript library for building user interfaces?",
    answers: [
      { text: "React", correct: true, optionNumber: "A" },
      { text: "Django", correct: false, optionNumber: "B" },
      { text: "Laravel", correct: false, optionNumber: "C" },
      { text: "Flask", correct: false, optionNumber: "D" },
    ],
  },
  {
    question:
      "Which programming language is known as the mother of all languages?",
    answers: [
      { text: "COBOL", correct: false, optionNumber: "A" },
      { text: "C", correct: true, optionNumber: "B" },
      { text: "Fortran", correct: false, optionNumber: "C" },
      { text: "Pascal", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is a version control system?",
    answers: [
      { text: "Git", correct: true, optionNumber: "A" },
      { text: "Jenkins", correct: false, optionNumber: "B" },
      { text: "Docker", correct: false, optionNumber: "C" },
      { text: "Kubernetes", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which company developed the Swift programming language?",
    answers: [
      { text: "Google", correct: false, optionNumber: "A" },
      { text: "Microsoft", correct: false, optionNumber: "B" },
      { text: "Apple", correct: true, optionNumber: "C" },
      { text: "IBM", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which of the following is NOT a type of machine learning?",
    answers: [
      { text: "Supervised learning", correct: false, optionNumber: "A" },
      { text: "Unsupervised learning", correct: false, optionNumber: "B" },
      { text: "Reinforcement learning", correct: false, optionNumber: "C" },
      { text: "Directive learning", correct: true, optionNumber: "D" },
    ],
  },
  {
    question: "Which HTML element is used to define a navigation link?",
    answers: [
      { text: "<nav>", correct: false, optionNumber: "A" },
      { text: "<a>", correct: true, optionNumber: "B" },
      { text: "<link>", correct: false, optionNumber: "C" },
      { text: "<href>", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which CSS property is used to change the text color?",
    answers: [
      { text: "color", correct: true, optionNumber: "A" },
      { text: "font-color", correct: false, optionNumber: "B" },
      { text: "text-color", correct: false, optionNumber: "C" },
      { text: "background-color", correct: false, optionNumber: "D" },
    ],
  },
  {
    question: "Which company developed the TypeScript programming language?",
    answers: [
      { text: "Google", correct: false, optionNumber: "A" },
      { text: "Facebook", correct: false, optionNumber: "B" },
      { text: "Microsoft", correct: true, optionNumber: "C" },
      { text: "Apple", correct: false, optionNumber: "D" },
    ],
  },
   {
    question: "Which of the following is NOT a web development framework?",
    answers: [
      { text: "Angular", correct: false, optionNumber: "A" },
      { text: "React", correct: false, optionNumber: "B" },
      { text: "Django", correct: false, optionNumber: "C" },
      { text: "TensorFlow", correct: true, optionNumber: "D" },
    ],
  },
  {
    question: "Which command is used to list files in a directory in Linux?",
    answers: [
      { text: "list", correct: false, optionNumber: "A" },
      { text: "dir", correct: false, optionNumber: "B" },
      { text: "ls", correct: true, optionNumber: "C" },
      { text: "show", correct: false, optionNumber: "D" },
    ],
  },
];
