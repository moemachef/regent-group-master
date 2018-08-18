import fx from 'money';
import { map } from 'lodash';

const rawProjects = [
  {
    id: '1001',
    description: '',
    descriptionAr: '',
    descriptionShort:
      'The project inspired by the Italian architecture, which features beautiful views of the valley of bahcesehir and green areas',
    descriptionShortAr:
      'المشروع المستوحي من الفن المعماري الإيطالي حيث يتميز بإطلالات جميلة على وادي بهشة شهير و مساحاتها الخضراء',
    typesAll: '1+1, 2+1, 3+1, 4+1',
    priceMin: {
      TRY: 283000
    },
    priceMax: {
      TRY: 744000
    },
    distances: {
      taksim: '28 KM',
      metro: '6.5 KM',
      metrobus: '6.5 KM',
      sultan: '28 KM',
      ataturk: '17 KM',
      newairport: '25 KM',
      beach: '6 KM',
      tem: '0.8 KM'
    },
    area: '67m - 269m',
    name: 'Strada',
    location: 'Bahçeşehir, Istanbul',
    locationAr: ' بهشة شهير، اسطنبول ',
    status: '20% Down Payment',
    statusAr: '20٪ دفعة أولي',
    installment: '36',
    deliveryDate: '2018,2019',
    deliveryDateAr: '2018,2019',
    downPayment: '20',
    lat: 41.070699,
    lng: 28.6678,
    types: [
      {
        type: '1+1',
        minPrice: {
          TRY: 283000
        },
        maxPrice: {
          TRY: 335000
        },
        minArea: '67',
        maxArea: '80',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/1_1.jpg'
      },
      {
        type: '2+1',
        minPrice: {
          TRY: 380000
        },
        maxPrice: {
          TRY: 657000
        },
        minArea: '101',
        maxArea: '146',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/2_1.jpg'
      },
      {
        type: '3+1',
        minPrice: {
          TRY: 519000
        },
        maxPrice: {
          TRY: 808231
        },
        minArea: '135',
        maxArea: '181',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/3_1.jpg'
      },
      {
        type: '4+1',
        minPrice: {
          TRY: 744000
        },
        maxPrice: {
          TRY: 958262
        },
        minArea: '200',
        maxArea: '269',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/3_1.jpg'
      }
    ],
    images: [
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534350069/IST%201001/External/akzirve-strada-bahcesehir-projesi-istanbul-emlakpencerem-1.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534350083/IST%201001/External/akzirve_esenyurt_vaz_aci_61_gece_b_baski.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534350067/IST%201001/External/Ryoal-Strada-bg.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534350066/IST%201001/External/3.png',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/10.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/11.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/12.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/13.jpg'
    ],
    interior: [
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187289/projects/cayan-101/interior/3_-_Copy.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187289/projects/cayan-101/interior/5_-_Copy.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187285/projects/cayan-101/interior/4.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187285/projects/cayan-101/interior/4.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187285/projects/cayan-101/interior/2.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187208/projects/cayan-101/interior/onay-life-residence_74260.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187208/projects/cayan-101/interior/onay-life-residence_74254.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187204/projects/cayan-101/interior/onaylife-39.jpg'
    ]
  },
  {
    id: '1601',
    description:
      "We present to you our new luxurious project which is located in one of istanbul's most active and vibrate location which is büyükçekmece. This amazing project is located directly by the sea. Few steps and you will be on the shore, with an incredible moder architecture. This project has one of the best views Istanbul has to offer. The location of this project has made it one of the best in Istanbul. A combination between peace of mind, incredible view and modern architecture",
    descriptionAr:
      'نقدم لكم مشروعنا الجديد الراقي كيان 107 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيوكشكمجة، بما أنك بموقع يُمكنك من لمس البحر بمجرد مد يدك، فقد دفع المصممين لعمل تصميم معماري يليق بذلك الموقع والمفهوم. التحديات التي تفرضها بنية الأرض وتضاريسها الصعبة جعل المصممين يستفيدوا منها من حيث تحويلها الي قيمة إضافية لها وجعلها تنحدر كلما اقتربنا من مستوى سطح البحر كما وفَّرنا مساحات مفتوحة كبيرة قادرة على إثبات إطلالة البحر الخلابة في أكبر نسبةٍ من المشروع. مشروع   Cayan107 سيصبح مركزا حيويا هاما ونقطة التقاء للمنطقة مع منطقة معيشة على جانب البحر. بإختصار، هذا المشروع جمع بين هدوء و سكون الساحل و التصميم المعماري الذي يعكس الروح الحديثة في قلب الطبيعة الهادئة.',
    descriptionShortAr:
      'يقع المشروع في حياً ساحلياً عصرياً بعيد عن مدي تعقيد اسطنبول حيث يشدد دائماً علي التناغم مع محيطه الحديث و الجديد',
    descriptionShort:
      'The project is located in a modern coastal neighborhood far from the complexity of Istanbul, where always emphasizes the harmony with the modern environment',
    typesAll: '1+1, 2+1, 3+1, 4+1, 5+1',
    priceMin: {
      TRY: 537000
    },
    priceMax: {
      TRY: 1194000
    },
    distances: {
      taksim: '8.7 KM',
      metro: '1.6 KM',
      metrobus: '1.6 KM',
      sultan: '8.7 KM',
      ataturk: '24 KM',
      newairport: '34 KM',
      beach: '0 KM',
      tem: '8.12 KM'
    },
    area: '69m - 343.51m',
    name: 'Marina 24',
    location: 'Buyukçekmece, Istanbul',
    locationAr: 'بيوك شكمجة، اسطنبول ',
    status: '35% Down Payment',
    statusAr: '35٪ دفعة أولي',
    installment: '24',
    deliveryDate: '2019',
    deliveryDateAr: '2019',
    downPayment: '35',
    lat: 41.019482,
    lng: 28.551043,
    types: [
      {
        type: '1+1',
        minPrice: {
          TRY: 537000
        },
        maxPrice: {
          TRY: 621000
        },
        minArea: '69',
        maxArea: '84',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/1_1.jpg'
      },
      {
        type: '2+1',
        minPrice: {
          TRY: 621000
        },
        maxPrice: {
          TRY: 1340500
        },
        minArea: '86',
        maxArea: '228',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/2_1.jpg'
      },
      {
        type: '3+1',
        minPrice: {
          TRY: 1340500
        },
        maxPrice: {
          TRY: 1194000
        },
        minArea: '145',
        maxArea: '225',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/3_1.jpg'
      },
      {
        type: '4+1',
        minPrice: {
          TRY: 1194000
        },
        maxPrice: {
          TRY: 2870871
        },
        minArea: '196',
        maxArea: '321.64',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/4_1.jpg'
      },
      {
        type: '5+1',
        minPrice: {
          TRY: 2669473
        },
        maxPrice: {
          TRY: 2818847
        },
        minArea: '261.97',
        maxArea: '343.51',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/5_1.jpg'
      }
    ],
    images: [
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534350315/IST%201601/External/Marina-24.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534350318/IST%201601/External/separator-02.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534350316/IST%201601/External/marina24-001.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534350315/IST%201601/External/Marina-24.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534350314/IST%201601/External/marina24.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/6.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/7.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/8.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/9.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/10.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/11.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/12.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/13.jpg'
    ],
    interior: [
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/1.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/2.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/3.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/4.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/5.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/6.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/7.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/9.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/10.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/11.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/12.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/13.jpg'
    ]
  },
  {
    id: '1201',
    description:
      "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
    descriptionAr: '',
    descriptionShort:
      'The project is located on the Marmara Sea coast. These apartments are located on the European side of Istanbul and offer a wonderful opportunity to enjoy a luxurious style of living in Turkey and close to the city center',
    descriptionShortAr:
      'يقع المشروع على ساحل بحر مرمرة و توجد هذه الشقق في الجانب الأوروبي من اسطنبول كما تقدم فرصة رائعة للإستمتاع بنمط فاخر من العيش في تركيا و علي مقربة من وسط المدينة',
    typesAll: '1+1, 2+1, 3+1, 4+1, 3+1v',
    priceMin: {
      TRY: 585000
    },
    priceMax: {
      TRY: 2384150
    },
    distances: {
      taksim: '29 KM',
      metro: '4.7 KM',
      metrobus: '3.8 KM',
      sultan: '28 KM',
      ataturk: '13 KM',
      newairport: '35 KM',
      beach: '0 KM',
      tem: '9 KM'
    },
    area: '66m - 385m',
    name: 'Deniz Istanbul',
    location: 'Beylikduzu, Istanbul',
    locationAr: 'بيليك دوزو ، اسطنبول',
    status: '25% Down Payment',
    statusAr: '25٪ دفعة أولي',
    installment: '24',
    deliveryDate: '2018,2020',
    deliveryDateAr: '2018,2020',
    downPayment: '25',
    lat: 40.967412,
    lng: 28.626802,
    types: [
      {
        type: '1+1',
        minPrice: {
          TRY: 585000
        },
        maxPrice: {
          TRY: 880000
        },
        minArea: '66',
        maxArea: '66',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/1_1.jpg'
      },
      {
        type: '2+1',
        minPrice: {
          TRY: 882000
        },
        maxPrice: {
          TRY: 1100000
        },
        minArea: '96',
        maxArea: '144',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/2_1.jpg'
      },
      {
        type: '3+1',
        minPrice: {
          TRY: 1205000
        },
        maxPrice: {
          TRY: 1900000
        },
        minArea: '133',
        maxArea: '179',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/3_1.jpg'
      },
      {
        type: '4+1',
        minPrice: {
          TRY: 1969000
        },
        maxPrice: {
          TRY: 2100000
        },
        minArea: '199',
        maxArea: '213',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/4_1.jpg'
      },
      {
        type: 'villa',
        minPrice: {
          TRY: 1592000
        },
        maxPrice: {
          TRY: 2382750
        },
        minArea: '156',
        maxArea: '385',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/4_1.jpg'
      }
    ],
    images: [
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439403/projects/cayan-11/1.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/2.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/3.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/4.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/5.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/6.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/7.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/8.jpg'
    ],
    interior: [
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/1.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/2.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/3.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/4.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/5.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/6.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/7.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/8.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/9.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/10.jpg'
    ]
  },
  {
    id: '1101',
    description: '',
    descriptionAr: '',
    descriptionShort:
      'This project is located in Esenyurt, the most central area of ​​New Istanbul',
    descriptionShortAr:
      'يقع هذا المشروع في منطقة اسنيورت اكثر منطقة مركزية في إسطنبول الجديدة',
    typesAll: '2+1, 3+1',
    priceMin: {
      TRY: 366000
    },
    priceMax: {
      TRY: 512000
    },
    distances: {
      taksim: '26.5 KM',
      metro: '1.48 KM',
      metrobus: '1.5 KM',
      sultan: '25 KM',
      ataturk: '10.9 KM',
      newairport: '31.7 KM',
      beach: '5.9 KM',
      tem: '3.5 KM'
    },
    area: '91m - 143m',
    name: 'Evim',
    location: 'Esenyurt, Istanbul',
    locationAr: 'اسينيورت',
    status: '50% Down Payment',
    statusAr: '50٪ دفعة أولي',
    installment: '36',
    deliveryDate: '2019',
    deliveryDateAr: '2019',
    downPayment: '50',
    lat: 41.018564,
    lng: 28.656392,
    types: [
      {
        type: '2+1',
        minPrice: {
          TRY: 366000
        },
        maxPrice: {
          TRY: 427000
        },
        minArea: '91',
        maxArea: '130',
        plan:
          'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534252649/IST%201101/Floor%20Plans/21.png'
      },
      {
        type: '3+1',
        minPrice: {
          TRY: 512000
        },
        maxPrice: {
          TRY: 685000
        },
        minArea: '143',
        maxArea: '152',
        plan:
          'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534252648/IST%201101/Floor%20Plans/31.png'
      }
    ],
    images: [
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534254034/IST%201101/External/dis-gorseller-01-tr.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534254031/IST%201101/External/dis-gorseller-03-tr.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534254030/IST%201101/External/dis-gorseller-02-tr.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534254030/IST%201101/External/dis-gorseller-04-tr.jpg'
    ],
    interior: [
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534254116/IST%201101/Interior/ornek-daire-03-en.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534254116/IST%201101/Interior/ornek-daire-06-en.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534254116/IST%201101/Interior/ornek-daire-07-en.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534254116/IST%201101/Interior/ornek-daire-02-en.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534254116/IST%201101/Interior/ornek-daire-05-en.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534254115/IST%201101/Interior/ornek-daire-01-en.jpg',
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534254115/IST%201101/Interior/ornek-daire-04-en.jpg'
    ]
  },

  {
    id: '1005',
    description:
      'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
    descriptionAr: '',
    descriptionShort:
      'The project is located in the region of Bahcesehir, a growing region that attracts investors',
    descriptionShortAr:
      'يقع المشروع في منطقة بهشاشهير المنطقة الآخذة بالنمو و التي تجذب اهتمام المستثمرين بشكل كبير',
    typesAll: '1+1, 2+1, 3+1',
    priceMin: {
      TRY: 377000
    },
    priceMax: {
      TRY: 1017000
    },
    distances: {
      taksim: '24 KM',
      metro: '50 M',
      metrobus: '5 KM',
      sultan: '23 KM',
      ataturk: '10 KM',
      newairport: '30 KM',
      beach: '3 KM',
      tem: '159 M'
    },
    area: '65m - 176m',
    name: 'MAKYOL',
    location: 'Bahçeşehir, Istanbul',
    locationAr: ' بهشة شهير، اسطنبول ',
    status: '35% Down Payment',
    statusAr: '35٪ دفعة أولي',
    installment: '36',
    deliveryDate: '2019',
    deliveryDateAr: '2019',
    downPayment: '35',
    lat: 41.052653,
    lng: 28.679001,
    types: [
      {
        type: '1+1',
        minPrice: {
          TRY: 377000
        },
        maxPrice: {
          TRY: 563000
        },
        minArea: '65',
        maxArea: '81',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128828/projects/cayan-140/1_1.jpg'
      },
      {
        type: '2+1',
        minPrice: {
          TRY: 592000
        },
        maxPrice: {
          TRY: 982000
        },
        minArea: '105',
        maxArea: '163',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128828/projects/cayan-140/2_1.jpg'
      },
      {
        type: '3+1',
        minPrice: {
          TRY: 1017000
        },
        maxPrice: {
          TRY: 1114000
        },
        minArea: '172',
        maxArea: '176',
        plan:
          'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128828/projects/cayan-140/3_1.jpg'
      }
    ],
    images: [
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/1.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/2.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/3.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/4.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/5.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/6.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/7.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/8.jpg'
    ],
    interior: [
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/apartments/1.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/apartments/2.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/apartments/3.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/apartments/4.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/apartments/5.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/apartments/6.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/apartments/7.jpg',
      'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128727/projects/cayan-140/apartments/8.jpg'
    ]
  }
];

