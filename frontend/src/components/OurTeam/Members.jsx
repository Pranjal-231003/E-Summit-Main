
const data = [
  {"name": "Harsh Koringa", "linkedin": "https://www.linkedin.com/in/harsh-koringa-4a3530256", "instagram": "https://www.instagram.com/harsh_koringa_?igsh=MmVlMjlkMTBhMg%3D%3D&utm_source=qr"},
  {"name": "Priyanshu Jain", "linkedin": "https://www.linkedin.com/in/priyanshu-jain-695a641a2", "instagram": "https://www.instagram.com/priyanshu_4803?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"},
  {"name": "Rajdeep Singh", "linkedin": "https://www.linkedin.com/in/rajdeep-singh-3b8381228", "instagram": "https://www.instagram.com/r.a.j.d.e.e.p._.singh?igsh=c2FtbHRuNzgxeWJw"},
  {"name": "Vayam Khandelwal", "linkedin": "https://www.linkedin.com/in/vayamkh2003", "instagram": "https://www.instagram.com/vayam_kh_?igsh=MzV4em1jd3hhc3d6"},
  {"name": "Aashrith", "linkedin": "https://www.linkedin.com/in/aashrith-boppudi-28646b251", "instagram": "itz_me_aashrith"},
  {"name": "Divyansh Agrawal", "linkedin": "https://www.linkedin.com/in/divyansh-agrawal-790364259", "instagram": "https://www.instagram.com/d.divyansh.d"},
  {"name": "Dharmraj Mandloi", "linkedin": "https://www.linkedin.com/in/dharmraj-mandloi-13012002d", "instagram": "https://www.instagram.com/dharmraj_dm?igsh=MTNiYzNiMzkwZA=="},
  {"name": "Rajdeep Singh", "linkedin": "https://www.linkedin.com/in/rajdeep-singh-3b8381228", "instagram": "https://www.instagram.com/r.a.j.d.e.e.p._.singh?igsh=c2FtbHRuNzgxeWJw"},
  {"name": "Saksham Goyal", "linkedin": "https://www.linkedin.com/in/saksham-goyal-964a3322b/", "instagram": "https://www.instagram.com/saksham_goyal115/"},
  {"name": "Tushar Sukhwal", "linkedin": "https://www.linkedin.com/in/tushar-sukhwal-57463a251/", "instagram": "https://www.instagram.com/tushars_071/"},
  {"name": "Harsh Koringa", "linkedin": "https://www.linkedin.com/in/harsh-koringa-4a3530256", "instagram": "https://www.instagram.com/harsh_koringa_?igsh=MmVlMjlkMTBhMg%3D%3D&utm_source=qr"},
  {"name": "Deepanshu Gupta", "linkedin": "https://www.linkedin.com/in/deepanshu-gupta-676b35213/", "instagram": "https://www.instagram.com/deepanshu_gupta1235/"},
  {"name": "Aashrith", "linkedin": "https://www.linkedin.com/in/aashrith-boppudi-28646b251", "instagram": "itz_me_aashrith"},
  {"name": "Akash Singh", "linkedin": "https://www.linkedin.com/in/akash-singh-114536246", "instagram": "https://www.instagram.com/akash.singh09?igsh=NHh2NDAxY2VsMHhx&utm_source=qr"},
  {"name": "Janak Ajmera", "linkedin": "https://www.linkedin.com/in/janak-ajmera-492b8b269/", "instagram": "https://www.instagram.com/janakajmera"},
  {"name": "Naman Mohnani", "linkedin": "https://www.linkedin.com/in/naman-mohnani-7a21a8243/", "instagram": "https://www.instagram.com/naman.mohnani/?igsh=ZGNjOWZkYTE3MQ%3D%3D"},
  {"name": "Umang Mittal", "linkedin": "https://www.linkedin.com/in/umang-mittal-a406a424a", "instagram": "https://www.instagram.com/umg_20?igsh=NnBsdnp1YWRyNmZ5"},
  {"name": "Aditya Narang", "linkedin": "https://www.linkedin.com/in/aditya-n-045977253", "instagram": "https://www.instagram.com/narang_adi01?igsh=ODA1NTc5OTg5Nw=="},
  {"name": "Pulkit Bohra", "linkedin": "https://www.linkedin.com/in/pulkit-bohra", "instagram": "https://www.instagram.com/_pulkitbohra?igsh=ZzU5bDM0c2ZwdjA4"},
  {"name": "Aditya", "linkedin": "https://www.linkedin.com/in/aditya-k-2720a7251", "instagram": "https://www.instagram.com/aditya_09_28?igsh=MmVlMjlkMTBhMg%3D%3D&utm_source=qr"},
  {"name": "Dhruv Agrawal", "linkedin": "http://linkedin.com/in/dhruv-agrawal-aa3627227", "instagram": "https://www.instagram.com/dhruvag2002?utm_source=qr"},
  {"name": "Harshit Goyal", "linkedin": "https://www.linkedin.com/in/harshit-goyal-944261256", "instagram": "https://www.instagram.com/harshitgoyal2004?igsh=c3lkY3Z4bG14azBh"},
  {"name": "Dev Gupta", "linkedin": "https://www.linkedin.com/in/dev-gupta-326a9724b/", "instagram": "https://www.instagram.com/08_gupta_16dev/"},
  {"name": "Jayesh Chaudhary", "linkedin": "https://www.linkedin.com/in/jayesh-chaudhary-1812a9249", "instagram": "https://www.instagram.com/jayesh_choudhary.01?igsh=OGY3MTU3OGY1Mw=="},
  {"name": "Aayush Shukla", "linkedin": "https://www.linkedin.com/in/aayush-shukla-297154256", "instagram": "https://www.instagram.com/aayushshukla1803?igsh=dGYxNjE0aDh1cjJu"},
  {"name": "Ayush Pandey", "linkedin": "https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav", "instagram": "https://www.instagram.com/ayush8819/"},
  {"name": "Mayank Rathi", "linkedin": "https://www.linkedin.com/in/mayank-rathi-549b19223", "instagram": "https://www.instagram.com/r_mayu.07?igsh=bmFyMmt1ZjRiZHM5&utm_source=qr"},
  {"name": "Divyam Talwar", "linkedin": "https://www.linkedin.com/in/divyam-talwar-b68192216/", "instagram": "https://www.instagram.com/talwar___/"},
  {"name": "Sanidhya Shankar", "linkedin": "https://www.linkedin.com/in/sanidhya-shankar-b2abbb253", "instagram": "https://www.instagram.com/sanidhya9790?igsh=OGQ5ZDc2ODk2ZA=="}
];

