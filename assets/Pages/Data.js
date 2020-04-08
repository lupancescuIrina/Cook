export const categories = [
    {
        id: 1,
        name: 'Aperitive',
        photo_url:
            'https://jamilacuisine.ro/wp-content/uploads/2016/12/Aperitive-festive-480x270.jpg'
        
    },
    {
        id: 2,
        name: 'Ciorbe',
        photo_url: 'https://pofta-buna.com/wp-content/uploads/2019/09/ciorba-de-vacuta-reteta-ca-la-restaurant-5.jpg'
    },
    {
        id: 3,
        name: 'Mâncare',
        photo_url:
            'https://i.ytimg.com/vi/hKU4EGZkOy0/maxresdefault.jpg'
    },
    {
        id: 4,
        name: 'Prăjituri',
        photo_url: 'https://www.sanovita.ro/blog/wp-content/uploads/2017/05/Crema-de-gris-cu-lapte-de-cocos-pentru-prajituri.jpg'
    },
    {
        id: 5,
        name: 'Diete',
        photo_url: 'https://www.uncorpsanatos.ro/wp-content/uploads/2018/12/dieta-disociata-slabeste-20kg.jpg'
    },
];

export const recipes = [
    {
        recipeId: 1,
        categoryId: 1,
        title: 'Qesadilla cu spanac si ciuperci',
        photo_url: 'https://www.retetepractice.ro/wp-content/uploads/2019/03/Quesadilla-cu-spanac-si-ciuperci.jpg',
        time: '40',
        ingredients: [[1, '15 g'], [2, '2 legaturi'], [3, '100g'],[4,'5-6 '],[5,'200g'],[6,'8 felii'],[7,'2 linguri'],[8,'dupa gust'],[9,'dupa gust'],[10,'dupa gust']],
        description:
            '1. Toaca ciupercile felii si frige-le in cele 2 linguri de ulei pentru 2-3 minute, pana ce se schimba la culoare.\n\n2. Scoate ciupercile, adauga 2-3 linguri de apa si adauga spanacul curatat, apoi pune capacul tigaii.\n\n3. Lasa spanacul 2-3 minute la oparit, pana ce ii scade volumul foarte mult, adu ciupercile inapoi in tigaie si potriveste de sare si piper.\n\n4. Asaza foaia de tortilla in tigaie cu putin ulei, apoi adauga o patrime din fiecare ingredient pe foaie: branza mozzarella rasa, ciuperci, spanac, cateva bucatele de branza feta si rosii uscate, iar deasupra presara iar mozzarella.\n\n5. Peste toate ingredientele asaza o alta foaie de tortilla si intoarce quesadilla, pentru a se rumeni pe ambele parti.\n\n6. Scoate quesadilla cu spanac si ciuperci, apoi continua prepararea celorlalte 3 portii.Serveste quesadilla imediat alaturi de un sos pregatit in casa.'
    },
    {
        recipeId: 2,
        categoryId: 2,
        title: 'Ciorbă de fasole verde cu pui',
        photo_url:'https://www.retetepractice.ro/wp-content/uploads/2014/07/Ciorb%C4%83-de-legume-cu-busuioc-verde.jpg',  
        time: '60',
        ingredients: [
            [11, '400g'],
            [12, '1 kg'],
            [13, '3-4'],
            [14, '1l'],
            [7, '50 ml']
            [15,'după gust'],
            [16, 'după gust'],
            [17, 'după gust'],
            [8, 'după gust'],
            [9, 'după gust']
        ],
        description: 'Se taie şi se spală carnea, se scurge de apă şi se taie bucăţele. Apoi, împreună cu ceapa, se călesc în ulei până se rumenesc.\n\nSe adaugă 2 litri de apă caldă şi sare, după gust, şi se pun păstăile de fasole spălate, curăţate la capete şi rupte în jumătăţi.\n\nDacă nu ai în casă suc de roşii, îl poți prepara dintr- un kilogram de roşii.Se curăţă roşiile de pieliţe şi se dau prin răzătoare.Dacă vrei, poți să pui sucul la fiert.Este mult mai sănătos.\n\nDupă ce s - a fiert fasolea pe jumătate şi nivelul apei a scăzut, se adaugă sucul de roşii, cartofii tăiaţi cubuleţe, sarea şi piperul şi o mică ramură de cimbru şi se mai fierb aproximativ 30 de minute.\n\nDupă ce a fiert ciorba de fasole, se pune usturoiul tocat mărunt pentru aroma deosebită pe care o lasă.Se toacă pătrunjelul, se presară pe fiecare porţie.',
    },
    {
        recipeId: 3,
        categoryId: 3,
        title: 'Pui carbonara cu smântână și bacon',
        photo_url: 'https://www.retetepractice.ro/wp-content/uploads/2019/03/Pui-carbonara-cu-bacon-si-smantana.jpg',
        time: '50',
        ingredients: [
            [18, '100g'],
            [17, '2'],
            [19, '2 linguri'],
            [11, '400g'],
            [20, '4'],
            [21, '150gr'],
            [22, '300ml'],
            [15, '1/2 legătură'],
            [8, 'după gust'],
            [9, 'după gust']
        ],
        description:
            '1. Frige pieptul de pui taiat felii si presarat cu sare, intr-o tigaie, in 2 linguri de unt, pana cand se rumeneste uniform.\n\n2. Odata rumenit, scoate puiul si toaca- l cuburi mari, iar in tigaia folosita frige baconul pentru 2 - 3 minute.\n\n3. Adauga usturoiul maruntit, lasa - l un minut, apoi adauga ouale batute amestecate cu smantana pentru gratit si 100 g parmezan.\n\n4. Omogenizeaza sosul obtinut si lasa - l sa scada un minut, apoi adu puiul inapoi peste sos.\n\n5. Potriveste de sare si piper, tinand cont ca parmezanul este deja sarat si serveste puiul carbonara pe un pat de paste fierte conform indicatiilor de pe ambalaj.'
    },
    {
        recipeId: 4,
        categoryId: 4,
        title: 'Tort biscuiti',
        photo_url:
            'https://www.retetepractice.ro/wp-content/uploads/2019/11/IMG_4097.jpg',
        time: '45',
        ingredients: [
            [23, '800gr'],
            [24, '100gr'],
            [25, '100gr'],
            [26, '250ml'],
            [27, '250gr'],
            [28, '70g'],
            [29, '150gr'],
            [30, '2ml'],
            [22, '12ml'],
            [31, '120gr'],
        ],
        description: 'Mărunțești biscuiți cu mâna. Nu-i pune într-un robot că-i  faci zob. De data asta faci tort, nu blat pentru cheesecake, spune Tily pe blogul ei.\n\nÎntr - o cratiță adaugi apa, zahărul, cacaoa și untul.După ce s- au mixat bine ingredientele adaugi esența de rom.\n\nAdaugi  siropul când s - a răcit peste biscuiții mărunțiți  si amesteci.\n\nÎntre timp, pe foc, într - o tigaie adaugi nucile & migdalele.Le tragi puțin cât să nu se prăjească ci să capete o consistențe crunchy și adaugi peste biscuiții însiropați.Ce crezi ? AMESTECI din nou.Răstorni toată compoziția în orice fel de  formă pentru tort ai avea.\n\nPentru glazură poți lua ciocolată normală, dar eu am găsit bănuți din ciocolată și mi - a fost super ușor să - i pun să se topească la bain - marie.Am adăugat și smântâna iar rezultatul a fost o compozoție omogenă de glazură pe care am turnat - o peste blatul de biscuiți.\n\nRecomandarea ar fi să nu degustați mai repede de două ore.Da, știu.Și mie mi se face poftă.Însă pe mine m - au ținut nervii și am lăsat tava cu tort peste noapte la frigider.'
         },
    {
        recipeId: 5,
        categoryId: 5,
        title: 'Pișcoturi Dukan',
        photo_url: 'https://www.edithskitchen.ro/wp-content/uploads/2014/05/piscoturi-dukan-1-1.jpg',
        time: '30',
        ingredients: [
            [20, '1'],
            [32, '2 linguri'],
            [33, '2 linguri'],
            [34, '2 linguri'],
            [35, '1 lingură'],
            [36, '1'],
            [8, 'un praf'],
            [38, 'un vârf']
        ],
        description:
            'Intr-un bol mic batem usor oul cu furculita, impreuna cu sarea, xylitolul si vanilia.Adaugam amidonul, laptele praf, praful de copt.Daca aluatul este prea gros(oul a fost cum am spus in retet, mic),adaugam 1 - 2 linguri de lapte dulce degresat.Daca nu aveti ou mic, dupa ce il bateti usor, luati din el cca 1 lingura(daca este prea mult ou, va trebui sa puneti mai mult lapte praf si mai mult amidon,in felul asta ies mai multe, insa va trebui sa le mancati in 3 zile fata de 2 cat puteti manca din cantitatile initiale).Lasam cca 5 minute compozitia sa se odihneasca in castron.Trebuie sa obtinem o compozitie usor curgatoare.'
    }
   
];

