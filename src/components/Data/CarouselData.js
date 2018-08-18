import fx from 'money';
import { map } from 'lodash';

const rawProjects = [
  {
    id: '1001',
    description:
      'Apartments for sale with installments in an amazing project in Istanbul inpsired by Italian architecture in Bahcesehir, Istanbul.',
    descriptionAr:
      'شقق للبيع في اسطنبول بالتقسيط في مشروع سكني استثماري قيد انشاء بتصميم جميل مستوحى من المدن الإيطالية في بهشاشهير / اسطنبول',
    types: '1+1, 2+1, 3+1, 4+1',
    area: '67m - 269m',
    priceMin: {
      TRY: 360000
    },
    priceMax: {
      TRY: 784000
    },
    location: 'Bahçeşehir, Istanbul',
    locationAr: ' بهشة شهير، اسطنبول ',
    status: '20% Down Payment',
    statusAr: '20٪ دفعة أولي',
    installment: '36',
    deliveryDate: '2018 - 2019',
    deliveryDateAr: '2018 - 2019',
    downPayment: '25',
    images:
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534242431/IST%201001/galeri-09.jpg'
  },
  {
    id: '1201',
    description:
      'Luxury villas and apartments for sale under construction with installments with an incredible sea view in Istanbul.',
    descriptionAr:
      'شقق وفلل فاخرة قيد انشاء بل التقسيط  باطلالة بحرية رائعة في اسطنبول / بيوك شكمجة',
    types: '1+1, 2+1, 3+1, 4+1',
    area: '60m - 199m',
    priceMin: {
      TRY: 585000
    },
    priceMax: {
      TRY: 1969000
    },
    location: 'Beylikduzu, Istanbul',
    locationAr: 'بيليك دوزو',
    status: '25% Down Payment',
    statusAr: '25٪ دفعة أولي',
    installment: '24',
    deliveryDate: '2019',
    deliveryDateAr: '2019',
    downPayment: '25',
    images:
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534243447/IST%201201/1201-1.jpg'
  },
  {
    id: '1601',
    description:
      'We present to you our new and special project located in Ayoub area. This project has been designed by an award winning architecture firm. It reflects the historical and modern beauty of Istanbul. ',
    descriptionAr:
      'نقدم لكم مشروعنا الجديد والمميز الذي يقع في منطقة ايوب وتم تصميمه من قبل المكتب المعماري الحائز على جائزة التاغو هذا المشروع يعكس الملمس التاريخي وجماليات اسطنبول.',
    types: '1+1, 2+1, 3+1, 4+1',
    area: '69m - 196m',
    priceMin: {
      TRY: 537000
    },
    priceMax: {
      TRY: 1194000
    },
    location: 'Buyukcekmece, Istanbul',
    locationAr: 'بيوك شكمجة',
    status: '35% Down Payment',
    statusAr: '35٪ دفعة أولي',
    installment: '24',
    deliveryDate: '2019',
    deliveryDateAr: '2019',
    downPayment: '35',
    images:
      'https://res.cloudinary.com/dd5e5iszi/image/upload/q_auto:eco/v1522153916/projects/cayan-128/10.jpg'
  },
  {
    id: '1101',
    description:
      'The project is located on the shore of marmara sea in beautiful Beylikduzu it is few minutes away from the heyway E5 which is considered one of the most important roads connecting different parts of istanbul.',
    descriptionAr:
      'وجود المشروع على شاطئ بحر مرمرة في منطقة بيليك دوزو الراقية، وقربه من الطريق السريعE5 الذي يٌعتبر عصب مدينة إسطنبول، جعله من أهم فرصالاستثمار في اسطنبولا.',
    types: '2+1, 3+1',
    area: '91m - 143m',
    priceMin: {
      TRY: 366000
    },
    priceMax: {
      TRY: 512000
    },
    location: 'Esenyurt, Istanbul',
    locationAr: 'اسينيورت',
    status: '50% Down Payment',
    statusAr: '50٪ دفعة أولي',
    installment: '36',
    deliveryDate: '2018 - 2020',
    deliveryDateAr: '2018 - 2020',
    downPayment: '50',
    images:
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534244977/IST%201101/Yuksekdag2.jpg'
  },

  {
    id: '1005',
    description:
      "Basaksehir is one of the newly built neighborhoods in Istanbul which attracts local and foreign investors for it's modern architecture and it's special location.",
    descriptionAr:
      'شقق للبيع في اسطنبول مضمونة من قبل الحكومة التركية بالتقسيط قرب محطة المترو في باشاك شهير / اسطنبول',
    types: '1+1, 2+1, 3+1',
    area: '65m - 176m',
    priceMin: {
      TRY: 377000
    },
    priceMax: {
      TRY: 1017000
    },
    location: 'Bahcesehir, Istanbul',
    locationAr: 'بهشاشهير ',
    status: '35% Down Payment',
    statusAr: '35٪ دفعة أولي',
    installment: '36',
    deliveryDate: '2019',
    deliveryDateAr: '2019',
    downPayment: '35',
    images:
      'https://res.cloudinary.com/dgfb9ldfx/image/upload/v1534246419/IST%201005/1005-1.jpg'
  }
];

