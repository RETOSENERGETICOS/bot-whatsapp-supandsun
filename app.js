const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

    const flowWater = addKeyword(['1'])
    .addAnswer(
        '🏄‍♂️ *_Travesía en Paddle a la Isla de Sacrificios_*',
        {media: "https://reservaciones.supandsun.com.mx/media/img_bot/1.jpg"}
    )
    .addAnswer(
        [
        'Explora la belleza natural del mar de Veracruz en una emocionante travesía de paddle hacia la histórica Isla de Sacrificios. Este recorrido combina la aventura del deporte acuático con paisajes impresionantes de nuestro puerto. Durante el trayecto, disfrutarás del mar, avistarás fauna marina y pasarás un buen rato a cargo de nuestro equipo. Ideal para amantes del ecoturismo. ¡Atrévete a remar hacia la aventura!\n',
        '✅ Haz una reservación accediendo al siguiente enlace:\n🔗 https://reservaciones.supandsun.com.mx/paddle-board-open-water/ \n\n',
        '👉 Para regresar al menú de bienvenida escriba *00*.',
    ],
    null,
    null,
    )

const flowMandinga = addKeyword(['2'])
.addAnswer(
    '🏄‍♀️ *_Travesía Manglares de Mandinga_*',
    {media: "https://reservaciones.supandsun.com.mx/media/img_bot/2.jpg"}
)
.addAnswer(
    [
    'Adéntrate en la magia de los manglares de este pueblo pesquero, en una fascinante travesía ecológica por sus lagunas. Navega entre los canales naturales rodeados de exuberante vegetación, hogar de una rica diversidad de flora y fauna. Descubre la serenidad de este ecosistema único mientras disfrutas el folklor local y observas aves exóticas. Culmina la experiencia con una visita la Isla de Conchitas, donde podrás relajarte, tomar muchas fotos y conectar con la naturaleza. Una aventura perfecta para quienes buscan relajarse y disfrutar de un paisaje muy veracruzano.\n',
    '✅ Haz una reservación accediendo al siguiente enlace:\n🔗 https://reservaciones.supandsun.com.mx/paddle-board-mandinga/ \n\n',
    '👉 Para regresar al menú de bienvenida escriba *00*.',
    ],
    null,
    null,
    )

const flowSup = addKeyword(['3'])
.addAnswer(
    '🧘 *_SUP Yoga_*',
    {media: "https://reservaciones.supandsun.com.mx/media/img_bot/3.jpg"}
)
.addAnswer(
    [
    'El SUP Yoga es una práctica que combina dos disciplinas: Stand Up Paddle Surf y el Yoga. En una clase de Sup Yoga se adaptan los aspectos del Yoga: asana, pranayama, mudra y meditación practicándose sobre una tabla de Paddle Surf, por lo que siempre se practica sobre una superficie acuática.\n',
    '✅ Haz una reservación accediendo al siguiente enlace:\n🔗 https://reservaciones.supandsun.com.mx/sup-yoga/ \n\n',
    '👉 Para regresar al menú de bienvenida escriba *00*.',
    ],
    null,
    null,
    )

const flowYoga = addKeyword(['4'])
.addAnswer(
    '🧘‍♀️ *_Yoga_*',
    {media: "https://reservaciones.supandsun.com.mx/media/img_bot/4.jpg"}
)
.addAnswer(
    [
    'El Yoga es una  práctica utiliza posturas físicas (Asanas), ejercicios de respiración (prenayama) y meditación para mejorar la salud general.\n\n El Yoga se desarrolló como una práctica espiritual hace miles de años. Hoy en día, la mayoría de las personas en occidente que practican yoga lo hacen como ejercicio o para reducir el estrés.\n',
    '✅ Haz una reservación accediendo al siguiente enlace:\n🔗 https://reservaciones.supandsun.com.mx/yoga/ \n\n',
    '👉 Para regresar al menú de bienvenida escriba *00*.',
    ],
    null,
    null,
    )

