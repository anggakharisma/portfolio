import clof from './assets/clof.jpg';
import goopan from './assets/goopan.jpg';
import iapat from './assets/iapat.jpg';
import menswear from './assets/menswear.jpg';

const works = document.querySelector("#works");

const data = [
    {
        title: "CLOF - Ecommerce",
        desc: "Next.js (React), Express, MongoDB",
        picture: clof,
        isSample: true,
        codeLink: "https://github.com/anggakharisma/clof",
        liveLink: "https://arcane-brook-65390.herokuapp.com/"
    },
    {
        title: "MENSWEAR - Ecommerce",
        desc: "Vue, Express, MongoDB",
        picture: menswear,
        isSample: true,
        codeLink: "https://github.com/anggakharisma/menswear-front",
        liveLink: "https://github.com/anggakharisma/menswear"
    },
    {
        title: "GOOPAN - Web Design",
        desc: "HTML, CSS, Javascript",
        picture: goopan,
        isSample: true,
        codeLink: "",
        liveLink: "https://keen-nobel-02e821.netlify.com/"

    },
    {
        title: "IAPAT UNDIP - Alumnus Website",
        desc: "Laravel",
        picture: iapat,
        isSample: false,
        codeLink: "",
        liveLink: "https://iapat-undip.or.id"
    }
]





for (let i = 0; i < data.length; i++) {
    const elementToInsert = `
            <div class="works--card">
                <h3>${data[i].title}</h3>
                <p>Tech Used : ${data[i].desc}</p>
                <div class="works--card--screenshot">
                    <div class="works--card--screenshot--overlay">
                        ${data[i].isSample ? `<a class="works--card--screenshot--overlay--code--link" href="${data[i].codeLink}" target="_blank">CODE</a>` : ''}
                        <a class="works--card--screenshot--overloy-live-link" href="${data[i].liveLink}" target="_blank">LIVE</a>
                    </div>
                    ${data[i].isSample ? '<span>Sample</span>' : ''}
                    <img src="${data[i].picture}" alt="Project image for clof" />
                </div>
            </div>`;
    works.insertAdjacentHTML('beforeend', elementToInsert);
}