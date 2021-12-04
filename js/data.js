const  ToChemicalName = ( s ) => {
    if(s.length == 1) return s
    const   Number = (x) => '0123456789'.indexOf(x) > -1
    s = s + ' '
    let str = s[0]
    for(let i = 1; i < s.length - 1; ++i) {
        if(Number(s[i])) {
            if(Number(s[i-1])) {
                str += s[i] + '</sub>'
            } else if(Number(s[i+1])) {
                str += '<sub>' + s[i]
            } else {
                str += '<sub>' + s[i] + '</sub>'
            }
        } else str += s[i];
    }
    if(Number(s[s.length-1])) str += '<sub>' + s[s.length-1] + '</sub>'; else str += s[s.length-1] 
    return str;
}
const   ReCreateArray = (arr, nameOfArr) => {   
    arr.sort((a,b) => a.symbol.localeCompare(b.symbol))
    arr.map(Item => {
        Item.symbol = ToChemicalName(Item.symbol)
        Item.name.trim()    
        Item.transcribe.trim()    
        Item.sound.trim()
        Item.type = nameOfArr
    })
}

const   NguyenTo = [
        {
        name: "Hydrogen",
        symbol: "H",
        transcribe:"/ˈhaɪdrədʒən/",        
        sound: "1.mp3"        
        },
        {
        name: "Helium",
        symbol: "He",
        transcribe:"/ˈhiːliəm/",        
        sound: "2.mp3"        
        },
        {
        name: "Lithium",
        symbol: "Li",
        transcribe:"/ˈlɪθiəm/",        
        sound: "3.mp3"        
        },
        {
        name: "Beryllium",
        symbol: "Be",
        transcribe:"/bəˈrɪliəm/",        
        sound: "4.mp3"        
        },
        {
        name: "Boron",
        symbol: "B",
        transcribe:"/ˈbɔːrɒn/",        
        sound: "5.mp3"        
        },
        {
        name: "Carbon",
        symbol: "C",
        transcribe:"/ˈkɑːrbən/",        
        sound: "6.mp3"        
        },
        {
        name: "Nitrogen",
        symbol: "N",
        transcribe:"/ˈnaɪtrədʒən/",        
        sound: "7.mp3"        
        },
        {
        name: "Oxygen",
        symbol: "O",
        transcribe:"/ˈɒksɪdʒən/",        
        sound: "8.mp3"        
        },
        {
        name: "Fluorine",
        symbol: "F",
        transcribe:"/ˈflɔːriːn/",        
        sound: "9.mp3"        
        },
        {
        name: "Neon",
        symbol: "Ne",
        transcribe:"/ˈniːɒn/",        
        sound: "10.mp3"        
        },
        {
        name: "Sodium",
        symbol: "Na",
        transcribe:"/ˈsəʊdiəm/",        
        sound: "11.mp3"        
        },
        {
        name: "Magnesium",
        symbol: "Mg",
        transcribe:"/mæɡˈniːziəm/",        
        sound: "12.mp3"        
        },
        {
        name: "Aluminium",
        symbol: "Al",
        transcribe:"/ˌæləˈmɪniəm/",        
        sound: "13.mp3"        
        },
        {
        name: "Silicon",
        symbol: "Si",
        transcribe:"/ˈsɪlɪkən/",        
        sound: "14.mp3"        
        },
        {
        name: "Phosphorus",
        symbol: "P",
        transcribe:"/ˈfɒsfərəs/",        
        sound: "15.mp3"        
        },
        {
        name: "Sulfur",
        symbol: "S",
        transcribe:"/ˈsʌlfə(r)/",        
        sound: "16.mp3"        
        },
        {
        name: "Chlorine",
        symbol: "Cl",
        transcribe:"/ˈklɔːriːn/",        
        sound: "17.mp3"        
        },
        {
        name: "Argon",
        symbol: "Ar",
        transcribe:"/ˈɑːɡɒn/",        
        sound: "18.mp3"        
        },
        {
        name: "Potassium",
        symbol: "K",
        transcribe:"/pəˈtæsiəm/",        
        sound: "19.mp3"        
        },
        {
        name: "Calcium",
        symbol: "Ca",
        transcribe:"/ˈkælsiəm/",        
        sound: "20.mp3"        
        },
        {
        name: "Scandium",
        symbol: "Sc",
        transcribe:"/ˈskændiəm/",        
        sound: "21.mp3"        
        },
        {
        name: "Titanium",
        symbol: "Ti",
        transcribe:"/tɪˈteɪniəm/",        
        sound: "22.mp3"        
        },
        {
        name: "Vanadium",
        symbol: "V",
        transcribe:"/vəˈneɪdiəm/",        
        sound: "23.mp3"        
        },
        {
        name: "Chromium",
        symbol: "Cr",
        transcribe:"/ˈkrəʊmiəm/",        
        sound: "24.mp3"        
        },
        {
        name: "Manganese",
        symbol: "Mn",
        transcribe:"/ˈmæŋɡəniːz/",        
        sound: "25.mp3"        
        },
        {
        name: "Iron",
        symbol: "Fe",
        transcribe:"/ˈaɪən/<br> /ˈaɪərn/",        
        sound: "26.mp3"        
        },
        {
        name: "Cobalt",
        symbol: "Co",
        transcribe:"/ˈkəʊbɔːlt/",        
        sound: "27.mp3"        
        },
        {
        name: "Nickel",
        symbol: "Ni",
        transcribe:"/ˈnɪkl/",        
        sound: "28.mp3"        
        },
        {
        name: "Copper",
        symbol: "Cu",
        transcribe:"/ˈkɒpə(r)/",        
        sound: "29.mp3"        
        },
        {
        name: "Zinc",
        symbol: "Zn",
        transcribe:"/zɪŋk/",        
        sound: "30.mp3"        
        },
        {
        name: "Arsenic",
        symbol: "As",
        transcribe:"/ˈɑːsnɪk/",        
        sound: "31.mp3"        
        },
        {
        name: "Selenium",
        symbol: "Se",
        transcribe:"/səˈliːniəm/",        
        sound: "32.mp3"        
        },
        {
        name: "Bromine",
        symbol: "Br",
        transcribe:"/ˈbrəʊmiːn/",        
        sound: "33.mp3"        
        },
        {
        name: "Krypton",
        symbol: "Kr",
        transcribe:"/ˈkrɪptɒn/",        
        sound: "34.mp3"        
        },
        {
        name: "Rubidium",
        symbol: "Rb",
        transcribe:"/ruːˈbɪdiəm/",        
        sound: "35.mp3"        
        },
        {
        name: "Strontium",
        symbol: "Sr",
        transcribe:"/ˈstrɒntiəm/",        
        sound: "36.mp3"        
        },
        {
        name: "Palladium",
        symbol: "Pd",
        transcribe:"/pəˈleɪdiəm/",        
        sound: "37.mp3"        
        },
        {
        name: "Silver",
        symbol: "Ag",
        transcribe:"/ˈsɪlvər/",        
        sound: "38.mp3"        
        },
        {
        name: "Cadmium",
        symbol: "Cd",
        transcribe:"/ˈkædmiəm/",        
        sound: "39.mp3"        
        },
        {
        name: "Tin",
        symbol: "Sn",
        transcribe:"/tɪn/",        
        sound: "40.mp3"        
        },
        {
        name: "Iodine",
        symbol: "I",
        transcribe:"/ˈaɪədaɪn/",        
        sound: "41.mp3"        
        },
        {
        name: "Xenon",
        symbol: "Xe",
        transcribe:"/ˈzenɒn/",        
        sound: "42.mp3"        
        },
        {
        name: "Cesium",
        symbol: "Cs",
        transcribe:"/ˈsiːziəm/",        
        sound: "43.mp3"        
        },
        {
        name: "Barium",
        symbol: "Ba",
        transcribe:"/ˈbeəriəm/",        
        sound: "44.mp3"        
        },
        {
        name: "Platinum",
        symbol: "Pt",
        transcribe:"/ˈplætɪnəm/",        
        sound: "45.mp3"        
        },
        {
        name: "Gold",
        symbol: "Au",
        transcribe:"/ɡəʊld/",        
        sound: "46.mp3"        
        },
        {
        name: "Mercury",
        symbol: "Hg",
        transcribe:"/ˈmɜːkjəri/",        
        sound: "47.mp3"        
        },
        {
        name: "Lead",
        symbol: "Pb",
        transcribe:"/liːd/",        
        sound: "48.mp3"        
        },
        {
        name: "Francium",
        symbol: "Fr",
        transcribe:"/ˈfrænsiəm/",        
        sound: "49.mp3"        
        },
        {
        name: "Radium",
        symbol: "Ra",
        transcribe:"/ˈreɪdiəm/",        
        sound: "50.mp3"        
        },
        {
        name: "Actinium",
        symbol: "Ac",
        transcribe:"/ækˈtɪnɪəm/",        
        sound: "51.mp3"        
        },
        {
        name: "Thorium",
        symbol: "Th",
        transcribe:"/θɔːrɪəm/",        
        sound: "52.mp3"        
        },
        {
        name: "Protactinium",
        symbol: "Pa",
        transcribe:"/prəʊtækˈtɪnɪəm/",        
        sound: "53.mp3"        
        },
        {
        name: "Uranium",
        symbol: "U",
        transcribe:"/jʊˈreɪniəm/",        
        sound: "54.mp3"        
        },
        {
        name: "Neptunium",
        symbol: "Np",
        transcribe:"/nɛpˈtjuːnjəm/",        
        sound: "55.mp3"        
        },
        {
        name: "Plutonium",
        symbol: "Pu",
        transcribe:"/pluːˈtəʊnjəm/",        
        sound: "56.mp3"        
        },
        {
        name: "Americium",
        symbol: "Am",
        transcribe:"/ˌæm.əˈrɪs.i.əm/",        
        sound: "57.mp3"        
        },
        {
        name: "Curium",
        symbol: "Cm",
        transcribe:"/ˈkjʊərɪəm/",        
        sound: "58.mp3"        
        },
        {
        name: "Berkelium",
        symbol: "Bk",
        transcribe:"/bɜːˈkiː.li.əm/",        
        sound: "59.mp3"        
        },
        {
        name: "Californium",
        symbol: "Cf",
        transcribe:"/kælɪˈfɔːnjəm/",        
        sound: "60.mp3"        
        },
        {
        name: "Einsteinium",
        symbol: "Es",
        transcribe:"/aɪnˈstaɪniəm/",        
        sound: "61.mp3"        
        },
        {
        name: "Fermium",
        symbol: "Fm",
        transcribe:"/ˈfɜːmiəm/",        
        sound: "62.mp3"        
        },
        {
        name: "Mendelevium",
        symbol: "Md",
        transcribe:"/ˌmendəˈliːviəm/",        
        sound: "63.mp3"        
        },
        {
        name: "Nobelium",
        symbol: "No",
        transcribe:"/nəʊˈbiːliəm/",        
        sound: "64.mp3"        
        },
        {
        name: "Lawrencium",
        symbol: "Lr",
        transcribe:"/lɒˈrensiəm/",        
        sound: "65.mp3"        
        },
        {
        name: "Rutherfordium",
        symbol: "Rf",
        transcribe:"/ˌrʌðəˈfɔːdiəm/",        
        sound: "66.mp3"        
        },
        {
        name: "Dubnium",
        symbol: "Db",
        transcribe:"/ˈdʌbniəm/",        
        sound: "67.mp3"        
        },
        {
        name: "Seaborgium",
        symbol: "Sg",
        transcribe:"/siːˈbɔːɡiəm/",        
        sound: "68.mp3"        
        },
        {
        name: "Bohrium",
        symbol: "Bh",
        transcribe:"/ˈbɔːriəm/",        
        sound: "69.mp3"        
        },
        {
        name: "Hassium",
        symbol: "Hs",
        transcribe:"/ˈhæsiəm/",        
        sound: "70.mp3"        
        },
        {
        name: "Meitnerium",
        symbol: "Mt",
        transcribe:"/maɪtˈnɪəriəm/",        
        sound: "71.mp3"        
        },
        {
        name: "Darmstadtium",
        symbol: "Ds",
        transcribe:"/ˈdɑːmʃtætiəm/",        
        sound: "72.mp3"        
        },
        {
        name: "Roentgenium",
        symbol: "Rg",
        transcribe:"/ˌrɒntˈɡiːniəm/",        
        sound: "73.mp3"        
        },
        {
        name: "Copernicium",
        symbol: "Cn",
        transcribe:"/ˌkoʊpərˈnɪsiəm/",        
        sound: "74.mp3"        
        },
        {
        name: "Nihonium",
        symbol: "Nh",
        transcribe:"/nɪˈhoʊniəm/",        
        sound: "75.mp3"        
        },
        {
        name: "Flerovium",
        symbol: "Fl",
        transcribe:"/fləˈroʊviəm/",        
        sound: "76.mp3"        
        },
        {
        name: "Moscovium",
        symbol: "Mc",
        transcribe:"/mɒˈskoʊviəm/",        
        sound: "77.mp3"        
        },
        {
        name: "Livermorium",
        symbol: "Lv",
        transcribe:"/ˌlɪvərˈmɔːriəm/",        
        sound: "78.mp3"        
        },
        {
        name: "Tennessine",
        symbol: "Ts",
        transcribe:"/ˈtɛnɪsiːn/",        
        sound: "79.mp3"        
        },
        {
        name: "Oganesson",
        symbol: "Og",
        transcribe:"/ˌɒɡəˈnɛsɒn/",        
        sound: "80.mp3"        
        },
        {
        name: "Gallium",
        symbol: "Ga",
        transcribe:"/ˈgælɪəm/",        
        sound: "1101.mp3"        
        },
        {
        name: "Germanium",
        symbol: "Ge",
        transcribe:"/ʤɜːˈmeɪnɪəm/",        
        sound: "1102.mp3"        
        },
        {
        name: "Yttrium",
        symbol: "Y",
        transcribe:"/ˈɪtrɪəm/",        
        sound: "1103.mp3"        
        },
        {
        name: "Zirconium",
        symbol: "Zr",
        transcribe:"/zɜːˈkəʊnjəm/",        
        sound: "1104.mp3"        
        },
        {
        name: "Niobium",
        symbol: "Nb",
        transcribe:"/naɪˈəʊbɪəm/",        
        sound: "1105.mp3"        
        },
        {
        name: "Molybdenum",
        symbol: "Mo",
        transcribe:"/mɒˈlɪbdɪnəm/",        
        sound: "1106.mp3"        
        },
        {
        name: "Technetium",
        symbol: "Tc",
        transcribe:"/tɛk.ˈni.ʃi.əm/",        
        sound: "1107.mp3"        
        },
        {
        name: "Ruthenium",
        symbol: "Ru",
        transcribe:"/ruːˈθiːnjəm/",        
        sound: "1108.mp3"        
        },
        {
        name: "Rhodium",
        symbol: "Rh",
        transcribe:"/ˈrəʊdjəm/",        
        sound: "1109.mp3"        
        },
        {
        name: "Antimony",
        symbol: "Sb",
        transcribe:"/ˈæntɪməni/",        
        sound: "1110.mp3"        
        },
        {
        name: "Tellurium",
        symbol: "Te",
        transcribe:"/tɛˈljʊərɪəm/",        
        sound: "1111.mp3"        
        },
        {
        name: "Lanthanum",
        symbol: "La",
        transcribe:"/ˈlænθənəm/",        
        sound: "1112.mp3"        
        },
        {
        name: "Cerium",
        symbol: "Ce",
        transcribe:"/ˈsɪərɪəm/",        
        sound: "1113.mp3"        
        },
        {
        name: "Praseodymium",
        symbol: "Pr",
        transcribe:"/ˌpreɪziːəʊˈdɪmɪəm/",        
        sound: "1114.mp3"        
        },
        {
        name: "Neodymium",
        symbol: "Nd",
        transcribe:"/ˌni.oʊ.ˈdɪ.mi.əm/",        
        sound: "1115.mp3"        
        },
        {
        name: "Promethium",
        symbol: "Pm",
        transcribe:"/prəˈmiːθiəm/",        
        sound: "1116.mp3"        
        },
        {
        name: "Samarium",
        symbol: "Sm",
        transcribe:"/səˈmeɪrɪəm/",        
        sound: "1117.mp3"        
        },
        {
        name: "Europium",
        symbol: "Eu",
        transcribe:"/juːˈrəʊpɪəm/",        
        sound: "1118.mp3"        
        },
        {
        name: "Gadolinium",
        symbol: "Gd",
        transcribe:"/ˌgædɒˈlɪnɪəm/",        
        sound: "1119.mp3"        
        },
        {
        name: "Terbium",
        symbol: "Tb",
        transcribe:"/ˈtɜːbɪəm/",        
        sound: "1120.mp3"        
        },
        {
        name: "Dysprosium",
        symbol: "Dy",
        transcribe:"/dɪsˈprəʊʃɪəm/",        
        sound: "1121.mp3"        
        },
        {
        name: "Holmium",
        symbol: "Ho",
        transcribe:"/ˈhoʊlmiəm/",        
        sound: "1122.mp3"        
        },
        {
        name: "Erbium",
        symbol: "Er",
        transcribe:"/ˈɜːbɪəm/",        
        sound: "1123.mp3"        
        },
        {
        name: "Thulium",
        symbol: "Tm",
        transcribe:"/ˈθjuːlɪəm/",        
        sound: "1124.mp3"        
        },
        {
        name: "Ytterbium",
        symbol: "Yb",
        transcribe:"/ɪˈtɜːbjəm/",        
        sound: "1125.mp3"        
        },
        {
        name: "Lutetium",
        symbol: "Lu",
        transcribe:"/luː.ˈti.ʃi.əm/",        
        sound: "1126.mp3"        
        },
        {
        name: "Hafnium",
        symbol: "Hf",
        transcribe:"/ˈhæfnɪəm/",        
        sound: "1127.mp3"        
        },
        {
        name: "Tantalum",
        symbol: "Ta",
        transcribe:"/ˈtæntələm/",        
        sound: "1128.mp3"        
        },
        {
        name: "Tungsten",
        symbol: "W",
        transcribe:"/ˈtʌŋstən/",        
        sound: "1129.mp3"        
        },
        {
        name: "Rhenium",
        symbol: "Re",
        transcribe:"/ˈriːnɪəm/",        
        sound: "1130.mp3"        
        },
        {
        name: "Osmium",
        symbol: "Os",
        transcribe:"/ˈɒzmɪəm/",        
        sound: "1131.mp3"        
        },
        {
        name: "Iridium",
        symbol: "Ir",
        transcribe:"/ɪˈrɪdɪəm/",        
        sound: "1132.mp3"        
        },
        {
        name: "Thallium",
        symbol: "Tl",
        transcribe:"/ˈθælɪəm/",        
        sound: "1133.mp3"        
        },
        {
        name: "Bismuth",
        symbol: "Bi",
        transcribe:"/ˈbɪzməθ/",        
        sound: "1134.mp3"        
        },
        {
        name: "Polonium",
        symbol: "Po",
        transcribe:"/pəˈləʊnɪəm/",        
        sound: "1135.mp3"        
        },
        {
        name: "Astatine",
        symbol: "At",
        transcribe:"/ˈæstətiːn/",        
        sound: "1136.mp3"        
        },
        {
        name: "Radon",
        symbol: "Rn",
        transcribe:"/ˈreɪdɒn/",        
        sound: "1137.mp3"        
        },
        {
        name: "Indium",
        symbol: "In",
        transcribe:"/ˈɪndiəm/",        
        sound: "1138.mp3"        
        }
]