const flowOcean = addKeyword(['5'])
.addAnswer(
    '🌊 *Ocean Explorer*',
    {media: "https://reservaciones.supandsun.com.mx/media/img_bot/5.jpg"}
)
.addAnswer(
    [
    'DESCRIPCIÓN DETALLADA DE LA ACTIVIDAD.\n',
    'FECHA / HORARIO\n\n',
    '✅ Haz una reservación accediendo al siguiente enlace:\n🔗 https://reservaciones.supandsun.com.mx/ocean-explorer/ \n\n',
    '👉 Para regresar al menú de bienvenida escriba *00*.',
    ],
    null,
    null,
    )

const flowBoat = addKeyword(['6'])
.addAnswer(
    '🚣‍♂️ *Boat Sailing*',
    {media: "https://reservaciones.supandsun.com.mx/media/img_bot/6.jpg"}
)
.addAnswer(
    [
    'DESCRIPCIÓN DETALLADA DE LA ACTIVIDAD.\n',
    'FECHA / HORARIO\n\n',
    '✅ Haz una reservación accediendo al siguiente enlace:\n🔗 https://reservaciones.supandsun.com.mx/boat-sailing/ \n\n',
    '👉 Para regresar al menú de bienvenida escriba *00*.',
    ],
    null,
    null,
    )

    const flowActividades = addKeyword(['1', '0'])
    .addAnswer(
        [
        'La experiencia completa de ☀️ _SUP & SUN_ ☀️ esta en nuestras actividades, para obtener mas información, detalles y hacer una reservación en cada una de ellas escriba:\n\n',
        '🏄‍♂️ *1* para Paddle board open water.',
        '🏄‍♀️ *2* para Paddle board Mandinga.',
        '🧘 *3* para SUP Yoga.',
        '🧘‍♀️ *4* para Yoga.',
        '🌊 *5* para Ocean Explorer.',
        '🚣‍♂️ *6* para Boat Sailing.\n\n',
        '👉 Para regresar al menú de bienvenida escriba *00*.',
        ],
        null,
        null,
        [flowWater, flowMandinga, flowSup, flowYoga, flowOcean, flowBoat]
    )

    const flowMateriales = addKeyword(['2'])
    .addAnswer('.',
        {media: "https://rfid.grretosenergeticos.com/sup&sun/MATERIALES%20Y%20EQUIPO.pdf"}
    )
    .addAnswer(
        [
            '👉 Te compartimos nuestro catálogo de materiales y equipos.',
            '▶️ Para regresar escriba *0*.',
        ]
    )

    const flowRopa = addKeyword(['3'])
    .addAnswer('.',
        {media: "https://rfid.grretosenergeticos.com/sup&sun/ROPA%20Y%20ACCESORIOS.pdf"}
    )
    .addAnswer(
        [
            '👉 Te compartimos nuestro catálogo de ropa y accesorios.',
            '▶️ Para regresar escriba *0*.',
        ]
    )

    const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'Hola', '.' , 'Menu', 'menu', 'Inicio', 'inicio', 'Atras', 'atras', '0'])
    .addAnswer('Hola 👋 bienvenido al asistente virtual de ☀️ _SUP & SUN_ ☀️, explore nuestro menú escribiendo lo siguiente:',
        {media: "http://reservaciones.supandsun.com.mx/media/img_bot/ss_logo.jpg"}
    )
    .addAnswer(
        [
            '🏝️ *1* para ver nuestras actividades.',
            '🏄 *2* para ver el catálogo de equipos.',
            '🩱 *3* para ver el catalogo de ropa y accesorios.',
            '🔹 *4* para consultar el estado de tú reservación.',
        ],
        null,
        null,
        [flowActividades, flowMateriales, flowRopa]
    )
    
    const main = async () => {
        const adapterDB = new MockAdapter()
        const adapterFlow = createFlow([flowPrincipal])
        const adapterProvider = createProvider(BaileysProvider)
    
        createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        })
    
        QRPortalWeb()
    }
    
    main()