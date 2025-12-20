/*
Creador: 亗NetherLord亗

https://chat.whatsapp.com/IyxuHbUdgvYBcVit6sThOO
*/

import fetch from 'node-fetch'

const menuSections = {
    'banco': {
        title: 'BANCO',
        commands: [
            ' 🎄  *#balance • #bal • #bank* + <usuario>\n> ☃️ Ver cuantos coins tienes en el banco.',
            ' 🎄  *#deposit • #dep • #depositar • #d* + [cantidad] | all\n> ☃️ Depositar tus coins en el banco.',
            ' 🎄  *#withdraw • #with • #retirar* + [cantidad] | all\n> ☃️ Retirar tus coins del banco.',
            ' 🎄  *#economyinfo • #einfo*\n> ☃️ Ver la información de economía del grupo.',
            ' 🎄  *#givecoins • #pay • #coinsgive* + [usuario] [cantidad]\n> ☃️ Dar coins a un usuario.',
            ' 🎄  *#economyboard • #eboard • #baltop* + <pagina>\n> ☃️ Ver tu información de economía en el grupo.'
        ],
        description: 'Comandos de *Banco*'
    },
    'casino': {
        title: 'CASINO',
        commands: [
            ' 🎄  *#coinflip • #flip • #cf* + [apuesta] [cara/cruz]\n> ☃️ Apostar coins en un cara o cruz.',
            ' 🎄  *#roulette • #rt • #ruleta* + [color/número (0-100)] [apuesta]\n> ☃️ Apostar coins en una ruleta.',
            ' 🎄  *#roulette • #rt • #ruleta* + multi\n> ☃️ Ver los multiplicadores de los numeros/colores.',
            ' 🎄  *#casino • #apostar • #slot* + [apuesta]\n> ☃️ Apuestar coins en el casino.',
            ' 🎄  *#blackjack • #bj* + [apuesta]\n> ☃️ Jugar al *_BlackJack$*.',
            ' 🎄  *#blackjack • #bj* + [rules/reglas]\n> ☃️ Como se juega al *_BlackJack_*.',
            ' 🎄  *#dadosprem • #diceprem • #dadosvip • #dicevip* + [apuesta]\n> ☃️ Lanzar los dados.',
            ' 🎄  *#dadosprem • #diceprem • #dadosvip • #dicevip* + multi\n> ☃️ Ver los multiplicadores de ganancia de los datos (jamás se pierde).',
            ' 🎄  *#dados • #dice* + [número 1-6] [apuesta]\n> ☃️ Jugar a los dados.',
            ' 🎄  *#dados • #dice* + multi\n> ☃️ Ver los multiplicadores de los dados.',
            ' 🎄  *#poker • #texas • #pokertexas* + [apuesta]\n> ☃️ Jugar al *Texas Hold`em _Poker_*.',
            ' 🎄  *#poker • #texas • #pokertexas* + [rules/reglas]\n> ☃️ Cómo se juega al *_Poker_*.'
        ],
        description: 'Comandos de *Apuestas* para probar tu suerte'
    },
    'trabajos': {
        title: 'TRABAJOS',
        commands: [
            ' 🎄  *#w • #work • #trabajar*\n> ☃️ Ganar coins trabajando.',
            ' 🎄  *#slut • #protituirse*\n> ☃️ Ganar coins prostituyéndote.',
            ' 🎄  *#crime • #crimen*\n> ☃️ Ganar coins rapido.',
            ' 🎄  *#miming • #minar • #mine*\n> ☃️ Realizar trabajos de minería y ganar coins.',
            ' 🎄  *#daily • #diario*\n> ☃️ Reclamar tu recompensa diaria.',
            ' 🎄  *#cofre* • *#coffer*\n> ☃️ Reclamar tu cofre diario.',
            ' 🎄  *#weekly • #semanal*\n> ☃️ Reclamar tu recompensa semanal.',
            ' 🎄  *#monthly • #mensual*\n> ☃️ Reclamar tu recompensa mensual.',
            ' 🎄  *#steal • #robar • #rob* + [@mencion]\n> ☃️ Intentar robar coins a un usuario.',
            ' 🎄  *#aventura • #adventure*\n> ☃️ Aventuras para ganar coins y exp.',
            ' 🎄  *#curar • #heal*\n> ☃️ Curar salud para salir de aventuras.',
            ' 🎄  *#cazar • #hunt*\n> ☃️ cazar animales para ganar coins y exp.',
            ' 🎄  *#fish • #pescar*\n> ☃️ Ganar coins y exp pescando.',
            ' 🎄  *#mazmorra • #dungeon*\n> ☃️ Explorar mazmorras para ganar coins y exp.',
            ' 🎄  *#talar • #cut*\n> ☃️ Trabajar de Leñador para ganar coins y exp.',
            ' 🎄  *#forjar • #forge*\n> ☃️ Trabajar de Herrero para ganar coins y exp.',
            ' 🎄  *#kuka • #manifestacion• #paro*\n> ☃️ Hacer trabajos de Kirchnerista.',
        ],
        description: 'Comandos de *Trabajos* para ganar dinero.'
    },
    'premium': {
        title: 'PREMIUM',
        commands: [
            ' 🎄  *#premium • #vip* + [numero] [h/d/s/m]\n> ☃️ Comprar *premium*.',
        ],
        description: 'Comandos *VIP*.'
    },
    'download': {
        title: 'DOWNLOAD',
        commands: [
            ' 🎄  *#tiktok • #tt* + [Link] / [busqueda]\n> ☃️ Descargar un video de TikTok.',
            ' 🎄  *#mediafire • #mf* + [Link]\n> ☃️ Descargar un archivo de MediaFire.',
            ' 🎄  *#mega • #mg* + [Link]\n> ☃️ Descargar un archivo de MEGA.',
            ' 🎄  *#play • #play2 • #ytmp3 • #ytmp4* + [Cancion] / [Link]\n> ☃️ Descargar una cancion o vídeo de YouTube.',
            ' 🎄  *#facebook • #fb* + [Link]\n> ☃️ Descargar un video de Facebook.',
            ' 🎄  *#twitter • #x* + [Link]\n> ☃️ Descargar un video de Twitter/X.',
            ' 🎄  *#ig • #instagram* + [Link]\n> ☃️ Descargar un reel de Instagram.',
            ' 🎄  *#pinterest • #pin* + [busqueda] / [Link]\n> ☃️ Buscar y descargar imagenes de Pinterest.',
            ' 🎄  *#image • #imagen* + [busqueda]\n> ☃️ Buscar y descargar imagenes de Google.',
            ' 🎄  *#apk • #modapk* + [busqueda]\n> ☃️ Descargar un apk de Aptoide.',
            ' 🎄  *#ytsearch • #search* + [busqueda]\n> ☃️ Buscar videos de YouTube.'
        ],
        description: 'Comandos de *Descargas* para descargar archivos de varias fuentes.'
    },
    'gacha': {
        title: 'GACHA',
        commands: [
            ' 🎄  *#buycharacter • #buychar • #buyc* + [nombre]\n> ☃️ Comprar un personaje en venta.',
            ' 🎄  *#charimage • #waifuimage • #cimage • #wimage* + [nombre]\n> ☃️ Ver una imagen aleatoria de un personaje.',
            ' 🎄  *#charinfo • #winfo • #waifuinfo* + [nombre]\n> ☃️ Ver información de un personaje.',
            ' 🎄  *#claim • #c • #reclamar* + {citar personaje}\n> ☃️ Reclamar un personaje.',
            ' 🎄  *#delclaimmsg*\n> ☃️ Restablecer el mensaje al reclamar un personaje',
            ' 🎄  *#deletewaifu • #delwaifu • #delchar* + [nombre]\n> ☃️ Eliminar un personaje reclamado.',
            ' 🎄  *#favoritetop • #favtop*\n> ☃️ Ver el top de personajes favoritos.',
            ' 🎄  *#gachainfo • #ginfo • #infogacha*\n> ☃️ Ver tu información de gacha.',
            ' 🎄  *#giveallharem* + [@usuario]\n> ☃️ Regalar todos tus personajes a otro usuario.',
            ' 🎄  *#givechar • #givewaifu • #regalar* + [@usuario] [nombre]\n> ☃️ Regalar un personaje a otro usuario.',
            ' 🎄  *#robwaifu • #robarwaifu* + [@usuario]\n> ☃️ Robar un personaje a otro usuario.',
            ' 🎄  *#harem • #waifus • #claims* + <@usuario>\n> ☃️ Ver tus personajes reclamados.',
            ' 🎄  *#haremshop • #tiendawaifus • #wshop* + <Pagina>\n> ☃️ Ver los personajes en venta.',
            ' 🎄  *#removesale • #removerventa* + [precio] [nombre]\n> ☃️ Eliminar un personaje en venta.',
            ' 🎄  *#rollwaifu • #rw • #roll*\n> ☃️ Waifu o husbando aleatorio',
            ' 🎄  *#sell • #vender* + [precio] [nombre]\n> ☃️ Poner un personaje a la venta.',
            ' 🎄  *#serieinfo • #ainfo • #animeinfo* + [nombre]\n> ☃️ Información de un anime.',
            ' 🎄  *#serielist • #slist • #animelist*\n> ☃️ Listar series del bot',
            ' 🎄  *#setclaimmsg • #setclaim* + [mensaje]\n> ☃️ Modificar el mensaje al reclamar un personaje',
            ' 🎄  *#trade • #intercambiar* + [Tu personaje] / [Personaje 2]\n> ☃️ Intercambiar un personaje con otro usuario',
            ' 🎄  *#vote • #votar* + [nombre]\n> ☃️ Votar por un personaje para subir su valor.',
            ' 🎄  *#waifusboard • #waifustop • #topwaifus • #wtop* + [número]\n> ☃️ Ver el top de personajes con mayor valor.'
        ],
        description: 'Comandos de *Gacha* para reclamar y colecciónar personajes.'
    },
    'sockets': {
        title: 'SOCKETS',
        commands: [
            ' 🎄  *#qr • #code*\n> ☃️ Crear un Sub-Bot con un codigo QR/Code',
            ' 🎄  *#bots • #botlist*\n> ☃️ Ver el numero de bots activos.',
            ' 🎄  *#status • #estado*\n> ☃️ Ver estado del bot.',
            ' 🎄  *#p • #ping*\n> ☃️ Medir tiempo de respuesta.',
            ' 🎄  *#join* + [Invitacion]\n> ☃️ Unir al bot a un grupo.',
            ' 🎄  *#leave • #salir*\n> ☃️ Salir de un grupo.',
            ' 🎄  *#logout*\n> ☃️ Cerrar sesion del bot.',
            ' 🎄  *#setpfp • #setimage*\n> ☃️ Cambiar la imagen de perfil',
            ' 🎄  *#setstatus* + [estado]\n> ☃️ Cambiar el estado del bot',
            ' 🎄  *#setusername* + [nombre]\n> ☃️ Cambiar el nombre de usuario'
        ],
        description: 'Comandos para registrar tu propio Bot.'
    },
    'profiles': {
        title: 'Profiles',
        commands: [
            ' 🎄  *#leaderboard • #lboard • #top* + <Paginá>\n> ☃️ Top de usuarios con más experiencia.',
            ' 🎄  *#level • #lvl* + <@Mencion>\n> ☃️ Ver tu nivel y experiencia actual.',
            ' 🎄  *#marry • #casarse* + <@Mencion>\n> ☃️ Casarte con alguien.',
            ' 🎄  *#profile • #perfil* + <@Mencion>\n> ☃️ Ver tu perfil.',
            ' 🎄  *#setbirth* + [fecha]\n> ☃️ Establecer tu fecha de cumpleaños.',
            ' 🎄  *#setdescription • #setdesc* + [Descripcion]\n> ☃️ Establecer tu descripcion.',
            ' 🎄  *#setgenre* + Hombre | Mujer\n> ☃️ Establecer tu genero.',
            ' 🎄  *#delgenre • #delgenero*\n> ☃️ Eliminar tu género.',
            ' 🎄  *#delbirth* + [fecha]\n> ☃️ Borrar tu fecha de cumpleaños.',
            ' 🎄  *#divorce*\n> ☃️ Divorciarte de tu pareja.',
            ' 🎄  *#setfavourite • #setfav* + [Personaje]\n> ☃️ Establecer tu claim favorito.',
            ' 🎄  *#deldescription • #deldesc*\n> ☃️ Eliminar tu descripción.',
            ' 🎄  *#prem • #vip*\n> ☃️ Comprar membresía premium.'
        ],
        description: 'Comandos de *Perfil* para ver y configurar tu perfil.'
    },
    'grupo': {
        title: 'GRUPO',
        commands: [
            ' 🎄  *#tag • #hidetag • #invocar • #tagall* + [mensaje]\n> ☃️ Envía un mensaje mencionando a todos los usuarios del grupo.',
            ' 🎄  *#detect • #alertas* + [enable/disable]\n> ☃️ Activar/desactivar las alertas de promote/demote',
            ' 🎄  *#antilink • #antienlace* + [enable/disable]\n> ☃️ Activar/desactivar el antienlace (enlaces de WhatsApp)',
            ' 🎄  *#bot* + [enable/disable]\n> ☃️ Activar/desactivar al bot',
            ' 🎄  *#close • #cerrar*\n> ☃️ Cerrar el grupo para que solo los administradores puedan enviar mensajes.',
            ' 🎄  *#demote* + <@usuario> | {mencion}\n> ☃️ Descender a un usuario de administrador.',
            ' 🎄  *#economy* + [enable/disable]\n> ☃️ Activar/desactivar los comandos de economía',
            ' 🎄  *#gacha* + [enable/disable]\n> ☃️ Activar/desactivar los comandos de Gacha y Games.',
            ' 🎄  *#welcome • #bienvenida* + [enable/disable]\n> ☃️ Activar/desactivar la bienvenida y despedida.',
            ' 🎄  *#setbye* + [texto]\n> ☃️ Establecer un mensaje de despedida personalizado.',
            ' 🎄  *#setprimary* + [@bot]\n> ☃️ Establece un bot como primario del grupo.',
            ' 🎄  *#setwelcome* + [texto]\n> ☃️ Establecer un mensaje de bienvenida personalizado.',
            ' 🎄  *#kick • #ban* + <@usuario> | {mencion}\n> ☃️ Expulsar a un usuario del grupo.',
            ' 🎄  *#nsfw* + [enable/disable]\n> ☃️ Activar/desactivar los comandos NSFW',
            ' 🎄  *#onlyadmin* + [enable/disable]\n> ☃️ Permitir que solo los administradores puedan utilizar los comandos.',
            ' 🎄  *#open • #abrir*\n> ☃️ Abrir el grupo para que todos los usuarios puedan enviar mensajes.',
            ' 🎄  *#promote* + <@usuario> | {mencion}\n> ☃️ Ascender a un usuario a administrador.',
            ' 🎄  *#add • #añadir • #agregar* + {número}\n> ☃️ Invita a un usuario a tu grupo.',
            ' 🎄  *#admins • #administradores* + [texto]\n> ☃️ Mencionar a los admins para solicitar ayuda.',
            ' 🎄  *#restablecer • #revoke*\n> ☃️ Restablecer enlace del grupo.',
            ' 🎄  *#addwarn • #warn* + <@usuario> | {mencion}\n> ☃️ Advertir aún usuario.',
            ' 🎄  *#unwarn • #delwarn* + <@usuario> | {mencion}\n> ☃️ Quitar advertencias de un usuario.',
            ' 🎄  *#advlist • #listadv*\n> ☃️ Ver lista de usuarios advertidos.',
            ' 🎄  *#inactivos • #kickinactivos*\n> ☃️ Ver y eliminar a usuarios inactivos.',
            ' 🎄  *#listnum • #kicknum* [texto]\n> ☃️ Eliminar usuarios con prefijo de país.',
            ' 🎄  *#gpbanner • #groupimg*\n> ☃️ Cambiar la imagen del grupo.',
            ' 🎄  *#gpname • #groupname* [texto]\n> ☃️ Cambiar la nombre del grupo.',
            ' 🎄  *#gpdesc • #groupdesc* [texto]\n> ☃️ Cambiar la descripción del grupo.',
            ' 🎄  *#del • #delete* + {citar un mensaje}\n> ☃️ Eliminar un mensaje.',
            ' 🎄  *#linea • #listonline*\n> ☃️ Ver lista de usuarios en linea.',
            ' 🎄  *#gp • #infogrupo*\n> ☃️ Ver la Informacion del grupo.',
            ' 🎄  *#link*\n> ☃️ Ver enlace de invitación del grupo.'
        ],
        description: 'Comandos para *Administradores* de grupos.'
    },
    'anime': {
        title: 'ANIME',
        commands: [
            ' 🎄  *#angry • #enojado* + <mencion>\n> ☃️ Estar enojado',
            ' 🎄  *#bath • #bañarse* + <mencion>\n> ☃️ Bañarse',
            ' 🎄  *#bite • #morder* + <mencion>\n> ☃️ Muerde a alguien',
            ' 🎄  *#bleh • #lengua* + <mencion>\n> ☃️ Sacar la lengua',
            ' 🎄  *#blush • #sonrojarse* + <mencion>\n> ☃️ Sonrojarte',
            ' 🎄  *#bored • #aburrido* + <mencion>\n> ☃️ Estar aburrido',
            ' 🎄  *#clap • #aplaudir* + <mencion>\n> ☃️ Aplaudir',
            ' 🎄  *#coffee • #cafe • #café* + <mencion>\n> ☃️ Tomar café',
            ' 🎄  *#cry • #llorar* + <mencion>\n> ☃️ Llorar por algo o alguien',
            ' 🎄  *#cuddle • #acurrucarse* + <mencion>\n> ☃️ Acurrucarse',
            ' 🎄  *#dance • #bailar* + <mencion>\n> ☃️ Sacate los pasitos prohíbidos',
            ' 🎄  *#dramatic • #drama* + <mencion>\n> ☃️ Drama',
            ' 🎄  *#drunk • #borracho* + <mencion>\n> ☃️ Estar borracho',
            ' 🎄  *#eat • #comer* + <mencion>\n> ☃️ Comer algo delicioso',
            ' 🎄  *#facepalm • #palmada* + <mencion>\n> ☃️ Darte una palmada en la cara',
            ' 🎄  *#happy • #feliz* + <mencion>\n> ☃️ Salta de felicidad',
            ' 🎄  *#hug • #abrazar* + <mencion>\n> ☃️ Dar un abrazo',
            ' 🎄  *#impregnate • #preg • #preñar • #embarazar* + <mencion>\n> ☃️ Embarazar a alguien',
            ' 🎄  *#kill • #matar* + <mencion>\n> ☃️ Toma tu arma y mata a alguien',
            ' 🎄  *#kiss • #muak* + <mencion>\n> ☃️ Dar un beso',
            ' 🎄  *#kisscheek • #beso* + <mencion>\n> ☃️ Beso en la mejilla',
            ' 🎄  *#laugh • #reirse* + <mencion>\n> ☃️ Reírte de algo o alguien',
            ' 🎄  *#lick • #lamer* + <mencion>\n> ☃️ Lamer a alguien',
            ' 🎄  *#love • #amor • #enamorado • #enamorada* + <mencion>\n> ☃️ Sentirse enamorado',
            ' 🎄  *#pat • #palmadita • #palmada* + <mencion>\n> ☃️ Acaricia a alguien',
            ' 🎄  *#poke • #picar* + <mencion>\n> ☃️ Picar a alguien',
            ' 🎄  *#pout • #pucheros* + <mencion>\n> ☃️ Hacer pucheros',
            ' 🎄  *#punch • #pegar • #golpear* + <mencion>\n> ☃️ Dar un puñetazo',
            ' 🎄  *#run • #correr* + <mencion>\n> ☃️ Correr',
            ' 🎄  *#sad • #triste* + <mencion>\n> ☃️ Expresar tristeza',
            ' 🎄  *#scared • #asustado • #asustada* + <mencion>\n> ☃️ Estar asustado',
            ' 🎄  *#seduce • #seducir* + <mencion>\n> ☃️ Seducir a alguien',
            ' 🎄  *#shy • #timido • #timida* + <mencion>\n> ☃️ Sentir timidez',
            ' 🎄  *#slap • #bofetada* + <mencion>\n> ☃️ Dar una bofetada',
            ' 🎄  *#sleep • #dormir* + <mencion>\n> ☃️ Tumbarte a dormir',
            ' 🎄  *#smoke • #fumar* + <mencion>\n> ☃️ Fumar',
            ' 🎄  *#spit • #escupir* + <mencion>\n> ☃️ Escupir',
            ' 🎄  *#step • #pisar* + <mencion>\n> ☃️ Pisar a alguien',
            ' 🎄  *#think • #pensar* + <mencion>\n> ☃️ Pensar en algo',
            ' 🎄  *#walk • #caminar* + <mencion>\n> ☃️ Caminar',
            ' 🎄  *#wink • #guiñar* + <mencion>\n> ☃️ Guiñar el ojo',
            ' 🎄  *#cringe • #avergonzarse* + <mencion>\n> ☃️ Sentir vergüenza ajena',
            ' 🎄  *#smug • #presumir* + <mencion>\n> ☃️ Presumir con estilo',
            ' 🎄  *#smile • #sonreir* + <mencion>\n> ☃️ Sonreír con ternura',
            ' 🎄  *#highfive • #5* + <mencion>\n> ☃️ Chocar los cinco',
            ' 🎄  *#bully • #bullying* + <mencion>\n> ☃️ Molestar a alguien',
            ' 🎄  *#handhold • #mano* + <mencion>\n> ☃️ Tomarse de la mano',
            ' 🎄  *#wave • #ola • #hola* + <mencion>\n> ☃️ Saludar con la mano',
            ' 🎄  *#waifu*\n> ☃️ Buscar una waifu aleatoria.',
            ' 🎄  *#ppcouple • #ppcp*\n> ☃️ Genera imágenes para amistades o parejas.'
        ],
        description: 'Comandos de reacciones de anime.'
    },
        'otros': {
        title: 'OTROS',
        commands: [
            ' 🎄  *#help • #menu*\n> ☃️ Ver el menú de comandos.',
            ' 🎄  *#sc • #script*\n> ☃️ Link del repositorio oficial del Bot.',
            ' 🎄  *#sug • #suggest*\n> ☃️ Sugerir nuevas funciones al desarrollador.',
            ' 🎄  *#reporte • #reportar*\n> ☃️ Reportar fallas o problemas del bot.',
            ' 🎄  *#calcular • #cal*\n> ☃️ Calcular tipos de ecuaciones.',
            ' 🎄  *#delmeta*\n> ☃️ Restablecer el pack y autor por defecto para tus stickers.',
            ' 🎄  *#getpic • #pfp* + [@usuario]\n> ☃️ Ver la foto de perfil de un usuario.',
            ' 🎄  *#say* + [texto]\n> ☃️ Repetir un mensaje',
            ' 🎄  *#setmeta* + [autor] | [pack]\n> ☃️ Establecer el pack y autor por defecto para tus stickers.',
            ' 🎄  *#sticker • #s • #wm* + {citar una imagen/video}\n> ☃️ Convertir una imagen/video a sticker',
            ' 🎄  *#toimg • #img* + {citar sticker}\n> ☃️ Convertir un sticker de una vista a imagen.',
            ' 🎄  *#togif • #gif* + {citar sticker}\n> ☃️ Convertir un sticker animado a gif.',
            ' 🎄  *#brat • #bratv • #qc • #emojimix*︎ \n> ☃️ Crear stickers con texto.',
            ' 🎄  *#gitclone* + [Link]\n> ☃️ Descargar un repositorio de Github.',
            ' 🎄  *#enhance • #remini • #hd*\n> ☃️ Mejorar calidad de una imagen.',
            ' 🎄  *#letra • #style* \n> ☃️ Cambia la fuente de las letras.',
            ' 🎄  *#read • #readviewonce*\n> ☃️ Ver imágenes viewonce.',
            ' 🎄  *#ss • #ssweb*\n> ☃️ Ver el estado de una página web.',
            ' 🎄  *#translate • #traducir • #trad*\n> ☃️ Traducir palabras en otros idiomas.',
            ' 🎄  *#ia • #gemini*\n> ☃️ Preguntar a Chatgpt.',
            ' 🎄  *#tourl • #catbox*\n> ☃️ Convertidor de imágen/video en urls.',
            ' 🎄  *#wiki • #wikipedia*\n> ☃️ Investigar temas a través de Wikipedia.',
            ' 🎄  *#dalle • #flux*\n> ☃️ Crear imágenes con texto mediante IA.',
            ' 🎄  *#npmdl • #nmpjs*\n> ☃️ Descargar paquetes de NPMJS.',
            ' 🎄  *#google*\n> ☃️ Realizar búsquedas por Google.'
        ],
        description: 'Comandos de *Útilidades*.'
    },
    'nsfw': {
        title: 'NSFW',
        commands: [
            ' 🎄  *#danbooru • #dbooru* + [Tags]\n> ☃️ Buscar imagenes en Danbooru',
            ' 🎄  *#gelbooru • #gbooru* + [Tags]\n> ☃️ Buscar imagenes en Gelbooru',
            ' 🎄  *#rule34 • #r34* + [Tags]\n> ☃️ Buscar imagenes en Rule34',
            ' 🎄  *#xvideos •#xvideosdl* + [Link]\n> ☃️ Descargar un video Xvideos. ',
            ' 🎄  *#xnxx •#xnxxdl* + [Link]\n> ☃️ Descargar un video Xnxx.',
            ' 🎄  *#tetas*\n> ☃️ Ricas *TETAS*.',
            ' 🎄  *#culos*\n> ☃️ Ricos *CULOS*.',
        ],
        description: 'Comandos de polnito lico.'
    }
}

