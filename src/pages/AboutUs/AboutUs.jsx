import React from "react";
import styles from "./AbousUs.module.css";
import blankImage from "../../../public/assest.jpg"; // Ensure you have this image in your project
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const teamMembers = [
  {
    role: "Fest Coordinator",
    name: "Sarthak",
    email: "sarthak@example.com",
    img: blankImage,
  },
  {
    role: "Assistant Coordinators",
    members: [
      { name: "Netra", email: "netra@example.com", img: blankImage },
      { name: "Aryan", email: "aryan@example.com", img: blankImage },
    ],
  },
  {
    role: "Fest Mentor",
    name: "Amit",
    email: "amit@example.com",
    img: blankImage,
  },
  {
    role: "Technical Heads",
    members: [
      { name: "Ravi", email: "ravi@example.com", img: blankImage },
      { name: "Priya", email: "priya@example.com", img: blankImage },
    ],
  },
  {
    role: "Cultural Heads",
    members: [
      { name: "Neha", email: "neha@example.com", img: blankImage },
      { name: "Vikram", email: "vikram@example.com", img: blankImage },
    ],
  },
  {
    role: "Web Development Head",
    name: "Rohan",
    email: "rohan@example.com",
    img: blankImage,
  },
  {
    role: "Creative Head",
    name: "Maya",
    email: "maya@example.com",
    img: blankImage,
  },
  {
    role: "Decoration Head",
    name: "Sonia",
    email: "sonia@example.com",
    img: blankImage,
  },
  {
    role: "Film and Videography Head",
    name: "Arjun",
    email: "arjun@example.com",
    img: blankImage,
  },
  {
    role: "Content Creation Head",
    name: "Kriti",
    email: "kriti@example.com",
    img: blankImage,
  },
  {
    role: "Media and Publicity Heads",
    members: [
      { name: "Anil", email: "anil@example.com", img: blankImage },
      { name: "Sheetal", email: "sheetal@example.com", img: blankImage },
    ],
  },
  {
    role: "Social Media Head",
    name: "Nikhil",
    email: "nikhil@example.com",
    img: blankImage,
  },
  {
    role: "Tech-Summit Head",
    name: "Ananya",
    email: "ananya@example.com",
    img: blankImage,
  },
  {
    role: "Workshop Head",
    name: "Suresh",
    email: "suresh@example.com",
    img: blankImage,
  },
  {
    role: "Hospitality Coordinators",
    members: [
      { name: "Reema", email: "reema@example.com", img: blankImage },
      { name: "Raj", email: "raj@example.com", img: blankImage },
    ],
  },
  {
    role: "Proshow Head",
    name: "Ritesh",
    email: "ritesh@example.com",
    img: blankImage,
  },
  {
    role: "Informals Head",
    name: "Pooja",
    email: "pooja@example.com",
    img: blankImage,
  },
  {
    role: "Finance Head",
    name: "Arvind",
    email: "arvind@example.com",
    img: blankImage,
  },
  {
    role: "Marketing Heads",
    members: [
      { name: "Sita", email: "sita@example.com", img: blankImage },
      { name: "Rajesh", email: "rajesh@example.com", img: blankImage },
    ],
  },
  {
    role: "Open House Coordinator",
    name: "Gaurav",
    email: "gaurav@example.com",
    img: blankImage,
  },
];
const TeamMember = ({ name, email, img }) => (
  <div className={styles.teamMember}>
    <img src={img} alt={name} />
    <p className={styles.name}>{name}</p>
    <p className={styles.email}>{email}</p>
  </div>
);

const AssistMember = ({ members }) => (
  <div className={styles.assist}>
    {members.map((member, index) => (
      <div className={styles.assistMember} key={index}>
        <img src={member.img} alt={member.name} />
        <p className={styles.assistName}>{member.name}</p>
        <p className={styles.assistEmail}>{member.email}</p>
      </div>
    ))}
  </div>
);

const AboutUs = () => (
  <div className={styles.main}>
   
  </div>
);

export default AboutUs;