const emails = [
  "22ucs088@lnmiit.ac.in",
  "21ucs162@lnmiit.ac.in",
  "21ucs165@lnmiit.ac.in",
  "22ucs226@lnmiit.ac.in",
  "22ucs051@lnmiit.ac.in",
  "22ume012@lnmiit.ac.in",
  "21ucs063@lnmiit.ac.in",
  "21ucs165@lnmiit.ac.in",
  "22ucc090@lnmiit.ac.in",
  "22ucc110@lnmiit.ac.in",
  "22ucs088@lnmiit.ac.in",
  "22ucs058@lnmiit.ac.in",
  "22ucs051@lnmiit.ac.in",
  "22ucc013@lnmiit.ac.in",
  "22ucs091@lnmiit.ac.in",
  "22ucs135@lnmiit.ac.in",
  "22ucs221@lnmiit.ac.in",
  "21ucs010@lnmiit.ac.in",
  "22ucc079@lnmiit.ac.in",
  "22UCC008@lnmiit.ac.in",
  "21ucs064@lnmiit.ac.in",
  "22ucs086@lnmiit.ac.in",
  "22uec038@lnmiit.ac.in",
  "22uec058@lnmiit.ac.in",
  "22ucc003@lnmiit.ac.in",
  "22ume008@lnmiit.ac.in",
  "22uec078@lnmiit.ac.in",
  "22ucs071@lnmiit.ac.in",
  "22ume033@lnmiit.ac.in"
];

const newData = data.map((item, index) => {
  return { ...item, gmail: emails[index] };
});

console.log(newData);

