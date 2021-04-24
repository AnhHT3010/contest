import ComicContainer from "./Comiccontainer.js";

const $template = document.createElement('template');
$template.innerHTML =`
    <div class = "comic-list">
    </div>
`;

export default class ComicList extends HTMLElement {
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$list = this.querySelector('.comic-list')
    }
    
    static get observedAttributes() {
        return ['comics'];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'comics'){
            let data = JSON.parse(newValue);
            console.log(data);
            for(let comicData of data){
                let $comicContainer = new ComicContainer();
                $comicContainer.setAttribute('id',comicData.id);
                $comicContainer.setAttribute('name',comicData.name);
                $comicContainer.setAttribute('gender',comicData.gender);
                $comicContainer.setAttribute('country',comicData.country);
                $comicContainer.setAttribute('phoneNumber',comicData.phoneNumber);
                $comicContainer.setAttribute('favorites',comicData.favorites);
                $comicContainer.setAttribute('avatar',comicData.avatar);
                this.$list.appendChild($comicContainer);
            }
        }
    }
    // return ['name', 'gender', 'country','phoneNumber', 'favorites','avatar']
}
window.customElements.define('comic-list', ComicList);