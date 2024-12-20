const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

const activities = [
    {
        id: '1',
        title: '🏄‍♂️ *_SUP Isla de Sacrificios._*',
        description: 'Explora la belleza natural del mar de Veracruz en una emocionante travesía de paddle hacia la histórica Isla de Sacrificios. Este recorrido combina la aventura del deporte acuático con paisajes impresionantes de nuestro puerto. Durante el trayecto, disfrutarás del mar, avistarás fauna marina y pasarás un buen rato a cargo de nuestro equipo.\nIdeal para amantes del ecoturismo. ¡Atrévete a remar hacia la aventura!\n\nPrecio: *$590 MXN / PERSONA*\n',
        link: 'https://reservaciones.supandsun.com.mx/paddle-board-open-water/',
        image: 'https://reservaciones.supandsun.com.mx/media/img_bot/1.jpg',
    },
    {
        id: '2',
        title: '🏄‍♀️ *_SUP Isla de las Conchitas_*',
        description: 'Adéntrate en la magia de los manglares de este pueblo pesquero, en una fascinante travesía ecológica por sus lagunas. Navega entre los canales naturales rodeados de exuberante vegetación, hogar de una rica diversidad de flora y fauna. Descubre la serenidad de este ecosistema único mientras disfrutas el folklor local y observas aves exóticas. Culmina la experiencia con una visita la Isla de Conchitas, donde podrás relajarte, tomar muchas fotos y conectar con la naturaleza. Una aventura perfecta para quienes buscan relajarse y disfrutar de un paisaje muy veracruzano.\n',
        link: 'https://reservaciones.supandsun.com.mx/paddle-board-mandinga/',
        image: 'https://reservaciones.supandsun.com.mx/media/img_bot/2.jpg',
    },
    {
        id: '3',
        title: '🧘 *_SUP Yoga_*',
        description: 'El SUP Yoga es una práctica que combina dos disciplinas: Stand Up Paddle Surf y el Yoga. En una clase de Sup Yoga se adaptan los aspectos del Yoga: asana, pranayama, mudra y meditación practicándose sobre una tabla de Paddle Surf, por lo que siempre se practica sobre una superficie acuática.\n\nPrecio: *$300 MXN / PERSONA*\n',
        link: 'https://reservaciones.supandsun.com.mx/sup-yoga/',
        image: 'https://reservaciones.supandsun.com.mx/media/img_bot/3.jpg',
    },
    {
        id: '4',
        title: '🧘‍♀️ *_Yoga_*',
        description: 'El Yoga es una  práctica utiliza posturas físicas (Asanas), ejercicios de respiración (prenayama) y meditación para mejorar la salud general.\nEl Yoga se desarrolló como una práctica espiritual hace miles de años. Hoy en día, la mayoría de las personas en occidente que practican yoga lo hacen como ejercicio o para reducir el estrés.\n',
        link: 'https://reservaciones.supandsun.com.mx/yoga/',
        image: 'https://reservaciones.supandsun.com.mx/media/img_bot/4.jpg',
    },
    {
        id: '5',
        title: '🌊 *Ocean Explorer*',
        description: '...',
        link: 'https://reservaciones.supandsun.com.mx/ocean-explorer/',
        image: 'https://reservaciones.supandsun.com.mx/media/img_bot/5.jpg',
    },
    {
        id: '6',
        title: '🚣‍♂️ *Boat Sailing*',
        description: '...',
        link: 'https://reservaciones.supandsun.com.mx/boat-sailing/',
        image: 'https://reservaciones.supandsun.com.mx/media/img_bot/6.jpg',
    }
];

const createActivityFlow = (activity) => {
    return addKeyword([activity.id])
        .addAnswer(activity.title, { media: activity.image })
        .addAnswer(
            [
                activity.description,
                `✅ Haz una reservación accediendo al siguiente enlace:\n🔗 ${activity.link} \n\n`,
                '👉 Para regresar al menú de bienvenida escriba *0*.',
            ],
            null,
            null,
        );
};

const activityFlows = activities.map(createActivityFlow);

const flowMateriales = addKeyword(['2'])
    .addAnswer('.',
        { media: "https://reservaciones.supandsun.com.mx/media/materiales-equipo.pdf" }
    )
    .addAnswer(
        [
            '🧾 Te compartimos nuestro catálogo de materiales y equipos.\n',
            '👉 Para regresar al menú de bienvenida escriba *0*.',
        ]
    );

const flowRopa = addKeyword(['3'])
    .addAnswer('.',
        { media: "https://reservaciones.supandsun.com.mx/media/ropa-accesorios.pdf" }
    )
    .addAnswer(
        [
            '🧾 Te compartimos nuestro catálogo de ropa y accesorios.\n',
            '👉 Para regresar al menú de bienvenida escriba *0*.',
        ]
    );

    const flowAsesor = addKeyword(['4'])
    .addAnswer(
        [
            '💬Espere un momento por favor, un asesor aventurero se pondrá en contacto con usted...',
        ]
    );

const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'Hola', '.' , 'Menu', 'menu', 'Inicio', 'inicio', 'Atras', 'atras', '0'])
    .addAnswer('¡Hola 👋 bienvenido al asistente virtual de ☀️ _SUP & SUN_ ☀️! Explore nuestro menú escribiendo lo siguiente:',
        { media: "http://reservaciones.supandsun.com.mx/media/img_bot/ss_logo.jpg" }
    )
    .addAnswer(
        [
            '🏝️ *1* - para ver nuestras actividades.',
            '🏄 *2* - para ver el catálogo de equipos.',
            '🩱 *3* - para ver el catálogo de ropa y accesorios.',
            '👩🏼‍💻 *4* - para para hablar con un asesor aventurero.',
        ],
        null,
        null,
        [addKeyword(['1']).addAnswer('¡Aquí están nuestras actividades!\nObten más información escribiendo:').addAnswer([
            '🏄‍♂️ *1* - para SUP Isla de Sacrificios.',
            '🏄‍♀️ *2* - para SUP Isla de las Conchitas.',
            '🧘 *3* - para SUP Yoga.',
            '🧘‍♀️ *4* - para Yoga.',
            '🌊 *5* - para Ocean Explorer.',
            '🚣‍♂️ *6* - para Boat Sailing.',
        ], null, null, activityFlows), flowMateriales, flowRopa, flowAsesor]
    );

const main = async () => {
    try {
        const adapterDB = new MockAdapter();
        const adapterFlow = createFlow([flowPrincipal]);
        const adapterProvider = createProvider(BaileysProvider);

        createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        });

        QRPortalWeb();
    } catch (error) {
        console.error("Error en la inicialización del bot: ", error);
    }
};

main();