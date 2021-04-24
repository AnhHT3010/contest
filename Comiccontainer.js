const $template = document.createElement('template');
$template.innerHTML = `
    <div class="contain-prf">
        <div class="contain-avatar"></div>   
        <div class="contain-inf">
            <div class="contain-name">John Doe</div>
            <div class="contain-gender">Male</div>
            <div class="contain-local">
                <div class="contain-country">VietNam</div>
                <div class="contain-phoneNumber">+1 619 657 8975</div>
            </div> 
        </div>
        <hr>
        <div class="contain-favorites">Music</div>
    </div> 
`;

export default class ComicContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$name = this.querySelector('.contain-name');
        this.$gender = this.querySelector('.contain-gender');
        this.$avatar = this.querySelector('.contain-avatar');
        this.$country = this.querySelector('.contain-country');        
        this.$phoneNumber = this.querySelector('.contain-phoneNumber');
        this.$favorites = this.querySelector('.contain-favorites');
    }

    // định nghĩa thuộc tính cho thẻ
    static get observedAttributes() {
        return ['name', 'gender', 'country','phoneNumber', 'favorites','avatar']
    }
    // chạy khi giá trị của thuộc tính (được định nghĩa ở trên) thay đổi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'name') {
            this.$name.innerHTML = newValue;
        }
        else if (attrName == 'gender') {
            this.$gender.innerHTML = newValue;
        }
        else if (attrName == 'country') {
            this.$country.innerHTML = newValue;
        }
        else if (attrName == 'phoneNumber') {
            this.$phoneNumber.innerHTML = newValue;
        }
        else if (attrName == 'favorites') {
            this.$favorites.innerHTML = newValue;
        } 
        else if (attrName == 'avatar') {
            this.$avatar.style.backgroundImage = `url('${newValue}')`;
        }
    }
}
window.customElements.define('contain-prf', ComicContainer);