
 const { tlang,cmd } = require('../lib')
 const Config = require('../config')
 const prefix = Config.prefix
 const maker = require('mumaker')
 let cap = `*_Made By ${Config.botname}_*`
     //---------------------------------------------------------------------------
 cmd({ pattern: "deepsea", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒅𝒆𝒆𝒑𝒔𝒆𝒂 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "horror", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒉𝒐𝒓𝒓𝒐 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/horror-blood-text-effect-online-883.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "whitebear", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒘𝒉𝒊𝒕𝒆𝒃𝒆𝒂𝒓 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "joker", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒋𝒐𝒌𝒆𝒓 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/create-logo-joker-online-934.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "metallic", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒎𝒂𝒕𝒂𝒍𝒍𝒊𝒄 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/create-a-metallic-text-effect-free-online-1041.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "steel", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒔𝒕𝒆𝒆𝒍 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/steel-text-effect-online-921.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "harrypotter", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒉𝒂𝒓𝒓𝒚𝒑𝒐𝒕𝒕𝒆𝒓 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/create-harry-potter-text-effect-online-1025.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "underwater", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒖𝒏𝒅𝒆𝒓𝒘𝒂𝒕𝒆𝒓 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/3d-underwater-text-effect-generator-online-1013.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "luxury", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒍𝒖𝒙𝒖𝒓𝒚 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/3d-luxury-gold-text-effect-online-1003.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "glue", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒈𝒍𝒖𝒆 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "fabric", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒇𝒂𝒃𝒓𝒄 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/fabric-text-effect-online-964.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "toxic", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒕𝒐𝒙𝒊𝒄 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/toxic-text-effect-online-901.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "ancient", category: "textpro", desc: "Some text to image feature with various styles𝒃𝒚 𝒖𝒎𝒂𝒓." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_𝑬𝒙:- 𝒂𝒏𝒄𝒊𝒆𝒏𝒕 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({
             pattern: "cloud",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒄𝒍𝒐𝒖𝒅 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "transformer",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- .𝒕𝒓𝒂𝒏𝒔𝒇𝒐𝒓𝒎𝒆𝒓 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/create-a-transformer-text-effect-online-1035.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "thunder",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒕𝒉𝒖𝒏𝒅𝒆𝒓 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/online-thunder-text-effect-generator-1031.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "scifi",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- .𝒔𝒄𝒊𝒇𝒊 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "sand",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- .𝒔𝒂𝒏𝒅 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/write-in-sand-summer-beach-free-online-991.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "rainbow",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒓𝒂𝒊𝒏𝒃𝒐𝒘 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "pencil",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒑𝒆𝒏𝒄𝒊𝒍 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/create-a-sketch-text-effect-online-1044.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "neon",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒏𝒆𝒐𝒏 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "magma",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒎𝒂𝒈𝒎𝒂 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/create-a-magma-hot-text-effect-online-1030.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "leaves",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒍𝒆𝒂𝒗𝒆𝒔 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/natural-leaves-text-effect-931.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "glitch",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- .𝒈𝒍𝒊𝒕𝒄𝒉 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "discovery",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒅𝒊𝒔𝒄𝒐𝒗𝒆𝒓𝒚 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/create-space-text-effects-online-free-1042.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "christmas",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒄𝒉𝒓𝒊𝒔𝒕𝒎𝒂𝒔 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/christmas-tree-text-effect-online-free-1057.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "candy",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒄𝒂𝒏𝒅𝒚 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/create-christmas-candy-cane-text-effect-1056.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "1917",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 1917 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/1917-style-text-effect-online-980.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
         pattern: "blackpink",
         category: "textpro",
         desc: "Some text to image feature with various styles."
     },
     async(Void, citel, text) => {
         if (!text) return citel.reply('𝑬𝒙:- 𝒃𝒍𝒂𝒄𝒌𝒑𝒊𝒏𝒌 𝑼𝑴𝑨𝑹._')
         let anu = await maker.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', text)
         Void.sendMessage(citel.chat, {
             image: {
                 url: anu.image
             },
             caption: `Made by ${tlang().title},For my ${tlang().greet}`
         }, {
             quoted: citel
         })
     }
 )
//------------------------------------------------------------------------------------
cmd({
             pattern: "cat",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒄𝒂𝒕 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/write-text-on-foggy-window-online-free-1015.html#google_vignette', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
//------------------------------------------------------------------------------
cmd({
             pattern: "pottery",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒑𝒐𝒕𝒕𝒆𝒓𝒚 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/create-3d-pottery-text-effect-online-1088.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
//-----------------------------------------------------------------------------------
cmd({
             pattern: "slice",
             category: "textpro",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_𝑬𝒙:- 𝒔𝒍𝒊𝒄𝒆 𝑼𝑴𝑨𝑹._')
             let anu = await maker.textpro('https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: `Made by ${tlang().title},For my ${tlang().greet}`
             }, {
                 quoted: citel
             })
         }
     )