const Oxit = [
    {
        name: "Ferrous oxide",        
        symbol: "FeO",        
        transcribe:"/ˈfɛrəs ˈɒksaɪd/",        
        sound: "81.mp3"
        },
        {
        name: "Iron (II) oxide",        
        symbol: "FeO",        
        transcribe:"/ˈaɪən tuː ˈɒksaɪd /",        
        sound: "82.mp3"
        },
        {
        name: "Iron (III) oxide",        
        symbol: "Fe2O3",        
        transcribe:"/ˈaɪən θriː ˈɒksaɪd/",        
        sound: "83.mp3"
        },
        {
        name: "Ferric oxide",        
        symbol: "Fe2O3",        
        transcribe:"/ˈfɛrɪk ˈɒksaɪd/",        
        sound: "84.mp3"
        },
        {
        name: "Copper (I) oxide",        
        symbol: "Cu2O",        
        transcribe:"/ˈkjuːpə wʌn ˈɒksaɪd/",        
        sound: "85.mp3"
        },
        {
        name: "Cuprous oxide",        
        symbol: "Cu2O",        
        transcribe:"/ˈkjuːprəs ˈɒksaɪd/",        
        sound: "86.mp3"
        },
        {
        name: "Cupric oxide",        
        symbol: "CuO",        
        transcribe:"/ˈkjuːprɪkˈɒksaɪd/",        
        sound: "87.mp3"
        },
        {
        name: "Copper (II) oxide",        
        symbol: "CuO",        
        transcribe:"/ˈkjuːpə tuːˈɒksaɪd/",        
        sound: "88.mp3"
        },
        {
        name: "Chromium (II) oxide",        
        symbol: "CrO",        
        transcribe:"/ˈkrəʊmiəm tuː ˈɒksaɪd/",        
        sound: "89.mp3"
        },
        {
        name: "Chromous oxide",        
        symbol: "CrO",        
        transcribe:"/ˈkrəʊməsˈɒksaɪd/",        
        sound: "90.mp3"
        },
        {
        name: "Chromium (III) oxide",        
        symbol: "Cr2O3",        
        transcribe:"/ˈkrəʊmiəm θriː ˈɒksaɪd/",        
        sound: "91.mp3"
        },
        {
        name: "Chromic oxide",        
        symbol: "Cr2O3",        
        transcribe:"/ˈkrəʊmɪk ˈɒksaɪd/",        
        sound: "92.mp3"
        },
        {
        name: "Chromium(VI) oxide",        
        symbol: "CrO3",        
        transcribe:"/ˈkrəʊmiəm sɪks ˈɒksaɪd/",        
        sound: "93.mp3"
        },
        {
        name: "Chromium trioxide",        
        symbol: "CrO3",        
        transcribe:"/ˈkrəʊmiəm trɑɪˈɒksaɪd/",        
        sound: "94.mp3"
        },
        {
        name: "Sodium oxide",        
        symbol: "Na2O",        
        transcribe:"/ˈsəʊdiəm ˈɒksaɪd/",        
        sound: "95.mp3"
        },
        {
        name: "Potassium oxide",        
        symbol: "K2O",        
        transcribe:"/pəˈtæsiəmˈɒksaɪd/",        
        sound: "96.mp3"
        },
        {
        name: "Lithium oxide",        
        symbol: "Li2O",        
        transcribe:"/ˈlɪθɪəmˈɒksaɪd/",        
        sound: "97.mp3"
        },
        {
        name: "Beryllium oxide",        
        symbol: "BeO",        
        transcribe:"/bɛˈrɪljəmˈɒksaɪd/",        
        sound: "98.mp3"
        },
        {
        name: "Magnesium oxide",        
        symbol: "MgO",        
        transcribe:"/mægˈniːziəmˈɒksaɪd/",        
        sound: "99.mp3"
        },
        {
        name: "Calcium oxide",        
        symbol: "CaO",        
        transcribe:"/ˈkælsɪəmˈɒksaɪd /",        
        sound: "100.mp3"
        },
        {
        name: "Barium oxide",        
        symbol: "BaO",        
        transcribe:"/ˈbeərɪəmˈɒksaɪd/",        
        sound: "101.mp3"
        },
        {
        name: "Aluminium oxide",        
        symbol: "Al2O3",        
        transcribe:"/ˌæləˈmɪniəmˈɒksaɪd/",        
        sound: "102.mp3"
        },
        {
        name: "Manganous oxide",        
        symbol: "MnO",        
        transcribe:"/ˈ mæŋgənəsˈɒksaɪd/",        
        sound: "103.mp3"
        },
        {
        name: "Manganese (II) oxide",        
        symbol: "MnO",        
        transcribe:"/ˌmæŋgəˈniːz tuː ˈɒksaɪd/",        
        sound: "104.mp3"
        },
        {
        name: "Manganese dioxide",        
        symbol: "MnO2",        
        transcribe:"/ˌmæŋgəˈniːz dɑɪˈɒksaɪd/",        
        sound: "105.mp3"
        },
        {
        name: "Manganese(IV) oxide",        
        symbol: "MnO2",        
        transcribe:"/ˌmæŋgəˈniːz fɔːˈɒksaɪd /",        
        sound: "106.mp3"
        },
        {
        name: "Manganese heptoxide",        
        symbol: "Mn2O7",        
        transcribe:"/ˌmæŋgəˈniːz heptˈɒksaɪd/",        
        sound: "107.mp3"
        },
        {
        name: "Manganese (VII) oxide",        
        symbol: "Mn2O7",        
        transcribe:"/ˌmæŋgəˈniːz ˈsɛvnːˈɒksaɪd /",        
        sound: "108.mp3"
        },
        {
        name: "Zinc oxide",        
        symbol: "ZnO",        
        transcribe:"/zɪŋk ˈɒksaɪd /",        
        sound: "109.mp3"
        },
        {
        name: "Silver oxide",        
        symbol: "Ag2O",        
        transcribe:"/ˈsɪlvəˈɒksaɪd/",        
        sound: "110.mp3"
        },
        {
        name: "Mercurous oxide",        
        symbol: "Hg2O",        
        transcribe:"/ˈmɜːkjʊrəsˈɒksaɪd/",        
        sound: "111.mp3"
        },
        {
        name: "Mercury(I) oxide",        
        symbol: "Hg2O",        
        transcribe:"/ˈmɜːkjʊri ˈɒksaɪd/",        
        sound: "112.mp3"
        },
        {
        name: "Mercuric oxide",        
        symbol: "HgO",        
        transcribe:"/ˈmɜːkjʊrɪkˈɒksaɪd/",        
        sound: "113.mp3"
        },
        {
        name: "Mercury (II) oxide",        
        symbol: "HgO",        
        transcribe:"/ˈmɜːkjʊri tuː ˈɒksaɪd/",        
        sound: "114.mp3"
        },
        {
        name: "Lead monoxide",        
        symbol: "PbO",        
        transcribe:"/liːdˈmɒnəʊsaɪd/",        
        sound: "115.mp3"
        },
        {
        name: "Lead(II) oxide",        
        symbol: "PbO",        
        transcribe:"/liːd tuː ˈɒksaɪd/",        
        sound: "116.mp3"
        },
        {
        name: "Lead dioxide",        
        symbol: "PbO2",        
        transcribe:"/liːd dɑɪˈɒksaɪd/",        
        sound: "117.mp3"
        },
        {
        name: "Lead(IV) oxide",        
        symbol: "PbO2",        
        transcribe:"/liːd fɔːr ˈɒksaɪd/",        
        sound: "118.mp3"
        },
        {
        name: "Nickel oxide",        
        symbol: "NiO",        
        transcribe:"/ˈnɪkl ˈɒksaɪd/",        
        sound: "119.mp3"
        },
        {
        name: "Strontium oxide",        
        symbol: "SrO",        
        transcribe:"/ˈstrɒntiəm ˈɒksaɪd/",        
        sound: "120.mp3"
        },
        {
        name: "Selenium dioxide",        
        symbol: "SeO2",        
        transcribe:"/sɪˈliː.ni.əm dɑɪˈɒksaɪd/",        
        sound: "121.mp3"
        },
        {
        name: "Selenium(IV) oxide",        
        symbol: "SeO2",        
        transcribe:"/sɪˈliː.ni.əm fɔːr ˈɒksaɪd/",        
        sound: "122.mp3"
        },
        {
        name: "Selenium trioxide",        
        symbol: "SeO3",        
        transcribe:"/sɪˈliː.ni.əm trɑɪˈɒksaɪd/",        
        sound: "123.mp3"
        },
        {
        name: "Selenium(VI) oxide",        
        symbol: "SeO3",        
        transcribe:"/sɪˈliː.ni.əm sɪks ˈɒksaɪd/",        
        sound: "124.mp3"
        },
        {
        name: "Tellurium dioxide",        
        symbol: "TeO2",        
        transcribe:"/tɛˈljʊərɪəm daɪˈɒksaɪd/",        
        sound: "125.mp3"
        },
        {
        name: "Sulfur dioxide",        
        symbol: "SO2",        
        transcribe:"/ˈsʌlfə daɪˈɒksaɪd/",        
        sound: "126.mp3"
        },
        {
        name: "Sulfur(IV) oxide",        
        symbol: "SO2",        
        transcribe:"/ˈsʌlfə fɔːr ˈɒksaɪd/",        
        sound: "127.mp3"
        },
        {
        name: "Sulfur trioxide",        
        symbol: "SO3",        
        transcribe:"/ˈsʌlfə  trɑɪˈɒksaɪd/",        
        sound: "128.mp3"
        },
        {
        name: "Sulfur(VI) oxide",        
        symbol: "SO3",        
        transcribe:"/ˈsʌlfə sɪks ˈɒksaɪd/",        
        sound: "129.mp3"
        },
        {
        name: "Carbon monoxide",        
        symbol: "CO",        
        transcribe:"/ˈkɑːbənˈmɒnəʊsaɪd/",        
        sound: "130.mp3"
        },
        {
        name: "Carbon(II) oxide",        
        symbol: "CO",        
        transcribe:"/ˈkɑːbən tuː ˈɒksaɪd/",        
        sound: "131.mp3"
        },
        {
        name: "Carbon dioxide",        
        symbol: "CO2",        
        transcribe:"/ˈkɑːbən daɪˈɒksaɪd/",        
        sound: "132.mp3"
        },
        {
        name: "Carbon(IV) oxide",        
        symbol: "CO2",        
        transcribe:"/ˈkɑːbən fɔːr ˈɒksaɪd/",        
        sound: "133.mp3"
        },
        {
        name: "Phosphorus pentoxide",        
        symbol: "P2O5",        
        transcribe:"/ˈfɒsfərəs pentˈɒksaɪd/",        
        sound: "134.mp3"
        },
        {
        name: "Phosphorus(V) oxide",        
        symbol: "P2O5",        
        transcribe:"/ˈfɒsfərəs faɪvˈɒksaɪd/",        
        sound: "135.mp3"
        },
        {
        name: "Nitrogen dioxide",        
        symbol: "NO2",        
        transcribe:"/ˈnaɪtrəʤən daɪˈɒksaɪd/",        
        sound: "136.mp3"
        },
        {
        name: "Nitrogen(IV) oxide",        
        symbol: "NO2",        
        transcribe:"/ˈnaɪtrəʤən fɔːr ˈɒksaɪd/",        
        sound: "137.mp3"
        },
        {
        name: "Nitric oxide",        
        symbol: "NO",        
        transcribe:"/ˈnaɪtrɪk ˈɒksaɪd/",        
        sound: "138.mp3"
        },
        {
        name: "Nitrogen(II) oxide",        
        symbol: "NO",        
        transcribe:"/ˈnaɪtrəʤən tuː ˈɒksaɪd/",        
        sound: "139.mp3"
        },
        {
        name: "Dinitrogen trioxide",        
        symbol: "N2O3",        
        transcribe:"/dɑɪˈnaɪtrəʤən trɑɪ ˈɒksaɪd/",        
        sound: "140.mp3"
        },
        {
        name: "Dinitrogen pentoxide",        
        symbol: "N2O5",        
        transcribe:"/dɑɪˈnaɪtrəʤən pentˈɒksaɪd/",        
        sound: "141.mp3"
        },
        {
        name: "Nitrous oxide",        
        symbol: "N2O",        
        transcribe:"/ˈnaɪtrəs ˈɒksaɪd/",        
        sound: "142.mp3"
        },
        {
        name: "Oxygen difluoride",        
        symbol: "F2O",        
        transcribe:"/ˈɒksɪʤən  daɪˈflʊəraɪd/",        
        sound: "143.mp3"
        },
        {
        name: "Dichlorine monoxide",        
        symbol: "Cl2O",        
        transcribe:"/dɑɪˈklɔːriːnˈmɒnəʊsaɪd/",        
        sound: "144.mp3"
        },
        {
        name: "Chlorine (I) oxide",        
        symbol: "Cl2O",        
        transcribe:"/ˈklɔːriːn wʌn ˈɒksaɪd/",        
        sound: "145.mp3"
        },
        {
        name: "Dichlorine trioxide",        
        symbol: "Cl2O3",        
        transcribe:"/dɑɪˈklɔːriːn trɑɪˈɒksaɪd/",        
        sound: "146.mp3"
        },
        {
        name: "Dichlorine pentoxide",        
        symbol: "Cl2O5",        
        transcribe:"/dɑɪˈklɔːriːn pentˈɒksaɪd/",        
        sound: "147.mp3"
        },
        {
        name: "Dichlorine heptoxide",        
        symbol: "Cl2O7",        
        transcribe:"/dɑɪˈklɔːriːn heptˈɒksaɪd/",        
        sound: "148.mp3"
        },
        {
        name: "Chlorine(VII) oxide",        
        symbol: "Cl2O7",        
        transcribe:"/ˈklɔːriːn ˈsɛvn ˈɒksaɪd/",        
        sound: "149.mp3"
        },
        {
        name: "Iodine oxide",        
        symbol: "I2O",        
        transcribe:"/ˈaɪəʊdiːn ˈɒksaɪd/",        
        sound: "150.mp3"
        },
        {
        name: "Iodine pentoxide",        
        symbol: "I2O5",        
        transcribe:"/ˈaɪəʊdiːn pentˈɒksaɪd/",        
        sound: "151.mp3"
        },
        {
        name: "Iodine(V) oxide",        
        symbol: "I2O5",        
        transcribe:"/ˈaɪəʊdiːn faɪv ˈɒksaɪd/",        
        sound: "152.mp3"
        },
        {
        name: "diiodine heptoxide",        
        symbol: "I2O7",        
        transcribe:"/dɑɪˈaɪəʊdiːn heptˈɒksaɪd/",        
        sound: "153.mp3"
        },
        {
        name: "Uranium dioxide",        
        symbol: "UO2",        
        transcribe:"/jʊˈreɪniəm daɪˈɒksaɪd/",        
        sound: "154.mp3"
        },
        {
        name: "uranium(IV) oxide",        
        symbol: "UO2",        
        transcribe:"/jʊˈreɪniəm fɔːr ˈɒksaɪd/",        
        sound: "155.mp3"
        },
        {
        name: "Uranium trioxide",        
        symbol: "UO3",        
        transcribe:"/jʊˈreɪniəm trɑɪˈɒksaɪd/",        
        sound: "156.mp3"
        },
        {
        name: "Uranium(VI) oxide",        
        symbol: "UO3",        
        transcribe:"/jʊˈreɪniəm  sɪks ˈɒksaɪd/",        
        sound: "157.mp3"
        },
        {
        name: "Tungsten dioxide",        
        symbol: "WO2",        
        transcribe:"/ˈtʌŋstən daɪˈɒksaɪd/",        
        sound: "158.mp3"
        },
        {
        name: "Tungsten(IV) oxide",        
        symbol: "WO2",        
        transcribe:"/ˈtʌŋstən fɔːr ˈɒksaɪd/",        
        sound: "159.mp3"
        },
        {
        name: "Dibromine monoxide",        
        symbol: "Br2O",        
        transcribe:"/dɑɪˈbrəʊmiːnˈmɒnəʊsaɪd/",        
        sound: "160.mp3"
        },
        {
        name: "Dibromtrioxid",        
        symbol: "Br2O3",        
        transcribe:"/dɑɪˈbrəʊm trɑɪˈɒksaɪd/",        
        sound: "161.mp3"
        },
        {
        name: "Dibromine pentoxide",        
        symbol: "Br2O5",        
        transcribe:"/dɑɪˈbrəʊmiːn pentˈɒksaɪd/",        
        sound: "162.mp3"
        },
        {
        name: "Dibromine Heptaoxid",        
        symbol: "Br2O7",        
        transcribe:"/dɑɪˈbrəʊmiːn heptˈɒksaɪd/",        
        sound: "163.mp3"
        },
        {
        name: "Silver(II) oxide",        
        symbol: "AgO",        
        transcribe:"/ˈsɪlvə tu: ˈɒksaɪd/",        
        sound: "718.mp3"
        },
        {
        name: "Arsenic trioxide",        
        symbol: "As2O3",        
        transcribe:"/ˈɑːsnɪk trɑɪˈɒksaɪd/",        
        sound: "721.mp3"
        },
        {
        name: "Arsenic pentoxide",        
        symbol: "As2O5",        
        transcribe:"/ˈɑːsnɪk pentˈɒksaɪd/",        
        sound: "722.mp3"
        },
        {
        name: "Gold(III) oxide",        
        symbol: "Au2O3",        
        transcribe:"/gəʊld θriː ˈɒksaɪd/",        
        sound: "730.mp3"
        },
        {
        name: "Boric oxide",        
        symbol: "B2O3",        
        transcribe:"/ˈbɔːrɪk ˈɒksaɪd/",        
        sound: "733.mp3"
        },
        {
        name: "Barium peroxide",        
        symbol: "BaO2",        
        transcribe:"/ˈbeərɪəm pəˈrɒksaɪd/",        
        sound: "737.mp3"
        },
        {
        name: "Bismuth trioxide",        
        symbol: "Bi2O3",        
        transcribe:"/ˈbɪzməθ trɑɪˈɒksaɪd/",        
        sound: "745.mp3"
        },
        {
        name: "Carbon suboxide",        
        symbol: "C3O2",        
        transcribe:"/ ˈkɑːbən sʌbˈɒksaɪd/",        
        sound: "755.mp3"
        },
        {
        name: "Cadmium oxide",        
        symbol: "CdO",        
        transcribe:"/ˈkædmɪəm ˈɒksaɪd /",        
        sound: "768.mp3"
        },
        {
        name: "Cerium(IV) oxide",        
        symbol: "CeO2",        
        transcribe:"/ˈsɪərɪəm fɔː ˈɒksaɪd/",        
        sound: "775.mp3"
        },
        {
        name: "Chlorine monoxide",        
        symbol: "Cl2O",        
        transcribe:"/ˈklɔːriːn mɒˈnɒksaɪd /",        
        sound: "776.mp3"
        },
        {
        name: "Chlorine dioxide",        
        symbol: "ClO2",        
        transcribe:"/ˈklɔːriːn daɪˈɒksaɪd/",        
        sound: "779.mp3"
        },
        {
        name: "Cobalt(III) oxide",        
        symbol: "Co2O3",        
        transcribe:"/kəʊˈbɔːlt θriː ˈɒksaɪd/",        
        sound: "785.mp3"
        },
        {
        name: "Tricobalt tetroxide",        
        symbol: "Co3O4",        
        transcribe:"/traɪkəʊˈbɔːlt tɛˈtrɒksaɪd/",        
        sound: "786.mp3"
        },
        {
        name: "Cobalt(II) oxide",        
        symbol: "CoO",        
        transcribe:"/kəʊˈbɔːlt tu: ˈɒksaɪd /",        
        sound: "793.mp3"
        },
        {
        name: "Triiron Tetroxide",        
        symbol: "Fe3O4",        
        transcribe:"/traɪˈaɪən tɛˈtrɒksaɪd/",        
        sound: "809.mp3"
        },
        {
        name: "gallium(III) oxide",        
        symbol: "Ga2O3",        
        transcribe:"/ˈgælɪəm θriː ˈɒksaɪd/",        
        sound: "812.mp3"
        },
        {
        name: "Gadolinium oxide",        
        symbol: "Gd2O3",        
        transcribe:"/ˌgædɒˈlɪnɪəm ˈɒksaɪd/",        
        sound: "816.mp3"
        },
        {
        name: "Germanium dioxide",        
        symbol: "GeO2",        
        transcribe:"/ʤɜːˈmeɪnɪəm daɪˈɒksaɪd/",        
        sound: "819.mp3"
        },
        {
        name: "Holmium oxide",        
        symbol: "Ho2O3",        
        transcribe:"/ˈhɒlmɪəm ɒksaɪd/",        
        sound: "845.mp3"
        },
        {
        name: "Iodine pentoxide",        
        symbol: "I2O5",        
        transcribe:"/aɪədiːn pɛntˈɒksaɪd/",        
        sound: "847.mp3"
        },
        {
        name: "Indium trioxide",        
        symbol: "In2O3",        
        transcribe:"/ˈɪndɪəm trɑɪˈɒksaɪd/",        
        sound: "852.mp3"
        },
        {
        name: "lanthanum oxide",        
        symbol: "La2O3",        
        transcribe:"/ˈlænθənəm ˈɒksaɪd/",        
        sound: "875.mp3"
        },
        {
        name: "trimanganese tetraoxide",        
        symbol: "Mn3O4",        
        transcribe:"/mɒˈlɪbdɪnəm tɛtrəˈɒksaɪd/",        
        sound: "891.mp3"
        },
        {
        name: "molybdenum dioxide",        
        symbol: "MoO2",        
        transcribe:"/mɒˈlɪbdɪnəm daɪˈɒksaɪd/",        
        sound: "895.mp3"
        },
        {
        name: "molybdenum trioxide",        
        symbol: "MoO3",        
        transcribe:"/mɒˈlɪbdɪnəm trɑɪˈɒksaɪd/",        
        sound: "896.mp3"
        },
        {
        name: "Niobium pentaoxide",        
        symbol: "Nb2O5",        
        transcribe:"/naɪˈəʊbɪəm pentəˈɒksaɪd/",        
        sound: "908.mp3"
        },
        {
        name: "Neodymium oxide",        
        symbol: "Nd2O3",        
        transcribe:"/ˈnaɪtrəʤən ˈɒksaɪd/",        
        sound: "912.mp3"
        },
        {
        name: "Osmium tetroxide",        
        symbol: "OsO4",        
        transcribe:"/ˈɒzmɪəm tɛˈtrɒksaɪd/",        
        sound: "930.mp3"
        },
        {
        name: "Lead tetroxide",        
        symbol: "Pb3O4",        
        transcribe:"/liːd tɛˈtrɒksaɪd/",        
        sound: "932.mp3"
        },
        {
        name: "Palladium oxide",        
        symbol: "PdO",        
        transcribe:"/pəˈleɪdiəm ˈɒksaɪd /",        
        sound: "939.mp3"
        },
        {
        name: "Platinum monoxide",        
        symbol: "PtO",        
        transcribe:"/ˈplætɪnəm mɒˈnɒksaɪd /",        
        sound: "946.mp3"
        },
        {
        name: "Platinum dioxide",        
        symbol: "PtO2",        
        transcribe:"/ˈplætɪnəm daɪˈɒksaɪd/",        
        sound: "947.mp3"
        },
        {
        name: "rhodium(III) oxide",        
        symbol: "Rh2O3",        
        transcribe:"/ˈrəʊdjəm θriː ˈɒksaɪd/",        
        sound: "953.mp3"
        },
        {
        name: "Antimony trioxide",        
        symbol: "Sb2O3",        
        transcribe:"/ˈæntɪməni trɑɪˈɒksaɪd/",        
        sound: "956.mp3"
        },
        {
        name: "Antimony pentoxide",        
        symbol: "Sb2O5",        
        transcribe:"/ˈæntɪməni pentˈɒksaɪd/",        
        sound: "957.mp3"
        },
        {
        name: "Silicon dioxide",        
        symbol: "SiO2",        
        transcribe:"/ˈsɪlɪkən daɪˈɒksaɪd/",        
        sound: "969.mp3"
        },
        {
        name: "Samarium sesquioxide",        
        symbol: "Sm2O3",        
        transcribe:"/səˈmeɪrɪəm seskwɪ ˈɒksaɪd/",        
        sound: "970.mp3"
        },
        {
        name: "Tin(II) oxide",        
        symbol: "SnO",        
        transcribe:"/tɪn tu: ˈɒksaɪd/",        
        sound: "971.mp3"
        },
        {
        name: "Tin(IV) oxide",        
        symbol: "SnO2",        
        transcribe:"/tɪn fɔː ˈɒksaɪd/",        
        sound: "972.mp3"
        },
        {
        name: "Tantalum pentoxide",        
        symbol: "Ta2O5",        
        transcribe:"/ˈtæntələm pentɒksaɪd/",        
        sound: "979.mp3"
        },
        {
        name: "Tellurium dioxide",        
        symbol: "TeO2",        
        transcribe:"/tɛˈljʊərɪəm daɪˈɒksaɪd/",        
        sound: "981.mp3"
        },
        {
        name: "Thorium dioxide",        
        symbol: "ThO2",        
        transcribe:"/ˈθɔːrɪəm daɪˈɒksaɪd/",        
        sound: "983.mp3"
        },
        {
        name: "Titanium dioxide",        
        symbol: "TiO2",        
        transcribe:"/taɪˈteɪniəm daɪˈɒksaɪd /",        
        sound: "987.mp3"
        },
        {
        name: "Thallium oxide",        
        symbol: "Tl2O",        
        transcribe:"/ˈθælɪəm ˈɒksaɪd/",        
        sound: "988.mp3"
        },
        {
        name: "Vanadium pentoxide",        
        symbol: "V2O5",        
        transcribe:"/vəˈneɪdjəm pentˈɒksaɪd/",        
        sound: "994.mp3"
        },
        {
        name: "Tungsten trioxide",        
        symbol: "WO3",        
        transcribe:"/ˈtʌŋstən trɑɪˈɒksaɪd/",        
        sound: "997.mp3"
        },
        {
        name: "Yttrium oxide",          
        symbol: "Y2O3",   
        transcribe:"/ˈɪtrɪəm ˈɒksaɪd/",
        sound: "1001.mp3"   
        },
        {
        name: "Ytterbium oxide", 
        symbol: "Yb2O3", 
        transcribe:"/ɪˈtɜːbjəm ˈɒksaɪd /",
        sound: "1002.mp3"
        }
]

const Bazo = [
        {
        name: "Lithium hydroxide",        
        symbol: "LiOH",

        transcribe:"/ˈlɪθɪəm haɪˈdrɒksaɪd/",        
        sound: "183.mp3"        
        },
        {
        name: "Sodium hydroxide",        
        symbol: "NaOH",

        transcribe:"/ˈsəʊdiəm haɪˈdrɒksaɪd/",        
        sound: "184.mp3"        
        },
        {
        name: "Potassium hydroxide",        
        symbol: "KOH",

        transcribe:"/pəˈtæsiəm haɪˈdrɒksaɪd/",        
        sound: "185.mp3"        
        },
        {
        name: "Rubidium hydroxide",        
        symbol: "RbOH",

        transcribe:"/ru(ː)ˈbɪdɪəm haɪˈdrɒksaɪd/",        
        sound: "186.mp3"        
        },
        {
        name: "Caesium hydroxide",        
        symbol: "CsOH",

        transcribe:"/ˈsiːziəm haɪˈdrɒksaɪd/",        
        sound: "187.mp3"        
        },
        {
        name: "Beryllium hydroxide",        
        symbol: "Be(OH)2",

        transcribe:"/bɛˈrɪljəm haɪˈdrɒksaɪd/",        
        sound: "188.mp3"        
        },
        {
        name: "Magnesium hydroxide",        
        symbol: "Mg(OH)2",

        transcribe:"/mægˈniːziəm haɪˈdrɒksaɪd/",        
        sound: "189.mp3"        
        },
        {
        name: "Calcium hydroxide",        
        symbol: "Ca(OH)2",

        transcribe:"/ˈkælsɪəm haɪˈdrɒksaɪd/",        
        sound: "190.mp3"        
        },
        {
        name: "Strontium hydroxide",        
        symbol: "Sr(OH)2",

        transcribe:"/ˈstrɒntiəm /",        
        sound: "191.mp3"        
        },
        {
        name: "barium hydroxide",        
        symbol: "Ba(OH)2",

        transcribe:"/ˈbeərɪəm haɪˈdrɒksaɪd/",        
        sound: "192.mp3"        
        },
        {
        name: "Scandium(III) hydroxide",        
        symbol: "Sc(OH)3",

        transcribe:"/ˈskændɪəm θriː haɪˈdrɒksaɪd/",        
        sound: "193.mp3"        
        },
        {
        name: "Chromium hydroxide",        
        symbol: "Cr(OH)2",

        transcribe:"/ˈkrəʊmiəm haɪˈdrɒksaɪd /",        
        sound: "194.mp3"        
        },
        {
        name: "Chromium(III) hydroxide",        
        symbol: "Cr(OH)3",

        transcribe:"/ˈkrəʊmiəm θriː haɪˈdrɒksaɪd/",        
        sound: "195.mp3"        
        },
        {
        name: "Chromium(VI) hydroxide",        
        symbol: "Cr(OH)6",

        transcribe:"/ˈkrəʊmiəm sɪks haɪˈdrɒksaɪd/",        
        sound: "196.mp3"        
        },
        {
        name: "Manganese(II) hydroxide",        
        symbol: "Mn(OH)2",

        transcribe:"/ˌmæŋgəˈniːz tuː haɪˈdrɒksaɪd/",        
        sound: "197.mp3"        
        },
        {
        name: "Manganese(III) hydroxide",        
        symbol: "Mn(OH)3",

        transcribe:"/ˌmæŋgəˈniːz θriː haɪˈdrɒksaɪd/",        
        sound: "198.mp3"        
        },
        {
        name: "Manganese(IV) hydroxide",        
        symbol: "Mn(OH)4",

        transcribe:"/ˌmæŋgəˈniːz fɔː haɪˈdrɒksaɪd/",        
        sound: "199.mp3"        
        },
        {
        name: "Manganese(VI) hydroxide",        
        symbol: "Mn(OH)6",

        transcribe:"/ˌmæŋgəˈniːz sɪks haɪˈdrɒksaɪd/",        
        sound: "200.mp3"        
        },
        {
        name: "Manganese(VII) hydroxide",        
        symbol: "Mn(OH)7",

        transcribe:"/ˌmæŋgəˈniːz ˈsɛvn haɪˈdrɒksaɪd/",        
        sound: "201.mp3"        
        },
        {
        name: "iron (II) hydroxide",        
        symbol: "Fe(OH)2",

        transcribe:"/ˈaɪən tuː haɪˈdrɒksaɪd /",        
        sound: "202.mp3"        
        },
        {
        name: "ferrous hydroxide",        
        symbol: "Fe(OH)2",

        transcribe:"/fɛrəs haɪˈdrɒksaɪd/",        
        sound: "203.mp3"        
        },
        {
        name: "iron (III) hydroxide",        
        symbol: "Fe(OH)3",

        transcribe:"/ˈaɪən θriː haɪˈdrɒksaɪd/",        
        sound: "204.mp3"        
        },
        {
        name: "ferric hydroxide",        
        symbol: "Fe(OH)3",

        transcribe:"/ˈfɛrɪk haɪˈdrɒksaɪd/",        
        sound: "205.mp3"        
        },
        {
        name: "Cobalt(II) hydroxide",        
        symbol: "Co(OH)2",

        transcribe:"/kəʊˈbɔːlt tuː haɪˈdrɒksaɪd/",        
        sound: "206.mp3"        
        },
        {
        name: "cobaltous hydroxide",        
        symbol: "Co(OH)2",

        transcribe:"/ˈkoʊ.ˌbɔltəs haɪˈdrɒksaɪd/",        
        sound: "207.mp3"        
        },
        {
        name: "Coban(III) hydroxide",        
        symbol: "Co(OH)3",

        transcribe:"/‘kə‍ʊbən θriː haɪˈdrɒksaɪd/",        
        sound: "208.mp3"        
        },
        {
        name: "Nickel(II) hydroxide",        
        symbol: "Ni(OH)2",

        transcribe:"/ˈnɪkl tuː haɪˈdrɒksaɪd /",        
        sound: "209.mp3"        
        },
        {
        name: "Copper(I) hydroxide",        
        symbol: "CuOH",

        transcribe:"/ˈkɒpə wʌn haɪˈdrɒksaɪd/",        
        sound: "210.mp3"        
        },
        {
        name: "Cuprous hydroxide",        
        symbol: "CuOH",

        transcribe:"/ˈkɒpə wʌn haɪˈdrɒksaɪd/",        
        sound: "211.mp3"        
        },
        {
        name: "Copper monohydroxide",        
        symbol: "Cu(OH)2",

        transcribe:"/ˈkɒpəˈmɒnəʊ haɪˈdrɒksaɪd /",        
        sound: "212.mp3"        
        },
        {
        name: "Zinc hydroxide",        
        symbol: "Zn(OH)2",

        transcribe:"/zɪŋk haɪˈdrɒksaɪd/",        
        sound: "213.mp3"        
        },
        {
        name: "Cadmium hydroxide",        
        symbol: "Cd(OH)2",

        transcribe:"/ˈkædmɪəm haɪˈdrɒksaɪd/",        
        sound: "214.mp3"        
        },
        {
        name: "Silver hydroxide",        
        symbol: "AgOH",

        transcribe:"/ˈsɪlvə haɪˈdrɒksaɪd/",        
        sound: "215.mp3"        
        },
        {
        name: "Mercury(I) Hydroxide",        
        symbol: "HgOH",

        transcribe:"/ˈmɜːkjʊri wʌn haɪˈdrɒksaɪd/",        
        sound: "216.mp3"        
        },
        {
        name: "Mercury(II) hydroxide",        
        symbol: "Hg(OH)2",

        transcribe:"/ˈmɜːkjʊri tuː haɪˈdrɒksaɪd/",        
        sound: "217.mp3"        
        },
        {
        name: "mercuric hydroxide",        
        symbol: "Hg(OH)2",

        transcribe:"/ˈmɜːkjʊrik haɪˈdrɒksaɪd/",        
        sound: "218.mp3"        
        },
        {
        name: "Aluminium hydroxide",        
        symbol: "Al(OH)3",

        transcribe:"/ˌæləˈmɪniəm haɪˈdrɒksaɪd/",        
        sound: "219.mp3"        
        },
        {
        name: "Scandium(III) hydroxide",        
        symbol: "Sc(OH)3",

        transcribe:"/ˈskændɪəm θriː haɪˈdrɒksaɪd/",        
        sound: "220.mp3"        
        },
        {
        name: "Titaniumhydroxide",        
        symbol: "Ti(OH)2",

        transcribe:"/taɪˈteɪniəm haɪˈdrɒksaɪd/",        
        sound: "221.mp3"        
        },
        {
        name: "Titanium(III)hydroxide",        
        symbol: "Ti(OH)3",

        transcribe:"/taɪˈteɪniəm θriː haɪˈdrɒksaɪd/",        
        sound: "222.mp3"        
        },
        {
        name: "Titanium(IV)hydroxide",        
        symbol: "Ti(OH)4",

        transcribe:"/taɪˈteɪniəm fɔː haɪˈdrɒksaɪd/",        
        sound: "223.mp3"        
        },
        {
        name: "Vanadiumhydroxide",        
        symbol: "V(OH)2",

        transcribe:"/vəˈneɪdjəm haɪˈdrɒksaɪd/",        
        sound: "224.mp3"        
        },
        {
        name: "Vanadium( IV)hydroxide",        
        symbol: "V(OH)4",

        transcribe:"/vəˈneɪdjəm fɔː haɪˈdrɒksaɪd/",        
        sound: "225.mp3"        
        },
        {
        name: "Vanadium(V)hydroxide",        
        symbol: "V(OH)5",

        transcribe:"/vəˈneɪdjəm faɪv haɪˈdrɒksaɪd/",        
        sound: "226.mp3"        
        },
        {
        name: "Cadmium hydroxide",        
        symbol: "Cd(OH)2",

        transcribe:"/ˈkædmɪəm haɪˈdrɒksaɪd/",        
        sound: "762.mp3"        
        },
        {
        name: "Cerium(III) hydroxide",        
        symbol: "Ce(OH)3",

        transcribe:"/ˈsɪərɪəm θriː haɪˈdrɒksaɪd/",        
        sound: "772.mp3"        
        },
        {
        name: "Caesi hydroxide",        
        symbol: "CsOH",

        transcribe:"/ˈsiːziəm haɪˈdrɒksaɪd/",        
        sound: "799.mp3"        
        },
        {
        name: "Gold(III) hydroxide",        
        symbol: "Au(OH)3",

        transcribe:"/gəʊld θriː haɪˈdrɒksaɪd /",        
        sound: "729.mp3"        
        },
        {
        name: "Lanthanum hydroxide",        
        symbol: "La(OH)3",

        transcribe:"/ˈlænθənəm haɪˈdrɒksaɪd/",        
        sound: "873.mp3"        
        },
        {
        name: "Rubidium hydroxide",        
        symbol: "RbOH",

        transcribe:"/ru(ː)ˈbɪdɪəm haɪˈdrɒksaɪd/",        
        sound: "952.mp3"        
        },
        {
        name: "Strontium hydroxide",        
        symbol: "Sr(OH)2",

        transcribe:"/ˈstrɒntiəm haɪˈdrɒksaɪd/",        
        sound: "975.mp3"        
        }
]

const Axit = [
    {
    name: "Hydrohalic acid",    
    symbol: "HX",
    transcribe:"/ˌhaɪdrəˌklɔːrɪk ˈæsɪd/",    
    sound: "164.mp3"    
    },
    {
    name: "Hydrofluoric acid",    
    symbol: "HF",
    transcribe:"/ˌhaɪdrəˌflʊərɪk ˈæsɪd/",    
    sound: "165.mp3"    
    },
    {
    name: "Hydrochloric acid",    
    symbol: "HCl",
    transcribe:"/ˌhaɪdrəˌklɒrɪk ˈæsɪd/",    
    sound: "166.mp3"    
    },
    {
    name: "Hydrobromic acid",    
    symbol: "HBr",
    transcribe:"/ˌhaɪdrəˌbrəʊmɪk ˈæsɪd/",    
    sound: "167.mp3"    
    },
    {
    name: "Hydroiodic acid",    
    symbol: "HI",
    transcribe:"/ˌhaɪdrəˌaɪədɪk ˈæsɪd/",    
    sound: "168.mp3"    
    },
    {
    name: "Hypochloruos acid",    
    symbol: "HClO",
    transcribe:"/haɪpəʊklɒrəs ˈæsɪd/",    
    sound: "169.mp3"    
    },
    {
    name: "Chloruos acid",    
    symbol: "HClO2",
    transcribe:"/klɒrəs ˈæsɪd/",    
    sound: "170.mp3"    
    },
    {
    name: "Chloric acid",    
    symbol: "HClO3",
    transcribe:"/klɒrɪk ˈæsɪd/",    
    sound: "171.mp3"    
    },
    {
    name: "Perchloric acid",    
    symbol: "HClO4",
    transcribe:"/pərˌklɒrɪk ˈæsɪd/",    
    sound: "172.mp3"    
    },
    {
    name: "Hydrosulfuric acid",    
    symbol: "H2S",
    transcribe:"/ˈhaɪdrəʊsʌlˌfjʊərɪk ˈæsɪd/",    
    sound: "173.mp3"    
    },
    {
    name: "Sulfuric acid",    
    symbol: "H2SO4",
    transcribe:"/sʌlˌfjʊərɪk ˈæsɪd/",    
    sound: "174.mp3"    
    },
    {
    name: "Sulfurous acid",    
    symbol: "H2SO3",
    transcribe:"/ˈsʌlfərəs ˈæsɪd/",    
    sound: "175.mp3"    
    },
    {
    name: "Nitric acid",    
    symbol: "HNO3",
    transcribe:"/ˌnaɪtrɪk ˈæsɪd/",    
    sound: "176.mp3"    
    },
    {
    name: "Nitrous acid",    
    symbol: "HNO2",
    transcribe:"/ˌnaɪtrəs ˈæsɪd/",    
    sound: "177.mp3"    
    },
    {
    name: "Phosphoric acid",    
    symbol: "H3PO4",
    transcribe:"/fɒsˌfɒrɪk ˈæsɪd/",    
    sound: "178.mp3"    
    },
    {
    name: "Phosphorous acid",    
    symbol: "H3PO3",
    transcribe:"/fɒsˌfɒrəs ˈæsɪd/",    
    sound: "179.mp3"    
    },
    {
    name: "Hypophosphorous acid",    
    symbol: "H3PO2",
    transcribe:"/haɪpəʊfɒsˌfɒrəs ˈæsɪd/",    
    sound: "180.mp3"    
    },
    {
    name: "Carbonic acid",    
    symbol: "CO2 + H2O (H2CO3)",
    transcribe:"/kɑːˌbɒnɪk ˈæsɪd/",    
    sound: "181.mp3"    
    },
    {
    name: "Boric acid",    
    symbol: "H3BO3",
    transcribe:"/ˌbɔː.rɪk ˈæs.ɪd/",    
    sound: "182.mp3"    
    },
    {
    name: "Tungstic acid",    
    symbol: "H2WO4",
    transcribe:"/ˈtʌŋstɪk ˈæsɪd/",    
    sound: "827.mp3"    
    },
    {
    name: "Arsenous acid",    
    symbol: "H3AsO3",
    transcribe:"/ˈɑrsənəs ˈæsɪd/",    
    sound: "828.mp3"    
    },
    {
    name: "Arsenic acid",    
    symbol: "H3AsO4",
    transcribe:"/ˈɑːsnɪk ˈæsɪd/",    
    sound: "829.mp3"    
    },
    {
    name: "Pyrophosphoric acid",    
    symbol: "H4P2O7",
    transcribe:"/ˈpaɪrəʊfɒsˈfɒrɪk ˈæsɪd/",    
    sound: "830.mp3"    
    },
    {
    name: "Telluric acid",    
    symbol: "H6TeO6",
    transcribe:"/tɛˈljʊərɪk ˈæsɪd/",    
    sound: "831.mp3"    
    },
    {
    name: "Gold chlorohydric acid",    
    symbol: "HAuCl4",
    transcribe:"/gəʊld ˈklɒrəʊˈhaɪdrɪk ˈæsɪd/",    
    sound: "832.mp3"    
    },
    {
    name: "Bromic acid",    
    symbol: "HBrO3",
    transcribe:"/ˈbrəʊmɪk ˈæsɪd/",    
    sound: "833.mp3"    
    },
    {
    name: "Cyanic acid",    
    symbol: "HCNO",
    transcribe:"/saɪˈænɪk ˈæsɪd /",    
    sound: "834.mp3"    
    },
    {
    name: "Iodic acid",    
    symbol: "HIO3",
    transcribe:"/aɪˈɒdɪk ˈæsɪd/",    
    sound: "843.mp3"    
    },
    {
    name: "Hydrazoic acid",    
    symbol: "HN3",
    transcribe:"/haɪdrəˈzəʊɪk ˈæsɪd/",    
    sound: "844.mp3"    
    },
    {
    name: "Hexacyanoferric (II) acid",    
    symbol: "H4Fe(CN)6",
    transcribe:"/heksəˌsaɪəˈnəʊ ˈfɛrɪk tuːˈæsɪd/",    
    sound: "704.mp3"    
    }        
]

