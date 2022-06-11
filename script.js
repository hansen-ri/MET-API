const baseUrl = "https://collectionapi.metmuseum.org/public/collection/v1/";
const deptUrl = baseUrl + "departments";
const artUrl = baseUrl + "objects";


export default class ArtHelper {
  async init() {
    this.artDepartments = await this.makeRequest(deptUrl);
    this.artWorks = await this.makeRequest(artUrl);
    console.log(this.artDepartments);
    console.log(this.artWorks);
    this.clickableDeptList(this.artDepartments);
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
    const element = document.getElementById("department-select");
    console.log(list);
    // console.log("this is the departments:" + list.departments[0].displayName);
      // let menuContent = list.departments[i].displayName;
      // let menuOption = document.createElement("option");
      // menuOption.value = item.displayName
    for (let i = 0; i < 21; i++) {
      let content = document.createTextNode(
        `${list.departments[i].displayName}`
      );
      let option = document.createElement("option");
      option.appendChild(content);
      // option.setAttribute("value", content);
      option.value = i.content;
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