const addCurrencies = projects => {
  // const res = await fetch('https://openexchangerates.org/api/latest.json?app_id=ec60cf523d0f4912bc160406c1703489').then(res => res.json())
  // console.log('api')
  // console.log(res)

  fx.rates = {
    USD: 0.21,
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
      fx.convert(project.priceMin.TRY, { from: 'TRY', to: 'USD' })
    );
    project.priceMax.USD = Math.ceil(
      fx.convert(project.priceMax.TRY, { from: 'TRY', to: 'USD' })
    );

    project.priceMin.AED = Math.ceil(
      fx.convert(project.priceMin.TRY, { from: 'TRY', to: 'AED' })
    );
    project.priceMax.AED = Math.ceil(
      fx.convert(project.priceMax.TRY, { from: 'TRY', to: 'AED' })
    );

    project.priceMin.SAR = Math.ceil(
      fx.convert(project.priceMin.TRY, { from: 'TRY', to: 'SAR' })
    );
    project.priceMax.SAR = Math.ceil(
      fx.convert(project.priceMax.TRY, { from: 'TRY', to: 'SAR' })
    );

    project.priceMin.KWD = Math.ceil(
      fx.convert(project.priceMin.TRY, { from: 'TRY', to: 'KWD' })
    );
    project.priceMax.KWD = Math.ceil(
      fx.convert(project.priceMax.TRY, { from: 'TRY', to: 'KWD' })
    );

    project.priceMin.QAR = Math.ceil(
      fx.convert(project.priceMin.TRY, { from: 'TRY', to: 'QAR' })
    );
    project.priceMax.QAR = Math.ceil(
      fx.convert(project.priceMax.TRY, { from: 'TRY', to: 'QAR' })
    );

    project.priceMin.OMR = Math.ceil(
      fx.convert(project.priceMin.TRY, { from: 'TRY', to: 'OMR' })
    );
    project.priceMax.OMR = Math.ceil(
      fx.convert(project.priceMax.TRY, { from: 'TRY', to: 'OMR' })
    );

    project.priceMin.BHD = Math.ceil(
      fx.convert(project.priceMin.TRY, { from: 'TRY', to: 'BHD' })
    );
    project.priceMax.BHD = Math.ceil(
      fx.convert(project.priceMax.TRY, { from: 'TRY', to: 'BHD' })
    );

    project.priceMin.EUR = Math.ceil(
      fx.convert(project.priceMin.TRY, { from: 'TRY', to: 'EUR' })
    );
    project.priceMax.EUR = Math.ceil(
      fx.convert(project.priceMax.TRY, { from: 'TRY', to: 'EUR' })
    );

    project.priceMin.GBP = Math.ceil(
      fx.convert(project.priceMin.TRY, { from: 'TRY', to: 'GBP' })
    );
    project.priceMax.GBP = Math.ceil(
      fx.convert(project.priceMax.TRY, { from: 'TRY', to: 'GBP' })
    );

    return project;
  });
  return returnValue;
};

const projects = addCurrencies(rawProjects);
export { projects };

export default projects;
