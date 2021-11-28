const   $ = (x) => document.querySelector(x)
const   $$ = (x) => document.querySelectorAll(x)
//  var
const   containerNavSelectorHeading = $('.container__nav-selector--heading') 
const   containerNavAbout = $('.container__nav-about') 
const   containerList = $('.container__list')
const   HeaderSearchInput = $('.header-search__input')
const   HeaderResultList = $('.header-result__list')
const   DeleteChar = $('.header-search__btn--del')

let     SubChemiCalContainer
let     ListAudioContainer 
let     ListShowContainer 
let     ListPlayContainer 

let     SubChemiCalHeader
let     ListAudioHeader
let     ListShowHeader
let     ListPlayHeader


// Code

const   app = {  
    current: 1,
    Types : [
        {
            name: 'Nguyên tố',
            array: NguyenTo,
            about: ' là một chất hóa học tinh khiết, bao gồm một kiểu nguyên tử, được phân biệt bởi số hiệu nguyên tử, là số lượng proton có trong mỗi hạt nhân.'
        },
        {
            name: 'Axit',
            array: Axit,
            about: ' là một hợp chất hóa học mà trong thành phần phân tử của các chất đó đều có chứa 1 hay nhiều nguyên tử hiđro liên kết với gốc axit.'
        },
        {
            name: 'Bazơ',
            array: Bazo,
            about: ' là hợp chất hóa học mà phân tử của nó bao gồm có một nguyên tử kim loại liên kết với một hay nhiều nhóm hidroxit (OH), Trong đó hóa trị của kim loại bằng số nhóm hidroxit.'
        },
        {
            name: 'Oxit',
            array: Oxit,
            about: ' là một hợp chất hóa học có chứa hai nguyên tố, trong đó có một nguyên tố là oxi.<br> Công thức chung của oxit là: MxOy.'
        },
        {
            name: 'Muối',
            array: Muoi,
            about: ' là một hợp chất hóa học bao gồm một tổ hợp ion của các cation và anion . Muối bao gồm số lượng liên quan của các cation (ion mang điện tích dương) và anion (ion mang điện tích âm) để sản phẩm là trung hòa về điện (không có điện tích thực).'
        },
        {
            name: 'Thuật ngữ',
            array: ThuatNgu,
            about: ' là những từ ngữ biểu thị khái niệm khoa học công nghệ, chủ yếu để dùng trong các văn bản khoa học công nghệ.'
        },
        {
            name: 'Khác',
            array: Khac,
            about: ''
        }
    ],
    renderMap: function ( current ) {
        let Obj = this.Types[current]
        containerNavSelectorHeading.innerHTML = `<h1>${Obj.name}</h1>`
        containerNavAbout.innerHTML = (current != 6) ? `<b>${Obj.name} là gì?</b><p><b>${Obj.name}</b>${Obj.about}</p>` : ''
        let Arr = Obj.array
        let html = Obj.array.map(Item => {
            return `
                <div class="chemical">
                    <div class="chemical--primary chemical__item">
                        <div class="chemical--primary-heading chemical__item-heading">
                            <div class="chemical--primary-heading--first chemical__item-heading--first"><b>${Item.symbol}</b></div>
                        </div>
                        <div class="chemical--primary-option chemical__item-option">
                            <ion-icon name="star-sharp"></ion-icon>
                        </div>
                    </div>
                    <div class="chemical--secondary chemical__item" style="display: none;">
                        <div class="chemical--secondary-heading chemical__item-heading">
                            <div class="chemical--secondary-heading--first chemical__item-heading--first"><b>${Item.name}</b></div>
                            <div class="chemical--secondary-heading--last chemical__item-heading--child"><b>${Item.transcribe}</b></div>
                        </div>
                        <div class="chemical--secondary-option chemical__item-option">
                            <ion-icon name="volume-high-sharp"></ion-icon>
                        </div>
                    </div>
                    <audio src="${Item.sound}" class = "container__audio"></audio>
                </div>
            `
        })
        containerList.innerHTML = html.join('')
        ListAudioContainer = $$('.container__audio')
        ListShowContainer = $$('.container .chemical--primary-option')
        ListPlayContainer = $$('.container .chemical--secondary-option')
        SubChemiCalContainer = $$('.container .chemical--secondary')


        for(let i = 0; i < ListShowContainer.length; ++i) {
            ListShowContainer[i].onclick = () => {
                SubChemiCalContainer[i].style.display = ( SubChemiCalContainer[i].style.display == 'none') ? 'flex' : 'none'
            }
            ListPlayContainer[i].onclick = () => {
                ListAudioContainer[i].play()
            }
        }
    },
    handleChangeMap: function( ) {
        let Left = $('.container__nav-selector__btn1')
        let Right = $('.container__nav-selector__btn2')
        Left.onclick = () => {
            this.current = (this.current == 0) ? 6 : this.current - 1;
            this.renderMap(this.current)
        }
        Right.onclick = () => {
            this.current = (this.current == 6) ? 0 : this.current + 1;
            this.renderMap(this.current)
        }
    },
    search: function () {
        HeaderSearchInput.onkeyup = (e) => {
            let UserData = e.target.value
            if( UserData ) {
                const   check = ( obj ) => {
                    const SubCheck = (s, st) => {
                        s = s.toLowerCase()
                        st = st.toLowerCase()
                        let i = 0
                        for(let j = 0; j < st.length; ++j) i = (s[i] == st[j]) ? i + 1 : i
                        return i == s.length
                    }
                    return (SubCheck(UserData,obj.symbol))
                }
                let Result = Items.filter(check)
                Result.sort((a,b) => {
                    let     str = UserData[0].toLowerCase()
                    let     x = a.symbol.indexOf(str)
                    let     y = b.symbol.indexOf(str)
                    return x - y
                })
                while( Result.length > 10) Result.pop()
                let htmls = Result.map(Item => {
                    return `
                    <div class="chemical">
                        <div class="icon">
                            <ion-icon name="search-outline"></ion-icon>
                        </div>
                        <div class="content">
                            <div class="chemical--primary chemical__item">
                                <div class="chemical--primary-heading chemical__item-heading">
                                    <div class="chemical--primary-heading--first chemical__item-heading--first"><p>${Item.symbol}</p></div>
                                    <div class="chemical--primary-heading--last chemical__item-heading--last"><p>${Item.type}</p></div>
                                </div>
                                <div class="chemical--primary-option chemical__item-option">
                                    <ion-icon name="star-sharp"></ion-icon>
                                </div>
                            </div>
                            <div class="chemical--secondary chemical__item" style="display: none;">
                                <div class="chemical--secondary-heading chemical__item-heading">
                                    <div class="chemical--secondary-heading--first chemical__item-heading--first"><p>${Item.name}</p></div>
                                    <div class="chemical--secondary-heading--last chemical__item-heading--child"><p>${Item.transcribe}</p></div>
                            </div>
                        <div class="chemical--secondary-option chemical__item-option">
                            <ion-icon name="volume-high-sharp"></ion-icon>
                        </div>
                    </div>
                            <audio src="${Item.sound}" class = "header__audio"></audio>
                        </div>
                    </div>
                    `
                })
                HeaderResultList.innerHTML = htmls.join('')
                DeleteChar.style.display = 'flex'
                DeleteChar.onclick = () => {
                    HeaderSearchInput.value = ''
                    HeaderResultList.innerHTML = ''
                    DeleteChar.style.display = 'none'
                }

                SubChemiCalHeader = $$('.header .chemical--secondary')
                ListAudioHeader  = $$('.header__audio')
                ListShowHeader  = $$('.header .chemical--primary-option ')
                ListPlayHeader  = $$('.header .chemical--secondary-option')
                for(let i = 0; i < ListShowHeader.length; ++i) {
                    ListShowHeader[i].onclick = () => {
                        SubChemiCalHeader[i].style.display = ( SubChemiCalHeader[i].style.display == 'none') ? 'flex' : 'none'
                    }
                    ListPlayHeader[i].onclick = () => {
                        ListAudioHeader[i].play()
                    }
                }

                

            } else {
                HeaderResultList.innerHTML = ''
                DeleteChar.style.display = 'none'
            }
        }
    },
    start: function () {
        this.renderMap(this.current)
        this.handleChangeMap()
        this.search()
    }
}

app.start()
