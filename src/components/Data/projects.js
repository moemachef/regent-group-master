import fx from 'money';
import { map } from 'lodash';

const rawProjects = [{
        id: '1001',
        description: '',
        descriptionAr: '',
        descriptionShort: 'The project inspired by the Italian architecture, which features beautiful views of the valley of bahcesehir and green areas',
        descriptionShortAr: 'المشروع المستوحي من الفن المعماري الإيطالي حيث يتميز بإطلالات جميلة على وادي بهشة شهير و مساحاتها الخضراء',
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
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 283000
                },
                maxPrice: {
                    TRY: 335000
                },
                minArea: '67',
                maxArea: '80',
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/1_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/2_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/3_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/3_1.jpg'
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
        id: '1002',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'A real investment opportunity to own a garden based project. A famous ranch with wonderful views over the largest park in The city of Istanbul is in a famous area',
        descriptionShortAr: 'فرصة استثمارية حقيقية للتملك في مشروع حدائق  بهشة شهير ذو اطلالات الرائعة على اكبر حديقة في مدينة اسطنبول في منطقة بهشة شهير',
        typesAll: '1+1, 2+1, 3+1',
        priceMin: {
            TRY: 293000
        },
        priceMax: {
            TRY: 540000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '8.8 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '1.1 KM'
        },
        area: '75m - 213m',
        name: 'Avrupark Hayat',
        location: 'Bahçeşehir, Istanbul',
        locationAr: ' بهشاشهير ، اسطنبول',
        status: '25% Down Payment',
        statusAr: '25٪ دفعة أولي',
        installment: '36',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '25',
        lat: 41.095633,
        lng: 28.644873,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 293000
                },
                maxPrice: {
                    TRY: 460000
                },
                minArea: '75',
                maxArea: '95',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542359490/regent-react-real-estate-app/IST%201002/11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 460000
                },
                maxPrice: {
                    TRY: 540000
                },
                minArea: '112',
                maxArea: '209',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542359488/regent-react-real-estate-app/IST%201002/21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 540000
                },
                maxPrice: {
                    TRY: 600000
                },
                minArea: '158',
                maxArea: '213',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542359504/regent-react-real-estate-app/IST%201002/31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542359918/regent-react-real-estate-app/IST%201002/1o.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542359918/regent-react-real-estate-app/IST%201002/2o.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542359918/regent-react-real-estate-app/IST%201002/3o.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542359917/regent-react-real-estate-app/IST%201002/1i.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542359918/regent-react-real-estate-app/IST%201002/2i.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542359918/regent-react-real-estate-app/IST%201002/3i.jpg'
        ]
    },
    {
        id: '1003',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'This project is ideal for you and is fully equipped with green spaces around, providing you with a unique lifestyle in the heart of a famous and spectacular panoramic views open to the lake',
        descriptionShortAr: 'هذا المشروع مثالي بالنسبة لك وهي مجهزة بالكامل مع مساحات خضراء حولها مما يوفر لك نمط حياة مميزفي قلب بهشة شهير مع إطلالات بانورامية مفتوحة على البحيرة ',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 363000
        },
        priceMax: {
            TRY: 820000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '5.4 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '166 M'
        },
        area: '69m - 184m',
        name: 'Göl Panorama',
        location: 'Bahçeşehir, Istanbul',
        locationAr: ' بهشاشهير ، اسطنبول',
        status: '50% Down Payment',
        statusAr: '50٪ دفعة أولي',
        installment: '36',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '50',
        lat: 41.056289,
        lng: 28.686165,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 363000
                },
                maxPrice: {
                    TRY: 438000
                },
                minArea: '69',
                maxArea: '90',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542363840/regent-react-real-estate-app/IST%201003/11.jpg'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 438000
                },
                maxPrice: {
                    TRY: 540000
                },
                minArea: '101',
                maxArea: '140',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542363825/regent-react-real-estate-app/IST%201003/21.jpg'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 540000
                },
                maxPrice: {
                    TRY: 800000
                },
                minArea: '142',
                maxArea: '180',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542363840/regent-react-real-estate-app/IST%201003/31.jpg'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 820000
                },
                maxPrice: {
                    TRY: 900000
                },
                minArea: '184',
                maxArea: '200',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542363838/regent-react-real-estate-app/IST%201003/41.jpg'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542363838/regent-react-real-estate-app/IST%201003/1o.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542363829/regent-react-real-estate-app/IST%201003/2o.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542363827/regent-react-real-estate-app/IST%201003/3o.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542363840/regent-react-real-estate-app/IST%201003/1i.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542363839/regent-react-real-estate-app/IST%201003/2i.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542363840/regent-react-real-estate-app/IST%201003/3i.jpg'
        ]
    },
    {
        id: '1004',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'A large residential project in the center of Istanbul, built on a wide area of ​​160 thousand square meters and consists of various apartments suitable for families wishing to stay in Turkey.',
        descriptionShortAr: 'مشروع سكني ضخم في وسط مدينة إسطنبول مبني على مساحات واسعة تصل إلى 160 ألف متر مربع ويتكون من شقق متنوعة مناسبة للعائلات التى ترغب في الاقامة في تركيا',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 486000
        },
        priceMax: {
            TRY: 780000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '7.1 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '945 M'
        },
        area: '104m - 211m',
        name: 'Isbartakule',
        location: 'Bahçeşehir, Istanbul',
        locationAr: ' بهشاشهير ، اسطنبول',
        status: '40% Down Payment',
        statusAr: '40٪ دفعة أولي',
        installment: '240',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '40',
        lat: 41.070236,
        lng: 28.714169,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 486000
                },
                maxPrice: {
                    TRY: 500000
                },
                minArea: '104',
                maxArea: '110',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542366469/regent-react-real-estate-app/IST%201004/11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 534000
                },
                maxPrice: {
                    TRY: 500000
                },
                minArea: '120',
                maxArea: '150',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542366466/regent-react-real-estate-app/IST%201004/21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 590000
                },
                maxPrice: {
                    TRY: 700000
                },
                minArea: '160',
                maxArea: '200',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542366476/regent-react-real-estate-app/IST%201004/31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 780000
                },
                maxPrice: {
                    TRY: 900000
                },
                minArea: '211',
                maxArea: '240',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542366470/regent-react-real-estate-app/IST%201004/41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542366470/regent-react-real-estate-app/IST%201004/1o.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542366480/regent-react-real-estate-app/IST%201004/2o.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542366480/regent-react-real-estate-app/IST%201004/3o.png'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542366469/regent-react-real-estate-app/IST%201004/1i.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542366465/regent-react-real-estate-app/IST%201004/2i.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542366465/regent-react-real-estate-app/IST%201004/3i.jpg'
        ]
    },
    {
        id: '1005',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'The project is located in the region of Bahcesehir, a growing region that attracts investors',
        descriptionShortAr: 'يقع المشروع في منطقة بهشاشهير المنطقة الآخذة بالنمو و التي تجذب اهتمام المستثمرين بشكل كبير',
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
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 377000
                },
                maxPrice: {
                    TRY: 563000
                },
                minArea: '65',
                maxArea: '81',
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128828/projects/cayan-140/1_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128828/projects/cayan-140/2_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1528128828/projects/cayan-140/3_1.jpg'
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
    },
    {
        id: '1006',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'The project has a distinctive view of Bahçeşehir and the surrounding green areas and küçükçekmece lake  ',
        descriptionShortAr: 'يتميز المجمع بإطلالته المميزة على منطقة بهشة شهير و المساحات الخضراء المحيطة بها بالأضافة الى بحيرة كوشوك تشكمجة',
        typesAll: '2+1, 3+1, 4+1',
        priceMin: {
            TRY: 547000
        },
        priceMax: {
            TRY: 1067000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '8.2 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '1.7 KM'
        },
        area: '128m - 208m',
        name: 'Ebruli Isbartakule',
        location: 'Bahçeşehir, Istanbul',
        locationAr: ' بهشاشهير ، اسطنبول',
        status: '25% Down Payment',
        statusAr: '25٪ دفعة أولي',
        installment: '48',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '25',
        lat: 41.075015,
        lng: 28.710424,
        types: [{
                type: '2+1',
                minPrice: {
                    TRY: 547000
                },
                maxPrice: {
                    TRY: 700000
                },
                minArea: '128',
                maxArea: '150',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542371314/regent-react-real-estate-app/IST%201006/21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 721000
                },
                maxPrice: {
                    TRY: 1000000
                },
                minArea: '168',
                maxArea: '190',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542371310/regent-react-real-estate-app/IST%201006/31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 1067000
                },
                maxPrice: {
                    TRY: 1100000
                },
                minArea: '208',
                maxArea: '230',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542371312/regent-react-real-estate-app/IST%201006/41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542371311/regent-react-real-estate-app/IST%201006/1o.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542371666/regent-react-real-estate-app/IST%201006/2o.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542371303/regent-react-real-estate-app/IST%201006/3o.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542371302/regent-react-real-estate-app/IST%201006/1i.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542371306/regent-react-real-estate-app/IST%201006/2i.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542371303/regent-react-real-estate-app/IST%201006/3i.jpg'
        ]
    },
    {
        id: '1008',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'Enjoy a new and sophisticated project that brings both nature and the city to your home.',
        descriptionShortAr: 'تمتع بمشروع جديد متطور يجلب كل من الطبيعة و المدينة إلي عتبة داركم',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 320000
        },
        priceMax: {
            TRY: 900000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '7 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '1 KM'
        },
        area: '69m - 220m',
        name: 'Semt Bahcekent',
        location: 'Bahçeşehir, Istanbul',
        locationAr: ' بهشاشهير ، اسطنبول',
        status: '35% Down Payment',
        statusAr: '35٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2020',
        deliveryDateAr: '2020',
        downPayment: '35',
        lat: 41.067437,
        lng: 28.656724,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 320000
                },
                maxPrice: {
                    TRY: 400000
                },
                minArea: '69',
                maxArea: '100',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552506374/regent-react-real-estate-app/IST%201008/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 480000
                },
                maxPrice: {
                    TRY: 550000
                },
                minArea: '119',
                maxArea: '130',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552506365/regent-react-real-estate-app/IST%201008/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 616000
                },
                maxPrice: {
                    TRY: 700000
                },
                minArea: '147',
                maxArea: '180',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552506366/regent-react-real-estate-app/IST%201008/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 836000
                },
                maxPrice: {
                    TRY: 900000
                },
                minArea: '207',
                maxArea: '220',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552506380/regent-react-real-estate-app/IST%201008/fp41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552506368/regent-react-real-estate-app/IST%201008/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552506392/regent-react-real-estate-app/IST%201008/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552506382/regent-react-real-estate-app/IST%201008/e3.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552506391/regent-react-real-estate-app/IST%201008/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552506392/regent-react-real-estate-app/IST%201008/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552506390/regent-react-real-estate-app/IST%201008/i3.jpg'
        ]
    },
    {
        id: '1011',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'Now a new city in Istanbul, a symbol of the future city with large area of green spaces.',
        descriptionShortAr: 'الآن مدينة جديدة فى اسطنبول رمزا للمدينة المستقبلية و سط مساحة واسعة من الطبيعة الخضراء',
        typesAll: '1+1, 2+1, 3+1',
        priceMin: {
            TRY: 460000
        },
        priceMax: {
            TRY: 1034000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '8 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '1.4 KM'
        },
        area: '68m - 170m',
        name: 'Tual Bahcekent',
        location: 'Bahçeşehir, Istanbul',
        locationAr: ' بهشاشهير ، اسطنبول',
        status: '25% Down Payment',
        statusAr: '25٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '25',
        lat: 41.085077,
        lng: 28.634772,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 460000
                },
                maxPrice: {
                    TRY: 512000
                },
                minArea: '68',
                maxArea: '74',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552727909/regent-react-real-estate-app/IST%201011/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 724000
                },
                maxPrice: {
                    TRY: 759000
                },
                minArea: '134',
                maxArea: '140',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552727942/regent-react-real-estate-app/IST%201011/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 879000
                },
                maxPrice: {
                    TRY: 1063000
                },
                minArea: '170',
                maxArea: '180',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552727872/regent-react-real-estate-app/IST%201011/fp31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552727906/regent-react-real-estate-app/IST%201011/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552727892/regent-react-real-estate-app/IST%201011/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552727872/regent-react-real-estate-app/IST%201011/e3.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552727955/regent-react-real-estate-app/IST%201011/i1.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552727962/regent-react-real-estate-app/IST%201011/i2.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552727975/regent-react-real-estate-app/IST%201011/i3.png'
        ]
    },
    {
        id: '1101',
        description: '',
        descriptionAr: '',
        descriptionShort: 'This project is located in Esenyurt, the most central area of ​​New Istanbul',
        descriptionShortAr: 'يقع هذا المشروع في منطقة اسنيورت اكثر منطقة مركزية في إسطنبول الجديدة',
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
            metrobus: '300 M',
            sultan: '25 KM',
            ataturk: '10.9 KM',
            newairport: '31.7 KM',
            beach: '5.9 KM',
            tem: '3.6 KM'
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
        types: [{
                type: '2+1',
                minPrice: {
                    TRY: 366000
                },
                maxPrice: {
                    TRY: 427000
                },
                minArea: '91',
                maxArea: '130',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534252649/IST%201101/Floor%20Plans/21.png'
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
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534252648/IST%201101/Floor%20Plans/31.png'
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
        id: '1103',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'With its contemporary design on the European side of Istanbul, this large residential project offers a unique and luxurious layout with sea views and an integrated lifestyle ',
        descriptionShortAr: 'بتصميمها المعاصر في الجانب الاوروبي من اسطنبول هذا المشروع الكبير بمنازله يقدم مجموعة ذات تخطيط مميز و فاخر و يطل على البحر مع أسلوب حياة متكامل ',
        typesAll: '1+1, 2+1, 3+1',
        priceMin: {
            TRY: 486000
        },
        priceMax: {
            TRY: 792000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '2.9 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '2.6 KM'
        },
        area: '40m - 140m',
        name: 'N Logo',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '30% Down Payment',
        statusAr: '30٪ دفعة أولي',
        installment: '40',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '30',
        lat: 41.034900,
        lng: 28.684182,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 486000
                },
                maxPrice: {
                    TRY: 520000
                },
                minArea: '40',
                maxArea: '60',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542377643/regent-react-real-estate-app/IST%201103/11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 588000
                },
                maxPrice: {
                    TRY: 700000
                },
                minArea: '85',
                maxArea: '120',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542377635/regent-react-real-estate-app/IST%201103/21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 792000
                },
                maxPrice: {
                    TRY: 800000
                },
                minArea: '140',
                maxArea: '160',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542377656/regent-react-real-estate-app/IST%201103/31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542377675/regent-react-real-estate-app/IST%201103/1o.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542377673/regent-react-real-estate-app/IST%201103/2o.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542377677/regent-react-real-estate-app/IST%201103/3o.png'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542377680/regent-react-real-estate-app/IST%201103/1i.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542377650/regent-react-real-estate-app/IST%201103/2i.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1542377667/regent-react-real-estate-app/IST%201103/3i.png'
        ]
    },
    {
        id: '1104',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'The project is located in the European section of Istanbul, near Istanbul airport, malls, schools and hospitals.',
        descriptionShortAr: 'يقع المشروع في القسم الاوروبي من اسطنبول بالقرب من مطار اسطنبول و عدد كبير من المحلات التجارية و المدارس و المستشفيات',
        typesAll: '1+1, 2+1, 3+1',
        priceMin: {
            TRY: 290000
        },
        priceMax: {
            TRY: 600000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '1 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '4 KM'
        },
        area: '71m - 181m',
        name: 'EMS',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '40% Down Payment',
        statusAr: '40٪ دفعة أولي',
        installment: '24',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '40',
        lat: 41.013982,
        lng: 28.659825,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 290000
                },
                maxPrice: {
                    TRY: 350000
                },
                minArea: '71',
                maxArea: '86',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552731078/regent-react-real-estate-app/IST%201104/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 412000
                },
                maxPrice: {
                    TRY: 500000
                },
                minArea: '113',
                maxArea: '173',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552731079/regent-react-real-estate-app/IST%201104/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 545000
                },
                maxPrice: {
                    TRY: 700000
                },
                minArea: '157',
                maxArea: '181',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552731082/regent-react-real-estate-app/IST%201104/fp31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552730346/regent-react-real-estate-app/IST%201104/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552730335/regent-react-real-estate-app/IST%201104/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552730334/regent-react-real-estate-app/IST%201104/e3.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552730327/regent-react-real-estate-app/IST%201104/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552730339/regent-react-real-estate-app/IST%201104/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552730322/regent-react-real-estate-app/IST%201104/i3.jpg'
        ]
    },
    {
        id: '1105',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'A square where your dreams come true, where art and nature are the foundation of this project.',
        descriptionShortAr: 'ميدان احلامك على ارض الواقع حيث الفن و الطبيعة هنا لا مثيل لهما في اسطنبول',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 430000
        },
        priceMax: {
            TRY: 1280000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '5 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '0.5 KM'
        },
        area: '63m - 228m',
        name: 'Meydan',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '30% Down Payment',
        statusAr: '30٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '30',
        lat: 41.042976,
        lng: 28.675334,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 342000
                },
                maxPrice: {
                    TRY: 535000
                },
                minArea: '63',
                maxArea: '99',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552733742/regent-react-real-estate-app/IST%201105/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 515000
                },
                maxPrice: {
                    TRY: 838000
                },
                minArea: '100',
                maxArea: '149',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552733749/regent-react-real-estate-app/IST%201105/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 845000
                },
                maxPrice: {
                    TRY: 1077000
                },
                minArea: '175',
                maxArea: '177',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552733724/regent-react-real-estate-app/IST%201105/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 1066000
                },
                maxPrice: {
                    TRY: 1280000
                },
                minArea: '225',
                maxArea: '228',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552733735/regent-react-real-estate-app/IST%201105/fp41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552733703/regent-react-real-estate-app/IST%201105/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552733722/regent-react-real-estate-app/IST%201105/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552733735/regent-react-real-estate-app/IST%201105/e3.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552733734/regent-react-real-estate-app/IST%201105/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552733746/regent-react-real-estate-app/IST%201105/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552733749/regent-react-real-estate-app/IST%201105/i3.jpg'
        ]
    },
    {
        id: '1106',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'For high quality life and good investment, this project provide you luxurious appartments in Esenyurt.',
        descriptionShortAr: 'للاستثمار المربح و الحياة السعيدة يقدم لك هذا المشروع الرائد شقق سكنية فخمة في منطقة اسينيورت',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 234000
        },
        priceMax: {
            TRY: 1048000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '0.5 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '5 KM'
        },
        area: '45m - 270m',
        name: 'Central Hill',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '30% Down Payment',
        statusAr: '30٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '30',
        lat: 41.008953,
        lng: 28.672658,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 234000
                },
                maxPrice: {
                    TRY: 300000
                },
                minArea: '45',
                maxArea: '60',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552843546/regent-react-real-estate-app/IST%201106/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 391000
                },
                maxPrice: {
                    TRY: 450000
                },
                minArea: '88',
                maxArea: '110',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552843554/regent-react-real-estate-app/IST%201106/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 584000
                },
                maxPrice: {
                    TRY: 822000
                },
                minArea: '130',
                maxArea: '280',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552843550/regent-react-real-estate-app/IST%201106/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 1048000
                },
                maxPrice: {
                    TRY: 1070000
                },
                minArea: '252',
                maxArea: '270',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552843553/regent-react-real-estate-app/IST%201106/fp41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552843547/regent-react-real-estate-app/IST%201106/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552843545/regent-react-real-estate-app/IST%201106/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552843544/regent-react-real-estate-app/IST%201106/e3.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552843547/regent-react-real-estate-app/IST%201106/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552843548/regent-react-real-estate-app/IST%201106/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552843548/regent-react-real-estate-app/IST%201106/i3.jpg'
        ]
    },
    {
        id: '1107',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'The project location is ideal since it is located near to schools, hospitals, universities and main transportation lines.',
        descriptionShortAr: 'يتميز المشروع بالقرب من المدارس و المستشفيات الحكومية و الجامعات و خطوط المواصلات الرئيسية',
        typesAll: '1+1, 2+1, 3+1',
        priceMin: {
            TRY: 416000
        },
        priceMax: {
            TRY: 700000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '0.3 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '5 KM'
        },
        area: '70m - 170m',
        name: 'Hep',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '35% Down Payment',
        statusAr: '35٪ دفعة أولي',
        installment: '36',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '35',
        lat: 41.007518,
        lng: 28.687629,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 416000
                },
                maxPrice: {
                    TRY: 500000
                },
                minArea: '70',
                maxArea: '100',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845483/regent-react-real-estate-app/IST%201107/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 550000
                },
                maxPrice: {
                    TRY: 600000
                },
                minArea: '115',
                maxArea: '140',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845483/regent-react-real-estate-app/IST%201107/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 679000
                },
                maxPrice: {
                    TRY: 700000
                },
                minArea: '157',
                maxArea: '180',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845483/regent-react-real-estate-app/IST%201107/fp31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845485/regent-react-real-estate-app/IST%201107/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845483/regent-react-real-estate-app/IST%201107/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845479/regent-react-real-estate-app/IST%201107/e3.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845484/regent-react-real-estate-app/IST%201107/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845485/regent-react-real-estate-app/IST%201107/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845484/regent-react-real-estate-app/IST%201107/i3.jpg'
        ]
    },
    {
        id: '1108',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'Beside the unique location of the project, it also special for high quality of life and relaxed life.',
        descriptionShortAr: 'بجانب موقع المشروع الفريد يتميز هذا المشروع خصيصاً بنمط الحياة الهادئ و المريح',
        typesAll: '1+1, 2+1, 3+1',
        priceMin: {
            TRY: 339000
        },
        priceMax: {
            TRY: 800000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '0.8 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '4.5 KM'
        },
        area: '64m - 180m',
        name: 'Odul',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '35% Down Payment',
        statusAr: '35٪ دفعة أولي',
        installment: '36',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '35',
        lat: 41.021679,
        lng: 28.642798,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 339000
                },
                maxPrice: {
                    TRY: 400000
                },
                minArea: '64',
                maxArea: '110',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553112294/regent-react-real-estate-app/IST%201108/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 565000
                },
                maxPrice: {
                    TRY: 650000
                },
                minArea: '121',
                maxArea: '150',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553112318/regent-react-real-estate-app/IST%201108/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 721000
                },
                maxPrice: {
                    TRY: 900000
                },
                minArea: '160',
                maxArea: '180',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553112337/regent-react-real-estate-app/IST%201108/fp31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553112315/regent-react-real-estate-app/IST%201108/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553112310/regent-react-real-estate-app/IST%201108/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553112338/regent-react-real-estate-app/IST%201108/e3.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845484/regent-react-real-estate-app/IST%201107/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845485/regent-react-real-estate-app/IST%201107/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1552845484/regent-react-real-estate-app/IST%201107/i3.jpg'
        ]
    },
    {
        id: '1109',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'ُThis amazing project located near Marmara sea and many parks and green areas.',
        descriptionShortAr: 'يقع هذا المشروع الرائع على بحر مرمرة مع اطلالات كاملة على الحدائق و المسطحات الخضراء',
        typesAll: '1+1, 2+1, 3+1',
        priceMin: {
            TRY: 460000
        },
        priceMax: {
            TRY: 1350000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '2 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '3.5 KM'
        },
        area: '62m - 190m',
        name: 'Radius',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '35% Down Payment',
        statusAr: '35٪ دفعة أولي',
        installment: '48',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '35',
        lat: 41.020363,
        lng: 28.676460,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 460000
                },
                maxPrice: {
                    TRY: 600000
                },
                minArea: '62',
                maxArea: '82',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553114141/regent-react-real-estate-app/IST%201109/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 680000
                },
                maxPrice: {
                    TRY: 1086000
                },
                minArea: '90',
                maxArea: '140',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553114145/regent-react-real-estate-app/IST%201109/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 1300000
                },
                maxPrice: {
                    TRY: 1350000
                },
                minArea: '175',
                maxArea: '200',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553114140/regent-react-real-estate-app/IST%201109/fp31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553114134/regent-react-real-estate-app/IST%201109/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553114133/regent-react-real-estate-app/IST%201109/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553114121/regent-react-real-estate-app/IST%201109/e3.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553114128/regent-react-real-estate-app/IST%201109/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553114165/regent-react-real-estate-app/IST%201109/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553114119/regent-react-real-estate-app/IST%201109/i3.jpg'
        ]
    },
    {
        id: '1110',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'Enjoy the project which has all what you need from services, restaurants and shopping options.',
        descriptionShortAr: 'استمتع بمشروع يحتوي على كل ما تحتاجه من خدمات و مطاعم و خيارات تسوق ',
        typesAll: '1+1, 2+1',
        priceMin: {
            TRY: 237000
        },
        priceMax: {
            TRY: 510000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '0.5 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '4 KM'
        },
        area: '63m - 145m',
        name: 'Onay',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '50% Down Payment',
        statusAr: '50٪ دفعة أولي',
        installment: '17',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '50',
        lat: 41.021872,
        lng: 28.636531,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 237000
                },
                maxPrice: {
                    TRY: 263000
                },
                minArea: '63',
                maxArea: '70',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553333699/regent-react-real-estate-app/IST%201110/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 483000
                },
                maxPrice: {
                    TRY: 510000
                },
                minArea: '137',
                maxArea: '145',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553333709/regent-react-real-estate-app/IST%201110/fp21.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553333698/regent-react-real-estate-app/IST%201110/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553333699/regent-react-real-estate-app/IST%201110/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553333698/regent-react-real-estate-app/IST%201110/e3.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553333705/regent-react-real-estate-app/IST%201110/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553333711/regent-react-real-estate-app/IST%201110/i2.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553333706/regent-react-real-estate-app/IST%201110/i3.png'
        ]
    },
    {
        id: '1112',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'Enjoy the project which located near to the largest park in the area and in the middle of the most urban area of the city.',
        descriptionShortAr: 'استمتع بمشروع يقرب من اكبر حديقة بالمنطقة و يقع في وسط المنطقة العمرانية بالمدينة حيث تتوفر جميع الخدمات',
        typesAll: '3+1',
        priceMin: {
            TRY: 575000
        },
        priceMax: {
            TRY: 675000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '1 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '4.5 KM'
        },
        area: '175m - 200m',
        name: 'Prestij Park',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '40% Down Payment',
        statusAr: '40٪ دفعة أولي',
        installment: '18',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '40',
        lat: 41.011189,
        lng: 28.674483,
        types: [{
            type: '3+1',
            minPrice: {
                TRY: 575000
            },
            maxPrice: {
                TRY: 675000
            },
            minArea: '175',
            maxArea: '200',
            plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553335755/regent-react-real-estate-app/IST%201112/fp31.png'
        }],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553335755/regent-react-real-estate-app/IST%201112/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553335762/regent-react-real-estate-app/IST%201112/e2.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553335757/regent-react-real-estate-app/IST%201112/e3.png'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553335756/regent-react-real-estate-app/IST%201112/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553335758/regent-react-real-estate-app/IST%201112/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553335758/regent-react-real-estate-app/IST%201112/i3.jpg'
        ]
    },
    {
        id: '1113',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'The most Luxarious project ever in the harmony of nature.',
        descriptionShortAr: 'اكثر المشاريع رفاهية و متعة على الاطلاق في حضن الطبيعة الخلابة',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 200000
        },
        priceMax: {
            TRY: 800000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '3.5 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '1.5 KM'
        },
        area: '72m - 300m',
        name: 'Bey residence',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '35% Down Payment',
        statusAr: '35٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '35',
        lat: 41.031239,
        lng: 28.651260,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 200000
                },
                maxPrice: {
                    TRY: 250000
                },
                minArea: '72',
                maxArea: '90',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337695/regent-react-real-estate-app/IST%201113/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 290000
                },
                maxPrice: {
                    TRY: 350000
                },
                minArea: '107',
                maxArea: '115',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337696/regent-react-real-estate-app/IST%201113/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 450000
                },
                maxPrice: {
                    TRY: 600000
                },
                minArea: '118',
                maxArea: '200',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337696/regent-react-real-estate-app/IST%201113/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 700000
                },
                maxPrice: {
                    TRY: 800000
                },
                minArea: '285',
                maxArea: '300',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337697/regent-react-real-estate-app/IST%201113/fp41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337695/regent-react-real-estate-app/IST%201113/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337698/regent-react-real-estate-app/IST%201113/e2.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337700/regent-react-real-estate-app/IST%201113/i1.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337701/regent-react-real-estate-app/IST%201113/i2png.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337702/regent-react-real-estate-app/IST%201113/i3png.png'
        ]
    },
    {
        id: '1114',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'Family appartments with reasonable prices near the metrobus and many malls.',
        descriptionShortAr: 'مشروع عائلي يتميز بالقرب من المتروبوس و العديد من المولات التجارية',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 460000
        },
        priceMax: {
            TRY: 1400000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '0.3 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '5 KM'
        },
        area: '79m - 257m',
        name: 'Botanica',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '40% Down Payment',
        statusAr: '40٪ دفعة أولي',
        installment: '60',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '40',
        lat: 41.015584,
        lng: 28.651543,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 460000
                },
                maxPrice: {
                    TRY: 600000
                },
                minArea: '79',
                maxArea: '117',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553339342/regent-react-real-estate-app/IST%201114/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 640000
                },
                maxPrice: {
                    TRY: 800000
                },
                minArea: '110',
                maxArea: '156',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553339343/regent-react-real-estate-app/IST%201114/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 1000000
                },
                maxPrice: {
                    TRY: 1100000
                },
                minArea: '189',
                maxArea: '203',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553339341/regent-react-real-estate-app/IST%201114/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 1336000
                },
                maxPrice: {
                    TRY: 1400000
                },
                minArea: '241',
                maxArea: '257',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553339341/regent-react-real-estate-app/IST%201114/fp41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553339337/regent-react-real-estate-app/IST%201114/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553339338/regent-react-real-estate-app/IST%201114/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553339338/regent-react-real-estate-app/IST%201114/e3.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337700/regent-react-real-estate-app/IST%201113/i1.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337701/regent-react-real-estate-app/IST%201113/i2png.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553337702/regent-react-real-estate-app/IST%201113/i3png.png'
        ]
    },
    {
        id: '1115',
        description: 'Apartments for sale with an amazing architecture design with installments next to akbati mall in Bahçeşehir, Istanbul. also near the new metro station which will be finished in 2018 near Bahçeşehir lake. This project is built on an area of 75,000 and consists of 5 main buildings that has 459 housing units and shops plus many social and entirtainment places allows you a luxurious life style with an amazing view. The apartments has 1+1, 2+1 and 3+1 with an area of 65 m to 176 m. This project will be finished in 2019 in Bahçeşehir, Istanbul available with installments',
        descriptionAr: '',
        descriptionShort: 'The project is near the main transportation lines, metrobus, schools and hospitals.',
        descriptionShortAr: 'يتميز المشروع بالقرب من خطوط المواصلات الرئيسية و المتروبوس و المدارس و المستشفيات',
        typesAll: '1+1, 2+1, 3+1',
        priceMin: {
            TRY: 233000
        },
        priceMax: {
            TRY: 787000
        },
        distances: {
            taksim: '24 KM',
            metro: '50 M',
            metrobus: '2.7 KM',
            sultan: '23 KM',
            ataturk: '10 KM',
            newairport: '30 KM',
            beach: '3 KM',
            tem: '2.5 KM'
        },
        area: '48m - 177m',
        name: 'Miran',
        location: 'Esenyurt, Istanbul',
        locationAr: 'اسينيورت ، اسطنبول',
        status: '30% Down Payment',
        statusAr: '30٪ دفعة أولي',
        installment: '24',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '30',
        lat: 41.026176,
        lng: 28.671504,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 233000
                },
                maxPrice: {
                    TRY: 289000
                },
                minArea: '48',
                maxArea: '100',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553340902/regent-react-real-estate-app/IST%201115/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 343000
                },
                maxPrice: {
                    TRY: 689000
                },
                minArea: '78',
                maxArea: '159',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553340904/regent-react-real-estate-app/IST%201115/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 626000
                },
                maxPrice: {
                    TRY: 787000
                },
                minArea: '126',
                maxArea: '177',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553340915/regent-react-real-estate-app/IST%201115/fp31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553340904/regent-react-real-estate-app/IST%201115/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553340903/regent-react-real-estate-app/IST%201115/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553340903/regent-react-real-estate-app/IST%201115/e3.jpg'

        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553340913/regent-react-real-estate-app/IST%201115/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553340907/regent-react-real-estate-app/IST%201115/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553340914/regent-react-real-estate-app/IST%201115/i3.jpg'
        ]
    },
    {
        id: '1201',
        description: "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
        descriptionAr: '',
        descriptionShort: 'The project is located on the Marmara Sea coast. These apartments are located on the European side of Istanbul and offer a wonderful opportunity to enjoy a luxurious style of living in Turkey and close to the city center',
        descriptionShortAr: 'يقع المشروع على ساحل بحر مرمرة و توجد هذه الشقق في الجانب الأوروبي من اسطنبول كما تقدم فرصة رائعة للإستمتاع بنمط فاخر من العيش في تركيا و علي مقربة من وسط المدينة',
        typesAll: '1+1, 2+1, 3+1, 4+1',
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
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 585000
                },
                maxPrice: {
                    TRY: 880000
                },
                minArea: '66',
                maxArea: '66',
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/1_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/2_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/3_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/4_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/4_1.jpg'
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
        id: '1202',
        description: "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
        descriptionAr: '',
        descriptionShort: 'Project with incredible views on Marmara Sea convenient for family residence.',
        descriptionShortAr: 'شقق باطلالات مذهلة على بحر مرمرة مناسبة للسكن العائلي',
        typesAll: '2+1, 3+1, 4+2, 5+2',
        priceMin: {
            TRY: 525000
        },
        priceMax: {
            TRY: 1200000
        },
        distances: {
            taksim: '29 KM',
            metro: '4.7 KM',
            metrobus: '3.5 KM',
            sultan: '28 KM',
            ataturk: '13 KM',
            newairport: '35 KM',
            beach: '0 KM',
            tem: '8 KM'
        },
        area: '90m - 220m',
        name: 'Minas Park',
        location: 'Beylikduzu, Istanbul',
        locationAr: 'بيليك دوزو ، اسطنبول',
        status: '50% Down Payment',
        statusAr: '50٪ دفعة أولي',
        installment: '15',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '50',
        lat: 40.980831,
        lng: 28.631113,
        types: [{
                type: '2+1',
                minPrice: {
                    TRY: 525000
                },
                maxPrice: {
                    TRY: 600000
                },
                minArea: '90',
                maxArea: '110',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553342923/regent-react-real-estate-app/IST%201202/fp21-min.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 670000
                },
                maxPrice: {
                    TRY: 1000000
                },
                minArea: '112',
                maxArea: '150',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553342921/regent-react-real-estate-app/IST%201202/fp31-min.png'
            },
            {
                type: '4+2',
                minPrice: {
                    TRY: 1080000
                },
                maxPrice: {
                    TRY: 1140000
                },
                minArea: '173',
                maxArea: '190',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553344031/regent-react-real-estate-app/IST%201202/fp42-min.png'
            },
            {
                type: '5+2',
                minPrice: {
                    TRY: 1163000
                },
                maxPrice: {
                    TRY: 1200000
                },
                minArea: '193',
                maxArea: '220',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553344031/regent-react-real-estate-app/IST%201202/fp52-min.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553342926/regent-react-real-estate-app/IST%201202/hero-min.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553342926/regent-react-real-estate-app/IST%201202/e1-min.png'
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553342926/regent-react-real-estate-app/IST%201202/i1-min.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553342927/regent-react-real-estate-app/IST%201202/i2-min.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553342924/regent-react-real-estate-app/IST%201202/i3-min.png'
        ]
    },
    {
        id: '1203',
        description: "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
        descriptionAr: '',
        descriptionShort: 'The project located in the middle of Beylikduzu, where there is nothing here but nature and sea view.',
        descriptionShortAr: 'يتوسط المشروع منطقة بيليكدوزو الهادئة فلا يوجد شئ هنا غير الطبيعة الجميلة و الاطلالة على البحر',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 377000
        },
        priceMax: {
            TRY: 1120000
        },
        distances: {
            taksim: '29 KM',
            metro: '4.7 KM',
            metrobus: '2.5 KM',
            sultan: '28 KM',
            ataturk: '13 KM',
            newairport: '35 KM',
            beach: '0 KM',
            tem: '7.5 KM'
        },
        area: '70m - 200m',
        name: 'Vira Istanbul',
        location: 'Beylikduzu, Istanbul',
        locationAr: 'بيليك دوزو ، اسطنبول',
        status: '35% Down Payment',
        statusAr: '35٪ دفعة أولي',
        installment: '24',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '35',
        lat: 40.982992,
        lng: 28.645148,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 377000
                },
                maxPrice: {
                    TRY: 500000
                },
                minArea: '70',
                maxArea: '100',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553345126/regent-react-real-estate-app/IST%201203/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 580000
                },
                maxPrice: {
                    TRY: 700000
                },
                minArea: '123',
                maxArea: '150',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553345127/regent-react-real-estate-app/IST%201203/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 1023000
                },
                maxPrice: {
                    TRY: 1100000
                },
                minArea: '176',
                maxArea: '190',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553345127/regent-react-real-estate-app/IST%201203/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 1108000
                },
                maxPrice: {
                    TRY: 1120000
                },
                minArea: '194',
                maxArea: '220',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553345129/regent-react-real-estate-app/IST%201203/fp41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553345126/regent-react-real-estate-app/IST%201203/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553345132/regent-react-real-estate-app/IST%201203/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553345132/regent-react-real-estate-app/IST%201203/e3.jpg',
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553342926/regent-react-real-estate-app/IST%201202/i1-min.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553342927/regent-react-real-estate-app/IST%201202/i2-min.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553342924/regent-react-real-estate-app/IST%201202/i3-min.png'
        ]
    },
    {
        id: '1204',
        description: "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
        descriptionAr: '',
        descriptionShort: 'The project has wide windows directly at the sea side which gives incredible views, in the most quit area in Beylikduzu.',
        descriptionShortAr: 'يتميز المشروع بشرفات واسعة باطلالات بحرية خلابة في اكثر مناطق بيلكدوزو هدوءا',
        typesAll: '2+1, 3+1, 4+1',
        priceMin: {
            TRY: 800000
        },
        priceMax: {
            TRY: 2250000
        },
        distances: {
            taksim: '29 KM',
            metro: '4.7 KM',
            metrobus: '4.7 KM',
            sultan: '28 KM',
            ataturk: '13 KM',
            newairport: '35 KM',
            beach: '0 KM',
            tem: '10 KM'
        },
        area: '103m - 220m',
        name: 'Palm Marin',
        location: 'Beylikduzu, Istanbul',
        locationAr: 'بيليك دوزو ، اسطنبول',
        status: '40% Down Payment',
        statusAr: '40٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2020',
        deliveryDateAr: '2020',
        downPayment: '40',
        lat: 40.972447,
        lng: 28.631408,
        types: [{
                type: '2+1',
                minPrice: {
                    TRY: 800000
                },
                maxPrice: {
                    TRY: 1200000
                },
                minArea: '103',
                maxArea: '140',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553360908/regent-react-real-estate-app/IST%201204/fp21.jpg'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 1600000
                },
                maxPrice: {
                    TRY: 2000000
                },
                minArea: '165',
                maxArea: '190',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553360907/regent-react-real-estate-app/IST%201204/fp31.jpg'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 2190000
                },
                maxPrice: {
                    TRY: 2250000
                },
                minArea: '196',
                maxArea: '220',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553360909/regent-react-real-estate-app/IST%201204/fp41.jpg'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553360937/regent-react-real-estate-app/IST%201204/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553360918/regent-react-real-estate-app/IST%201204/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553360908/regent-react-real-estate-app/IST%201204/e3.jpg',
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553360932/regent-react-real-estate-app/IST%201204/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553360931/regent-react-real-estate-app/IST%201204/i2.jpg'
        ]
    },
    {
        id: '1205',
        description: "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
        descriptionAr: '',
        descriptionShort: 'The green color is the main element in design and architecture, everything you dream of you will sure find it here',
        descriptionShortAr: 'اللون الأخضر هو عنصر التصميم الأساسي، كل ما تتمناه ستجده هنا',
        typesAll: '2+1, 3+1, 4+1',
        priceMin: {
            TRY: 770000
        },
        priceMax: {
            TRY: 1330000
        },
        distances: {
            taksim: '29 KM',
            metro: '4.7 KM',
            metrobus: '0.5 KM',
            sultan: '28 KM',
            ataturk: '13 KM',
            newairport: '35 KM',
            beach: '0 KM',
            tem: '5 KM'
        },
        area: '140m - 230m',
        name: 'Metro Home',
        location: 'Beylikduzu, Istanbul',
        locationAr: 'بيليك دوزو ، اسطنبول',
        status: '30% Down Payment',
        statusAr: '30٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '30',
        lat: 41.019703,
        lng: 28.624627,
        types: [{
                type: '2+1',
                minPrice: {
                    TRY: 770000
                },
                maxPrice: {
                    TRY: 850000
                },
                minArea: '140',
                maxArea: '150',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553363678/regent-react-real-estate-app/IST%201205/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 930000
                },
                maxPrice: {
                    TRY: 1100000
                },
                minArea: '155',
                maxArea: '200',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553363699/regent-react-real-estate-app/IST%201205/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 1320000
                },
                maxPrice: {
                    TRY: 1330000
                },
                minArea: '216',
                maxArea: '230',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553363648/regent-react-real-estate-app/IST%201205/fp41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553363670/regent-react-real-estate-app/IST%201205/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553363657/regent-react-real-estate-app/IST%201205/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553363684/regent-react-real-estate-app/IST%201205/e3.jpg',
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553363691/regent-react-real-estate-app/IST%201205/i1.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553363670/regent-react-real-estate-app/IST%201205/i2.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553363695/regent-react-real-estate-app/IST%201205/i3.png'
        ]
    },
    {
        id: '1206',
        description: "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
        descriptionAr: '',
        descriptionShort: 'Enjoy the project that will achieve all your dreams and ambitions in the most urban and advanced city',
        descriptionShortAr: 'استمتع بمشروع يحقق جميع تطلعاتك و احلامك في المدينة العصرية الحضارية',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 348000
        },
        priceMax: {
            TRY: 1296000
        },
        distances: {
            taksim: '29 KM',
            metro: '4.7 KM',
            metrobus: '1.5 KM',
            sultan: '28 KM',
            ataturk: '13 KM',
            newairport: '35 KM',
            beach: '0 KM',
            tem: '4 KM'
        },
        area: '67m - 290m',
        name: 'Self Istanbul',
        location: 'Beylikduzu, Istanbul',
        locationAr: 'بيليك دوزو ، اسطنبول',
        status: '30% Down Payment',
        statusAr: '30٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2020',
        deliveryDateAr: '2020',
        downPayment: '30',
        lat: 41.011125,
        lng: 28.675850,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 348000
                },
                maxPrice: {
                    TRY: 491000
                },
                minArea: '67',
                maxArea: '94',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619872/regent-react-real-estate-app/IST%201206/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 490000
                },
                maxPrice: {
                    TRY: 934000
                },
                minArea: '103',
                maxArea: '188',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619844/regent-react-real-estate-app/IST%201206/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 733000
                },
                maxPrice: {
                    TRY: 1221000
                },
                minArea: '156',
                maxArea: '206',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619844/regent-react-real-estate-app/IST%201206/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 1018000
                },
                maxPrice: {
                    TRY: 1296000
                },
                minArea: '216',
                maxArea: '290',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619844/regent-react-real-estate-app/IST%201206/fp31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619842/regent-react-real-estate-app/IST%201206/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619868/regent-react-real-estate-app/IST%201206/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619859/regent-react-real-estate-app/IST%201206/e3.jpg',
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619876/regent-react-real-estate-app/IST%201206/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619856/regent-react-real-estate-app/IST%201206/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619874/regent-react-real-estate-app/IST%201206/i3.jpg'
        ]
    },
    {
        id: '1208',
        description: "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
        descriptionAr: '',
        descriptionShort: 'The project that guarantee to you the right investment near to the largest park in Beylikduzu',
        descriptionShortAr: 'المشروع الذي يضمن لك الاستثمار المربح بالقرب من اكبر حدائق بيليكدوزو',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 420000
        },
        priceMax: {
            TRY: 1570000
        },
        distances: {
            taksim: '29 KM',
            metro: '4.7 KM',
            metrobus: '0.1 KM',
            sultan: '28 KM',
            ataturk: '13 KM',
            newairport: '35 KM',
            beach: '0 KM',
            tem: '4.5 KM'
        },
        area: '82m - 290m',
        name: 'Brand Istanbul',
        location: 'Beylikduzu, Istanbul',
        locationAr: 'بيليك دوزو ، اسطنبول',
        status: '30% Down Payment',
        statusAr: '30٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2021',
        deliveryDateAr: '2021',
        downPayment: '30',
        lat: 41.008837,
        lng: 28.652652,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 420000
                },
                maxPrice: {
                    TRY: 500000
                },
                minArea: '82',
                maxArea: '105',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553626757/regent-react-real-estate-app/IST%201208/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 595000
                },
                maxPrice: {
                    TRY: 1000000
                },
                minArea: '115',
                maxArea: '200',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553626763/regent-react-real-estate-app/IST%201208/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 1075000
                },
                maxPrice: {
                    TRY: 1400000
                },
                minArea: '208',
                maxArea: '250',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553626761/regent-react-real-estate-app/IST%201208/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 1546000
                },
                maxPrice: {
                    TRY: 1570000
                },
                minArea: '270',
                maxArea: '290',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553626766/regent-react-real-estate-app/IST%201208/fp41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553626737/regent-react-real-estate-app/IST%201208/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553626738/regent-react-real-estate-app/IST%201208/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553626739/regent-react-real-estate-app/IST%201208/e3.jpg',
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619876/regent-react-real-estate-app/IST%201206/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619856/regent-react-real-estate-app/IST%201206/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553619874/regent-react-real-estate-app/IST%201206/i3.jpg'
        ]
    },
    {
        id: '1209',
        description: "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
        descriptionAr: '',
        descriptionShort: 'The project is located in Beylikduzu, away from the Marina by only one minute and five minutes from the main highway.',
        descriptionShortAr: 'يقع المشروع في بيليكدوزو ، دقيقة واحدة من المارينا و خمسة دقائق من خطوط المواصلات الرئيسية',
        typesAll: '1+1, 2+1, 3+1, 5+1',
        priceMin: {
            TRY: 382000
        },
        priceMax: {
            TRY: 1842000
        },
        distances: {
            taksim: '29 KM',
            metro: '4.7 KM',
            metrobus: '2.5 KM',
            sultan: '28 KM',
            ataturk: '13 KM',
            newairport: '35 KM',
            beach: '0 KM',
            tem: '7.8 KM'
        },
        area: '59m - 350m',
        name: 'Demir Country',
        location: 'Beylikduzu, Istanbul',
        locationAr: 'بيليك دوزو ، اسطنبول',
        status: '35% Down Payment',
        statusAr: '35٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2020',
        deliveryDateAr: '2020',
        downPayment: '35',
        lat: 40.983339,
        lng: 28.667854,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 382000
                },
                maxPrice: {
                    TRY: 479000
                },
                minArea: '59',
                maxArea: '73',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560186497/regent-react-real-estate-app/IST%201209/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 605000
                },
                maxPrice: {
                    TRY: 1045000
                },
                minArea: '110',
                maxArea: '165',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560186498/regent-react-real-estate-app/IST%201209/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 787000
                },
                maxPrice: {
                    TRY: 1228000
                },
                minArea: '145',
                maxArea: '191',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560186494/regent-react-real-estate-app/IST%201209/fp31.png'
            },
            {
                type: '5+1',
                minPrice: {
                    TRY: 1513000
                },
                maxPrice: {
                    TRY: 1842000
                },
                minArea: '310',
                maxArea: '350',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560186488/regent-react-real-estate-app/IST%201209/fp51.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560186493/regent-react-real-estate-app/IST%201209/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560186509/regent-react-real-estate-app/IST%201209/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560186510/regent-react-real-estate-app/IST%201209/e3.jpg',
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560186493/regent-react-real-estate-app/IST%201209/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560186491/regent-react-real-estate-app/IST%201209/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560186509/regent-react-real-estate-app/IST%201209/i3.jpg'
        ]
    },
    {
        id: '1210',
        description: "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
        descriptionAr: '',
        descriptionShort: 'The project is located in Beylikduzu, has incredible view on the sea-side and marina, located near the metrobus station and Marmara Park Mall.',
        descriptionShortAr: 'يقع المشروع في بيلكدوزو ، يتمتع باطلالات فريدة على الميناء و يقع بالقرب من المتروبوس و مارمارا بارك',
        typesAll: '1+1, 2+1',
        priceMin: {
            TRY: 327000
        },
        priceMax: {
            TRY: 700000
        },
        distances: {
            taksim: '29 KM',
            metro: '4.7 KM',
            metrobus: '4 KM',
            sultan: '28 KM',
            ataturk: '13 KM',
            newairport: '35 KM',
            beach: '0 KM',
            tem: '9 KM'
        },
        area: '60m - 130m',
        name: 'Liv Marmara',
        location: 'Beylikduzu, Istanbul',
        locationAr: 'بيليك دوزو ، اسطنبول',
        status: '35% Down Payment',
        statusAr: '35٪ دفعة أولي',
        installment: '36',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '35',
        lat: 40.972236,
        lng: 28.663446,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 327000
                },
                maxPrice: {
                    TRY: 500000
                },
                minArea: '60',
                maxArea: '90',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560185000/regent-react-real-estate-app/IST%201210/fp11-min.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 639000
                },
                maxPrice: {
                    TRY: 700000
                },
                minArea: '107',
                maxArea: '130',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560185011/regent-react-real-estate-app/IST%201210/fp21-min.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560185007/regent-react-real-estate-app/IST%201210/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560185019/regent-react-real-estate-app/IST%201210/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560185009/regent-react-real-estate-app/IST%201210/e3.jpg',
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560184974/regent-react-real-estate-app/IST%201210/I1-min.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560184977/regent-react-real-estate-app/IST%201210/I2-min.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560184981/regent-react-real-estate-app/IST%201210/I3-min.jpg'
        ]
    },
    {
        id: '1408',
        description: "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
        descriptionAr: '',
        descriptionShort: 'The project located in Pasin Express in one of the most vivid and important locations in Istanbul.',
        descriptionShortAr: 'يقع المشروع في باسين اكسبريس في واحدة من المواقع الأكثر قيمة و حيوية',
        typesAll: '1+1, 2+1, 3+1',
        priceMin: {
            TRY: 582000
        },
        priceMax: {
            TRY: 1300000
        },
        distances: {
            taksim: '29 KM',
            metro: '4.7 KM',
            metrobus: '6 KM',
            sultan: '28 KM',
            ataturk: '13 KM',
            newairport: '35 KM',
            beach: '0 KM',
            tem: '2 KM'
        },
        area: '68m - 200m',
        name: 'Nef BasinExpress',
        location: 'Basin Express, Istanbul',
        locationAr: 'باسين اكسبريس ، اسطنبول',
        status: '30% Down Payment',
        statusAr: '30٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2020',
        deliveryDateAr: '2020',
        downPayment: '30',
        lat: 41.035512,
        lng: 28.818832,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 582000
                },
                maxPrice: {
                    TRY: 700000
                },
                minArea: '68',
                maxArea: '100',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553934281/regent-react-real-estate-app/IST%201408/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 800000
                },
                maxPrice: {
                    TRY: 1000000
                },
                minArea: '111',
                maxArea: '150',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553934284/regent-react-real-estate-app/IST%201408/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 1180000
                },
                maxPrice: {
                    TRY: 1300000
                },
                minArea: '208',
                maxArea: '250',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553934323/regent-react-real-estate-app/IST%201408/fp31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553934319/regent-react-real-estate-app/IST%201408/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553934313/regent-react-real-estate-app/IST%201408/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553934324/regent-react-real-estate-app/IST%201408/e3.jpg',
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553934297/regent-react-real-estate-app/IST%201408/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553934305/regent-react-real-estate-app/IST%201408/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553934311/regent-react-real-estate-app/IST%201408/i3.jpg'
        ]
    },
    {
        id: '1409',
        description: "Luxury Apartment and villas with an incredible view for sale with installments in Beylikduzu, Istanbul, Turkey. available 1+1, 2+1, 3+1 and 4+1 bedrooms apartments and duplex villas with with luxury two floors, private elevators, swimming pool and garague with an amazing view. Imagine having everything you need at your door step from work and entertainment to golden beaches, shopping malls, cafes, resturants, hospitals, fitness centers and stabels. One of Istanbu's biggest luxury projects which will finish in 2021. This project is built on an area of 1,200 m where nature meets the sea. It includes has 5,000 apartments and 330 villas. The owner company of this project was founded in 1979 with the goal of developing the most luxurious projects in Turkey. They developed a total 33 projects and 5 malls with international awards. You will find in this project luxury apartments and villas with an incredible view on the sea available with installments in Beylikduzu, Istanbul",
        descriptionAr: '',
        descriptionShort: 'The smartest project in Pasin Express, where shopping options are abundant and you will never run out of new places to visit.',
        descriptionShortAr: 'المشروع الاذكى في باسن اكسبريس حيث يوفر لك الفرصة للتسوق من قلبك ومن دون الذهاب بعيدا عن المنزل ',
        typesAll: '1+1, 2+1',
        priceMin: {
            TRY: 675000
        },
        priceMax: {
            TRY: 995000
        },
        distances: {
            taksim: '29 KM',
            metro: '4.7 KM',
            metrobus: '6 KM',
            sultan: '28 KM',
            ataturk: '13 KM',
            newairport: '35 KM',
            beach: '0 KM',
            tem: '0.5 KM'
        },
        area: '78m - 120m',
        name: 'Gul Express',
        location: 'Basin Express, Istanbul',
        locationAr: 'باسين اكسبريس ، اسطنبول',
        status: '50% Down Payment',
        statusAr: '50٪ دفعة أولي',
        installment: '24',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '50',
        lat: 41.051130,
        lng: 28.833099,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 675000
                },
                maxPrice: {
                    TRY: 690000
                },
                minArea: '78',
                maxArea: '100',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557664672/regent-react-real-estate-app/IST%201409/fp11.jpg'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 950000
                },
                maxPrice: {
                    TRY: 995000
                },
                minArea: '114',
                maxArea: '120',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557664672/regent-react-real-estate-app/IST%201409/fp21.jpg'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557663398/regent-react-real-estate-app/IST%201409/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557663395/regent-react-real-estate-app/IST%201409/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557663379/regent-react-real-estate-app/IST%201409/e3.jpg',
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557663373/regent-react-real-estate-app/IST%201409/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557663394/regent-react-real-estate-app/IST%201409/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557663397/regent-react-real-estate-app/IST%201409/i3.jpg'
        ]
    },
    {
        id: '1601',
        description: "We present to you our new luxurious project which is located in one of istanbul's most active and vibrate location which is büyükçekmece. This amazing project is located directly by the sea. Few steps and you will be on the shore, with an incredible moder architecture. This project has one of the best views Istanbul has to offer. The location of this project has made it one of the best in Istanbul. A combination between peace of mind, incredible view and modern architecture",
        descriptionAr: 'نقدم لكم مشروعنا الجديد الراقي كيان 107 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيوكشكمجة، بما أنك بموقع يُمكنك من لمس البحر بمجرد مد يدك، فقد دفع المصممين لعمل تصميم معماري يليق بذلك الموقع والمفهوم. التحديات التي تفرضها بنية الأرض وتضاريسها الصعبة جعل المصممين يستفيدوا منها من حيث تحويلها الي قيمة إضافية لها وجعلها تنحدر كلما اقتربنا من مستوى سطح البحر كما وفَّرنا مساحات مفتوحة كبيرة قادرة على إثبات إطلالة البحر الخلابة في أكبر نسبةٍ من المشروع. مشروع   Cayan107 سيصبح مركزا حيويا هاما ونقطة التقاء للمنطقة مع منطقة معيشة على جانب البحر. بإختصار، هذا المشروع جمع بين هدوء و سكون الساحل و التصميم المعماري الذي يعكس الروح الحديثة في قلب الطبيعة الهادئة.',
        descriptionShortAr: 'يقع المشروع في حياً ساحلياً عصرياً بعيد عن مدي تعقيد اسطنبول حيث يشدد دائماً علي التناغم مع محيطه الحديث و الجديد',
        descriptionShort: 'The project is located in a modern coastal neighborhood far from the complexity of Istanbul, where always emphasizes the harmony with the modern environment',
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
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 537000
                },
                maxPrice: {
                    TRY: 621000
                },
                minArea: '69',
                maxArea: '84',
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/1_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/2_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/3_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/4_1.jpg'
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
                plan: 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/5_1.jpg'
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
        id: '1903',
        description: "We present to you our new luxurious project which is located in one of istanbul's most active and vibrate location which is büyükçekmece. This amazing project is located directly by the sea. Few steps and you will be on the shore, with an incredible moder architecture. This project has one of the best views Istanbul has to offer. The location of this project has made it one of the best in Istanbul. A combination between peace of mind, incredible view and modern architecture",
        descriptionAr: 'نقدم لكم مشروعنا الجديد الراقي كيان 107 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيوكشكمجة، بما أنك بموقع يُمكنك من لمس البحر بمجرد مد يدك، فقد دفع المصممين لعمل تصميم معماري يليق بذلك الموقع والمفهوم. التحديات التي تفرضها بنية الأرض وتضاريسها الصعبة جعل المصممين يستفيدوا منها من حيث تحويلها الي قيمة إضافية لها وجعلها تنحدر كلما اقتربنا من مستوى سطح البحر كما وفَّرنا مساحات مفتوحة كبيرة قادرة على إثبات إطلالة البحر الخلابة في أكبر نسبةٍ من المشروع. مشروع   Cayan107 سيصبح مركزا حيويا هاما ونقطة التقاء للمنطقة مع منطقة معيشة على جانب البحر. بإختصار، هذا المشروع جمع بين هدوء و سكون الساحل و التصميم المعماري الذي يعكس الروح الحديثة في قلب الطبيعة الهادئة.',
        descriptionShortAr: 'سيصبح البحر جزءاً من حياتك اليومية ، جميع نغمات اللون الأزرق و الهواء البحري مع غروب الشمس',
        descriptionShort: 'The sea will become part of your daily life, all the blue color and coastal air with the sunset will be all yours.',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 954000
        },
        priceMax: {
            TRY: 10514000
        },
        distances: {
            taksim: '8.7 KM',
            metro: '1.6 KM',
            metrobus: '2.5 KM',
            sultan: '8.7 KM',
            ataturk: '24 KM',
            newairport: '34 KM',
            beach: '0 KM',
            tem: '6 KM'
        },
        area: '53m - 437m',
        name: 'Buyukyali',
        location: 'Zeytinburnu, Istanbul',
        locationAr: 'زيتون بورنو ، اسطنبول',
        status: '30% Down Payment',
        statusAr: '30٪ دفعة أولي',
        installment: '24',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '30',
        lat: 40.986347,
        lng: 28.882798,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 954000
                },
                maxPrice: {
                    TRY: 2520000
                },
                minArea: '53',
                maxArea: '133',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553941002/regent-react-real-estate-app/IST%201902/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 1796000
                },
                maxPrice: {
                    TRY: 6210000
                },
                minArea: '103',
                maxArea: '223',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553942251/regent-react-real-estate-app/IST%201903/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 3065000
                },
                maxPrice: {
                    TRY: 9655000
                },
                minArea: '155',
                maxArea: '345',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553942981/regent-react-real-estate-app/IST%201903/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 4160000
                },
                maxPrice: {
                    TRY: 10514000
                },
                minArea: '208',
                maxArea: '437',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553942977/regent-react-real-estate-app/IST%201903/fp41.jpg'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553942257/regent-react-real-estate-app/IST%201903/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553942253/regent-react-real-estate-app/IST%201903/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553942261/regent-react-real-estate-app/IST%201903/e3.jpg'
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553942267/regent-react-real-estate-app/IST%201903/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553942268/regent-react-real-estate-app/IST%201903/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553942263/regent-react-real-estate-app/IST%201903/i3.jpg'
        ]
    },
    {
        id: '1905',
        description: "We present to you our new luxurious project which is located in one of istanbul's most active and vibrate location which is büyükçekmece. This amazing project is located directly by the sea. Few steps and you will be on the shore, with an incredible moder architecture. This project has one of the best views Istanbul has to offer. The location of this project has made it one of the best in Istanbul. A combination between peace of mind, incredible view and modern architecture",
        descriptionAr: 'نقدم لكم مشروعنا الجديد الراقي كيان 107 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيوكشكمجة، بما أنك بموقع يُمكنك من لمس البحر بمجرد مد يدك، فقد دفع المصممين لعمل تصميم معماري يليق بذلك الموقع والمفهوم. التحديات التي تفرضها بنية الأرض وتضاريسها الصعبة جعل المصممين يستفيدوا منها من حيث تحويلها الي قيمة إضافية لها وجعلها تنحدر كلما اقتربنا من مستوى سطح البحر كما وفَّرنا مساحات مفتوحة كبيرة قادرة على إثبات إطلالة البحر الخلابة في أكبر نسبةٍ من المشروع. مشروع   Cayan107 سيصبح مركزا حيويا هاما ونقطة التقاء للمنطقة مع منطقة معيشة على جانب البحر. بإختصار، هذا المشروع جمع بين هدوء و سكون الساحل و التصميم المعماري الذي يعكس الروح الحديثة في قلب الطبيعة الهادئة.',
        descriptionShortAr: 'مركز معيشة متميز يحمل جودة حياتكم إلى القمة مع العمارة غير العادية على شاطئ البحر',
        descriptionShort: 'Exceptional living experience where high quality living is the only standard here.',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 1440000
        },
        priceMax: {
            TRY: 12056000
        },
        distances: {
            taksim: '8.7 KM',
            metro: '1.6 KM',
            metrobus: '2.5 KM',
            sultan: '8.7 KM',
            ataturk: '24 KM',
            newairport: '34 KM',
            beach: '0 KM',
            tem: '6.5 KM'
        },
        area: '72m - 392m',
        name: 'Yedi Mavi',
        location: 'Zeytinburnu, Istanbul',
        locationAr: 'زيتون بورنو ، اسطنبول',
        status: '35% Down Payment',
        statusAr: '35٪ دفعة أولي',
        installment: '24',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '35',
        lat: 40.997119,
        lng: 28.909713,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 1440000
                },
                maxPrice: {
                    TRY: 2164000
                },
                minArea: '72',
                maxArea: '87',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553943647/regent-react-real-estate-app/IST%201905/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 2739000
                },
                maxPrice: {
                    TRY: 5648000
                },
                minArea: '118',
                maxArea: '220',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553943647/regent-react-real-estate-app/IST%201905/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 3230000
                },
                maxPrice: {
                    TRY: 7934000
                },
                minArea: '143',
                maxArea: '302',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553943676/regent-react-real-estate-app/IST%201905/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 6284000
                },
                maxPrice: {
                    TRY: 12056000
                },
                minArea: '254',
                maxArea: '392',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553943675/regent-react-real-estate-app/IST%201905/fp41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553943645/regent-react-real-estate-app/IST%201905/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553943655/regent-react-real-estate-app/IST%201905/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553943664/regent-react-real-estate-app/IST%201905/e3.jpg'
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553943670/regent-react-real-estate-app/IST%201905/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553943662/regent-react-real-estate-app/IST%201905/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553943679/regent-react-real-estate-app/IST%201905/i3.jpg'
        ]
    },
    {
        id: '2003',
        description: "We present to you our new luxurious project which is located in one of istanbul's most active and vibrate location which is büyükçekmece. This amazing project is located directly by the sea. Few steps and you will be on the shore, with an incredible moder architecture. This project has one of the best views Istanbul has to offer. The location of this project has made it one of the best in Istanbul. A combination between peace of mind, incredible view and modern architecture",
        descriptionAr: 'نقدم لكم مشروعنا الجديد الراقي كيان 107 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيوكشكمجة، بما أنك بموقع يُمكنك من لمس البحر بمجرد مد يدك، فقد دفع المصممين لعمل تصميم معماري يليق بذلك الموقع والمفهوم. التحديات التي تفرضها بنية الأرض وتضاريسها الصعبة جعل المصممين يستفيدوا منها من حيث تحويلها الي قيمة إضافية لها وجعلها تنحدر كلما اقتربنا من مستوى سطح البحر كما وفَّرنا مساحات مفتوحة كبيرة قادرة على إثبات إطلالة البحر الخلابة في أكبر نسبةٍ من المشروع. مشروع   Cayan107 سيصبح مركزا حيويا هاما ونقطة التقاء للمنطقة مع منطقة معيشة على جانب البحر. بإختصار، هذا المشروع جمع بين هدوء و سكون الساحل و التصميم المعماري الذي يعكس الروح الحديثة في قلب الطبيعة الهادئة.',
        descriptionShortAr: 'يقع المشروع وسط المدينة حيث تستطيعون الوصول الى اي مكان تريدونه خلال دقائق معدودة',
        descriptionShort: 'The project located in the center of the city in which you can reach anywhere you want in just few minutes.',
        typesAll: '1+1, 2+1',
        priceMin: {
            TRY: 422000
        },
        priceMax: {
            TRY: 1181000
        },
        distances: {
            taksim: '8.7 KM',
            metro: '1.6 KM',
            metrobus: '2.7 KM',
            sultan: '8.7 KM',
            ataturk: '24 KM',
            newairport: '34 KM',
            beach: '0 KM',
            tem: '2.7 KM'
        },
        area: '56m - 162m',
        name: 'Nef Ortayaka',
        location: 'Eyüp, Istanbul',
        locationAr: 'ايوب ، اسطنبول',
        status: '30% Down Payment',
        statusAr: '30٪ دفعة أولي',
        installment: '36',
        deliveryDate: '2021',
        deliveryDateAr: '2021',
        downPayment: '30',
        lat: 41.062092,
        lng: 28.897033,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 422000
                },
                maxPrice: {
                    TRY: 626000
                },
                minArea: '56',
                maxArea: '86',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553949512/IST%202202/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 704000
                },
                maxPrice: {
                    TRY: 1181000
                },
                minArea: '105',
                maxArea: '162',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553949509/IST%202202/fp21.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553949547/IST%202202/e1.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553949594/IST%202202/e2.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553949604/IST%202202/e3.png'
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553949559/IST%202202/i1.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553949600/IST%202202/i2.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553949581/IST%202202/i3.png'
        ]
    },
    {
        id: '2103',
        description: "We present to you our new luxurious project which is located in one of istanbul's most active and vibrate location which is büyükçekmece. This amazing project is located directly by the sea. Few steps and you will be on the shore, with an incredible moder architecture. This project has one of the best views Istanbul has to offer. The location of this project has made it one of the best in Istanbul. A combination between peace of mind, incredible view and modern architecture",
        descriptionAr: 'نقدم لكم مشروعنا الجديد الراقي كيان 107 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيوكشكمجة، بما أنك بموقع يُمكنك من لمس البحر بمجرد مد يدك، فقد دفع المصممين لعمل تصميم معماري يليق بذلك الموقع والمفهوم. التحديات التي تفرضها بنية الأرض وتضاريسها الصعبة جعل المصممين يستفيدوا منها من حيث تحويلها الي قيمة إضافية لها وجعلها تنحدر كلما اقتربنا من مستوى سطح البحر كما وفَّرنا مساحات مفتوحة كبيرة قادرة على إثبات إطلالة البحر الخلابة في أكبر نسبةٍ من المشروع. مشروع   Cayan107 سيصبح مركزا حيويا هاما ونقطة التقاء للمنطقة مع منطقة معيشة على جانب البحر. بإختصار، هذا المشروع جمع بين هدوء و سكون الساحل و التصميم المعماري الذي يعكس الروح الحديثة في قلب الطبيعة الهادئة.',
        descriptionShortAr: 'يقع المشروع في المنطقة الأكثر شهرة و رقي في اسطنبول ، منطقة بومونتي الآخذة بالنمو والتي تجذب اهتمام المستثمرين',
        descriptionShort: 'The project located in the most famous and growing area in Istanbul, that attract big number of investors.',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 949000
        },
        priceMax: {
            TRY: 5531000
        },
        distances: {
            taksim: '8.7 KM',
            metro: '1.6 KM',
            metrobus: '4.5 KM',
            sultan: '8.7 KM',
            ataturk: '24 KM',
            newairport: '34 KM',
            beach: '0 KM',
            tem: '0.5 KM'
        },
        area: '64m - 242m',
        name: 'Nida Park',
        location: 'Şişli, Istanbul',
        locationAr: 'شيشلي ، اسطنبول',
        status: '50% Down Payment',
        statusAr: '50٪ دفعة أولي',
        installment: '30',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '50',
        lat: 41.106744,
        lng: 29.011570,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 949000
                },
                maxPrice: {
                    TRY: 1500000
                },
                minArea: '64',
                maxArea: '115',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553946989/regent-react-real-estate-app/IST%202103/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 1523000
                },
                maxPrice: {
                    TRY: 2414000
                },
                minArea: '98',
                maxArea: '138',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553946979/regent-react-real-estate-app/IST%202103/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 2788000
                },
                maxPrice: {
                    TRY: 3826000
                },
                minArea: '163',
                maxArea: '186',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553946962/regent-react-real-estate-app/IST%202103/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 5228000
                },
                maxPrice: {
                    TRY: 5531000
                },
                minArea: '241',
                maxArea: '242',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553946962/regent-react-real-estate-app/IST%202103/fp31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1560107499/regent-react-real-estate-app/IST%202103/hero.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553946991/regent-react-real-estate-app/IST%202103/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553946993/regent-react-real-estate-app/IST%202103/e3.jpg'
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945421/regent-react-real-estate-app/IST%202102/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945406/regent-react-real-estate-app/IST%202102/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945412/regent-react-real-estate-app/IST%202102/i3.jpg'
        ]
    },
    {
        id: '2303',
        description: "We present to you our new luxurious project which is located in one of istanbul's most active and vibrate location which is büyükçekmece. This amazing project is located directly by the sea. Few steps and you will be on the shore, with an incredible moder architecture. This project has one of the best views Istanbul has to offer. The location of this project has made it one of the best in Istanbul. A combination between peace of mind, incredible view and modern architecture",
        descriptionAr: 'نقدم لكم مشروعنا الجديد الراقي كيان 107 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيوكشكمجة، بما أنك بموقع يُمكنك من لمس البحر بمجرد مد يدك، فقد دفع المصممين لعمل تصميم معماري يليق بذلك الموقع والمفهوم. التحديات التي تفرضها بنية الأرض وتضاريسها الصعبة جعل المصممين يستفيدوا منها من حيث تحويلها الي قيمة إضافية لها وجعلها تنحدر كلما اقتربنا من مستوى سطح البحر كما وفَّرنا مساحات مفتوحة كبيرة قادرة على إثبات إطلالة البحر الخلابة في أكبر نسبةٍ من المشروع. مشروع   Cayan107 سيصبح مركزا حيويا هاما ونقطة التقاء للمنطقة مع منطقة معيشة على جانب البحر. بإختصار، هذا المشروع جمع بين هدوء و سكون الساحل و التصميم المعماري الذي يعكس الروح الحديثة في قلب الطبيعة الهادئة.',
        descriptionShortAr: 'يقدم المشروع المناطق الترفيهية الفريدة من نوعها في المدينة مثل نهر سادباد حيث يتدفق مباشرة أمام المشروع',
        descriptionShort: 'The project provides exceptional and unique entertainment possibilities like Sadabad river that runs just infront of the project.',
        typesAll: '1+1, 2+1, 3+1',
        priceMin: {
            TRY: 707000
        },
        priceMax: {
            TRY: 992000
        },
        distances: {
            taksim: '8.7 KM',
            metro: '1.6 KM',
            metrobus: '3 KM',
            sultan: '8.7 KM',
            ataturk: '24 KM',
            newairport: '34 KM',
            beach: '0 KM',
            tem: '0.5 KM'
        },
        area: '61m - 181m',
        name: 'Kordon Istanbul',
        location: 'Maslak, Istanbul',
        locationAr: 'مسلك ، اسطنبول',
        status: '25% Down Payment',
        statusAr: '25٪ دفعة أولي',
        installment: '40',
        deliveryDate: '2019',
        deliveryDateAr: '2019',
        downPayment: '25',
        lat: 41.089444,
        lng: 28.992123,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 707000
                },
                maxPrice: {
                    TRY: 992000
                },
                minArea: '61',
                maxArea: '85',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945386/regent-react-real-estate-app/IST%202102/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 1124000
                },
                maxPrice: {
                    TRY: 1612000
                },
                minArea: '113',
                maxArea: '139',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945415/regent-react-real-estate-app/IST%202102/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 1733000
                },
                maxPrice: {
                    TRY: 1902000
                },
                minArea: '156',
                maxArea: '167',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945389/regent-react-real-estate-app/IST%202102/fp31.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945388/regent-react-real-estate-app/IST%202102/e1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945422/regent-react-real-estate-app/IST%202102/e2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945407/regent-react-real-estate-app/IST%202102/e3.jpg'
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945421/regent-react-real-estate-app/IST%202102/i1.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945406/regent-react-real-estate-app/IST%202102/i2.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553945412/regent-react-real-estate-app/IST%202102/i3.jpg'
        ]
    },
    {
        id: '2602',
        description: "We present to you our new luxurious project which is located in one of istanbul's most active and vibrate location which is büyükçekmece. This amazing project is located directly by the sea. Few steps and you will be on the shore, with an incredible moder architecture. This project has one of the best views Istanbul has to offer. The location of this project has made it one of the best in Istanbul. A combination between peace of mind, incredible view and modern architecture",
        descriptionAr: 'نقدم لكم مشروعنا الجديد الراقي كيان 107 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيوكشكمجة، بما أنك بموقع يُمكنك من لمس البحر بمجرد مد يدك، فقد دفع المصممين لعمل تصميم معماري يليق بذلك الموقع والمفهوم. التحديات التي تفرضها بنية الأرض وتضاريسها الصعبة جعل المصممين يستفيدوا منها من حيث تحويلها الي قيمة إضافية لها وجعلها تنحدر كلما اقتربنا من مستوى سطح البحر كما وفَّرنا مساحات مفتوحة كبيرة قادرة على إثبات إطلالة البحر الخلابة في أكبر نسبةٍ من المشروع. مشروع   Cayan107 سيصبح مركزا حيويا هاما ونقطة التقاء للمنطقة مع منطقة معيشة على جانب البحر. بإختصار، هذا المشروع جمع بين هدوء و سكون الساحل و التصميم المعماري الذي يعكس الروح الحديثة في قلب الطبيعة الهادئة.',
        descriptionShortAr: 'يقع المشروع في ارقى منطقة في افجيلار حيث تتمتع بكافة الخدمات و وسائل النقل المتعددة',
        descriptionShort: 'The project located in Avcılar, Where everything you will need is one step away from your home.',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 469000
        },
        priceMax: {
            TRY: 1200000
        },
        distances: {
            taksim: '8.7 KM',
            metro: '1.6 KM',
            metrobus: '2 KM',
            sultan: '8.7 KM',
            ataturk: '24 KM',
            newairport: '34 KM',
            beach: '0 KM',
            tem: '4 KM'
        },
        area: '74m - 210m',
        name: 'Firuze Konakları',
        location: 'Avcılar, Istanbul',
        locationAr: 'افجيلار ، اسطنبول',
        status: '35% Down Payment',
        statusAr: '35٪ دفعة أولي',
        installment: '36',
        deliveryDate: 'Ready',
        deliveryDateAr: 'جاهز',
        downPayment: '35',
        lat: 41.017622,
        lng: 28.691323,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 469000
                },
                maxPrice: {
                    TRY: 600000
                },
                minArea: '74',
                maxArea: '100',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557662032/regent-react-real-estate-app/IST%202602/fp11-min.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 649000
                },
                maxPrice: {
                    TRY: 900000
                },
                minArea: '113',
                maxArea: '150',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557662032/regent-react-real-estate-app/IST%202602/fp21-min.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 989000
                },
                maxPrice: {
                    TRY: 1100000
                },
                minArea: '175',
                maxArea: '190',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557662044/regent-react-real-estate-app/IST%202602/fp31-min.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 1139000
                },
                maxPrice: {
                    TRY: 1200000
                },
                minArea: '196',
                maxArea: '210',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557662201/regent-react-real-estate-app/IST%202602/fp41-min.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557660413/regent-react-real-estate-app/IST%202602/e1-min.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557660425/regent-react-real-estate-app/IST%202602/e2-min.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557660417/regent-react-real-estate-app/IST%202602/e3-min.jpg'
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557660400/regent-react-real-estate-app/IST%202602/i1-min.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557660404/regent-react-real-estate-app/IST%202602/i2-min.jpg',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1557660408/regent-react-real-estate-app/IST%202602/i3-min.jpg'
        ]
    },
    {
        id: '2901',
        description: "We present to you our new luxurious project which is located in one of istanbul's most active and vibrate location which is büyükçekmece. This amazing project is located directly by the sea. Few steps and you will be on the shore, with an incredible moder architecture. This project has one of the best views Istanbul has to offer. The location of this project has made it one of the best in Istanbul. A combination between peace of mind, incredible view and modern architecture",
        descriptionAr: 'نقدم لكم مشروعنا الجديد الراقي كيان 107 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيوكشكمجة، بما أنك بموقع يُمكنك من لمس البحر بمجرد مد يدك، فقد دفع المصممين لعمل تصميم معماري يليق بذلك الموقع والمفهوم. التحديات التي تفرضها بنية الأرض وتضاريسها الصعبة جعل المصممين يستفيدوا منها من حيث تحويلها الي قيمة إضافية لها وجعلها تنحدر كلما اقتربنا من مستوى سطح البحر كما وفَّرنا مساحات مفتوحة كبيرة قادرة على إثبات إطلالة البحر الخلابة في أكبر نسبةٍ من المشروع. مشروع   Cayan107 سيصبح مركزا حيويا هاما ونقطة التقاء للمنطقة مع منطقة معيشة على جانب البحر. بإختصار، هذا المشروع جمع بين هدوء و سكون الساحل و التصميم المعماري الذي يعكس الروح الحديثة في قلب الطبيعة الهادئة.',
        descriptionShortAr: 'يتميز المشروع بخاصية الغرف المتعددة الاستخدامات لرفاهية مطلقة و حياة خيالية',
        descriptionShort: 'Folding home project in which you can enjoy living in luxury and high quality living.',
        typesAll: '1+1, 2+1, 3+1, 4+1',
        priceMin: {
            TRY: 700000
        },
        priceMax: {
            TRY: 3348000
        },
        distances: {
            taksim: '8.7 KM',
            metro: '1.6 KM',
            metrobus: '1 KM',
            sultan: '8.6 KM',
            ataturk: '24 KM',
            newairport: '34 KM',
            beach: '0 KM',
            tem: '4.5 KM'
        },
        area: '97m - 290m',
        name: 'Nef Bahçelievler',
        location: 'Bahçelievler, Istanbul',
        locationAr: 'بهشاليفلر ، اسطنبول',
        status: '30% Down Payment',
        statusAr: '30٪ دفعة أولي',
        installment: '48',
        deliveryDate: '2020',
        deliveryDateAr: '2020',
        downPayment: '30',
        lat: 41.001222,
        lng: 28.882112,
        types: [{
                type: '1+1',
                minPrice: {
                    TRY: 700000
                },
                maxPrice: {
                    TRY: 1272000
                },
                minArea: '97',
                maxArea: '121',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553941002/regent-react-real-estate-app/IST%201902/fp11.png'
            },
            {
                type: '2+1',
                minPrice: {
                    TRY: 1055000
                },
                maxPrice: {
                    TRY: 2038000
                },
                minArea: '103',
                maxArea: '185',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553941082/regent-react-real-estate-app/IST%201902/fp21.png'
            },
            {
                type: '3+1',
                minPrice: {
                    TRY: 1482000
                },
                maxPrice: {
                    TRY: 2537000
                },
                minArea: '151',
                maxArea: '246',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553941006/regent-react-real-estate-app/IST%201902/fp31.png'
            },
            {
                type: '4+1',
                minPrice: {
                    TRY: 2054000
                },
                maxPrice: {
                    TRY: 3348000
                },
                minArea: '217',
                maxArea: '290',
                plan: 'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553940948/regent-react-real-estate-app/IST%201902/fp41.png'
            }
        ],
        images: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553941029/regent-react-real-estate-app/IST%201902/e1.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553940943/regent-react-real-estate-app/IST%201902/e2.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553941018/regent-react-real-estate-app/IST%201902/e3.png'
        ],
        interior: [
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553940980/regent-react-real-estate-app/IST%201902/i1.png',
            'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1553940998/regent-react-real-estate-app/IST%201902/i2.png'
        ]
    }
];

const addCurrencies = projects => {
    // const res = await fetch('https://openexchangerates.org/api/latest.json?app_id=ec60cf523d0f4912bc160406c1703489').then(res => res.json())
    // console.log('api')
    // console.log(res)

    fx.rates = {
        USD: 0.18,
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