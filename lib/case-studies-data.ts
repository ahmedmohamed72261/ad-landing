export interface CaseStudy {
  id: string
  title: string
  company: string
  category: string
  description: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  image: string
  tags: string[]
  duration: string
  budget: string
  slug: string
  clientName: string
  englishTitle: string
  subtitle: string
  heroIcon: any
  aboutClient: string
  challenges: string[]
  strategy: string[]
  conclusion: string
}

export const caseStudies: CaseStudy[] = [
  // التجارة الإلكترونية - 6 حالات
  {
    id: "fashion-store-1", // Updated ID
    slug: "fashion-store-1", // Updated Slug
    title: "متجر أزياء نسائية يحقق نمو 340% في المبيعات",
    clientName: "متجر الأناقة العصرية",
    englishTitle: "FASHION ECOMMERCE SUCCESS",
    subtitle: "كيف حققنا نمو 340% في مبيعات الأزياء النسائية",
    company: "متجر الأناقة العصرية",
    category: "التجارة الإلكترونية",
    description: "متجر أزياء نسائية متخصص في الملابس العصرية والإكسسوارات",
    aboutClient: "متجر متخصص في الأزياء النسائية العصرية يستهدف الفئة العمرية 25-40",
    challenge: "انخفاض المبيعات وضعف الوصول للعملاء المستهدفين رغم جودة المنتجات",
    challenges: ["ضعف الوصول للجمهور المستهدف", "منافسة شديدة في السوق", "تكلفة اكتساب عملاء مرتفعة"],
    solution: "حملة إعلانية متكاملة عبر فيسبوك وإنستغرام مع استهداف دقيق للفئة العمرية 25-40",
    strategy: ["استهداف دقيق للفئة العمرية المناسبة", "محتوى بصري جذاب", "حملات إعادة استهداف"],
    results: [
      { metric: "زيادة المبيعات", value: "340%", improvement: "من 50,000 إلى 220,000 ريال شهرياً" },
      { metric: "تكلفة الاكتساب", value: "65%", improvement: "انخفاض من 45 إلى 16 ريال لكل عميل" },
      { metric: "معدل التحويل", value: "180%", improvement: "من 2.1% إلى 5.9%" },
    ],
    conclusion: "تحقيق نمو استثنائي في المبيعات مع تحسين كبير في تكلفة اكتساب العملاء",
    testimonial: {
      quote: "لم أتوقع هذه النتائج المذهلة! فريق انطلاقة حول متجري من مشروع صغير إلى علامة تجارية معروفة",
      author: "سارة أحمد",
      position: "مؤسسة متجر الأناقة العصرية",
    },
    image: "/case-studies/fashion-store.jpg",
    tags: ["فيسبوك", "إنستغرام", "أزياء نسائية"],
    duration: "6 أشهر",
    budget: "25,000 ريال",
    heroIcon: null,
  },
  {
    id: "electronics-store-1", // Updated ID
    slug: "electronics-store-1", // Updated Slug
    title: "متجر إلكترونيات يضاعف مبيعاته 5 مرات",
    clientName: "ميجا تك للإلكترونيات",
    englishTitle: "ELECTRONICS ECOMMERCE GROWTH",
    subtitle: "قصة نجاح متجر إلكترونيات حقق نمو 500%",
    company: "ميجا تك للإلكترونيات",
    category: "التجارة الإلكترونية",
    description: "متجر متخصص في الأجهزة الإلكترونية والهواتف الذكية",
    aboutClient: "متجر رائد في بيع الإلكترونيات والأجهزة التقنية",
    challenge: "منافسة قوية من المتاجر الكبيرة",
    challenges: ["منافسة شديدة", "ضعف الثقة بالعلامة التجارية", "تكلفة إعلانية مرتفعة"],
    solution: "حملات جوجل ويوتيوب مع التركيز على المراجعات",
    strategy: ["إعلانات البحث المستهدفة", "محتوى تعليمي", "مراجعات المنتجات"],
    results: [
      { metric: "زيادة المبيعات", value: "500%", improvement: "من 100,000 إلى 600,000 ريال شهرياً" },
      { metric: "زيارات الموقع", value: "400%", improvement: "من 8,000 إلى 40,000 زيارة شهرياً" },
      { metric: "معدل التحويل", value: "150%", improvement: "من 2.5% إلى 6.2%" },
    ],
    conclusion: "تحول من متجر صغير إلى منافس قوي في السوق",
    image: "/case-studies/electronics-mega.jpg",
    tags: ["جوجل", "يوتيوب", "إلكترونيات"],
    duration: "4 أشهر",
    budget: "45,000 ريال",
    heroIcon: null,
  },
  {
    id: "home-decor-store-1", // Updated ID
    slug: "home-decor-store-1", // Updated Slug
    title: "متجر ديكور منزلي يحقق نمو 280% في 3 أشهر",
    clientName: "بيتي الجميل للديكور",
    englishTitle: "HOME DECOR SUCCESS",
    subtitle: "نمو سريع في مجال الديكور المنزلي",
    company: "بيتي الجميل للديكور",
    category: "التجارة الإلكترونية",
    description: "متجر متخصص في الديكور المنزلي والإكسسوارات",
    aboutClient: "متجر يقدم حلول ديكور منزلي عصرية وأنيقة",
    challenge: "صعوبة في الوصول للعملاء المهتمين بالديكور",
    challenges: ["جمهور محدود", "موسمية المبيعات", "تحدي عرض المنتجات بصرياً"],
    solution: "حملات بصرية على إنستغرام وبنترست",
    strategy: ["محتوى بصري عالي الجودة", "استهداف اهتمامات الديكور", "شراكات مع المؤثرين"],
    results: [
      { metric: "زيادة المبيعات", value: "280%", improvement: "من 75,000 إلى 285,000 ريال شهرياً" },
      { metric: "متابعين جدد", value: "600%", improvement: "من 3,000 إلى 21,000 متابع" },
      { metric: "معدل التفاعل", value: "320%", improvement: "من 2.8% إلى 11.8%" },
    ],
    conclusion: "أصبح المتجر مرجعاً في عالم الديكور المنزلي",
    image: "/case-studies/home-decor.jpg",
    tags: ["إنستغرام", "بنترست", "ديكور منزلي"],
    duration: "3 أشهر",
    budget: "30,000 ريال",
    heroIcon: null,
  },

  // المطاعم والضيافة - 6 حالات
  {
    id: "restaurant-chain-1", // Updated ID
    slug: "restaurant-chain-1", // Updated Slug
    title: "سلسلة مطاعم تضاعف عدد الطلبات 3 مرات",
    clientName: "مطاعم الذوق الأصيل",
    englishTitle: "RESTAURANT CHAIN SUCCESS",
    subtitle: "كيف ضاعفنا طلبات سلسلة مطاعم 3 مرات",
    company: "مطاعم الذوق الأصيل",
    category: "المطاعم والضيافة",
    description: "سلسلة مطاعم متخصصة في الأكلات الشعبية والعربية الأصيلة",
    aboutClient: "سلسلة مطاعم تقدم الأكلات التراثية بطعم عصري",
    challenge: "منافسة شديدة في قطاع المطاعم وحاجة لزيادة الطلبات عبر التطبيقات",
    challenges: ["منافسة قوية", "اعتماد على الموقع الجغرافي", "تحدي التوصيل"],
    solution: "حملات إعلانية موسمية مع التركيز على منصات التوصيل وجوجل للبحث المحلي",
    strategy: ["إعلانات محلية مستهدفة", "شراكات مع تطبيقات التوصيل", "عروض موسمية"],
    results: [
      { metric: "زيادة الطلبات", value: "300%", improvement: "من 150 إلى 450 طلب يومياً" },
      { metric: "نمو الإيرادات", value: "250%", improvement: "من 180,000 إلى 630,000 ريال شهرياً" },
      { metric: "عملاء جدد", value: "400%", improvement: "2,400 عميل جديد شهرياً" },
    ],
    conclusion: "تحول إلى علامة تجارية معروفة في قطاع المطاعم",
    testimonial: {
      quote: "الحملات الإعلانية غيرت مسار أعمالنا تماماً. أصبحنا نحتاج لفتح فروع جديدة لتلبية الطلب المتزايد",
      author: "محمد العتيبي",
      position: "مدير عام مطاعم الذوق الأصيل",
    },
    image: "/case-studies/restaurant-chain.jpg",
    tags: ["جوجل", "سناب شات", "مطاعم"],
    duration: "4 أشهر",
    budget: "40,000 ريال",
    heroIcon: null,
  },
  {
    id: "coffee-shop-1", // Updated ID
    slug: "coffee-shop-1", // Updated Slug
    title: "مقهى متخصص يحقق 400% زيادة في الزيارات",
    clientName: "مقهى الأصالة",
    englishTitle: "COFFEE SHOP GROWTH",
    subtitle: "قصة نجاح مقهى محلي أصبح وجهة مفضلة",
    company: "مقهى الأصالة",
    category: "المطاعم والضيافة",
    description: "مقهى متخصص في القهوة العربية والحلويات التراثية",
    aboutClient: "مقهى يقدم تجربة قهوة أصيلة مع أجواء تراثية",
    challenge: "جذب الزبائن في منطقة مزدحمة بالمقاهي",
    challenges: ["منافسة محلية قوية", "جذب الشباب للتراث", "بناء هوية مميزة"],
    solution: "حملات على إنستغرام وسناب شات مع محتوى تراثي عصري",
    strategy: ["محتوى تراثي جذاب", "تعاون مع المؤثرين المحليين", "عروض خاصة"],
    results: [
      { metric: "زيادة الزيارات", value: "400%", improvement: "من 50 إلى 250 زيارة يومياً" },
      { metric: "نمو الإيرادات", value: "350%", improvement: "من 45,000 إلى 202,500 ريال شهرياً" },
      { metric: "متابعين جدد", value: "800%", improvement: "من 1,200 إلى 10,800 متابع" },
    ],
    conclusion: "أصبح المقهى وجهة مفضلة لمحبي القهوة والتراث",
    image: "/case-studies/coffee-shop.jpg",
    tags: ["إنستغرام", "سناب شات", "قهوة"],
    duration: "5 أشهر",
    budget: "25,000 ريال",
    heroIcon: null,
  },
  {
    id: "fast-food-1", // Updated ID
    slug: "fast-food-1", // Updated Slug
    title: "مطعم وجبات سريعة يحقق نمو 600% في التوصيل",
    clientName: "برجر ستيشن",
    englishTitle: "FAST FOOD SUCCESS",
    subtitle: "نمو هائل في قطاع الوجبات السريعة",
    company: "برجر ستيشن",
    category: "المطاعم والضيافة",
    description: "مطعم وجبات سريعة متخصص في البرجر والدجاج المقلي",
    aboutClient: "مطعم عائلي يقدم وجبات سريعة بجودة عالية",
    challenge: "زيادة طلبات التوصيل في ظل المنافسة الشديدة",
    challenges: ["منافسة السلاسل الكبيرة", "سرعة التوصيل", "جودة الطعام عند الوصول"],
    solution: "حملات مكثفة على تطبيقات التوصيل مع عروض جذابة",
    strategy: ["عروض حصرية للتوصيل", "تحسين أوقات التحضير", "برنامج ولاء للعملاء"],
    results: [
      { metric: "زيادة طلبات التوصيل", value: "600%", improvement: "من 80 إلى 560 طلب يومياً" },
      { metric: "نمو الإيرادات", value: "450%", improvement: "من 120,000 إلى 660,000 ريال شهرياً" },
      { metric: "تقييم العملاء", value: "40%", improvement: "من 3.5 إلى 4.9 نجوم" },
    ],
    conclusion: "تحول إلى أحد أشهر مطاعم الوجبات السريعة في المنطقة",
    image: "/case-studies/fast-food.jpg",
    tags: ["تطبيقات التوصيل", "وجبات سريعة", "عروض"],
    duration: "6 أشهر",
    budget: "35,000 ريال",
    heroIcon: null,
  },

  // الصحة والجمال - 6 حالات
  {
    id: "beauty-clinic-1", // Updated ID
    slug: "beauty-clinic-1", // Updated Slug
    title: "عيادة تجميل تحقق 500% زيادة في الحجوزات",
    clientName: "عيادة النضارة للتجميل",
    englishTitle: "BEAUTY CLINIC SUCCESS",
    subtitle: "نمو استثنائي في قطاع التجميل والعناية",
    company: "عيادة النضارة للتجميل",
    category: "الصحة والجمال",
    description: "عيادة متخصصة في علاجات التجميل غير الجراحية والعناية بالبشرة",
    aboutClient: "عيادة رائدة في مجال التجميل غير الجراحي",
    challenge: "صعوبة في الوصول للعملاء المهتمين بخدمات التجميل وبناء الثقة",
    challenges: ["بناء الثقة مع العملاء", "تعليم العملاء عن الخدمات", "منافسة العيادات الكبيرة"],
    solution: "حملة تسويق محتوى مع إعلانات مستهدفة على إنستغرام وسناب شات",
    strategy: ["محتوى تعليمي عن العلاجات", "عرض النتائج قبل وبعد", "شهادات العملاء"],
    results: [
      { metric: "زيادة الحجوزات", value: "500%", improvement: "من 20 إلى 120 حجز شهرياً" },
      { metric: "نمو الإيرادات", value: "420%", improvement: "من 80,000 إلى 416,000 ريال شهرياً" },
      { metric: "متابعين جدد", value: "800%", improvement: "من 2,500 إلى 22,500 متابع" },
    ],
    conclusion: "أصبحت العيادة الأولى في المنطقة لعلاجات التجميل",
    testimonial: {
      quote: "النتائج فاقت كل توقعاتي! أصبحت العيادة مشهورة في المنطقة وقائمة الانتظار ممتلئة لأسابيع",
      author: "د. نورا السالم",
      position: "مديرة عيادة النضارة للتجميل",
    },
    image: "/case-studies/beauty-clinic.jpg",
    tags: ["إنستغرام", "سناب شات", "تجميل"],
    duration: "8 أشهر",
    budget: "35,000 ريال",
    heroIcon: null,
  },
  {
    id: "spa-center-1", // Updated ID
    slug: "spa-center-1", // Updated Slug
    title: "مركز سبا يضاعف عدد العملاء 4 مرات",
    clientName: "سبا الهدوء",
    englishTitle: "SPA WELLNESS SUCCESS",
    subtitle: "نمو مذهل في قطاع الاسترخاء والعافية",
    company: "سبا الهدوء",
    category: "الصحة والجمال",
    description: "مركز سبا متكامل يقدم خدمات الاسترخاء والعلاج الطبيعي",
    aboutClient: "مركز متخصص في العلاجات الطبيعية والاسترخاء",
    challenge: "جذب عملاء جدد في سوق تنافسي",
    challenges: ["تعريف العملاء بفوائد السبا", "بناء قاعدة عملاء مخلصين", "تسعير الخدمات"],
    solution: "حملات استهداف النساء العاملات مع التركيز على فوائد الاسترخاء",
    strategy: ["استهداف النساء العاملات", "عروض باقات شاملة", "برنامج إحالة العملاء"],
    results: [
      { metric: "زيادة العملاء", value: "400%", improvement: "من 60 إلى 300 عميل شهرياً" },
      { metric: "نمو الإيرادات", value: "380%", improvement: "من 95,000 إلى 456,000 ريال شهرياً" },
      { metric: "معدل العودة", value: "250%", improvement: "من 30% إلى 75%" },
    ],
    conclusion: "أصبح المركز الوجهة الأولى للاسترخاء والعافية",
    image: "/case-studies/spa-center.jpg",
    tags: ["فيسبوك", "إنستغرام", "سبا"],
    duration: "7 أشهر",
    budget: "40,000 ريال",
    heroIcon: null,
  },
  {
    id: "cosmetics-store-1", // Updated ID
    slug: "cosmetics-store-1", // Updated Slug
    title: "متجر مستحضرات تجميل يحقق نمو 450%",
    clientName: "جمالك الطبيعي",
    englishTitle: "COSMETICS STORE SUCCESS",
    subtitle: "نجاح باهر في عالم مستحضرات التجميل",
    company: "جمالك الطبيعي",
    category: "الصحة والجمال",
    description: "متجر متخصص في مستحضرات التجميل الطبيعية والعضوية",
    aboutClient: "متجر يركز على المنتجات الطبيعية والآمنة للبشرة",
    challenge: "التميز في سوق مشبع بمنتجات التجميل",
    challenges: ["منافسة العلامات العالمية", "تثقيف العملاء عن المنتجات الطبيعية", "بناء الثقة"],
    solution: "حملات تعليمية مع مراجعات المنتجات وتجارب العملاء",
    strategy: ["محتوى تعليمي عن المكونات", "مراجعات صادقة للمنتجات", "تجارب مجانية"],
    results: [
      { metric: "زيادة المبيعات", value: "450%", improvement: "من 65,000 إلى 357,500 ريال شهرياً" },
      { metric: "عملاء جدد", value: "380%", improvement: "من 200 إلى 960 عميل شهرياً" },
      { metric: "معدل الرضا", value: "60%", improvement: "من 75% إلى 95%" },
    ],
    conclusion: "تحول إلى المتجر المفضل لمحبي المنتجات الطبيعية",
    image: "/case-studies/cosmetics-store.jpg",
    tags: ["يوتيوب", "إنستغرام", "مستحضرات طبيعية"],
    duration: "6 أشهر",
    budget: "32,000 ريال",
    heroIcon: null,
  },

  // الإلكترونيات والتقنية - 3 حالات
  {
    id: "electronics-store-2", // Updated ID to avoid conflict
    slug: "electronics-store-2", // Updated Slug
    title: "متجر إلكترونيات يحقق أعلى مبيعات في تاريخه",
    clientName: "تك ستور للإلكترونيات",
    englishTitle: "ELECTRONICS STORE SUCCESS",
    subtitle: "قفزة نوعية في مبيعات الإلكترونيات",
    company: "تك ستور للإلكترونيات",
    category: "الإلكترونيات والتقنية",
    description: "متجر متخصص في بيع الأجهزة الإلكترونية والإكسسوارات التقنية",
    aboutClient: "متجر رائد في مجال الإلكترونيات والتقنية",
    challenge: "منافسة قوية من المتاجر الكبيرة وحاجة لزيادة الوعي بالعلامة التجارية",
    challenges: ["منافسة المتاجر الكبيرة", "بناء الثقة مع العملاء", "تعقيد المنتجات التقنية"],
    solution: "حملات إعلانية متنوعة عبر جوجل ويوتيوب مع التركيز على المراجعات والمقارنات",
    strategy: ["مراجعات تفصيلية للمنتجات", "مقارنات بين الأجهزة", "دعم فني متميز"],
    results: [
      { metric: "زيادة المبيعات", value: "280%", improvement: "من 300,000 إلى 1,140,000 ريال شهرياً" },
      { metric: "زيارات الموقع", value: "450%", improvement: "من 5,000 إلى 27,500 زيارة شهرياً" },
      { metric: "معدل التحويل", value: "160%", improvement: "من 3.2% إلى 8.3%" },
    ],
    conclusion: "أصبح المتجر منافساً قوياً للمتاجر الكبيرة",
    testimonial: {
      quote: "حققنا أرقام لم نحلم بها من قبل. الحملات الإعلانية جعلتنا ننافس أكبر المتاجر في السوق",
      author: "خالد الراشد",
      position: "مؤسس تك ستور للإلكترونيات",
    },
    image: "/case-studies/electronics-store.jpg",
    tags: ["جوجل", "يوتيوب", "إلكترونيات"],
    duration: "5 أشهر",
    budget: "60,000 ريال",
    heroIcon: null,
  },

  // الصحة واللياقة - 3 حالات
  {
    id: "fitness-center-1", // Updated ID
    slug: "fitness-center-1", // Updated Slug
    title: "نادي رياضي يضاعف عدد الأعضاء 4 مرات",
    clientName: "نادي اللياقة المتقدم",
    englishTitle: "FITNESS CENTER SUCCESS",
    subtitle: "تحول مذهل في عالم اللياقة البدنية",
    company: "نادي اللياقة المتقدم",
    category: "الصحة واللياقة",
    description: "نادي رياضي متكامل يقدم خدمات اللياقة البدنية والتدريب الشخصي",
    aboutClient: "نادي رياضي عائلي يهدف لنشر ثقافة اللياقة البدنية",
    challenge: "انخفاض عدد الأعضاء بعد جائحة كورونا وحاجة لجذب جيل جديد من الرياضيين",
    challenges: ["تأثير الجائحة على الأعضاء", "جذب الشباب للرياضة", "منافسة الأندية الكبيرة"],
    solution: "حملة تسويقية شاملة عبر تيك توك وإنستغرام مع محتوى تحفيزي ومتنوع",
    strategy: ["محتوى تحفيزي يومي", "تحديات رياضية", "قصص نجاح الأعضاء"],
    results: [
      { metric: "زيادة الأعضاء", value: "400%", improvement: "من 200 إلى 1,000 عضو" },
      { metric: "نمو الإيرادات", value: "350%", improvement: "من 120,000 إلى 540,000 ريال شهرياً" },
      { metric: "معدل الاحتفاظ", value: "180%", improvement: "من 60% إلى 95%" },
    ],
    conclusion: "تحول إلى أحد أشهر الأندية الرياضية في المدينة",
    testimonial: {
      quote: "تحول النادي من مكان هادئ إلى خلية نحل! الشباب يأتون من كل مكان والأجواء أصبحت رائعة",
      author: "أحمد الغامدي",
      position: "مدير نادي اللياقة المتقدم",
    },
    image: "/case-studies/fitness-center.jpg",
    tags: ["تيك توك", "إنستغرام", "لياقة بدنية"],
    duration: "6 أشهر",
    budget: "30,000 ريال",
    heroIcon: null,
  },

  // التعليم والتدريب - 3 حالات
  {
    id: "educational-platform-1", // Updated ID
    slug: "educational-platform-1", // Updated Slug
    title: "منصة تعليمية تحقق 600% نمو في الاشتراكات",
    clientName: "أكاديمية المستقبل التعليمية",
    englishTitle: "EDUCATIONAL PLATFORM SUCCESS",
    subtitle: "نمو هائل في قطاع التعليم الإلكتروني",
    company: "أكاديمية المستقبل التعليمية",
    category: "التعليم والتدريب",
    description: "منصة تعليمية متخصصة في الدورات التقنية والمهنية عبر الإنترنت",
    aboutClient: "منصة رائدة في التعليم التقني والمهني",
    challenge: "سوق مشبع بالمنصات التعليمية وحاجة للتميز وجذب الطلاب الجادين",
    challenges: ["منافسة المنصات العالمية", "إثبات جودة المحتوى", "جذب الطلاب المناسبين"],
    solution: "حملات إعلانية مستهدفة عبر لينكد إن وجوجل مع التركيز على النتائج المهنية",
    strategy: ["استهداف المهنيين", "عرض قصص نجاح الخريجين", "شهادات معتمدة"],
    results: [
      { metric: "زيادة الاشتراكات", value: "600%", improvement: "من 500 إلى 3,500 مشترك" },
      { metric: "نمو الإيرادات", value: "520%", improvement: "من 75,000 إلى 465,000 ريال شهرياً" },
      { metric: "معدل إكمال الدورات", value: "240%", improvement: "من 35% إلى 84%" },
    ],
    conclusion: "أصبحت المنصة الأولى في التعليم التقني بالمنطقة",
    testimonial: {
      quote: "أصبحنا المنصة التعليمية الأولى في مجالنا. الطلاب يأتون إلينا من جميع أنحاء المنطقة",
      author: "د. فاطمة الزهراني",
      position: "مؤسسة أكاديمية المستقبل التعليمية",
    },
    image: "/case-studies/educational-platform.jpg",
    tags: ["لينكد إن", "جوجل", "تعليم"],
    duration: "7 أشهر",
    budget: "45,000 ريال",
    heroIcon: null,
  },
]

export function getCaseStudiesByCategory() {
  const categories = caseStudies.reduce(
    (acc, study) => {
      if (!acc[study.category]) {
        acc[study.category] = []
      }
      acc[study.category].push(study)
      return acc
    },
    {} as Record<string, CaseStudy[]>,
  )

  return categories
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