const Muoi = [
    {
        name: "Sodium fluoride",        
        symbol: "NaF",        
        transcribe:"/ˈsəʊdiəm ˈflʊəraɪd/",        
        sound: "227.mp3"        
        },
        {
        name: "Sodium chloride",        
        symbol: "NaCl",        
        transcribe:"/ˌsoʊdiəm ˈklɔːraɪd/",        
        sound: "228.mp3"        
        },
        {
        name: "Sodium iodide",        
        symbol: "NaI",        
        transcribe:"/ˈsoʊdiəm/ <br> /ˈaɪəˌdaɪd/",        
        sound: "229.mp3"        
        },
        {
        name: "Sodium sulfate",        
        symbol: "Na2SO4",        
        transcribe:"/ˈsəʊdiəm ˈsʌlfeɪt/",        
        sound: "230.mp3"        
        },
        {
        name: "Sodium nitrate",        
        symbol: "NaNO3",        
        transcribe:"/ˈsəʊdiəm ˈnaɪtreɪt/",        
        sound: "231.mp3"        
        },
        {
        name: "Sodium sulfite",        
        symbol: "Na2SO3",        
        transcribe:"/ˈsəʊdiəmˈsʌlfaɪt/",        
        sound: "232.mp3"        
        },
        {
        name: "Trisodium phosphate",        
        symbol: "Na3PO4",        
        transcribe:"/traɪ ˈsəʊdiəm ˈfɒsfeɪt/",        
        sound: "233.mp3"        
        },
        {
        name: "Sodium bromide",        
        symbol: "NaBr",        
        transcribe:"/ˈsəʊdiəm ˈbrəʊmaɪd/",        
        sound: "234.mp3"        
        },
        {
        name: "Sodium carbonate",        
        symbol: "Na2CO3",        
        transcribe:"/ˈsəʊdiəm ˈkɑːbənɪt/",        
        sound: "235.mp3"        
        },
        {
        name: "Disodium phosphate",        
        symbol: "Na2HPO4",        
        transcribe:"/ daɪˈsoʊdiəmˈfɒsfeɪt /",        
        sound: "236.mp3"        
        },
        {
        name: "Monosodium phosphate",        
        symbol: "NaH2PO4",        
        transcribe:"/ˌmɒnəʊˌsəʊdiəm ˈfɒsfeɪt/",        
        sound: "237.mp3"        
        },
        {
        name: "Sodium hypochlorite",        
        symbol: "NaClO",        
        transcribe:"/ˈsoʊdiəmˈhīpōˈklɔːraɪt/",        
        sound: "238.mp3"        
        },
        {
        name: "Sodium chlorite",        
        symbol: "NaClO2",        
        transcribe:"/ˈsoʊdiəmˈklɔːraɪt/",        
        sound: "239.mp3"        
        },
        {
        name: "Sodium chlorate",        
        symbol: "NaClO3",        
        transcribe:"/ˈsəʊdiəm ˈklɔːrɪt/",        
        sound: "240.mp3"        
        },
        {
        name: "Sodium perchlorate",        
        symbol: "NaClO4",        
        transcribe:"/ˈsəʊdiəm pərˈklɔːrɪt/",        
        sound: "241.mp3"        
        },
        {
        name: "Sodium sulfide",        
        symbol: "Na2S",        
        transcribe:"/ˈsəʊdiəm ˈsʌlfaɪd/",        
        sound: "242.mp3"        
        },
        {
        name: "Sodium hydrogen sulfide",        
        symbol: "NaHS",        
        transcribe:"/ˈsəʊdiəm ˈhaɪdrɪʤən ˈsʌlfaɪd/",        
        sound: "243.mp3"        
        },
        {
        name: "Sodium cyanide",        
        symbol: "NaCN",        
        transcribe:"/ˈsəʊdiəm ˈsaɪənaɪd/",        
        sound: "244.mp3"        
        },
        {
        name: "Sodium thiocyanate",        
        symbol: "NaSCN",        
        transcribe:"/ˈsəʊdiəmˈθɑɪəʊˈsaɪənaɪd/",        
        sound: "245.mp3"        
        },
        {
        name: "Sodium bisulfate",        
        symbol: "NaHSO4",        
        transcribe:"/ˈsəʊdiəm bɑɪˈsʌlfeɪt/",        
        sound: "246.mp3"        
        },
        {
        name: "Sodium bisulfite",        
        symbol: "NaHSO3",        
        transcribe:"/ˈsəʊdiəm bɑɪˈsəlˌfɑɪt/",        
        sound: "247.mp3"        
        },
        {
        name: "Sodium nitrite",        
        symbol: "NaNO2",        
        transcribe:"/ˈsəʊdiəm ˈnaɪtraɪt/",        
        sound: "248.mp3"        
        },
        {
        name: "Sodium manganate",        
        symbol: "Na2MnO4",        
        transcribe:"/ˈsəʊdiəm 'mæŋ.ɡə.ˌneɪt/",        
        sound: "249.mp3"        
        },
        {
        name: "Sodium permanganate",        
        symbol: "NaMnO4",        
        transcribe:"/ˈsəʊdiəm pɜːˈmæŋgənɪt/",        
        sound: "250.mp3"        
        },
        {
        name: "Sodium hydrogen carbonate",        
        symbol: "NaHCO3",        
        transcribe:"/ˈsəʊdiəm ˈhaɪdrɪʤən ˈkɑːbənɪt/",        
        sound: "251.mp3"        
        },
        {
        name: "Sodium Hypochromite",        
        symbol: "Na2CrO2",        
        transcribe:"/ˈsəʊdiəm  ˈhīpōˈkroʊ.ˌmɑɪt/",        
        sound: "252.mp3"        
        },
        {
        name: "Sodium chromate",        
        symbol: "Na2CrO4",        
        transcribe:"/ˈsəʊdiəm  ˈkroʊ.ˌmeɪt/",        
        sound: "253.mp3"        
        },
        {
        name: "Sodium dichromate",        
        symbol: "Na2Cr2O7",        
        transcribe:"/ˈsəʊdiəm  dai'koumit/",        
        sound: "254.mp3"        
        },
        {
        name: "Sodium aluminate",        
        symbol: "NaAlO2",        
        transcribe:"/ˈsəʊdiəm  ə.ˈluː.mə.neɪt/",        
        sound: "255.mp3"        
        },
        {
        name: "Sodium zincate",        
        symbol: "Na2ZnO2",        
        transcribe:"/ˈsəʊdiəm  zɪŋkeɪt/",        
        sound: "256.mp3"        
        },
        {
        name: "Lithium chloride",        
        symbol: "LiCl",        
        transcribe:"/ˈlɪθɪəm ˈklɔːraɪd/",        
        sound: "257.mp3"        
        },
        {
        name: "Lithium sulfate",        
        symbol: "Li2SO4",        
        transcribe:"/ˈlɪθɪəm ˈsʌlfeɪt/",        
        sound: "258.mp3"        
        },
        {
        name: "Lithium nitrate",        
        symbol: "LiNO3",        
        transcribe:"/ˈlɪθɪəm ˈnaɪtreɪt/",        
        sound: "259.mp3"        
        },
        {
        name: "Lithium sulfite",        
        symbol: "Li2SO3",        
        transcribe:"/ˈlɪθɪəm ˈsʌlfaɪt /",        
        sound: "260.mp3"        
        },
        {
        name: "lithium phosphate",        
        symbol: "Li3PO4",        
        transcribe:"/ˈlɪθɪəm ˈfɒsfeɪt/",        
        sound: "261.mp3"        
        },
        {
        name: "Lithium bromide",        
        symbol: "LiBr",        
        transcribe:"/ˈlɪθɪəm ˈbrəʊmaɪd/",        
        sound: "262.mp3"        
        },
        {
        name: "Lithium carbonate",        
        symbol: "Li2CO3",        
        transcribe:"/ˈlɪθɪəm ˈkɑːbənɪt/",        
        sound: "263.mp3"        
        },
        {
        name: "Lithium Hydrogen Phosphate",        
        symbol: "Li2HPO4",        
        transcribe:"/ˈlɪθɪəm ˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "264.mp3"        
        },
        {
        name: "Lithium dihydrogen phosphate",        
        symbol: "LiH2PO4",        
        transcribe:"/ˈlɪθɪəm daɪˈhaɪdrədʒ(ə)nˈfɒsfeɪt/",        
        sound: "265.mp3"        
        },
        {
        name: "Beryllium chloride",        
        symbol: "BeCl2",        
        transcribe:"/bɛˈrɪljəm ˈklɔːraɪd/",        
        sound: "266.mp3"        
        },
        {
        name: "Beryllium sulfate",        
        symbol: "BeSO4",        
        transcribe:"/bɛˈrɪljəm ˈsʌlfeɪt/",        
        sound: "267.mp3"        
        },
        {
        name: "Beryllium nitrate",        
        symbol: "Be(NO3)2",        
        transcribe:"/bɛˈrɪljəm ˈnaɪtreɪt/",        
        sound: "268.mp3"        
        },
        {
        name: "Beryllium sulfite",        
        symbol: "BeSO3",        
        transcribe:"/bɛˈrɪljəm ˈsʌlfaɪt/",        
        sound: "269.mp3"        
        },
        {
        name: "Beryllium phosphate",        
        symbol: "Be3(PO4)2",        
        transcribe:"/bɛˈrɪljəm ˈfɒsfeɪt/",        
        sound: "270.mp3"        
        },
        {
        name: "Beryllium bromide",        
        symbol: "BeBr2",        
        transcribe:"/bɛˈrɪljəm ˈbrəʊmaɪd/",        
        sound: "271.mp3"        
        },
        {
        name: "Beryllium carbonate",        
        symbol: "BeCO3",        
        transcribe:"/bɛˈrɪljəm ˈkɑːbənɪt/",        
        sound: "272.mp3"        
        },
        {
        name: "Beryllium hydrogen phosphate",        
        symbol: "BeHPO4",        
        transcribe:"/bɛˈrɪljəm ˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "273.mp3"        
        },
        {
        name: "Beryllium Dihydrogen Phosphate",        
        symbol: "Be(H2PO4)2",        
        transcribe:"/bɛˈrɪljəm dɑɪˈhaɪdrədʒ(ə)n ˈfɒsfeɪt/",        
        sound: "274.mp3"        
        },
        {
        name: "Magnesium chloride",        
        symbol: "MgCl2",        
        transcribe:"/mægˈniːziəm ˈklɔːraɪd/",        
        sound: "275.mp3"        
        },
        {
        name: "Magnesium sulfate",        
        symbol: "MgSO4",        
        transcribe:"/mægˈniːziəm ˈsʌlfeɪt/",        
        sound: "276.mp3"        
        },
        {
        name: "Magnesium nitrate",        
        symbol: "Mg(NO3)2",        
        transcribe:"/mægˈniːziəm ˈnaɪtreɪt/",        
        sound: "277.mp3"        
        },
        {
        name: "Magnesium sulfite",        
        symbol: "MgSO3",        
        transcribe:"/mægˈniːziəmˈsʌlfaɪt/",        
        sound: "278.mp3"        
        },
        {
        name: "Trimagnesium phosphate",        
        symbol: "Mg3(PO4)2",        
        transcribe:"/trɑɪmæɡˈniːziəm ‘fɒsfeɪt/",        
        sound: "279.mp3"        
        },
        {
        name: "Magnesium bromide",        
        symbol: "MgBr2",        
        transcribe:"/mægˈniːziəm ˈbrəʊmaɪd/",        
        sound: "280.mp3"        
        },
        {
        name: "Magnesium carbonate",        
        symbol: "MgCO3",        
        transcribe:"/mægˈniːziəm ˈkɑːbənɪt/",        
        sound: "281.mp3"        
        },
        {
        name: "Dimagnesium phosphate",        
        symbol: "MgHPO4",        
        transcribe:"/dɑɪ mægˈniːziəm ˈfɒsfeɪt/",        
        sound: "282.mp3"        
        },
        {
        name: "Magnesium Dihydrogen Phosphate",        
        symbol: "Mg(H2PO4)2",        
        transcribe:"/mægˈniːziəm dɑɪˈhaɪdrədʒ(ə)n  ˈfɒsfeɪt/",        
        sound: "283.mp3"        
        },
        {
        name: "Magnesium sulfate",        
        symbol: "MgS",        
        transcribe:"/ˈsəʊdiəm ˈaɪəʊdaɪd/",        
        sound: "284.mp3"        
        },
        {
        name: "Potassium fluoride",        
        symbol: "KF",        
        transcribe:"/pəˈtæsiəm ˈflʊəraɪd/",        
        sound: "285.mp3"        
        },
        {
        name: "Potassium chloride",        
        symbol: "KCl",        
        transcribe:"/pəˈtæsiəm ˈklɔːraɪd/",        
        sound: "286.mp3"        
        },
        {
        name: "Potassium sulfate",        
        symbol: "K2SO4",        
        transcribe:"/pəˈtæsiəm ˈsʌlfeɪt/",        
        sound: "287.mp3"        
        },
        {
        name: "Potassium nitrate",        
        symbol: "KNO3",        
        transcribe:"/pəˈtæsiəm ˈnaɪtreɪt/",        
        sound: "288.mp3"        
        },
        {
        name: "Potassium sulfite",        
        symbol: "K2SO3",        
        transcribe:"/pəˈtæsiəm ˈsʌlfaɪt/",        
        sound: "289.mp3"        
        },
        {
        name: "Tripotassium phosphate",        
        symbol: "K3PO4",        
        transcribe:"/trɑɪpəˈtæsiəm ˈfɒsfeɪt/",        
        sound: "290.mp3"        
        },
        {
        name: "Potassium bromide",        
        symbol: "KBr",        
        transcribe:"/pəˈtæsiəm ˈbrəʊmaɪd/",        
        sound: "291.mp3"        
        },
        {
        name: "Potassium carbonate",        
        symbol: "K2CO3",        
        transcribe:"/pəˈtæsiəm ˈkɑːbənɪt/",        
        sound: "292.mp3"        
        },
        {
        name: "Dipotassium phosphate",        
        symbol: "K2HPO4",        
        transcribe:"/dɑɪpəˈtæsiəm  ˈfɒsfeɪt/",        
        sound: "293.mp3"        
        },
        {
        name: "Monopotassium phosphate",        
        symbol: "KH2PO4",        
        transcribe:"/ˈmɒnəʊpəˈtæsiəm ˈ fɒsfeɪt/",        
        sound: "294.mp3"        
        },
        {
        name: "Potassium hypochlorite",        
        symbol: "KClO",        
        transcribe:"/pəˈtæsiəm ˈhīpōˈklɔːraɪd/",        
        sound: "295.mp3"        
        },
        {
        name: "Potassium Chlorite",        
        symbol: "KClO2",        
        transcribe:"/pəˈtæsiəmˈklɔːraɪt/",        
        sound: "296.mp3"        
        },
        {
        name: "Potassium chlorate",        
        symbol: "KClO3",        
        transcribe:"/pəˈtæsiəm ˈklɔːrɪt/",        
        sound: "297.mp3"        
        },
        {
        name: "Potassium perchlorate",        
        symbol: "KClO4",        
        transcribe:"/pəˈtæsiəm  pɜːˈklɔːrɪt/",        
        sound: "298.mp3"        
        },
        {
        name: "Potassium sulfide",        
        symbol: "K2S",        
        transcribe:"/pəˈtæsiəm ˈsʌlfaɪd/",        
        sound: "299.mp3"        
        },
        {
        name: "Potassium hydrosulfide",        
        symbol: "KHS",        
        transcribe:"/pəˈtæsiəm  ˈhaɪdrəʊˈsʌlfaɪd/",        
        sound: "300.mp3"        
        },
        {
        name: "Potassium cyanide",        
        symbol: "KCN",        
        transcribe:"/pəˈtæsiəm ˈsaɪənaɪd/",        
        sound: "301.mp3"        
        },
        {
        name: "Potassium thiocyanate",        
        symbol: "KSCN",        
        transcribe:"/pəˈtæsiəm ˈθɑɪəʊˈsaɪənaɪd/",        
        sound: "302.mp3"        
        },
        {
        name: "Potassium bisulfate",        
        symbol: "KHSO4",        
        transcribe:"/pəˈtæsiəm  baɪˈsʌlfeɪt/",        
        sound: "303.mp3"        
        },
        {
        name: "Potassium bisulfite",        
        symbol: "KHSO3",        
        transcribe:"/pəˈtæsiəm  baɪ ˈsəl.fɑɪt/",        
        sound: "304.mp3"        
        },
        {
        name: "Potassium nitrite",        
        symbol: "KNO2",        
        transcribe:"/pəˈtæsiəm ˈnaɪtraɪt/",        
        sound: "305.mp3"        
        },
        {
        name: "Potassium manganate",        
        symbol: "K2MnO4",        
        transcribe:"/pəˈtæsiəm  ˈmæŋ.ɡə.ˌneɪt/",        
        sound: "306.mp3"        
        },
        {
        name: "Potassium permanganate",        
        symbol: "KMnO4",        
        transcribe:"/pəˈtæsiəm  pɜːˈmæŋ.ɡə.ˌneɪt/",        
        sound: "307.mp3"        
        },
        {
        name: "Potassium bicarbonate",        
        symbol: "KHCO3",        
        transcribe:"/pəˈtæsiəm baɪˈkɑːbənɪt/",        
        sound: "308.mp3"        
        },
        {
        name: "Potassium Hypochromite",        
        symbol: "K2CrO2",        
        transcribe:"/pəˈtæsiəm  ˈhīpōˈkroʊ.ˌmɑɪt/",        
        sound: "309.mp3"        
        },
        {
        name: "Potassium chromate",        
        symbol: "K2CrO4",        
        transcribe:"/pəˈtæsiəm  ˈkroʊ.ˌmeɪt/",        
        sound: "310.mp3"        
        },
        {
        name: "Potassium dichromate",        
        symbol: "K2Cr2O7",        
        transcribe:"/pəˈtæsiəm daiˈkroʊ.ˌmeɪt/",        
        sound: "311.mp3"        
        },
        {
        name: "Potassium aluminate",        
        symbol: "KAlO2",        
        transcribe:"/pəˈtæsiəm  ə.ˈluː.mə.nəm/",        
        sound: "312.mp3"        
        },
        {
        name: "Potassium Zincate",        
        symbol: "K2ZnO2",        
        transcribe:"/pəˈtæsiəm  zɪŋkeɪt/",        
        sound: "313.mp3"        
        },
        {
        name: "Calcium chloride",        
        symbol: "CaCl2",        
        transcribe:"/ˈkælsɪəm ˈklɔːraɪd/",        
        sound: "314.mp3"        
        },
        {
        name: "Calcium sulfate",        
        symbol: "CaSO4",        
        transcribe:"/ˈkælsɪəm ˈsʌlfeɪt/",        
        sound: "315.mp3"        
        },
        {
        name: "Calcium nitrate",        
        symbol: "Ca(NO3)2",        
        transcribe:"/ˈkælsɪəm ˈnaɪtreɪt/",        
        sound: "316.mp3"        
        },
        {
        name: "Calcium sulfite",        
        symbol: "CaSO3",        
        transcribe:"/ˈkælsɪəmˈsʌlfaɪt/",        
        sound: "317.mp3"        
        },
        {
        name: "Calcium phosphate",        
        symbol: "Ca3(PO4)2",        
        transcribe:"/ˈkælsɪəm ˈfɒsfeɪt/",        
        sound: "318.mp3"        
        },
        {
        name: "Calcium bromide",        
        symbol: "CaBr2",        
        transcribe:"/ˈkælsɪəm ˈbrəʊmaɪd/",        
        sound: "319.mp3"        
        },
        {
        name: "Calcium carbonate",        
        symbol: "CaCO3",        
        transcribe:"/ˈkælsɪəm ˈkɑːbənɪt/",        
        sound: "320.mp3"        
        },
        {
        name: "Dicalcium phosphate",        
        symbol: "CaHPO4",        
        transcribe:"/dɑɪˈkælsɪəm ˈfɒsfeɪt/",        
        sound: "321.mp3"        
        },
        {
        name: "Monocalcium phosphate",        
        symbol: "Ca(H2PO4)2",        
        transcribe:"/ˈmɒnəʊˈkælsɪəm ˈfɒsfeɪt/",        
        sound: "322.mp3"        
        },
        {
        name: "Calcium fluoride",        
        symbol: "CaF2",        
        transcribe:"/ˈkælsiəm ˈflʊˌraɪd/",        
        sound: "323.mp3"        
        },
        {
        name: "Calcium hypochlorite",        
        symbol: "Ca(ClO)2",        
        transcribe:"/ˈkælsɪəm ˈhīpōˈklɔːraɪt/",        
        sound: "324.mp3"        
        },
        {
        name: "Calcium iodide",        
        symbol: "CaI2",        
        transcribe:"/ˈkælsɪəm ˈaɪəʊdaɪd/",        
        sound: "325.mp3"        
        },
        {
        name: "Calcium chlorate",        
        symbol: "Ca(ClO3)2",        
        transcribe:"/ˈkælsɪəm ˈklɔːrɪt/",        
        sound: "326.mp3"        
        },
        {
        name: "Calcium chlorite",        
        symbol: "Ca(ClO2)2",        
        transcribe:"/ˈkælsɪəm ˈklɔːraɪd/",        
        sound: "327.mp3"        
        },
        {
        name: "Calcium perchlorate",        
        symbol: "Ca(ClO4)2",        
        transcribe:"/ˈkælsɪəm pɜːˈklɔːrɪt/",        
        sound: "328.mp3"        
        },
        {
        name: "Calcium sulfide",        
        symbol: "CaS",        
        transcribe:"/ˈkælsɪəm ˈsʌlfaɪd/",        
        sound: "329.mp3"        
        },
        {
        name: "Calcium dihydrosulfide",        
        symbol: "Ca(HS)2",        
        transcribe:"/ˈkælsɪəm daɪˈhaɪdrəʊˈsʌlfaɪd/",        
        sound: "330.mp3"        
        },
        {
        name: "Calcium dicarbide",        
        symbol: "CaC2",        
        transcribe:"/ˈkælsɪəm daɪ 'kɑ:baid/",        
        sound: "331.mp3"        
        },
        {
        name: "Tricalcium dinitride",        
        symbol: "Ca3N2",        
        transcribe:"/traiˈkælsɪəm daɪ ˈnaɪtraɪd/",        
        sound: "332.mp3"        
        },
        {
        name: "Tricalcium diphosphide",        
        symbol: "Ca3P2",        
        transcribe:"/traiˈkælsɪəm daɪˈfɒsfaɪd/",        
        sound: "333.mp3"        
        },
        {
        name: "Calcium hydrogen sulfate",        
        symbol: "Ca(HSO4)2",        
        transcribe:"/ˈkælsɪəm ˈhaɪdrɪʤən ˈsʌlfeɪt/",        
        sound: "334.mp3"        
        },
        {
        name: "Calcium bisulfite",        
        symbol: "Ca(HSO3)2",        
        transcribe:"/ˈkælsɪəm baiˈsəl.ˌfɑɪt/",        
        sound: "335.mp3"        
        },
        {
        name: "Calcium hydrogen carbonate",        
        symbol: "Ca(HCO3)2",        
        transcribe:"/ˈkælsɪəm ˈhaɪdrɪʤən ˈkɑːbənɪt/",        
        sound: "336.mp3"        
        },
        {
        name: "Dialuminum calcium tetraoxide",        
        symbol: "Ca(AlO2)2",        
        transcribe:"/daɪ al(j)ʊˈmɪnɪəmˈkælsɪəm ˈtetrə ɒksaɪd/",        
        sound: "337.mp3"        
        },
        {
        name: "Calcium zincate",        
        symbol: "CaZnO2",        
        transcribe:"/ˈkælsɪəm  ˈzɪŋkeit/",        
        sound: "338.mp3"        
        },
        {
        name: "Scandium chloride",        
        symbol: "ScCl3",        
        transcribe:"/ˈskændɪəm ˈklɔːraɪd/",        
        sound: "339.mp3"        
        },
        {
        name: "Scandium sulfate",        
        symbol: "Sc2(SO4)3",        
        transcribe:"/ˈskændɪəm ˈsʌlfeɪt/",        
        sound: "340.mp3"        
        },
        {
        name: "Scandium Nitrate",        
        symbol: "Sc(NO3)3",        
        transcribe:"/ˈskændɪəm ˈnaɪtreɪt/",        
        sound: "341.mp3"        
        },
        {
        name: "ScandiumSulfite",        
        symbol: "Sc2(SO3)3",        
        transcribe:"/ˈskændɪəm  ˈsʌlfaɪt/",        
        sound: "342.mp3"        
        },
        {
        name: "Scandium Phosphate",        
        symbol: "ScPO4",        
        transcribe:"/ˈskændɪəm ˈfɒsfeɪt/",        
        sound: "343.mp3"        
        },
        {
        name: "Scandium bromide",        
        symbol: "ScBr3",        
        transcribe:"/ˈskændɪəm ˈbrəʊmaɪd/",        
        sound: "344.mp3"        
        },
        {
        name: "Scandium Carbonate",        
        symbol: "Sc2(CO3)3",        
        transcribe:"/ˈskændɪəm ˈkɑːbənɪt/",        
        sound: "345.mp3"        
        },
        {
        name: "Scandium Hydrogen Phosphate",        
        symbol: "Sc2(HPO4)3",        
        transcribe:"/ˈskændɪəm ˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "346.mp3"        
        },
        {
        name: "Scandium Dihydrogen Phosphate",        
        symbol: "Sc(H2PO4)3",        
        transcribe:"/ˈskændɪəm dɑɪˈhaɪdrədʒ(ə)n ˈfɒsfeɪt/",        
        sound: "347.mp3"        
        },
        {
        name: "Titanium tetrachloride",        
        symbol: "TiCl4",        
        transcribe:"/taɪˈteɪniəm ˈtetrəˈklɔːraɪd/",        
        sound: "348.mp3"        
        },
        {
        name: "Titanium disulfate",        
        symbol: "Ti2(SO4)4",        
        transcribe:"/taɪˈteɪniəm dɑɪˈsʌlfeɪt/",        
        sound: "349.mp3"        
        },
        {
        name: "Titanium nitrate",        
        symbol: "Ti(NO3)4",        
        transcribe:"/taɪˈteɪniəm ˈnaɪtreɪt/",        
        sound: "350.mp3"        
        },
        {
        name: "Titanium Sulfite",        
        symbol: "Ti(SO3)2",        
        transcribe:"/taɪˈteɪniəmˈsʌlfaɪt/",        
        sound: "351.mp3"        
        },
        {
        name: "Titanium Phosphate",        
        symbol: "Ti3(PO4)4",        
        transcribe:"/taɪˈteɪniəm ˈfɒsfeɪt/",        
        sound: "352.mp3"        
        },
        {
        name: "Titanium tetrabromide",        
        symbol: "TiBr4",        
        transcribe:"/taɪˈteɪniəm ˈtetrəˈbrəʊmaɪd/",        
        sound: "353.mp3"        
        },
        {
        name: "Titanium carbonate",        
        symbol: "Ti(CO3)2",        
        transcribe:"/taɪˈteɪniəm ˈkɑːbənɪt/",        
        sound: "354.mp3"        
        },
        {
        name: "Titanium Hydrogen Phosphate",        
        symbol: "Ti(HPO4)2",        
        transcribe:"/taɪˈteɪniəm ˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "355.mp3"        
        },
        {
        name: "Vanadium chloride",        
        symbol: "VCl5",        
        transcribe:"/vəˈneɪdjəm ˈklɔːraɪd/",        
        sound: "356.mp3"        
        },
        {
        name: "Vanadium Bromide",        
        symbol: "VBr5",        
        transcribe:"/vəˈneɪdjəm ˈbrəʊmaɪd/",        
        sound: "357.mp3"        
        },
        {
        name: "Vanadium Sulfate",        
        symbol: "V2(SO4)5",        
        transcribe:"/vəˈneɪdjəm ˈsʌlfeɪt/",        
        sound: "358.mp3"        
        },
        {
        name: "Vanadium Nitrate",        
        symbol: "V(NO3)5",        
        transcribe:"/vəˈneɪdjəm ˈnaɪtreɪt/",        
        sound: "359.mp3"        
        },
        {
        name: "Vanadium Sulfite",        
        symbol: "V2(SO3)5",        
        transcribe:"/vəˈneɪdjəmˈsʌlfaɪt/",        
        sound: "360.mp3"        
        },
        {
        name: "Vanadium Phosphate",        
        symbol: "V3(PO4)5",        
        transcribe:"/vəˈneɪdjəm ˈfɒsfeɪt/",        
        sound: "361.mp3"        
        },
        {
        name: "Vanadium Carbonate",        
        symbol: "V2(CO3)5",        
        transcribe:"/vəˈneɪdjəmˈkɑːbənɪt/",        
        sound: "362.mp3"        
        },
        {
        name: "Vanadium Hydrogen Phosphate",        
        symbol: "V2(HPO4)5",        
        transcribe:"/vəˈneɪdjəmˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "363.mp3"        
        },
        {
        name: "Zinc chloride",        
        symbol: "ZnCl2",        
        transcribe:"/zɪŋk ˈklɔːraɪd/",        
        sound: "364.mp3"        
        },
        {
        name: "Zinc sulfate",        
        symbol: "ZnSO4",        
        transcribe:"/zɪŋk ˈsʌlfeɪt/",        
        sound: "365.mp3"        
        },
        {
        name: "Zinc nitrate",        
        symbol: "Zn(NO3)2",        
        transcribe:"/zɪŋk ˈnaɪtreɪt/",        
        sound: "366.mp3"        
        },
        {
        name: "Zinc sulfite",        
        symbol: "ZnSO3",        
        transcribe:"/zɪŋk ˈsʌlfaɪt/",        
        sound: "367.mp3"        
        },
        {
        name: "Zinc phosphate",        
        symbol: "Zn3(PO4)2",        
        transcribe:"/zɪŋk ˈfɒsfeɪt/",        
        sound: "368.mp3"        
        },
        {
        name: "Zinc monocarbonate",        
        symbol: "ZnCO3",        
        transcribe:"/ zɪŋk ˈmɒnəʊˈkɑːbənɪt/",        
        sound: "369.mp3"        
        },
        {
        name: "Zinc Hydrogen Phosphate",        
        symbol: "ZnHPO4",        
        transcribe:"/zɪŋk ˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "370.mp3"        
        },
        {
        name: "Zinc sulfide",        
        symbol: "ZnS",        
        transcribe:"/zɪŋk ˈsʌlfaɪd/",        
        sound: "371.mp3"        
        },
        {
        name: "Zinc phosphide",        
        symbol: "Zn3P2",        
        transcribe:"/zɪŋk ˈfɒsfaɪd/",        
        sound: "372.mp3"        
        },
        {
        name: "Zinc bromide",        
        symbol: "ZnBr2",        
        transcribe:"/zɪŋk ˈbrəʊmaɪd/",        
        sound: "373.mp3"        
        },
        {
        name: "Aluminium chloride",        
        symbol: "AlCl3",        
        transcribe:"/ˌæləˈmɪniəm ˈklɔːraɪd/",        
        sound: "374.mp3"        
        },
        {
        name: "Aluminium sulfate",        
        symbol: "Al2(SO4)3",        
        transcribe:"/ˌæləˈmɪniəm ˈsʌlfeɪt/",        
        sound: "375.mp3"        
        },
        {
        name: "Aluminium nitrate",        
        symbol: "Al(NO3)3",        
        transcribe:"/ˌæləˈmɪniəm ˈnaɪtreɪt/",        
        sound: "376.mp3"        
        },
        {
        name: "Aluminum Sulfite",        
        symbol: "Al2(SO3)3",        
        transcribe:"/ˌæləˈmɪniəmˈsʌlfaɪt/",        
        sound: "377.mp3"        
        },
        {
        name: "Aluminium phosphate",        
        symbol: "AlPO4",        
        transcribe:"/ˌæləˈmɪniəm ˈfɒsfeɪt/",        
        sound: "378.mp3"        
        },
        {
        name: "Aluminum carbonate",        
        symbol: "Al2(CO3)3",        
        transcribe:"/ˌæləˈmɪniəm ˈkɑːbənɪt/",        
        sound: "379.mp3"        
        },
        {
        name: "Aluminium bromide",        
        symbol: "AlBr3",        
        transcribe:"/ˌæləˈmɪniəm ˈbrəʊmaɪd/",        
        sound: "380.mp3"        
        },
        {
        name: "Aluminum carbide",        
        symbol: "Al4C3",        
        transcribe:"/ˌæləˈmɪniəm ˈkɑːbaɪd/",        
        sound: "381.mp3"        
        },
        {
        name: "Aluminium monophosphide",        
        symbol: "AlP",        
        transcribe:"/ˌæləˈmɪniəm  ˈmɒnəʊˈfɒsfaɪd/",        
        sound: "382.mp3"        
        },
        {
        name: "Aluminum Hydrogen Phosphate",        
        symbol: "Al2(HPO4)3",        
        transcribe:"/ˌæləˈmɪniəm ˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "383.mp3"        
        },
        {
        name: "Chromium(II) chloride",        
        symbol: "CrCl2",        
        transcribe:"/ˈkrəʊmiəm tuːˈklɔːraɪd/",        
        sound: "384.mp3"        
        },
        {
        name: "Chromium(II) sulfate",        
        symbol: "CrSO4",        
        transcribe:"/ˈkrəʊmiəm tuːˈsʌlfeɪt/",        
        sound: "385.mp3"        
        },
        {
        name: "Chromium(II) nitrate",        
        symbol: "Cr(NO3)2",        
        transcribe:"/ˈkrəʊmiəm tuː ˈnaɪtreɪt/",        
        sound: "386.mp3"        
        },
        {
        name: "Chromium(II) Sulfite",        
        symbol: "CrSO3",        
        transcribe:"/ˈkrəʊmiəm tuːˈsʌlfaɪt/",        
        sound: "387.mp3"        
        },
        {
        name: "Chromium(II)phosphate",        
        symbol: "Cr3(PO4)2",        
        transcribe:"/ˈkrəʊmiəm tuːˈfɒsfeɪt/",        
        sound: "388.mp3"        
        },
        {
        name: "Chromium (II) bromide",        
        symbol: "CrBr2",        
        transcribe:"/ˈkrəʊmiəm tuː ˈbrəʊmaɪd/",        
        sound: "389.mp3"        
        },
        {
        name: "Chromium (II)carbonate",        
        symbol: "CrCO3",        
        transcribe:"/ˈkrəʊmiəm tuː ˈkɑːbənɪt/",        
        sound: "390.mp3"        
        },
        {
        name: "Chromium (II)Hydrogen Phosphate",        
        symbol: "CrHPO4",        
        transcribe:"/ˈkrəʊmiəm tuː ˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "391.mp3"        
        },
        {
        name: "Chromium Dihydrogen Chromium",        
        symbol: "Cr(H2PO4)2",        
        transcribe:"/ˈkrəʊmiəm dɑɪˈhaɪdrədʒ(ə)n ˈfɒsfeɪt/",        
        sound: "392.mp3"        
        },
        {
        name: "Chromium(III) chloride",        
        symbol: "CrCl3",        
        transcribe:"/ˈkrəʊmiəm θriːklɔːraɪd/",        
        sound: "393.mp3"        
        },
        {
        name: "Chromium(III) sulfate",        
        symbol: "Cr2(SO4)3",        
        transcribe:"/ˈkrəʊmiəm θriːˈsʌlfeɪt/",        
        sound: "394.mp3"        
        },
        {
        name: "Chromium(III) Nitrate",        
        symbol: "Cr(NO3)3",        
        transcribe:"/ˈkrəʊmiəm θriː ˈnaɪtreɪt/",        
        sound: "395.mp3"        
        },
        {
        name: "Chromium(III) Sulfite",        
        symbol: "Cr2(SO3)3",        
        transcribe:"/ˈkrəʊmiəm θriː ˈsʌlfaɪt/",        
        sound: "396.mp3"        
        },
        {
        name: "Chromium(III) phosphate",        
        symbol: "CrPO4",        
        transcribe:"/ˈkrəʊmiəm θriː ˈbrəʊmaɪd/",        
        sound: "397.mp3"        
        },
        {
        name: "Chromium (III) bromide",        
        symbol: "CrBr3",        
        transcribe:"/ˈkrəʊmiəm θriː ˈbrəʊmaɪd/",        
        sound: "398.mp3"        
        },
        {
        name: "Chromium (III)carbonate",        
        symbol: "Cr2(CO3)3",        
        transcribe:"/ˈkrəʊmiəm θriː ˈkɑːbənɪt/",        
        sound: "399.mp3"        
        },
        {
        name: "Chromium (III)Hydrogen Phosphate",        
        symbol: "Cr2(HPO4)3",        
        transcribe:"/ˈkrəʊmiəm θriː ˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "400.mp3"        
        },
        {
        name: "Chromium(III) Dihydrogen Chromium",        
        symbol: "Cr(H2PO4)3",        
        transcribe:"/ˈkrəʊmiəm dɑɪˈhaɪdrədʒ(ə)n ˈfɒsfeɪt/",        
        sound: "401.mp3"        
        },
        {
        name: "Barium chloride",        
        symbol: "BaCl2",        
        transcribe:"/ˈbeərɪəm ˈklɔːraɪd/",        
        sound: "402.mp3"        
        },
        {
        name: "Barium sulfate",        
        symbol: "BaSO4",        
        transcribe:"/ˈbeərɪəm ˈsʌlfeɪt/",        
        sound: "403.mp3"        
        },
        {
        name: "Barium nitrate",        
        symbol: "Ba(NO3)2",        
        transcribe:"/ˈbeərɪəm ˈnaɪtreɪt/",        
        sound: "404.mp3"        
        },
        {
        name: "Barium sulfite",        
        symbol: "BaSO3",        
        transcribe:"/ˈbeərɪəm  ˈsʌlfaɪt/",        
        sound: "405.mp3"        
        },
        {
        name: "Barium phosphate",        
        symbol: "Ba3(PO4)2",        
        transcribe:"/ˈbeərɪəm ˈfɒsfeɪt/",        
        sound: "406.mp3"        
        },
        {
        name: "Barium bromide",        
        symbol: "BaBr2",        
        transcribe:"/ˈbeərɪəm ˈbrəʊmaɪd/",        
        sound: "407.mp3"        
        },
        {
        name: "Barium carbonate",        
        symbol: "BaCO3",        
        transcribe:"/ˈbeərɪəm ˈkɑːbənɪt/",        
        sound: "408.mp3"        
        },
        {
        name: "Barium Hydrogen Phosphate",        
        symbol: "BaHPO4",        
        transcribe:"/ˈbeərɪəm ˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "409.mp3"        
        },
        {
        name: "Barium Aluminate",        
        symbol: "Ba(AlO2)2",        
        transcribe:"/ˈbeərɪəm al(j)ʊˈmɪnɪneit/",        
        sound: "410.mp3"        
        },
        {
        name: "Barium Zincate",        
        symbol: "BaZnO2",        
        transcribe:"/ˈbeərɪəmˈzɪŋkeit/",        
        sound: "411.mp3"        
        },
        {
        name: "Barium sulfide",        
        symbol: "BaS",        
        transcribe:"/ˈbeərɪəm ˈsʌlfaɪd/",        
        sound: "412.mp3"        
        },
        {
        name: "Barium Hydrogen Sulfite",        
        symbol: "Ba(HSO3)2",        
        transcribe:"/ˈbeərɪəm ˈhaɪdrɪʤənˈsʌlfaɪt/",        
        sound: "413.mp3"        
        },
        {
        name: "Barium Bicarbonate",        
        symbol: "Ba(HCO3)2",        
        transcribe:"/ˈbeərɪəm baɪˈkɑːbənɪt/",        
        sound: "414.mp3"        
        },
        {
        name: "Bari dihydrogen phosphate",        
        symbol: "Ba(H2PO4)2",        
        transcribe:"/ˈbeərɪəm  dɑɪˈhaɪdrədʒ(ə)n ˈfɒsfeɪt/",        
        sound: "415.mp3"        
        },
        {
        name: "Manganese(II) chloride",        
        symbol: "MnCl2",        
        transcribe:"/mæŋgəˈniːz tuː ˈklɔːraɪd/",        
        sound: "416.mp3"        
        },
        {
        name: "Manganese(IV) chloride",        
        symbol: "MnCl4",        
        transcribe:"/mæŋgəˈniːz fɔːˈklɔːraɪd/",        
        sound: "417.mp3"        
        },
        {
        name: "Manganese(VII) chloride",        
        symbol: "MnCl7",        
        transcribe:"/mæŋgəˈniːz ˈsɛvnˈklɔːraɪd/",        
        sound: "418.mp3"        
        },
        {
        name: "Manganese(II) sulfate",        
        symbol: "MnSO4",        
        transcribe:"/mæŋgəˈniːz tuː ˈsʌlfeɪt/",        
        sound: "419.mp3"        
        },
        {
        name: "Manganese(IV) Sulfate",        
        symbol: "Mn(SO4)2",        
        transcribe:"/mæŋgəˈniːz fɔːˈsʌlfeɪt/",        
        sound: "420.mp3"        
        },
        {
        name: "Manganese(VII) Sulfate",        
        symbol: "Mn2(SO4)7",        
        transcribe:"/mæŋgəˈniːz ˈsɛvn ˈsʌlfeɪt/",        
        sound: "421.mp3"        
        },
        {
        name: "Manganese(II) nitrate",        
        symbol: "Mn(NO3)2",        
        transcribe:"/mæŋgəˈniːz tuːˈnaɪtreɪt/",        
        sound: "422.mp3"        
        },
        {
        name: "Manganese(IV) nitrate",        
        symbol: "Mn(NO3)4",        
        transcribe:"/mæŋgəˈniːz fɔːˈnaɪtreɪt/",        
        sound: "423.mp3"        
        },
        {
        name: "Manganese(VII) nitrate",        
        symbol: "Mn(NO3)7",        
        transcribe:"/mæŋgəˈniːz ˈsɛvnˈnaɪtreɪt/",        
        sound: "424.mp3"        
        },
        {
        name: "Manganese(II) sulfite",        
        symbol: "MnSO3",        
        transcribe:"/mæŋgəˈniːz tuː ˈsʌlfaɪt/",        
        sound: "425.mp3"        
        },
        {
        name: "Manganese(IV) sulfite",        
        symbol: "Mn(SO3)2",        
        transcribe:"/mæŋgəˈniːz fɔːˈsʌlfaɪt/",        
        sound: "426.mp3"        
        },
        {
        name: "Manganese(VII) sulfite",        
        symbol: "Mn2(SO3)7",        
        transcribe:"/mæŋgəˈniːz ˈsɛvnˈsʌlfaɪt/",        
        sound: "427.mp3"        
        },
        {
        name: "Manganese(II) phosphate",        
        symbol: "Mn3(PO4)2",        
        transcribe:"/mæŋgəˈniːz tuːˈfɒsfeɪt/",        
        sound: "428.mp3"        
        },
        {
        name: "Manganese(IV) phosphate",        
        symbol: "Mn3(PO4)4",        
        transcribe:"/mæŋgəˈniːz fɔːˈfɒsfeɪt/",        
        sound: "429.mp3"        
        },
        {
        name: "Manganese(VII) phosphate",        
        symbol: "Mn3(PO4)7",        
        transcribe:"/mæŋgəˈniːz ˈsɛvnˈfɒsfeɪt/",        
        sound: "430.mp3"        
        },
        {
        name: "Manganese(II) bromide",        
        symbol: "MnBr2",        
        transcribe:"/mæŋgəˈniːz tuː ˈbrəʊmaɪd/",        
        sound: "431.mp3"        
        },
        {
        name: "Manganese(IV) bromide",        
        symbol: "MnBr4",        
        transcribe:"/mæŋgəˈniːz fɔːˈbrəʊmaɪd/",        
        sound: "432.mp3"        
        },
        {
        name: "Manganese(VII) bromide",        
        symbol: "MnBr7",        
        transcribe:"/mæŋgəˈniːz ˈsɛvnˈbrəʊmaɪd/",        
        sound: "433.mp3"        
        },
        {
        name: "Manganese(II) carbonate",        
        symbol: "MnCO3",        
        transcribe:"/mæŋgəˈniːz tuː ˈkɑːbənɪt/",        
        sound: "434.mp3"        
        },
        {
        name: "Manganese(IV) carbonate",        
        symbol: "Mn(CO3)2",        
        transcribe:"/mæŋgəˈniːz fɔːˈkɑːbənɪt/",        
        sound: "435.mp3"        
        },
        {
        name: "Manganese(VII) carbonate",        
        symbol: "Mn2(CO3)7",        
        transcribe:"/mæŋgəˈniːz ˈsɛvnˈkɑːbənɪt/",        
        sound: "436.mp3"        
        },
        {
        name: "Manganese(II) Hydrogen Phosphate",        
        symbol: "MnHPO4",        
        transcribe:"/mæŋgəˈniːz tuːˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "437.mp3"        
        },
        {
        name: "Manganese(IV) Hydrogen Phosphate",        
        symbol: "Mn(HPO4)2",        
        transcribe:"/mæŋgəˈniːz fɔːˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "438.mp3"        
        },
        {
        name: "Manganese(VII) Hydrogen Phosphate",        
        symbol: "Mn2(HPO4)7",        
        transcribe:"/mæŋgəˈniːz ˈsɛvnˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "439.mp3"        
        },
        {
        name: "Manganese(II) dihydrogen phosphate",        
        symbol: "Mn(H2PO4)2",        
        transcribe:"/mæŋgəˈniːz tuːdɑɪˈhaɪdrədʒ(ə)n ˈfɒsfeɪt/",        
        sound: "440.mp3"        
        },
        {
        name: "Manganese(IV) dihydrogen phosphate",        
        symbol: "Mn(H2PO4)4",        
        transcribe:"/mæŋgəˈniːz fɔː/",        
        sound: "441.mp3"        
        },
        {
        name: "Manganese(VII) dihydrogen phosphate",        
        symbol: "Mn(H2PO4)7",        
        transcribe:"/mæŋgəˈniːz ˈsɛvn dɑɪˈhaɪdrədʒ(ə)n ˈfɒsfeɪt/",        
        sound: "442.mp3"        
        },
        {
        name: "Iron(II) chloride",        
        symbol: "FeCl2",        
        transcribe:"/ˈaɪən tuː ˈklɔːraɪd/",        
        sound: "443.mp3"        
        },
        {
        name: "Iron(III) chloride",        
        symbol: "FeCl3",        
        transcribe:"/ˈaɪən θriːˈklɔːraɪd/",        
        sound: "444.mp3"        
        },
        {
        name: "Iron(II) sulfate",        
        symbol: "FeSO4",        
        transcribe:"/ˈaɪən tuː ˈsʌlfeɪt/",        
        sound: "445.mp3"        
        },
        {
        name: "Iron(III) sulfate",        
        symbol: "Fe2(SO4)3",        
        transcribe:"/ˈaɪən θriːˈsʌlfeɪt/",        
        sound: "446.mp3"        
        },
        {
        name: "Iron(II) nitrate",        
        symbol: "Fe(NO3)2",        
        transcribe:"/ˈaɪən  tuːˈnaɪtreɪt/",        
        sound: "447.mp3"        
        },
        {
        name: "Iron(III) nitrate",        
        symbol: "Fe(NO3)3",        
        transcribe:"/ˈaɪən θriːˈnaɪtreɪt/",        
        sound: "448.mp3"        
        },
        {
        name: "Iron(II) sulfite",        
        symbol: "FeSO3",        
        transcribe:"/ˈaɪən tuːˈsʌlfaɪt/",        
        sound: "449.mp3"        
        },
        {
        name: "Iron(III) sulfite",        
        symbol: "Fe2(SO3)3",        
        transcribe:"/ˈaɪən θriːˈsʌlfaɪt/",        
        sound: "450.mp3"        
        },
        {
        name: "Iron(II) phosphate",        
        symbol: "Fe3(PO4)2",        
        transcribe:"/ˈaɪən tuːˈfɒsfeɪt/",        
        sound: "451.mp3"        
        },
        {
        name: "Iron(III) phosphate",        
        symbol: "FePO4",        
        transcribe:"/ˈaɪən θriːˈfɒsfeɪt/",        
        sound: "452.mp3"        
        },
        {
        name: "Iron(II) bromide",        
        symbol: "FeBr2",        
        transcribe:"/ˈaɪən tuːˈbrəʊmaɪd/",        
        sound: "453.mp3"        
        },
        {
        name: "Iron(III) bromide",        
        symbol: "FeBr3",        
        transcribe:"/ˈaɪən θriːˈbrəʊmaɪd/",        
        sound: "454.mp3"        
        },
        {
        name: "Iron(II) carbonate",        
        symbol: "FeCO3",        
        transcribe:"/ˈaɪən tuːˈkɑːbənɪt/",        
        sound: "455.mp3"        
        },
        {
        name: "Iron(III) carbonate",        
        symbol: "Fe2(CO3)3",        
        transcribe:"/ˈaɪən θriːˈkɑːbənɪt/",        
        sound: "456.mp3"        
        },
        {
        name: "Iron(II) Hydrogen Phosphate",        
        symbol: "FeHPO4",        
        transcribe:"/ˈaɪən tuːˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "457.mp3"        
        },
        {
        name: "Iron(III) Hydrogen Phosphate",        
        symbol: "Fe2(HPO4)3",        
        transcribe:"/ˈaɪən θriːˈhaɪdrɪʤən ˈfɒsfeɪt/",        
        sound: "458.mp3"        
        },
        {
        name: "Iron(II) dihydrogen phosphate",        
        symbol: "Fe(H2PO4)2",        
        transcribe:"/ˈaɪən tuː dɑɪˈhaɪdrədʒ(ə)n ˈfɒsfeɪt/",        
        sound: "459.mp3"        
        },
        {
        name: "Iron(III) dihydrogen phosphate",        
        symbol: "Fe(H2PO4)3",        
        transcribe:"/ˈaɪən θriː dɑɪˈhaɪdrədʒ(ə)n ˈfɒsfeɪt/",        
        sound: "460.mp3"        
        },
        {
        name: "Cobalt(II) chloride",        
        symbol: "CoCl2",        
        transcribe:"/kəʊˈbɔːlt tuːˈklɔːraɪd/",        
        sound: "461.mp3"        
        },
        {
        name: "Cobalt(III) chloride",        
        symbol: "CoCl3",        
        transcribe:"/kəʊˈbɔːltθriːˈklɔːraɪd/",        
        sound: "462.mp3"        
        },
        {
        name: "Cobalt(II) sulfate",        
        symbol: "CoSO4",        
        transcribe:"/kəʊˈbɔːlt tuːˈsʌlfeɪt/",        
        sound: "463.mp3"        
        },
        {
        name: "Cobalt(III) sulfate",        
        symbol: "Co2(SO4)3",        
        transcribe:"/kəʊˈbɔːltθriːˈsʌlfeɪt/",        
        sound: "464.mp3"        
        },
        {
        name: "Cobalt (II) nitrate",        
        symbol: "Co(NO3)2",        
        transcribe:"/kəʊˈbɔːlt tuːˈnaɪtreɪt/",        
        sound: "465.mp3"        
        },
        {
        name: "Cobalt (III) nitrate",        
        symbol: "Co(NO3)3",        
        transcribe:"/kəʊˈbɔːltθriːˈnaɪtreɪt/",        
        sound: "466.mp3"        
        },
        {
        name: "Cobalt (II) sulfite",        
        symbol: "CoSO3",        
        transcribe:"/kəʊˈbɔːlt tuːˈsʌlfaɪt/",        
        sound: "467.mp3"        
        },
        {
        name: "Cobalt (III) sulfite",        
        symbol: "Co2(SO3)3",        
        transcribe:"/kəʊˈbɔːltθriːˈsʌlfaɪt/",        
        sound: "468.mp3"        
        },
        {
        name: "Cobalt (II) phosphate",        
        symbol: "Co3(PO4)2",        
        transcribe:"/kəʊˈbɔːlt tuːˈfɒsfeɪt/",        
        sound: "469.mp3"        
        },
        {
        name: "Cobalt (III) phosphate",        
        symbol: "CoPO4",        
        transcribe:"/kəʊˈbɔːltθriːˈ fɒsfeɪt/",        
        sound: "470.mp3"        
        },
        {
        name: "Cobalt (II) bromide",        
        symbol: "CoBr2",        
        transcribe:"/kəʊˈbɔːlt tuːˈ brəʊmaɪd/",        
        sound: "471.mp3"        
        },
        {
        name: "Cobalt (III) bromide",        
        symbol: "CoBr3",        
        transcribe:"/kəʊˈbɔːltθriːˈ brəʊmaɪd/",        
        sound: "472.mp3"        
        },
        {
        name: "Cobalt (II) carbonate",        
        symbol: "CoCO3",        
        transcribe:"/kəʊˈbɔːlt tuːˈkɑːbənɪt/",        
        sound: "473.mp3"        
        },
        {
        name: "Cobalt (III) carbonate",        
        symbol: "Co2(CO3)3",        
        transcribe:"/kəʊˈbɔːltθriːˈ kɑːbənɪt/",        
        sound: "474.mp3"        
        },
        {
        name: "Cobalt (II) hydrogen phosphate",        
        symbol: "CoHPO4",        
        transcribe:"/kəʊˈbɔːlt tuːˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "475.mp3"        
        },
        {
        name: "Cobalt (III) hydrogen phosphate",        
        symbol: "Co2(HPO4)3",        
        transcribe:"/kəʊˈbɔːltθriːˈ haɪdrədʒən ˈfɒsfeɪt/",        
        sound: "476.mp3"        
        },
        {
        name: "Cobalt (II) dihydrogen phosphate",        
        symbol: "Co(H2PO4)2",        
        transcribe:"/kəʊˈbɔːlt tuːˈ dai ˈhaɪdrədʒənˈfɒsfeɪt/",        
        sound: "477.mp3"        
        },
        {
        name: "Cobalt (III) dihydrogen phosphate",        
        symbol: "Co(H2PO4)3",        
        transcribe:"/kəʊˈbɔːltθriːˈ dai ˈhaɪdrədʒənˈfɒsfeɪt/",        
        sound: "478.mp3"        
        },
        {
        name: "Nickel(II) chloride",        
        symbol: "NiCl2",        
        transcribe:"/ˈnɪkl tuː ˈklɔːraɪd/",        
        sound: "479.mp3"        
        },
        {
        name: "Nickel(II)sulfate",        
        symbol: "NiSO4",        
        transcribe:"/ˈnɪkl tuː ˈsʌlfeɪt/",        
        sound: "480.mp3"        
        },
        {
        name: "Nickel(II) nitrate",        
        symbol: "Ni(NO3)2",        
        transcribe:"/ˈnɪkl tuː ˈnaɪtreɪt/",        
        sound: "481.mp3"        
        },
        {
        name: "Nickel(II) sulfite",        
        symbol: "NiSO3",        
        transcribe:"/ˈnɪkl tuː ˈsʌlfaɪt/",        
        sound: "482.mp3"        
        },
        {
        name: "Nickel(II)phosphate",        
        symbol: "Ni3(PO4)2",        
        transcribe:"/ˈnɪkl tuː ˈfɒsfeɪt/",        
        sound: "483.mp3"        
        },
        {
        name: "Nickel(II) bromide",        
        symbol: "NiBr2",        
        transcribe:"/ˈnɪkl tuː ˈbrəʊmaɪd/",        
        sound: "484.mp3"        
        },
        {
        name: "Nickel(II) carbonate",        
        symbol: "NiCO3",        
        transcribe:"/ˈnɪkl tuː ˈkɑːbənət/",        
        sound: "485.mp3"        
        },
        {
        name: "Nickel(II) hydrogen phosphate",        
        symbol: "NiHPO4",        
        transcribe:"/ˈnɪkl tuː ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "486.mp3"        
        },
        {
        name: "Nickel(II) dihydrogen phosphate",        
        symbol: "Ni(H2PO4)",        
        transcribe:"/ˈnɪkl tuːdai ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "487.mp3"        
        },
        {
        name: "Copper(I) chloride",        
        symbol: "CuCl",        
        transcribe:"/ˈkɒpə wʌn ˈklɔːraɪd/",        
        sound: "488.mp3"        
        },
        {
        name: "Copper(II) chloride",        
        symbol: "CuCl2",        
        transcribe:"/ˈkɒpə tuːˈklɔːraɪd/",        
        sound: "489.mp3"        
        },
        {
        name: "Copper(I) sulfate",        
        symbol: "Cu2SO4",        
        transcribe:"/ˈkɒpə wʌn ˈsʌlfeɪt/",        
        sound: "490.mp3"        
        },
        {
        name: "Copper(II) sulfate",        
        symbol: "CuSO4",        
        transcribe:"/ˈkɒpə tuːˈsʌlfeɪt/",        
        sound: "491.mp3"        
        },
        {
        name: "Copper(I) nitrate",        
        symbol: "CuNO3",        
        transcribe:"/ˈkɒpə wʌn ˈnaɪtreɪt/",        
        sound: "492.mp3"        
        },
        {
        name: "Copper(II) sulfide",        
        symbol: "CuS",        
        transcribe:"/ˈkɑpər(aɪ-aɪ) ˈsʌlˌfaɪd/",        
        sound: "493.mp3"        
        },
        {
        name: "Copper(I) sulfide",        
        symbol: "Cu2S",        
        transcribe:"/ˈkɒpə wʌn  ˈsʌlˌfaɪd/",        
        sound: "494.mp3"        
        },
        {
        name: "Copper(II) nitrate",        
        symbol: "Cu(NO3)2",        
        transcribe:"/ˈkɒpə tuːˈ naɪtreɪt/",        
        sound: "495.mp3"        
        },
        {
        name: "Copper(I)sulfite",        
        symbol: "Cu2SO3",        
        transcribe:"/ˈkɒpə wʌn ˈsʌlfaɪt/",        
        sound: "496.mp3"        
        },
        {
        name: "Copper(II)sulfite",        
        symbol: "CuSO3",        
        transcribe:"/ˈkɒpə tuːˈsʌlfaɪt/",        
        sound: "497.mp3"        
        },
        {
        name: "Copper(I)phosphate",        
        symbol: "Cu3PO4",        
        transcribe:"/ˈkɒpə wʌn ˈfɒsfeɪt/",        
        sound: "498.mp3"        
        },
        {
        name: "Copper(II)phosphate",        
        symbol: "Cu3(PO4)2",        
        transcribe:"/ˈkɒpə tuːˈ fɒsfeɪt/",        
        sound: "499.mp3"        
        },
        {
        name: "Copper(I)bromide",        
        symbol: "CuBr",        
        transcribe:"/ˈkɒpə wʌn ˈbrəʊmaɪd/",        
        sound: "500.mp3"        
        },
        {
        name: "Copper(II)bromide",        
        symbol: "CuBr2",        
        transcribe:"/ˈkɒpə tuːˈbrəʊmaɪd/",        
        sound: "501.mp3"        
        },
        {
        name: "Copper(I) carbonate",        
        symbol: "Cu2CO3",        
        transcribe:"/ˈkɒpə wʌn ˈkɑːbənət/",        
        sound: "502.mp3"        
        },
        {
        name: "Copper(II) carbonate",        
        symbol: "CuCO3",        
        transcribe:"/ˈkɒpə tuːˈ kɑːbənət/",        
        sound: "503.mp3"        
        },
        {
        name: "Copper(I)hydrogen phosphate",        
        symbol: "Cu2HPO4",        
        transcribe:"/ˈkɒpə wʌn ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "504.mp3"        
        },
        {
        name: "Copper(II)hydrogen phosphate",        
        symbol: "CuHPO4",        
        transcribe:"/ˈkɒpə tuːˈ haɪdrədʒən ˈfɒsfeɪt/",        
        sound: "505.mp3"        
        },
        {
        name: "Copper(I)dihydrogen phosphate",        
        symbol: "CuH2PO4",        
        transcribe:"/ˈkɒpə wʌn dai ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "506.mp3"        
        },
        {
        name: "Copper(II)dihydrogen phosphate",        
        symbol: "Cu(H2PO4)2",        
        transcribe:"/ˈkɒpə tuːˈ dai ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "507.mp3"        
        },
        {
        name: "Silver chloride",        
        symbol: "AgCl",        
        transcribe:"/ˈsɪlvə ˈklɔːraɪd/",        
        sound: "508.mp3"        
        },
        {
        name: "Silversulfate",        
        symbol: "Ag2SO4",        
        transcribe:"/ˈsɪlvə  ˈsʌlfeɪt/",        
        sound: "509.mp3"        
        },
        {
        name: "Silver sulfide",        
        symbol: "Ag2S",        
        transcribe:"/ˈsɪlvər ˈsʌlˌfaɪd/",        
        sound: "510.mp3"        
        },
        {
        name: "Silver nitrate",        
        symbol: "AgNO3",        
        transcribe:"/ˈsɪlvə ˈ naɪtreɪt/",        
        sound: "511.mp3"        
        },
        {
        name: "Silver sulfite",        
        symbol: "Ag2SO3",        
        transcribe:"/ˈsɪlvə ˈsʌlfaɪt/",        
        sound: "512.mp3"        
        },
        {
        name: "Silverphosphate",        
        symbol: "Ag3PO4",        
        transcribe:"/ˈsɪlvə ˈfɒsfeɪt/",        
        sound: "513.mp3"        
        },
        {
        name: "Silver bromide",        
        symbol: "AgBr",        
        transcribe:"/ˈsɪlvə ˈbrəʊmaɪd/",        
        sound: "514.mp3"        
        },
        {
        name: "Silver carbonate",        
        symbol: "Ag2CO3",        
        transcribe:"/ˈsɪlvə  ˈkɑːbənət/",        
        sound: "515.mp3"        
        },
        {
        name: "Silver hydrogen phosphate",        
        symbol: "Ag2HPO4",        
        transcribe:"/ˈsɪlvə ˈ haɪdrədʒən ˈfɒsfeɪt/",        
        sound: "516.mp3"        
        },
        {
        name: "Silverdihydrogen phosphate",        
        symbol: "AgH2PO4",        
        transcribe:"/ˈsɪlvə dai ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "517.mp3"        
        },
        {
        name: "Tin(II) chloride",        
        symbol: "SnCl2",        
        transcribe:"/tɪn tuː ˈklɔːraɪd/",        
        sound: "518.mp3"        
        },
        {
        name: "Tin(IV) chloride",        
        symbol: "SnCl4",        
        transcribe:"/tɪn fɔː ˈklɔːraɪd/",        
        sound: "519.mp3"        
        },
        {
        name: "Tin(II)sulfate",        
        symbol: "SnSO4",        
        transcribe:"/tɪn tuː ˈsʌlfeɪt/",        
        sound: "520.mp3"        
        },
        {
        name: "Tin(IV)sulfate",        
        symbol: "Sn(SO4)2",        
        transcribe:"/tɪn fɔː ˈsʌlfeɪt/",        
        sound: "521.mp3"        
        },
        {
        name: "Tin(II)nitrate",        
        symbol: "Sn(NO3)2",        
        transcribe:"/tɪn tuː ˈnaɪtreɪt/",        
        sound: "522.mp3"        
        },
        {
        name: "Tin(IV) nitrate",        
        symbol: "Sn(NO3)4",        
        transcribe:"/tɪn fɔː ˈnaɪtreɪt/",        
        sound: "523.mp3"        
        },
        {
        name: "Tin(II)sulfite",        
        symbol: "SnSO3",        
        transcribe:"/tɪn tuː ˈsʌlfaɪt/",        
        sound: "524.mp3"        
        },
        {
        name: "Tin(IV) sulfite",        
        symbol: "Sn(SO3)2",        
        transcribe:"/tɪn fɔː ˈsʌlfaɪt/",        
        sound: "525.mp3"        
        },
        {
        name: "Tin(II)phosphate",        
        symbol: "Sn3(PO4)2",        
        transcribe:"/tɪn tuː ˈfɒsfeɪt/",        
        sound: "526.mp3"        
        },
        {
        name: "Tin(IV) phosphate",        
        symbol: "Sn3(PO4)4",        
        transcribe:"/tɪn fɔː ˈfɒsfeɪt/",        
        sound: "527.mp3"        
        },
        {
        name: "Tin(II) bromide",        
        symbol: "SnBr2",        
        transcribe:"/tɪn tuː ˈbrəʊmaɪd/",        
        sound: "528.mp3"        
        },
        {
        name: "Tin(IV) bromide",        
        symbol: "SnBr4",        
        transcribe:"/tɪn fɔː ˈbrəʊmaɪd/",        
        sound: "529.mp3"        
        },
        {
        name: "Tin(II) carbonate",        
        symbol: "SnCO3",        
        transcribe:"/tɪn tuː ˈkɑːbənət/",        
        sound: "530.mp3"        
        },
        {
        name: "Tin(IV) carbonate",        
        symbol: "Sn(CO3)2",        
        transcribe:"/tɪn fɔː ˈkɑːbənət/",        
        sound: "531.mp3"        
        },
        {
        name: "Tin(II) hydrogen phosphate",        
        symbol: "SnHPO4",        
        transcribe:"/tɪn tuː ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "532.mp3"        
        },
        {
        name: "Tin(IV) hydrogen phosphate",        
        symbol: "Sn(HPO4)2",        
        transcribe:"/tɪn fɔː ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "533.mp3"        
        },
        {
        name: "Tin(II) dihydrogen phosphate",        
        symbol: "Sn(H2PO4)2",        
        transcribe:"/tɪn tuː dai ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "534.mp3"        
        },
        {
        name: "Tin(IV) dihydrogen phosphate",        
        symbol: "Sn(H2PO4)4",        
        transcribe:"/tɪn fɔː dai ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "535.mp3"        
        },
        {
        name: "Gold(I) chloride",        
        symbol: "AuCl",        
        transcribe:"/gəʊld wʌn  ˈklɔːraɪd/",        
        sound: "536.mp3"        
        },
        {
        name: "Gold(III) chloride",        
        symbol: "AuCl3",        
        transcribe:"/gəʊld  θriːˈklɔːraɪd/",        
        sound: "537.mp3"        
        },
        {
        name: "Gold(I)sulfate",        
        symbol: "Au2SO4",        
        transcribe:"/gəʊld wʌn ˈsʌlfeɪt/",        
        sound: "538.mp3"        
        },
        {
        name: "Gold(III) sulfate",        
        symbol: "Au2(SO4)3",        
        transcribe:"/gəʊld  θriːˈsʌlfeɪt/",        
        sound: "539.mp3"        
        },
        {
        name: "Gold(I)nitrate",        
        symbol: "AuNO3",        
        transcribe:"/gəʊld wʌn ˈnaɪtreɪt/",        
        sound: "540.mp3"        
        },
        {
        name: "Gold(III) nitrate",        
        symbol: "Au(NO3)3",        
        transcribe:"/gəʊld  θriːˈ naɪtreɪt/",        
        sound: "541.mp3"        
        },
        {
        name: "Gold (I)sulfite",        
        symbol: "Au2SO3",        
        transcribe:"/gəʊld wʌn ˈsʌlfaɪt/",        
        sound: "542.mp3"        
        },
        {
        name: "Gold (III) sulfite",        
        symbol: "Au2(SO3)3",        
        transcribe:"/gəʊld  θriːˈ sʌlfaɪt/",        
        sound: "543.mp3"        
        },
        {
        name: "(I) phosphate",        
        symbol: "Au3PO4 Gold",        
        transcribe:"/gəʊld wʌn ˈfɒsfeɪt/",        
        sound: "544.mp3"        
        },
        {
        name: "Gold (III) phosphate",        
        symbol: "AuPO4",        
        transcribe:"/gəʊld  θriːˈfɒsfeɪt/",        
        sound: "545.mp3"        
        },
        {
        name: "Gold (I) bromide",        
        symbol: "AuBr",        
        transcribe:"/gəʊld wʌn  ˈbrəʊmaɪd/",        
        sound: "546.mp3"        
        },
        {
        name: "Gold (III) bromide",        
        symbol: "AuBr3",        
        transcribe:"/gəʊld  θriːˈ brəʊmaɪd/",        
        sound: "547.mp3"        
        },
        {
        name: "Gold (I) carbonate",        
        symbol: "Au2CO3",        
        transcribe:"/gəʊld wʌn  ˈkɑːbənət/",        
        sound: "548.mp3"        
        },
        {
        name: "Gold (III) carbonate",        
        symbol: "Au2(CO3)3",        
        transcribe:"/gəʊld  θriːˈkɑːbənət/",        
        sound: "549.mp3"        
        },
        {
        name: "Gold (I) hydrogen phosphate",        
        symbol: "Au2HPO4",        
        transcribe:"/gəʊld wʌn ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "550.mp3"        
        },
        {
        name: "Gold (III) hydrogen phosphate",        
        symbol: "Au2(HPO4)3",        
        transcribe:"/gəʊld  θriːˈ haɪdrədʒən ˈfɒsfeɪt/",        
        sound: "551.mp3"        
        },
        {
        name: "Gold (I) dihydrogen phosphate",        
        symbol: "AuH2PO4",        
        transcribe:"/gəʊld wʌn dai ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "552.mp3"        
        },
        {
        name: "Gold (III) dihydrogen phosphate",        
        symbol: "Au(H2PO4)3",        
        transcribe:"/gəʊld  θriː dai ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "553.mp3"        
        },
        {
        name: "Mercury chloride",        
        symbol: "HgCl2",        
        transcribe:"/mɜːkjʊri  ˈklɔːraɪd/",        
        sound: "554.mp3"        
        },
        {
        name: "Mercury sulfate",        
        symbol: "HgSO4",        
        transcribe:"/mɜːkjʊri ˈsʌlfeɪt/",        
        sound: "555.mp3"        
        },
        {
        name: "Mercury nitrate",        
        symbol: "Hg(NO3)2",        
        transcribe:"/mɜːkjʊri ˈnaɪtreɪt/",        
        sound: "556.mp3"        
        },
        {
        name: "Mercury sulfite",        
        symbol: "HgSO3",        
        transcribe:"/mɜːkjʊri ˈsʌlfaɪt/",        
        sound: "557.mp3"        
        },
        {
        name: "Mercury phosphate",        
        symbol: "Hg3(PO4)2",        
        transcribe:"/mɜːkjʊri ˈfɒsfeɪt/",        
        sound: "558.mp3"        
        },
        {
        name: "Mercury bromide",        
        symbol: "HgBr2",        
        transcribe:"/mɜːkjʊri ˈbrəʊmaɪd/",        
        sound: "559.mp3"        
        },
        {
        name: "Mercury carbonate",        
        symbol: "HgCO3",        
        transcribe:"/mɜːkjʊri ˈkɑːbənət/",        
        sound: "560.mp3"        
        },
        {
        name: "Mercury hydrogenphosphate",        
        symbol: "HgHPO4",        
        transcribe:"/mɜːkjʊri ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "561.mp3"        
        },
        {
        name: "Mercury dihydrogen phosphate",        
        symbol: "Hg(H2PO4)2",        
        transcribe:"/mɜːkjʊri dai ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "562.mp3"        
        },
        {
        name: "Lead (II)chloride",        
        symbol: "PbCl2",        
        transcribe:"/liːd tuː ˈklɔːraɪd/",        
        sound: "563.mp3"        
        },
        {
        name: "Lead (II) sulfate",        
        symbol: "PbSO4",        
        transcribe:"/liːd tuːˈsʌlfeɪt/",        
        sound: "564.mp3"        
        },
        {
        name: "Lead (II) nitrate",        
        symbol: "Pb(NO3)2",        
        transcribe:"/liːd tuːˈnaɪtreɪt/",        
        sound: "565.mp3"        
        },
        {
        name: "Lead (II)sulfite",        
        symbol: "PbSO3",        
        transcribe:"/liːd tuːˈsʌlfaɪt/",        
        sound: "566.mp3"        
        },
        {
        name: "Lead (II) phosphate",        
        symbol: "Pb3(PO4)2",        
        transcribe:"/liːd tuːˈ fɒsfeɪt/",        
        sound: "567.mp3"        
        },
        {
        name: "Lead (II) bromide",        
        symbol: "PbBr2",        
        transcribe:"/liːd tuːˈbrəʊmaɪd/",        
        sound: "568.mp3"        
        },
        {
        name: "Lead (II) carbonate",        
        symbol: "PbCO3",        
        transcribe:"/liːd tuːˈkɑːbənət/",        
        sound: "569.mp3"        
        },
        {
        name: "Lead (II) hydrogen phosphate",        
        symbol: "PbHPO4",        
        transcribe:"/liːd tuːˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "570.mp3"        
        },
        {
        name: "Lead (II) dihydrogen phosphate",        
        symbol: "Pb(H2PO4)2",        
        transcribe:"/liːd tuːˈdai ˈhaɪdrədʒən ˈfɒsfeɪt/",        
        sound: "571.mp3"        
        },
        {
        name: "Lead (II) sulfide",        
        symbol: "PbS",        
        transcribe:"/liːd tuːˈˈsʌlˌfaɪd/",        
        sound: "572.mp3"        
        },
        {
        name: "Ammonium dichromate",        
        symbol: "(NH4)2Cr2O7",        
        transcribe:"/əˈməʊnjəm dai'koumit/",        
        sound: "707.mp3"        
        },
        {
        name: "Diammonium hydrogen phosphate",        
        symbol: "(NH4)2HPO4",        
        transcribe:"/daiəˈməʊnɪəm ˈhaɪdrɪʤənˈfɒsfeɪt/",        
        sound: "708.mp3"        
        },
        {
        name: "Ammonium molybdate",        
        symbol: "(NH4)2MoO4",        
        transcribe:"/əˈməʊnɪəm mɒˈlɪbdeɪt/",        
        sound: "709.mp3"        
        },
        {
        name: "Ammonium monosulfide",        
        symbol: "(NH4)2S",        
        transcribe:"/əˈməʊnɪəm ˈmɒnəʊˈsʌlfaɪd/",        
        sound: "710.mp3"        
        },
        {
        name: "Ammonium thiosulfate",        
        symbol: "(NH4)2S2O3",        
        transcribe:"/əˈməʊnɪəm θaɪəʊˈsʌlfeɪt/",        
        sound: "711.mp3"        
        },
        {
        name: "Ammonium sulfate",        
        symbol: "(NH4)2SO4",        
        transcribe:"/əˈməʊnjəm ˈsʌlfeɪt/",        
        sound: "712.mp3"        
        },
        {
        name: "Ammonium dihydrogen phosphate",        
        symbol: "(NH4)H2PO4",        
        transcribe:"/əˈməʊnjəm daɪˈhaɪdrədʒ(ə)n ˈfɒsfeɪt/",        
        sound: "713.mp3"        
        },
        {
        name: "Ammonium carbonate",        
        symbol: "(NH4)2CO3",        
        transcribe:"/əˈməʊnjəm ˈkɑːbənɪt/",        
        sound: "714.mp3"        
        },
        {
        name: "Silver acetylide",        
        symbol: "Ag2C2",        
        transcribe:"/ˈsɪlvə əˈsɛtɪˌlaɪd/",        
        sound: "715.mp3"        
        },
        {
        name: "Silver cyanide",        
        symbol: "AgCN",        
        transcribe:"/ˈsɪlvə ˈsaɪənaɪd/",        
        sound: "716.mp3"        
        },
        {
        name: "Silver iodide",        
        symbol: "AgI",        
        transcribe:"/ˈsɪlvər ˈaɪəʊdaɪd/",        
        sound: "717.mp3"        
        },
        {
        name: "Aluminum hydride",        
        symbol: "AlH3",        
        transcribe:"/al(j)ʊˈmɪnɪəm ˈhaɪdraɪd/",        
        sound: "719.mp3"        
        },
        {
        name: "Aluminum nitride",        
        symbol: "AlN",        
        transcribe:"/al(j)ʊˈmɪnɪəm ˈnaɪtraɪd/",        
        sound: "720.mp3"        
        },
        {
        name: "Arsenic sesquisulfide",        
        symbol: "As2S3",        
        transcribe:"/ˈɑːsnɪk seskwɪˈsʌlfaid/",        
        sound: "723.mp3"        
        },
        {
        name: "Arsenic pentasulfide",        
        symbol: "As2S5",        
        transcribe:"/ˈɑːsnɪk pentəˈsʌlfaɪd/",        
        sound: "724.mp3"        
        },
        {
        name: "Arsenic trichloride",        
        symbol: "AsCl3",        
        transcribe:"/ˈɑːsnɪk traɪˈklɔːraɪd/",        
        sound: "725.mp3"        
        },
        {
        name: "Arsenic trifluoride",        
        symbol: "AsF3",        
        transcribe:"/ˈɑːsnɪk traɪˈflʊəraɪd/",        
        sound: "726.mp3"        
        },
        {
        name: "Arsine",        
        symbol: "AsH3",        
        transcribe:"/ˈɑːsiːn/",        
        sound: "727.mp3"        
        },
        {
        name: "Arsenic triiodide",        
        symbol: "AsI3",        
        transcribe:"/ˈɑːsnɪk traɪˈaɪəʊdaɪd/",        
        sound: "728.mp3"        
        },
        {
        name: "Gold(I) cyanide",        
        symbol: "AuCN",        
        transcribe:"/gəʊld wʌn ˈsaɪənaɪd /",        
        sound: "731.mp3"        
        },
        {
        name: "Gold(III) fluoride",        
        symbol: "AuF3",        
        transcribe:"/gəʊld θriː ˈflʊəraɪd/",        
        sound: "732.mp3"        
        },
        {
        name: "Boron carbide",        
        symbol: "B4C",        
        transcribe:"/ˈbɔːrɒn ˈkɑːbaɪd/",        
        sound: "734.mp3"        
        },
        {
        name: "Barium cyanide",        
        symbol: "Ba(CN)2",        
        transcribe:"/ˈbeərɪəm ˈsaɪənaɪd/",        
        sound: "735.mp3"        
        },
        {
        name: "Barium azide",        
        symbol: "Ba(N3)2",        
        transcribe:"/ˈbeərɪəm ˈæzaɪd/",        
        sound: "736.mp3"        
        },
        {
        name: "Barium titanate",        
        symbol: "BaTiO3",        
        transcribe:"/ˈbeərɪəm tɑɪ.ˈteɪ.ni.əm/",        
        sound: "738.mp3"        
        },
        {
        name: "Boron trichloride",        
        symbol: "BCl3",        
        transcribe:"/ˈbɔːrɒn traɪˈklɔːraɪd/",        
        sound: "739.mp3"        
        },
        {
        name: "Beryllium sulfate",        
        symbol: "Be(SO4)2",        
        transcribe:"/bɛˈrɪljəm ˈsʌlfeɪt /",        
        sound: "740.mp3"        
        },
        {
        name: "Beryllium carbide",        
        symbol: "Be2C",        
        transcribe:"/bɛˈrɪljəm ˈkɑːbaɪd/",        
        sound: "741.mp3"        
        },
        {
        name: "Beryllium nitride",        
        symbol: "Be3N2",        
        transcribe:"/bɛˈrɪljəm ˈnaɪtraɪd/",        
        sound: "742.mp3"        
        },
        {
        name: "Beryllium hydride",        
        symbol: "BeH2",        
        transcribe:"/bɛˈrɪljəm ˈhaɪdraɪd/",        
        sound: "743.mp3"        
        },
        {
        name: "Boron trifluoride",        
        symbol: "BF3",        
        transcribe:"/ˈbɔːrɒn traɪˈflʊəraɪd/",        
        sound: "744.mp3"        
        },
        {
        name: "Bismuth sulfide",        
        symbol: "Bi2S3",        
        transcribe:"/ˈbɪzməθ ˈsʌlfaɪd/",        
        sound: "746.mp3"        
        },
        {
        name: "Bismuth chloride",        
        symbol: "BiCl3",        
        transcribe:"/ˈbɪzməθ ˈklɔːraɪd/",        
        sound: "747.mp3"        
        },
        {
        name: "Boron nitride",        
        symbol: "BN",        
        transcribe:"/ˈbɔːrɒn ˈnaɪtraɪd/",        
        sound: "750.mp3"        
        },
        {
        name: "Boron phosphate",        
        symbol: "BPO4",        
        transcribe:"/ˈbɔːrɒn ˈfɒsfeɪt/",        
        sound: "751.mp3"        
        },
        {
        name: "Calcium carbide",        
        symbol: "CaC2",        
        transcribe:"/ˈkælsɪəm ˈkɑːbaɪd/",        
        sound: "756.mp3"        
        },
        {
        name: "Calcium cyanamide",        
        symbol: "CaCN2",        
        transcribe:"/ˈkælsɪəm saɪˈænəˌmaɪd/",        
        sound: "757.mp3"        
        },
        {
        name: "Calcium hydride",        
        symbol: "CaH2",        
        transcribe:"/ˈkælsɪəm ˈhaɪdraɪd/",        
        sound: "758.mp3"        
        },
        {
        name: "Cadmium cyanide",        
        symbol: "Cd(CN)2",        
        transcribe:"/ˈkædmɪəm ˈsaɪənaɪd/",        
        sound: "760.mp3"        
        },
        {
        name: "Cadmium nitrate",        
        symbol: "Cd(NO3)2",        
        transcribe:"/ˈkædmɪəm ˈnaɪtreɪt/",        
        sound: "761.mp3"        
        },
        {
        name: "Cadmium bromide",        
        symbol: "CdBr2",        
        transcribe:"/ˈkædmɪəm ˈbrəʊmaɪd /",        
        sound: "763.mp3"        
        },
        {
        name: "Cadmium chloride",        
        symbol: "CdCl2",        
        transcribe:"/ˈkædmɪəm ˈklɔːraɪd/",        
        sound: "764.mp3"        
        },
        {
        name: "Cadmium carbonate",        
        symbol: "CdCO3",        
        transcribe:"/ˈkædmɪəm ˈkɑːbənɪt/",        
        sound: "765.mp3"        
        },
        {
        name: "Cadmium fluoride",        
        symbol: "CdF2",        
        transcribe:"/ˈkædmɪəm ˈflʊəraɪd/",        
        sound: "766.mp3"        
        },
        {
        name: "Cadmium iodide",        
        symbol: "CdI2",        
        transcribe:"/ˈkædmɪəm ˈaɪəʊdaɪd/",        
        sound: "767.mp3"        
        },
        {
        name: "Cadmium sulfide",        
        symbol: "CdS",        
        transcribe:"/ˈkædmɪəm ˈsʌlfaɪd/",        
        sound: "769.mp3"        
        },
        {
        name: "Cadmium sulfate",        
        symbol: "CdSO4",        
        transcribe:"/ˈkædmɪəm ˈsʌlfeɪt /",        
        sound: "770.mp3"        
        },
        {
        name: "Cerium(III) nitrate",        
        symbol: "Ce(NO3)3",        
        transcribe:"/ˈsɪərɪəm θriː ˈnaɪtreɪt /",        
        sound: "771.mp3"        
        },
        {
        name: "Cerium(IV) sulfate",        
        symbol: "Ce(SO4)2",        
        transcribe:"/ˈsɪərɪəm fɔː ˈsʌlfeɪt/",        
        sound: "773.mp3"        
        },
        {
        name: "Cerium(III) chloride",        
        symbol: "CeCl3",        
        transcribe:"/ˈsɪərɪəm θriː ˈklɔːraɪd /",        
        sound: "774.mp3"        
        },
        {
        name: "Cobalt(II) fluoride",        
        symbol: "CoF2",        
        transcribe:"/kəʊˈbɔːlt tu: ˈflʊəraɪd/",        
        sound: "790.mp3"        
        },
        {
        name: "Cobalt(III) fluoride",        
        symbol: "CoF3",        
        transcribe:"/kəʊˈbɔːlt θriː ˈflʊəraɪd /",        
        sound: "791.mp3"        
        },
        {
        name: "Cobalt(II) iodide",        
        symbol: "CoI2",        
        transcribe:"/kəʊˈbɔːlt tu: ˈaɪəʊdaɪd/",        
        sound: "792.mp3"        
        },
        {
        name: "chromic fluoride",        
        symbol: "CrF3",        
        transcribe:"/ˈkrəʊmɪk ˈflʊəraɪd/",        
        sound: "795.mp3"        
        },
        {
        name: "Cesium chloride",        
        symbol: "CsCl",        
        transcribe:"/ˈsiːzɪəm ˈklɔːraɪd/",        
        sound: "798.mp3"        
        },
        {
        name: "Copper(I) acetylide",        
        symbol: "Cu2C2",        
        transcribe:"/ˈkɒpə wʌn əˈsɛtɪˌlaɪd/",        
        sound: "800.mp3"        
        },
        {
        name: "Copper(II) acetylide",        
        symbol: "CuC2",        
        transcribe:"/ˈkɒpə tuː əˈsɛtɪˌlaɪd/",        
        sound: "802.mp3"        
        },
        {
        name: "Copper(I) cyanide",        
        symbol: "CuCN",        
        transcribe:"/ˈkɒpə wʌn ˈsaɪənaɪd/",        
        sound: "803.mp3"        
        },
        {
        name: "Copper(II) chromite",        
        symbol: "CuCr2O4",        
        transcribe:"/ˈkɒpə tuːˈkrəʊmaɪt/",        
        sound: "804.mp3"        
        },
        {
        name: "Copper(II) chromate",        
        symbol: "CuCrO4",        
        transcribe:"/ˈkɒpə tuːˈkrəʊˌmeɪt/",        
        sound: "805.mp3"        
        },
        {
        name: "Copper(II) fluoride",        
        symbol: "CuF2",        
        transcribe:"/ˈkɒpə tu: ˈflʊəraɪd/",        
        sound: "806.mp3"        
        },
        {
        name: "Copper(I) iodide",        
        symbol: "CuI",        
        transcribe:"/ˈkɒpə wʌn ˈaɪəʊdaɪd /",        
        sound: "807.mp3"        
        },
        {
        name: "Gallium (III) arsenide",        
        symbol: "GaAs",        
        transcribe:"/ˈɡælɪəm θriːˈɑːsəˌnaɪd/",        
        sound: "813.mp3"        
        },
        {
        name: "Gallium(III) chloride",        
        symbol: "GaCl3",        
        transcribe:"/ˈgælɪəm θriː ˈklɔːraɪd/",        
        sound: "814.mp3"        
        },
        {
        name: "Gallium phosphide",        
        symbol: "GaP",        
        transcribe:"/ˈgælɪəm ˈfɒsfaɪd/",        
        sound: "815.mp3"        
        },
        {
        name: "GADOLINIUM(III) CHLORIDE",        
        symbol: "GdCl3",        
        transcribe:"/ˌgædɒˈlɪnɪəm θriː ˈklɔːraɪd/",        
        sound: "817.mp3"        
        },
        {
        name: "Germanium(IV) chloride",        
        symbol: "GeCl4",        
        transcribe:"/ʤɜːˈmeɪnɪəm fɔː ˈklɔːraɪd /",        
        sound: "818.mp3"        
        },
        {
        name: "Peroxymonosulfuric acid",        
        symbol: "H2SO5",        
        transcribe:"/pəˈrɑksiˈmɑnousʌlˈfjurɪk ˈæsɪd/",        
        sound: "825.mp3"        
        },
        {
        name: "Hafnium tetrachloride",        
        symbol: "HfCl4",        
        transcribe:"/ˈhæfnɪəm ˈtetrəˈklɔːraɪd/",        
        sound: "835.mp3"        
        },
        {
        name: "Hafnium tetrafluoride",        
        symbol: "HfF4",        
        transcribe:"/ˈhæfnɪəm tɛtrəˈflʊəraɪd/",        
        sound: "836.mp3"        
        },
        {
        name: "Hafnium dioxide",        
        symbol: "HfO2",        
        transcribe:"/ˈhæfnɪəm daɪˈɒksaɪd/",        
        sound: "837.mp3"        
        },
        {
        name: "Mercury(II) cyanide",        
        symbol: "Hg(CN)2",        
        transcribe:"/ˈmɜːkjʊri tu: ˈsaɪənaɪd/",        
        sound: "838.mp3"        
        },
        {
        name: "Mercury fulminate",        
        symbol: "Hg(CNO)2",        
        transcribe:"/ˈmɜːkjʊri ˈfʌlmɪneɪt/",        
        sound: "839.mp3"        
        },
        {
        name: "Mercury(I) chloride",        
        symbol: "Hg2Cl2",        
        transcribe:"/ˈmɜːkjʊri wʌn ˈklɔːraɪd/",        
        sound: "840.mp3"        
        },
        {
        name: "Mercury(II) iodide",        
        symbol: "HgI2",        
        transcribe:"/ˈmɜːkjʊri tu: ˈaɪəʊdaɪd /",        
        sound: "841.mp3"        
        },
        {
        name: "Mercury(II) sulfide",        
        symbol: "HgS",        
        transcribe:"/ˈmɜːkjʊri tu: ˈsʌlfaɪd /",        
        sound: "842.mp3"        
        },
        {
        name: "Holmium chloride",        
        symbol: "HoCl3",        
        transcribe:"/ˈhɒlmɪəm klɔːraɪd/",        
        sound: "846.mp3"        
        },
        {
        name: "Iodine monochloride",        
        symbol: "ICl",        
        transcribe:"/aɪədiːn mɒnəˈklɔːraɪd/",        
        sound: "848.mp3"        
        },
        {
        name: "Iodine trichloride",        
        symbol: "ICl3",        
        transcribe:"/aɪədiːn traɪˈklɔːraɪd/",        
        sound: "849.mp3"        
        },
        {
        name: "Iodine pentafluoride",        
        symbol: "IF5",        
        transcribe:"/aɪədiːn pentəˈflʊəraɪd/",        
        sound: "850.mp3"        
        },
        {
        name: "Iodine heptafluoride",        
        symbol: "IF7",        
        transcribe:"/aɪədiːn ˈheptəˈflʊəraɪd/",        
        sound: "851.mp3"        
        },
        {
        name: "Indium antimonide",        
        symbol: "InSb",        
        transcribe:"/ˈɪndɪəm antimonide/",        
        sound: "853.mp3"        
        },
        {
        name: "Potassium oxalate",        
        symbol: "K2C2O4",        
        transcribe:"/pəˈtæsiəm ˈɑːk.sə.ˌleɪt/",        
        sound: "854.mp3"        
        },
        {
        name: "Potassium percarbonate",        
        symbol: "K2C2O6",        
        transcribe:"/pətæsiəm pɜːrkɑːrbəneɪt/",        
        sound: "855.mp3"        
        },
        {
        name: "Potassium dichromate",        
        symbol: "K2Cr2O7",        
        transcribe:"/pətæsiəm daɪˈkrəʊmeɪt/",        
        sound: "856.mp3"        
        },
        {
        name: "Potassium chromate",        
        symbol: "K2CrO4",        
        transcribe:"/pətæsiəm ˈkrəʊmeɪt/",        
        sound: "857.mp3"        
        },
        {
        name: "Potassium persulfate",        
        symbol: "K2S2O8",        
        transcribe:"/pətæsiəm pɜːrsʌlfeɪt/",        
        sound: "858.mp3"        
        },
        {
        name: "Potassium bromate",        
        symbol: "KBrO3",        
        transcribe:"/pətæsiəm ˈbrəʊmeɪt/",        
        sound: "862.mp3"        
        },
        {
        name: "Potassium cyanide",        
        symbol: "KCN",        
        transcribe:"/pəˈtæsiəm ˈsaɪənaɪd/",        
        sound: "863.mp3"        
        },
        {
        name: "Potassium fluoride",        
        symbol: "KF",        
        transcribe:"/pəˈtæsiəm ˈflʊəraɪd/",        
        sound: "864.mp3"        
        },
        {
        name: "Potassium hydride",        
        symbol: "KH",        
        transcribe:"/pəˈtæsiəm ˈhaɪdraɪd/",        
        sound: "865.mp3"        
        },
        {
        name: "Potassium iodate",        
        symbol: "KIO3",        
        transcribe:"/pəˈtæsiəm ˈaɪ əˌdeɪt/",        
        sound: "867.mp3"        
        },
        {
        name: "Potassium periodate",        
        symbol: "KIO4",        
        transcribe:"/pəˈtæsiəm pɜːˈaɪ əˌdeɪt /",        
        sound: "868.mp3"        
        },
        {
        name: "Potassium permanganate",        
        symbol: "KMnO4",        
        transcribe:"/pəˈtæsiəm pɜːˈmæŋgənɪt/",        
        sound: "869.mp3"        
        },
        {
        name: "Krypton difluoride",        
        symbol: "KrF2",        
        transcribe:"/ˈkrɪptɒn daɪˈflʊəraɪd/",        
        sound: "870.mp3"        
        },
        {
        name: "Potassium thiocyanate",        
        symbol: "KSCN",        
        transcribe:"/pəˈtæsiəm ˈθɑɪəʊˈsaɪənaɪd/",        
        sound: "871.mp3"        
        },
        {
        name: "lanthanum nitrate",        
        symbol: "La(NO3)3",        
        transcribe:"/ˈlænθənəm ˈnaɪtreɪt/",        
        sound: "872.mp3"        
        },
        {
        name: "Lanthanum sulfate",        
        symbol: "La2(SO4)3",        
        transcribe:"/ˈlænθənəm ˈsʌlfeɪt/",        
        sound: "874.mp3"        
        },
        {
        name: "Lanthanum chloride",        
        symbol: "LaCl3",        
        transcribe:"/ˈlænθənəm ˈklɔːraɪd/",        
        sound: "876.mp3"        
        },
        {
        name: "Lanthanum fluoride",        
        symbol: "LaF3",        
        transcribe:"/ˈlænθənəm ˈflʊəraɪd/",        
        sound: "877.mp3"        
        },
        {
        name: "Lanthanum phosphide",        
        symbol: "LaP",        
        transcribe:"/ˈlænθənəm ˈfɒsfaɪd/",        
        sound: "878.mp3"        
        },
        {
        name: "Lithium nitride",        
        symbol: "Li3N",        
        transcribe:"/ˈlɪθɪəm ˈnaɪtraɪd/",        
        sound: "879.mp3"        
        },
        {
        name: "lithium fluoride",        
        symbol: "LiF",        
        transcribe:"/ˈlɪθɪəm ˈflʊəraɪd/",        
        sound: "882.mp3"        
        },
        {
        name: "Lithium hydride",        
        symbol: "LiH",        
        transcribe:"/ˈlɪθɪəm ˈhaɪdraɪd/",        
        sound: "883.mp3"        
        },
        {
        name: "Lithium iodide",        
        symbol: "LiI",        
        transcribe:"/ˈlɪθɪəm ˈaɪəʊdaɪd/",        
        sound: "884.mp3"        
        },
        {
        name: "Lithium amide",        
        symbol: "LiNH2",        
        transcribe:"/ˈlɪθɪəmˈæ.ˌmɑɪd/",        
        sound: "885.mp3"        
        },
        {
        name: "Magnesium perchlorate",        
        symbol: "Mg(ClO4)2",        
        transcribe:"/mægˈniːziəm pərˈklɔːrɪt/",        
        sound: "886.mp3"        
        },
        {
        name: "Magnesium fluoride",        
        symbol: "MgF2",        
        transcribe:"/mægˈniːziəm ˈflʊəraɪd/",        
        sound: "887.mp3"        
        },
        {
        name: "Magnesium hydride",        
        symbol: "MgH2",        
        transcribe:"/mægˈniːziəm ˈhaɪdraɪd /",        
        sound: "888.mp3"        
        },
        {
        name: "Magnesium iodide",        
        symbol: "MgI2",        
        transcribe:"/mægˈniːziəm ˈaɪəʊdaɪd /",        
        sound: "889.mp3"        
        },
        {
        name: "Molybdenum pentachloride",        
        symbol: "MoCl5",        
        transcribe:"/mɒˈlɪbdɪnəm pentəˈklɔːraɪd/",        
        sound: "893.mp3"        
        },
        {
        name: "Molybdenum hexafluoride",        
        symbol: "MoF6",        
        transcribe:"/mɒˈlɪbdɪnəm ˈhɛk.səˈflʊəraɪd/",        
        sound: "894.mp3"        
        },
        {
        name: "Molybdenum disulfide",        
        symbol: "MoS2",        
        transcribe:"/mɒˈlɪbdɪnəm daiˈsʌlfaɪd /",        
        sound: "897.mp3"        
        },
        {
        name: "Sodium oxalate",        
        symbol: "Na2C2O4",        
        transcribe:"/ˈsəʊdiəm ˈɑːk.sə.ˌleɪt/",        
        sound: "901.mp3"        
        },
        {
        name: "Sodium thiosulfate",        
        symbol: "Na2S2O3",        
        transcribe:"/ˈsəʊdiəm θaɪəʊˈsʌlfeɪt/",        
        sound: "902.mp3"        
        },
        {
        name: "Sodium cyanide",        
        symbol: "NaCN",        
        transcribe:"/ˈsəʊdiəm ˈsaɪənaɪd/",        
        sound: "904.mp3"        
        },
        {
        name: "Sodium azide",        
        symbol: "NaN3",        
        transcribe:"/ˈsəʊdiəmˈæzaɪd/",        
        sound: "905.mp3"        
        },
        {
        name: "Sodium amide",        
        symbol: "NaNH2",        
        transcribe:"/ˈsəʊdiəmˈæmaɪd/",        
        sound: "906.mp3"        
        },
        {
        name: "Sodium thiocyanate",        
        symbol: "NaSCN",        
        transcribe:"/ˈsəʊdiəm ˈθɑɪəʊˈsaɪənaɪd/",        
        sound: "907.mp3"        
        },
        {
        name: "Niobium pentachloride",        
        symbol: "NbCl5",        
        transcribe:"/naɪˈəʊbɪəm pentə klɔːraɪd/",        
        sound: "909.mp3"        
        },
        {
        name: "Niobium pentafluoride",        
        symbol: "NbF5",        
        transcribe:"/naɪˈəʊbɪəm pentəˈflʊəraɪd/",        
        sound: "910.mp3"        
        },
        {
        name: "Nitrogen trichloride",        
        symbol: "NCl3",        
        transcribe:"/ˈnaɪtrəʤən traɪˈklɔːraɪd/",        
        sound: "911.mp3"        
        },
        {
        name: "Ammonium bromide",        
        symbol: "NH4Br",        
        transcribe:"/əˈməʊnjəm ˈbrəʊmaɪd/",        
        sound: "915.mp3"        
        },
        {
        name: "Ammonium chloride",        
        symbol: "NH4Cl",        
        transcribe:"/əˈməʊnjəm ˈklɔːraɪd /",        
        sound: "916.mp3"        
        },
        {
        name: "Ammonium cyanide",        
        symbol: "NH4CN",        
        transcribe:"/əˈməʊnjəm ˈsaɪənaɪd /",        
        sound: "917.mp3"        
        },
        {
        name: "Ammonium fluoride",        
        symbol: "NH4F",        
        transcribe:"/əˈməʊnjəm ˈflʊəraɪd/",        
        sound: "918.mp3"        
        },
        {
        name: "Ammonium bicarbonate",        
        symbol: "NH4HCO3",        
        transcribe:"/əˈməʊnjəm baɪˈkɑːbənɪt /",        
        sound: "919.mp3"        
        },
        {
        name: "Ammonium hydrosulfid",        
        symbol: "NH4HS",        
        transcribe:"/əˈməʊnjəm ˈhaɪdrəʊˈsʌlfaɪd/",        
        sound: "920.mp3"        
        },
        {
        name: "Ammonium bisulfate",        
        symbol: "NH4HSO4",        
        transcribe:"/əˈməʊnjəm bɑɪˈsʌlfeɪt/",        
        sound: "921.mp3"        
        },
        {
        name: "Ammonium nitrate",        
        symbol: "NH4NO3",        
        transcribe:"/əˈməʊnjəm ˈnaɪtreɪt/",        
        sound: "922.mp3"        
        },
        {
        name: "Ammonium thiocyanate",        
        symbol: "NH4SCN",        
        transcribe:"/əˈməʊnjəm ˈθɑɪəʊˈsaɪənaɪd/",        
        sound: "923.mp3"        
        },
        {
        name: "Lead azide",        
        symbol: "Pb(N3)2",        
        transcribe:"/liːdˈæzaɪd/",        
        sound: "931.mp3"        
        },
        {
        name: "Lead tetrachloride",        
        symbol: "PbCl4",        
        transcribe:"/liːd ˈtetrəˈklɔːraɪd/",        
        sound: "933.mp3"        
        },
        {
        name: "Lead difluoride",        
        symbol: "PbF2",        
        transcribe:"/liːd daɪˈflʊəraɪd/",        
        sound: "934.mp3"        
        },
        {
        name: "Lead tetrafluoride",        
        symbol: "PbF4",        
        transcribe:"/liːd tɛtrəˈflʊəraɪd/",        
        sound: "935.mp3"        
        },
        {
        name: "Lead diiodide",        
        symbol: "PbI2",        
        transcribe:"/liːd daɪˈaɪəʊdaɪd/",        
        sound: "936.mp3"        
        },
        {
        name: "Palladium nitrate",        
        symbol: "Pd(NO3)2",        
        transcribe:"/pəˈleɪdiəm ˈnaɪtreɪt /",        
        sound: "937.mp3"        
        },
        {
        name: "Palladium dichloride",        
        symbol: "PdCl2",        
        transcribe:"/pəˈleɪdiəm daɪˈklɔːraɪd/",        
        sound: "938.mp3"        
        },
        {
        name: "Rubidium carbonate",        
        symbol: "Rb2CO3",        
        transcribe:"/ru(ː)ˈbɪdɪəm ˈkɑːbənɪt /",        
        sound: "949.mp3"        
        },
        {
        name: "Rubidium sulfate",        
        symbol: "Rb2SO4",        
        transcribe:"/ru(ː)ˈbɪdɪəm ˈsʌlfeɪt/",        
        sound: "950.mp3"        
        },
        {
        name: "Rubidium chloride",        
        symbol: "RbCl",        
        transcribe:"/ru(ː)ˈbɪdɪəm ˈklɔːraɪd /",        
        sound: "951.mp3"        
        },
        {
        name: "Rhodium chloride",        
        symbol: "RhCl3",        
        transcribe:"/ˈrəʊdjəm ˈklɔːraɪd /",        
        sound: "954.mp3"        
        },
        {
        name: "Sulfur chloride",        
        symbol: "S2Cl2",        
        transcribe:"/ˈsʌlfə ˈklɔːraɪd/",        
        sound: "955.mp3"        
        },
        {
        name: "Antimony trisulfide",        
        symbol: "Sb2S3",        
        transcribe:"/ˈæntɪməni traɪˈsʌlfaid /",        
        sound: "958.mp3"        
        },
        {
        name: "Antimony pentasulfide",        
        symbol: "Sb2S5",        
        transcribe:"/ˈæntɪməni pentə sʌlfaid/",        
        sound: "959.mp3"        
        },
        {
        name: "Antimony trichloride",        
        symbol: "SbCl3",        
        transcribe:"/ˈæntɪməni traɪˈklɔːraɪd/",        
        sound: "960.mp3"        
        },
        {
        name: "Antimony pentachloride",        
        symbol: "SbCl5",        
        transcribe:"/ˈæntɪməni pentəˈklɔːraɪd/",        
        sound: "961.mp3"        
        },
        {
        name: "Antimony pentafluoride",        
        symbol: "SbF5",        
        transcribe:"/ˈæntɪməni pentəˈflʊəraɪd /",        
        sound: "962.mp3"        
        },
        {
        name: "Selenium hexafluoride",        
        symbol: "SeF6",        
        transcribe:"/səˈliːniəmˈhɛk.səˈflʊəraɪd/",        
        sound: "963.mp3"        
        },
        {
        name: "Silicon tetrachloride",        
        symbol: "SiCl4",        
        transcribe:"/ˈsɪlɪkən ˈtetrəˈklɔːraɪd/",        
        sound: "967.mp3"        
        },
        {
        name: "Silicon tetrafluoride",        
        symbol: "SiF4",        
        transcribe:"/ˈsɪlɪkən ˈtetrəˈflʊəraɪd /",        
        sound: "968.mp3"        
        },
        {
        name: "Strontium nitrate",        
        symbol: "Sr(NO3)2",        
        transcribe:"/ˈstrɒntiəm ˈnaɪtreɪt/",        
        sound: "974.mp3"        
        },
        {
        name: "Strontium chloride",        
        symbol: "SrCl2",        
        transcribe:"/ˈstrɒntiəm ˈklɔːraɪd/",        
        sound: "976.mp3"        
        },
        {
        name: "Strontium carbonate",        
        symbol: "SrCO3",        
        transcribe:"/ˈstrɒntiəm ˈkɑːbənɪt/",        
        sound: "977.mp3"        
        },
        {
        name: "Strontium sulfate",        
        symbol: "SrSO4",        
        transcribe:"/ˈstrɒntiəm ˈsʌlfeɪt/",        
        sound: "978.mp3"        
        },
        {
        name: "Tantalum pentachoride",        
        symbol: "TaCl5",        
        transcribe:"/ˈtæntələm pentəˈklɔːraɪd/",        
        sound: "980.mp3"        
        },
        {
        name: "Thorium nitrate",        
        symbol: "Th(NO3)4",        
        transcribe:"/ˈθɔːrɪəm ˈnaɪtreɪt /",        
        sound: "982.mp3"        
        },
        {
        name: "Titanium trichloride",        
        symbol: "TiCl3",        
        transcribe:"/taɪˈteɪniəm traɪˈklɔːraɪd/",        
        sound: "984.mp3"        
        },
        {
        name: "Titanium tetrachloride",        
        symbol: "TiCl4",        
        transcribe:"/taɪˈteɪniəm ˈtetrəˈklɔːraɪd/",        
        sound: "985.mp3"        
        },
        {
        name: "Titanium dihydride",        
        symbol: "TiH2",        
        transcribe:"/taɪˈteɪniəm dai'haɪdraɪd/",        
        sound: "986.mp3"        
        },
        {
        name: "Thallium chloride",        
        symbol: "TlCl",        
        transcribe:"/ˈθælɪəm ˈklɔːraɪd /",        
        sound: "989.mp3"        
        },
        {
        name: "Thallium fluoride",        
        symbol: "TlF",        
        transcribe:"/ˈθælɪəm ˈflʊəraɪd/",        
        sound: "990.mp3"        
        },
        {
        name: "Thallium nitrate",        
        symbol: "TlNO3",        
        transcribe:"/ˈθælɪəm ˈnaɪtreɪt/",        
        sound: "991.mp3"        
        },
        {
        name: "Uranium hexafluoride",        
        symbol: "UF6",        
        transcribe:"/jʊˈreɪniəm ˈhɛk.səˈflʊəraɪd/",        
        sound: "992.mp3"        
        },
        {
        name: "xenon difluoride",        
        symbol: "XeF2",        
        transcribe:"/ˈzɛnɒn daɪˈflʊəraɪd/",        
        sound: "998.mp3"        
        },
        {
        name: "Xenon hexafluoride",        
        symbol: "XeF6",        
        transcribe:"/ˈzɛnɒn ˈhɛk.səˈflʊəraɪd/",        
        sound: "999.mp3"        
        },
        {
        name: "Yttrium sulfate",        
        symbol: "Y2(SO4)3",        
        transcribe:"/ˈɪtrɪəm ˈsʌlfeɪt/",        
        sound: "1000.mp3"        
        },
        {
        name: "Zinc thiocyanate",        
        symbol: "Zn (SCN)2",        
        transcribe:"/zɪŋk ˈθɑɪəʊˈsaɪənaɪd/",        
        sound: "1003.mp3"        
        },
        {
        name: "Zinc cyanide",        
        symbol: "Zn(CN)2",        
        transcribe:"/zɪŋk ˈsaɪənaɪd/",        
        sound: "1004.mp3"        
        },
        {
        name: "Zinc fluoride",        
        symbol: "ZnF2",        
        transcribe:"/zɪŋk ˈflʊəraɪd /",        
        sound: "1005.mp3"        
        },
        {
        name: "Zirconium nitrate",        
        symbol: "Zr(NO3)4",        
        transcribe:"/zɜːˈkəʊnjəm ˈnaɪtreɪt/",        
        sound: "1006.mp3"        
        },
        {
        name: "Zirconium hydroxide",        
        symbol: "Zr(OH)4",        
        transcribe:"/zɜːˈkəʊnjəm haɪˈdrɒksaɪd/",        
        sound: "1007.mp3"        
        },
        {
        name: "Zirconium sulfate",        
        symbol: "Zr(SO4)2",        
        transcribe:"/zɜːˈkəʊnjəm ˈsʌlfeɪt /",        
        sound: "1008.mp3"        
        },
        {
        name: "Zirconium carbide",        
        symbol: "ZrC",        
        transcribe:"/zɜːˈkəʊnjəm ˈkɑːbaɪd /",        
        sound: "1009.mp3"        
        },
        {
        name: "Zirconium tetrachloride",        
        symbol: "ZrCl4",        
        transcribe:"/zɜːˈkəʊnjəm ˈtetrəˈklɔːraɪd/",        
        sound: "1010.mp3"        
        },
        {
        name: "Zirconium hydride",        
        symbol: "ZrH2",        
        transcribe:"/zɜːˈkəʊnjəm ˈhaɪdraɪd/",        
        sound: "1011.mp3"        
        },
        {
        name: "Zirconium silicate",        
        symbol: "ZrSiO4",        
        transcribe:"/zɜːˈkəʊnjəm ˈsɪlɪkɪt /",        
        sound: "1013.mp3"        
        }  
]

