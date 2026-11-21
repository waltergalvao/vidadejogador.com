import type { PrivacyPolicy } from "./types";

export const privacyPolicy: PrivacyPolicy = {
  title: "Política de Privacidad",
  updatedLabel: "Última actualización",
  intro: [
    "Esta política explica qué datos usa el juego Vida de Jugador, para iOS y Android, para qué los usa y cuáles son tus derechos. Sigue la Ley General de Protección de Datos de Brasil (LGPD, Ley n.º 13.709/2018) y también cumple con el Reglamento General de Protección de Datos de la Unión Europea (GDPR) y las leyes de privacidad de California (CCPA).",
    "En resumen: Vida de Jugador es un juego para un solo jugador que funciona sin conexión a internet. No creas una cuenta, y el juego no te pide tu nombre, correo electrónico ni teléfono. Tus carreras se guardan en tu dispositivo. Los pocos datos que salen de él sirven para entender cómo se usa el juego y para procesar compras, y se describen a continuación.",
  ],
  sections: [
    {
      heading: "Quiénes somos",
      paragraphs: [
        "Vida de Jugador es desarrollado y publicado por PC Pocket Games, responsable de los datos personales que trata el juego, en los términos de la LGPD y el GDPR.",
        "Para cualquier asunto de privacidad, incluidas las solicitudes previstas en la LGPD, el GDPR o la CCPA, escríbenos a {email}.",
      ],
    },
    {
      heading: "Lo que no recopilamos",
      paragraphs: ["El juego no tiene cuenta ni inicio de sesión, y no recopila:"],
      bullets: [
        "tu nombre, correo electrónico, teléfono, dirección ni fecha de nacimiento;",
        "el nombre y la apariencia del jugador que creas (se quedan solo en tu dispositivo);",
        "tu ubicación precisa (GPS);",
        "tus contactos, fotos, cámara, micrófono ni archivos (el juego no pide acceso a nada de eso);",
        "los datos de tu tarjeta ni de otros medios de pago.",
      ],
    },
    {
      heading: "Datos guardados en tu dispositivo",
      paragraphs: [
        "Todo lo que haces en el juego se guarda en el almacenamiento de tu propio dispositivo, en el área reservada para la aplicación: tus carreras (el nombre y el aspecto de tu jugador, los clubes, los partidos, las decisiones y la evolución) y tus ajustes (sonido, vibración, idioma y notificaciones).",
        "Estos datos no se envían a nosotros ni a nadie. Hoy no existe guardado en la nube; si algún día lo ofrecemos, esta política lo describirá antes.",
        "El juego también lee, en el propio dispositivo, algunos datos que necesita para funcionar, como el idioma del sistema (para mostrar el juego en tu idioma). Esa lectura ocurre solo en el dispositivo.",
      ],
    },
    {
      heading: "Notificaciones",
      paragraphs: [
        "Las notificaciones vienen desactivadas. Si las activas en los Ajustes del juego, el sistema de tu dispositivo te pedirá permiso.",
        "Las notificaciones del juego son locales: el propio dispositivo las programa y las muestra, sin pasar por un servidor nuestro. Puedes desactivarlas en cualquier momento en los Ajustes del juego o del dispositivo.",
      ],
    },
    {
      heading: "Datos de uso (analítica)",
      paragraphs: [
        "Para entender cómo se juega y mejorar el juego (por ejemplo, dónde se traban los jugadores, qué partes se juegan más, si el juego presenta errores), podemos usar PostHog, un servicio de analítica. Cuando está activo, el juego envía a PostHog:",
      ],
      bullets: [
        "un identificador aleatorio creado en el dispositivo, que no está vinculado a tu nombre ni a ninguna cuenta;",
        "eventos de uso del juego, como abrir el juego, empezar una carrera, terminar un partido o una etapa de la carrera;",
        "información técnica del dispositivo y de la aplicación, como el modelo, el sistema operativo y su versión, la versión del juego, el idioma y la zona horaria;",
        "la dirección IP de la conexión, que PostHog puede usar para estimar una ubicación aproximada (país o ciudad).",
      ],
      after: [
        "Usamos estos datos de forma agregada, para tomar decisiones sobre el juego. No los usamos para identificarte, no los vendemos y no los usamos para publicidad.",
      ],
    },
    {
      heading: "Compras dentro del juego",
      paragraphs: [
        "El juego puede ofrecer compras opcionales. Se hacen a través de la App Store (Apple) o Google Play, que procesan el pago con los datos de tu cuenta en la tienda. Nunca vemos los datos de tu tarjeta ni de tu medio de pago.",
        "Para confirmar y desbloquear las compras, usamos RevenueCat. Recibe de la tienda y guarda la información de la compra: un identificador anónimo de la aplicación, el producto comprado, la fecha, el precio y la moneda, el identificador de la transacción y el país de la tienda. Usamos esta información para entregarte lo que compraste, restaurar compras y cumplir obligaciones fiscales y contables.",
      ],
    },
    {
      heading: "Anuncios",
      paragraphs: [
        "El juego no está pensado para mostrar anuncios que interrumpan la partida. Si el juego muestra anuncios, serán anuncios con recompensa, que tú eliges ver a cambio de un beneficio en el juego, ofrecidos por Google AdMob.",
        "En ese caso, Google AdMob puede recopilar el identificador de publicidad del dispositivo (el IDFA en iOS o el ID de publicidad en Android), la dirección IP e información técnica del dispositivo, para mostrar anuncios, medir sus resultados y prevenir fraudes. En iOS, el identificador de publicidad solo se usa si lo permites en el aviso de rastreo del sistema. Donde la ley lo exija, te pediremos tu consentimiento antes de mostrar anuncios personalizados.",
        "Puedes limitar el uso del identificador de publicidad en cualquier momento: en iOS, en Configuración > Privacidad y seguridad > Rastreo; en Android, en la configuración de anuncios de Google, donde también puedes borrarlo o restablecerlo.",
      ],
    },
    {
      heading: "Servicios de terceros",
      paragraphs: [
        "Estos son los servicios que pueden tratar datos cuando usas el juego. Cada uno tiene su propia política de privacidad:",
      ],
      bullets: [
        "PostHog (analítica): https://posthog.com/privacy",
        "RevenueCat (gestión de compras): https://www.revenuecat.com/privacy",
        "Apple App Store (descarga, pagos y compras en iOS): https://www.apple.com/legal/privacy/",
        "Google Play (descarga, pagos y compras en Android): https://policies.google.com/privacy",
        "Google AdMob (anuncios con recompensa, si el juego muestra anuncios): https://policies.google.com/technologies/ads",
      ],
      after: [
        "No vendemos tus datos personales y solo los compartimos con estos servicios, para los fines descritos aquí, o cuando la ley o una autoridad lo exija.",
      ],
    },
    {
      heading: "Bases legales",
      paragraphs: ["Tratamos datos personales con base en los siguientes supuestos de la LGPD (y las bases equivalentes del GDPR):"],
      bullets: [
        "ejecución de un contrato: para ofrecer el juego y entregar y restaurar las compras que hagas;",
        "interés legítimo: para entender el uso del juego, corregir errores y mejorarlo, siempre con datos que no te identifican directamente;",
        "consentimiento: para las notificaciones y, si el juego muestra anuncios, para los anuncios personalizados donde la ley lo exija;",
        "cumplimiento de una obligación legal: para conservar los registros de compras que exige la legislación fiscal.",
      ],
      after: ["Cuando el tratamiento depende de tu consentimiento, puedes retirarlo en cualquier momento."],
    },
    {
      heading: "Cuánto tiempo conservamos los datos",
      paragraphs: [
        "Los datos de tu dispositivo se quedan ahí hasta que desinstales la aplicación.",
        "Los datos de uso se conservan solo el tiempo necesario para analizar y mejorar el juego, y después se eliminan. Los registros de compras se conservan durante el tiempo que exijan la ley y las tiendas.",
      ],
    },
    {
      heading: "Transferencias internacionales de datos",
      paragraphs: [
        "Los servicios de terceros mencionados arriba pueden almacenar y tratar datos en servidores fuera de tu país, como en Estados Unidos y la Unión Europea. En esos casos, la transferencia se realiza con las garantías previstas en la LGPD y el GDPR, como las cláusulas contractuales tipo adoptadas por estos proveedores.",
      ],
    },
    {
      heading: "Niños y adolescentes",
      paragraphs: [
        "Vida de Jugador es un juego para el público general y no está dirigido a niños menores de 13 años. No recopilamos intencionalmente datos personales de niños.",
        "Si eres madre, padre o tutor y crees que un niño nos proporcionó datos personales, escríbenos a {email} y los eliminaremos. Las compras dentro del juego se pueden bloquear con los controles parentales de la App Store y Google Play.",
      ],
    },
    {
      heading: "Tus derechos",
      paragraphs: ["De acuerdo con la LGPD, y según el caso con el GDPR y la CCPA, tienes derecho a:"],
      bullets: [
        "confirmar si tratamos tus datos y acceder a ellos;",
        "corregir datos incompletos, inexactos o desactualizados;",
        "pedir la anonimización, el bloqueo o la eliminación de datos innecesarios o tratados en contra de la ley;",
        "pedir la portabilidad de tus datos;",
        "pedir la eliminación de los datos tratados con base en tu consentimiento y retirar el consentimiento;",
        "saber con quién compartimos tus datos;",
        "oponerte a un tratamiento basado en el interés legítimo;",
        "no ser discriminado por ejercer estos derechos.",
      ],
      after: [
        "Para ejercer cualquiera de ellos, escríbenos a {email}. Como el juego no tiene cuenta y no sabemos quién eres, quizá te pidamos algunos datos para encontrar la información vinculada a tu dispositivo, como el modelo del dispositivo, la fecha aproximada en que instalaste el juego o, en el caso de compras, el número de pedido que aparece en el recibo de la tienda. Respondemos dentro de los plazos que fija la ley.",
        "También puedes presentar una reclamación ante la Autoridad Nacional de Protección de Datos de Brasil (ANPD) o ante la autoridad de protección de datos de tu país.",
      ],
    },
    {
      heading: "Cómo eliminar tus datos",
      paragraphs: [
        "Para eliminar todo lo que el juego guardó en tu dispositivo, desinstala la aplicación: las carreras y los ajustes se eliminan con ella y no se pueden recuperar.",
        "Para pedir la eliminación de los datos de uso y de los registros de compras que tienen los servicios de terceros, escríbenos a {email}. Los registros que la ley nos obliga a conservar se mantendrán solo durante el plazo exigido.",
      ],
    },
    {
      heading: "Seguridad",
      paragraphs: [
        "Recopilamos la menor cantidad de datos posible. Los datos del juego se quedan en el área del dispositivo reservada para la aplicación, protegida por el sistema operativo, y los datos que se envían a los servicios de terceros viajan por conexiones cifradas. Ningún sistema es totalmente seguro, pero tomamos medidas razonables para proteger los datos y, si ocurre un incidente que pueda ponerte en riesgo, actuaremos y lo comunicaremos como exige la ley.",
      ],
    },
    {
      heading: "Cambios en esta política",
      paragraphs: [
        "Podemos actualizar esta política cuando el juego cambie, por ejemplo si empezamos a usar un nuevo servicio o a tratar nuevos datos. La fecha de la última actualización aparece al principio de esta página. Si el cambio es importante, también te avisaremos dentro del juego o en su página de la tienda.",
      ],
    },
    {
      heading: "Contacto",
      paragraphs: ["Preguntas, solicitudes o reclamaciones sobre privacidad: {email}."],
    },
  ],
};
