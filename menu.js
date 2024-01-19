const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("./lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *MAIN MENU* 』
${petik}┣❏ ${prefix}simplemenu
┣❏ ${prefix}infobot
┣❏ ${prefix}donate
┣❏ ${prefix}dashboard
┣❏ ${prefix}owner
┣❏ ${prefix}cekdrive
┣❏ ${prefix}cekbandwidth
┣❏ ${prefix}cekpremium
┣❏ ${prefix}listpremium
┣❏ ${prefix}listsewa
┣❏ ${prefix}speed
┣❏ ${prefix}runtime
┣❏ ${prefix}listbahasa ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *CONVERTED MENU* 』
${petik}┣❏ ${prefix}toanime
┣❏ ${prefix}differentme
┣❏ ${prefix}differentme2
┣❏ ${prefix}diffusion
┣❏ ${prefix}txt2img
┣❏ ${prefix}aiscene
┣❏ ${prefix}remini
┣❏ ${prefix}hdr
┣❏ ${prefix}nobg
┣❏ ${prefix}removebg
┣❏ ${prefix}resize
┣❏ ${prefix}ssweb
┣❏ ${prefix}ssweb2
┣❏ ${prefix}sticker
┣❏ ${prefix}stickerwm
┣❏ ${prefix}smeme
┣❏ ${prefix}toimg
┣❏ ${prefix}tourl
┣❏ ${prefix}tovideo
┣❏ ${prefix}tomp3
┣❏ ${prefix}toaudio
┣❏ ${prefix}tovn
┣❏ ${prefix}toptv
┣❏ ${prefix}readvo
┣❏ ${prefix}ttp
┣❏ ${prefix}attp
┣❏ ${prefix}qc
┣❏ ${prefix}emojimix
┣❏ ${prefix}ai
┣❏ ${prefix}aiimg
┣❏ ${prefix}aidraw
┣❏ ${prefix}chatgpt
┣❏ ${prefix}nuliskiri
┣❏ ${prefix}nuliskanan
┣❏ ${prefix}foliokiri
┣❏ ${prefix}foliokanan
┣❏ ${prefix}say
┣❏ ${prefix}translate ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *VOICE CHANGER* 』
${petik}┣❏ ${prefix}bass
┣❏ ${prefix}deep
┣❏ ${prefix}fast
┣❏ ${prefix}slow
┣❏ ${prefix}smooth
┣❏ ${prefix}fat
┣❏ ${prefix}earrape
┣❏ ${prefix}blown
┣❏ ${prefix}nightcore
┣❏ ${prefix}tupai
┣❏ ${prefix}robot
┣❏ ${prefix}reverse ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *ANONYMOUS MENU* 』
${petik}┣❏ ${prefix}anonymouschat
┣❏ ${prefix}start
┣❏ ${prefix}next
┣❏ ${prefix}stop
┣❏ ${prefix}sendprofile
┣❏ ${prefix}menfess
┣❏ ${prefix}confess
┣❏ ${prefix}balasmenfess
┣❏ ${prefix}tolakmenfess
┣❏ ${prefix}stopmenfess ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *MBE MENU* 』
${petik}┣❏ ${prefix}pendahuluan
┣❏ ${prefix}kosong ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *RPG MENU* 』
${petik}┣❏ ${prefix}inventory
┣❏ ${prefix}mining
┣❏ ${prefix}buy
┣❏ ${prefix}sell
┣❏ ${prefix}heal
┣❏ ${prefix}hunt
┣❏ ${prefix}adventure
┣❏ ${prefix}luckyday
┣❏ ${prefix}killslime
┣❏ ${prefix}killgoblin
┣❏ ${prefix}killdevil
┣❏ ${prefix}killbehemoth
┣❏ ${prefix}killdemon
┣❏ ${prefix}killdemonking
┣❏ ${prefix}joinrpg
┣❏ ${prefix}sellikan
┣❏ ${prefix}sellbesi
┣❏ ${prefix}sellemas
┣❏ ${prefix}jelajah
┣❏ ${prefix}mancing
┣❏ ${prefix}jualikan
┣❏ ${prefix}jualcoal
┣❏ ${prefix}jualstone
┣❏ ${prefix}jualingot
┣❏ ${prefix}jualkayu
┣❏ ${prefix}jualbahankimia
┣❏ ${prefix}lebur
┣❏ ${prefix}nebang
┣❏ ${prefix}goplanet
┣❏ ${prefix}ojek ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *GAME MENU* 』
${petik}┣❏ ${prefix}caklontong
┣❏ ${prefix}tebakgambar
┣❏ ${prefix}tebakkata
┣❏ ${prefix}tebakgame
┣❏ ${prefix}tebakbendera
┣❏ ${prefix}tebakkalimat
┣❏ ${prefix}tebaksiapa
┣❏ ${prefix}tebakkimia
┣❏ ${prefix}tebaklirik
┣❏ ${prefix}tebaktebakan
┣❏ ${prefix}tekateki
┣❏ ${prefix}susunkata
┣❏ ${prefix}tictactoe
┣❏ ${prefix}delttt
┣❏ ${prefix}casino
┣❏ ${prefix}delcasino ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *GROUP MENU* 』
${petik}┣❏ ${prefix}autoaigc
┣❏ ${prefix}afk
┣❏ ${prefix}welcome
┣❏ ${prefix}left
┣❏ ${prefix}pppanjanggc
┣❏ ${prefix}opentime
┣❏ ${prefix}closetime
┣❏ ${prefix}setopen
┣❏ ${prefix}changesetopen
┣❏ ${prefix}delsetopen
┣❏ ${prefix}setclose
┣❏ ${prefix}changesetclose
┣❏ ${prefix}delsetclose
┣❏ ${prefix}setwelcome
┣❏ ${prefix}changewelcome
┣❏ ${prefix}delsetwelcome
┣❏ ${prefix}setleft
┣❏ ${prefix}changeleft
┣❏ ${prefix}delsetleft
┣❏ ${prefix}linkgc
┣❏ ${prefix}setppgc
┣❏ ${prefix}setppgc2
┣❏ ${prefix}setnamegc
┣❏ ${prefix}setdesc
┣❏ ${prefix}autodlgc
┣❏ ${prefix}antilink
┣❏ ${prefix}antilinktt
┣❏ ${prefix}kickme
┣❏ ${prefix}mute
┣❏ ${prefix}open
┣❏ ${prefix}close
┣❏ ${prefix}add
┣❏ ${prefix}kick
┣❏ ${prefix}promote
┣❏ ${prefix}demote
┣❏ ${prefix}revoke
┣❏ ${prefix}hidetag
┣❏ ${prefix}checksewa ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *DOWNLOAD MENU* 』
${petik}┣❏ ${prefix}play
┣❏ ${prefix}ytmp3
┣❏ ${prefix}ytmp4
┣❏ ${prefix}ytv
┣❏ ${prefix}ytv2
┣❏ ${prefix}spotify
┣❏ ${prefix}spotifydl
┣❏ ${prefix}instagram
┣❏ ${prefix}ig
┣❏ ${prefix}ig2
┣❏ ${prefix}ig3
┣❏ ${prefix}igphoto
┣❏ ${prefix}igvideo
┣❏ ${prefix}igreels
┣❏ ${prefix}twitter
┣❏ ${prefix}tiktok
┣❏ ${prefix}tiktokslide
┣❏ ${prefix}tiktoksearch
┣❏ ${prefix}tiktokaudio
┣❏ ${prefix}mediafire
┣❏ ${prefix}gitclone
┣❏ ${prefix}fbdl
┣❏ ${prefix}fb2
┣❏ ${prefix}fb3
┣❏ ${prefix}fb4
┣❏ ${prefix}gdrive ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *SEARCH MENU* 』
${petik}┣❏ ${prefix}spotifysearch
┣❏ ${prefix}lk21
┣❏ ${prefix}jarak
┣❏ ${prefix}bukalapak
┣❏ ${prefix}apk
┣❏ ${prefix}google
┣❏ ${prefix}ytsearch
┣❏ ${prefix}grupwa
┣❏ ${prefix}pinterest
┣❏ ${prefix}lirik
┣❏ ${prefix}infogempa
┣❏ ${prefix}komikusearch ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *RANDOM ANIME* 』
${petik}┣❏ ${prefix}akira
┣❏ ${prefix}akiyama
┣❏ ${prefix}ana
┣❏ ${prefix}asuna
┣❏ ${prefix}ayuzawa
┣❏ ${prefix}boruto
┣❏ ${prefix}chitanda
┣❏ ${prefix}deidara
┣❏ ${prefix}elaina
┣❏ ${prefix}emilia
┣❏ ${prefix}erza
┣❏ ${prefix}fanart
┣❏ ${prefix}genshin
┣❏ ${prefix}gremory
┣❏ ${prefix}hestia
┣❏ ${prefix}hinata
┣❏ ${prefix}husbu
┣❏ ${prefix}icon
┣❏ ${prefix}inori
┣❏ ${prefix}isuzu
┣❏ ${prefix}itachi
┣❏ ${prefix}itori
┣❏ ${prefix}kaga
┣❏ ${prefix}kagura
┣❏ ${prefix}kaguya
┣❏ ${prefix}kakasih
┣❏ ${prefix}kaneki
┣❏ ${prefix}kaori
┣❏ ${prefix}keneki
┣❏ ${prefix}kosaki
┣❏ ${prefix}kotori
┣❏ ${prefix}kuriyama
┣❏ ${prefix}kuroha
┣❏ ${prefix}kurumi
┣❏ ${prefix}loli
┣❏ ${prefix}madara
┣❏ ${prefix}megumin
┣❏ ${prefix}menus
┣❏ ${prefix}mikasa
┣❏ ${prefix}miku
┣❏ ${prefix}minato
┣❏ ${prefix}naruto
┣❏ ${prefix}natsukawa
┣❏ ${prefix}nezuko
┣❏ ${prefix}nishimiya
┣❏ ${prefix}onepiece
┣❏ ${prefix}pokemon
┣❏ ${prefix}rem
┣❏ ${prefix}rize
┣❏ ${prefix}sagiri
┣❏ ${prefix}sakura
┣❏ ${prefix}sasuke
┣❏ ${prefix}shina
┣❏ ${prefix}shinka
┣❏ ${prefix}shizuka
┣❏ ${prefix}shota
┣❏ ${prefix}simp
┣❏ ${prefix}tomori
┣❏ ${prefix}toukachan
┣❏ ${prefix}tsunade
┣❏ ${prefix}yatogami
┣❏ ${prefix}yuki ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *RANDOM MENU* 』
${petik}┣❏ ${prefix}waifu
┣❏ ${prefix}ppcp
┣❏ ${prefix}cosplay
┣❏ ${prefix}cecan
┣❏ ${prefix}cogan
┣❏ ${prefix}meme
┣❏ ${prefix}memeindo
┣❏ ${prefix}darkjokes ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *RANDOM QUOTES* 』
${petik}┣❏ ${prefix}quotesdilan
┣❏ ${prefix}quotesbucin
┣❏ ${prefix}quotesjawa
┣❏ ${prefix}quotesanime
┣❏ ${prefix}galau
┣❏ ${prefix}podcast
┣❏ ${prefix}sadpodcast
┣❏ ${prefix}speak
┣❏ ${prefix}aivoice
┣❏ ${prefix}simivoice ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *CEWEKASIA MENU* 』
${petik}┣❏ ${prefix}lisa
┣❏ ${prefix}rose
┣❏ ${prefix}jiso
┣❏ ${prefix}jenny
┣❏ ${prefix}indonesia
┣❏ ${prefix}japan
┣❏ ${prefix}china
┣❏ ${prefix}malaysia
┣❏ ${prefix}vietnam
┣❏ ${prefix}korea
┣❏ ${prefix}thailand ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *COWOKASIA MENU* 』
${petik}┣❏ ${prefix}suga
┣❏ ${prefix}wuyifan
┣❏ ${prefix}parkchanyeol
┣❏ ${prefix}ohsehun
┣❏ ${prefix}luhan
┣❏ ${prefix}kimtaehyung
┣❏ ${prefix}kimsoek
┣❏ ${prefix}kimnanjoon
┣❏ ${prefix}kimjunmyeon
┣❏ ${prefix}kimjong
┣❏ ${prefix}kimjondae
┣❏ ${prefix}jungkook
┣❏ ${prefix}jimin
┣❏ ${prefix}jhope
┣❏ ${prefix}huangzitao
┣❏ ${prefix}dohkyungsoo
┣❏ ${prefix}baekhyung ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *BALANCE MENU* 』
${petik}┣❏ ${prefix}balance
┣❏ ${prefix}limit
┣❏ ${prefix}buylimit
┣❏ ${prefix}buyglimit
┣❏ ${prefix}transfer
┣❏ ${prefix}toplocal
┣❏ ${prefix}topglobal ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *OWNER MENU* 』
${petik}┣❏ ${prefix}pushkontak
┣❏ ${prefix}jpm
┣❏ ${prefix}banuser
┣❏ ${prefix}unbanuser
┣❏ ${prefix}listban
┣❏ ${prefix}self
┣❏ ${prefix}public
┣❏ ${prefix}setppbot
┣❏ ${prefix}setppbot2
┣❏ ${prefix}listgc
┣❏ ${prefix}joingc
┣❏ ${prefix}creategc
┣❏ ${prefix}leavegc
┣❏ ${prefix}broadcast
┣❏ ${prefix}bcimg
┣❏ ${prefix}bcstik
┣❏ ${prefix}bcvn
┣❏ ${prefix}bcvideo
┣❏ ${prefix}bcsewa
┣❏ ${prefix}addpremium
┣❏ ${prefix}delpremium
┣❏ ${prefix}addsewa
┣❏ ${prefix}delsewa
┣❏ ${prefix}blok
┣❏ ${prefix}unblok
┣❏ ${prefix}listblok
┣❏ ${prefix}autoaipc
┣❏ ${prefix}autoread
┣❏ ${prefix}autobio
┣❏ ${prefix}antidelete
┣❏ ${prefix}antiviewonce
┣❏ ${prefix}autorespond
┣❏ ${prefix}anticall
┣❏ ${prefix}autoblok212
┣❏ ${prefix}resetlimit ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *STORAGE MENU* 』
${petik}┣❏ ${prefix}addstik
┣❏ ${prefix}addvn
┣❏ ${prefix}addimg
┣❏ ${prefix}addvid
┣❏ ${prefix}liststik
┣❏ ${prefix}listvn
┣❏ ${prefix}listimg
┣❏ ${prefix}listvid
┣❏ ${prefix}sampah
┣❏ ${prefix}delsampah
┣❏ ${prefix}sampah2
┣❏ ${prefix}delsampah2 ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *ASUPAN MENU* 』
${petik}┣❏ ${prefix}asupan
┣❏ ${prefix}bocil
┣❏ ${prefix}santuy
┣❏ ${prefix}ukhty
┣❏ ${prefix}chika
┣❏ ${prefix}delvira
┣❏ ${prefix}ayu
┣❏ ${prefix}bunga
┣❏ ${prefix}aura
┣❏ ${prefix}nisa
┣❏ ${prefix}ziva
┣❏ ${prefix}yana
┣❏ ${prefix}viona
┣❏ ${prefix}syania
┣❏ ${prefix}riri
┣❏ ${prefix}syifa
┣❏ ${prefix}mama_gina
┣❏ ${prefix}alcakenya
┣❏ ${prefix}mangayutri
┣❏ ${prefix}rikagusriani
┣❏ ${prefix}geayubi
┣❏ ${prefix}syifa ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *RANDOM STICKER* 』
${petik}┣❏${prefix}patrick
┣❏ ${prefix}sponsbob
┣❏ ${prefix}kawan-sponsbob
┣❏ ${prefix}dino-kuning
┣❏ ${prefix}manusia-lidi
┣❏ ${prefix}popoci
┣❏ ${prefix}awoawo
┣❏ ${prefix}chat
┣❏ ${prefix}dbfly
┣❏ ${prefix}doge
┣❏ ${prefix}gojosatoru
┣❏ ${prefix}hope-boy
┣❏ ${prefix}jisoo
┣❏ ${prefix}kr-robot
┣❏ ${prefix}kucing
┣❏ ${prefix}lonte
┣❏ ${prefix}menjamet
┣❏ ${prefix}meow
┣❏ ${prefix}nicholas
┣❏ ${prefix}tyni ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *STALKING MENU* 』
${petik}┣❏ ${prefix}ttstalk
┣❏ ${prefix}igstalk
┣❏ ${prefix}mlstalk
┣❏ ${prefix}ffstalk ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *IMAGE EFFECT* 』
${petik}┣❏ ${prefix}differentme
┣❏ ${prefix}differentme2
┣❏ ${prefix}toanime
┣❏ ${prefix}aiscene
┣❏ ${prefix}remini
┣❏ ${prefix}hdr
┣❏ ${prefix}wasted
┣❏ ${prefix}beautiful
┣❏ ${prefix}fire
┣❏ ${prefix}wanted
┣❏ ${prefix}rip
┣❏ ${prefix}jail
┣❏ ${prefix}triggered
┣❏ ${prefix}brazzers
┣❏ ${prefix}gay
┣❏ ${prefix}postig ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *FUN MENU* 』
${petik}┣❏ ${prefix}apakah
┣❏ ${prefix}kapankah
┣❏ ${prefix}bisakah
┣❏ ${prefix}bagaimanakah
┣❏ ${prefix}rate
┣❏ ${prefix}gantengcek
┣❏ ${prefix}cekganteng
┣❏ ${prefix}cantikcek
┣❏ ${prefix}cekcantik
┣❏ ${prefix}sangecek
┣❏ ${prefix}ceksange
┣❏ ${prefix}gaycek
┣❏ ${prefix}cekgay
┣❏ ${prefix}lesbicek
┣❏ ${prefix}ceklesbi
┣❏ ${prefix}wangy ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *ISLAM MENU* 』
${petik}┣❏ ${prefix}kisahnabi
┣❏ ${prefix}asmaulhusna
┣❏ ${prefix}listsurah
┣❏ ${prefix}listsurah
┣❏ ${prefix}randomquran
┣❏ ${prefix}randomquran2
┣❏ ${prefix}quranaudio
┣❏ ${prefix}alquranaudio ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *BUG MENU* 』
${petik}┣❏ ${prefix}juna
┣❏ ${prefix}santet
┣❏ ${prefix}bugs
┣❏ ${prefix}buglinkpc
┣❏ ${prefix}buglinkgc <id>
┣❏ ${prefix}docugc <id>
┣❏ ${prefix}troligc <id>
┣❏ ${prefix}spams ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *TEXTPRO MENU* 』
${petik}┣❏ ${prefix}halloween2
┣❏ ${prefix}horror
┣❏ ${prefix}game8bit
┣❏ ${prefix}layered
┣❏ ${prefix}glitch2
┣❏ ${prefix}coolg
┣❏ ${prefix}coolwg
┣❏ ${prefix}realistic
┣❏ ${prefix}space3d
┣❏ ${prefix}gtiktok
┣❏ ${prefix}stone
┣❏ ${prefix}marvel
┣❏ ${prefix}pornhub
┣❏ ${prefix}avengers
┣❏ ${prefix}metalr
┣❏ ${prefix}metalg
┣❏ ${prefix}metalg2
┣❏ ${prefix}lion
┣❏ ${prefix}wolf_bw
┣❏ ${prefix}wolf_g
┣❏ ${prefix}ninja
┣❏ ${prefix}3dsteel
┣❏ ${prefix}horror2
┣❏ ${prefix}lava
┣❏ ${prefix}bagel
┣❏ ${prefix}blackpink
┣❏ ${prefix}rainbow2
┣❏ ${prefix}water_pipe
┣❏ ${prefix}halloween
┣❏ ${prefix}sketch
┣❏ ${prefix}sircuit
┣❏ ${prefix}discovery
┣❏ ${prefix}metallic2
┣❏ ${prefix}fiction
┣❏ ${prefix}demon
┣❏ ${prefix}transformer
┣❏ ${prefix}berry
┣❏ ${prefix}thunder
┣❏ ${prefix}3dstone
┣❏ ${prefix}magma
┣❏ ${prefix}neon
┣❏ ${prefix}glitch
┣❏ ${prefix}harry_potter
┣❏ ${prefix}embossed
┣❏ ${prefix}broken
┣❏ ${prefix}papercut
┣❏ ${prefix}gradient
┣❏ ${prefix}glossy
┣❏ ${prefix}watercolor
┣❏ ${prefix}multicolor
┣❏ ${prefix}neon_devil
┣❏ ${prefix}underwater
┣❏ ${prefix}bear
┣❏ ${prefix}wonderfulg
┣❏ ${prefix}christmas
┣❏ ${prefix}neon_light
┣❏ ${prefix}snow
┣❏ ${prefix}cloudsky
┣❏ ${prefix}luxury2
┣❏ ${prefix}gradient2
┣❏ ${prefix}summer
┣❏ ${prefix}writing
┣❏ ${prefix}engraved
┣❏ ${prefix}summery
┣❏ ${prefix}3dglue
┣❏ ${prefix}metaldark
┣❏ ${prefix}neonlight
┣❏ ${prefix}oscar
┣❏ ${prefix}minion
┣❏ ${prefix}holographic
┣❏ ${prefix}purple
┣❏ ${prefix}glossyb
┣❏ ${prefix}deluxe2
┣❏ ${prefix}glossyc
┣❏ ${prefix}fabric
┣❏ ${prefix}neonc
┣❏ ${prefix}newyear
┣❏ ${prefix}newyear2
┣❏ ${prefix}xmas
┣❏ ${prefix}metals
┣❏ ${prefix}blood
┣❏ ${prefix}darkg
┣❏ ${prefix}joker
┣❏ ${prefix}wicker
┣❏ ${prefix}natural
┣❏ ${prefix}firework
┣❏ ${prefix}skeleton
┣❏ ${prefix}balloon
┣❏ ${prefix}balloon2
┣❏ ${prefix}balloon3
┣❏ ${prefix}balloon4
┣❏ ${prefix}balloon5
┣❏ ${prefix}balloon6
┣❏ ${prefix}balloon7
┣❏ ${prefix}steel
┣❏ ${prefix}gloss
┣❏ ${prefix}denim
┣❏ ${prefix}decorate
┣❏ ${prefix}decorate2
┣❏ ${prefix}peridot
┣❏ ${prefix}rock
┣❏ ${prefix}glass
┣❏ ${prefix}glass2
┣❏ ${prefix}glass3
┣❏ ${prefix}glass4
┣❏ ${prefix}glass5
┣❏ ${prefix}glass6
┣❏ ${prefix}glass7
┣❏ ${prefix}glass8
┣❏ ${prefix}captain_as2
┣❏ ${prefix}robot
┣❏ ${prefix}equalizer
┣❏ ${prefix}toxic
┣❏ ${prefix}sparkling
┣❏ ${prefix}sparkling2
┣❏ ${prefix}sparkling3
┣❏ ${prefix}sparkling4
┣❏ ${prefix}sparkling5
┣❏ ${prefix}sparkling6
┣❏ ${prefix}sparkling7
┣❏ ${prefix}decorative
┣❏ ${prefix}chocolate
┣❏ ${prefix}strawberry
┣❏ ${prefix}koifish
┣❏ ${prefix}bread
┣❏ ${prefix}matrix
┣❏ ${prefix}blood2
┣❏ ${prefix}neonligth2
┣❏ ${prefix}thunder2
┣❏ ${prefix}3dbox
┣❏ ${prefix}neon2
┣❏ ${prefix}roadw
┣❏ ${prefix}bokeh
┣❏ ${prefix}gneon
┣❏ ${prefix}advanced
┣❏ ${prefix}dropwater
┣❏ ${prefix}wall
┣❏ ${prefix}chrismast
┣❏ ${prefix}honey
┣❏ ${prefix}drug
┣❏ ${prefix}marble
┣❏ ${prefix}marble2
┣❏ ${prefix}ice
┣❏ ${prefix}juice
┣❏ ${prefix}rusty
┣❏ ${prefix}abstra
┣❏ ${prefix}biscuit
┣❏ ${prefix}wood
┣❏ ${prefix}scifi
┣❏ ${prefix}metalr
┣❏ ${prefix}purpleg
┣❏ ${prefix}shiny
┣❏ ${prefix}jewelry
┣❏ ${prefix}jewelry2
┣❏ ${prefix}jewelry3
┣❏ ${prefix}jewelry4
┣❏ ${prefix}jewelry5
┣❏ ${prefix}jewelry6
┣❏ ${prefix}jewelry7
┣❏ ${prefix}jewelry8
┣❏ ${prefix}metalh
┣❏ ${prefix}golden
┣❏ ${prefix}glitter
┣❏ ${prefix}glitter2
┣❏ ${prefix}glitter3
┣❏ ${prefix}glitter4
┣❏ ${prefix}glitter5
┣❏ ${prefix}glitter6
┣❏ ${prefix}glitter7
┣❏ ${prefix}metale
┣❏ ${prefix}carbon
┣❏ ${prefix}candy
┣❏ ${prefix}metalb
┣❏ ${prefix}gemb
┣❏ ${prefix}3dchrome
┣❏ ${prefix}metalb2
┣❏ ${prefix}metalg ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *PHOTOOXY MENU* 』
${petik}┣❏ ${prefix}typography-flower
┣❏ ${prefix}under-flower
┣❏ ${prefix}bevel-text
┣❏ ${prefix}silk-text
┣❏ ${prefix}smoke-typography
┣❏ ${prefix}carvedwood
┣❏ ${prefix}scary-cemetery
┣❏ ${prefix}royallook
┣❏ ${prefix}coffeecup2
┣❏ ${prefix}illuminated
┣❏ ${prefix}harry-potter2
┣❏ ${prefix}woodblack
┣❏ ${prefix}butterfly-reflection
┣❏ ${prefix}watermelon
┣❏ ${prefix}striking
┣❏ ${prefix}metallicglow
┣❏ ${prefix}rainbow-text
┣❏ ${prefix}birthday-cake
┣❏ ${prefix}embroidery
┣❏ ${prefix}crisp
┣❏ ${prefix}flaming
┣❏ ${prefix}furtext
┣❏ ${prefix}nightsky
┣❏ ${prefix}glow-rainbow
┣❏ ${prefix}gradient-avatar
┣❏ ${prefix}white-cube
┣❏ ${prefix}honey-text
┣❏ ${prefix}vintage-style
┣❏ ${prefix}glowing-3d
┣❏ ${prefix}army-camouflage
┣❏ ${prefix}graffiti-cover
┣❏ ${prefix}rainbow-shine
┣❏ ${prefix}smoky-neon
┣❏ ${prefix}quotes-underfall
┣❏ ${prefix}vector-nature
┣❏ ${prefix}yellow-rose
┣❏ ${prefix}love-text
┣❏ ${prefix}underwater-ocean
┣❏ ${prefix}nature-text
┣❏ ${prefix}wolf-metal
┣❏ ${prefix}summer-text
┣❏ ${prefix}wooden-board
┣❏ ${prefix}quote-wood
┣❏ ${prefix}quotes-undergrass
┣❏ ${prefix}naruto-banner
┣❏ ${prefix}love-message
┣❏ ${prefix}textoncup2
┣❏ ${prefix}burn-paper
┣❏ ${prefix}smoke
┣❏ ${prefix}romantic-messages
┣❏ ${prefix}shadow-sky
┣❏ ${prefix}text-cup
┣❏ ${prefix}coffecup
┣❏ ${prefix}battlegrounds-logo
┣❏ ${prefix}battlefield4
┣❏ ${prefix}text-8bit ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *EPHOTO 360 MENU* 』
${petik}┣❏ ${prefix}1917text
┣❏ ${prefix}angelwing
┣❏ ${prefix}announofwin
┣❏ ${prefix}birthdaycake
┣❏ ${prefix}capercut
┣❏ ${prefix}cardhalloween
┣❏ ${prefix}christmascard
┣❏ ${prefix}christmasseason
┣❏ ${prefix}covergamepubg
┣❏ ${prefix}covergraffiti
┣❏ ${prefix}dragonfire
┣❏ ${prefix}embroider
┣❏ ${prefix}fabrictext
┣❏ ${prefix}facebookgold
┣❏ ${prefix}facebooksilver
┣❏ ${prefix}funnyanimations
┣❏ ${prefix}funnyhalloween
┣❏ ${prefix}galaxybat
┣❏ ${prefix}galaxywallpaper
┣❏ ${prefix}generalexam
┣❏ ${prefix}glowingtext
┣❏ ${prefix}graffiti3d
┣❏ ${prefix}graffititext
┣❏ ${prefix}graffititext2
┣❏ ${prefix}graffititext3
┣❏ ${prefix}greetingcardvideo
┣❏ ${prefix}halloweenbats
┣❏ ${prefix}heartcup
┣❏ ${prefix}heartflashlight
┣❏ ${prefix}horrorletter
┣❏ ${prefix}icetext
┣❏ ${prefix}instagramgold
┣❏ ${prefix}instagramsilver
┣❏ ${prefix}lightningpubg
┣❏ ${prefix}lovecard
┣❏ ${prefix}lovelycute
┣❏ ${prefix}masteryavatar
┣❏ ${prefix}merrycard
┣❏ ${prefix}messagecoffee
┣❏ ${prefix}metalstar
┣❏ ${prefix}milkcake
┣❏ ${prefix}moderngold
┣❏ ${prefix}moderngold2
┣❏ ${prefix}modengold3
┣❏ ${prefix}moderngoldsilver
┣❏ ${prefix}nameonheart
┣❏ ${prefix}noeltext
┣❏ ${prefix}projectyasuo
┣❏ ${prefix}pubgbirthday
┣❏ ${prefix}pubgglicthvideo
┣❏ ${prefix}pubgmascotlogo
┣❏ ${prefix}puppycute
┣❏ ${prefix}realembroidery
┣❏ ${prefix}retrotext
┣❏ ${prefix}rosebirthday
┣❏ ${prefix}snowontext
┣❏ ${prefix}starsnight
┣❏ ${prefix}summerbeach
┣❏ ${prefix}sunglightshadow
┣❏ ${prefix}textcakes
┣❏ ${prefix}texthalloween
┣❏ ${prefix}textonglass
┣❏ ${prefix}textsky
┣❏ ${prefix}thundertext
┣❏ ${prefix}twittergold
┣❏ ${prefix}twittersilver
┣❏ ${prefix}viettel
┣❏ ${prefix}vintagetelevision
┣❏ ${prefix}watercolor2
┣❏ ${prefix}womansday
┣❏ ${prefix}writeblood
┣❏ ${prefix}writegalaxy
┣❏ ${prefix}writehorror
┣❏ ${prefix}youtubegold
┣❏ ${prefix}youtubesilver
┣❏ ${prefix}zombie3d ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
┏━『 *LOGO MENU* 』
${petik}┣❏ ${prefix}avataroverwatch
┣❏ ${prefix}logoaccording
┣❏ ${prefix}mascotstyle
┣❏ ${prefix}letterlogos
┣❏ ${prefix}bannerofpubg
┣❏ ${prefix}bannerofapex
┣❏ ${prefix}bannerofoverwatch
┣❏ ${prefix}banneroffreefire
┣❏ ${prefix}gunlogogaming
┣❏ ${prefix}pencilsketch
┣❏ ${prefix}companylogo
┣❏ ${prefix}companylogo2
┣❏ ${prefix}teamlogo
┣❏ ${prefix}bannerofaov
┣❏ ${prefix}fbgamepubgcover
┣❏ ${prefix}banneroflol
┣❏ ${prefix}anonymous
┣❏ ${prefix}metalmascot
┣❏ ${prefix}blueneon
┣❏ ${prefix}coverbannerlol
┣❏ ${prefix}pubglogomaker
┣❏ ${prefix}colorfulpubg
┣❏ ${prefix}astronotspace
┣❏ ${prefix}wallpaperaov
┣❏ ${prefix}maketeamlogo
┣❏ ${prefix}circlemascotteam
┣❏ ${prefix}wallpaperml
┣❏ ${prefix}dragonballfb
┣❏ ${prefix}effect3donbeach
┣❏ ${prefix}cutegirlgamer ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
`
}
exports.simpleMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *LIST MENU* 』
${petik}┣❏ ${prefix}allmenu
┣❏ ${prefix}mainmenu
┣❏ ${prefix}convertmenu
┣❏ ${prefix}voicechanger
┣❏ ${prefix}anonymousmenu
┣❏ ${prefix}menu
┣❏ ${prefix}mbe
┣❏ ${prefix}rpgmenu
┣❏ ${prefix}gamemenu
┣❏ ${prefix}groupmenu
┣❏ ${prefix}downloadmenu
┣❏ ${prefix}searchmenu
┣❏ ${prefix}randomanime
┣❏ ${prefix}randommenu
┣❏ ${prefix}randomquotes
┣❏ ${prefix}cewekasiamenu
┣❏ ${prefix}cowokasiamenu
┣❏ ${prefix}balancemenu
┣❏ ${prefix}baileysmenu
┣❏ ${prefix}ownermenu
┣❏ ${prefix}storagemenu
┣❏ ${prefix}asupanmenu
┣❏ ${prefix}randomsticker
┣❏ ${prefix}stalkingmenu
┣❏ ${prefix}imageeffect
┣❏ ${prefix}funmenu
┣❏ ${prefix}islammenu
┣❏ ${prefix}bugmenu
┣❏ ${prefix}textpromenu
┣❏ ${prefix}photooxymenu
┣❏ ${prefix}ephoto360menu
┣❏ ${prefix}logomenu ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
*Perhatian* ⚠️
* _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
* _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
* * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ__
`
}
exports.mainMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *MAIN MENU* 』
${petik}┣❏ ${prefix}allmenu
┣❏ ${prefix}infobot
┣❏ ${prefix}donate
┣❏ ${prefix}dashboard
┣❏ ${prefix}owner
┣❏ ${prefix}cekdrive
┣❏ ${prefix}cekbandwidth
┣❏ ${prefix}cekpremium
┣❏ ${prefix}listpremium
┣❏ ${prefix}listsewa
┣❏ ${prefix}speed
┣❏ ${prefix}runtime
┣❏ ${prefix}listbahasa ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.convertMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
└─────────────────┉❖ ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
┏━『 *CONVERTED MENU* 』
${petik}┣❏ ${prefix}toanime
┣❏ ${prefix}differentme
┣❏ ${prefix}differentme2
┣❏ ${prefix}diffusion
┣❏ ${prefix}txt2img
┣❏ ${prefix}aiscene
┣❏ ${prefix}remini
┣❏ ${prefix}hdr
┣❏ ${prefix}nobg
┣❏ ${prefix}removebg
┣❏ ${prefix}resize
┣❏ ${prefix}ssweb
┣❏ ${prefix}ssweb2
┣❏ ${prefix}sticker
┣❏ ${prefix}stickerwm
┣❏ ${prefix}smeme
┣❏ ${prefix}toimg
┣❏ ${prefix}tourl
┣❏ ${prefix}tovideo
┣❏ ${prefix}tomp3
┣❏ ${prefix}toaudio
┣❏ ${prefix}tovn
┣❏ ${prefix}toptv
┣❏ ${prefix}readvo
┣❏ ${prefix}ttp
┣❏ ${prefix}attp
┣❏ ${prefix}qc
┣❏ ${prefix}emojimix
┣❏ ${prefix}ai
┣❏ ${prefix}aiimg
┣❏ ${prefix}aidraw
┣❏ ${prefix}chatgpt
┣❏ ${prefix}nuliskiri
┣❏ ${prefix}nuliskanan
┣❏ ${prefix}foliokiri
┣❏ ${prefix}foliokanan
┣❏ ${prefix}say
┣❏ ${prefix}translate ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.anonymousMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
└─────────────────┉❖‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎╎
┏━『 *ANONY MENU* 』
${petik}┣❏ ${prefix}anonymouschat
┣❏ ${prefix}start
┣❏ ${prefix}next
┣❏ ${prefix}stop
┣❏ ${prefix}sendprofile
┣❏ ${prefix}menfess
┣❏ ${prefix}confess
┣❏ ${prefix}balasmenfess
┣❏ ${prefix}tolakmenfess
┣❏ ${prefix}stopmenfess ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.voiceChanger = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *VOICE CHANGER* 』
${petik}┣❏ ${prefix}bass
┣❏ ${prefix}deep
┣❏ ${prefix}fast
┣❏ ${prefix}slow
┣❏ ${prefix}smooth
┣❏ ${prefix}fat
┣❏ ${prefix}earrape
┣❏ ${prefix}blown
┣❏ ${prefix}nightcore
┣❏ ${prefix}tupai
┣❏ ${prefix}robot
┣❏ ${prefix}reverse ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.menu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━━━━『 *PT. MJA* 』
┃  ( ℙ𝕋. 𝕄𝕒𝕜𝕚𝕟 𝕁𝕒𝕪𝕒 𝔸𝕘𝕦𝕟𝕘 )
┣❏ <kosong>
┣❏ <kosong>
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.mbe = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━━━━━━『 *M B E* 』
┃   ( *MJA Bussines Education* ) 
${petik}┣❏ ${prefix}pendahuluan
┣❏ ${prefix}kosong ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}