const  ThuatNgu = [
    {
        name: "Atom",        
        symbol: "Nguyên tử",        
        transcribe:"/ˈætəm/",        
        sound: "573.mp3"        
        },
        {
        name: "Nuclear",        
        symbol: "Hạt nhân nguyên tử",        
        transcribe:"/ˈnuː.kliər/",        
        sound: "574.mp3"        
        },
        {
        name: "Nuclear charge",        
        symbol: "Điện tích hạt nhân",        
        transcribe:"/ˈnjuːkliə(r) tʃɑːdʒ /",        
        sound: "575.mp3"        
        },
        {
        name: "Mass number",        
        symbol: "Số khối",        
        transcribe:"/mæs ˈnʌm.bə /",        
        sound: "576.mp3"        
        },
        {
        name: "Atomic number",        
        symbol: "Số hiệu nguyên tử",        
        transcribe:"/əˈtɑː.mɪk ˈnʌmbər/",        
        sound: "577.mp3"        
        },
        {
        name: "Atomic mass",        
        symbol: "Nguyên tử khối",        
        transcribe:"/əˈtɑː.mɪk ˈmæs/",        
        sound: "578.mp3"        
        },
        {
        name: "Electron shell",        
        symbol: "Lớp electron",        
        transcribe:"/iˈlektrɑːn ʃel /",        
        sound: "579.mp3"        
        },
        {
        name: "Electron subshell",        
        symbol: "Phân lớp electron",        
        transcribe:"/iˈlektrɑːn sʌb ʃel /",        
        sound: "580.mp3"        
        },
        {
        name: "Outermost electron shell",        
        symbol: "Lớp electron ngoài cùng",        
        transcribe:"/ˈaʊ.təmoʊst ˈ iˈlektrɑːn ʃel /",        
        sound: "581.mp3"        
        },
        {
        name: "Isotopes",        
        symbol: "Đồng vị",        
        transcribe:"/ˈaɪsətəʊps/",        
        sound: "582.mp3"        
        },
        {
        name: "Element cell",        
        symbol: "Ô nguyên tố",        
        transcribe:"/'elɪmənt ˈsel /",        
        sound: "583.mp3"        
        },
        {
        name: "Period",        
        symbol: "Chu kỳ",        
        transcribe:"/ˈpɪrɪəd/",        
        sound: "584.mp3"        
        },
        {
        name: "Element Group",        
        symbol: "Nhóm nguyên tố",        
        transcribe:"/'elɪmənˈɡruːp /",        
        sound: "585.mp3"        
        },
        {
        name: "Atomic radius",        
        symbol: "Bán kính nguyên tử",        
        transcribe:"/əˈtɑː.mɪk ˈreɪdiəs /",        
        sound: "586.mp3"        
        },
        {
        name: "Electron negativity",        
        symbol: "Độ âm điện",        
        transcribe:"/iˈlektrɑːn ˌneɡəˈtɪvəti/",        
        sound: "587.mp3"        
        },
        {
        name: "Atomic electron configuration",        
        symbol: "Cấu hình electron nguyên tử",        
        transcribe:"/ə.ˈtɑːmɪk iˈlektrɑːn kənˌfɪɡjəˈreɪʃn̩/",        
        sound: "588.mp3"        
        },
        {
        name: "Metal",        
        symbol: "Kim loại",        
        transcribe:"/ˈmetl̩/",        
        sound: "589.mp3"        
        },
        {
        name: "Non - metal",        
        symbol: "Phi kim",        
        transcribe:"/ˈnɑːn ˈmetl̩/",        
        sound: "590.mp3"        
        },
        {
        name: "Acid",        
        symbol: "Axit",        
        transcribe:"/ ˈæsid/",        
        sound: "591.mp3"        
        },
        {
        name: "Base",        
        symbol: "Bazơ",        
        transcribe:"/ˈbeɪs/",        
        sound: "592.mp3"        
        },
        {
        name: "Periodic Law",        
        symbol: "Định luật tuần hoàn",        
        transcribe:"/ˌpɪriˈɑdɪk lɑː /",        
        sound: "593.mp3"        
        },
        {
        name: "Valence electron",        
        symbol: "Electron hóa trị",        
        transcribe:"/ˈvæləns iˈlektrɑːn /",        
        sound: "594.mp3"        
        },
        {
        name: "Oxidation number",        
        symbol: "Số oxi hóa",        
        transcribe:"/ˌɑksəˈdeɪʃn̩ ˈnʌmbə/",        
        sound: "595.mp3"        
        },
        {
        name: "Chemical bond",        
        symbol: "Liên kết hóa học",        
        transcribe:"/ˈkɛmɪkl bɑnd/",        
        sound: "596.mp3"        
        },
        {
        name: "Ionic bond",        
        symbol: "Liên kết ion",        
        transcribe:"/aɪˈɑnɪk ˈbɑnd/",        
        sound: "597.mp3"        
        },
        {
        name: "Monatomic ion",        
        symbol: "Ion đơn nguyên tử",        
        transcribe:"/ˌmɑːnəˈtɑːmik ˈaiən/",        
        sound: "598.mp3"        
        },
        {
        name: "Polyatomic ion",        
        symbol: "Ion đa nguyên tử",        
        transcribe:"/ˈpɑli əˈtɑːmik ˈaiən /",        
        sound: "599.mp3"        
        },
        {
        name: "Loss(es)",        
        symbol: "Nhường",        
        transcribe:"/lɔs/",        
        sound: "600.mp3"        
        },
        {
        name: "Gain",        
        symbol: "Nhận",        
        transcribe:"/ɡein/",        
        sound: "601.mp3"        
        },
        {
        name: "Covalent bond",        
        symbol: "Liên kết cộng hóa trị",        
        transcribe:"/ˌkoʊˈveɪləntˈbɑːnd /",        
        sound: "602.mp3"        
        },
        {
        name: "Link for receipt",        
        symbol: "Liên kết cho nhận",        
        transcribe:"/ˈlɪŋk fɔr rɪˈsit /",        
        sound: "603.mp3"        
        },
        {
        name: "Shared electrons",        
        symbol: "Electron dùng chung",        
        transcribe:"/ʃɛrəd iˈlektrɑːnz /",        
        sound: "604.mp3"        
        },
        {
        name: "Molecular",        
        symbol: "Phân tử",        
        transcribe:"/mə'lekjʊlər/",        
        sound: "605.mp3"        
        },
        {
        name: "Structure",        
        symbol: "Cấu trúc",        
        transcribe:"/'strʌktʃər/",        
        sound: "606.mp3"        
        },
        {
        name: "Experiment",        
        symbol: "Thí nghiệm",        
        transcribe:"/ɪkˈspɛrəmənt/",        
        sound: "607.mp3"        
        },
        {
        name: "Atomic mass",        
        symbol: "Nguyên tử khối",        
        transcribe:"/əˈtɒmɪk mæs/",        
        sound: "608.mp3"        
        },
        {
        name: "Molecular weight",        
        symbol: "Phân tử khối",        
        transcribe:"/məˈlɛkyələr weɪt/",        
        sound: "609.mp3"        
        },
        {
        name: "Single substance",        
        symbol: "Đơn chất",        
        transcribe:"/ˈsɪŋɡl̩ˈsʌbstəns/",        
        sound: "610.mp3"        
        },
        {
        name: "Compound",        
        symbol: "Hợp chất",        
        transcribe:"/'kɒmpaʊnd/",        
        sound: "611.mp3"        
        },
        {
        name: "Substance",        
        symbol: "Chất",        
        transcribe:"/ ˈsʌbstəns /",        
        sound: "612.mp3"        
        },
        {
        name: "Mixture",        
        symbol: "Hỗn hợp",        
        transcribe:"/'mɪkstʃər/",        
        sound: "613.mp3"        
        },
        {
        name: "Solution",        
        symbol: "Dung dịch",        
        transcribe:"/sə'lu:ʃən/",        
        sound: "614.mp3"        
        },
        {
        name: "Solid",        
        symbol: "Chất rắn",        
        transcribe:"/ˈsɑləd /",        
        sound: "615.mp3"        
        },
        {
        name: "Liquid",        
        symbol: "Chất lỏng",        
        transcribe:"/ˈlɪkwəd/",        
        sound: "616.mp3"        
        },
        {
        name: "Gas",        
        symbol: "Chất khí",        
        transcribe:"/ɡæs /",        
        sound: "617.mp3"        
        },
        {
        name: "Precipitate",        
        symbol: "Chất kết tủa",        
        transcribe:"/prɪˈsɪpɪteɪt/",        
        sound: "618.mp3"        
        },
        {
        name: "Plastic",        
        symbol: "Chất dẻo",        
        transcribe:"/ˈplæstɪk/",        
        sound: "619.mp3"        
        },
        {
        name: "Reactant",        
        symbol: "Chất tham gia",        
        transcribe:"/riˈæktənt/",        
        sound: "620.mp3"        
        },
        {
        name: "Product",        
        symbol: "Chất tạo thành",        
        transcribe:"/ˈprɒdʌkt/",        
        sound: "621.mp3"        
        },
        {
        name: "Volatility",        
        symbol: "Chất bay hơi",        
        transcribe:"/ˌvɑːləˈtɪlət̬i/",        
        sound: "622.mp3"        
        },
        {
        name: "State",        
        symbol: "Trạng thái",        
        transcribe:"/steɪt/",        
        sound: "623.mp3"        
        },
        {
        name: "Modulate",        
        symbol: "Điều chế",        
        transcribe:"/ˈmɒdjʊleɪt/",        
        sound: "624.mp3"        
        },
        {
        name: "Produce",        
        symbol: "Sản xuất",        
        transcribe:"/prəˈdjuːs/",        
        sound: "625.mp3"        
        },
        {
        name: "Application",        
        symbol: "Ứng dụng",        
        transcribe:"/ˌæpləˈkeɪʃn/",        
        sound: "626.mp3"        
        },
        {
        name: "Occur",        
        symbol: "Xảy ra",        
        transcribe:"/əˈkɜːr/",        
        sound: "627.mp3"        
        },
        {
        name: "Crystal",        
        symbol: "Tinh thể",        
        transcribe:"/ˈkrɪstəl/",        
        sound: "628.mp3"        
        },
        {
        name: "Solute",        
        symbol: "Chất tan",        
        transcribe:"/ˈsɑːljuːt/",        
        sound: "629.mp3"        
        },
        {
        name: "Solvent",        
        symbol: "Dung môi",        
        transcribe:"/ˈsɒlvənt/",        
        sound: "630.mp3"        
        },
        {
        name: "Concentrated",        
        symbol: "Đặc",        
        transcribe:"/ˈkɒnsəntreɪtɪd/",        
        sound: "631.mp3"        
        },
        {
        name: "Dilute",        
        symbol: "Loãng",        
        transcribe:"/daɪˈluːt/",        
        sound: "632.mp3"        
        },
        {
        name: "Concentration",        
        symbol: "Nồng độ",        
        transcribe:"/ˌkɒn.sənˈtreɪʃən/",        
        sound: "633.mp3"        
        },
        {
        name: "Boiling point",        
        symbol: "Nhiệt độ sôi",        
        transcribe:"/bɔɪlinʒ pɔɪnt/",        
        sound: "634.mp3"        
        },
        {
        name: "Density",        
        symbol: "Khối lượng riêng",        
        transcribe:"/ˈdɛnsət̮i/",        
        sound: "635.mp3"        
        },
        {
        name: "The melting temperature",        
        symbol: "Nhiệt độ nóng chảy",        
        transcribe:"/ðə ˈmɛltɪŋ ˈtɛmprətʃər/",        
        sound: "636.mp3"        
        },
        {
        name: "Dissolve",        
        symbol: "Tan",        
        transcribe:"/dɪˈzɒlv/",        
        sound: "637.mp3"        
        },
        {
        name: "Absorb",        
        symbol: "Hấp thụ",        
        transcribe:"/əbˈzɔːb/",        
        sound: "638.mp3"        
        },
        {
        name: "Irreversible reaction",        
        symbol: "Phản ứng một chiều",        
        transcribe:"/ˌɪrɪˈvərsəbl riˈækʃn/",        
        sound: "639.mp3"        
        },
        {
        name: "Reversible reaction",        
        symbol: "Phản ứng thuận nghịch",        
        transcribe:"/rɪˈvərsəbl riˈækʃn/",        
        sound: "640.mp3"        
        },
        {
        name: "Reaction rate",        
        symbol: "Tốc độ phản ứng",        
        transcribe:"/riˈækʃn reit/",        
        sound: "641.mp3"        
        },
        {
        name: "Chemical equilibrium",        
        symbol: "Cân bằng hóa học",        
        transcribe:"/ˈkɛməkəl ˌɛkwəˈlɪbriəm/",        
        sound: "642.mp3"        
        },
        {
        name: "Balanced shift",        
        symbol: "Chuyển dịch cân bằng",        
        transcribe:"/ˈbælənst ʃift /",        
        sound: "643.mp3"        
        },
        {
        name: "Catalysts",        
        symbol: "Chất xúc tác",        
        transcribe:"/ˈkætəlists /",        
        sound: "644.mp3"        
        },
        {
        name: "Oxidizing Agent (Reduced substances)",        
        symbol: "Chất OXH (Chất bị khử)",        
        transcribe:"/ˈɑːksəˌdaɪzɪŋ ˈeɪdʒənt/",        
        sound: "645.mp3"        
        },
        {
        name: "Reducing agent",        
        symbol: "Chất khử (Chất bị OXH)",        
        transcribe:"/ ri.ˈdjuːsiŋ ˈeidʒənt/",        
        sound: "646.mp3"        
        },
        {
        name: "Oxidation",        
        symbol: "Quá trình OXH (Sự OXH)",        
        transcribe:"/ˌɑksəˈdeɪʃn/",        
        sound: "647.mp3"        
        },
        {
        name: "Reducing Process ~ Reduction",        
        symbol: "Quá trình khử (Sự khử)",        
        transcribe:"/rəˈduːsɪŋ ˈproʊses ~ rəˈdʌkʃən/",        
        sound: "648.mp3"        
        },
        {
        name: "Redox reaction",        
        symbol: "Phản ứng tự OXH",        
        transcribe:"/redox riˈækʃn̩/",        
        sound: "649.mp3"        
        },
        {
        name: "Internal molecular oxidation reaction",        
        symbol: "Phản ứng OXH nội phân tử",        
        transcribe:"/ɪnˈtərnl məˈlɛkyələrˌɑksəˈdeɪʃn riˈækʃn̩/",        
        sound: "650.mp3"        
        },
        {
        name: "Dissociation",        
        symbol: "Quá trình điện li",        
        transcribe:"/dɪˌsoʊʃiˈeɪʃn/",        
        sound: "651.mp3"        
        },
        {
        name: "Electrolyte",        
        symbol: "Chất điện li",        
        transcribe:"/ɪˈlɛktrəˌlaɪt/",        
        sound: "652.mp3"        
        },
        {
        name: "Weak electrolyte",        
        symbol: "Chất điện li yếu",        
        transcribe:"/wiːk ɪˈlɛktrəˌlaɪt/",        
        sound: "653.mp3"        
        },
        {
        name: "Strong electrolyte",        
        symbol: "Chất điện li mạnh",        
        transcribe:"/strɒŋ ɪˈlɛktrəˌlaɪt/",        
        sound: "654.mp3"        
        },
        {
        name: "Ion exchange reaction",        
        symbol: "Phản ứng trao đổi ion",        
        transcribe:"/ˈaɪən ɪkˈstʃeɪndʒ rɪˈækʃn̩/",        
        sound: "655.mp3"        
        },
        {
        name: "Salt",        
        symbol: "Muối",        
        transcribe:"/sɒlt/",        
        sound: "656.mp3"        
        },
        {
        name: "Neutral medium",        
        symbol: "Môi trường trung tính",        
        transcribe:"/ˈnjuː.trəl ˈmiː.diəm/",        
        sound: "657.mp3"        
        },
        {
        name: "Acidic medium",        
        symbol: "Môi trường axit",        
        transcribe:"/əˈsɪdɪk ˈmiːdiəm/",        
        sound: "658.mp3"        
        },
        {
        name: "Alkaline medium",        
        symbol: "Môi trường bazơ",        
        transcribe:"/ˈælkəˌlaɪn ˈmiːdiəm/",        
        sound: "659.mp3"        
        },
        {
        name: "Molarity",        
        symbol: "Nồng độ mol/l",        
        transcribe:"/mou'læriti/",        
        sound: "660.mp3"        
        },
        {
        name: "Amphoteric",        
        symbol: "Lưỡng tính",        
        transcribe:"/ˌæmfəˈterɪk/",        
        sound: "661.mp3"        
        },
        {
        name: "Base oxide",        
        symbol: "Oxit bazơ",        
        transcribe:"/beɪs ˈɒksaɪd/",        
        sound: "662.mp3"        
        },
        {
        name: "Acid oxide",        
        symbol: "Oxit axit",        
        transcribe:"/ˈæsɪd ˈɒksaɪd/",        
        sound: "663.mp3"        
        },
        {
        name: "Amphoteric oxide",        
        symbol: "Oxit lưỡng tính",        
        transcribe:"/ˌæmfəˈterɪkˈɒksaɪd/",        
        sound: "664.mp3"        
        },
        {
        name: "Neutral",        
        symbol: "Trung tính",        
        transcribe:"/ˈnjuːtrəl/",        
        sound: "665.mp3"        
        },
        {
        name: "Neutral oxide",        
        symbol: "Oxit trung tính",        
        transcribe:"/ˈnjuːtrəl ˈɒksaɪd/",        
        sound: "666.mp3"        
        },
        {
        name: "Beaker(s)",        
        symbol: "Cốc thủy tinh",        
        transcribe:"/ˈbiːkər ˈes/",        
        sound: "667.mp3"        
        },
        {
        name: "Burette(s)",        
        symbol: "Buret",        
        transcribe:"/bjʊəˈret ˈes/",        
        sound: "668.mp3"        
        },
        {
        name: "Alcohol burner(s)",        
        symbol: "Đèn cồn",        
        transcribe:"/ˈælkəhɒl ˈbɜːnər ˈes /",        
        sound: "669.mp3"        
        },
        {
        name: "Dropper(s)",        
        symbol: "Ống nhỏ giọt",        
        transcribe:"/ˈdrɒ.pər ˈes/",        
        sound: "670.mp3"        
        },
        {
        name: "Elernmeyer flask(s)",        
        symbol: "Eclen (bình tam giác)",        
        transcribe:"/ flɑːsk ˈes /",        
        sound: "671.mp3"        
        },
        {
        name: "Florence flask(s)",        
        symbol: "Bình cổ cao",        
        transcribe:"/ˈflɒ.rəns flɑːsk ˈes/",        
        sound: "672.mp3"        
        },
        {
        name: "Pipette(s)",        
        symbol: "Pipet",        
        transcribe:"/pɪ.ˈpet ˈes/",        
        sound: "673.mp3"        
        },
        {
        name: "Polyethylene dispensing bottle(s)",        
        symbol: "Bình phun tia",        
        transcribe:"/ˌpɒliˈeθəliːn dɪˈspensɪŋ ˈbɒtl̩ ˈes/",        
        sound: "674.mp3"        
        },
        {
        name: "Separatory funnel(s)",        
        symbol: "Phễu chiết",        
        transcribe:"/ˈsepərəˌtɔri ˈfʌnl̩ˈes/",        
        sound: "675.mp3"        
        },
        {
        name: "Test tube(s)",        
        symbol: "Ống nghiệm",        
        transcribe:"/tɛst tjuːb ˈes/",        
        sound: "676.mp3"        
        },
        {
        name: "Ring clamp(s)",        
        symbol: "Vòng đỡ",        
        transcribe:"/rɪŋ klæmp ˈes/",        
        sound: "677.mp3"        
        },
        {
        name: "Harassing",        
        symbol: "Quấy",        
        transcribe:"/ˈhærəsɪŋ/",        
        sound: "678.mp3"        
        },
        {
        name: "Mix",        
        symbol: "Trộn",        
        transcribe:"/mɪks/",        
        sound: "679.mp3"        
        },
        {
        name: "Pour",        
        symbol: "Nhỏ",        
        transcribe:"/pɔː/",        
        sound: "680.mp3"        
        },
        {
        name: "Drop",        
        symbol: "Giọt (dung dịch/chất lỏng)",        
        transcribe:"/drɔp/",        
        sound: "681.mp3"        
        },
        {
        name: "Empirical formula",        
        symbol: "Công thức đơn giản nhất",        
        transcribe:"/ˌɛmˈpɪrɪkəl ˈfɔrmjələ/",        
        sound: "682.mp3"        
        },
        {
        name: "Molecular formula",        
        symbol: "Công thức phân tử",        
        transcribe:"/məˈlɛkjələr ˈfɔrmjələ/",        
        sound: "683.mp3"        
        },
        {
        name: "Structural formula",        
        symbol: "Công thức cấu tạo",        
        transcribe:"/ˈstrʌkʧərəl ˈfɔrmjələ/",        
        sound: "684.mp3"        
        },
        {
        name: "Substitution reaction",        
        symbol: "Phản ứng thế",        
        transcribe:"/ˌsʌbstɪˈtuʃən riˈækʃən/",        
        sound: "685.mp3"        
        },
        {
        name: "Addition reaction",        
        symbol: "Phản ứng cộng",        
        transcribe:"/əˈdɪʃən riˈækʃən/",        
        sound: "686.mp3"        
        },
        {
        name: "Addition reaction",        
        symbol: "Phản ứng hóa hợp",        
        transcribe:"/əˈdɪʃən riˈækʃən/",        
        sound: "687.mp3"        
        },
        {
        name: "Exchange reaction",        
        symbol: "Phản ứng trao đổi",        
        transcribe:"/ɪksˈʧeɪnʤ riˈækʃən/",        
        sound: "688.mp3"        
        },
        {
        name: "Oxidation-reduction reactions",        
        symbol: "phản ứng oxi hóa – khử",        
        transcribe:"/ˌɑksəˈdeɪʃən-rəˈdʌkʃən riˈækʃənz/",        
        sound: "689.mp3"        
        },
        {
        name: "Elimination reaction",        
        symbol: "Phản ứng phân hủy",        
        transcribe:"/ɪˌlɪməˈneɪʃən riˈækʃən/",        
        sound: "690.mp3"        
        },
        {
        name: "Exothermic reaction",        
        symbol: "Phản ứng tỏa nhiệt",        
        transcribe:"/ˌɛksoʊˈθɜrmɪk riˈækʃən/",        
        sound: "691.mp3"        
        },
        {
        name: "Combustion reactions",        
        symbol: "Phản ứng cháy",        
        transcribe:"/kəmˈbʌsʧən riˈækʃənz/",        
        sound: "692.mp3"        
        },
        {
        name: "Hydrolysis reaction",        
        symbol: "Phản ứng thủy phân",        
        transcribe:"/haɪˈdrɑləsəs riˈækʃən/",        
        sound: "693.mp3"        
        }
]

