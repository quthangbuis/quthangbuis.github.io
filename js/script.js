const   $ = (x) => document.querySelector(x)
const   $$ = (x) => document.querySelectorAll(x)
//  var
const   LeftBtn = $('.container__nav-selector__btn1')
const   RightBtn = $('.container__nav-selector__btn2')
const   containerNav = $('.container__nav') 
const   containerNavSelectorHeading = $('.container__nav-selector--heading') 
const   containerNavAbout = $('.container__nav-about') 
const   containerList = $('.container__list')
const   HeaderSearchInput = $('.header-search__input')
const   HeaderResultList = $('.header-result__list')
const   DeleteChar = $('.header-search__btn--del')
const   Voice = $('.Voice')
let     SourceVoiceContainer
let     SubChemicalContainer
let     ListShowContainer 
let     ListPlayContainer 
let     SourceVoiceHeader
let     SubChemicalHeader
let     ListShowHeader
let     ListPlayHeader

const   app = {
    current: 0,
    Types: [
        {
            name: 'Nguyên tố',
            array: NguyenTo,
            about: ' là chất hóa học tinh khiết, bao gồm một kiểu nguyên tử, được phân biệt bởi số hiệu nguyên tử, là số lượng proton có trong mỗi hạt nhân.'
        },
        {
            name: 'Axit',
            array: Axit,
            about: ' là hợp chất hóa học mà trong thành phần phân tử của các chất đó đều có chứa 1 hay nhiều nguyên tử hiđro liên kết với gốc axit.'
        },
        {
            name: 'Bazơ',
            array: Bazo,
            about: ' là hợp chất hóa học mà phân tử của nó bao gồm có một nguyên tử kim loại liên kết với một hay nhiều nhóm hidroxit (OH), Trong đó hóa trị của kim loại bằng số nhóm hidroxit.'
        },
        {
            name: 'Oxit',
            array: Oxit,
            about: ' là hợp chất hóa học có chứa hai nguyên tố, trong đó có một nguyên tố là oxi.<br> Công thức chung của oxit là: MxOy.'
        },
        {
            name: 'Muối',
            array: Muoi,
            about: ' là hợp chất hóa học bao gồm một tổ hợp ion của các cation và anion . Muối bao gồm số lượng liên quan của các cation (ion mang điện tích dương) và anion (ion mang điện tích âm) để sản phẩm là trung hòa về điện (không có điện tích thực).'
        },
        {
            name: 'Thuật ngữ',
            array: ThuatNgu,
            about: ' hóa học là những từ ngữ biểu thị khái niệm hóa học, chủ yếu để dùng trong các văn bản khoa học về hóa học và trong giảng dạy.'
        },
        {
            name: 'Khác',
            array: Khac,
            about: ''
        }
    ],
    render_map: function () {
        let  object = this.Types[this.current]
        // Nav
            containerNavSelectorHeading.innerHTML = `<h1>${object.name}</h1>`
            if( this.current < 6 ) {
                containerNavAbout.style.display = 'block'
                containerNavAbout.innerHTML = `<b>${object.name} là gì?</b><p><b>${object.name}</b>${object.about}</p>`
            } else {
                containerNavAbout.style.display = 'none'
            }
                // List
        let  html = object.array.map(Item => {
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
                <p class = "Source" style="display: none;">${Item.sound}</p>
            </div>`
        })
        containerList.innerHTML = html.join('')
        // Get Data
        SubChemicalContainer = $$('.container .chemical--secondary')
        SourceVoiceContainer = $$('.container .Source')
        ListShowContainer = $$('.container .chemical--primary-option')
        ListPlayContainer = $$('.container .chemical--secondary-option')
        
        // Handle
        
        for(let i = 0; i < ListShowContainer.length; ++i) {
            ListShowContainer[i].onclick = () => {
                SubChemicalContainer[i].style.display = (SubChemicalContainer[i].style.display == 'none') ? 'flex' : 'none'
            }
            ListPlayContainer[i].onclick = () => {
                Voice.src = SourceVoiceContainer[i].innerHTML
                Voice.play()
            }
        }
    },
    change_map: function () {
        LeftBtn.onclick = () => {
            this.current = (this.current + 6) % 7;
            this.render_map()
        }
        RightBtn.onclick = () => {
            this.current = (this.current + 8) % 7;
            this.render_map()
        }
    },
    search: function () {
        HeaderSearchInput.onkeyup = ( e ) => {
            let UserData = e.target.value
            if( UserData ) {
                console.log(UserData)
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
                    let x = 0
                    let y = 0
                    for(let i = 0; i < UserData.length; ++i)  {
                        x += a.symbol.indexOf(UserData[i].toLowerCase())
                        y += b.symbol.indexOf(UserData[i].toLowerCase())
                    }
                    return x - y
                })
                while( Result.length > 10 ) Result.pop()
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
                        </div>
                        <p class = "Source" style="display: none;">${Item.sound}</p>
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

                SubChemicalHeader = $$('.header .chemical--secondary')
                SourceVoiceHeader = $$('.header .Source')
                ListShowHeader = $$('.header .chemical--primary-option')
                ListPlayHeader = $$('.header .chemical--secondary-option')
                
                // Handle
                
                for(let i = 0; i < ListPlayHeader.length; ++i) {
                    ListShowHeader[i].onclick = () => SubChemicalHeader[i].style.display = (SubChemicalHeader[i].style.display == 'none') ? 'flex' : 'none'                        
                    ListPlayHeader[i].onclick = () => {
                        Voice.src = SourceVoiceHeader[i].innerHTML
                        Voice.play()
                    }
                }
            } else {
                HeaderResultList.innerHTML = ''
                DeleteChar.style.display = 'none'
            }
        }

        
    },
    start: function () {               
        this.render_map()
        this.change_map()
        this.search()
    }
}

app.start()

document.cookie = "SameSite=None"
document.cookie = "Secure"