let handler = async (m, { conn }) => { 
    
    const fullText = m.text ? m.text.trim() : ''; 
    const parts = fullText.split(' ').filter(v => v.length > 0);

    const requestedSection = parts[1] ? parts[1].toLowerCase() : null; 
    
    let mentionedJid = await m.mentionedJid
    let userId = mentionedJid && mentionedJid[0] ? mentionedJid[0] : m.sender
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length

    let header = `̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮
︶•︶°︶•︶°︶•︶°︶•︶°︶•︶°︶
> ❄️ _Arigato *Senpai*!!!_ ☺️, es todo un placer hablarte, soy *${botname}*, Aquí tienes la lista de comandos.
Feliz Navidad y próspero año nuevo!!! 🎄🎉☃️ 
╭┈ࠢ͜┅ࠦ͜͜╾݊͜─ؕ͜─ׄ͜─֬͜─֟͜─֫͜─ׄ͜─ؕ͜─݊͜┈ࠦ͜┅ࠡ͜͜┈࠭͜͜۰۰͜۰
│ 🍪 *Tipo* » ${(conn.user.jid == global.conn.user.jid ? 'Principal' : 'Sub-Bot')}
│ 🍪 *Usuarios* » ${totalreg.toLocaleString()}
│ 🍪 *Versión* » ${vs}
│ 🍪 *Plugins* » ${totalCommands}
│ 🍪 *Librería* » ${libreria}
╰ׅ┈ࠢ͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴ ⋱࣭ ᩴ  ⋮֔   ᩴ ⋰╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜┈ࠢ͜╯ׅ\n\n`;

    let footer = `\n╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ`;
    let body = '';

    if (requestedSection) {
        const sectionData = menuSections[requestedSection];

        if (sectionData) {
            let sectionText = `╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *${sectionData.title}* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜\n> 🎁 ${sectionData.description}\n`;
            sectionText += sectionData.commands.join('\n');
            sectionText += footer;
            body = sectionText;
        } else {
            const availableSections = Object.keys(menuSections).map(s => `*${s}*`).join(', ');
            body = `> ⚠️ **¡Sección no encontrada!**
> Por favor, usa *#menu* seguido de una de estas secciones:
> ${availableSections}.

> Ejemplo: *#menu gacha*`;
        }
    } else {
        for (const key in menuSections) {
            const section = menuSections[key];
            let sectionText = `╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *${section.title}* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜\n> 🎁 ${section.description}\n`;
            sectionText += section.commands.join('\n');
            sectionText += footer;
            body += sectionText + '\n';
        }
    }

    let txt = header + body.trim();
    
    await conn.sendMessage(m.chat, { 
        text: txt,
        contextInfo: {
            mentionedJid: [userId],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: channelRD.id,
                serverMessageId: '',
                newsletterName: channelRD.name
            },
            externalAdReply: {
                title: botname,
                body: textbot,
                mediaType: 1,
                mediaUrl: redes,
                sourceUrl: redes,
                thumbnail: await (await fetch(banner)).buffer(),
                showAdAttribution: false,
                containsAutoReply: true,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
}

handler.help = ['menu', 'menu <seccion>']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler
