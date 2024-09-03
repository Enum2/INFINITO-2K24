import styles from "./Team.module.css";
import image from "../assets/langchain_logo.jpeg";
import pawan from '../assets/pawan.png'
import ritik from '../assets/ritik sharma.png'
import aryan from '../assets/aryan.png'
import himanshu from '../assets/himanshu.png'
import mayank from '../assets/mayank.png'
import harsh from '../assets/harsh.png'
import rudra from '../assets/rudra.png'
import aaditya from '../assets/aaditya.png'
import akhilesh from '../assets/akhilesh.png'
import gaurav from '../assets/gaurav verma.png'
import manish from '../assets/manish.png'
import saumya from '../assets/saumya.png'
import tanishq from '../assets/tanishq.png'
import jagriti from '../assets/jagriti.png'
import phutela from '../assets/phutela.png'
import sakshi from '../assets/sakshi.png'
import abhinav from '../assets/abhinav.png'
import arti from '../assets/arti.png'
import ansh from '../assets/ansh.png'
import dolly from '../assets/dolly.png'
import pullah from '../assets/pulah.png'
import anirudh from '../assets/anirudh.png'
import bhavik from '../assets/bhavik.png'
import rishi from '../assets/rishi.jpg'
import shani from '../assets/shani.jpg'
import aman from '../assets/aman.png'
import arun from '../assets/arun.jpg'
import sanchay from '../assets/sanchay.jpg'
import mojammi from '../assets/mojammi.jpg'
import sumit from '../assets/sumit.png'
import mohit from '../assets/mohit.jpg'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import shyam from '../assets/shyam.jpg'
import raunak from '../assets/raunak.jpg'