exports.rpgMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *RPG MENU* 』
${petik}┣❏ ${prefix}inventory
┣❏ ${prefix}mining
┣❏ ${prefix}buy
┣❏ ${prefix}sell
┣❏ ${prefix}heal
┣❏ ${prefix}hunt
┣❏ ${prefix}adventure
┣❏ ${prefix}luckyday
┣❏ ${prefix}killslime
┣❏ ${prefix}killgoblin
┣❏ ${prefix}killdevil
┣❏ ${prefix}killbehemoth
┣❏ ${prefix}killdemon
┣❏ ${prefix}killdemonking
┣❏ ${prefix}joinrpg
┣❏ ${prefix}sellikan
┣❏ ${prefix}sellbesi
┣❏ ${prefix}sellemas
┣❏ ${prefix}jelajah
┣❏ ${prefix}mancing
┣❏ ${prefix}jualikan
┣❏ ${prefix}jualcoal
┣❏ ${prefix}jualstone
┣❏ ${prefix}jualingot
┣❏ ${prefix}jualkayu
┣❏ ${prefix}jualbahankimia
┣❏ ${prefix}lebur
┣❏ ${prefix}nebang
┣❏ ${prefix}goplanet ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.gameMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *GAME MENU* 』
${petik}┣❏ ${prefix}caklontong
┣❏ ${prefix}tebakgambar
┣❏ ${prefix}tebakkata
┣❏ ${prefix}tebakbendera
┣❏ ${prefix}tebakkalimat
┣❏ ${prefix}tebaksiapa
┣❏ ${prefix}tebakkimia
┣❏ ${prefix}tebaklirik
┣❏ ${prefix}tebaktebakan
┣❏ ${prefix}tekateki
┣❏ ${prefix}susunkata
┣❏ ${prefix}tictactoe
┣❏ ${prefix}delttt
┣❏ ${prefix}casino
┣❏ ${prefix}delcasino ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.groupMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
└─────────────────┉❖‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
┏━『 *GROUP MENU* 』
${petik}┣❏ ${prefix}autoaigc
┣❏ ${prefix}afk
┣❏ ${prefix}welcome
┣❏ ${prefix}left
┣❏ ${prefix}pppanjanggc
┣❏ ${prefix}opentime
┣❏ ${prefix}closetime
┣❏ ${prefix}setopen
┣❏ ${prefix}changesetopen
┣❏ ${prefix}delsetopen
┣❏ ${prefix}setclose
┣❏ ${prefix}changesetclose
┣❏ ${prefix}delsetclose
┣❏ ${prefix}setwelcome
┣❏ ${prefix}changewelcome
┣❏ ${prefix}delsetwelcome
┣❏ ${prefix}setleft
┣❏ ${prefix}changeleft
┣❏ ${prefix}delsetleft
┣❏ ${prefix}linkgc
┣❏ ${prefix}setppgc
┣❏ ${prefix}setppgc2
┣❏ ${prefix}setnamegc
┣❏ ${prefix}setdesc
┣❏ ${prefix}autodlgc
┣❏ ${prefix}antilink
┣❏ ${prefix}antilinktt
┣❏ ${prefix}kickme
┣❏ ${prefix}mute
┣❏ ${prefix}open
┣❏ ${prefix}close
┣❏ ${prefix}add
┣❏ ${prefix}kick
┣❏ ${prefix}promote
┣❏ ${prefix}demote
┣❏ ${prefix}revoke
┣❏ ${prefix}hidetag
┣❏ ${prefix}checksewa ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.downloadMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *DOWN MENU* 』
${petik}┣❏ ${prefix}play
┣❏ ${prefix}ytmp3
┣❏ ${prefix}ytmp4
┣❏ ${prefix}ytv
┣❏ ${prefix}ytv2
┣❏ ${prefix}spotify
┣❏ ${prefix}spotifydl
┣❏ ${prefix}instagram
┣❏ ${prefix}ig
┣❏ ${prefix}ig2
┣❏ ${prefix}ig3
┣❏ ${prefix}igphoto
┣❏ ${prefix}igvideo
┣❏ ${prefix}igreels
┣❏ ${prefix}twitter
┣❏ ${prefix}tiktok
┣❏ ${prefix}tiktoksearch
┣❏ ${prefix}tiktokaudio
┣❏ ${prefix}mediafire
┣❏ ${prefix}gitclone
┣❏ ${prefix}fbdl
┣❏ ${prefix}fb2
┣❏ ${prefix}fb3
┣❏ ${prefix}fb4
┣❏ ${prefix}gdrive ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.searchMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
└─────────────────┉❖ ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
┏━『 *SEARCH MENU* 』
${petik}┣❏ ${prefix}spotifysearch
┣❏ ${prefix}lk21
┣❏ ${prefix}jarak
┣❏ ${prefix}bukalapak
┣❏ ${prefix}apk
┣❏ ${prefix}google
┣❏ ${prefix}ytsearch
┣❏ ${prefix}grupwa
┣❏ ${prefix}pinterest
┣❏ ${prefix}lirik
┣❏ ${prefix}infogempa
┣❏ ${prefix}komikusearch ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.randomAnime = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *RANDOM ANIME* 』
${petik}┣❏ ${prefix}akira
┣❏ ${prefix}akiyama
┣❏ ${prefix}ana
┣❏ ${prefix}asuna
┣❏ ${prefix}ayuzawa
┣❏ ${prefix}boruto
┣❏ ${prefix}chitanda
┣❏ ${prefix}deidara
┣❏ ${prefix}elaina
┣❏ ${prefix}emilia
┣❏ ${prefix}erza
┣❏ ${prefix}fanart
┣❏ ${prefix}genshin
┣❏ ${prefix}gremory
┣❏ ${prefix}hestia
┣❏ ${prefix}hinata
┣❏ ${prefix}husbu
┣❏ ${prefix}icon
┣❏ ${prefix}inori
┣❏ ${prefix}isuzu
┣❏ ${prefix}itachi
┣❏ ${prefix}itori
┣❏ ${prefix}kaga
┣❏ ${prefix}kagura
┣❏ ${prefix}kaguya
┣❏ ${prefix}kakasih
┣❏ ${prefix}kaneki
┣❏ ${prefix}kaori
┣❏ ${prefix}keneki
┣❏ ${prefix}kosaki
┣❏ ${prefix}kotori
┣❏ ${prefix}kuriyama
┣❏ ${prefix}kuroha
┣❏ ${prefix}kurumi
┣❏ ${prefix}loli
┣❏ ${prefix}madara
┣❏ ${prefix}megumin
┣❏ ${prefix}menus
┣❏ ${prefix}mikasa
┣❏ ${prefix}miku
┣❏ ${prefix}minato
┣❏ ${prefix}naruto
┣❏ ${prefix}natsukawa
┣❏ ${prefix}nezuko
┣❏ ${prefix}nishimiya
┣❏ ${prefix}onepiece
┣❏ ${prefix}pokemon
┣❏ ${prefix}rem
┣❏ ${prefix}rize
┣❏ ${prefix}sagiri
┣❏ ${prefix}sakura
┣❏ ${prefix}sasuke
┣❏ ${prefix}shina
┣❏ ${prefix}shinka
┣❏ ${prefix}shizuka
┣❏ ${prefix}shota
┣❏ ${prefix}simp
┣❏ ${prefix}tomori
┣❏ ${prefix}toukachan
┣❏ ${prefix}tsunade
┣❏ ${prefix}yatogami
┣❏ ${prefix}yuki ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.randomMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *RANDOM MENU* 』
${petik}┣❏ ${prefix}waifu
┣❏ ${prefix}ppcp
┣❏ ${prefix}cosplay
┣❏ ${prefix}cecan
┣❏ ${prefix}cogan
┣❏ ${prefix}meme
┣❏ ${prefix}memeindo
┣❏ ${prefix}darkjokes ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.randomQuotes = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢    『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *RANDOM QUOTES* 』
${petik}┣❏ ${prefix}quotesdilan
┣❏ ${prefix}quotesbucin
┣❏ ${prefix}quotesjawa
┣❏ ${prefix}quotesanime
┣❏ ${prefix}galau
┣❏ ${prefix}podcast
┣❏ ${prefix}sadpodcast
┣❏ ${prefix}speak
┣❏ ${prefix}aivoice
┣❏ ${prefix}simivoice ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.cewekMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢    『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
└─────────────────┉❖ ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎╎
┏━『 *CWEASIA MENU* 』
${petik}┣❏ ${prefix}lisa
┣❏ ${prefix}rose
┣❏ ${prefix}jiso
┣❏ ${prefix}jenny
┣❏ ${prefix}indonesia
┣❏ ${prefix}japan
┣❏ ${prefix}china
┣❏ ${prefix}malaysia
┣❏ ${prefix}vietnam
┣❏ ${prefix}korea
┣❏ ${prefix}thailand ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.cowokMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢    『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *CWOASIA MENU* 』
${petik}┣❏ ${prefix}suga
┣❏ ${prefix}wuyifan
┣❏ ${prefix}parkchanyeol
┣❏ ${prefix}ohsehun
┣❏ ${prefix}luhan
┣❏ ${prefix}kimtaehyung
┣❏ ${prefix}kimsoek
┣❏ ${prefix}kimnanjoon
┣❏ ${prefix}kimjunmyeon
┣❏ ${prefix}kimjong
┣❏ ${prefix}kimjondae
┣❏ ${prefix}jungkook
┣❏ ${prefix}jimin
┣❏ ${prefix}jhope
┣❏ ${prefix}huangzitao
┣❏ ${prefix}dohkyungsoo
┣❏ ${prefix}baekhyung ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.balanceMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢    『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *BALANCE MENU* 』
${petik}┣❏ ${prefix}balance
┣❏ ${prefix}limit
┣❏ ${prefix}buylimit
┣❏ ${prefix}buyglimit
┣❏ ${prefix}transfer
┣❏ ${prefix}toplocal
┣❏ ${prefix}topglobal ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.ownerMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *OWNER MENU* 』
${petik}┣❏ ${prefix}pushkontak
┣❏ ${prefix}jpm
┣❏ ${prefix}self
┣❏ ${prefix}public
┣❏ ${prefix}setppbot
┣❏ ${prefix}setppbot2
┣❏ ${prefix}joingc
┣❏ ${prefix}creategc
┣❏ ${prefix}leavegc
┣❏ ${prefix}broadcast
┣❏ ${prefix}bcimg
┣❏ ${prefix}bcstik
┣❏ ${prefix}bcvn
┣❏ ${prefix}bcvideo
┣❏ ${prefix}bcsewa
┣❏ ${prefix}addpremium
┣❏ ${prefix}delpremium
┣❏ ${prefix}addsewa
┣❏ ${prefix}delsewa
┣❏ ${prefix}blok
┣❏ ${prefix}unblok
┣❏ ${prefix}listblok
┣❏ ${prefix}autoaipc
┣❏ ${prefix}autoread
┣❏ ${prefix}autobio
┣❏ ${prefix}antidelete
┣❏ ${prefix}antiviewonce
┣❏ ${prefix}autorespond
┣❏ ${prefix}anticall
┣❏ ${prefix}autoblok212
┣❏ ${prefix}resetlimit ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.storageMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢    『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *STORAGE MENU* 』
${petik}┣❏ ${prefix}addstik
┣❏ ${prefix}addvn
┣❏ ${prefix}addimg
┣❏ ${prefix}addvid
┣❏ ${prefix}liststik
┣❏ ${prefix}listvn
┣❏ ${prefix}listimg
┣❏ ${prefix}listvid
┣❏ ${prefix}sampah
┣❏ ${prefix}delsampah
┣❏ ${prefix}sampah2
┣❏ ${prefix}delsampah2 ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.asupanMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *ASUPAN MENU* 』
${petik}┣❏ ${prefix}asupan
┣❏ ${prefix}bocil
┣❏ ${prefix}santuy
┣❏ ${prefix}ukhty
┣❏ ${prefix}chika
┣❏ ${prefix}delvira
┣❏ ${prefix}ayu
┣❏ ${prefix}bunga
┣❏ ${prefix}aura
┣❏ ${prefix}nisa
┣❏ ${prefix}ziva
┣❏ ${prefix}yana
┣❏ ${prefix}viona
┣❏ ${prefix}syania
┣❏ ${prefix}riri
┣❏ ${prefix}syifa
┣❏ ${prefix}mama_gina
┣❏ ${prefix}alcakenya
┣❏ ${prefix}mangayutri
┣❏ ${prefix}rikagusriani
┣❏ ${prefix}geayubi
┣❏ ${prefix}syifa ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.randomSticker = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *RNDOM STICKER* 』
${petik}┣❏ ${prefix}patrick
┣❏ ${prefix}sponsbob
┣❏ ${prefix}kawan-sponsbob
┣❏ ${prefix}dino-kuning
┣❏ ${prefix}manusia-lidi
┣❏ ${prefix}popoci
┣❏ ${prefix}awoawo
┣❏ ${prefix}chat
┣❏ ${prefix}dbfly
┣❏ ${prefix}doge
┣❏ ${prefix}gojosatoru
┣❏ ${prefix}hope-boy
┣❏ ${prefix}jisoo
┣❏ ${prefix}kr-robot
┣❏ ${prefix}kucing
┣❏ ${prefix}lonte
┣❏ ${prefix}menjamet
┣❏ ${prefix}meow
┣❏ ${prefix}nicholas
┣❏ ${prefix}tyni ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.stalkingMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *STALKING MENU* 』
${petik}┣❏ ${prefix}ttstalk
┣❏ ${prefix}igstalk
┣❏ ${prefix}mlstalk
┣❏ ${prefix}ffstalk ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.imageEffect = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢    『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *IMAGE EFFECT* 』
${petik}┣❏ ${prefix}toanime
┣❏ ${prefix}differentme
┣❏ ${prefix}differentme2
┣❏ ${prefix}aiscene
┣❏ ${prefix}remini
┣❏ ${prefix}hdr
┣❏ ${prefix}wasted
┣❏ ${prefix}beautiful
┣❏ ${prefix}fire
┣❏ ${prefix}wanted
┣❏ ${prefix}rip
┣❏ ${prefix}jail
┣❏ ${prefix}triggered
┣❏ ${prefix}brazzers
┣❏ ${prefix}gay
┣❏ ${prefix}postig ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.funMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *FUN MENU* 』
${petik}┣❏ ${prefix}apakah
┣❏ ${prefix}kapankah
┣❏ ${prefix}bisakah
┣❏ ${prefix}bagaimanakah
┣❏ ${prefix}rate
┣❏ ${prefix}gantengcek
┣❏ ${prefix}cekganteng
┣❏ ${prefix}cantikcek
┣❏ ${prefix}cekcantik
┣❏ ${prefix}sangecek
┣❏ ${prefix}ceksange
┣❏ ${prefix}gaycek
┣❏ ${prefix}cekgay
┣❏ ${prefix}lesbicek
┣❏ ${prefix}ceklesbi
┣❏ ${prefix}wangy ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.islamMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *ISLAM MENU* 』
${petik}┣❏ ${prefix}kisahnabi
┣❏ ${prefix}asmaulhusna
┣❏ ${prefix}listsurah
┣❏ ${prefix}listsurah
┣❏ ${prefix}randomquran
┣❏ ${prefix}randomquran2
┣❏ ${prefix}quranaudio
┣❏ ${prefix}alquranaudio ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.bugMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *BUG MENU* 』
${petik}┣❏ ${prefix}juna
┣❏ ${prefix}santet
┣❏ ${prefix}bugs
┣❏ ${prefix}buglinkpc
┣❏ ${prefix}buglinkgc <id>
┣❏ ${prefix}docugc <id>
┣❏ ${prefix}troligc <id>
┣❏ ${prefix}spams ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.textproMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *TEXTPRO MENU* 』
${petik}┣❏ ${prefix}halloween2
┣❏ ${prefix}horror
┣❏ ${prefix}game8bit
┣❏ ${prefix}layered
┣❏ ${prefix}glitch2
┣❏ ${prefix}coolg
┣❏ ${prefix}coolwg
┣❏ ${prefix}realistic
┣❏ ${prefix}space3d
┣❏ ${prefix}gtiktok
┣❏ ${prefix}stone
┣❏ ${prefix}marvel
┣❏ ${prefix}pornhub
┣❏ ${prefix}avengers
┣❏ ${prefix}metalr
┣❏ ${prefix}metalg
┣❏ ${prefix}metalg2
┣❏ ${prefix}lion
┣❏ ${prefix}wolf_bw
┣❏ ${prefix}wolf_g
┣❏ ${prefix}ninja
┣❏ ${prefix}3dsteel
┣❏ ${prefix}horror2
┣❏ ${prefix}lava
┣❏ ${prefix}bagel
┣❏ ${prefix}blackpink
┣❏ ${prefix}rainbow2
┣❏ ${prefix}water_pipe
┣❏ ${prefix}halloween
┣❏ ${prefix}sketch
┣❏ ${prefix}sircuit
┣❏ ${prefix}discovery
┣❏ ${prefix}metallic2
┣❏ ${prefix}fiction
┣❏ ${prefix}demon
┣❏ ${prefix}transformer
┣❏ ${prefix}berry
┣❏ ${prefix}thunder
┣❏ ${prefix}3dstone
┣❏ ${prefix}magma
┣❏ ${prefix}neon
┣❏ ${prefix}glitch
┣❏ ${prefix}harry_potter
┣❏ ${prefix}embossed
┣❏ ${prefix}broken
┣❏ ${prefix}papercut
┣❏ ${prefix}gradient
┣❏ ${prefix}glossy
┣❏ ${prefix}watercolor
┣❏ ${prefix}multicolor
┣❏ ${prefix}neon_devil
┣❏ ${prefix}underwater
┣❏ ${prefix}bear
┣❏ ${prefix}wonderfulg
┣❏ ${prefix}christmas
┣❏ ${prefix}neon_light
┣❏ ${prefix}snow
┣❏ ${prefix}cloudsky
┣❏ ${prefix}luxury2
┣❏ ${prefix}gradient2
┣❏ ${prefix}summer
┣❏ ${prefix}writing
┣❏ ${prefix}engraved
┣❏ ${prefix}summery
┣❏ ${prefix}3dglue
┣❏ ${prefix}metaldark
┣❏ ${prefix}neonlight
┣❏ ${prefix}oscar
┣❏ ${prefix}minion
┣❏ ${prefix}holographic
┣❏ ${prefix}purple
┣❏ ${prefix}glossyb
┣❏ ${prefix}deluxe2
┣❏ ${prefix}glossyc
┣❏ ${prefix}fabric
┣❏ ${prefix}neonc
┣❏ ${prefix}newyear
┣❏ ${prefix}newyear2
┣❏ ${prefix}xmas
┣❏ ${prefix}metals
┣❏ ${prefix}blood
┣❏ ${prefix}darkg
┣❏ ${prefix}joker
┣❏ ${prefix}wicker
┣❏ ${prefix}natural
┣❏ ${prefix}firework
┣❏ ${prefix}skeleton
┣❏ ${prefix}balloon
┣❏ ${prefix}balloon2
┣❏ ${prefix}balloon3
┣❏ ${prefix}balloon4
┣❏ ${prefix}balloon5
┣❏ ${prefix}balloon6
┣❏ ${prefix}balloon7
┣❏ ${prefix}steel
┣❏ ${prefix}gloss
┣❏ ${prefix}denim
┣❏ ${prefix}decorate
┣❏ ${prefix}decorate2
┣❏ ${prefix}peridot
┣❏ ${prefix}rock
┣❏ ${prefix}glass
┣❏ ${prefix}glass2
┣❏ ${prefix}glass3
┣❏ ${prefix}glass4
┣❏ ${prefix}glass5
┣❏ ${prefix}glass6
┣❏ ${prefix}glass7
┣❏ ${prefix}glass8
┣❏ ${prefix}captain_as2
┣❏ ${prefix}robot
┣❏ ${prefix}equalizer
┣❏ ${prefix}toxic
┣❏ ${prefix}sparkling
┣❏ ${prefix}sparkling2
┣❏ ${prefix}sparkling3
┣❏ ${prefix}sparkling4
┣❏ ${prefix}sparkling5
┣❏ ${prefix}sparkling6
┣❏ ${prefix}sparkling7
┣❏ ${prefix}decorative
┣❏ ${prefix}chocolate
┣❏ ${prefix}strawberry
┣❏ ${prefix}koifish
┣❏ ${prefix}bread
┣❏ ${prefix}matrix
┣❏ ${prefix}blood2
┣❏ ${prefix}neonligth2
┣❏ ${prefix}thunder2
┣❏ ${prefix}3dbox
┣❏ ${prefix}neon2
┣❏ ${prefix}roadw
┣❏ ${prefix}bokeh
┣❏ ${prefix}gneon
┣❏ ${prefix}advanced
┣❏ ${prefix}dropwater
┣❏ ${prefix}wall
┣❏ ${prefix}chrismast
┣❏ ${prefix}honey
┣❏ ${prefix}drug
┣❏ ${prefix}marble
┣❏ ${prefix}marble2
┣❏ ${prefix}ice
┣❏ ${prefix}juice
┣❏ ${prefix}rusty
┣❏ ${prefix}abstra
┣❏ ${prefix}biscuit
┣❏ ${prefix}wood
┣❏ ${prefix}scifi
┣❏ ${prefix}metalr
┣❏ ${prefix}purpleg
┣❏ ${prefix}shiny
┣❏ ${prefix}jewelry
┣❏ ${prefix}jewelry2
┣❏ ${prefix}jewelry3
┣❏ ${prefix}jewelry4
┣❏ ${prefix}jewelry5
┣❏ ${prefix}jewelry6
┣❏ ${prefix}jewelry7
┣❏ ${prefix}jewelry8
┣❏ ${prefix}metalh
┣❏ ${prefix}golden
┣❏ ${prefix}glitter
┣❏ ${prefix}glitter2
┣❏ ${prefix}glitter3
┣❏ ${prefix}glitter4
┣❏ ${prefix}glitter5
┣❏ ${prefix}glitter6
┣❏ ${prefix}glitter7
┣❏ ${prefix}metale
┣❏ ${prefix}carbon
┣❏ ${prefix}candy
┣❏ ${prefix}metalb
┣❏ ${prefix}gemb
┣❏ ${prefix}3dchrome
┣❏ ${prefix}metalb2
┣❏ ${prefix}metalg ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.photooxyMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *PHOTOOXY MENU* 』
${petik}┣❏ ${prefix}typography-flower
┣❏ ${prefix}under-flower
┣❏ ${prefix}bevel-text
┣❏ ${prefix}silk-text
┣❏ ${prefix}smoke-typography
┣❏ ${prefix}carvedwood
┣❏ ${prefix}scary-cemetery
┣❏ ${prefix}royallook
┣❏ ${prefix}coffeecup2
┣❏ ${prefix}illuminated
┣❏ ${prefix}harry-potter2
┣❏ ${prefix}woodblack
┣❏ ${prefix}butterfly-reflection
┣❏ ${prefix}watermelon
┣❏ ${prefix}striking
┣❏ ${prefix}metallicglow
┣❏ ${prefix}rainbow-text
┣❏ ${prefix}birthday-cake
┣❏ ${prefix}embroidery
┣❏ ${prefix}crisp
┣❏ ${prefix}flaming
┣❏ ${prefix}furtext
┣❏ ${prefix}nightsky
┣❏ ${prefix}glow-rainbow
┣❏ ${prefix}gradient-avatar
┣❏ ${prefix}white-cube
┣❏ ${prefix}honey-text
┣❏ ${prefix}vintage-style
┣❏ ${prefix}glowing-3d
┣❏ ${prefix}army-camouflage
┣❏ ${prefix}graffiti-cover
┣❏ ${prefix}rainbow-shine
┣❏ ${prefix}smoky-neon
┣❏ ${prefix}quotes-underfall
┣❏ ${prefix}vector-nature
┣❏ ${prefix}yellow-rose
┣❏ ${prefix}love-text
┣❏ ${prefix}underwater-ocean
┣❏ ${prefix}nature-text
┣❏ ${prefix}wolf-metal
┣❏ ${prefix}summer-text
┣❏ ${prefix}wooden-board
┣❏ ${prefix}quote-wood
┣❏ ${prefix}quotes-undergrass
┣❏ ${prefix}naruto-banner
┣❏ ${prefix}love-message
┣❏ ${prefix}textoncup2
┣❏ ${prefix}burn-paper
┣❏ ${prefix}smoke
┣❏ ${prefix}romantic-messages
┣❏ ${prefix}shadow-sky
┣❏ ${prefix}text-cup
┣❏ ${prefix}coffecup
┣❏ ${prefix}battlegrounds-logo
┣❏ ${prefix}battlefield4
┣❏ ${prefix}text-8bit ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝔓𝔢𝔯𝔦𝔫𝔤𝔞𝔱𝔞𝔫:
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
     * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
     * _ʲⁱᵏᵃ ᵗⁱᵈᵃᵏ ᵐᵉʳᵉˢᵖᵒⁿ ᵇᵒᵗ ˢᵉᵈᵃⁿᵍ ᵒᶠᶠ_