const Khac = [
    {
        name: "Cyanogen",        
        symbol: "C2N2",        
        transcribe:"/saɪˈænəʤɪn /",        
        sound: "754.mp3"        
        },
        {
        name: "Carbon tetrachloride",        
        symbol: "CCl4",        
        transcribe:"/ˈkɑːbən ˈtetrəˈklɔːraɪd/",        
        sound: "759.mp3"        
        },
        {
        name: "Chlorine trifluoride",        
        symbol: "ClF3",        
        transcribe:"/ˈklɔːriːn traɪˈflʊəraɪd/",        
        sound: "777.mp3"        
        },
        {
        name: "Nitrosyl chloride",        
        symbol: "ClNO",        
        transcribe:"/ˈnaɪtrəsɪl ˈklɔːraɪd/",        
        sound: "778.mp3"        
        },
        {
        name: "Cyanogen bromide",        
        symbol: "CNBr",        
        transcribe:"/saɪˈænəʤɪn ˈbrəʊmaɪd/",        
        sound: "780.mp3"        
        },
        {
        name: "Cyanogen chloride",        
        symbol: "CNCl",        
        transcribe:"/saɪˈænəʤɪn ˈklɔːraɪd/",        
        sound: "781.mp3"        
        },
        {
        name: "Cyanogen iodide",        
        symbol: "CNI",        
        transcribe:"/saɪˈænəʤɪn ˈaɪəʊdaɪd/",        
        sound: "782.mp3"        
        },
        {
        name: "Cobalt octacarbonyl",        
        symbol: "Co2(CO)8",        
        transcribe:"/kəʊˈbɔːlt ˈɒktəˈkɑːbəˌnaɪl/",        
        sound: "784.mp3"        
        },
        {
        name: "Carbonyl chloride",        
        symbol: "COCl2",        
        transcribe:"/ˈkɑːbəˌnaɪl ˈklɔːraɪd/",        
        sound: "787.mp3"        
        },
        {
        name: "Phosgene",        
        symbol: "COCl2",        
        transcribe:"/ˈfɒzʤiːn/",        
        sound: "788.mp3"        
        },
        {
        name: "Carbonyl difluoride",        
        symbol: "COF2",        
        transcribe:"/ˈkɑːbəˌnaɪl dɑɪˈflʊəraɪd/",        
        sound: "789.mp3"        
        },
        {
        name: "Chromium hexacarbonyl",        
        symbol: "Cr(CO)6",        
        transcribe:"/ˈkrəʊmiəm heksəˈkɑːbəˌnaɪl/",        
        sound: "794.mp3"        
        },
        {
        name: "Chromyl chloride",        
        symbol: "CrO2Cl2",        
        transcribe:"/ˈkrəʊmɪl ˈklɔːraɪd/",        
        sound: "796.mp3"        
        },
        {
        name: "Carbon disulfide",        
        symbol: "CS2",        
        transcribe:"/ˈkɑːbən dɑɪsʌlfaɪd/",        
        sound: "797.mp3"        
        },
        {
        name: "Cupric ferrocyanide",        
        symbol: "Cu2Fe(CN)6",        
        transcribe:"/ˈkjuːprɪk fɛrəʊˈsaɪəˌnaɪd/",        
        sound: "801.mp3"        
        },
        {
        name: "Hydroxylamine",        
        symbol: "H2NOH",        
        transcribe:"/haɪˌdrɒksɪləˈmiːn/",        
        sound: "820.mp3"        
        },
        {
        name: "Water",        
        symbol: "H2O",        
        transcribe:"/ˈwɔːtə/",        
        sound: "821.mp3"        
        },
        {
        name: "Hydrogen peroxide",        
        symbol: "H2O2",        
        transcribe:"/ˈhaɪdrɪʤən pəˈrɒksaɪd/",        
        sound: "822.mp3"        
        },
        {
        name: "Chloroplatinic acid",        
        symbol: "H2PtCl6",        
        transcribe:"/ˌklɔrəpləˈtɪnɪk ˈæsɪd/",        
        sound: "823.mp3"        
        },
        {
        name: "Hydrogen selenide",        
        symbol: "H2Se",        
        transcribe:"/haɪdrədʒən ˈsɛlɪˌnaɪd/",        
        sound: "824.mp3"        
        },
        {
        name: "Potassium ferricyanide",        
        symbol: "K3Fe(CN)6",        
        transcribe:"/pətæsiəm fɛrɪˈsaɪəˌnaɪd/",        
        sound: "859.mp3"        
        },
        {
        name: "Potassium ferrocyanide",        
        symbol: "K4Fe(CN)6",        
        transcribe:"/pətæsiəm ˌfɛrəʊˈsaɪəˌnaɪd/",        
        sound: "860.mp3"        
        },
        {
        name: "Potassium borohydride",        
        symbol: "KBH4",        
        transcribe:"/pətæsiəm bɔːrəʊˈhaɪdraɪd/",        
        sound: "861.mp3"        
        },
        {
        name: "Potassium triiodomercurate(II)",        
        symbol: "KHgI3",        
        transcribe:"/pəˈtæsiəm traɪˈaɪ əˌdəˈmɜr kyəˌreɪt tuː/",        
        sound: "866.mp3"        
        },
        {
        name: "Lithium aluminum hydride",        
        symbol: "LiAlH4",        
        transcribe:"/ˈlɪθɪəm al(j)ʊˈmɪnɪəm ˈhaɪdraɪd/",        
        sound: "880.mp3"        
        },
        {
        name: "Lithium borohydride",        
        symbol: "LiBH4",        
        transcribe:"/ˈlɪθɪəm bɔːrəʊˈhaɪdraɪd/",        
        sound: "881.mp3"        
        },
        {
        name: "Manganese decacarbonyl",        
        symbol: "Mn2(CO)10",        
        transcribe:"/ˌmæŋgəˈniːz ˈdɛkəˈkɑːbəˌnaɪl/",        
        sound: "890.mp3"        
        },
        {
        name: "Molybdenum hexacarbonyl",        
        symbol: "Mo(CO)6",        
        transcribe:"/mɒˈlɪbdɪnəmˈhɛk.səˈkɑːbəˌnaɪl/",        
        sound: "892.mp3"        
        },
        {
        name: "Hydrazine",        
        symbol: "N2H4",        
        transcribe:"/ˈhɑɪ.drə.ˌzin/",        
        sound: "898.mp3"        
        },
        {
        name: "Anhydrous borax",        
        symbol: "Na2B4O7",        
        transcribe:"/ænˈhaɪdrəs ˈbɔːræks /",        
        sound: "899.mp3"        
        },
        {
        name: "Sodium tetraborate",        
        symbol: "Na2B4O7",        
        transcribe:"/ˈsəʊdiəm tɛtrəˈbɔr eɪt/",        
        sound: "900.mp3"        
        },
        {
        name: "Nitrogen trifluoride",        
        symbol: "NF3",        
        transcribe:"/ˈnaɪtrəʤən traɪˈflʊəraɪd/",        
        sound: "913.mp3"        
        },
        {
        name: "Ammonia",        
        symbol: "NH3",        
        transcribe:"/əˈməʊniə /",        
        sound: "914.mp3"        
        },
        {
        name: "Nickel cyanide",        
        symbol: "Ni(CN)2",        
        transcribe:"/ˈnɪkl ˈsaɪənaɪd /",        
        sound: "924.mp3"        
        },
        {
        name: "Nickel tetracarbonyl",        
        symbol: "Ni(CO)4",        
        transcribe:"/ˈnɪkl tɛtrəˈkɑːbəˌnaɪl/",        
        sound: "925.mp3"        
        },
        {
        name: "Nitryl chloride",        
        symbol: "NO2Cl",        
        transcribe:"/nī′trəlˈklɔːraɪd/",        
        sound: "926.mp3"        
        },
        {
        name: "Nitryl fluoride",        
        symbol: "NO2F",        
        transcribe:"/nī′trəl ˈflʊəraɪd/",        
        sound: "927.mp3"        
        },
        {
        name: "Ozone",        
        symbol: "O3",        
        transcribe:"/ˈəʊzəʊn/",        
        sound: "928.mp3"        
        },
        {
        name: "Oxygen difluoride",        
        symbol: "OF2",        
        transcribe:"/ˈɒksɪʤən daɪˈflʊəraɪd/",        
        sound: "929.mp3"        
        },
        {
        name: "Phosphine",        
        symbol: "PH3",        
        transcribe:"/ˈfɒs fin/",        
        sound: "940.mp3"        
        },
        {
        name: "Phosphonium iodide",        
        symbol: "PH4I",        
        transcribe:"/fɒsˈfoʊ ni əm ˈaɪəʊdaɪd/",        
        sound: "941.mp3"        
        },
        {
        name: "Phenolphthalein",        
        symbol: "Phenolphtalein",        
        transcribe:"/ˈfi nɔlˈθæl in/",        
        sound: "942.mp3"        
        },
        {
        name: "Phosphorus oxychloride",        
        symbol: "POCl3",        
        transcribe:"/ˈfɒsfərəs ɑːk.si klɔːraɪd/",        
        sound: "943.mp3"        
        },
        {
        name: "Platinum tetrachloride",        
        symbol: "PtCl4",        
        transcribe:"/ˈplætɪnəm ˈtetrəˈklɔːraɪd/",        
        sound: "944.mp3"        
        },
        {
        name: "Platinum hexafluoride",        
        symbol: "PtF6",        
        transcribe:"/ˈplætɪnəmˈhɛk.səˈflʊəraɪd/",        
        sound: "945.mp3"        
        },
        {
        name: "Purple litmus paper",        
        symbol: "Quỳ tím",        
        transcribe:"/ˈpɜːpl ˈlɪtməs ˈpeɪpə/",        
        sound: "948.mp3"        
        },
        {
        name: "Selenium oxychloride",        
        symbol: "SeOCl2",        
        transcribe:"/səˈliːniəm ɑːk.si klɔːraɪd/",        
        sound: "964.mp3"        
        },
        {
        name: "Sulfur hexafluoride",        
        symbol: "SF6",        
        transcribe:"/ˈsʌlfəˈhɛk.səˈflʊəraɪd/",        
        sound: "965.mp3"        
        },
        {
        name: "Silicon carbide",        
        symbol: "SiC",        
        transcribe:"/ˈsɪlɪkən ˈkɑːbaɪd/",        
        sound: "966.mp3"        
        },
        {
        name: "Sulfuryl chloride",        
        symbol: "SO2Cl2",        
        transcribe:"/ˈsʌlfəˌraɪlˈklɔːraɪd/",        
        sound: "973.mp3"        
        },
        {
        name: "Uranyl nitrate",        
        symbol: "UO2(NO3)2",        
        transcribe:"/ ˈyʊər ə nɪl ˈnaɪtreɪt/",        
        sound: "993.mp3"        
        },
        {
        name: "Vanadyl sulfate",        
        symbol: "VOSO4",        
        transcribe:"/vəˈneɪdailˈsʌlfeɪt/",        
        sound: "995.mp3"        
        },
        {
        name: "Tungsten hexacarbonyl",        
        symbol: "W(CO)6",        
        transcribe:"/ˈtʌŋstənˈhɛk.səˈkɑːbəˌnaɪl/",        
        sound: "996.mp3"        
        },
        {
        name: "Zirconyl chloride",        
        symbol: "ZrOCl2",        
        transcribe:"/zɜːˈkəʊˌnaɪl ˈklɔːraɪd/",        
        sound: "1012.mp3"        
        },
        {
        name: "Sodium borohydride",        
        symbol: "NaBH4",        
        transcribe:"/ˈsəʊdiəm bɔːrəʊˈhaɪdraɪd/",        
        sound: "903.mp3"        
        },
        {
        name: "Iron(II) thiocyanate",        
        symbol: "Fe(SCN)2",        
        transcribe:"/ˈaɪən tu: ˈθɑɪəʊˈsaɪənaɪd/",        
        sound: "808.mp3"        
        },
        {
        name: "Nitrosyl fluoride",        
        symbol: "FNO",        
        transcribe:"/ˈnaɪtrəsɪlˈflʊəraɪd/",        
        sound: "810.mp3"        
        },
        {
        name: "Fluorine nitrate",        
        symbol: "FNO3",        
        transcribe:"/ˈflʊəriːn ˈnaɪtreɪt /",        
        sound: "811.mp3"        
        },
        {
        name: "cobaltous cyanide",        
        symbol: "Co(CN)2",        
        transcribe:"/kəʊˈbɔːltəs saɪənaɪd/",        
        sound: "783.mp3"        
        },
        {
        name: "Bromine trifluoride",        
        symbol: "BrF3",        
        transcribe:"/ˈbrəʊmiːn traɪˈflʊəraɪd/",        
        sound: "752.mp3"        
        },
        {
        name: "Bromine pentafluoride",        
        symbol: "BrF5",        
        transcribe:"/ˈbrəʊmiːn pentəˈflʊəraɪd/",        
        sound: "753.mp3"        
        },
        {
        name: "Bismuth oxychloride",        
        symbol: "BiOCl",        
        transcribe:"/ˈbɪzməθ ˈɑːk.sɪˈklɔːraɪd/",        
        sound: "748.mp3"        
        },
        {
        name: "Bismuth oxynitrate",        
        symbol: "BiONO3",        
        transcribe:"/ˈbɪzməθ ˈɑːk.sɪˈnaɪtreɪt/",        
        sound: "749.mp3"        
        },
        {
        name: "Bismuth oxycarbonate",        
        symbol: "(BiO)2CO3",        
        transcribe:"/ˈbɪzməθ ˈɑːk.sɪˈkɑːbənɪt /",        
        sound: "705.mp3"        
        },
        {
        name: "Ceric ammonium nitrate",        
        symbol: "(NH4)2Ce(NO3)6",        
        transcribe:"/ˈsɪr.ɪk əˈməʊnɪəmˈnaɪtreɪt/",        
        sound: "706.mp3"        
        },
        {
        name: "Mono",            
        symbol: "1",            
        transcribe:"/ˈmɒnəʊ/",            
        sound: "694.mp3"            
        },
        {
        name: "Di",        
        symbol: "2",        
        transcribe:"/dɑɪ/",        
        sound: "695.mp3"        
        },
        {
        name: "Tri",        
        symbol: "3",        
        transcribe:"/trai /",        
        sound: "696.mp3"        
        },
        {
        name: "Tetra",        
        symbol: "4",        
        transcribe:"/ˈtetrə/",        
        sound: "697.mp3"        
        },
        {
        name: "Penta",        
        symbol: "5",        
        transcribe:"/pentə/",        
        sound: "698.mp3"        
        },
        {
        name: "Hexa",        
        symbol: "6",        
        transcribe:"/heksə/",        
        sound: "699.mp3"        
        },
        {
        name: "Hepta",        
        symbol: "7",        
        transcribe:"/ˈheptə/",        
        sound: "700.mp3"        
        },
        {
        name: "Octa",        
        symbol: "8",        
        transcribe:"/ˈɒktə/",        
        sound: "701.mp3"        
        },
        {
        name: "Nona",        
        symbol: "9",        
        transcribe:"/nɒnə/",        
        sound: "702.mp3"        
        },
        {
        name: "Deca",        
        symbol: "10",        
        transcribe:"/dekə/",        
        sound: "703.mp3"        
        }
]  

