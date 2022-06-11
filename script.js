 const baseUrl = "https://collectionapi.metmuseum.org/public/collection/v1/";
const deptUrl = baseUrl + "departments";
const artUrl = baseUrl + "objects/14703";

export default class ArtHelper {
  async init() {
    let artDepartments = await this.makeRequest(deptUrl);
    let artWorks = await this.makeRequest(artUrl);
    console.log(artDepartments);
    console.log(artWorks);
    this.clickableDeptList(artDepartments);
   //  this.clickableArtistList(artWorks);
  }
  async makeRequest(url) {
    console.log("Request made");
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (err) {
      console.log(err);
    }
  }
  clickableDeptList(list) {
    // const element = document.getElementById(this.authorId);
    // const authorHtml = this.quoteAuthors.map(author => `<option value="${author}">${author}</option>`);
    // element.innerHTML = authorHtml.join('');

    // let option = `<option value="${list.departments[i].displayName}">${list.departments[i].displayName}</option>`;
    // element.appendChild(option);

    const element = document.getElementById("department-select");
    // console.log("this is the departments:" + list.departments[0].displayName);
    for (let i = 0; i < 19; i++) {
      let content = document.createTextNode(
        `${list.departments[i].displayName}`
      );
      let option = document.createElement("option");
      option.appendChild(content);
      option.setAttribute("value", content);
      element.appendChild(option);
    }
  }

//   clickableArtistList(list) {

//    //extractAuthors() {
//       //Sets automatically remove diplicate records. So if we use .map to send 
//       // just the author for each quote into a Set it will give us a distinct list.
//       // const authors = new Set(this.quotes.map(quote => quote.author));
//       // We need to turn our list back into an Array. Using the Spread operator is a slick way to do this.
//       // return [...authors];

//     const element = document.getElementById("artist-select");
//     for (let i = 0; i < length.list; i++) {
//       const artists = new Set()

//       let content = document.createTextNode(
//         `${list.}`
//       );
//       let option = document.createElement("option");
//       option.appendChild(content);
//       option.value = content;
//       element.appendChild(option);
//     }
//   }
}
