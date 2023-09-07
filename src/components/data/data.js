import {nanoid} from 'nanoid'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const navData = [
    {id: nanoid(), url: '/', text: "Home"},
    {id: nanoid(), url: '/teacher', text: "Teacher"},
    {id: nanoid(), url: '/parent', text: "Parent"},
    {id: nanoid(), url: '/student', text: "Student"},
    // {id: nanoid(), url: '/login', text: "Login"}
]

export const socialIcons = [
    {id: nanoid(), url:"https://www.facebook.com", icon:<FaFacebook />},
    {id: nanoid(), url:"https://www.linkedin.com", icon:<FaLinkedin />},
    {id: nanoid(), url:"https://www.twitter.com", icon:<FaTwitter />}
] 

export const keyActivities = [
    {id: 1, text: "Registration"},
    {id: 2, text: "Grading"},
    {id: 3, text: "Scheduling"},
    {id: 4, text: "Performance"},
    {id: 5, text: "General Administration"},

]