const   CauHoi = [
    {
        question: 'Tên Tiếng Anh của Axit là .....? ',
        ansA: 'ASID',
        ansB: 'AXID',
        ansC: 'ACID',
        ansD: 'AXIDE ',
        res: 1
    },
    {
        question: 'Chất nào sau đây khác nhất?',
        ansA: 'Manganese(II) hydroxide',
        ansB: 'Coban(III) hydroxide',
        ansC: 'Nickel(II) hydroxide',
        ansD: 'Iron (II) hydroxide',
        res: 1
    },
    {
        question: 'Chất nào sau đây khác với các chất còn lại?',
        ansA: 'Beryllium sulfite',
        ansB: 'Lithium sulfite',
        ansC: 'Beryllium sulfate',
        ansD: 'Magnesium sulfite',
        res: 1
    }
]

ReCreateArray(NguyenTo, 'Nguyên tố')
ReCreateArray(Axit, 'Axit')
ReCreateArray(Bazo, 'Bazo')
ReCreateArray(Oxit, 'Oxit')
ReCreateArray(Muoi, 'Muối')
ReCreateArray(ThuatNgu, 'Thuật ngữ')
ReCreateArray(Khac, 'Khác')

const   Items = [...NguyenTo,...Axit,...Bazo,...Oxit,...Muoi,...ThuatNgu,...Khac]
