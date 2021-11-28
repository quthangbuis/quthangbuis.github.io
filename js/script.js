const   $ = (x) => document.querySelector(x)
const   $$ = (x) => document.querySelectorAll(x)

//  var
const  containerNavSelectorHeading = $('.container__nav-selector--heading') 
const  containerNavAbout = $('.container__nav-about') 
const  containerList = $('.container__list')


// Code

const   app = {  
    current: 4,
    Types : [
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
            name: 'Nguyên tố',
            array: NguyenTo,
            about: ' là một chất hóa học tinh khiết, bao gồm một kiểu nguyên tử, được phân biệt bởi số hiệu nguyên tử, là số lượng proton có trong mỗi hạt nhân.'
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
        containerNavAbout.innerHTML = `<b>${Obj.name} là gì?</b>
        <p><b>${Obj.name}</b>${Obj.about}</p>`

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
                    <div class="chemical--secondary chemical__item">
                        <div class="chemical--secondary-heading chemical__item-heading">
                            <div class="chemical--secondary-heading--first chemical__item-heading--first"><b>${Item.name}</b></div>
                            <div class="chemical--secondary-heading--last chemical__item-heading--child"><b>${Item.transcribe}</b></div>
                        </div>
                        <div class="chemical--secondary-option chemical__item-option">
                            <ion-icon name="volume-high-sharp"></ion-icon>
                        </div>
                    </div>
                </div>
            `
        })
        containerList.innerHTML = html.join('')
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
    start: function () {
        this.renderMap(this.current)
        this.handleChangeMap()
    }
}

app.start()
