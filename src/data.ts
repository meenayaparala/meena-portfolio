import { Skill, Project, Certification } from './types';
import { Shield, Bug, Lock, Network, Database, Code } from 'lucide-react';

export const skills: Skill[] = [
  { name: 'Network Security', percentage: 90, category: 'Security' },
  { name: 'Penetration Testing', percentage: 85, category: 'Security' },
  { name: 'Malware Analysis', percentage: 80, category: 'Security' },
  { name: 'Incident Response', percentage: 85, category: 'Security' },
  { name: 'Cryptography', percentage: 75, category: 'Security' },
  { name: 'Cloud Security', percentage: 80, category: 'Cloud' },
  { name: 'Python', percentage: 90, category: 'Programming' },
  { name: 'C++', percentage: 85, category: 'Programming' },
  { name: 'Linux', percentage: 90, category: 'Systems' },
  { name: 'Web Security', percentage: 85, category: 'Security' },
  { name: 'Forensics', percentage: 80, category: 'Security' },
  { name: 'SIEM Tools', percentage: 75, category: 'Tools' },
];

export const projects: Project[] = [
  {
    title: 'Advanced Port Scanner',
    description: 'Developed a GUI-based port scanner using Python for scanning and reporting open ports.',
    technologies: ['Python', 'Tkinter', 'Socket Programming'],
    github: 'https://github.com/meenayaparala/Advanced-port-scanner-tool.git', // Replace with your actual link
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60',
    longDescription: `A user-friendly GUI-based Port Scanner application developed using Python to detect open ports on a target host and generate structured scan reports.
  
  Key Features:
  • Intuitive GUI using Tkinter for easy input and result visualization  
  • Scans common and custom port ranges using socket programming  
  • Displays real-time scanning progress and status  
  • Generates and saves scan reports in readable formats (e.g., .txt or .csv)  
  • Error handling for unreachable or invalid hosts  
  • Lightweight and efficient – ideal for beginner and intermediate network diagnostics
  
  The tool is designed for ethical hacking and network troubleshooting, providing quick insights into open ports, potentially vulnerable services, and overall network exposure. It helps beginners understand the basics of network port scanning through a simple interface.`
  }
  ,
  {
    title: 'Vulnerability Assessment Report Series',
    description: 'Performed vulnerability scanning on live websites under Supraja Technologies and documented 12 professional reports.',
    technologies: ['VAPT', 'OWASP Top 10', 'Nmap', 'Burp Suite'],
    github: 'https://github.com/meenayaparala/vulnerability-scanning-report-series.git', // Update with actual repo
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZ1bG5lcmFiaWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    longDescription: `A series of 12 vulnerability assessment reports generated after performing detailed security analysis on real-world websites during my internship at Supraja Technologies.
  
  Key Features:
  • Identified security flaws based on OWASP Top 10  
  • Used tools like Nmap, Nikto, Burp Suite, and manual testing  
  • Each report includes findings, screenshots, impact analysis, and recommendations  
  • Covered vulnerabilities like XSS, SQL Injection, Broken Auth, and Misconfigurations  
  • Reports were reviewed and approved by security mentors  
  • Enhanced skills in ethical hacking, secure coding review, and report writing
  
  The reports were part of a professional training module and were created by following ethical guidelines and with prior permissions for every scanned target.`
  },
  {
    title: 'Cisco Packet Tracer Lab Projects',
    description: 'Completed multiple hands-on networking simulations using Cisco Packet Tracer during cybersecurity training.',
    technologies: ['Cisco Packet Tracer', 'Networking', 'Routing & Switching'],
    github: 'https://github.com/meenayaparala/cisco-packet-tracer-lab-activities',
    image: 'https://img.icons8.com/ios-filled/50/network.png',
    longDescription: `A comprehensive set of Cisco Packet Tracer labs covering core networking concepts such as routing, switching, subnetting, VLANs, DHCP, static/dynamic routing, and firewall configurations.
  
  Key Highlights:
  • Designed and simulated real-world network topologies  
  • Implemented and troubleshooted static & dynamic routing protocols (RIP, OSPF)  
  • Configured switches, routers, and access control policies  
  • Worked on end-to-end IP addressing and subnetting exercises  
  • Built small enterprise-level lab networks for LAN/WAN communication  
  • Used Cisco Packet Tracer CLI for device configurations and troubleshooting
  
  These labs were completed as part of my cybersecurity coursework and networking fundamentals module. They helped me gain practical experience in designing and managing network infrastructure.`
  },
  {
  title: 'PhishGuard',
  description: 'A phishing detection tool that helps users identify and avoid phishing websites.',
  technologies: ['React', 'Node.js', 'Express', 'Machine Learning'],
  github: 'https://github.com/meenayaparala/phishGuard.git',
  image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', // Update if you have a different image
  longDescription: `PhishGuard is an intelligent phishing detection tool designed to help users identify and avoid phishing websites using machine learning and real-time analysis.

Key Highlights:
• Utilizes machine learning algorithms to detect phishing URLs with high accuracy  
• Real-time scanning and instant feedback for suspicious links  
• User-friendly React-based interface for easy interaction  
• Backend powered by Node.js and Express for fast API responses  
• Integrates with browser extensions for seamless protection  
• Open-source and customizable for different security needs

PhishGuard empowers users to browse the web safely by providing proactive phishing detection and educational insights about online threats.`
},
{
  title: 'picoCTF Writeups',
  description: 'A collection of detailed writeups for picoCTF challenges, covering various cybersecurity topics and solutions.',
  technologies: ['CTF', 'Cybersecurity', 'Writeups', 'Forensics', 'Reverse Engineering'],
  github: 'https://github.com/meenayaparala/picoCTF-Writeups.dude',
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', // Replace with your actual image if available
  longDescription: `This repository contains comprehensive writeups for picoCTF challenges I have solved. Each writeup explains the problem, approach, and solution in detail, covering topics such as cryptography, forensics, web exploitation, binary exploitation, and reverse engineering.

Key Highlights:
• Step-by-step solutions for a variety of picoCTF problems  
• Screenshots and code snippets for clarity  
• Focus on learning and sharing cybersecurity techniques  
• Useful for beginners and intermediate CTF players  
• Continuously updated with new challenge solutions

These writeups demonstrate my problem-solving skills and knowledge in cybersecurity, and serve as a resource for the CTF community.`
},
];
  
