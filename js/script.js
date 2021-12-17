const   $ = (x) => document.querySelector(x)
const   $$ = (x) => document.querySelectorAll(x)
//  var
const   body = $('body')
const   LeftBtn = $('.container__nav-selector__btn1')
const   RightBtn = $('.container__nav-selector__btn2')
const   containerNav = $('.container__nav') 
const   containerNavSelectorHeading = $('.container__nav-selector--heading') 
const   containerNavAbout = $('.container__nav-about') 
const   containerList = $('.container__list')
const   Header = $('.header')
const   Container = $('.container')
const   HeaderSearchInput = $('.header-search__input')
const   HeaderResultList = $('.header-result__list')
const   DeleteChar = $('.header-search__btn--del')
const   Voice = $('.Voice')
const   ScreenQuestion = $('.Screen')

let     SourceVoiceContainer
let     SubChemicalContainer
let     ListShowContainer 
let     ListPlayContainer 
let     SourceVoiceHeader
let     SubChemicalHeader
let     ListShowHeader
let     ListPlayHeader
let     ListQuestion 

const app = {
    current: 0,
    Types: [
        {
            name: 'Element',
            array: NguyenTo,
            about: ' là chất hóa học tinh khiết, bao gồm một kiểu nguyên tử, được phân biệt bởi số hiệu nguyên tử, là số lượng proton có trong mỗi hạt nhân.'
        },
        {
            name: 'Acid',
            array: Axit,
            about: ' là hợp chất hóa học mà trong thành phần phân tử của các chất đó đều có chứa 1 hay nhiều nguyên tử hiđro liên kết với gốc axit.'
        },
        {
            name: 'Base',
            array: Bazo,
            about: ' là hợp chất hóa học mà phân tử của nó bao gồm có một nguyên tử kim loại liên kết với một hay nhiều nhóm hidroxit (OH), Trong đó hóa trị của kim loại bằng số nhóm hidroxit.'
        },
        {
            name: 'Oxide',
            array: Oxit,
            about: ' là hợp chất hóa học có chứa hai nguyên tố, trong đó có một nguyên tố là oxi.<br> Công thức chung của oxit là: MxOy.'
        },
        {
            name: 'Salt',
            array: Muoi,
            about: ' là hợp chất hóa học bao gồm một tổ hợp ion của các cation và anion . Muối bao gồm số lượng liên quan của các cation (ion mang điện tích dương) và anion (ion mang điện tích âm) để sản phẩm là trung hòa về điện (không có điện tích thực).'
        },
        {
            name: 'Terminology',
            array: ThuatNgu,
            about: ' hóa học là những từ ngữ biểu thị khái niệm hóa học, chủ yếu để dùng trong các văn bản khoa học về hóa học và trong giảng dạy.'
        },
        {
            name: 'Others',
            array: Khac,
            about: ''
        },
        {
            name: 'Practie',
            array: CauHoi,
            about: ''
        }
    ],
    render: function () {
        let  index = app.current
        let  object = app.Types[index]
        containerNavSelectorHeading.innerHTML = `<h1>${object.name}</h1>`

        if(index < 7) {

            if(index != 6) {
                containerNavAbout.style.display = 'block'
                containerNavAbout.innerHTML = `<b>${object.name} là gì?</b><p><b>${object.name}</b>${object.about}</p>`
            } else {
                containerNavAbout.style.display = 'none'
            }

            let htmls = object.array.map(Item => {
                return `
                <div class="chemical">
                    <div class="chemical--primary chemical__item">
                        <div class="chemical--primary-heading chemical__item-heading">
                            <div class="chemical--primary-heading--first chemical__item-heading--first"><b>${Item.symbol}</b></div>
                        </div>
                        <div class="chemical--primary-option chemical__item-option">
                            <ion-icon name="volume-high-sharp"></ion-icon>
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
            containerList.innerHTML = htmls.join('')

            SubChemicalContainer = $$('.container .chemical--secondary')
            SourceVoiceContainer = $$('.container .Source')
            ListShowContainer = $$('.container .chemical--primary-option')
            ListPlayContainer = $$('.container .chemical--secondary-option')
            
            for(let i = 0; i < ListShowContainer.length; ++i) {
                ListShowContainer[i].onclick = () => {
                    SubChemicalContainer[i].style.display = (SubChemicalContainer[i].style.display == 'none') ? 'flex' : 'none'
                }

                ListPlayContainer[i].onclick = () => {
                    Voice.src = `https://res.cloudinary.com/mysound/video/upload/v1638146911/am-thanh/${SourceVoiceContainer[i].innerHTML}`
                    Voice.play()  
                }
            }
        
        } else {
            containerNavAbout.style.display = 'none'

            let  count = 0
            let  htmls = object.array.map(Item => {
                return `
                <button class="ToQuestion">
                    <p>Câu hỏi số ${++count}</p>
                    <div class="icon">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </button>
                `
            })
            containerList.innerHTML = htmls.join('')

            ListQuestion = $$('.ToQuestion')

            for(let i = 0; i < ListQuestion.length; ++i) {
                ListQuestion[i].onclick = () => {
                    Header.style.display = 'none'
                    Container.style.display = 'none'
                    ScreenQuestion.style.display = 'flex'
                    let Question = CauHoi[i]
                    ScreenQuestion.innerHTML = `         
                        <button class="BackBtn" title="Quay Lại">
                            <ion-icon name="return-down-back-outline"></ion-icon>
                        </button>
                
                        <div class="Main">
                            <div class="Question">
                                <p>${i + 1}. ${Question.question}</p>
                            </div>
                            <div class="Select">
                                <div class="Choose">
                                    <p style = "margin-right: 7px;">A.</p><p> ${Question.ansA}</p>
                                </div>
                                <div class="Choose">
                                    <p style = "margin-right: 7px;">B.</p><p> ${Question.ansB}</p>
                                </div>
                                <div class="Choose">
                                    <p style = "margin-right: 7px;">C.</p><p> ${Question.ansC}</p>
                                </div>
                                <div class="Choose">
                                    <p style = "margin-right: 7px;">D.</p><p> ${Question.ansD}</p>
                                </div>
                                <p style = "display: none;">${Question.res}</p>
                            </div>
                        </div>
                    `
                    Back = $('.BackBtn')
                    Back.onclick = () => {
                        ScreenQuestion.style.display = 'none'
                        Header.style.display = 'block'
                        Container.style.display = 'block'
                    }                    

                    let ListChoose = $$('.Choose')

                    for(let j = 0; j < ListChoose.length; ++j) {
                        ListChoose[j].onclick = () => {
                            if(j + 1 + '' == Question.res) {
                                ListChoose[j].style.color = '#00aa00'   
                                ListChoose[j].style.fontSize = '1.3rem'   
                                alert('Chúc mừng ! Đáp án chính xác')
                                ListQuestion[i].classList.add('Success') 
                                ListQuestion[i].classList.remove('Failure') 
                            } else {
                                ListChoose[j].style.color = 'red'   
                                
                                if( ListChoose[Question.res - 1].style.color != '#00aa00') {
                                    ListQuestion[i].classList.add('Failure') 
                                    ListQuestion[i].classList.remove('Success')   
                                }   

                            }
                        }
                    }
                }
            }
        }

        


    },
    change: function () {
        LeftBtn.onclick = () => {
            app.current = (app.current + 8 - 1) % 8;
            app.render()
        }
        RightBtn.onclick = () => {
            app.current = (app.current + 8 + 1) % 8;
            app.render()
        }
    },
    search: function () {
        HeaderSearchInput.onkeyup = ( e ) => {
            let UserData = e.target.value
            if( UserData ) {
                let Name = ToChemicalName(UserData).toLowerCase()
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
                    let x = (a.symbol.toLowerCase().indexOf(UserData) == 0) ? 100 : 0
                    let y = (b.symbol.toLowerCase().indexOf(UserData) == 0) ? 100 : 0
                    if(a.symbol.toLowerCase().length > b.symbol.toLowerCase().length) x -= 10; else y -= 10
                    return y - x;
                })
                for(let i = 0; i < Result.length; ++i) {
                    if(Result[i].symbol.toLowerCase() == Name) {
                        Result.unshift(Result[i])
                        for(j = i+1; j < Result.length-1; ++j) Result[j] = Result[j+1]
                        Result.pop()
                        break
                    }
                }
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
                                    <ion-icon name="volume-high-sharp"></ion-icon>
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
                        // Voice.src = `/audio/${SourceVoiceHeader[i].innerHTML}`
                        Voice.src = `https://res.cloudinary.com/mysound/video/upload/v1638146911/am-thanh/${SourceVoiceHeader[i].innerHTML}`
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
        app.render()
        app.change()
        app.search()
    }
}

app.start()
document.cookie = "SameSite=None"
document.cookie = "Secure"