`
}
exports.ephotoMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢    『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└───────────────────┉
┏━『 *EPHOTO 360 MENU* 』
${petik}┣❏ ${prefix}1917text
┣❏ ${prefix}angelwing
┣❏ ${prefix}announofwin
┣❏ ${prefix}birthdaycake
┣❏ ${prefix}capercut
┣❏ ${prefix}cardhalloween
┣❏ ${prefix}christmascard
┣❏ ${prefix}christmasseason
┣❏ ${prefix}covergamepubg
┣❏ ${prefix}covergraffiti
┣❏ ${prefix}dragonfire
┣❏ ${prefix}embroider
┣❏ ${prefix}fabrictext
┣❏ ${prefix}facebookgold
┣❏ ${prefix}facebooksilver
┣❏ ${prefix}funnyanimations
┣❏ ${prefix}funnyhalloween
┣❏ ${prefix}galaxybat
┣❏ ${prefix}galaxywallpaper
┣❏ ${prefix}generalexam
┣❏ ${prefix}glowingtext
┣❏ ${prefix}graffiti3d
┣❏ ${prefix}graffititext
┣❏ ${prefix}graffititext2
┣❏ ${prefix}graffititext3
┣❏ ${prefix}greetingcardvideo
┣❏ ${prefix}halloweenbats
┣❏ ${prefix}heartcup
┣❏ ${prefix}heartflashlight
┣❏ ${prefix}horrorletter
┣❏ ${prefix}icetext
┣❏ ${prefix}instagramgold
┣❏ ${prefix}instagramsilver
┣❏ ${prefix}lightningpubg
┣❏ ${prefix}lovecard
┣❏ ${prefix}lovelycute
┣❏ ${prefix}masteryavatar
┣❏ ${prefix}merrycard
┣❏ ${prefix}messagecoffee
┣❏ ${prefix}metalstar
┣❏ ${prefix}milkcake
┣❏ ${prefix}moderngold
┣❏ ${prefix}moderngold2
┣❏ ${prefix}modengold3
┣❏ ${prefix}moderngoldsilver
┣❏ ${prefix}nameonheart
┣❏ ${prefix}noeltext
┣❏ ${prefix}projectyasuo
┣❏ ${prefix}pubgbirthday
┣❏ ${prefix}pubgglicthvideo
┣❏ ${prefix}pubgmascotlogo
┣❏ ${prefix}puppycute
┣❏ ${prefix}realembroidery
┣❏ ${prefix}retrotext
┣❏ ${prefix}rosebirthday
┣❏ ${prefix}snowontext
┣❏ ${prefix}starsnight
┣❏ ${prefix}summerbeach
┣❏ ${prefix}sunglightshadow
┣❏ ${prefix}textcakes
┣❏ ${prefix}texthalloween
┣❏ ${prefix}textonglass
┣❏ ${prefix}textsky
┣❏ ${prefix}thundertext
┣❏ ${prefix}twittergold
┣❏ ${prefix}twittersilver
┣❏ ${prefix}viettel
┣❏ ${prefix}vintagetelevision
┣❏ ${prefix}watercolor2
┣❏ ${prefix}womansday
┣❏ ${prefix}writeblood
┣❏ ${prefix}writegalaxy
┣❏ ${prefix}writehorror
┣❏ ${prefix}youtubegold
┣❏ ${prefix}youtubesilver
┣❏ ${prefix}zombie3d ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
*Perhatian* ⚠️
* _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿᵉˡᵖᵒⁿ ⁿᵒᵐᵒʳ ᵇᵒᵗ_
* _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ_
* * _ᵈⁱˡᵃʳᵃⁿᵍ ᵐᵉⁿʸᵃˡᵃʰᵍᵘⁿᵃᵏᵃⁿ ᶠⁱᵗᵘʳ ᵇᵒᵗ__
`
}
exports.logoMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return `_Halo ${pushname !== undefined ? pushname : 'Kak'}, Selamat ${ucapanWaktu}_
_Saya *MBE-Bot*, Asisten Virtual yang akan membantu ${pushname !== undefined ? pushname : 'Kak'} selama saya masih aktif._
┌─────────────────┉❖
〢   『 *STATUS INFO* 』
├─────────────────┉❖
╎ ☞ 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : 'Kak'}
╎ ☞ 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎ ☞ 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
└─────────────────┉❖
┏━『 *LOGO MENU* 』
${petik}┣❏ ${prefix}avataroverwatch
┣❏ ${prefix}logoaccording
┣❏ ${prefix}mascotstyle
┣❏ ${prefix}letterlogos
┣❏ ${prefix}bannerofpubg
┣❏ ${prefix}bannerofapex
┣❏ ${prefix}bannerofoverwatch
┣❏ ${prefix}banneroffreefire
┣❏ ${prefix}gunlogogaming
┣❏ ${prefix}pencilsketch
┣❏ ${prefix}companylogo
┣❏ ${prefix}companylogo2
┣❏ ${prefix}teamlogo
┣❏ ${prefix}bannerofaov
┣❏ ${prefix}fbgamepubgcover
┣❏ ${prefix}banneroflol
┣❏ ${prefix}anonymous
┣❏ ${prefix}metalmascot
┣❏ ${prefix}blueneon
┣❏ ${prefix}coverbannerlol
┣❏ ${prefix}pubglogomaker
┣❏ ${prefix}colorfulpubg
┣❏ ${prefix}astronotspace
┣❏ ${prefix}wallpaperaov
┣❏ ${prefix}maketeamlogo
┣❏ ${prefix}circlemascotteam
┣❏ ${prefix}wallpaperml
┣❏ ${prefix}dragonballfb
┣❏ ${prefix}effect3donbeach
┣❏ ${prefix}cutegirlgamer ${petik}
┗━━━━━━━━━━━━━━━━━┉❖
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2024 ${botName}
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `_*Promo Premium 30 Hari 10k*_\n_*Promo Sewa Gc 30 Hari 10k*_\n𝙄𝙣𝙛𝙤 𝙎𝙚𝙡𝙚𝙣𝙜𝙠𝙖𝙥𝙣𝙮𝙖 𝘾𝙝𝙖𝙩 𝙊𝙬𝙣𝙚𝙧.`