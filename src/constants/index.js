import {
  blog01,
  blog02,
  blog03,
  blog04,
  course01,
  course02,
  course03,
  course04,
  course05,
  course06,
  course07,
  course08,
  course09,
  course10,
  course11,
  course12,
  course13,
  instructor01,
  instructor02,
  instructor03,
  instructor04,
  instructor05,
  instructor06,
  instructor07,
  instructor08,
  instructor09,
  instructor10,
  instructor11,
  instructor12,
  instructor13,
} from "./images";
import { FaComments, FaCalendarAlt, FaWallet, FaUserFriends, FaClock } from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "popular",
    title: "Popular",
  },
  {
    id: "instructors",
    title: "Instructors",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

export const statistics = [
  {
    number: "3",
    text: "Layanan",
  },
  {
    number: "10+",
    text: "Tugas Diselesaikan",
  },
  {
    number: "50+",
    text: "Peserta Kursus",
  },
  {
    number: "100+",
    text: "Sesi Konsultasi",
  },
];

export const aboutFeaturs = [
  {
    title: "Konsultasi Kapan Saja",
    description: "Dapatkan dukungan dan konsultasi kapan pun Anda membutuhkannya.",
    icon: FaComments,
  },
  {
    title: "Jadwal Fleksibel",
    description: "Atur jadwal belajar sesuai dengan kenyamanan dan ketersediaan waktu Anda.",
    icon: FaClock,
  },
  {
    title: "Harga Terjangkau",
    description: "Nikmati penawaran harga yang kompetitif dan ramah di kantong.",
    icon: FaWallet,
  },
  {
    title: "1 Mahasiswa atau Per Tim",
    description:
      "Kelas fleksibel untuk 1 mahasiswa atau tim (maks. 10 orang) untuk belajar lebih fokus dan efektif.",
    icon: FaUserFriends,
  },
];

export const categories = ["All", "Technology", "Marketing", "Arts", "Business"];

export const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    category: "Technology",
    difficulty: "Beginner",
    thumbnail: course01,
    instructor: {
      name: "Taylor Swift",
      pic: instructor01,
    },
    rating: 4.7,
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    category: "Technology",
    difficulty: "Intermediate",
    thumbnail: course02,
    instructor: {
      name: "Gracie Abrams",
      pic: instructor02,
    },
    rating: 4.9,
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    category: "Marketing",
    difficulty: "Advanced",
    thumbnail: course03,
    instructor: {
      name: "Ariana Grande",
      pic: instructor03,
    },
    rating: 4.8,
  },
  {
    id: 4,
    title: "Art of Photography",
    category: "Arts",
    difficulty: "Beginner",
    thumbnail: course04,
    instructor: {
      name: "Olivia Rodrigo",
      pic: instructor04,
    },
    rating: 4.6,
  },
  {
    id: 5,
    title: "Entrepreneurship Bootcamp",
    category: "Business",
    difficulty: "Intermediate",
    thumbnail: course05,
    instructor: {
      name: "Niki Zefanya",
      pic: instructor05,
    },
    rating: 4.7,
  },
  {
    id: 6,
    title: "Content Marketing Strategy",
    category: "Marketing",
    difficulty: "Intermediate",
    thumbnail: course06,
    instructor: {
      name: "Billie Eilish",
      pic: instructor06,
    },
    rating: 4.8,
  },
  {
    id: 7,
    title: "Machine Learning for Beginners",
    category: "Technology",
    difficulty: "Beginner",
    thumbnail: course07,
    instructor: {
      name: "Lana Del Rey",
      pic: instructor07,
    },
    rating: 4.9,
  },
  {
    id: 8,
    title: "Social Media Advertising Mastery",
    category: "Marketing",
    difficulty: "Advanced",
    thumbnail: course08,
    instructor: {
      name: "Bruno Mars",
      pic: instructor08,
    },
    rating: 4.6,
  },
  {
    id: 9,
    title: "Python Programming Essentials",
    category: "Technology",
    difficulty: "Intermediate",
    thumbnail: course09,
    instructor: {
      name: "Le Je-hoon",
      pic: instructor09,
    },
    rating: 4.8,
  },
  {
    id: 10,
    title: "Social Media Marketing Strategies",
    category: "Marketing",
    difficulty: "Advanced",
    thumbnail: course10,
    instructor: {
      name: "Ji Chang-wook",
      pic: instructor10,
    },
    rating: 4.9,
  },
  {
    id: 11,
    title: "Acrylic Painting Techniques",
    category: "Arts",
    difficulty: "Beginner",
    thumbnail: course11,
    instructor: {
      name: "Jisung",
      pic: instructor11,
    },
    rating: 4.6,
  },
  {
    id: 12,
    title: "Small Business Management",
    category: "Business",
    difficulty: "Intermediate",
    thumbnail: course12,
    instructor: {
      name: "Mark Lee",
      pic: instructor12,
    },
    rating: 4.6,
  },
  {
    id: 13,
    title: "Cybersecurity Fundamentals",
    category: "Technology",
    difficulty: "Intermediate",
    thumbnail: course13,
    instructor: {
      name: "Jaemin",
      pic: instructor13,
    },
    rating: 4.7,
  },
];