export const certifications: Certification[] = [
  {
    name: 'Introduction to cyber Security',
    issuer: 'Academor',
    date: '2023',
    logo: 'https://img.icons8.com/ios-filled/100/shield.png',
    link: 'https://drive.google.com/file/d/1Lhc7oYDTY2GxOUmX0LYo9sPoEnHmrp2z/view?usp=sharing'
  },
  {
    name: 'vulnerability assessment and penetration testing(cyber security)',
    issuer: 'supraja Technologies',
    date: '2024',
    logo: 'https://img.icons8.com/ios-filled/100/bug.png',
    link: 'https://drive.google.com/file/d/1KHptHZfdkXbe7M1y1MkkiNgfMIYIrPE0/view?usp=sharing'
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'AWS',
    date: '2025',
    logo: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
    link: 'https://drive.google.com/file/d/14j1il2zRp9Q2hKV_CQ0qZphzZe7PuSge/view?usp=sharing'
  },
  {
    name: 'Introduction to cyber security',
    issuer: 'CISCO',
    date: '2024',
    logo: 'https://logowik.com/content/uploads/images/cisco-systems9760.jpg',
    link: 'https://drive.google.com/file/d/1XxD0njKeUHlWtCCVCjrx0ZRUVM9uYsgN/view?usp=sharing'
  }
];

export const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and engineering (Cyber Security)',
    institution: 'Rajeev Gandhi Memorial College Of Engineering and Technology, Nandyal',
    year: '2023 - 2026',
    description: 'Specialized in cybersecurity, focusing on network security, penetration testing, and secure software development.',
  },
  {
    degree: 'Intermediate',
    institution: 'Medha Junior College, Mydukur',
    year: '2021 - 2022',
    description: 'Completed coursework in mathematics, physics, and computer science.',
  },
  {
    degree: 'Schooling',
    institution: 'Little Scholars The Global High School, Mydukur',
    year: '2019 - 2020',
    description: 'Focused on foundational studies in science, mathematics, and social sciences.',
  },
];