export const ingredients = [
    {
        ingredientId: 1,
        name: 'ciuperci',
      
    },
    {
        ingredientId: 2,
        name: 'spanac',
        
    },
    {
        ingredientId: 3,
        name: 'brânză',
        
    },
    {
        ingredientId: 4,
        name: 'roșii uscate',
       
    },
    {
        ingredientId: 5,
        name: 'mozzarella',
     
    },
    {
        ingredientId: 6,
        name: 'tortilla',
        
    },
    {
        ingredientId: 7,
        name: 'ulei',
        
    },
    {
        ingredientId: 8,
        name: 'sare',
        
    },
    {
        ingredientId: 9,
        name: 'piper',
       
    },
    {
        ingredientId: 10,
        name: 'oregano',
    },
    {
        ingredientId: 11,
        name: 'carne de pui',
        
    },
    {
        ingredientId: 12,
        name: 'fasole verde',
       
    },
    {
        ingredientId: 13,
        name: 'cartofi',
       
    },
    {
        ingredientId: 14,
        name: 'suc de roșii',
        
    },
    {
        ingredientId: 15,
        name: 'pătrunjel',
        
    },
    {
        ingredientId: 16,
        name: 'cimbru',
       
    },
    {
        ingredientId: 17,
        name: 'usturoi',
        
    },
    {
        ingredientId: 18,
        name: 'bacon',
        
    },
    {
        ingredientId: 19,
        name: 'unt',
       
    },
    {
        ingredientId: 20,
        name: 'ouă',
       
    },
    {
        ingredientId: 21,
        name: 'parmezan',
       
    },
    {
        ingredientId: 22,
        name: 'smântnână',
        
    },
    {
        ingredientId: 23,
        name: 'biscuiți',
        
    },
    {
        ingredientId: 24,
        name: 'migdale',
       
    },
    {
        ingredientId: 25,
        name: 'miez de nucă',
        
    },
    {
        ingredientId: 26,
        name: 'apă ',
       
    },
    {
        ingredientId: 27,
        name: 'zahăr',
       
    },
    {
        ingredientId: 28,
        name: 'cacao',
       
    },
    {
        ingredientId: 29,
        name: 'unt',
        
    },
    {
        ingredientId: 30,
        name: 'esență de rom',
        
    },

    {
        ingredientId: 31,
        name: 'ciocolată',
       
    },
    {
        ingredientId: 32,
        name: 'amidon',
       
    },
    {
        ingredientId: 33,
        name: 'lapte praf degresat',
       
    },
    {
        ingredientId: 34,
        name: 'xylitol',
        
    },
    {
        ingredientId: 35,
        name: 'praf de copt',
       
    },
    {
        ingredientId: 36,
        name: 'vanilie',
       
    },
    {
        ingredientId: 37,
        name: 'turmeric',
        
    },
    
];