export const instructors = [
  {
    id: 1,
    name: "Taylor Swift",
    specialty: "Software Engineer",
    pic: instructor01,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Gracie Abrams",
    specialty: "Data Scientist",
    pic: instructor02,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Ariana Grande",
    specialty: "Digital Marketing Manager",
    pic: instructor03,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Olivia Rodrigo",
    specialty: "Photographer",
    pic: instructor04,
    rating: 4.9,
  },
  {
    id: 5,
    name: "Niki Zefanya",
    specialty: "Business Manager",
    pic: instructor05,
    rating: 4.8,
  },
  {
    id: 6,
    name: "Billie Eilish",
    specialty: "Digital Marketing Manager",
    pic: instructor06,
    rating: 4.9,
  },
  {
    id: 7,
    name: "Lana Del Rey",
    specialty: "Data Scientist",
    pic: instructor07,
    rating: 4.7,
  },
  {
    id: 8,
    name: "Bruno Mars",
    specialty: "Digital Marketing",
    pic: instructor08,
    rating: 4.6,
  },
  {
    id: 9,
    name: "Lee Je-hoon",
    specialty: "Software Engineer",
    pic: instructor09,
    rating: 4.9,
  },
  {
    id: 10,
    name: "Ji Chang-wook",
    specialty: "Digital Marketing",
    pic: instructor10,
    rating: 4.9,
  },
  {
    id: 11,
    name: "Jisung",
    specialty: "Artist",
    pic: instructor11,
    rating: 4.7,
  },
  {
    id: 12,
    name: "Mark Lee",
    specialty: "Business Manager",
    pic: instructor12,
    rating: 4.6,
  },
  {
    id: 13,
    name: "Jaemin",
    specialty: "Cybersecurity",
    pic: instructor13,
    rating: 4.8,
  },
];

export const blogs = [
  {
    id: 1,
    title: "Mastering Time Management",
    description: "Unlock productivity with time management techniques.",
    thumbnail: blog01,
  },
  {
    id: 2,
    title: "The Power of Data: Insights for Business Success",
    description: "Learn how to harness the power of data analytics, interpret trends.",
    thumbnail: blog02,
  },
  {
    id: 3,
    title: "Unlocking Your Creative Potential",
    description:
      "Discover the techniques, tips, and inspiration you need to unleash your inner creativity.",
    thumbnail: blog03,
  },
  {
    id: 4,
    title: "The Future of Work: Navigating Remote Collaboration",
    description: "Explore the latest trends and tools shaping remote collaboration.",
    thumbnail: blog04,
  },
];
