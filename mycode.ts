type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string;
};
const myCourses: Array<Course> = [];
var course1: Course = {
    courseNumber: "101",
    courseName: "Intro to Comp Sci",
    semesterTaken: "W21",
};
var course1: Course = {
    courseNumber: "357",
    courseName: "Mobile App Dev",
    semesterTaken: "W23",
};
var course2: Course = {
    courseNumber: "371",
    courseName: "Web App Dev",
    semesterTaken: "W23",
};
var course3: Course = {
    courseNumber: "376",
    courseName: "Game Dev",
    semesterTaken: "W23",
};
var course4: Course = {
    courseNumber: "100",
    courseName: "Reflect, Connect, Engage",
    semesterTaken: "W23",
};
var course5: Course = {
    courseNumber: "365",
    courseName: "Applied AI",
    semesterTaken: "W22",
};
var course6: Course = {
    courseNumber: "452",
    courseName: "OS Concepts",
    semesterTaken: "W22",
};
var course7: Course = {
    courseNumber: "340",
    courseName: "Religion and Pop Culture",
    semesterTaken: "W22",
};
var course8: Course = {
    courseNumber: "467",
    courseName: "Senior Project",
    semesterTaken: "W22",
};
myCourses.push(course1);
myCourses.push(course2);
myCourses.push(course3);
myCourses.push(course4);
myCourses.push(course5);
myCourses.push(course6);
myCourses.push(course7);
myCourses.push(course8);

const tableNode: HTMLTableElement = document.createElement("table");
const tableBody = tableNode.appendChild(document.createElement("tbody"));

const row = tableBody.appendChild(document.createElement("tr"));
const header1 = row.appendChild(document.createElement("th"));
const header2 = row.appendChild(document.createElement("th"));
const header3 = row.appendChild(document.createElement("th"));
header1.innerHTML = "Course Number";
header2.innerHTML = "Course Name";
header3.innerHTML = "Semester Taken";

for (var course of myCourses) {
    const row = tableBody.appendChild(document.createElement("tr"));
    const cell1 = row.appendChild(document.createElement("td"));
    const cell2 = row.appendChild(document.createElement("td"));
    const cell3 = row.appendChild(document.createElement("td"));
    cell1.innerHTML = course.courseNumber;
    cell2.innerHTML = course.courseName;
    cell3.innerHTML = course.semesterTaken;
}
const tArea4 = document.getElementById("area4-table");
if (tArea4 != null) {
    tArea4.appendChild(tableNode);
}

//area 6
type Company = {
    name: string; // Ex: "MSFT"
    abbreviation: string; // Ex: Microsoft
    url: string; // Ex: https://microsoft.com
};
var companies: Array<Company> = [];
var FB: Company = {
    name: "Facebook",
    abbreviation: "FB",
    url: "https://facebook.com",
};
var OST: Company = {
    name: "Open Systems Technologies",
    abbreviation: "OST",
    url: "https://ostusa.com",
};
var MSFT: Company = {
    name: "Microsoft",
    abbreviation: "MSFT",
    url: "https://microsoft.com",
};
var APPL: Company = {
    name: "Apple",
    abbreviation: "APPL",
    url: "https://apple.com",
};
companies.push(FB);
companies.push(OST);
companies.push(MSFT);
companies.push(APPL);

const ListNode: HTMLUListElement = document.createElement("ul");
for (var company of companies) {
    const ListItem = ListNode.appendChild(document.createElement("li"));
    const link = ListItem.appendChild(document.createElement("a"));
    link.setAttribute("href", company.url);
    link.innerHTML = company.abbreviation;
}

const lArea6 = document.getElementById("area6-list");
if (lArea6 != null) {
    lArea6.appendChild(ListNode);
}

//area 8
type SocialMedia = {
    icon: string; // this can be a name of a local image or a URL to a remote image
    url: string; // URL of the said social media company
    alt: string; // alternative text for the image
};
var socialMedia: Array<SocialMedia> = [];
var linkedin: SocialMedia = {
    icon: "linkedin.png",
    url: "https://linkedin.com",
    alt: "LinkedIn",
};
var facebook: SocialMedia = {
    icon: "fb.png",
    url: "https://facebook.com",
    alt: "Facebook",
};
var twitter: SocialMedia = {
    icon: "twit.png",
    url: "https://twitter.com",
    alt: "Twitter",
};
var amazon: SocialMedia = {
    icon: "amz.jpg",
    url: "https://amazon.com",
    alt: "Amazon",
};
var github: SocialMedia = {
    icon: "gh.png",
    url: "https://github.com",
    alt: "Github",
};
var crunchyroll: SocialMedia = {
    icon: "cr.png",
    url: "https://crunchyroll.com",
    alt: "CrunchyRoll",
};
socialMedia.push(linkedin);
socialMedia.push(facebook);
socialMedia.push(twitter);
socialMedia.push(amazon);
socialMedia.push(github);
socialMedia.push(crunchyroll);

const area8 = document.getElementById("area8");
if (area8 != null) {
    for (var sm of socialMedia) {
        const link = area8.appendChild(document.createElement("a"));
        link.setAttribute("href", sm.url);
        const img = link.appendChild(document.createElement("img"));
        img.setAttribute("src", sm.icon);
        img.setAttribute("alt", sm.alt);

        area8.appendChild(link);
    }
}