const teamMembers = [
  {
    role: "Overall Head",
    name: "Balwant Meena",
    position: "Fest Coordinator",
    image: image, 
  },
  {
    role: "Managing Lead",
    name: "Anirudh Singh",
    position: "Managing Lead",
    image: anirudh,
  },
  {
    role: "Events Lead",
    name: "Pulah Panara",
    position: "Events Lead",
    image: pullah,
  },
  {
    role: "Events Lead",
    name: "Shyam Sundar",
    position: "Events Lead",
    image: shyam,
  },
  // Media & Public Relations Coordinators
  // {
  //   role: "Media & Public Relations",
  //   name: "Piyush Sanyalwal",
  //   position: "Media & Public Relations",
  //   image: image,
  // },
  {
    role: "Media & Public Relations",
    name: "Arun Mishra",
    position: "Media & Public Relations",
    image: arun,
  },
  {
    role: "Media & Public Relations",
    name: "Raunak Bansod",
    position: "Media & Public Relations",
    image: raunak,
  },
  {
    role: "Media & Public Relations",
    name: "Mohit Saini",
    position: "Media & Public Relations",
    image: mohit,
  },
  {
    role: "Media & Public Relations",
    name: "Shani Kasaudhan",
    position: "Media & Public Relations",
    image: shani,
  },
  {
    role: "Media & Public Relations",
    name: "Dolly Singh",
    position: "Media & Public Relations",
    image: dolly, 
  },
  // Creatives & Design Coordinators
  {
    role: "Creatives & Design",
    name: "Ansh Singh",
    position: "Creatives & Design",
    image: ansh, 
  },
  {
    role: "Creatives & Design",
    name: "Arti Dewangan",
    position: "Creatives & Design",
    image: arti, 
  },
  // TV Team Coordinators
  // {
  //   role: "TV Team",
  //   name: "Vikram Balai",
  //   position: "TV Team",
  //   image: image, 
  // },
  {
    role: "TV Team",
    name: "Abhinav Vanamala",
    position: "TV Team",
    image: abhinav, 
  },
  // Sponsorship Coordinators
  {
    role: "Sponsorship",
    name: "Sakshi Sinha",
    position: "Sponsorship",
    image: sakshi, 
  },
  {
    role: "Sponsorship",
    name: "Rishi Panwar",
    position: "Sponsorship",
    image: rishi, 
  },
  {
    role: "Sponsorship",
    name: "Ansh Phutela",
    position: "Sponsorship",
    image: phutela, 
  },
  {
    role: "Sponsorship",
    name: "Jagriti Kanwar",
    position: "Sponsorship",
    image: jagriti, 
  },
  
  {
    role: "Sponsorship",
    name: "Tanishq Sharma",
    position: "Sponsorship",
    image: tanishq, 
  },
  {
    role: "Sponsorship",
    name: "Mojammi Warsi",
    position: "Sponsorship",
    image: mojammi, 
  },
 
  {
    role: "Sponsorship",
    name: "Saumya Pratap Singh",
    position: "Sponsorship",
    image: saumya, 
  },
  // Events & Management Coordinators
  {
    role: "Events & Management",
    name: "Aman Kumar",
    position: "Events & Management",
    image: aman, 
  },
  
  {
    role: "Events & Management",
    name: "Manish Kumar",
    position: "Events & Management",
    image: manish, 
  },
  {
    role: "Events & Management",
    name: "Gaurav Verma",
    position: "Events & Management",
    image: gaurav, 
  },
  {
    role: "Events & Management",
    name: "Akhilesh Ingole",
    position: "Events & Management",
    image: akhilesh, 
  },
  {
    role: "Events & Management",
    name: "Aaditya Kaswan",
    position: "Events & Management",
    image: aaditya, 
  },
  // Web Development Coordinators
  {
    role: "Web Development",
    name: "Rudra Goyal",
    position: "Web Development",
    image: rudra, 
  },
  
  {
    role: "Web Development",
    name: "Pawan Singh",
    position: "Web Development",
    image: pawan, 
  },
  // Registration Coordinators
  {
    role: "Registration",
    name: "Harsh Mittal",
    position: "Registration",
    image: harsh, 
  },
  {
    role: "Registration",
    name: "Mayank Sen",
    position: "Registration",
    image: mayank, 
  },
  {
    role: "Registration",
    name: "Himanshu Chakravarty",
    position: "Registration",
    image: himanshu, 
  },
  // E-sports Coordinators
  {
    role: "E-sports",
    name: "Aryan",
    position: "E-sports",
    image: aryan, 
  },
  {
    role: "E-sports",
    name: "Sumit Sumhan",
    position: "E-sports",
    image: sumit, 
  },
  {
    role: "E-sports",
    name: "Ritik Sharma",
    position: "E-sports",
    image: ritik, 
  },
  {
    role: "E-sports",
    name: "Sanchay Rathore",
    position: "E-sports",
    image: sanchay, 
  },
  // Hospitality Coordinators
  {
    role: "Hospitality",
    name: "Bhavik Netam",
    position: "Hospitality",
    image: bhavik, 
  },
  
  // {
  //   role: "Hospitality",
  //   name: "Sougata Saha",
  //   position: "Hospitality",
  //   image: image, 
  // },
  // Other members as needed...
];


// Group members by their roles
const groupByRole = (members) => {
  return members.reduce((acc, member) => {
    if (!acc[member.role]) {
      acc[member.role] = [];
    }
    acc[member.role].push(member);
    return acc;
  }, {});
};


const Team = () => {
  const groupedMembers = groupByRole(teamMembers);

  return (
    <div className="main"><div><Navbar/></div><div className={styles.teamContainer}>
      <h1 className={styles.heading}>Meet Our Team</h1>

      {Object.keys(groupedMembers).map((role, index) => {
        const membersCount = groupedMembers[role].length;
        let gridClass = styles.teamGrid;

        if (membersCount === 1) {
          gridClass += ` ${styles.oneCard}`;
        } else if (membersCount === 2) {
          gridClass += ` ${styles.twoCards}`;
        }
       

        return (
          <div key={index}>
            <h2>{role} Coordinators</h2>
            <div className={gridClass}>
              {groupedMembers[role].map((member, index) => (
                <div className={styles.teamMember} key={index}>
                  <div className={styles.teamMemberImage}>
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className={styles.teamMemberInfo}>
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div><div><Footer/></div></div>
    
  );
};

export default Team;