export const summitMembers = [
    { id: 1, name: 'Yash Gautam', title: 'Head', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008272/WhatsApp_Image_2023-11-28_at_10.17.34_PM_uuxjz9.jpg' ,gmail: '21ucs235@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/yash-gautam-108555229/',instagram: '' },

    // { id: 2, name: 'Vaibhav Rai', title: 'Coordinator',  photo: require('./Images/Upload your Photo in png (File responses)/Screenshot_2024-01-03-20-50-01-58_99c04817c0de5652397fc8b56c3b3817.jpg') ,gmail: '21ucs225@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/vaibhav-rai-ab7348225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',instagram: '' },
    // { id: 3, name: 'Dhruv Agarwal', title: 'Finance Conveyer',  photo: require('./Images/Upload your Photo in png (File responses)/IMG_2869 - Dhruv Agrawal.jpeg') ,gmail: '21ucs064@lnmiit.ac.in',linkedin:'http://linkedin.com/in/dhruv-agrawal-aa3627227' ,instagram: 'https://www.instagram.com/dhruvag2002?utm_source=qr' },
    // { id: 4, name: 'Pranjal Jain', title: 'Tech Lead',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008268/picofme_aielvq.jpg',gmail: 'pranjalshp2310@gmail.com' ,linkedin:'https://www.linkedin.com/in/pranjal-jain-a42689237/  ' ,instagram: 'https://www.instagram.com/i_am_pranjaljain?igsh=MTFsd2d6MzZ4MXozbA=='},
    // { id: 5, name: 'Pranjal Jain', title: 'Tech Lead',  photo:'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008268/picofme_aielvq.jpg',gmail: 'pranjalshp2310@gmail.com',linkedin:'' ,instagram: 'https://www.instagram.com/i_am_pranjaljain?igsh=MTFsd2d6MzZ4MXozbA=='},

    { id: 2, name: 'Vaibhav Rai', title: 'Event Coordinator',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746987/esummit/Screenshot_2024-01-03-20-50-01-58_99c04817c0de5652397fc8b56c3b3817_aubbqq.jpg' ,gmail: '21ucs225@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/vaibhav-rai-ab7348225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',instagram: 'https://www.instagram.com/_vaibhav10._/' },
    { id: 3, name: 'Dhruv Agarwal', title: 'Finance Convenor',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746980/esummit/IMG_2869_-_Dhruv_Agrawal_fukfu4.jpg' ,gmail: '21ucs064@lnmiit.ac.in',linkedin:'http://linkedin.com/in/dhruv-agrawal-aa3627227' ,instagram: '' },
    { id: 4, name: 'Pranjal Jain', title: 'Tech Lead',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008268/picofme_aielvq.jpg',gmail: 'pranjalshp2310@gmail.com' ,linkedin:'https://www.linkedin.com/in/pranjal-jain-a42689237/  ' ,instagram: 'https://www.instagram.com/i_am_pranjaljain?igsh=MTFsd2d6MzZ4MXozbA=='},
    { id: 5, name: 'Pranjal Jain', title: 'Tech Lead',  photo:'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008268/picofme_aielvq.jpg',gmail: 'pranjalshp2310@gmail.com',linkedin:'https://www.linkedin.com/in/varun-andaluri-813160225/' ,instagram: 'https://www.instagram.com/i_am_pranjaljain?igsh=MTFsd2d6MzZ4MXozbA=='},

    { id: 6, name: 'Shourya Gupta ', title: 'UI/UX Designer',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008258/IMG_5265_1_khjh67.jpg',gmail: 'shourya010604@gmail.com',linkedin:'https://www.linkedin.com/in/shourya-gupta-3aa5411a1/' ,instagram: 'https://www.instagram.com/shourya0__0/'},
    { id: 7, name: 'Kumar Harsh', title: 'Fullstack Developer',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746988/esummit/WhatsApp_Image_2023-12-10_at_3.56.45_PM_dbehco.jpg' ,gmail: 'kumarharsh0205@gmail.com',linkedin:'https://www.linkedin.com/in/kumarharsh-p/',instagram: 'https://www.instagram.com/_.harsh24._/' },
    { id: 8, name: 'Aditya Kumar', title: 'Fullstack Developer',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008254/aditya_prqcbm.jpg' ,gmail: 'adityakumar290304@gmail.com',linkedin:'https://www.linkedin.com/in/aditya-n-045977253/',instagram: 'https://www.instagram.com/adi_rocks_007/' },

    { id: 9, name: 'Jay Aggarwal', title: 'Frontend Developer',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008253/1701188174968_i85fwk.jpg',gmail: '22ucs094@lnmiit.ac.in',linkedin:'https://in.linkedin.com/in/jay-aggarwal-65b058233',instagram: 'https://www.instagram.com/jay_agg_?igsh=MWJyYnIzcXh0OHByZw==' },
    { id: 10, name: 'Ayush Bansal', title: 'Fullstack Developer',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008257/IMG_3842_pjw4zg.jpg' ,gmail: '22ucs042@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/bansalayush247/',instagram: 'https://www.instagram.com/bansalayush7?igsh=MWFxaTNmeml4YzI0Mg==' },
    { id: 11, name: 'Mitali Manya', title: 'Frontend Developer',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008263/IMG-20230909-WA0082_2_b3jyyq.jpg' ,gmail: '22uec081@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/mitali-manya-796921251/',instagram: 'https://instagram.com/mitali_manya?igshid=ZDdkNTZiNTM=' },
    { id: 12, name: 'Varun Ashok', title: 'Sponsorship Head',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008270/WhatsApp_Image_2023-11-28_at_10.17.34_PM_1_cbfsig.jpg ',gmail: '21uec153@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/varun-andaluri-813160225/' ,instagram: 'https://www.instagram.com/27.ashok.varun/'},
    // { id: 13, name: 'Harshit Goyal', title: 'Member',  photo: require('./Images/Upload your Photo in png (File responses)/Screenshot_20231230_205424_Gallery - HARSHIT GOYAL.png') ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/varun-andaluri-813160225/',instagram: '' },
    // { id: 14, name: 'Dev gupta', title: 'Member',  photo: require('./Images/Upload your Photo in png (File responses)/IMG_20230321_011618_121 - DEV GUPTA.png') ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/varun-andaluri-813160225/' ,instagram: ''},
    // { id: 15, name: 'Jayesh Chaudhary', title: 'Member',  photo: require('./Images/Upload your Photo in png (File responses)/IMG_COM_20231230_2325_10_1620 - JAYESH CHAUDHARY.png') ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/varun-andaluri-813160225/' ,instagram: ''},
    // { id: 16, name: 'Ayush Pandey', title: 'Member',  photo: require('./Images/Upload your Photo in png (File responses)/DSC_0116 - AYUSH VISHNU PANDEY.png') ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/varun-andaluri-813160225/' ,instagram: 'https://www.instagram.com/ayush8819/'},
    // { id: 17, name: 'Mayank Rathi', title: 'Member',  photo: require('./Images/Upload your Photo in png (File responses)/IMG_9521 - MAYANK RATHI.jpeg') ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/mayank-rathi-549b19223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',instagram: '' },
    // { id: 18, name: 'Divyam Talwar', title: 'Member',  photo: require('./Images/Upload your Photo in png (File responses)/WhatsApp Image 2023-11-28 at 23.31.06_e9db2eed - DIVYAM TALWAR.png') ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/divyam-talwar-b68192216/',instagram: '' },

    // { id: 9, name: 'Jay Aggarwal', title: 'Frontend Developer',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008253/1701188174968_i85fwk.jpg',gmail: '22ucs094@lnmiit.ac.in',linkedin:'https://in.linkedin.com/in/jay-aggarwal-65b058233',instagram: '' },
    // { id: 10, name: 'Ayush Bansal', title: 'Fullstack Developer',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008257/IMG_3842_pjw4zg.jpg' ,gmail: '22ucs042@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/bansalayush247/',instagram: 'https://www.instagram.com/bansalayush7?igsh=MWFxaTNmeml4YzI0Mg==' },
    // { id: 11, name: 'Mitali Manya', title: 'Frontend Developer',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008263/IMG-20230909-WA0082_2_b3jyyq.jpg' ,gmail: '22uec081@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/mitali-manya-796921251/',instagram: '' },
    // { id: 12, name: 'Varun Ashok', title: 'Sponsorship Head',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008270/WhatsApp_Image_2023-11-28_at_10.17.34_PM_1_cbfsig.jpg ',gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/varun-andaluri-813160225/' ,instagram: ''},


    { id: 13, name: 'Harshit Goyal', title: '',  photo: "https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746987/esummit/Screenshot_20231230_205424_Gallery_-_HARSHIT_GOYAL_pjl0d6.jpg" ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'',instagram: '' },
    { id: 14, name: 'Dev gupta', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746980/esummit/IMG_20230321_011618_121_-_DEV_GUPTA_pakxzu.png' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'' ,instagram: ''},
    { id: 15, name: 'Jayesh Chaudhary', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/v1704746982/esummit/IMG_COM_20231230_2325_10_1620_-_JAYESH_CHAUDHARY_ltqxph.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'' ,instagram: ''},
    { id: 16, name: 'Ayush Pandey', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746977/esummit/DSC_0116_-_AYUSH_VISHNU_PANDEY_uqplrs.png' ,instagram: 'https://www.instagram.com/ayush8819/'},
    { id: 17, name: 'Mayank Rathi', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746980/esummit/IMG_9521_-_MAYANK_RATHI_pyk87d.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/mayank-rathi-549b19223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',instagram: '' },
    { id: 18, name: 'Divyam Talwar', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746987/esummit/WhatsApp_Image_2023-11-28_at_23.31.06_e9db2eed_-_DIVYAM_TALWAR_wnepkx.png' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/divyam-talwar-b68192216/',instagram: '' },

   
    { id: 19, name: 'Aditya Narang', title: 'Creative Head',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746979/esummit/1698256499372_-_Aditya_Narang_kugqbi.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/aditya-n-045977253/' ,instagram: ''},
    { id: 20, name: 'Priyanshu Jain', title: 'Creative Head',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746988/esummit/priyanshu_mb9h79.png' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in' },
    { id: 21, name: 'Aditya', title: 'Graphic Designer',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746979/esummit/IMG_0529_-_ADITYA_LNMIIT_rqrrrz.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'',instagram: '' },
    { id: 22, name: 'Rajdeep Singh', title: '+91 8949088349',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746981/esummit/IMG_20221030_001112_-_Rajdeep_Singh_amrakf.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/rajdeep-singh-3b8381228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ,instagram: ''},
    { id: 23, name: 'Dharmraj Mandloi', title: '+91 6260737250',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746988/esummit/PSX_20230609_165016_-_Dharmraj_Mandloi_exkgfn.png' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/dharmraj-mandloi-13012002d?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',instagram: '' },
    { id: 24, name: 'Vayam Khandelwal ', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746981/esummit/IMG_20231228_200956_-_PULKIT_BOHRA_ejgkoa.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/vayamkh2003?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',instagram: '' },
    { id: 25, name: 'Aashrith', title: '',  photo:'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746981/esummit/IMG-20231212-WA0038_-_BOPPUDI_AASHRITH_afdjh1.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/aashrith-boppudi-28646b251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ,instagram: ''},
    { id: 26, name: 'Divyansh Agrawal ', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746978/esummit/IMG_3458_-_DIVYANSH_AGRAWAL_ou7fbr.png' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/divyansh-agrawal-790364259',instagram: '' },
    { id: 27, name: 'Saksham Goyal', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746981/esummit/IMG_20231003_014546_629_-_SAKSHAM_GOYAL_ulgfwp.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/saksham-goyal-964a3322b/' ,instagram: ''},
    { id: 28, name: 'Tushar Sukhwal', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746977/esummit/128734313_-_TUSHAR_SUKHWAL_avkg51.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/tushar-sukhwal-57463a251/',instagram: '' },
    { id: 29, name: 'Harsh Koringa', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746977/esummit/20231009_121952_-_HARSHKUMAR_RAMESHBHAI_KORINGA_pkuyx5.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/harsh-koringa-4a3530256' ,instagram: ''},
    { id: 30, name: 'Deepanshu Gupta ', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746981/esummit/IMG_20231108_104109_0003_-_DEEPANSHU_GUPTA_xyjdzm.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/deepanshu-gupta-676b35213/' ,instagram: ''},
    { id: 31, name: 'Harsh Bansal', title: 'Content Head',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008270/WhatsApp_Image_2023-11-28_at_10.17.33_PM_q0ilkd.jpg' ,gmail: '21ucc044@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/harsh-bansal-565351224/',instagram: '' },
    { id: 32, name: 'Akash Singh', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746980/esummit/IMG_0865_-_AKASH_SINGH_fswopu.png' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'',instagram: '' },
    { id: 33, name: 'Janak Ajmera', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746988/esummit/WhatsApp_Image_2023-12-28_at_23.29.42_a6739a1d_-_JANAK_AJMERA_sbxxiw.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'',instagram: '' },
    { id: 34, name: 'Naman Mohnani', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746988/esummit/WhatsApp_Image_2023-12-28_at_11.57.41_PM_-_NAMAN_JAYESH_MOHNANI_sd1b67.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'' ,instagram: ''},
    { id: 35, name: 'Ummang Mittal', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746988/esummit/Picsart_23-12-29_09-05-48-827_2_-_UMANG_MITTAL_vmsyfw.png' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'',instagram: '' },
    { id: 36, name: 'Pulkit Bohra', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746981/esummit/IMG_20231228_200956_-_PULKIT_BOHRA_ejgkoa.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'',instagram: '' },
    { id: 37, name: 'Aayush Shukla', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746981/esummit/IMG-20231023-WA0031_-_AAYUSH_SHUKLA_sl0sv2.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/aayush-shukla-297154256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',instagram: '' },
    { id: 38, name: 'Sanidhya Shankar', title: '',  photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704746979/esummit/20231214_141959_-_SANIDHYA_SHANKAR_PACHAURI_rinou8.jpg' ,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/sanidhya-shankar-b2abbb253',instagram: '' },

  ];
  for (const member of summitMembers) {
    const matchingData = newData.find((entry) => entry.name.toLowerCase() === member.name.toLowerCase());
    if (matchingData) {
      member.instagram = matchingData.instagram;
      member.linkedin = matchingData.linkedin;
      member.gmail = matchingData.gmail;
    }
  }
  
  // console.log(summitMembers);