const addCurrencies = projects => {
  // const res = await fetch('https://openexchangerates.org/api/latest.json?app_id=ec60cf523d0f4912bc160406c1703489').then(res => res.json())
  // console.log('api')
  // console.log(res)

  fx.rates = {
    USD: 0.17,
    AED: 0.78,
    SAR: 0.79,
    KWD: 0.064,
    QAR: 0.77,
    OMR: 0.082,
    BHD: 0.08,
    EUR: 0.18,
    GBP: 0.16
  };
  fx.base = 'TRY';

  const returnValue = projects.map(project => {
    project.priceMin.USD = Math.ceil(
      fx.convert(project.priceMin.TRY, {
        from: 'TRY',
        to: 'USD'
      })
    );
    project.priceMax.USD = Math.ceil(
      fx.convert(project.priceMax.TRY, {
        from: 'TRY',
        to: 'USD'
      })
    );

    project.priceMin.AED = Math.ceil(
      fx.convert(project.priceMin.TRY, {
        from: 'TRY',
        to: 'AED'
      })
    );
    project.priceMax.AED = Math.ceil(
      fx.convert(project.priceMax.TRY, {
        from: 'TRY',
        to: 'AED'
      })
    );

    project.priceMin.SAR = Math.ceil(
      fx.convert(project.priceMin.TRY, {
        from: 'TRY',
        to: 'SAR'
      })
    );
    project.priceMax.SAR = Math.ceil(
      fx.convert(project.priceMax.TRY, {
        from: 'TRY',
        to: 'SAR'
      })
    );

    project.priceMin.KWD = Math.ceil(
      fx.convert(project.priceMin.TRY, {
        from: 'TRY',
        to: 'KWD'
      })
    );
    project.priceMax.KWD = Math.ceil(
      fx.convert(project.priceMax.TRY, {
        from: 'TRY',
        to: 'KWD'
      })
    );

    project.priceMin.QAR = Math.ceil(
      fx.convert(project.priceMin.TRY, {
        from: 'TRY',
        to: 'QAR'
      })
    );
    project.priceMax.QAR = Math.ceil(
      fx.convert(project.priceMax.TRY, {
        from: 'TRY',
        to: 'QAR'
      })
    );

    project.priceMin.OMR = Math.ceil(
      fx.convert(project.priceMin.TRY, {
        from: 'TRY',
        to: 'OMR'
      })
    );
    project.priceMax.OMR = Math.ceil(
      fx.convert(project.priceMax.TRY, {
        from: 'TRY',
        to: 'OMR'
      })
    );

    project.priceMin.BHD = Math.ceil(
      fx.convert(project.priceMin.TRY, {
        from: 'TRY',
        to: 'BHD'
      })
    );
    project.priceMax.BHD = Math.ceil(
      fx.convert(project.priceMax.TRY, {
        from: 'TRY',
        to: 'BHD'
      })
    );

    project.priceMin.EUR = Math.ceil(
      fx.convert(project.priceMin.TRY, {
        from: 'TRY',
        to: 'EUR'
      })
    );
    project.priceMax.EUR = Math.ceil(
      fx.convert(project.priceMax.TRY, {
        from: 'TRY',
        to: 'EUR'
      })
    );

    project.priceMin.GBP = Math.ceil(
      fx.convert(project.priceMin.TRY, {
        from: 'TRY',
        to: 'GBP'
      })
    );
    project.priceMax.GBP = Math.ceil(
      fx.convert(project.priceMax.TRY, {
        from: 'TRY',
        to: 'GBP'
      })
    );

    project.types = project.types.map(type => {
      type.minPrice.USD = Math.ceil(
        fx.convert(type.minPrice.TRY, {
          from: 'TRY',
          to: 'USD'
        })
      );
      type.maxPrice.USD = Math.ceil(
        fx.convert(type.maxPrice.TRY, {
          from: 'TRY',
          to: 'USD'
        })
      );

      type.minPrice.AED = Math.ceil(
        fx.convert(type.minPrice.TRY, {
          from: 'TRY',
          to: 'AED'
        })
      );
      type.maxPrice.AED = Math.ceil(
        fx.convert(type.maxPrice.TRY, {
          from: 'TRY',
          to: 'AED'
        })
      );

      type.minPrice.SAR = Math.ceil(
        fx.convert(type.minPrice.TRY, {
          from: 'TRY',
          to: 'SAR'
        })
      );
      type.maxPrice.SAR = Math.ceil(
        fx.convert(type.maxPrice.TRY, {
          from: 'TRY',
          to: 'SAR'
        })
      );

      type.minPrice.KWD = Math.ceil(
        fx.convert(type.minPrice.TRY, {
          from: 'TRY',
          to: 'KWD'
        })
      );
      type.maxPrice.KWD = Math.ceil(
        fx.convert(type.maxPrice.TRY, {
          from: 'TRY',
          to: 'KWD'
        })
      );

      type.minPrice.QAR = Math.ceil(
        fx.convert(type.minPrice.TRY, {
          from: 'TRY',
          to: 'QAR'
        })
      );
      type.maxPrice.QAR = Math.ceil(
        fx.convert(type.maxPrice.TRY, {
          from: 'TRY',
          to: 'QAR'
        })
      );

      type.minPrice.OMR = Math.ceil(
        fx.convert(type.minPrice.TRY, {
          from: 'TRY',
          to: 'OMR'
        })
      );
      type.maxPrice.OMR = Math.ceil(
        fx.convert(type.maxPrice.TRY, {
          from: 'TRY',
          to: 'OMR'
        })
      );

      type.minPrice.BHD = Math.ceil(
        fx.convert(type.minPrice.TRY, {
          from: 'TRY',
          to: 'BHD'
        })
      );
      type.maxPrice.BHD = Math.ceil(
        fx.convert(type.maxPrice.TRY, {
          from: 'TRY',
          to: 'BHD'
        })
      );

      type.minPrice.EUR = Math.ceil(
        fx.convert(type.minPrice.TRY, {
          from: 'TRY',
          to: 'EUR'
        })
      );
      type.maxPrice.EUR = Math.ceil(
        fx.convert(type.maxPrice.TRY, {
          from: 'TRY',
          to: 'EUR'
        })
      );

      type.minPrice.GBP = Math.ceil(
        fx.convert(type.minPrice.TRY, {
          from: 'TRY',
          to: 'GBP'
        })
      );
      type.maxPrice.GBP = Math.ceil(
        fx.convert(type.maxPrice.TRY, {
          from: 'TRY',
          to: 'GBP'
        })
      );
      return type;
    });
    return project;
  });
  return returnValue;
};

const projects = addCurrencies(rawProjects);
export { projects };
