const clients = [
      {
        "shopName": "KRISHNA PRASAD BOOKS&STATIONERY (KAMAREEDY)",
        "ADRESS": "MAIN ROAD",
        "CITY": "KAMAREDDY",
        "district": "KAMAREDDY DIST",
        "pin": "503111",
        "mobile": "9866201500",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI LAKSHIMI SRINIVASA BOOK STALL (GARLADINE)",
        "ADRESS": "BESIDE CANARA BANK,MAIN ROAD,",
        "CITY": "GARLADINE",
        "district": "ANATHAPURAM DIST",
        "pin": 515731,
        "mobile": 7013278084,
        "AGENT": "PAID PARTY"
      },
      {
        "shopName": "MAHALAKSHIMI GENERAL STORES(GODAWARI KHANI)",
        "ADRESS": "MAIN ROAD ,",
        "CITY": "GODAWARIKHANI",
        "district": "KARIMNAGAR DIST",
        "pin": 505001,
        "mobile": "9849441881",
        "AGENT": "NAGARAJU",
        "booktype": "T",
        "__EMPTY_1": "SRIMANARAYANA"
      },
      {
        "shopName": "PADMA XEROX & BOOK DEPO (KAVALI)",
        "ADRESS": "TRUNK ROAD,",
        "CITY": "KAVALI",
        "district": "SPSR NELLORE DIST",
        "pin": "524201",
        "mobile": 7396684933,
        "AGENT": "KUMAR",
        "booktype": "N",
        "__EMPTY_1": "RIZWAN"
      },
      {
        "shopName": "SREE BOOK STORES (BANSWADA)",
        "ADRESS": "OPP MUNCIPAL OFFICE ,",
        "CITY": "BANSWADA",
        "district": "NIZAMABAD DIST",
        "pin": "503187",
        "mobile": "7799567712",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI LALITHA G/S&GIFT ARTICALS (HALIYA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "HALIYA",
        "district": "NALGONDA DIST",
        "pin": "508377",
        "mobile": "6303293924",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SAI THIRUMALA BOOKS (NAGARKURNOOL)",
        "ADRESS": "GUDLANARVA",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509215",
        "mobile": "9866660004",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRINIVASA STATIONERY&G/S (KHANAPUR)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "KHANAPUR",
        "district": "ADILABAD DIST",
        "pin": "504203",
        "mobile": "9985995835",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "KRISHNA BOOK DEPOT ( KURNOOL )",
        "ADRESS": "52/233,OLD BUS STAND",
        "CITY": "KURNOOL",
        "district": " KURNOOL DIST",
        "pin": "518001",
        "mobile": "9885319682",
        "AGENT": "KUMAR",
        "booktype": "R",
        "__EMPTY_1": "ANAND"
      },
      {
        "shopName": "ANURADHA BOOK DEPOT  ( ADILABAD)",
        "ADRESS": "NEW BUS SATAND,",
        "CITY": "ADILABAD",
        "district": "ADILABAD DIST",
        "pin": "504001",
        "mobile": "9949077178",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "DEVI STATIONARY (ADILABAD)",
        "ADRESS": "D.NO:3-4-275,MAIN ROAD",
        "CITY": "ADILABAD",
        "district": "ADILABAD DIST",
        "pin": "504001",
        "mobile": "9848251081",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "GANESH FANCY STORES (NIRMAL)",
        "ADRESS": "NARAYANA REDDY MARKET,",
        "CITY": "NIRMAL",
        "district": "ADILABAD DIST",
        "pin": "504106",
        "mobile": "7013372650",
        "AGENT": "NAGARAJU",
        "booktype": "T",
        "__EMPTY_1": "ANKURU"
      },
      {
        "shopName": "LAKSHMI BOOK DEPOT (ADILABAD)",
        "ADRESS": "VINAYAK CHOWK,",
        "CITY": "ADILABAD",
        "district": "ADILABAD DIST",
        "pin": "504001",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MADHVI BOOK AND STATIONARY (ASIFABAD)",
        "ADRESS": "D.NO:13-113,VIVEKANANDA CHOWK",
        "CITY": "ASIFABAD",
        "district": "ADILABAD DIST",
        "pin": "504293",
        "mobile": "9849327178",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "NAVEEN GENERAL STORES (CHENNUR)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "CHENNUR",
        "district": "ADILABAD DIST",
        "pin": "504201",
        "mobile": "8074398704",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "PARWATHI BOOK CENTRE (ADILABAD)",
        "ADRESS": "3-1-825/25,VINAYAKA CHOWK",
        "CITY": "ADILABAD",
        "district": "ADILABAD DIST",
        "pin": "504001",
        "mobile": "9948149513",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SAI ESWARA BOOK STALL (ASIFABAD)",
        "ADRESS": "BESIDE S.B.H BANK,",
        "CITY": "ASIFABAD",
        "district": "ADILABAD DIST",
        "pin": "504293",
        "mobile": "9949684391",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI GOPALA KRISHNA BOOK CENTER (ADILABAD)",
        "ADRESS": "VINAYAK CHOWK,",
        "CITY": "ADILABAD",
        "district": "ADILABAD DIST",
        "pin": "504001",
        "mobile": "9848931808",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MATHA SRI FANCY STORES (JANNARAM)",
        "ADRESS": "MAIN ROAD,SLATE HIGH SCHOOL ROAD,",
        "CITY": "JANNARAM",
        "district": "ADILABAD DIST",
        "pin": "504205",
        "mobile": "7672001100",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SATYANARAYANA BOOKS SATLL (JANNARAM)",
        "ADRESS": "MAIN ROAD",
        "CITY": "JANNARAM",
        "district": "ADILABAD DIST",
        "pin": "504205",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "KRISHNA STATIONERY (ADONI)",
        "ADRESS": "OPP:VASAVI KALYANA MANDAPAM",
        "CITY": "ADONI",
        "district": "ANANTHAPURAM DIST",
        "pin": "518301",
        "mobile": 8374431904,
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "HANUMAN PAPER & STATIONARY(ANANTHAPURAM)",
        "ADRESS": "14/77-B,OPP:NAMA TOWERS",
        "CITY": "ANANTHAPURAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "505001",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "ANU BOOK CENTER (ANANTAPUR)",
        "ADRESS": "NEAR S.R.S.LODGE,KAMALA NAGAR",
        "CITY": "ANANTAPUR",
        "district": "ANANTHAPURAM DIST",
        "pin": "515001",
        "mobile": "9440461355",
        "AGENT": "DIRECT",
        "booktype": "R"
      },
      {
        "shopName": "KARANATAKAM BOOK DEPOT (DARMAVARAM)",
        "ADRESS": "OPP:GIRLS HIGH SCHOOL,",
        "CITY": "DHARMAVARAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515671",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI PADHASAI ADITHYA BOOKS (DHARMAVARAM)",
        "ADRESS": "OPP:GIRLS HIGH SCHOOL,",
        "CITY": "DHARMAVARAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515671",
        "mobile": "9866099659",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "KRISHNA GENERAL STORE'S (GUNTAKAL)",
        "ADRESS": "16/12,MAIN ROAD",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "9866020108",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "LAKSHMI NARAYANA BOOK DEPOT (KADIRI)",
        "ADRESS": "THUMALA ROAD ,POOLA BAZAR",
        "CITY": "KADIRI",
        "district": "ANANTHAPURAM DIST",
        "pin": "515591",
        "mobile": "9515915230",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI LAKSHMI BOOK CENTER (ANANTAPURAM)",
        "ADRESS": "SUBHASH ROAD,",
        "CITY": "ANANTAPURAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515001",
        "mobile": "9440558720",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI MAHADEV BOOK STALL (GOOTY)",
        "ADRESS": "MAIN ROAD",
        "CITY": "GOOTY",
        "district": "ANANTHAPURAM DIST",
        "pin": "515401",
        "mobile": "9912164595",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "RVNS ENTERPRISE'S (GUNTAKAL)",
        "ADRESS": "DMM GATE,",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "8977504204",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SUBRAMANYAM BOOK STALL (TADIPATRI)",
        "ADRESS": "OPP. TOWN POLICE STATION,",
        "CITY": "TADIPATRI",
        "district": "ANANTHAPURAM DIST",
        "pin": "515411",
        "mobile": "9866026496",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "UMA MAHESWARA BOOK STALL (TADIPATRI)",
        "ADRESS": "OPP. POLICE STATION,",
        "CITY": "TADIPATRI",
        "district": "ANANTHAPURAM DIST",
        "pin": "515411",
        "mobile": "9397987460",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "GANESH BOOK DEPOT (GUNTAKAL)",
        "ADRESS": "10/289,RAIL WAY STATION ROAD",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "9704150022",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "JYOTHI BOOK STALL (ANANTHAPURAM)",
        "ADRESS": "NEAR HEAD POST OFFICE,",
        "CITY": "ANANTHAPURAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515001",
        "mobile": "9440017688",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "KAAPARTHI BOOKS & STATIONARY (PENUKONDA)",
        "ADRESS": "COURT ROAD,",
        "CITY": "PENUKONDA",
        "district": "ANANTHAPURAM DIST",
        "pin": "515110",
        "mobile": "8019240370",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "LINGAMURTHY BOOK DEPOT (GUNTAKAL)",
        "ADRESS": "#16/25-A,MAIN ROAD",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "9848314114",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "NAMASTE BOOK STALL (KADIRI)",
        "ADRESS": " 11/126,IQBAL ROAD,",
        "CITY": "KADIRI",
        "district": "ANANTHAPURAM DIST",
        "pin": "515591",
        "mobile": "9618284806",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "NAVODAYA BOOK CENTER ( HINDUPURAM )",
        "ADRESS": "R.NO.4,JPARIJATHA BUILDINGS,R.S.ROAD,",
        "CITY": " HINDUPURAM ",
        "district": "ANANTHAPURAM DIST",
        "pin": "515201",
        "mobile": "9989045107",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "NEW RAMANA BOOK STORES (KADIRI)",
        "ADRESS": "BY PASS ROAD,OPP.GIRLS HIGH SCHOOL",
        "CITY": "KADIRI",
        "district": "ANANTHAPURAM DIST",
        "pin": "515591",
        "mobile": "9966764857",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "PADMA BOOK STALL (DARAMAVARAM)",
        "ADRESS": "#15/307,PRT STREET",
        "CITY": "DARAMAVARAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515671",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "POOJA BOOKS & STATIONARY ( HINDUPURAM )",
        "ADRESS": "16-6-75,NUT BAZAR",
        "CITY": " HINDUPURAM ",
        "district": "ANANTHAPURAM DIST",
        "pin": "515201",
        "mobile": "9652769745",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "RAJU STORES (ANANTHAPURAM)",
        "ADRESS": "19/23,GOOTTY ROAD",
        "CITY": "ANANTHAPURAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "505005",
        "mobile": "9849918838",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "S.B BOOK STALL (KADIRI)",
        "ADRESS": "NEAR CHOWDESWARA TEMPLE,",
        "CITY": "KADIRI",
        "district": "ANANTHAPURAM DIST",
        "pin": "515591",
        "mobile": "9440875252",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SARASWATHI BOOK STALL (GUNTAKAL)",
        "ADRESS": "10/293,RAILWAY STATION ROAD",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "518501",
        "mobile": "9885409253",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SREE LAKSHMI VENKATESWARA PAPER MART(GUNTAKAL)",
        "ADRESS": "8/11-A,BESIDE ANDHRA BANK",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "8886123202",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SREE RAMA BOOK CENTRE (GUNTAKAL)",
        "ADRESS": "OPP:KANAKAYA PARAMESWARI TEMPLE,",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "9985296217",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI AYYAPPA BOOK STALL (ANANTHAPURAM)",
        "ADRESS": "SRI KANTAM CIRCLE,R F ROAD",
        "CITY": "ANANTHAPURAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515001",
        "mobile": "9985108829",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI BALAJI BOOK STORE (HINDUPURAM",
        "ADRESS": "MF ROAD,",
        "CITY": "HINDUPURAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515201",
        "mobile": "9490582947",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI KRISNA GENERAL STORES (GUNTAKAL)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "9866020108",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI LAKSHMI SAI BOOK STALL (GORANTLA)",
        "ADRESS": "OPP. SOCIETY BANK,",
        "CITY": "GORANTLA",
        "district": "ANANTHAPURAM DIST",
        "pin": "515231",
        "mobile": "9490982173",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI PADMANABHA BOOK STORE (HINDUPURAM)",
        "ADRESS": "#17-3-630B,K.L.ROAD",
        "CITY": "HINDUPURAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515201",
        "mobile": "8019110160",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI RAGHAVENDRA BOOKS STALL (GOOTY)",
        "ADRESS": "GANDHI CIRCLE,KURNOOL ROAD,",
        "CITY": "GOOTY",
        "district": "ANANTHAPURAM DIST",
        "pin": "515401",
        "mobile": "9951726228",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI SAI BOOK STALL & XEROX (PENUKONDA)",
        "ADRESS": "COURT ROAD,",
        "CITY": "PENUKONDA",
        "district": "ANANTHAPURAM DIST",
        "pin": "515110",
        "mobile": "9948888360",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI SUBRAMANYAM STORE'S(PENUKONDA)",
        "ADRESS": "COURT ROAD,",
        "CITY": "PENUKONDA",
        "district": "ANANTHAPURAM DIST",
        "pin": "515110",
        "mobile": "9247285609",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI VAIBHAV BOOK CENTRE (GUNTAKAL)",
        "ADRESS": "9-389,MAIN ROAD",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "9493065520",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI VASAVI BOOK STALL ( KADIRI )",
        "ADRESS": "1-126,OPP.TOWER CLOCK ",
        "CITY": " KADIRI ",
        "district": "ANANTHAPURAM DIST",
        "pin": "515591",
        "mobile": "9440798449",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRIPADASAI ADITYA BOOK & STATIONERY MART (DARMAVARAM)",
        "ADRESS": "OPP. GIRLS HIGH SCHOOL,",
        "CITY": "DHARMAVARAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515671",
        "mobile": "9866099659",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SUDARSHANA ENTERPRISES (HINDUPURAM)",
        "ADRESS": "16-6-10,NUT BAZAR",
        "CITY": "HINDUPURAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515201",
        "mobile": "08556-222244",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "VANI BOOK CENTRE (ANANTHAPURAM)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "ANANTHAPURAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515001",
        "mobile": "9866714399",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI SUBRAMANYAM STORES (PENUKONDA)",
        "ADRESS": "COURT ROAD ,",
        "CITY": "PENUKONDA",
        "district": "ANANTHAPURAM DIST",
        "pin": "515110",
        "mobile": "9247285609",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "VASAVI BOOK STALL (GUNTAKAL)",
        "ADRESS": "OPP. GOVT HOSPITAL,",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "8686867131",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI PADMAVATHI BOOK DEPO (JAGITYALA)",
        "ADRESS": "OPP:SRI SARASWATHI SHISHU MANDIR,ANGADI BAZAR",
        "CITY": "JAGITYALA",
        "district": "JAGITYALA DIST",
        "pin": "505327",
        "mobile": "9949005323",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "JANATA BOOK CENTER (HALIYA)",
        "ADRESS": "MIRYALAGUDA RODA,ANUMALA MANDAL",
        "CITY": "HALIYA",
        "district": "NALGONDA DIST",
        "pin": "508202",
        "mobile": "9848286612",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SAI KRISHNA TRADERS (ARMOOR)",
        "ADRESS": "MAINROAD , BUS STAND",
        "CITY": "ARMOOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "9912292616",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI LAKSHMI NARASIMHA BOOKS (ARMOOR)",
        "ADRESS": "NEAR COTAK BANK,OLD BUS STAND",
        "CITY": "ARMOOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "8897605957",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "ADARSH  BOOK DEPOT (ARMOR)",
        "ADRESS": "#3-1-79/4,OPP:NEW BUS STAND ,SAI BABA  COLONY",
        "CITY": "ARMOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "9490512346",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "GEETHA AGENCIES (ARMOOR)",
        "ADRESS": "SURYA COMPLEX,OPP.MRO OFFICE",
        "CITY": "ARMOOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "9848113114",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI GNANA SARASWATHI BOOK&STATIONERY (ARMOOR)",
        "ADRESS": "RTC COMPLEX NO.8,BESIDE VENKATESWARA THEATER",
        "CITY": "ARMOOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "7386627456",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI LAKSHMI VENKATA RAMANA TRADERS(ATMAKUR)",
        "ADRESS": "3/6/1,NEAR OLD BUS STAND,OPP:GOV COLLEGE",
        "CITY": "ATMAKUR",
        "district": "KURNOOL DIST",
        "pin": "518422",
        "mobile": "9885263037",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "S L V TRADERS (KARIVENA)",
        "ADRESS": "DEPUAL HIGH SCHOOL,KARIVENA VILLAGE,ATMAKUR MANDAL,",
        "CITY": "KARIVENA",
        "district": "KURNOOL DIST",
        "pin": "518422",
        "mobile": 7013908737,
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "MAHALAKSHMI BOOKS & FANCY (KOTHAGUDEM)",
        "ADRESS": "CHINNA BAZAR,KOTHAGUDEM",
        "CITY": "KOTHAGUDEM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507101",
        "mobile": "9440509829",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SRINIVASA AUTO XEROX ( BOOK SHOP (KOTHAGUDEM)",
        "ADRESS": "POST OFFICE ROAD,NEW PALAWANCHA",
        "CITY": "KOTHAGUDEM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507115",
        "mobile": "9951655787",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VARALAKSHMI BOOK DEPOT (KOTHAGUDEM)",
        "ADRESS": "CHINNA BAZAR,VINAYAKA BAZAR",
        "CITY": "KOTHAGUDEM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507101",
        "mobile": "8500280695",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRINIVASA BOOK DEPOT (RAMAVARAM)",
        "ADRESS": "15/1/10,MAIN BAZAR",
        "CITY": "RAMAVARAM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "533483",
        "mobile": "7893150709",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRINIVASA BOOKS AND GENERAL (KOTHAGUDEM)",
        "ADRESS": "6-3-51,MAIN ROAD",
        "CITY": "KOTHAGUDEM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507101",
        "mobile": "9985539726",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "MAA DAKHINAKALI PAPER PRODUCTS (BERHAMPUR)",
        "ADRESS": "ASKA ROAD,RAJA STREET JUNCTION",
        "CITY": "BERHAMPUR",
        "district": "BERAMPUR, GANJAM DIST",
        "pin": "760006",
        "mobile": "8895123244",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VIGNAN BOOK DISTRIBUTER (MACHERIAL)",
        "ADRESS": "HNO:5-310/1 ,BUS STAND ROAD,BESIDE SPICE RESTARENT,",
        "CITY": "MACHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": "6302144727",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "ASHAPURA FANCY STORES (BHADRACHALAM)",
        "ADRESS": "MARKET ROAD",
        "CITY": "BHADRACHALAM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507111",
        "mobile": "9441133026",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SAI LAKSHMI BOOKS&G/S (BHADRACHALAM)",
        "ADRESS": "BESIDE AYYAPA VIDEO,",
        "CITY": "BHADRACHALAM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507111",
        "mobile": "9032222126",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VIJAYA LAKSHMI BOOK DEPOT (BHADRACHALAM)",
        "ADRESS": "INDRA MARKET ROAD,",
        "CITY": "BHADRACHALAM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507111",
        "mobile": "9849158194",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "KIRAN BOOK CENTER (BHADRACHALAM)",
        "ADRESS": "CHARLA ROAD,",
        "CITY": "BHADRACHALAM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507111",
        "mobile": "9000909849",
        "AGENT": "PAID PARTY",
        "booktype": "A"
      },
      {
        "shopName": "RAMA BOOK & GENERAL (MANUGURU)",
        "ADRESS": "BANDARUGUDEM,",
        "CITY": "MANUGURU",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507117",
        "mobile": "9440438387",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SATYA SAI BOOK & STATIONERY (KOTHAGUDEM)",
        "ADRESS": "OPP. BUS STAND,",
        "CITY": "KOTHAGUDEM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507101",
        "mobile": "9440162436",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VENKATESWARA BOOK&STATIONERY(V.SATISH)(BHADRACHALAM)",
        "ADRESS": "BEHIND RTC BUS STAND,",
        "CITY": "BHADRACHALAM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507111",
        "mobile": "9966134452",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "LITTLE FLOWER HIGH SCHOOL (BHADRACHALAM)",
        "ADRESS": "MEDICAL COLONY,",
        "CITY": "BHADRACHALAM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507111",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "NAGALAKSHMI GENERAL STORES (MANUGURU)",
        "ADRESS": "MAIN ROAD,BANDARUGUDEM",
        "CITY": "MANUGURU",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507117",
        "mobile": "9440082612",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAMA MEDICAL & GENERAL STORES (MANUGURU)",
        "ADRESS": "BANDARU GUDEM,",
        "CITY": "MANUGURU",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507117",
        "mobile": "9440438387",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAMESH BOOKS & G/S  (YELLANDU)",
        "ADRESS": "MAIN ROAD ,",
        "CITY": "YELLANDU",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": 507117,
        "mobile": "9989113866",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAVI FANCY & BOOK SELLERS (KOTHAGUDEM)",
        "ADRESS": "# 8-2-55,NEHRU MARKET,",
        "CITY": "KOTHAGUDEM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507111",
        "mobile": "9849172621",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI BALAJI KIRANA BOOK&GENERAL (CHANDRAGONDA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "CHANDRAGONDA",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507166",
        "mobile": 8179197846,
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "SRI LAKSHMI GANAPATHI ENTERPRISES(ASWARAOPET)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "ASWARAOPET",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507301",
        "mobile": "9848255522",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI POORNIMA COLTH & FANCY (SUJATHANAGAR)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "SUJATHANAGAR",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507120",
        "mobile": "9949609913",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "SRI VENKATAMADHURI BOOKS&STATIONERY(MANUGURU)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "MANUGURU",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507117",
        "mobile": "9948423125",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VENKATESWARA BOOK DEPOT (KOTHAGUDEM)",
        "ADRESS": "CHINNA BAZAR,",
        "CITY": "KOTHAGUDEM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507101",
        "mobile": "9848447788",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SRINIVASA BOOKS&GENRAL STORES(KOTHAGUDEM)",
        "ADRESS": "CHINNA BAZAR,",
        "CITY": "KOTHAGUDEM",
        "district": "BHADRADRI KOTHAGUDEM DIST ",
        "pin": "507101",
        "mobile": "9985539726",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI LAKSHMI BOOK DEPOT (BHADRACHALAM)",
        "ADRESS": "UB ROAD,",
        "CITY": "BHADRACHALAM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507111",
        "mobile": "7075821041",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "KANAKA DURGA LAKSHIMI FANCY (ASWARAOPETA)",
        "ADRESS": "8-118-1, BCM ROAD,",
        "CITY": "ASWARAOPETA",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507301",
        "mobile": "9440322549",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "MAHALAKSHMI GIFT AND GENERAL STORES (BOBBILI)",
        "ADRESS": "BALIJI PETA ROAD,NEAR JANDA STREET",
        "CITY": "BOBBILI",
        "district": "VIZIANAGARAM DIST",
        "pin": "535558",
        "mobile": "8074446246",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": ".SRI MEHER BOOKDEPOT (NIZAMABAD)",
        "ADRESS": "DNO:2-11-92 , NEAR CHEER HANUMAN MANDIR,",
        "CITY": "NIZAMABAD",
        "district": "NIZAMABAD DIST",
        "pin": "503001",
        "mobile": "8309547964",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI MANIKANTA STATIONERY&G/S (BODUPPAL)",
        "ADRESS": "BESIDE TDP OFFICE,",
        "CITY": "BODUPPAL",
        "district": "MEDCHAL DIST",
        "pin": "500039",
        "mobile": "9912204106",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SHALIMAR BOOK CENTER (ADILABAD)",
        "ADRESS": "SATHNALA ROAD,MASOOD CHOWKBOKKALGUDA,",
        "CITY": "ADILABAD",
        "district": "ADILABAD DIST",
        "pin": "504001",
        "mobile": "9290561117",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SURYA BOOK & FANCY (NUZVIDU)",
        "ADRESS": "OPP. ST. ANNS HIGH SCHOOL,BUS STAND ROAD",
        "CITY": "NUZVIDU",
        "district": "KRISHNA DIST",
        "pin": "521201",
        "mobile": "9247109380",
        "AGENT": "NAGARAJU",
        "booktype": "PAID"
      },
      {
        "shopName": "SANDYA BOOK EMPORIUM (NELLORE)",
        "ADRESS": "BESIDE SUBHAMASTU SHOPPING COMPLEX,VRCCENTER ,",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "9290130291",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "VAIBHAV BOOKS & FANCY (CHANDRUGONDA)",
        "ADRESS": "BESIDE CHILAKA CELLPOINT,MAINROAD,",
        "CITY": "CHANDRUGONDA",
        "district": "KOTHAGUDEM DIST",
        "pin": "507166",
        "mobile": "9701472826",
        "AGENT": "KUMAR",
        "booktype": "PAID"
      },
      {
        "shopName": "NAVEEN FANCY&CONFECTONERY (TIRUVURU)",
        "ADRESS": "RAMALAYAM ROAD,CHEERALA CENTER",
        "CITY": "TIRUVURU",
        "district": "KRISHNA DIST",
        "pin": "521235",
        "mobile": "9848899358",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VENKATARAMANA ENTERPRISES (CHINNOOR)",
        "ADRESS": "NEW BUS STANAD, SBI ATM ,",
        "CITY": "CHINNOOR",
        "district": "MANCHERIAL DIST",
        "pin": "504201",
        "mobile": "7981163063",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "VEERABHADRA BOOKS / GENERAL STORE(CHIRYALA)",
        "ADRESS": "POLICE STATION",
        "CITY": "CHIRYALA",
        "district": "SIDDIPET DIST",
        "pin": "506223",
        "mobile": "9866520771",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SANKAR'S MART (TIRUPATI)",
        "ADRESS": "67, KORLAGUNTA ROAD",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9392191112",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "VAMSI KRISHNA BOOK STORES (TIRUPATI)",
        "ADRESS": "19-8-113A, RC ROAD,OPP. RAYTHU BAZAR",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9676824246",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "APPI BOOK STORES (KALIKIRI)",
        "ADRESS": "6/138, TB.ROAD, NEAR RTC BUS STAND,",
        "CITY": "KALIKIRI",
        "district": "CHITOOR DIST",
        "pin": "517234",
        "mobile": "9441155257",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "ASHAPURI STATIONERY (TIRUPATHI)",
        "ADRESS": "NEHRU STREET,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9700444883",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "BABU BOOK STALL (TIRUPATI)",
        "ADRESS": "PRAKASAM ROAD,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9885539422",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "COLLEGE BOOK CENTER (TIRUPATHI)",
        "ADRESS": "PRAKASAM ROAD,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "DHANALAKSHMI BOOK MART (TIRUPATI)",
        "ADRESS": "D.NO. 18-1-78/A, K.T ROAD",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9030448071",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "GURU ENTERPRISES (TIRUPATI)",
        "ADRESS": "14/1/7,NEHRU STREET",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9700625913",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "KIRAN BOOK CENTER (TIRUPATI)",
        "ADRESS": "1-2-274, PRAKASHAM ROAD,OPP. SBM ATM",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9703346400",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "KISHORE BOOK CENTRE (TIRUPATI)",
        "ADRESS": "6-1-69/B, KT ROAD,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9248332666",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "LAKSHMI BOOK & GENERAL (PAPANAIDUPETA)",
        "ADRESS": "BAZAR STREET,",
        "CITY": "PAPANAIDUPETA",
        "district": "CHITOOR DIST",
        "pin": "517526",
        "mobile": "9440592165",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "OMKAR STORES (SRIKALAHASTI)",
        "ADRESS": "BAZAR STREET,",
        "CITY": "SRIKALAHASTI",
        "district": "CHITOOR DIST",
        "pin": "517844",
        "mobile": "9848012326",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "RAJ BOOK SELLERS (PILER)",
        "ADRESS": "L.B.S ROAD,",
        "CITY": "PILER",
        "district": "CHITOOR DIST",
        "pin": "517214",
        "mobile": "9885395506",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "S.L.V. BOOK CENTRE (TIRUPATI)",
        "ADRESS": "105, PRAKASAM ROAD",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9440183921",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SANTHI JYOTHI ENTERPRISES (TIRUPATHI)",
        "ADRESS": "G-CAR STREET,",
        "CITY": "TIRUPATHI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9700625913",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SATHISH KUMAR BOOK STALL(RENIGUNTA)",
        "ADRESS": "1-181,POST OFFICE ROAD",
        "CITY": "RENIGUNTA",
        "district": "CHITOOR DIST",
        "pin": "517520",
        "mobile": "9440162076",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SATHYA SAI BOOKS & STATIONARY (TIRUPATI)",
        "ADRESS": "5-273/3, ULLIPATTEDA, MR PALLI,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9908754974",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SEVEN HILLS (TIRUPATI)",
        "ADRESS": "MADHURANAGAR,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9440167286",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SHANTHI JYOTHI ENTERPRISES (TIRUPATI)",
        "ADRESS": "NO.9A, G-CAR STREET",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "8686302923",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SLS BOOK CENTRE{TIRUPATI}",
        "ADRESS": "#17-4-305,AVILALA STREET,PRAKASAM ROAD",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9440183921",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SREE ADITYA BOOK CENTRE (TIRUPATI)",
        "ADRESS": "101/5, PRAKASAM ROAD,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "8332972720",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SREE SUDHA BOOK HOUSE (TIRUPATI)",
        "ADRESS": "BALAJI COLONY, MR PALLI",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9908509459",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SREE VARI ENTERPRISES (NAGARI)",
        "ADRESS": "PNR COMPLEX,",
        "CITY": "NAGIRI",
        "district": "CHITOOR DIST",
        "pin": 517501,
        "mobile": "9600001898",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "SRI ADITYA BOOK CENTRE (TIRUPATI)",
        "ADRESS": "D.NO. 101/5, PRAKASAM ROAD,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "8332972720",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI BALAJI AGIENCIES(TIRUPATI)",
        "ADRESS": "107, PRAKASAM ROAD,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9440200396",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI GANESH ENTERPRISES (TIRUPATI)",
        "ADRESS": "1-2-215, PRAKASAM ROAD",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9573719105",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI GANESH STATIONERY (TIRUPATI)",
        "ADRESS": "NO. 9, NEHRU STREET",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9703143565",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI NAVARANG ENTERPRISES (TIRUPATI)",
        "ADRESS": "NEHRU STREET,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "7013881758",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI PADMAVATHI GENERAL STORES (PAPANAIDUPETA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "PAPANAIDUPETA",
        "district": "CHITOOR DIST",
        "pin": "517526",
        "mobile": "9885239759",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI RANI BOOK STALL (CHINAGOTIGALLU)",
        "ADRESS": "COLLAGE ROAD,",
        "CITY": "CHINAGOTIGALLU",
        "district": "CHITOOR DIST",
        "pin": "517193",
        "mobile": "6303045145",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "SRI SAI HARSHA ENTERPRISES ( TIRUPATHI)",
        "ADRESS": "SRINIVASA PURAM,",
        "CITY": "TIRUPATHI",
        "district": "CHITOOR DIST",
        "pin": "517507",
        "mobile": "6305060050",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI VENKATESWARA BOOK DEPOT (TIRUPATI)",
        "ADRESS": "PRAKASAM ROAD,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9885479105",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRINIVASA BOOK & STATIONERY (TIRUPATI)",
        "ADRESS": "138/1,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9866031698",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "STUDENT BOOK CENTRE ( (S. NOWJIYA) (CHANDRAGIRI)",
        "ADRESS": "A.RANGAMPETA,",
        "CITY": "CHANDRAGIR",
        "district": "CHITOOR DIST",
        "pin": "517102",
        "mobile": "9885312658",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SV BOOK LINKS (TIRUPATI)",
        "ADRESS": "D.NO. 1-2-243, PRAKASAM ROAD",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9966238567",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "TIRUPATI CARD CENTRE (TIRUPATI)",
        "ADRESS": "SAROJINI DEVI ROAD,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9393620042",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "TRIVENI BOOK CENTER (TIRUPATI)",
        "ADRESS": "D.NO. 8-50/1/A, SAROJA TOWERS, ",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9553376363",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "VANI BOOK CENTRE (TIRUPATI)",
        "ADRESS": "# 156, BAZAR STREET, ",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "VIJAYA BOOK STALL (SRIKALAHASTI)",
        "ADRESS": "OPP:RTC BUS STAND,",
        "CITY": "SRIKALAHASTI",
        "district": "CHITOOR DIST",
        "pin": "517844",
        "mobile": "9059031357",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "GAYATHRI GENERALS BOOK CENTERE(TIRUPATI)",
        "ADRESS": "# 5-83,VEPAMANU STREET, TIRUCHANURU",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9247415865",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "POOJA ENTERPRISE'S (SRIKALAHASTI)",
        "ADRESS": "NEHRU STREET,",
        "CITY": "SRIKALAHASTI",
        "district": "CHITOOR DIST",
        "pin": "517844",
        "mobile": "8309366880",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "RAJA BOOK SELLER'S (PILER)",
        "ADRESS": "LBS ROAD MAIN ROAD",
        "CITY": "PILER",
        "district": "CHITOOR DIST",
        "pin": "517214",
        "mobile": "9885395506",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "GIRIDHAR BOOKS&FANCY (DHONE)",
        "ADRESS": "D NO:5/27,KOTHAPETA,",
        "CITY": "DHONE",
        "district": "ANANTHAPURAM DIST",
        "pin": "518222",
        "mobile": "9440239926",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI RAMA BOOK CENTER (GUNTAKAL)",
        "ADRESS": "OPP: S.K.P TEMPLE,",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "9985296217",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "NEW SUJATHA BOOK SHOP ( KURNOOL)",
        "ADRESS": "OPP:MAIN POST OFFICE,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9440118550",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRINIVASA AGENCIES (DUBACHARLA)",
        "ADRESS": "D.NO:5-91,",
        "CITY": "DUBACHARLA",
        "district": "WEST GODAVARI DIST",
        "pin": "534112",
        "mobile": "9494667569",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "LAKSHMI SATYASRINIVASA BOOK CENTRE(KOTHAPETA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "KOTHAPETA",
        "district": "EAST GODAVARI DIST",
        "pin": "533223",
        "mobile": "9849652274",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SATYA SRINIVASABOOK CENTRE (MYLAVARAM)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "MYLAVARAM",
        "district": "EAST GODAVARI DIST",
        "pin": "533223",
        "mobile": "9849652274",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "SRI SATYANARAYANA FANCY STORES (KOTHAPETA)",
        "ADRESS": "DEGREE COLLEGE ROAD,",
        "CITY": "KOTHAPETA",
        "district": "EAST GODAVARI DIST",
        "pin": "533223",
        "mobile": "9848543241",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "GANESH BOOK CENTRE (KAKINADA)",
        "ADRESS": "R.R ROAD ",
        "CITY": "KAKINADA",
        "district": "EAST GODAVARI DIST",
        "pin": "533003",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "NAGA & CO (KOTHAPETA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "KOTHAPETA",
        "district": "EAST GODAVARI DIST",
        "pin": "533223",
        "mobile": "9866331846",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SAROJA BOOKS & GENERALS (TUNI)",
        "ADRESS": "D.NO.8-9-3, PEDDAVEEDHI",
        "CITY": "TUNI",
        "district": "EAST GODAVARI DIST",
        "pin": "533401",
        "mobile": "8125533445",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SRINIVASA BOOK & STATIONERY (PITHAPURAM)",
        "ADRESS": "D.NO. 3-3-118,",
        "CITY": "PITHAPURAM",
        "district": "EAST GODAVARI DIST",
        "pin": "533450",
        "mobile": "9849836752",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VASAVI FANCY& G/S (TUNI)",
        "ADRESS": "NAKKINA VEEDHI,",
        "CITY": "TUNI",
        "district": "EAST GODAVARI DIST",
        "pin": "533401",
        "mobile": "9700924784",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SURESH GENERAL STORES (PEDDAPURAM)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "PEDDAPURAM",
        "district": "EAST GODAVARI DIST",
        "pin": "533437",
        "mobile": "9110548386",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAVI BOOK CENTER (KOTHAPETA)",
        "ADRESS": "NEAR DEGREE COLLAGE,",
        "CITY": "KOTHAPETA",
        "district": "EAST GODAVARI DIST",
        "pin": "533223",
        "mobile": 9848543241,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "S.V.S.V RAGAVENDHRA BOOK CENTERE (KAKINADA)",
        "ADRESS": "OPP:ENGINEERING HOSTEL,",
        "CITY": "KAKINADA",
        "district": "EAST GODAVARI DIST",
        "pin": "533003",
        "mobile": "9848535215",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "KEDAR FANCY & KANGAN HALL (ELURU)",
        "ADRESS": "25-2-20/1, NEAR GOVT HOSPITAL, MAIN ROAD",
        "CITY": "ELURU",
        "district": "Eluru DIST",
        "pin": "534002",
        "mobile": "9440570157",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAJ STATIONERS (ADONI)",
        "ADRESS": "13/173, NEAR VASAVI KALYANA MANDAPAM,FLOWER BAZAR,ADONI, ",
        "CITY": "ADONI",
        "district": "KURNOOL DIST",
        "pin": "518301",
        "mobile": "9441932635",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI PADMAVATHI BOOK CENTER (GADWAL)",
        "ADRESS": "MALD GOVT COLLAGE ROAD,",
        "CITY": "GADWAL",
        "district": "JOGULAMBA GADWAL DIST",
        "pin": "509125",
        "mobile": 994905323,
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "MANIKANTA FANCY&FOOTWEAR (VUTUKURU)",
        "ADRESS": "MAIN ROAD,GAMPALAGUDEM MANDALAM",
        "CITY": "VUTUKURU",
        "district": "KRISHNA DIST",
        "pin": 521403,
        "mobile": "9502249824",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "SRI SAI BOOKS AND GENERAL STORES (ARMOOR)",
        "ADRESS": "BESIDE ENTERENCE GATE , JAMBI HANUMAN TEMPLE",
        "CITY": "ARMOOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "9490829829",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI SAI BOOK & GENERAL STORES ( ARMOOR)",
        "ADRESS": "SHOP NO:7, BESIDE  MAIN GATE, JAMBI TEMPLE.",
        "CITY": "ARMOOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "9985351397",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "BIDYA BHANDAR (BRAHMAPUR)",
        "ADRESS": "HANUMAN BAZAR,",
        "CITY": "BRAHMAPUR",
        "district": "GANJAM DIST",
        "pin": "760006",
        "mobile": "9437617965",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "MANOJ TRADERS (BERHAMPUR)",
        "ADRESS": "HANUMAN BAZAR,",
        "CITY": "BERHAMPUR",
        "district": "GANJAM DIST",
        "pin": "760006",
        "mobile": "9337418730",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "R K TRADERS (BERHAMPUR)",
        "ADRESS": "BIJIPUR MAIN ROAD, OPP.TOT STREET,",
        "CITY": "BERHAMPUR",
        "district": "GANJAM DIST",
        "pin": "76006",
        "mobile": "7381100894",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "MAHAVEER GENERAL STORES ( GODAVIKHANI )",
        "ADRESS": "DF.NO. 1-16-10-96, FCI ROAD, KALYAN NAGAR",
        "CITY": " GODAVIKHANI ",
        "district": "PEDDAPALLI DIST",
        "pin": "505209",
        "mobile": "9849441881",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRINIVASA BOOK SELLERS (GODAVARIKHANI)",
        "ADRESS": "OPP. URVASI TALKIES, KALYAN NAGAR",
        "CITY": "GODAVARIKHANI",
        "district": "PEDDAPALLI DIST",
        "pin": "505209",
        "mobile": "9866502287",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRUTHI BOOK SHOP (GOOTY)",
        "ADRESS": "8/1042,BESIDE: SBI, ANANTAPURAM ROAD ,",
        "CITY": "GOOTY",
        "district": "ANANTHAPURAM DIST",
        "pin": "515401",
        "mobile": "9700206566",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SHRUTHI BOOK SHOP (GOOTY)",
        "ADRESS": "#8/1042, BESIDE SBI, ANANTHAPUR ROAD",
        "CITY": "GOOTY",
        "district": "ANANTHAPURAM DIST",
        "pin": "515401",
        "mobile": "9700206566",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SUNDARA PAWAN BINDINGS (GUDIWADA)",
        "ADRESS": "OPP:SATYAM BAKERY, RAVI TEXTILES BESIDE LINE,",
        "CITY": "GUDIWADA",
        "district": "KRISHNA DIST",
        "pin": "521301",
        "mobile": "9848437393",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SAI RAM BOOK CENTRE (GUDURU)",
        "ADRESS": "HSC NO81,#9/217,NEAR GANDHI STATUE,BAZAR ST.",
        "CITY": "GUDURU",
        "district": "SPSR NELLORE DIST",
        "pin": "524101",
        "mobile": "9949953442",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI VIGNESH BOOK WORLD (GUNTAKAL)",
        "ADRESS": "9/227,(DMM)DHAVARAVAM GATE RD, ELURU COMPLEX",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "8897403399",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "VIGNESH BOOKS STALL (GUNTAKAL)",
        "ADRESS": "#9/227, DHAVARAVAM GATE ROAD, ELURU COMPLEX",
        "CITY": "GUNTAKAL",
        "district": "ANANTHAPURAM DIST",
        "pin": "515801",
        "mobile": "8897403399",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "NAVATHA FANCY CONGAN (NARSARAOPETA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "NARSARAOPETA",
        "district": "GUNTUR DIST",
        "pin": "522601",
        "mobile": "8106747488",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "SRI LAKSHMI SRINIVASA AGENCIES (PIDUGURALLA)",
        "ADRESS": "JANPAD ROAD,",
        "CITY": "PIDUGURALLA",
        "district": "GUNTUR DIST",
        "pin": "522413",
        "mobile": "9246464168",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "LALITHA GENERAL STORES (HALIYA)",
        "ADRESS": "NEAR MADHAVA REDDY STATUE,",
        "CITY": "HALIYA",
        "district": "NALGONDA DIST",
        "pin": "508377",
        "mobile": "6303293924",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VIDYA STATIONARY & XEROX(HINDUPURAM)",
        "ADRESS": "INDIRA PARK, MUNCIPAL SHOPING COMPLEX",
        "CITY": "HINDUPURAM",
        "district": "ANANTHAPURAM DIST ",
        "pin": "515201",
        "mobile": "9440361719",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI VASAVI TRADERS (JADCHERLA)",
        "ADRESS": "SRI SATYA SAI COMPLEX, MAIN ROAD",
        "CITY": "JADCHERLA",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509301",
        "mobile": "9848577008",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "NEW VENKATARAMANA BOOK SELLERS (JAGITYAL)",
        "ADRESS": "OLD BUS STAND,",
        "CITY": "JAGITYAL",
        "district": "JAGITYALA DIST",
        "pin": "505327",
        "mobile": "9963348510",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "PRASHANTH BOOK DEPOT (JAGITYAL)",
        "ADRESS": "SIVA VEDHI,",
        "CITY": "JAGITYAL",
        "district": "JAGITYALA DIST",
        "pin": "505327",
        "mobile": "9848328126",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "VIKAS BOOKS SELLERS (KARIMNAGAR)",
        "ADRESS": "OPP:INDIAN BANK,",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9177757000",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "NATRAJ PAPAR MART (JAGITYAL)",
        "ADRESS": "SIVA VEEDHI,",
        "CITY": "JAGITYAL",
        "district": "JAGITYALA DIST",
        "pin": "505327",
        "mobile": "9866650243",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "NEW SRINIVASA BOOK DEPOT (JAGITYALA)",
        "ADRESS": "OLD BUS STAND,",
        "CITY": "JAGITYAL",
        "district": "JAGITYALA DIST",
        "pin": "505327",
        "mobile": "9398235133",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SAI GANESH BOOK DEPOT (JAGITYAL)",
        "ADRESS": "GUNJ ROAD, BHARMANA STREET,",
        "CITY": "JAGITYAL",
        "district": "JAGITYALA DIST",
        "pin": "505327",
        "mobile": "9502621344",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI BALAJI BOOK DEPOT (JAGITYAL)",
        "ADRESS": "HARI BABU COMPLEX, RAMBAZAR",
        "CITY": "JAGITYAL",
        "district": "JAGITYALA DIST",
        "pin": "505327",
        "mobile": "9440429505",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI SRINIVASA BOOK DEPOT (JAGITYAL)",
        "ADRESS": "SHIVA VEEDHI,",
        "CITY": "JAGITYAL",
        "district": "JAGITYALA DIST",
        "pin": "505327",
        "mobile": "9848633435",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "VISHAL PAPER CARD (JAGITYALA)",
        "ADRESS": "GUNJ ROAD,",
        "CITY": "JAGITYAL",
        "district": "JAGITYALA DIST",
        "pin": "505327",
        "mobile": "9866650243",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "V. PRABHAKAR BOOK DEPOT (JANAGAMA)",
        "ADRESS": "BUS STAND,",
        "CITY": "JANAGAMA",
        "district": "JANAGAMA DIST.",
        "pin": "506167",
        "mobile": "7893271955",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VENKATESWARA BOOK CENTRE(GADWAL)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "GADWAL",
        "district": "JOGULAMBA GADWAL DIST",
        "pin": "509125",
        "mobile": "7396923242",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRINIVASA BOOK CENTRE (GADWAL)",
        "ADRESS": "OPP. NEW BUS STAND,",
        "CITY": "GADWAL",
        "district": "JOGULAMBA GADWAL DIST",
        "pin": "509125",
        "mobile": "9966370525",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RUPA BOOK STALL (SHANTHI NAGAR)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "SANTHINAGAR",
        "district": "JOGULAMBA GADWAL DIST",
        "pin": 509125,
        "mobile": "7989972832",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "SRI LATHA BOOKS AND STITONERY (KADAPA)",
        "ADRESS": "6/5 , OPP:2ND GANDHI STATUE",
        "CITY": "KADAPA",
        "district": "KADAPA DIST",
        "pin": "516001",
        "mobile": "9247468016",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI SIVA BOOK DEPO (KADAPA)",
        "ADRESS": "DNO:5/478,TRUNK ROAD",
        "CITY": "KADAPA",
        "district": "KADAPA DIST",
        "pin": "516001",
        "mobile": "9701301305",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI SAI VENKATESWARA BOOK DEPOT (KADAPA)",
        "ADRESS": "OPP:GOVT GIRLS JR COLLEGE,",
        "CITY": "KADAPA",
        "district": "KADAPA DIST",
        "pin": "516002",
        "mobile": "9032522619",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI RAMA FANCY&BOOK HOUSE (BADWEL)",
        "ADRESS": "MYDHUKURU ROAD,",
        "CITY": "BADWEL",
        "district": "KADAPA DIST",
        "pin": "516227",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "M V R BOOK STALL (KADIRI)",
        "ADRESS": "OPP:SAI GANESH GIRLS COLLAGE,",
        "CITY": "KADIRI",
        "district": "ANANTHAPURAM DIST",
        "pin": "515591",
        "mobile": "9398953030",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SHIV ENTERPRISES (KAGHAZNAGAR)",
        "ADRESS": "R.P.ROAD",
        "CITY": "KAGHAZNAGAR",
        "district": "ADILABAD DIST",
        "pin": 504295,
        "mobile": "9866767347",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI SAI BOOK CENTRE (KALWAKURTHI)",
        "ADRESS": "VENKATESWAR TEMPLE ROAD,",
        "CITY": "KALWAKURTHI",
        "district": "NAGARKURNOOL DIST",
        "pin": "509324",
        "mobile": "9490146278",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RAJADHANI GENERAL STORE (ANANTAPURAM)",
        "ADRESS": "14/19,NEAR MYTRI HOSPATAL ROAD,",
        "CITY": "ANANTAPURAM",
        "district": "ANANTHAPURAM DIST",
        "pin": "515001",
        "mobile": "9985895468",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "JAI SANTHOSHIMA BOOK & GEN/STORES(BANSWADA)",
        "ADRESS": "1-1-11/5/1, OPP. BUS STAND",
        "CITY": "BANSWADA",
        "district": "KAMAREDDY DIST",
        "pin": "503187",
        "mobile": "9440827918",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RAMDEV STATIONERY (KAMAREDDY)",
        "ADRESS": "JPN ROAD,",
        "CITY": "KAMAREDDY",
        "district": "KAMAREDDY DIST",
        "pin": "503111",
        "mobile": "7901388033",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI BALAJI BOOK DEPOT (KAMAREDDY)",
        "ADRESS": "STATION ROAD,",
        "CITY": "KAMAREDDY",
        "district": "KAMAREDDY DIST",
        "pin": "503111",
        "mobile": "9885122374",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI GANESH ENTERPRISES (KAMAREDDY)",
        "ADRESS": "2-8-32,PEDDA BAZAR",
        "CITY": "KAMAREDDY",
        "district": "KAMAREDDY DIST",
        "pin": "503111",
        "mobile": " 9849215078",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI GANESH GENERAL STORES (KAMAREDDY)",
        "ADRESS": "STATION ROAD,",
        "CITY": "KAMAREDDY",
        "district": "KAMAREDDY DIST",
        "pin": "503111",
        "mobile": "9849215078",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI SAI BOOK STALL (BANSWADA)",
        "ADRESS": "OPP. RTC BUS STAND,",
        "CITY": "BANSWADA",
        "district": "KAMAREDDY DIST",
        "pin": "503187",
        "mobile": "9849224020",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI TIRUMALA ENTERPRISES (KAMAREDDY)",
        "ADRESS": "1-5-266/1, NETHAJI ROAD,",
        "CITY": "KAMAREDDY",
        "district": "KAMAREDDY DIST",
        "pin": "503111",
        "mobile": "9951806048",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI TIRUMALA G/STORE (KAMAREDDY)",
        "ADRESS": "STATION ROAD,",
        "CITY": "KAMAREDDY",
        "district": "KAMAREDDY DIST",
        "pin": "503111",
        "mobile": " 9912283716",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "GOPI KRISHNA ENTERPRISES (KAMAREDDY)",
        "ADRESS": "VIDYANAGAR NEAR AXIS BANK",
        "CITY": "KAMAREDDY",
        "district": "KAMAREDDY DIST",
        "pin": "503111",
        "mobile": "9849867853",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SREE LALITHA BOOKS & STATIONARY (TIRUPATHI)",
        "ADRESS": "DNO:20-3-117/8 , YERRAMITTA ,KARAKAMBADI ROAD ",
        "CITY": "TIRUPATHI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9515353221",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "BALAJI BOOK SELLERS (CHOPPADANDI)",
        "ADRESS": "OPP HIGH SCHOOL,",
        "CITY": "CHOPPADANDI",
        "district": "KARIMNAGAR DIST",
        "pin": "505415",
        "mobile": "9849046528",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "HARISH BOOK SELLERS (KARIMNAGAR)",
        "ADRESS": "KAMADENUVU COMPLEX,",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "K.K GENERAL STORES (KARIMNAGAR)",
        "ADRESS": "SHASTRI ROAD,",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9490225470",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MAHALAKSHMI GENERAL STORES (KARIMNAGAR)",
        "ADRESS": "# 1-6-54, SASTRI ROAD",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9052690813",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MAHAVEER BOOK CENTER (KARIMNAGAR)",
        "ADRESS": "JAFFER ROAD,",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": 7893477819,
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MANIDEEP BOOK STALL (HUZURABAD)",
        "ADRESS": "SHOP NO. 8, RTC COMPLEX,",
        "CITY": "HUZURABAD",
        "district": "KARIMNAGAR DIST",
        "pin": "505468",
        "mobile": "9866435832",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MANIKANTA BOOK SELLERS (HUZURABAD)",
        "ADRESS": "SHOP NO. C-25, DCMS COMPLEX,",
        "CITY": "HUZURABAD",
        "district": "KARIMNAGAR DIST",
        "pin": "505634",
        "mobile": "9866024634",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SATYANARAYANA BOOK STALL ( HUSUNABAD)",
        "ADRESS": "12-86, MAIN ROAD,",
        "CITY": "HUSUNABAD",
        "district": "KARIMNAGAR DIST",
        "pin": "505467",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SIVA AGENCIES ( MANTHINI )",
        "ADRESS": "MAIN ROAD,",
        "CITY": " MANTHINI ",
        "district": "KARIMNAGAR DIST",
        "pin": "505184",
        "mobile": "9440526332",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI GANESH GENERAL STORES (KARIMNAGAR)",
        "ADRESS": "1-2-1-2,SASTRI ROAD,",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9985514107",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI RAJARAJESWARI BOOK DEPOT (KARIMNAGAR)",
        "ADRESS": "MARKET ROAD,",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9849284681",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI RAMA BOOK SELLERS (KARIMNAGAR)",
        "ADRESS": "MANGAMMA THOTA,",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9848535628",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI VANI BOOK SELLERS (KARIMNAGAR)",
        "ADRESS": "OPP. ALPHORES JR. COLLEGE,",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9849967485",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI VIDYA BOOK SELLER'S (KARIMNAGAR)",
        "ADRESS": "7-1-102, MANKAMMATHOTA,",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9849600340",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SWATHI BOOK SELLERS STATIONARY AND G/S (KARIMNAGAR)",
        "ADRESS": "7-2-997, MANKAMMATHOTA, ",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9849843648",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "VIJETHA BOOK SELLERS (KARIMNAGAR)",
        "ADRESS": "NEAR TELANGANA CHOWK,",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9949899238",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MAHESWARI BOOK SELLERS (METAPALLI)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "METAPALLI",
        "district": "KARIMNAGAR DIST",
        "pin": "505325",
        "mobile": "9059570700",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "AYYAPPA AGENCIES (KARIMNAGAR)",
        "ADRESS": "4-5-69, OLD SIVALAYAM ROAD, HAMEEDPURA",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9246987711",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MATHRU SRI  BOOKS & STATIONERY (KARIMNAGAR)",
        "ADRESS": "#2-8-6, BESIDE GEETHA BHAVAN",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9848389403",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI VENKATESWARA BOOK SELLERS(KARIMNAGAR)",
        "ADRESS": "KAMADENUVU SHOPING COMPLEX, MARKET ROAD",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9848762325",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "HANUMAN BOOK DEPO (KARIMNAGAR)",
        "ADRESS": "SHOP NO:6,KAMADHENU SHOPPING COMPLEX",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "JAGADAMBA PAPERS & STATIONERY (BIDAR)",
        "ADRESS": "BVB COLLEGE ROAD,",
        "CITY": "BIDAR",
        "district": "KARNATAKA",
        "pin": "585401",
        "mobile": "9886358551",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RATHOD SALES CORPORATION (BIDAR)",
        "ADRESS": "OPP. UNION BANK, BVB COLLEGE ROAD",
        "CITY": "BIDAR",
        "district": "KARNATAKA",
        "pin": "585401",
        "mobile": "7019158020",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI RAGHAVENDRA PAPER MART (KAVALI)",
        "ADRESS": "10-15-19,TRUNK ROAD,",
        "CITY": "KAVALI",
        "district": "SPSR NELLORE DIST",
        "pin": "524201",
        "mobile": "08626243663",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SHREE KESAR G/S (KAVALI)",
        "ADRESS": "OPP.POST OFFICE ,TRUNK ROAD,",
        "CITY": "KAVALI",
        "district": "SPSR NELLORE DIST",
        "pin": "524201",
        "mobile": "9553256614",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "PADMA XEROX&BOOK DEPO (KAVALI)",
        "ADRESS": "BESIDE JAGAN MEDICALSHOP,UDAY GIRI BRIDGE CEN",
        "CITY": "KAVALI",
        "district": "SPSR NELLORE DIST",
        "pin": "524201",
        "mobile": "7396684933",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "AMBICA STATIONRY&G/S (KHAMMAM)",
        "ADRESS": "D.NO:9-4-168 ,AZIZ STREET,",
        "CITY": "KHAMMAM",
        "district": "KHAMMAM DIST",
        "pin": "507001",
        "mobile": "9963645305",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "BABU BOOK STALL (BVR) (KALLURU)",
        "ADRESS": "#1-146, MAIN ROAD,",
        "CITY": "KALLURU",
        "district": "KHAMMAM DIST",
        "pin": "507209",
        "mobile": "9032203766",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "BABU BOOK STALL XEROX (BSR) (KALLURU)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "KALLURU",
        "district": "KHAMMAM DIST",
        "pin": "507209",
        "mobile": "9063645899",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "DURGA FANCY (ASWARAOPETA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "ASWARAOPETA",
        "district": "KHAMMAM DIST",
        "pin": "507301",
        "mobile": 9505014949,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "KANYAKA FANCY (ASWARAOPETA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "ASWARAOPETA",
        "district": "KHAMMAM DIST",
        "pin": "507301",
        "mobile": "9505365898",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "KUMAR BOOKS & SPORTS (SATHUPALI)",
        "ADRESS": "OPP. SBH, MAIN ROAD,",
        "CITY": "SATHUPALI",
        "district": "KHAMMAM DIST",
        "pin": "507303",
        "mobile": "9441212707",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "NAVATA BOOK STALL (KHAMMAM)",
        "ADRESS": "KAMAN BAZAR,",
        "CITY": "KHAMMAM",
        "district": "KHAMMAM DIST",
        "pin": "507001",
        "mobile": "9866760461",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "P. RANGA RAO & SONS (KHAMMAM)",
        "ADRESS": "STATION ROAD,",
        "CITY": "KHAMMAM",
        "district": "KHAMMAM DIST",
        "pin": "507001",
        "mobile": "9885190160",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "PRASAD BOOK STORE (KALLURU)",
        "ADRESS": "CHANDRAPATLA ROAD,",
        "CITY": "KALLURU",
        "district": "KHAMMAM DIST",
        "pin": "507209",
        "mobile": "9603909809",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAGHU BOOK CENER (KHAMMAM)",
        "ADRESS": "GANDHI CHOWK,",
        "CITY": "KHAMMAM",
        "district": "KHAMMAM DIST",
        "pin": "507003",
        "mobile": "08742-225399",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAGHU BOOKS&STATIONERY (KHAMMAM)",
        "ADRESS": "OLD BUS STAND COMPLET,",
        "CITY": "KHAMMAM",
        "district": "KHAMMAM DIST",
        "pin": "507001",
        "mobile": 9848156121,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAVI BOOK STALL (KALLURU)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "KALLURU",
        "district": "KHAMMAM DIST",
        "pin": "507209",
        "mobile": "8019898672",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SAI RAM BOOK DEPOT (SATHUPALLI)",
        "ADRESS": "NEAR: OLD BUS STAND,",
        "CITY": "SATHUPALLI",
        "district": "KHAMMAM DIST",
        "pin": "507303",
        "mobile": 9885984388,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SAMVIDHA BOOK STALL (SATHUPALLI)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "SATHUPALLI",
        "district": "KHAMMAM DIST",
        "pin": "507303",
        "mobile": 9948265601,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SATISH BOOK STALL(SATHUPALLI)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "SATHUPALLI",
        "district": "KHAMMAM DIST",
        "pin": "507303",
        "mobile": "9440543466",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SATYANARAYANA AUTOCYCLE&STATIONERY (CHINTOOR)",
        "ADRESS": "V R PURAM ROAD,",
        "CITY": "CHINTOOR",
        "district": "KHAMMAM DIST",
        "pin": "507113",
        "mobile": "9989785956",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "TIRUMALA BOOK STALL (KHAMMAM)",
        "ADRESS": "STATION ROAD,",
        "CITY": "KHAMMAM",
        "district": "KHAMMAM DIST",
        "pin": "507001",
        "mobile": "9959570587",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VENKATESWARA BOOKS STALL (KHAMMAM)",
        "ADRESS": "YELLANDU X ROAD,",
        "CITY": "KHAMMAM",
        "district": "KHAMMAM DIST",
        "pin": "507001",
        "mobile": "7794862340",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "KUMAR BOOKS & GENERAL STORES (MIRYALAGUDA)",
        "ADRESS": "OPP. GANDHI PARK, NEAR POST OFFICE,",
        "CITY": "MIRYALAGUDA",
        "district": "NALGONDA DIST",
        "pin": "508207",
        "mobile": "9908571428",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VENKATESWARA STATIONERY (KHANAPUR)",
        "ADRESS": "NEW NEW BUS STAND,",
        "CITY": "KHANAPUR",
        "district": "NIRMAL DIST",
        "pin": "504203",
        "mobile": "9948030353",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "V V MAHA LAKSHMI BOOKS (CHANDRAGONDA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "CHANDRUGONDA",
        "district": "KOTHAGUDEM DIST",
        "pin": "507166",
        "mobile": "9000196101",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI VENKATESWARA BOOKSHOP (KOTHAGUDEM)",
        "ADRESS": "5-1-62-63, BHAJANMANDIR ROAD, NEAR NTR STATUE",
        "CITY": "KOTHAGUDEM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507101",
        "mobile": "9246909043",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SIVA GANESH ENTERPRISES ( KOTHAGUDEM)",
        "ADRESS": "OPP.RAJYA LAKSHMI JEWELLERY,",
        "CITY": "KOTHAGUDEM",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507101",
        "mobile": "9989084882",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "PRASANNA ENTERPRISES (MACHILIPATNAM)",
        "ADRESS": "D.NO.25/493, FORT ROAD,",
        "CITY": "MACHILIPATNAM",
        "district": "KRISHNA DIST",
        "pin": "521001",
        "mobile": "9846969355",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "ANU BOOK CENTRE (TIRUVURU)",
        "ADRESS": "BOSE BOMMA CENTRE,",
        "CITY": "TIRUVURU",
        "district": "KRISHNA DIST",
        "pin": "521235",
        "mobile": "9440158758",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "DHANALAKSHMI BOOK CENTRE (GUDIVADA)",
        "ADRESS": "D.NO.10/286, A3, RAJENDRA NAGAR",
        "CITY": "GUDIVADA",
        "district": "KRISHNA DIST",
        "pin": "521301",
        "mobile": "9290456507",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "GAYATHRI BOOK DEPOT (MACHILIPATNAM)",
        "ADRESS": "VALLURIRAJA CENTRE,",
        "CITY": "MACHILIPATNAM",
        "district": "KRISHNA DIST",
        "pin": "521001",
        "mobile": "9290503160",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "HAMEED FANCY & STATIONERY (PEDANA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "PEDANA",
        "district": "KRISHNA DIST",
        "pin": "521366",
        "mobile": "9885765830",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "LAKSHMIHARIKA BOOKS&STATIONERY(MACHILIPATNAM)",
        "ADRESS": "PATTABHI ROAD,",
        "CITY": "MACHILIPATNAM",
        "district": "KRISHNA DIST",
        "pin": "521001",
        "mobile": "9848678363",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "MA KUDDUS BOOK & FANCY (KANCHIKACHERLA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "KANCHIKACHERLA",
        "district": "KRISHNA DIST",
        "pin": "521108",
        "mobile": "9849057747",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "P BALA SUBRAMANYAM BOOKS (JAGGAYYAPETA",
        "ADRESS": "MAIN ROAD,",
        "CITY": "JAGGAYYAPETA",
        "district": "KRISHNA DIST",
        "pin": "521175",
        "mobile": "9392022485",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RANGA & CO. (GUDIVADA)",
        "ADRESS": "# 9/53,MAIN ROAD",
        "CITY": "GUDIVADA",
        "district": "KRISHNA DIST",
        "pin": "521301",
        "mobile": "9885060122",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SAI SANTHOSHIMATHA BOOK&GENERAL (TIRUVURU)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "TIRUVURU",
        "district": "KRISHNA DIST",
        "pin": "521235",
        "mobile": 9182024001,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SALEHA FANCY KANGAN G/S (PEDANA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "PEDANA",
        "district": "KRISHNA DIST",
        "pin": "521366",
        "mobile": "9885765830",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI FANCY ( NANDIGAMA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "NANDIGAMA",
        "district": "KRISHNA DIST",
        "pin": "521185",
        "mobile": "7013621020",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "SRI LAKSHMI VENKATASAI FANCY (VISANNAPETA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "VISANNAPETA",
        "district": "KRISHNA DIST",
        "pin": "521215",
        "mobile": "7075681111",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI RADHA KRISHNA BOOK SHOP(JAGGAYYAPETA)",
        "ADRESS": "NEHRU CHOWK,",
        "CITY": "JAGGAYYAPETA",
        "district": "KRISHNA DIST",
        "pin": "521175",
        "mobile": "9849994537",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SAI KRISHNA BOOK AND FANCY(TIRUVURU)",
        "ADRESS": "JAI BHAVI CENTER,",
        "CITY": "TIRUVURU",
        "district": "KRISHNA DIST",
        "pin": "521235",
        "mobile": "9542375244",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SATYASAI KRISNA BOOKS FANCY (VISANNAPETA)",
        "ADRESS": "OPP BUS STAND,MAIN ROAD",
        "CITY": "VISANNAPETA",
        "district": "KRISHNA DIST",
        "pin": "521215",
        "mobile": "9848285834",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRINIVASA BOOK SHOP (THIRUVURU)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "THIRUVURU",
        "district": "KRISHNA DIST",
        "pin": "521235",
        "mobile": "6301203033",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "V.S.R AGENCIES (MACHILIPATNAM)",
        "ADRESS": "PATTABI MARKET,",
        "CITY": "MACHILIPATNAM",
        "district": "KRISHNA DIST",
        "pin": "521001",
        "mobile": "9885079298",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VIJAYA LAKSHMI BOOK CENTRE (GUDIVADA)",
        "ADRESS": "GEETHABHAVAN ROAD,",
        "CITY": "GUDIVADA",
        "district": "KRISHNA DIST",
        "pin": "521301",
        "mobile": "9290528086",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VIJAYA LAKSHMI ENTREPRISES (MACHILIPATNAM)",
        "ADRESS": "KONERU CENTRE,",
        "CITY": "MACHILIPATNAM",
        "district": "KRISHNA DIST",
        "pin": "521001",
        "mobile": "9848270711",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VSR AGENCIES (MACHILIPATNAM)",
        "ADRESS": "ROBERTSON PET,MAIN ROAD",
        "CITY": "MACHILIPATNAM",
        "district": "KRISHNA DIST",
        "pin": "521001",
        "mobile": "9885079298",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SHIVA ENTERPRISES (SIRIPUR KHAGAZNAGAR)",
        "ADRESS": "R.P ROAD,",
        "CITY": "SIRIPUR KHAGAZNAGAR",
        "district": "KUMARAM BHEEM DIST",
        "pin": "504296",
        "mobile": "9866767347",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "JAIARBUDA FANCY G /STORE(SIRIPUR KHAGAZNAGAR)",
        "ADRESS": "1-2235,DURGANAGAR,WARDNO-2,",
        "CITY": "SIRIPUR KHAGAZNAGAR",
        "district": "KUMARAM BHEEM DIST",
        "pin": "504296",
        "mobile": "9177796301",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "KRISHNAKESAV GENERAL STORE (SIRPUR KHAGAZNAGAR)",
        "ADRESS": "S.D ROAD,",
        "CITY": "SIRIPUR KHAGAZNAGAR",
        "district": "KUMARAM BHEEM DIST",
        "pin": "504296",
        "mobile": "9390889990",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "LAKSHMI BOOKS & GENERALS(SIRIPUR KHAGAZNAGAR)",
        "ADRESS": "M.G ROAD,",
        "CITY": "SIRIPUR KHAGAZNAGAR",
        "district": "KUMARAM BHEEM DIST",
        "pin": "504296",
        "mobile": "9440005736",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI RAMDEV AGENCIES (SIRIPUR KHAGAZNAGAR)",
        "ADRESS": "1-2-157, DURGA NAGAR,",
        "CITY": "SIRIPUR KHAGAZNAGAR",
        "district": "KUMARAM BHEEM DIST",
        "pin": "504296",
        "mobile": "7702944521",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "ADONI BOOK CENTER (ADONI)",
        "ADRESS": "MUNICIPAL BUILDING, MM ROAD,",
        "CITY": "ADONI",
        "district": "KURNOOL DIST",
        "pin": "518301",
        "mobile": 9440035341,
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "AMBICA STATIONERY (KURNOOL)",
        "ADRESS": "OLD BUS STAND,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9533533112",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "ARUNODHAYA BOOK CENTER (KODUMURU)",
        "ADRESS": "18/24/B, BELLARY ROAD",
        "CITY": "KODUMURU",
        "district": "KURNOOL DIST",
        "pin": "518464",
        "mobile": "9490402800",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "BHAGAVAN BOOK STALL (NANDYALA)",
        "ADRESS": "N.K ROAD,",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9885189366",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "D.M STATIONERY (KURNOOL)",
        "ADRESS": "#18/20, NEHRU ROAD",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "GOODWILL BOOK STALL (NANDYALA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9849248791",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "GURU ANUGRAHA BOOK SELLER (ADONI)",
        "ADRESS": "7/285, GOWLIPET",
        "CITY": "ADONI",
        "district": "ANANTHAPURAM DIST",
        "pin": "518301",
        "mobile": "9985216050",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "K.K BOOK STORES (KURNOOL)",
        "ADRESS": "S.NO.6, MUNICIPAL SHOPS, M.S NAGAR",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9989115003",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "KAILASH STATIONERY (KURNOOL)",
        "ADRESS": "NEHURU ROAD,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9989792938",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "LAKSHMI PRASANA BOOK STORE(KURNOOL)",
        "ADRESS": "OPP:HEAD POST OFFICE,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518003",
        "mobile": "9885487361",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "LIMRA SUCESS BOOKS STALL (KURNOOL)",
        "ADRESS": "MADDUR NAGAR,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518003",
        "mobile": "7202599519",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "MAHAVEER BOOK CENTER (KURNOOL)",
        "ADRESS": "# 68/41A, YERRABURJU",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518002",
        "mobile": "8518245820",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "MALLIKARJUNA BOOK CENTRE (NANDYALA)",
        "ADRESS": "NK ROAD,",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9885984058",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "MANOJ STATIONERY & CO (KURNOOL)",
        "ADRESS": "67/73A, OLD BUS STAND",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9491525456",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "MARUTHI SATIONARY MART (KURNOOL)",
        "ADRESS": "SHOP NO. 18/22, NEHRU ROAD, ",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9441192499",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "PADMA BOOK SHOP (KURNOOL)",
        "ADRESS": "COLES COLLEGE ROAD,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9059191219",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "RAGHAVENDRA BOOK STORES (PATHIKONDA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "PATHIKONDA",
        "district": "KURNOOL DIST",
        "pin": "518380",
        "mobile": "9505203901",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SAI SRINIVASA BOOK STALL (KURNOOL)",
        "ADRESS": "OPP: HEAD POST OFFICE,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SATHYAM BOOK STORE & FANCY (NANDYALA)",
        "ADRESS": "NEAR: KDCC BANK,",
        "CITY": "NANADYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9052439300",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SESHADRI BOOK SELLER (ADONI)",
        "ADRESS": "NEAR MUNICIPAL HIGH SCHOOL,",
        "CITY": "ADONI",
        "district": "ANANTHAPURAM DIST",
        "pin": "518301",
        "mobile": "9502056940",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SHA GEVARCHAND BHAWARLAL(S.G.B) (KURNOOL)",
        "ADRESS": "NEHRU ROAD,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9989792938",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SHESHADRI BOOK CENTRE & STATIONARY(ADONI)",
        "ADRESS": "SHOP NO.1, NEAR MUNICIPAL HIGH SCHOOL",
        "CITY": "ADONI",
        "district": "ANANTHAPURAM DIST",
        "pin": "518301",
        "mobile": "9440244145",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI BHAGAVAN BOOK STALL (NANDYALA)",
        "ADRESS": "N K ROAD,",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9885189366",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI GEETHA BOOKS & FANCY STORE (NANDYALA)",
        "ADRESS": "2/160, KALPANA CENTRE,",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9701231774",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI KRISHNA TRADERS (NANDYALA)",
        "ADRESS": "2/102C, MULLANPETA,",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9866243589",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI SRINIVASA BOOK SHOP  (KURNOOL)",
        "ADRESS": "OPP: OLD CONTROL ROOM,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9949052701",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI VASAVI BOOK STORE (NANDYALA)",
        "ADRESS": "NEAR MH SCHOOL,",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9392200040",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI VENKATESWARA BOOK STALL(KURNOOL)",
        "ADRESS": "COLES COLLEGE ROAD,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518002",
        "mobile": "9848134467",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI VINAYAKA BOOK SELLERS (ADONI)",
        "ADRESS": "BESIDE DEVI NURSING HOME,",
        "CITY": "ADHONI",
        "district": "ANANTHAPURAM DIST",
        "pin": "518301",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRINIVASA BOOK AGENCIES (NANDYALA)",
        "ADRESS": "BALAJI COMPLEX,",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9885596171",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "STUDENT BOOK CENTER (ADONI)",
        "ADRESS": "MUNICIPAL SHOPPING COMPLEX,MAIN ROAD",
        "CITY": "ADONI",
        "district": "ANANTHAPURAM DIST",
        "pin": "518301",
        "mobile": "9381573564",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "STUDENT EMPORIUM (NANDYALA)",
        "ADRESS": "TEKKE,",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9908551865",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SUJATHA BOOK SHOP (KURNOOL)",
        "ADRESS": "OPP. MAIN POST OFFICE,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9440118550",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SUJITHA BOOK SHOP (KURNOOL)",
        "ADRESS": "OPP: PEDDA POST OFFICE,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": 9440245231,
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SUNITHA BOOK SHOP ( KURNOOL )",
        "ADRESS": "OPP:HEAD POST OFFICE,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9440572935",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "USHODAYA BOOK STALL (KURNOOL)",
        "ADRESS": "KOLES COLLEGE,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "VASAVI BOOKS SHOP ( KURNOOL )",
        "ADRESS": "OPP. HEAD POST OFFICE,",
        "CITY": " KURNOOL ",
        "district": "KURNOOL DIST",
        "pin": "518002",
        "mobile": "9441828592",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "VIJAYA BOOK STALL (KURNOOL)",
        "ADRESS": "OPP: HEAD POST OFFICE,",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "VIKRAM BOOK CENTER (ADONI)",
        "ADRESS": "SHOP NO.3, MUNICIPAL SHOPING COMPLEX",
        "CITY": "ADONI",
        "district": "ANANTHAPURAM DIST",
        "pin": "518301",
        "mobile": "9440253755",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "GEETHA TRADERS (NANDYALA)",
        "ADRESS": "#2/160, KLPANA CENTER,",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9701231774",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "DURGA SAI BOOK CENTER ( KURNOOL)",
        "ADRESS": "POLICE WELFARE COMPLEX, OPP: COLES COLLEGE",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "508001",
        "mobile": "9908424107",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "J.P BOOK SHOP (KURNOOL)",
        "ADRESS": "BESIDE:TOWN MODEL SCHOOL,OPP.COALS CHURCH",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518002",
        "mobile": "9966185070",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SIVA BOOK SHOP (KURNOOL",
        "ADRESS": "OPP. HEAD POST OFFICE, BESIDE COLES COLLEGE",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518002",
        "mobile": "9502568731",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "VIKRAM BOOK CENTRE (KURNOOL)",
        "ADRESS": "OPP. RAJESWARI TEMPLE, ARORA NAGAR, B CAMP",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518002",
        "mobile": "8555086619",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "GANGA BISHEN SHIVAKUMAR GENERAL (CHENNUR)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "CHENNOOR",
        "district": "MANCHERIAL DIST",
        "pin": "504201",
        "mobile": "9849620474",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI RAMA BOOK STALL (MADAKASIRA)",
        "ADRESS": "15-71,OLD SAINAGAR,AMARAPURAM BUSSTAND,",
        "CITY": "MADAKASIRA",
        "district": "ANANTHAPURAM DIST",
        "pin": "515301",
        "mobile": "9100288284",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI UDAY TRADERS (KURNOOL)",
        "ADRESS": "SHOP NO:12,MUNCIPAL SHOPPING COMPLEX",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518002",
        "mobile": "9347594593",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI SATYA SAI BOOK CENTER (BEJINEPALLI)",
        "ADRESS": "NEAR TS RTC BUS SATND ,",
        "CITY": "BEJINEPALLI",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509203",
        "mobile": "9441895762",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "SHARADHA BOOK STALL (THORRURU)",
        "ADRESS": "OPP:BUS STAND,",
        "CITY": "THORRURU",
        "district": "MAHABUBNAGAR DIST",
        "pin": "506163",
        "mobile": "9866066852",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "AHMED BASHA GENERAL STORES (JADCHARLA)",
        "ADRESS": "28-139,NGKL ROAD, BADEPALLY,",
        "CITY": "JADCHARLA",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509301",
        "mobile": "9885899903",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "ASHOK GENERAL STORES (MAHABUBNAGAR)",
        "ADRESS": "2-6-4/6, MARKET ROAD,",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9849532007",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "ATC MARKETING (MAHABUBNAGAR)",
        "ADRESS": "1-5-43/1, NEAR MM HOSPITAL, NEW TOWN",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9966529313",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "BASWESWARA BOOK STALL (WANPARTHY)",
        "ADRESS": "OPP. V CARE HOSPITAL,",
        "CITY": "WANPARTHY",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509103",
        "mobile": "8247507024",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "DEVI SARASWATHI BOOK STALL (MAHABUBNAGAR)",
        "ADRESS": "NEAR OLD BUS STAND,",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9440656069",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "E. JAGADEESH BOOK SELLERS (JADCHERLA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "JADCHERLA",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509301",
        "mobile": "9490053199",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "MAA GENERAL STORES (JADCHERLA)",
        "ADRESS": "BADEPALLY GUNJ ROAD,",
        "CITY": "JADCHERLA",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509301",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "MAHESH BOOK CENTER (MAHABUBNAGAR)",
        "ADRESS": "NEAR: ANANTHI HOTEL,",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": 9548408112,
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "NEW NOVELTIES & GENERALS (MAHABUBNAGAR)",
        "ADRESS": "SBH ROAD, CLOCK TOWER,",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9440258492",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RAJ SRI GENERAL STORES (THORRUR)",
        "ADRESS": "L.Y.R.GARDEN ROAD,",
        "CITY": "THORRUR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "506163",
        "mobile": "9490853067",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "RATHORE STATIONERY (MAHABUBNAGAR)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9030126018",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SONY BOOK CENTER (MAHABUBNAGAR)",
        "ADRESS": "NEW TOWN,MAIN ROAD",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9381423249",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI RAMA MARKETING (MAHABUBNAGAR)",
        "ADRESS": "1-2-29/4, SUBHASH NAGAR",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9848212599",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "VASEEM BOOK CENTER (MAHABUBNAGAR)",
        "ADRESS": "BOYAPALLI GATE,",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9640026715",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "VIDYA BOOK CENTRE (MAHABUBNAGAR)",
        "ADRESS": "BHAVITHA COLLEGE LINE,",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9494883334",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "VIJAYA SREE BOOK CENTRE (MAHABUBNAGAR)",
        "ADRESS": "NEW TOWN,",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9885556046",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI LAXMI NARASIMHA G/S (WANAPARTHY)",
        "ADRESS": "OPP:POLYTECHNIC COLLAGE,",
        "CITY": "WANAPARTHY",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509103",
        "mobile": "9440574316",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "AKSHARA BOOK WORLD (MAHABUBNAGAR)",
        "ADRESS": "NEAR SAMSKRUTHI SHOPING MALL, NEW TOWN",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9030999870",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RAGHAVENDRA BOOK & GIFTS (MAHABUBNAGAR)",
        "ADRESS": "NEAR AVANTI HOTEL, GOVT HOSPITAL ROAD",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9440163810",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "AKSHARA EXTENSION (MAHABUBNAGAR)",
        "ADRESS": "GROUND FLOOR, 1-10-87/5/D 5/E, NEW TOWN,",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": 9966529313,
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RATHORE STATIONARY&SUPPLIERIES (MAHABUBNAGAR)",
        "ADRESS": "3-8-23, RAM MANDIR CHOWSARSTA",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RAMDEV STATIONERY MART (MAHABUBNAGAR)",
        "ADRESS": "4-3-20, RAM NAGAR,",
        "CITY": "MAHABUBNAGAR",
        "district": "MAHABUBNAGAR DIST",
        "pin": "509001",
        "mobile": "9030126018",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "VINAKAYA BOOK DEPO (ADILABAD)",
        "ADRESS": "OPP:RITHU BAZAR,VINAYAK CHOWK,",
        "CITY": "ADILABAD",
        "district": "ADILABAD DIST",
        "pin": "504001",
        "mobile": "8919265606",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MINAR BOOK CENTER (NAGARKURNOOL)",
        "ADRESS": "WAQF COMPLEX,",
        "CITY": "NAGARKURNOOL",
        "district": "NAGARKURNOOL DIST",
        "pin": "509209",
        "mobile": "9440720776",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI AYYAPPA EMPORIUM (PITHAPURAM)",
        "ADRESS": "D.NO:5-1-129,",
        "CITY": "PITHAPURAM",
        "district": "EAST GODAVARI DIST",
        "pin": "533450",
        "mobile": "9848349873",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI LAKSHMINARASIMHA B/STATIONERY(SANGAREDDY)",
        "ADRESS": "6-2-29,NEAR OLD BUSSTAND,OPP AMBEDKAR STATUE",
        "CITY": "SANGAREDDY",
        "district": "SANGAREDDY DIST",
        "pin": "502001",
        "mobile": "7095906233",
        "AGENT": "KUMAR",
        "booktype": "G"
      },
      {
        "shopName": "MADHAVI BOOKS&GENERAL STORES(ASIFABAD)",
        "ADRESS": "D.NO. 13/133,VIVEKANANDA CHOWK",
        "CITY": "ASIFABAD",
        "district": "MANCHERIAL DIST",
        "pin": "504293",
        "mobile": "9866865358",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "AJAY PAPER MART (MANCHERIAL)",
        "ADRESS": "SHOP NO. 6-589, STATION ROAD,",
        "CITY": "MANCHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": "9849838633",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "ARUN ENTERPRISES (CHENNUR)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "CHENNUR",
        "district": "MANCHERIAL DIST",
        "pin": "504201",
        "mobile": "9849958941",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "DURGA BANGELS & GENERAL STORES (BELLAMPALLI)",
        "ADRESS": "OLD BUS STAND,",
        "CITY": "BELLAMPALLI",
        "district": "MANCHERIAL DIST",
        "pin": "504251",
        "mobile": "9849314960",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "OMKAR BOOK STALL (MANCHERIAL)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "MANCHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI SAI BOOK DEPOT (MANCHERIAL)",
        "ADRESS": "OPP. MUNICIPAL BUILDING OFFICE,",
        "CITY": "MANCHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": "9030735439",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI SAI ESWARA BOOKS STATIONERY (ASIFABAD)",
        "ADRESS": "NEAR BUS STAND,",
        "CITY": "ASIFABAD",
        "district": "MANCHERIAL DIST",
        "pin": "504293",
        "mobile": "9949684391",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRINIVASA BOOK STALL (ASIFABAD)",
        "ADRESS": "6-136, GANDHI CHOWK, ",
        "CITY": "ASIFABAD",
        "district": "MANCHERIAL DIST",
        "pin": "504293",
        "mobile": "9494150820",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "VIDYA BOOK LINKS (MANCHERIAL)",
        "ADRESS": "BUS STAND ROAD,",
        "CITY": "MANCHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": "7382207888",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI BHAVANI BOOK STALL&XEROX(MANCHERIAL)",
        "ADRESS": "BESIDE SBH,GARMILLA, NEAR OVER BRIDGE,",
        "CITY": "MANCHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": "9849399591",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI KALANIDHI BOOK & G/S (MANCHERIAL)",
        "ADRESS": "OPP.INDIAN GAS, MARKET ROAD,",
        "CITY": "MANCHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": "9441776870",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "RAJA GENERAL AND BOOKS ENTERPRISES (MANCHERIAL)",
        "ADRESS": "H.NO.6-401, STATION ROAD",
        "CITY": "MANCHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": "7997067668",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SHANKAR GENERAL STORS (MANCHERIAL)",
        "ADRESS": "5-632, MARKET ROAD,",
        "CITY": "MANCHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": 9849833961,
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "GURUDEV GENERAL STORES (MANCHERIAL)",
        "ADRESS": "RAILWAY STATION ROAD,FCA BUILDING",
        "CITY": "MANCHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": "9866029584",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "AKSHARA BOOK & GENERAL STORE (MANCHIRIYALA)",
        "ADRESS": "RAILWAY STATION ROAD,",
        "CITY": "MANCHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": "8886797255",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "ASHAPURI FANCY&G/S (MANUGURU)",
        "ADRESS": "MAIN ROAD, BANDARUGUDEM",
        "CITY": "MANUGURU",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507117",
        "mobile": "9440560631",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI AMBICA COSMOTICS (MANUGURU)",
        "ADRESS": "RK COMPLEX,",
        "CITY": "MANUGURU",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507117",
        "mobile": "9440841653",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SAI SRINIVASA BOOK & FANCY (MARKAPURAM)",
        "ADRESS": "GANDHI STEET, NEAR MUNCIPAL OFFICE,",
        "CITY": "MARKAPURAM",
        "district": "PRAKASAM DIST",
        "pin": "523316",
        "mobile": "8919408183",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SAI BABA STATIONERY (MEDAK)",
        "ADRESS": "J N ROAD,",
        "CITY": "MEDAK",
        "district": "MEDAK DIST",
        "pin": "502110",
        "mobile": "9989286403",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI GANESH GENERAL STORES (RAMAYAMPETA)",
        "ADRESS": "MAIN ROAD, RAMAYAMPETA",
        "CITY": "RAMAYAMPETA",
        "district": "MEDAK DIST",
        "pin": "502101",
        "mobile": "9966075560",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI RAGHAVENDRA STATIONERY (TOOFRAN)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "TOOFRAN",
        "district": "MEDAK DIST",
        "pin": "502334",
        "mobile": "9490867337",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SWAPNA BOOKS & GENERAL (MEDAK)",
        "ADRESS": "MG ROAD,",
        "CITY": "MEDAK",
        "district": "MEDAK DIST",
        "pin": "502110",
        "mobile": "9290456100",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "T.SOMALINGAM G/S (MEDAK)",
        "ADRESS": "GROUND , CHAMAN ,",
        "CITY": "MEDAK",
        "district": "MEDAK DIST",
        "pin": "502110",
        "mobile": 9346464777,
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "KALYANI STATIONARY & G/S (HALIYA)",
        "ADRESS": "5/18, OPP RTC BUSTAND,MIRYALAGUDEM ROAD",
        "CITY": " HALIYA",
        "district": "NALGONDA DIST",
        "pin": "508377",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "JANATHA BOOK CENTRE (MIRYALAGUDA)",
        "ADRESS": "NEAR GANDHICHOWK, VAISHNAVI HOTEL LINE",
        "CITY": "MIRYALAGUDA",
        "district": "NALGONDA DIST",
        "pin": "508207",
        "mobile": "9246738773",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VENKATESWARA BOOK DEPOT&GENERAL (BADWEL)",
        "ADRESS": "#8-3-76,NEAR HDFC BANK,VENKATAYA NAGAR,MUDUKUR ROAD,",
        "CITY": "BADWEL",
        "district": "KADAPA DIST",
        "pin": "516227",
        "mobile": "9989498414",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SAMATHA STATIONERY (KARIMNAGAR)",
        "ADRESS": "VENAKATESWARA THEATRE COMPLEX,MUKARAMPURE,",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "9949943610",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "DEVI FANCY & STATIONARY (GUDUR)",
        "ADRESS": "SHOP NO.11,12,80/4,SRI DARMARAJASWAMI COMPLEXMUTYALA PETA,",
        "CITY": "GUDUR",
        "district": "SPSR NELLORE DIST",
        "pin": "524101",
        "mobile": "8897127928",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "VASAVI BOOK CENTER&G/S (NAGARKURNOOL)",
        "ADRESS": "11-137,NEAR:BUS STAND,MAIN ROAD,",
        "CITY": "NAGARKURNOOL",
        "district": "NAGARKURNOOL DIST",
        "pin": "509209",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "DEVI GENERAL & STATIONERY (ACHAMPETA)",
        "ADRESS": "MAIN ROAD, OLD BUS STAND",
        "CITY": "ACHAMPETA",
        "district": "NAGARKURNOOL DIST",
        "pin": "509375",
        "mobile": "9441302265",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "NEW SRINIVASA GENERAL STORES(NAGURKURNOOL)",
        "ADRESS": "NEW BUS STAND,",
        "CITY": "NAGURKURNOOL",
        "district": "NAGARKURNOOL DIST",
        "pin": "509209",
        "mobile": "9866031698",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "ROYAL BOOK CENTER (NAGARKURNOOL)",
        "ADRESS": "BUS STAND BACKSIDE,",
        "CITY": "NAGARKURNOOL",
        "district": "NAGARKURNOOL DIST",
        "pin": "509209",
        "mobile": 9948924001,
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "ROYAL BOOK STALL (KADIRI)",
        "ADRESS": "NEAR. BUS STAND,",
        "CITY": "KADIRI",
        "district": "NAGARKURNOOL DIST",
        "pin": "509209",
        "mobile": "9948924001",
        "AGENT": "KUMAR",
        "booktype": "T"
      },
      {
        "shopName": "SAI GANESH BOOK STALL (TELKAPALLI)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "TELKAPALLI",
        "district": "NAGARKURNOOL DIST",
        "pin": "509385",
        "mobile": "9441303087",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI BALAJI BOOK & GENERAL STORES (ACHAMPETA)",
        "ADRESS": "NEAR NEW RTC BUS STAND,",
        "CITY": "ACHAMPETA",
        "district": "NAGARKURNOOL DIST",
        "pin": "509375",
        "mobile": "9440135772",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI VENKATA RAMANA GENERALS(NAGARKURNOOL)",
        "ADRESS": "9-22, OPP.POST OFFICE,MAIN ROAD,",
        "CITY": "NAGARKURNOOL",
        "district": "NAGARKURNOOL DIST",
        "pin": "509209",
        "mobile": "9440656198",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI VENKATARAMANA GENERAL (NAGARKURNOOL)",
        "ADRESS": "OPP: POST OFFICE,",
        "CITY": "NAGARKURNOOL",
        "district": "NAGARKURNOOL DIST",
        "pin": "509209",
        "mobile": "9440656198",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SWATHI MEDICAL & GENERAL STORE (KALWAKURTHY)",
        "ADRESS": "16-18, NEAR RTC BUS STAND,",
        "CITY": "KALWAKURTHI",
        "district": "NAGARKURNOOL DIST",
        "pin": "509324",
        "mobile": "7661969866",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "VEDHA BOOK STALL (NAGARKURNOOL)",
        "ADRESS": "NEAR. BUS STAND,",
        "CITY": "NAGARKURNOOL",
        "district": "NAGARKURNOOL DIST",
        "pin": "509209",
        "mobile": 8187825170,
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "P.CHANDRAMOULI (TELKAPALLI)",
        "ADRESS": "LINGALA ROAD,",
        "CITY": "TELKAPALLI",
        "district": "NAGARKURNOOL DIST",
        "pin": "575683",
        "mobile": "9494230451",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "UNIVERSAL STATIONERY (NAIDUPETA)",
        "ADRESS": "K.V.CENTER,BESIDE SUDHARSHAN RAO HOSPATAL",
        "CITY": "NAIDUPETA",
        "district": "SPSR NELLORE DIST",
        "pin": "524126",
        "mobile": "9441761167",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "UNIVERSAL STATIONERY (NELLORE)",
        "ADRESS": "K.V.CENTER,",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524126",
        "mobile": "9441761167",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI ANJENIYA BOOKS (KODADA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "KODADA",
        "district": "NALGONDA DIST",
        "pin": "508206",
        "mobile": "9381177452",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "ARCHANA GENERAL STORE (NALGONDA)",
        "ADRESS": "RASTRAPATHI ROAD,",
        "CITY": "NALGONDA",
        "district": "NALGONDA DIST",
        "pin": "508001",
        "mobile": "9290458631",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "BALAJI GENERAL STORE'S (CHITYALA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "CHITYALA",
        "district": "NALGONDA DIST",
        "pin": "508114",
        "mobile": "9848016762",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "BALAJI GENERAL STORES (CHITYALA)",
        "ADRESS": "OPP. ZPH SCHOOL, MAIN ROAD",
        "CITY": "CHITYALA",
        "district": "NALGONDA DIST",
        "pin": "508114",
        "mobile": "9848016762",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "JAGAN BOOK STALL & STATIONERY (NALGONDA)",
        "ADRESS": "OPP. N G COLLEGE, POLICE COMPLEX",
        "CITY": "NALGONDA",
        "district": "NALGONDA DIST",
        "pin": "508001",
        "mobile": "9440673236",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "JAI KRISHNA GENERAL STORES (VALIGONDA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "VALIGONDA",
        "district": "NALGONDA DIST",
        "pin": "508112",
        "mobile": "9885630277",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "KAVYA BOOK DEPOT (NEREDUCHARLA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "NEREDUCHARLA",
        "district": "NALGONDA DIST",
        "pin": "508218",
        "mobile": "9030600199",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "KOTILINGAM GENERAL STORES (CHITYALA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "CHITYALA",
        "district": "NALGONDA DIST",
        "pin": "508114",
        "mobile": "9951543369",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "KUMAR BOOKS GENERALS (PAPANAIDU PETA)",
        "ADRESS": "OPP. POST OFFICE,",
        "CITY": "PAPANAIDU PETA",
        "district": "CHITOOR DIST",
        "pin": "508207",
        "mobile": "9908571428",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "MAHESWARI GENERAL STORE (MIRYALAGUDA)",
        "ADRESS": "SAGAR ROAD,",
        "CITY": "MIRYALAGUDA",
        "district": "NALGONDA DIST",
        "pin": "508207",
        "mobile": "9848361242",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "MARUTHI GENERAL STORES (NALGONDA)",
        "ADRESS": "MUSI ROAD,",
        "CITY": "NAKREKAL",
        "district": "NALGONDA DIST",
        "pin": "522615",
        "mobile": "9247877551",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "PARAMESWARA GENERAL STORES (MIRYALAGUDA)",
        "ADRESS": "VASAVI BHAVAN ROAD,",
        "CITY": "MIRYALAGUDA",
        "district": "NALGONDA DIST",
        "pin": "508207",
        "mobile": "9849839135",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAJU GENERAL STORE (CHITYALA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "CHITYALA",
        "district": "NALGONDA DIST",
        "pin": "508114",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RAMDEV GENERAL STORE (MIRYALAGUDEM)",
        "ADRESS": "RANGAMMA HOTEL LINE,",
        "CITY": "MIRYALAGUDEM",
        "district": "NALGONDA DIST",
        "pin": "508207",
        "mobile": "9398139823",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SPANDANA BOOK CENTRE (NALGONDA)",
        "ADRESS": "OPP. WOMEN'S COLLEGE, RAMGIRI,",
        "CITY": "NALGONDA",
        "district": "NALGONDA DIST",
        "pin": "508001",
        "mobile": "9848488715",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI KRISHNA GENERAL STORES (NALGONDA)",
        "ADRESS": "PRAKASAM BAZAR,",
        "CITY": "NALGONDA",
        "district": "NALGONDA DIST",
        "pin": "508001",
        "mobile": "9849838928",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SIDDARDHA GENERAL STORE (MIRYALAGUDA)",
        "ADRESS": "OPP. OLD BUS STAND,",
        "CITY": "MIRYALAGUDA",
        "district": "NALGONDA DIST",
        "pin": "508207",
        "mobile": "9247788235",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SRINIVASA GENERAL STORES (MIRYALAGUDA)",
        "ADRESS": "GANESH MARKET,",
        "CITY": "MIRYALAGUDA",
        "district": "NALGONDA DIST",
        "pin": "508207",
        "mobile": "9642436914",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VIJAYA LAKSHMI TRADERS (NALGONDA)",
        "ADRESS": "3/2/9, OLD CITY, NEHRU GUNZ, ",
        "CITY": "NALGONDA",
        "district": "NALGONDA DIST",
        "pin": "508001",
        "mobile": "9440696161",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRIDHAR KIRANA & GENERAL (NALGONDA)",
        "ADRESS": "RAMGIRI,",
        "CITY": "NALGONDA",
        "district": "NALGONDA DIST",
        "pin": "508001",
        "mobile": "9849800825",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRIDHAR KIRANA & GENERAL STORE (NALGONDA)",
        "ADRESS": "OPP. DVM SCHOOL BUILDING,RAMGIRI",
        "CITY": "NALGONDA",
        "district": "NALGONDA DIST",
        "pin": "508001",
        "mobile": "9849800825",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRIKANTH GENERAL STORES (NALGONDA)",
        "ADRESS": "RAMGIRI,",
        "CITY": "NALGONDA",
        "district": "NALGONDA DIST",
        "pin": "508001",
        "mobile": "9505443746",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SUJATHA KIRANA & GENERAL STORE (NALGONDA)",
        "ADRESS": "BESIDE GOVT HOSPITAL, GOLLAGUDA, ",
        "CITY": "NALGONDA",
        "district": "NALGONDA DIST",
        "pin": "508001",
        "mobile": "9966332171",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "UMA MAHESWARI GENERAL STORES (MIRYALAGUDEM)",
        "ADRESS": "SAGAR ROAD,",
        "CITY": "MIRYALAGUDEM",
        "district": "NALGONDA DIST",
        "pin": "508207",
        "mobile": "9247288299",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "LAKSHIMI FANCY G/S (KONDAMALIPALLI)",
        "ADRESS": "HYDERABAD ROAD ,",
        "CITY": "KONDAMALIPALLI",
        "district": "NALGONDA DIST",
        "pin": "508243",
        "mobile": "9440778774",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SAI SYAM STATIONERY (NAKREKAL)",
        "ADRESS": "7/93, Musi Road,",
        "CITY": "NAKREKAL",
        "district": "NALGONDA DIST",
        "pin": "508211",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI RAGHAVENDRA FANCY & G/STORES (KONDAMALIPALLI)",
        "ADRESS": "OPP:BUS STAND ,",
        "CITY": "KONDAMALIPALLI",
        "district": "NALGONDA DIST",
        "pin": "508243",
        "mobile": "9390385830",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "BABU STORES (NALGONDA)",
        "ADRESS": "BESIDE BHASKAR THEATER, ML.G ROAD,",
        "CITY": "NALGONDA",
        "district": "NALGONDA DIST",
        "pin": "508001",
        "mobile": "9885335076",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "MAYURI BOOK CENTER (NANDYALA)",
        "ADRESS": "SRINIVAS NAGAR,NATIONAL COLLEGE ROAD,",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9440145291",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "N.SUBRAMANYAM BOOK STALL (PYAPILI)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "PYAPILI",
        "district": "KURNOOL DIST",
        "pin": "518221",
        "mobile": "9490483212",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SHIVA SAI BOOK STALL (KURNOOL)",
        "ADRESS": "NEAR:SHAKUNTALA KALYANA MANDAPAM",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518002",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI MANJUNATHA BOOK & FANCY STORE(NANDYALA)",
        "ADRESS": "B-18, BALAJI COMPLEX, BALAJI COLLEGE ROAD",
        "CITY": "NANDYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9966671039",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "BALAJI GENERAL STORES (NARKETPALLI)",
        "ADRESS": "OPP:GRAMA PANCHAYATHI OFFICE",
        "CITY": "NARKETPALLI",
        "district": "NALGONDA DIST",
        "pin": "508254",
        "mobile": "9951651822",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "VIJAYA BOOK CENTER (CHANDRAGIRI)",
        "ADRESS": "SHOP NO:5,SC CORPORATION SHOPPING COMPLEX,",
        "CITY": "CHANDRAGIRI",
        "district": "CHITOOR DIST",
        "pin": "517101",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "VISWAJANANI STATIONERY (RAVULAPALAM)",
        "ADRESS": "D.NO.4-289,MARKET ROAD,NEAR VENKATESWARASWAMITEMPLE,",
        "CITY": "RAVULAPALAM",
        "district": "WEST GODAVARI DIST",
        "pin": "533238",
        "mobile": "7075622982",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SAI RAGAVENDHRA BOOK CENTER (NELLORE)",
        "ADRESS": "OPP. VRC GROUND,TRUNK ROAD",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "9246431316",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "GUPTA & SON'S (NELLORE)",
        "ADRESS": "TRUNK ROAD, STONE HOUSE PETA,",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "JANATHA BOOK STALL (GUDURU)",
        "ADRESS": "RAJA STREET,",
        "CITY": "GUDURU",
        "district": "SPSR NELLORE DIST",
        "pin": "524101",
        "mobile": "9000623580",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "NAKODA STATIONERY (NELLORE)",
        "ADRESS": "SHIKARAM VARI STREET,",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "9618989262",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "PRASAD BOOK STALL (KAVALI)",
        "ADRESS": "TRUNK ROAD,",
        "CITY": "KAVALI",
        "district": "SPSR NELLORE DIST",
        "pin": "524201",
        "mobile": "7013762408",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI SAI RAGHAVENDRA BOOK CENTRE(NELLORE)",
        "ADRESS": "OPP. VRC GROUND, TRUNK ROAD",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "9246431316",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "STUDENT BINDING WORKS (NELLORE)",
        "ADRESS": "STONE HOUSE PETA",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "9491921216",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "VAMSI KRISHNA TRADERS ( NELLORE)",
        "ADRESS": "M.V AGRAHARAM,",
        "CITY": " NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "9948835688",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "VAMSI PEN'S CORNER (NELLORE)",
        "ADRESS": "TRUNK ROAD,",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "9948835688",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "VEENAS BOOK CENTRE (GUDURU)",
        "ADRESS": "GANDHI BOMMA CENTER,BAZAR VEEDHI,",
        "CITY": "GUDURU",
        "district": "SPSR NELLORE DIST",
        "pin": "524101",
        "mobile": "9247169349",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI VENKATESWARA BOOK DEPOT ( NELLORE )",
        "ADRESS": "NEAR GANDHI BOMMA,",
        "CITY": " NELLORE ",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "9440200673",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "NEW VENKATARAMANA & CO.(NELLORE)",
        "ADRESS": "NEAR GANDHI STATUE, 16/III/A, TRUNK ROAD",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "9490142529",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "HAREESH BOOK EMPORIUM (NELLORE)",
        "ADRESS": "OPP:CLOCK TOWER,VRC CENTER",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "9441704865",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SINDU STATIONERY&G/S (NELLORE)",
        "ADRESS": "5/110,PAPPULA STREET",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "NAKODA TRADERS (NELLORE)",
        "ADRESS": "MAIN ROAD,STONE HOUSEPET,",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524002",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "HANUMAN FANCY STORES (NIRMAL)",
        "ADRESS": "NARAYANA REDDY MARKET",
        "CITY": "NIRMAL",
        "district": "NIRMAL DIST",
        "pin": "504106",
        "mobile": "9440387423",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "HAMEED STATIONERY&G/S (NIRMAL)",
        "ADRESS": "OLD BUS STAND ROAD,",
        "CITY": "NIRMAL",
        "district": "NIRMAL DIST",
        "pin": "504106",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI LAKSHMI STATIONARY & GENERAL (KANAPUR)",
        "ADRESS": "JAGANADH CHOWK,MAIN ROAD",
        "CITY": "KANAPUR",
        "district": "NIRMAL DIST",
        "pin": "504203",
        "mobile": "9951226453",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SARASWATHI BOOK & FANCY (KHANAPUR)",
        "ADRESS": "NEW BUS STAND ROAD ,",
        "CITY": "KHANAPUR",
        "district": "NIRMAL DIST",
        "pin": "504203",
        "mobile": "9441279101",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "BALAJI STATIONERY G/S (NIRMAL)",
        "ADRESS": "OPP.BUS STAND, BESIDE VENKATESWARA THEATER",
        "CITY": "NIRMAL",
        "district": "NIRMAL DIST",
        "pin": "504006",
        "mobile": "9885063181",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "CHAITANYA BOOK STALL (NIRMAL)",
        "ADRESS": "SAI SATYAM LODGE COMPLEX,",
        "CITY": "NIRMAL",
        "district": "NIRMAL DIST",
        "pin": "504006",
        "mobile": "9849885421",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SHIVAM AGENCIES (NIZAMABAD)",
        "ADRESS": "HOUSE NO:10-14-1845,MULTIPLEX BACK SIDE",
        "CITY": "NIZAMABAD",
        "district": "NIZAMABAD DIST",
        "pin": "503001",
        "mobile": "8801943348",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MADHAVI BOOK STORES (BODHAN)",
        "ADRESS": "OLD BUS STAND,",
        "CITY": "BODHAN",
        "district": "NIZAMABAD DIST",
        "pin": "503185",
        "mobile": "9490202245",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "HANUMAN SHOPPING CENTRE (KAMAREDDY)",
        "ADRESS": "SIRISILLA ROAD,",
        "CITY": "KAMAREDDY",
        "district": "NIZAMABAD DIST",
        "pin": "503111",
        "mobile": "9032550283",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "LAKSHMI BOOK DEPOT (ARMOOR)",
        "ADRESS": "OPP: BSNL OFFICE,",
        "CITY": "ARMOOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "6303921002",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MAHADEV COSMETICS & GENERAL STORES (ARMOOR)",
        "ADRESS": "MAMIDIPALLY X ROAD,",
        "CITY": "ARMOOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "8520088205",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "NATIONAL BOOK DEPOT (NIZAMABAD)",
        "ADRESS": "AHMEDI BAZAR,",
        "CITY": "NIZAMABAD",
        "district": "NIZAMABAD DIST",
        "pin": "503001",
        "mobile": "8686378171",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "RAJPUT STATIONERY(N.R.S)(NIZAMABAD)",
        "ADRESS": "7-6-314, DAL GALLY, KISAN GUNZ",
        "CITY": "NIZAMABAD",
        "district": "NIZAMABAD DIST",
        "pin": "503001",
        "mobile": "9966545617",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SHARADA BOOK DEPOT (NIZAMABAD)",
        "ADRESS": "WEEKLY MARKET,",
        "CITY": "NIZAMABAD",
        "district": "NIZAMABAD DIST",
        "pin": "503001",
        "mobile": "9849575075",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SIDDARTHA BOOKS (NIZAMABAD)",
        "ADRESS": "JAWAHAR ROAD,",
        "CITY": "NIZAMABAD",
        "district": "NIZAMABAD DIST",
        "pin": "503001",
        "mobile": "9010220333",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI RAJA RAM STATIONARY (NIZAMABAD)",
        "ADRESS": "7-5-467, KUMARGALLY",
        "CITY": "NIZAMABAD",
        "district": "NIZAMABAD DIST",
        "pin": "503001",
        "mobile": "8639293402",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI RAJRAM STATIONERY (NIZAMABAD)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "NIZAMABAD",
        "district": "NIZAMABAD DIST",
        "pin": "503001",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI SARASWATHI BOOK DEPOT (NIZAMABAD)",
        "ADRESS": "JAWAHAR ROAD,",
        "CITY": "NIZAMABAD",
        "district": "NIZAMABAD DIST",
        "pin": "503001",
        "mobile": "9948484581",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI VANI BOOK DEPOT (ARMOOR)",
        "ADRESS": "OPP. VIJAYA PUBLIC SCHOOL,",
        "CITY": "ARMOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "9849433034",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI VASAVI BOOKS & FANCY STORES (ARMOOR)",
        "ADRESS": "RTC COMPLEX NO, 7,8,",
        "CITY": "ARMOOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "9059969050",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI VIDYA BOOK STORE'S (BODAN)",
        "ADRESS": "SHOP NO:114/688, AMBETHKAR CHOWRASTHA, BODAN",
        "CITY": "BODAN",
        "district": "NIZAMABAD DIST",
        "pin": "503185",
        "mobile": "9059921145",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "VANI BOOK DEPOT  (ARMOOR)",
        "ADRESS": "OPP: VIJAYA PUBLIC SCHOOL,",
        "CITY": "ARMOOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": "9849433034",
        "AGENT": "NAGARAJU",
        "booktype": "Y"
      },
      {
        "shopName": "VENKATESWARA BOOK STALL (BODAN)",
        "ADRESS": "OLD BUS STAND,",
        "CITY": "BODAN",
        "district": "NIZAMABAD DIST",
        "pin": "503185",
        "mobile": "9705991889",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "VIDYA BOOK STORE ( BODHAN )",
        "ADRESS": "SHOP NO:114/688, AMBETHKAR CHOWRASTHA, BODAN",
        "CITY": " BODHAN ",
        "district": "NIZAMABAD DIST",
        "pin": "503185",
        "mobile": "9059921145",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "MAHADEV COSMETICS G/S (KAMMARPALLY)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "KAMMARPALLY",
        "district": "NIZAMABAD DIST",
        "pin": "503308",
        "mobile": "8209799975",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI SAI RAM BOOK DEPOT (NIZAMABDA)",
        "ADRESS": "6-2-1,GROUND FLOOR,ARMOOR ROAD ,",
        "CITY": "NIZAMABDA",
        "district": "NIZAMABAD DIST",
        "pin": "503002",
        "mobile": "9849587563",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "RAMDEV STATIONERY (NIZAMABAD)",
        "ADRESS": "D NO:76-6-167,DALL GALLY",
        "CITY": "NIZAMABAD",
        "district": "NIZAMABAD DIST",
        "pin": "503145",
        "mobile": "7396143362",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "TIRUMALA STATIONERY (ARMOOR)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "ARMOOR",
        "district": "NIZAMABAD DIST",
        "pin": "503224",
        "mobile": 8074192909,
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "UDAY BOOK LINKS (KURNOOL)",
        "ADRESS": "52-179/A,KINGS MARKET RD,BESIDE APOLLO PHAR.",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": 8096316999,
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SUCCESS BOOK SELLERS (KURNOOL)",
        "ADRESS": "SHOP NO.52/223,MUNICIPAL SHOPING COMPLEX",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9949812189",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI AMBICA STATIONERY&G/S (ONGOLE)",
        "ADRESS": "SHOP NO:167,SRI BAPUJI MARKET COMPLEX",
        "CITY": "ONGOLE",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": "7416558649",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "NAKODA GENERAL STORE (ONGOLE)",
        "ADRESS": "SHOP NO:237, SRI BAPUJI MARKET COMPLEX,",
        "CITY": "ONGOLE",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": "7702570453",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "VASAVI BOOK CENTRE (ADONI)",
        "ADRESS": "#18/645SHOP NO.12,VISWA HINDU PARSHAT COMPLEX",
        "CITY": "ADONI",
        "district": "KURNOOL DIST",
        "pin": "518301",
        "mobile": "9849636286",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "SRI GURU APPA SWAMY BOOK SELLERS (KURNOOL)",
        "ADRESS": "SHOP NO.15,MUNICIPAL HIGH SCHOOL COMPLEX",
        "CITY": "KURNOOL",
        "district": "KURNOOL DIST",
        "pin": "518001",
        "mobile": "9949052701",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "DHANALAKSHMI BOOK CENTER (NALGONDA)",
        "ADRESS": "D.V.K ROAD,BHASKAR TALKIES COMPLEX,OPP.KPM JUNIOR COLLAGE,",
        "CITY": "NALGONDA",
        "district": "NALGONDA DIST",
        "pin": "508001",
        "mobile": "9177512213",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SEETHA RAMA BOOKS (BELLAMPALLI)",
        "ADRESS": "NEAR SINGARENI SUPER BAZAR,OPP.R.K.E/P , ",
        "CITY": "BELLAMPALLI",
        "district": "ADILABAD DIST",
        "pin": 504251,
        "mobile": "9030358845",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI DURGA BOOKS&G/S (NEW PALAWANCHA)",
        "ADRESS": "NEAR DAMMAPETA X ROAD,OPP:AKSHARAM PATASALA,,",
        "CITY": "PALAWANCHA",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": 507115,
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAJARAJESWARI BOOK DISTRIBUTERS (MANCHERIAL)",
        "ADRESS": "ATTALANTA LODGE COMPLEX,OPP:BUS STAND,",
        "CITY": "MANCHERIAL",
        "district": "MANCHERIAL DIST",
        "pin": "504208",
        "mobile": "7075115363",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI LAXMI ENTERPRISES (NAGARKURNOOL)",
        "ADRESS": "SHOP NO:9-22,1ST FLOOR,MAIN ROAD,OPP:POST OFFICE,",
        "CITY": "NAGARKURNOOL",
        "district": "NAGARKURNOOL DIST",
        "pin": "509209",
        "mobile": "77290797900",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "A TO Z BOOK WORLD (SURYAPETA)",
        "ADRESS": "VENKATESWARA SWAMY TEMPLE ROAD,PAGATHI COMPLEX,",
        "CITY": "SURYAPETA",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9885142302",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RCB SOLUTIONAS (PALASA)",
        "ADRESS": "G.T COLLAGE ROAD,NEAR ESSAR PETROL BUNK",
        "CITY": "PALASA",
        "district": "VIJAYANAGARAM DIST",
        "pin": 532221,
        "mobile": "9603246823",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SRINIVASA BOOK CENTER (PARAKALA)",
        "ADRESS": "MAIN ROAD,OPP:POLICE STATION,",
        "CITY": "PARAKALA",
        "district": "WARANGAL DIST",
        "pin": "506164",
        "mobile": "9912327318",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "DIVYA BOOK STORES (PARWATHIPURAM)",
        "ADRESS": "POLICE COMPLEX,",
        "CITY": "PARWATHIPURAM",
        "district": "VIJAYNAGARAM DIST",
        "pin": "535501",
        "mobile": "7981122713",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "PAWAN STORES (PAVAGADA)",
        "ADRESS": "BEHIND PRAKRUTHI LODGE,KUVEMPU ROAD,",
        "CITY": "PAVAGADA",
        "district": "Tumakuru DIST",
        "pin": "561202",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "MUSA FANCY AND KANGAN (PEDANA)",
        "ADRESS": "OPP GUDUR ROAD,MAIN ROAD,",
        "CITY": "PEDANA",
        "district": "KRISHNA DIST",
        "pin": "521366",
        "mobile": "9160684786",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "AYYAPPA BOOK SELLERS (PEDDAPALLI)",
        "ADRESS": "3-3-184/2, SHANKAR GUNZ,",
        "CITY": "PEDDAPALLI",
        "district": "PEDDAPALLI DIST",
        "pin": "505172",
        "mobile": "9849543050",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "CHAMUNDA GENERAL STORES (PEDDAPALLI)",
        "ADRESS": "JANDA CHOWRASTA, KOTI COMPLEX,",
        "CITY": "PEDDAPALLI",
        "district": "PEDDAPALLI DIST",
        "pin": "505172",
        "mobile": "8096984469",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "GIRI PLASTICS STATIONERY&G/S (PEDDAPALLI)",
        "ADRESS": "# 3-3-184/11, KOTI COMPLEX, ",
        "CITY": "PEDDAPALLI",
        "district": "PEDDAPALLI DIST",
        "pin": "505172",
        "mobile": "9246997631",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "NIPUN BOOK SELLERS (PEDDAPALLI)",
        "ADRESS": "RAILWAY STATION ROAD, BESIDE TRANATI SCHOOL",
        "CITY": "PEDDAPALLI",
        "district": "PEDDAPALLI DIST",
        "pin": "505172",
        "mobile": "9985571283",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "PARAMESWARA B/STATIONARY&GENERALS(PEDDAPALLI)",
        "ADRESS": "ROOM NO. 5, RTC COMPLEX,",
        "CITY": "PEDDAPALLI",
        "district": "PEDDAPALLI DIST",
        "pin": "505172",
        "mobile": "8143075152",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "PREM GENERAL STORES (PEDDAPALLI)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "PEDDAPALLI",
        "district": "PEDDAPALLI DIST",
        "pin": "505172",
        "mobile": "9553997143",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "RAMDEV GENERAL STORES (PEDDAPALLI)",
        "ADRESS": "# 3-3-184/32/B, KOTI COMPLEX,",
        "CITY": "PEDDAPALLI",
        "district": "PEDDAPALLI DIST",
        "pin": "505172",
        "mobile": "9618164647",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SHANU BOOK STALL (KADIRI)",
        "ADRESS": "CHINNA BAZAR ,PERU VEEDHI,",
        "CITY": "KADIRI",
        "district": "ANANTHAPURAM DIST",
        "pin": "515591",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "RAMDEV NOVELTIES (KODADA)",
        "ADRESS": "YADAV NAGAR,",
        "CITY": "KODADA",
        "district": "SURYAPET DIST",
        "pin": "508206",
        "mobile": 9652857297,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "ADITYA BOOK DEPOT (ONGOLE)",
        "ADRESS": "GANDHI ROAD,",
        "CITY": "ONGOLE",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": "9440231925",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "CHENCHU LAKSHMI BOOK CENTRE (MARTUR)",
        "ADRESS": "14-60/C, GT ROAD, MARTUR",
        "CITY": "MARTUR",
        "district": "PRAKASAM DIST",
        "pin": "523301",
        "mobile": "9440183498",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "JAYA ENTERPRISES (ONGOLE )",
        "ADRESS": "TRUNK ROAD",
        "CITY": "ONGOLE ",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": "9885033358",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "MAHALAKSHMI STATIONARY (ONGOLE)",
        "ADRESS": "SHOP NO.151, SRI BAPUJI MARKET COMPLEX",
        "CITY": "ONGOLE",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": "9618349134",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "PRABHAKAR BOOK CENTER (ONGOLE)",
        "ADRESS": "GANDHI ROAD,",
        "CITY": "ONGOLE",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": 9703170276,
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "RAVI BOOK CENTER (ONGOLE)",
        "ADRESS": "MANGANURU ROAD",
        "CITY": "ONGOLE",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": "9440324159",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SAI SRINIVASA BOOK (ONGOLE)",
        "ADRESS": "MM ROAD,",
        "CITY": "ONGOLE",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": "9849123374",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SAI SRINIVASA BOOK&FANCY (MARKAPURAM)",
        "ADRESS": "NEHRU BHAZAR,",
        "CITY": "MARKAPURAM",
        "district": "PRAKASAM DIST",
        "pin": "523316",
        "mobile": "8919408183",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRFG GENERAL STORES (CHIRALA )",
        "ADRESS": "MAIN ROAD,",
        "CITY": "CHIRALA ",
        "district": "PRAKASAM DIST",
        "pin": "522102",
        "mobile": "9441222010",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI SAI SRINIVASA BOOK & FANCY (ONGOLE)",
        "ADRESS": "#8-178-3, MANGAMURU DONKA,",
        "CITY": "ONGOLE",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": "9703015184",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI SRINIVASA & CO (ONGOLE )",
        "ADRESS": "GANDHI ROAD,",
        "CITY": "ONGOLE ",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": "9703170276",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI VENKATESWARA BOOK DEPOT (ONGOLE)",
        "ADRESS": "GANDHI ROAD,",
        "CITY": "ONGOLE ",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": "9440231925",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "STUDENT BOOK & STATIONARY (MARTURU)",
        "ADRESS": "TLN COMPLEX,",
        "CITY": "MARTURU",
        "district": "PRAKASAM DIST",
        "pin": "523301",
        "mobile": "9440183498",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SUKANYA FANCY (ONGOLE)",
        "ADRESS": "154/1,KURNOOL ROAD, MARUTHI NAGAR,",
        "CITY": "ONGOLE",
        "district": "PRAKASAM DIST",
        "pin": "523001",
        "mobile": "9949872740",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "LAKSHMI GENERAL STORES (KARIMNAGAR)",
        "ADRESS": "SHOP NO:2-5-93,BESIDE THIRUMALA KIRANAM,PRAKASHAM GUNJI",
        "CITY": "KARIMNAGAR",
        "district": "KARIMNAGAR DIST",
        "pin": "505001",
        "mobile": "7337573178",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "BALAJI GANESHAN BOOK SELLER (SIRICILLA)",
        "ADRESS": "H.NO.5-5-26, MAIN ROAD,",
        "CITY": "SIRICILLA",
        "district": "RAJANNA SIRICILLA DIST",
        "pin": "505301",
        "mobile": "9866506034",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "BHASKAR BOOK DEPOT (SIRICILLA)",
        "ADRESS": "5-8-143, GANDHI CHOWK,",
        "CITY": "SIRICILLA",
        "district": "RAJANNA SIRICILLA DIST",
        "pin": "505301",
        "mobile": "8125784260",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "K.K RAMDEV GENERAL STORES (SIRICILLA)",
        "ADRESS": "PEDDA BAZAR,",
        "CITY": "SIRICILLA",
        "district": "RAJANNA SIRICILLA DIST",
        "pin": "505301",
        "mobile": "9848786511",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "LALITHA BOOK STORES (SIRICILLA)",
        "ADRESS": "GANDHI CHOWK,",
        "CITY": "SIRICILLA",
        "district": "RAJANNA SIRICILLA DIST",
        "pin": "505301",
        "mobile": "9985333359",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "MAYURI BOOKS (VEMULAWADA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "VEMULAWADA",
        "district": "RAJANNA SIRICILLA DIST",
        "pin": "505302",
        "mobile": "9440155222",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "NEW GM GENERAL STORES (SIRICILLA)",
        "ADRESS": "GANDHI CHOWK,",
        "CITY": "SIRICILLA",
        "district": "RAJANNA SIRICILLA DIST",
        "pin": "505301",
        "mobile": "9441966945",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "RAMDEV GENERAL STORES (SIRICILLA)",
        "ADRESS": "5-3-70,71, PEDDA BAZAR,",
        "CITY": "SIRICILLA",
        "district": "RAJANNA SIRICILLA DIST",
        "pin": "505301",
        "mobile": "9949707541",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SIVA BOOK DEPOT (SIRICILLA)",
        "ADRESS": "5-7-69, GANDHI CHOWK, ",
        "CITY": "SIRICILLA",
        "district": "RAJANNA SIRICILLA DIST",
        "pin": "505301",
        "mobile": "9440488505",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI VANI GENERAL STORES (SIRICILLA)",
        "ADRESS": "GANDHI CHOWK,",
        "CITY": "SIRICILLA",
        "district": "RAJANNA SIRICILLA DIST",
        "pin": "505301",
        "mobile": "9849845873",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "VAMSI KRISHNA BOOK SELLERS (SIRICILLA)",
        "ADRESS": "GANDHI CHOWK,",
        "CITY": "SIRICILLA",
        "district": "RAJANNA SIRICILLA DIST",
        "pin": "505301",
        "mobile": "9849845862",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "VANDANA BOOK SELLERS (VEMULAWADA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "VEMULAWADA",
        "district": "RAJANNA SIRICILLA DIST",
        "pin": "505302",
        "mobile": "9849973386",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "GANGA BOOK CENTER (SHADNAGAR)",
        "ADRESS": "PADMAVATHI COLONY,",
        "CITY": "SHADNAGAR",
        "district": "RANGAREDDY DIST",
        "pin": "509216",
        "mobile": "9392620864",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "LALITHA BOOKS & STATIONERY (IBRAHIMPATNAM)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "IBRAHIMPATNAM",
        "district": "RANGAREDDY DIST",
        "pin": "501506",
        "mobile": "9849842392",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RAGHAVENDRA G/S (GHATKESAR)",
        "ADRESS": "8-201,MAIN ROAD",
        "CITY": "GHATKESAR",
        "district": "RANGAREDDY DIST",
        "pin": "501301",
        "mobile": "9848022145",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "NARAYANA BOOK CENTER (RAVULAPALEM)",
        "ADRESS": "MARKET ROAD,JAKKAMPUDI COMPLEX,",
        "CITY": "RAVULAPALEM",
        "district": "WEST GODAVARI DIST",
        "pin": "533238",
        "mobile": "9701189787",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "MANYAM BOOK STALL (RAVULAPALEM)",
        "ADRESS": "#8/113/7, OPP MDO OFFICE, RING ROAD",
        "CITY": "RAVULAPALEM",
        "district": "WEST GODAVARI DIST",
        "pin": "533238",
        "mobile": 9949628090,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "M.S.GUPTHA STATIONERY (SADASIVAPETA)",
        "ADRESS": "D NO:4-7-48,GHANDHI CHOWK",
        "CITY": "SADASIVAPETA",
        "district": "SANGAREDDY DIST",
        "pin": "502291",
        "mobile": "9440707076",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "HANUMAN GENERAL STORE'S (ZAHEERABAD)",
        "ADRESS": "BLOCK ROAD,",
        "CITY": "ZAHEERABAD",
        "district": "SANGAREDDY DIST",
        "pin": "502220",
        "mobile": "9640184282",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "INDIAN STATIONERY (ZAHEERABAD)",
        "ADRESS": "BLOCK ROAD,",
        "CITY": "ZAHEERABAD",
        "district": "SANGAREDDY DIST",
        "pin": "502220",
        "mobile": "9949515878",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "M.K.P TRADERS (JOGIPETA)",
        "ADRESS": "HYD - NANDYALA ROAD,",
        "CITY": "JOGIPETA",
        "district": "SANGAREDDY DIST",
        "pin": "502270",
        "mobile": "9440848617",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "NANDI STATIONERY (SANGAREDDY)",
        "ADRESS": "OPP NEW BUS STAND,",
        "CITY": "SANGAREDDY",
        "district": "SANGAREDDY DIST",
        "pin": "502103",
        "mobile": "9849850425",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "NEW LAKSHMINARASIMHA BOOK DEPOT(SANGAREDDY)",
        "ADRESS": "NEW RTC, KARUNA SCHOOL, ",
        "CITY": "SANGAREDDY",
        "district": "SANGAREDDY DIST",
        "pin": "502001",
        "mobile": "9912482883",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "P.S KUMAR STATIONERY (SANGAREDDY)",
        "ADRESS": "OPP. NEW BUS STAND,",
        "CITY": "SANGAREDDY",
        "district": "SANGAREDDY DIST",
        "pin": "502001",
        "mobile": "9399977134",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SARASWATHI STATIONERY & BOOKS (ZAHEERABAD)",
        "ADRESS": "2-2-73/2,BLOCK ROAD, ",
        "CITY": "ZAHEERABAD",
        "district": "SANGAREDDY DIST",
        "pin": "502220",
        "mobile": "8885477371",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SHAYA STATIONERY (ZAHEERABAD)",
        "ADRESS": "BLOCK ROAD,",
        "CITY": "ZAHEERABAD",
        "district": "SANGAREDDY DIST",
        "pin": 502220,
        "mobile": "8639765441",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SONY BOOK DEPOT (NARAYANAKED)",
        "ADRESS": "1-6-66/2, BANK STREET, ",
        "CITY": "NARAYANAKED",
        "district": "SANGAREDDY DIST",
        "pin": "502286",
        "mobile": "9440223282",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI HANUMAN STATIONERY (ZAHEERABAD)",
        "ADRESS": "BLOCK ROAD,",
        "CITY": "ZAHEERABAD",
        "district": "SANGAREDDY DIST",
        "pin": "502220",
        "mobile": "9640184282",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "UTHAM STATIONERY (ZAHEERABAD)",
        "ADRESS": "BLOCK ROAD,",
        "CITY": "ZAHEERABAD",
        "district": "SANGAREDDY DIST",
        "pin": "502220",
        "mobile": "9493769135",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI HANUMAN GENERAL STORES (ZAHEERABAD)",
        "ADRESS": "2-3-76, suabsh gunj,",
        "CITY": "ZAHEERABAD",
        "district": "SANGAREDDY DIST",
        "pin": "502220",
        "mobile": 9948772575,
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI SAI BALAJI BOOKS (SADASIVAPETA)",
        "ADRESS": "GANDHI CHOWK ,",
        "CITY": "SADASIVAPETA",
        "district": "SANGAREDDY DIST",
        "pin": "502291",
        "mobile": "9908144737",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "NAVODAYA BOOKS&STATIONERY (SATHUPALLI)",
        "ADRESS": "4-127/6 ,MAIN ROAD,",
        "CITY": "SATHUPALLI",
        "district": "KHAMMAM DIST",
        "pin": "507303",
        "mobile": "9849347508",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SAI SPURTHI ENTERPRISES (SATTUPALLI)",
        "ADRESS": "MAIN ROAD, B.GANGAVARAM",
        "CITY": "SATTUPALLI",
        "district": "KHAMMAM DIST",
        "pin": "507303",
        "mobile": "8688559999",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "GURU RAGHAVENDRA STATIONERY G/S (SHADNAGAR)",
        "ADRESS": "19/28,PARGI ROAD,BUGGAREDDY COMPLEX,",
        "CITY": "SHADNAGAR",
        "district": "RANGAREDDY DIST",
        "pin": "509216",
        "mobile": "9866208444",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "JHANSI LAKSHMI DISTRIBUTORS (SIDDIPET)",
        "ADRESS": "SRINIVASA NAGAR,",
        "CITY": "SIDDIPET",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "9440708437",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "KARTHIK BOOK DEPOT (SIDDIPET)",
        "ADRESS": "GANDHI ROAD,",
        "CITY": "SIDDIPET",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "9989149400",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "LALITHA BOOK DEPOT (SIDDIPET)",
        "ADRESS": "11-3-136, MAIN ROAD,",
        "CITY": "SIDDIPET",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "9949107590",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RAJESWARI BOOK DEPOT (SIDDIPET)",
        "ADRESS": "GANDHI ROAD,",
        "CITY": "SIDDIPET",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "9989221225",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SAI RAM BOOK DEPOT (GAZWEL)",
        "ADRESS": "NEAR HANUMAN MANDHIR,",
        "CITY": "GAZWEL",
        "district": "SIDDIPET DIST",
        "pin": "502311",
        "mobile": "9989145321",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SANDHYA BOOK DEPOT (SIDDIPET)",
        "ADRESS": "12-3-196, MOHINIPURAM,",
        "CITY": "SIDDIPET",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "9440442784",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SIVA BOOK DEPOT (GAZWEL)",
        "ADRESS": "OPP. NEW GOVT HOSPITAL,",
        "CITY": "GAZWEL",
        "district": "SIDDIPET DIST",
        "pin": "502311",
        "mobile": "7386181085",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SREE VEERABADRA BOOK DEPOT (CHIRYALA)",
        "ADRESS": "OPP. POLICE STATION,",
        "CITY": "CHIRYALA",
        "district": "SIDDIPET DIST",
        "pin": "506223",
        "mobile": "9866520771",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI VIDYA BOOK SELLERS (GAZWEL)",
        "ADRESS": "OPP.GOVT. HOSPITAL,",
        "CITY": "GAZWEL",
        "district": "SIDDIPET DIST",
        "pin": "502311",
        "mobile": "9848937579",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "VIJAYA BOOK CENTRE (GAZWEL)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "GAZWEL",
        "district": "SIDDIPET DIST",
        "pin": "502311",
        "mobile": "9866609890",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SAI RAM BOOK DEPOT (SIDDIPET)",
        "ADRESS": "MARKET ROAD,",
        "CITY": "SIDDIPET",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "9490244441",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "LAKSHMI STORES (SIDDIPET)",
        "ADRESS": "MARKET X ROAD,",
        "CITY": "SIDDIPET",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "9912254554",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "HINDHAVI BOOK DEPO (SIDDIPETA)",
        "ADRESS": "OPP:SRINIVASA THEATER,HYDERABAD ROAD,",
        "CITY": "SIDDIPETA",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "8639465528",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "BALAJI BOOK DEPOT ( SIDDIPETA)",
        "ADRESS": "ENSAPALLI ROAD, BHARATH NAGAR,",
        "CITY": " SIDDIPETA",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "9440761817",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "BHAVANI GENERAL STORES (HUSNABAD)",
        "ADRESS": "H NO:12-82,OPP:AIRTEL OFFICE,",
        "CITY": "HUSNABAD",
        "district": "SIDDIPET DIST",
        "pin": "505467",
        "mobile": "7989105161",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "CHAYA BOOK DEPOT (GAZWEL)",
        "ADRESS": "OPP. GOVT HOSPITAL,",
        "CITY": "GAZWEL",
        "district": "SIDDIPET DIST",
        "pin": "502311",
        "mobile": "7396755616",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "KRISHNA BOOK DEPOT (SIDDIPET)",
        "ADRESS": "MARKET ROAD,",
        "CITY": "SIDDIPET",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "9440081899",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "NAGENDRA BOOKS DEPOT (SIDDIPETA)",
        "ADRESS": "MARKET ROAD,",
        "CITY": "SIDDIPETA",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "9908382344",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SWATHI BOOK SELLLERS (SIDDIPETA)",
        "ADRESS": "MARKET ROAD,",
        "CITY": "SIDDIPETA",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "9440686198",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "KAMASHI BOOK DEPO (SIDDIPETA)",
        "ADRESS": "NEAR OLD BUSSTAND, BEHIND AKSHAY HOTEL",
        "CITY": "SIDDIPETA",
        "district": "SIDDIPET DIST",
        "pin": "502103",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "KAPIL BOOK CENTER (SIRPUR KHAGAZNAGAR)",
        "ADRESS": "SURYA COMPLEX",
        "CITY": "KHAGAZNAGAR",
        "district": "ADILABAD DIST",
        "pin": "504295",
        "mobile": "9494116208",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "AMBICA PAPER AGENCIES (NELLORE)",
        "ADRESS": "RAYAJI STREET,NEAR HEAD POST OFFICE",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "CHAITANYA BOOK AND STATIONARY (SRIKAKULAM)",
        "ADRESS": "PETRO MAX STREET,",
        "CITY": "SRIKAKULAM",
        "district": "SRIKAKULAM DIST",
        "pin": "532001",
        "mobile": "9701303036",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI BALAJI BOOK STATIONARY (KASIBUGGA)",
        "ADRESS": "K.T ROAD,",
        "CITY": "KASIBUGGA",
        "district": "SRIKAKULAM DIST",
        "pin": "532222",
        "mobile": "9491325785",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI MAHALAKSHMI BOOK STALL (KASIBUGGA)",
        "ADRESS": "# 12/02/154, K.T ROAD,",
        "CITY": "KASIBUGGA",
        "district": "SRIKAKULAM DIST",
        "pin": "532222",
        "mobile": "9441039298",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VIDYA FANCY STORE (SRIKAKULAM)",
        "ADRESS": "#10-2-51/4,GROUND FLOOR,KASPA STREET,",
        "CITY": "SRIKAKULAM",
        "district": "SRIKAKULAM DIST",
        "pin": "532001",
        "mobile": "9989988393",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "NEW KONARK BOOK POINT  (PATHAPATNAM)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "PATHAPATNAM",
        "district": "SRIKAKULAM DIST",
        "pin": "532213",
        "mobile": "9347989896",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "PRAKASH BABU BOOK STALL (SRIKAKULAM)",
        "ADRESS": "#8/2/24, NEHRU ROAD,CHOWK BAZAR,",
        "CITY": "SRIKAKULAM",
        "district": "SRIKAKULAM DIST",
        "pin": "532001",
        "mobile": "9290495774",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "MADHU TRADERS (NANDHYALA)",
        "ADRESS": "D.NO. 25/707,SHOP NO 7, SRINIVASA COMPLEX",
        "CITY": "NANDHYALA",
        "district": "KURNOOL DIST",
        "pin": "518501",
        "mobile": "9885596171",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "MAHESWARI STATIONERY (NIZAMABAD)",
        "ADRESS": "7-6-39/8, HARICHARAN COMPLEX,",
        "CITY": "NIZAMABAD",
        "district": "NIZAMABAD DIST",
        "pin": "503001",
        "mobile": "9246912503",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "STUDENTS BOOK CENTER(NELLORE)",
        "ADRESS": "PRAKASAMCOMPLEX,ARUNACHALAMST,",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": "524001",
        "mobile": "9908268685",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "MANIKANTA BOOK STALL (SURYAPET)",
        "ADRESS": "OPP:VANIJYA BHAVAN,EDGA ROAD,",
        "CITY": "SURYAPET",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "8008649021",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "AKSHAJ BOOK & STATIONERY & MART (SURYAPET)",
        "ADRESS": "60FT ROAD,",
        "CITY": "SURYAPET",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9912853337",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "BHARATH BOOKS & GENERAL STORE (NEREDUCHARLA)",
        "ADRESS": "RAMAPURAM ROAD,",
        "CITY": "NEREDUCHARLA",
        "district": "SURYAPET DIST",
        "pin": "508218",
        "mobile": "9550998779",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "GANESH GENERAL STORES (HUZURNAGAR)",
        "ADRESS": "12-79, MAIN ROAD,",
        "CITY": "HUZURNAGAR",
        "district": "SURYAPET DIST",
        "pin": "508204",
        "mobile": "9848383769",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "KRISHNAVENI TALENT SCHOOL (HUZURNAGAR)",
        "ADRESS": "GREEN WOOD SCHOOL,",
        "CITY": "HUZURNAGAR",
        "district": "SURYAPET DIST",
        "pin": "508204",
        "mobile": "",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "LAKSHMI SRINIVAS FANCY (HUZARNAGAR)",
        "ADRESS": "CHURCH ROAD,",
        "CITY": "HUZARNAGAR",
        "district": "SURYAPET DIST",
        "pin": "508204",
        "mobile": 9948480196,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "NAVODAYA BOOK STALL (KODADA)",
        "ADRESS": "BHARATH REDDY COMPLEX,",
        "CITY": "KODADA",
        "district": "SURYAPET DIST",
        "pin": "508206",
        "mobile": "9948108333",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAMBABU BOOK STALL (KODADA)",
        "ADRESS": "ANANTHAGIRI ROAD,",
        "CITY": "KODADA",
        "district": "SURYAPET DIST",
        "pin": "508206",
        "mobile": "9948122301",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SAI RAM AGENCIES (SURYAPET)",
        "ADRESS": "H.NO. 1-4-110,NEAR CANARA BANK",
        "CITY": "SURYAPET",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9948764340",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SANTHI BOOK COMPLEX (KODADA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "KODADA",
        "district": "SURYAPET DIST",
        "pin": "508206",
        "mobile": "9490569174",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SIVA SANKAR GENERAL STORE (SURYAPETA)",
        "ADRESS": "MARKET ROAD,",
        "CITY": "SURYAPET",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9848679175",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI BALAJI BOOKS & G/S (SURYAPET)",
        "ADRESS": "#2-5-116, BODRAI BAZAR, MASJID ROAD,",
        "CITY": "SURYAPET",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9848986476",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI LAKSHMI BOOK STORES (SURYAPET)",
        "ADRESS": "ALANKAR CENTRE,",
        "CITY": "SURYAPET",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9030750987",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SAI BOOKS & GENERAL STORES (HUZURNAGAR)",
        "ADRESS": "POLICE COMPLEX,",
        "CITY": "HUZURNAGAR",
        "district": "SURYAPET DIST",
        "pin": "508204",
        "mobile": "9912147482",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VIJAYA KRISHNA BOOK & FANCY (KODADA)",
        "ADRESS": "OPP. RAMALAYAM, MAIN ROAD, ",
        "CITY": "KODADA",
        "district": "SURYAPET DIST",
        "pin": "508206",
        "mobile": "9948532589",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VISHNU GENERAL STORES (SURYAPETA)",
        "ADRESS": "1-2-97/1,MARKET ROAD,",
        "CITY": "SURYAPETA",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9912139090",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "TEJASRI VENKATESWARA BOOK STALL (HUZURNAGAR)",
        "ADRESS": "NEAR RAJIV CHOWK,",
        "CITY": "HUZURNAGAR",
        "district": "SURYAPET DIST",
        "pin": "508204",
        "mobile": "9848688108",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "THANDU SAIDARATNAM (HUZURNAGAR)",
        "ADRESS": "VENKATA NAGAR COLONY,SAIDARATNAM",
        "CITY": "HUZURNAGAR",
        "district": "SURYAPET DIST",
        "pin": "508204",
        "mobile": "9848268907",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "UNIVERSAL BOOK STALL (KODADA)",
        "ADRESS": "ANANTHAGIRI ROAD,",
        "CITY": "KODADA",
        "district": "SURYAPET DIST",
        "pin": "508206",
        "mobile": "9966760512",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "USHODAYA BOOK CENTER (SURYAPETA)",
        "ADRESS": "EDGA ROAD,",
        "CITY": "SURYPETA",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": 9010910181,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "USHODAYA BOOK STALL (KODADA)",
        "ADRESS": "ANANTHAGIRI ROAD,",
        "CITY": "KODADA",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9948122301",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VISHNU GENERAL STORES (SURYAPETA)",
        "ADRESS": "1-2-97/1, MARKET ROAD,",
        "CITY": "SURYAPETA",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9948159091",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VENKATA SAI BOOK STALL (SURAYAPETA)",
        "ADRESS": "OPP:NEW BUS STAND,",
        "CITY": "SURAYAPETA",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9989826658",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "AKSHARA BOOK STALL (MATAMPALLI)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "MATAMPALLI",
        "district": "SURYAPET DIST",
        "pin": "508204",
        "mobile": "8555985662",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "AMBICA BOOK & FANCY (SURYAPET)",
        "ADRESS": "1-4-122, EDGA ROAD",
        "CITY": "SURYAPET",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9030400431",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "BEGAM SRINIVASA RAO (HUZURNAGAR)",
        "ADRESS": "H.NO 1-114/A/1,SAIBABA THEATERROAD,",
        "CITY": "HUZURNAGAR",
        "district": "SURYAPET DIST",
        "pin": "508204",
        "mobile": "9848268907",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "HIMALAYA BOOK STALL (SURYAPETA)",
        "ADRESS": "OPP. KARNATI BRO. M.G ROAD,",
        "CITY": "SURYAPETA",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9848712069",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SANTHI BOOK STORES (SURYAPET)",
        "ADRESS": "EDGA ROAD,",
        "CITY": "SURYAPET",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "8074534928",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI VIJAYA SAI KRISHNA BOOKS (KODADA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "KODADA",
        "district": "SURYAPET DIST",
        "pin": "508206",
        "mobile": 9848716133,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "STUDENT BOOK STALL (KODADA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "KODADA",
        "district": "SURYAPET DIST",
        "pin": "508206",
        "mobile": "9705346214",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VIJETHA BOOK STALL (SURYAPETA)",
        "ADRESS": "VANIJYA BHAVAN ,",
        "CITY": "SURYAPETA",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": 9989420333,
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "POOJA FANCY STORE (SURYAPETA)",
        "ADRESS": "H.NO:1-6-54,",
        "CITY": "SURYAPETA",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9440201913",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "CHITHANYA BOOKS&G/S (SURYAPETA)",
        "ADRESS": "OPP:VANIDYA BHAVAN , EDGA ROAD,",
        "CITY": "SURYAPETA",
        "district": "SURYAPET DIST",
        "pin": "508213",
        "mobile": "9030406450",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "ANNAPURANA VISESWARA BOOK&GENERAL(T.P GUDEM)",
        "ADRESS": "OVERBRIDGE DOWN, MUNCIPAL OFFICE RD",
        "CITY": "TADEPALLI GUDEM",
        "district": "WEST GODAVARI DIST",
        "pin": "534102",
        "mobile": "9948966889",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "PRAGATHI PAPER MART (TADIPATHRI)",
        "ADRESS": "1034-A-2, JAYANAGAR COLONY,YELLANUR ROAD",
        "CITY": "TADIPATHRI",
        "district": "ANANTHAPURAM DIST",
        "pin": "515411",
        "mobile": "9849456746",
        "AGENT": "KUMAR",
        "booktype": "R"
      },
      {
        "shopName": "GURUDEV STATIONERY (TANDUR)",
        "ADRESS": "MADINA COMLEX , INDIRA CHOWK ,",
        "CITY": "TANDUR",
        "district": "VIKARABAD DIST",
        "pin": "501141",
        "mobile": "9182850594",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SRI SATYA KRISHNA BOOKS (TANUKU)",
        "ADRESS": "OPP:ZPH BOYS HIGH  SCHOOL,",
        "CITY": "TANUKU",
        "district": "WEST GODAVARI DIST",
        "pin": "534211",
        "mobile": "9963177489",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VIJAYA VANI A TO Z BOOK DEPO (TANUKU)",
        "ADRESS": "MAIN ROAD,NEAR:VASAVI MATHA TEMPLE",
        "CITY": "TANUKU",
        "district": "WEST GODAVARI DIST",
        "pin": "534211",
        "mobile": "8099313513",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SARASWATHI BOOK SELLERS (VEMULAWADA)",
        "ADRESS": "BESIDE WAKDEVI COLLAGE,",
        "CITY": "VEMULAWADA",
        "district": "VEMULAWADA DIST",
        "pin": "505302",
        "mobile": "9948849703",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SAI BALAJI TRADERS (SATHUPALLI)",
        "ADRESS": "3-33-2, Main Road Lankapally, LANKAPALLY",
        "CITY": "SATHUPALLI",
        "district": "KHAMMAM DIST",
        "pin": "507302",
        "mobile": "9652124404",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRIVARI HIGH SCHOOL (TIRUPATI)",
        "ADRESS": "MARUTHI NAGAR,KORLAGUNTA",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9441600546",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "CHANDU BOOK & STATIONARY (TIRUPATHI)",
        "ADRESS": "SHOP.NO:14-1-6,NEHURU STREET,",
        "CITY": "TIRUPATHI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9849176636",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "DANALAKSHMI BOOK MART (TIRUPATHI)",
        "ADRESS": "K.T ROAD,",
        "CITY": "TIRUPATHI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9030448071",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI VINAYAKA BOOK AND FANCY (TIRUPATHI)",
        "ADRESS": "9A,G.CAR STREET",
        "CITY": "TIRUPATHI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9949298522",
        "AGENT": "NAGARAJU",
        "booktype": "N"
      },
      {
        "shopName": "SRI DURGA VENKATESWARA BOOK (TIRUPATHI)",
        "ADRESS": "1-2-219, PRAKASAM ROAD OPP SP OFFICE,",
        "CITY": "TIRUPATHI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9966259732",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "MAHALAKSHMI FANCY STORE (TIRUPATI)",
        "ADRESS": "SHOP.NO:115-4-1,NEHRU STREET,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9490039417",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SRI PADMAVATHI BOOK CENTER (TIRUPATHI)",
        "ADRESS": "1-2-274A, PRAKASAM ROAD",
        "CITY": "TIRUPATHI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "GRUHAMITRA ENTERPRISES (TIRUPATHI)",
        "ADRESS": "DNO:336-B,PRAKASAM ROAD,",
        "CITY": "TIRUPATHI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9290899991",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SHOBHA BOOK CENTER (TIRUPATI)",
        "ADRESS": "NEAR SAGAR HONDA,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517501",
        "mobile": "9885507225",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "SAI KRISHNA BOOK AND FANCY (TIRUVURU)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "TIRUVURU",
        "district": "KRISHNA DIST",
        "pin": "521235",
        "mobile": "6301203033",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "S V S BOOK SHOP (NELLORE)",
        "ADRESS": "DNO:16/1059,OPP:KLM SHOPPING MALL,TRUNK ROAD",
        "CITY": "NELLORE",
        "district": "SPSR NELLORE DIST",
        "pin": 524001,
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "VARALAKSHIMI CLOTH&FANCY (TIRUPATI)",
        "ADRESS": "PLOT NO:350,THATITHOPU,VENKATAPATI NAGAR,",
        "CITY": "TIRUPATI",
        "district": "CHITOOR DIST",
        "pin": "517502",
        "mobile": "8499983215",
        "AGENT": "KUMAR",
        "booktype": "N"
      },
      {
        "shopName": "T.SEETHARAMAYYA GARU (VIJAYAWADA)",
        "ADRESS": "ONE TOWN",
        "CITY": "VIJAYAWADA",
        "district": "VIJAYAWADA",
        "pin": "520001",
        "mobile": "9966194525",
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "KAILASH BOOKS & STATIONERY (TANDUR)",
        "ADRESS": "OPP. COURT,",
        "CITY": "TANDUR",
        "district": "VIKARABAD DIST",
        "pin": "501141",
        "mobile": "9885786936",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "NATIONAL BOOK CENTER (TANDUR)",
        "ADRESS": "COURT ROAD, YASHODA NAGAR,",
        "CITY": "TANDUR",
        "district": "VIKARABAD DIST",
        "pin": "501141",
        "mobile": "9908027468",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SANTHOSH GENERAL STORES  (VIKARABAD)",
        "ADRESS": "STATION ROAD,",
        "CITY": "VIKARABAD",
        "district": "VIKARABAD DIST",
        "pin": "501101",
        "mobile": "9866024818",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SNEHA BOOK CENTRE (TANDURU)",
        "ADRESS": "BESIDE TELEPHONE EXCHANGE,",
        "CITY": "TANDURU",
        "district": "VIKARABAD DIST",
        "pin": "501141",
        "mobile": "9032818567",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "VIRAT BOOK CENTER (TANDURU)",
        "ADRESS": "SMT X ROAD,",
        "CITY": "TANDURU",
        "district": "VIKARABAD DIST",
        "pin": "501141",
        "mobile": "9030307678",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "KGN BOOK CENTRE &STATIONARY (PARGI)",
        "ADRESS": "1-2, PARGI, GUNJ ROAD,",
        "CITY": "PARGI",
        "district": "VIKARABAD DIST",
        "pin": "501501",
        "mobile": "9603379946",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "SRI RAJARAJESWARA BOOK STALL (VIZAG)",
        "ADRESS": "26-15-190 ,MAIN ROAD",
        "CITY": "VIZAG",
        "district": "VIZAG DIST",
        "pin": "530020",
        "mobile": "9866768769",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI RAJESWARI BOOK STALL ( VIZAG )",
        "ADRESS": "#30-6-6,NEAR PREMASAMAJAM,DABA GARDERS,",
        "CITY": " VIZAG ",
        "district": "VIZAG DIST",
        "pin": "530020",
        "mobile": "9849842888",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "CBS PAPER PRODUCTS (WANAPARTHY)",
        "ADRESS": "R.R. COMPLEX,",
        "CITY": "WANAPARTHY",
        "district": "WANAPARTHY DIST",
        "pin": "509103",
        "mobile": "9441540501",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "LAKSHMI GENERAL STORES (WANPARTHY)LGS",
        "ADRESS": "NEAR LIC OFFICE,",
        "CITY": "WANPARTHY",
        "district": "WANAPARTHY DIST",
        "pin": "509103",
        "mobile": "9490909880",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "POORNA GENERAL & STATIONERY (WANAPARTHY)",
        "ADRESS": "KAMAN CHOWRASTHA,",
        "CITY": "WANAPARTHY",
        "district": "WANAPARTHY DIST",
        "pin": "509103",
        "mobile": "9948575761",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SIVA KIRANA & GENERAL STORES (WANAPARTHY)",
        "ADRESS": "CV RAMAN COLLEGE ROAD,",
        "CITY": "WANAPARTHY",
        "district": "WANAPARTHY DIST",
        "pin": "509103",
        "mobile": "9052027116",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "VAMSI BOOK SELLERS (WANAPARTHY)",
        "ADRESS": "POLYTECHNIC ROAD,",
        "CITY": "WANAPARTHY",
        "district": "WANAPARTHY DIST",
        "pin": "509103",
        "mobile": "",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "RAJSRI GENERAL STORES (THORRURU)",
        "ADRESS": "L Y R GARDEN ROAD,",
        "CITY": "THORRURU",
        "district": "WARANGAL DIST",
        "pin": "506163",
        "mobile": "8719230413",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "NEERAJA BOOK & GENERAL STORES (WARANGAL)",
        "ADRESS": "12-3-25, PAPAIAHPET CHAMAN,",
        "CITY": "WARANGAL",
        "district": "WARANGAL DIST",
        "pin": "506002",
        "mobile": "9347077470",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "P.V AGENCIES (WARANGAL)",
        "ADRESS": "8-10-79,BANDELLISHETTY St,GIRMAJIPETA",
        "CITY": "WARANGAL",
        "district": "WARANGAL DIST",
        "pin": "506002",
        "mobile": "9949086345",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "POLA GOWRISHANKAR RAO&SONS (WARANGAL)",
        "ADRESS": "12-1-31, S.V.N ROAD,",
        "CITY": "WARANGAL",
        "district": "WARANGAL DIST",
        "pin": "506002",
        "mobile": "9849216055",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "P V AGIENCIES (THORRURU)",
        "ADRESS": "L Y R GARDEN ROAD,",
        "CITY": "THORRURU",
        "district": "WARANGAL DIST",
        "pin": "506169",
        "mobile": "9949810756",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "BOOK CENTRE (PENUGONDA)",
        "ADRESS": "OPP:ANDHRA BANK,MAIN ROAD,",
        "CITY": "PENUGONDA",
        "district": "WEST GODAVARI DIST",
        "pin": "534320",
        "mobile": "9490347484",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "KUMAR BOOKS STALL (CHINTALPUDI)",
        "ADRESS": "NEAR SIVALAYAM,",
        "CITY": "CHINTALPUDI",
        "district": "WEST GODAVARI DIST",
        "pin": "534460",
        "mobile": "9440844387",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "STUDENT BOOK CENTER (T.P GUDEM)",
        "ADRESS": "2-1-31/2, OPP:ZP HIGH SCHOOL,",
        "CITY": "T.P GUDEM",
        "district": "WEST GODAVARI DIST",
        "pin": "534102",
        "mobile": "7993043180",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SURYA KRISHNA BOOKS & PENS (ELURU)",
        "ADRESS": "OPIUM STREET,",
        "CITY": "ELURU",
        "district": "WEST GODAVARI DIST",
        "pin": "534001",
        "mobile": "9010411616",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "JASNATH ENTERPRISES (ELURU)",
        "ADRESS": "OPP. OLD BUS STAND,",
        "CITY": "ELURU",
        "district": "WEST GODAVARI DIST",
        "pin": "534001",
        "mobile": "7032828244",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "RAVI BOOK CENTRE (TADEPALLI GUDEM)",
        "ADRESS": "OPP. RTC COMPLEX,",
        "CITY": "TADEPALLI GUDEM",
        "district": "WEST GODAVARI DIST",
        "pin": "534102",
        "mobile": "9849315881",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SATI JASNATH ENTERPRISES (ELURU)",
        "ADRESS": "NEAR. YMHA HALL,",
        "CITY": "ELURU",
        "district": "WEST GODAVARI DIST",
        "pin": "534001",
        "mobile": "8099481613",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SATISH KIRANA FANCY (LINGAMPALLEM)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "LINGAPALEM",
        "district": "WEST GODAVARI DIST",
        "pin": "534462",
        "mobile": 9110732621,
        "AGENT": "PAID PARTY",
        "booktype": "PAID"
      },
      {
        "shopName": "SRI ANNAPURNA VISWESWARA BOOK & G/S (T.P.GUDEM)",
        "ADRESS": "MUNICIPAL OFFICE ROAD,",
        "CITY": "T.P GUDEM",
        "district": "WEST GODAVARI DIST",
        "pin": "534101",
        "mobile": "9948966889",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI BALAJI ENTERPRISES (ELUR)",
        "ADRESS": "FISH MARKET,",
        "CITY": "ELUR",
        "district": "WEST GODAVARI DIST",
        "pin": "534001",
        "mobile": "7386997693",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI RAJESWARI BOOK STALL (T.P GUDEM)",
        "ADRESS": "NEAR NANDI STATUE,KN ROAD,",
        "CITY": "T.P GUDEM",
        "district": "WEST GODAVARI DIST",
        "pin": "534102",
        "mobile": "9441553615",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI SRINIVASA BOOKS & FANCY (ELURU)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "ELURU",
        "district": "WEST GODAVARI DIST",
        "pin": "534001",
        "mobile": "9290027427",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "VENU FANCY GENERAL (PENTAPADU)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "PENTAPADU",
        "district": "WEST GODAVARI DIST",
        "pin": "534166",
        "mobile": "9063646566",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "SRI MANIKANTA STATONERY G/STORE(VALIGONDA)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "VALIGONDA",
        "district": "YADADRI BHUNAGIRI DIST",
        "pin": "508112",
        "mobile": "9949812620",
        "AGENT": "NAGARAJU",
        "booktype": "T"
      },
      {
        "shopName": "KANAKADURGA STATIONERY (CHOWTAPPAL)",
        "ADRESS": "MAIN ROAD, ",
        "CITY": "CHOWTAPPAL",
        "district": "YADADRI BHUNAGIRI DIST",
        "pin": "508252",
        "mobile": "9848754517",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "UPPALA KRISHNA KIRANA & GENERAL (CHOWTAPPAL)",
        "ADRESS": "MAIN ROAD,",
        "CITY": "CHOWTAPPAL",
        "district": "YADADRI BHUNAGIRI DIST",
        "pin": "508252",
        "mobile": "9948004548",
        "AGENT": "KUMAR",
        "booktype": "H"
      },
      {
        "shopName": "SATISH BOOKS&G/S (YELLANDU)",
        "ADRESS": "OLD BUS STAND CENTER, MAINROAD",
        "CITY": "YELLANDU",
        "district": "BHADRADRI KOTHAGUDEM DIST",
        "pin": "507123",
        "mobile": "9949809006",
        "AGENT": "NAGARAJU",
        "booktype": "A"
      },
      {
        "shopName": "ROYAL STATIONERY & BOOK DEPOT (ZAHEERABAD)",
        "ADRESS": "shop no 3-4-6/3/1, BLOCK ROAD,",
        "CITY": "ZAHEERABAD",
        "district": "SANGAREDDY DIST",
        "pin": "502220",
        "mobile": "9849244024",
        "AGENT": "NAGARAJU",
        "booktype": "H"
      },
        
    
]  
export default clients;