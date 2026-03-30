const { getRouter } = require("stremio-addon-sdk");

// 1. Ton Manifest
const manifest = {
    id: "org.moncatalogue.gemini",
    version: "1.0.0",
    name: "Mon Catalogue Gemini Perso",
    description: "Films sélectionnés et analysés par Gemini AI",
    resources: ["catalog", "meta"],
    types: ["movie"],
    catalogs: [
        {
            type: "movie",
            id: "gemini_movies",
            name: "🎬 Ma Sélection Gemini"
        }
    ]
};

// 2. Tes données (JSON de Gemini)
const DATA = [
    {
  "metas": [
    {
      "id": "tt5804038",
      "type": "movie",
      "name": "I Am Not Your Negro",
      "poster": "https://image.tmdb.org/t/p/w500/zwd0Zti7BvY1mO0mTPzM0fRrtc6.jpg",
      "description": "🍿 SYNOPSIS : Une dissection fulgurante du racisme systémique américain à travers les mots de James Baldwin.\n\n🤖 L'AVIS DE GEMINI : Un documentaire d'une puissance inouïe, où le verbe de Baldwin frappe par son intemporalité et sa lucidité féroce."
    },
    {
      "id": "tt11956614",
      "type": "series",
      "name": "Exterminez toutes ces brutes",
      "poster": null,
      "description": "🍿 SYNOPSIS : La mini-série (ou film fleuve) ultime sur l'histoire de l'impérialisme et du suprémacisme blanc.\n\n🤖 L'AVIS DE GEMINI : Une vertigineuse remise en perspective de l'histoire moderne, un essai visuel coup de poing qui déconstruit méticuleusement le récit colonial."
    },
    {
      "id": "tt0073887",
      "type": "movie",
      "name": "Welfare",
      "poster": "https://image.tmdb.org/t/p/w500/1eFgNI93rRSOFZZ9cajF3tMmGPc.jpg",
      "description": "🍿 SYNOPSIS : Le théâtre de la misère. On voit comment l'administration broie l'humain. Une critique radicale de l'institution.\n\n🤖 L'AVIS DE GEMINI : Wiseman nous plonge dans l'absurdité bureaucratique avec une acuité quasi suffocante. Magistral et nécessaire."
    },
    {
      "id": "tt0074605",
      "type": "movie",
      "name": "Harlan County, U.S.A.",
      "poster": "https://image.tmdb.org/t/p/w500/p0cyMNsoP5ap0omfhakhImBWTRw.jpg",
      "description": "🍿 SYNOPSIS : La lutte des classes pure. Des mineurs contre les milices patronales. Un classique du cinéma de combat.\n\n🤖 L'AVIS DE GEMINI : L'incarnation même du cinéma vérité engagé. La tension est palpable et le courage de ces travailleurs, inoubliable."
    },
    {
      "id": "tt0171110",
      "type": "movie",
      "name": "La Bataille du Chili",
      "poster": null,
      "description": "🍿 SYNOPSIS : Le document ultime sur l'espoir socialiste d'Allende et son écrasement par le coup d'État soutenu par la CIA.\n\n🤖 L'AVIS DE GEMINI : Un témoignage historique inestimable, capturé au cœur même de la tragédie politique et du bouleversement social."
    },
    {
      "id": "tt0076040",
      "type": "movie",
      "name": "Le Fond de l'air est rouge",
      "poster": "https://image.tmdb.org/t/p/w500/49lRCF5kUKIzZh0YsefauCreqox.jpg",
      "description": "🍿 SYNOPSIS : La grande fresque sur les luttes révolutionnaires mondiales des années 60/70. Un montage d'une intelligence rare.\n\n🤖 L'AVIS DE GEMINI : L'art du montage élevé à son paroxysme pour capturer l'énergie et la mélancolie d'une génération de révolutionnaires."
    },
    {
      "id": "tt0061914",
      "type": "movie",
      "name": "Loin du Vietnam",
      "poster": "https://image.tmdb.org/t/p/w500/tBQnDecjLhXreWre9EMjXivn0PS.jpg",
      "description": "🍿 SYNOPSIS : Quand la fine fleur du cinéma d'auteur s'unit contre l'impérialisme américain.\n\n🤖 L'AVIS DE GEMINI : Un manifeste collectif fascinant qui prouve comment le cinéma peut se transformer en véritable arme de solidarité internationale."
    },
    {
      "id": "tt0080562",
      "type": "movie",
      "name": "The Constant Factor",
      "poster": "https://image.tmdb.org/t/p/w500/2IKrLE2PKj0mppp591ETIbQbQmN.jpg",
      "description": "🍿 SYNOPSIS : L'archétype de la vague polonaise traitant de la corruption morale sous le joug systémique.\n\n🤖 L'AVIS DE GEMINI : Une exploration glaçante et philosophique de l'intégrité face à un système cynique conçu pour corrompre l'individu."
    },
    {
      "id": "tt0113604",
      "type": "movie",
      "name": "Land and Freedom",
      "poster": "https://image.tmdb.org/t/p/w500/5okDKgtOyFfnD3m62dsmozGzl0f.jpg",
      "description": "🍿 SYNOPSIS : Une fiction d'une précision documentaire sur la trahison de la révolution espagnole par les staliniens.\n\n🤖 L'AVIS DE GEMINI : Loach parvient à rendre la complexité idéologique aussi palpitante et déchirante qu'un grand drame intime."
    },
    {
      "id": "tt0070730",
      "type": "movie",
      "name": "The Spook Who Sat by the Door",
      "poster": "https://image.tmdb.org/t/p/w500/zU74BYeixnj2rUMigz3ZqmpUp9N.jpg",
      "description": "🍿 SYNOPSIS : Un film culte sur la réappropriation des techniques de la CIA pour une guérilla noire urbaine.\n\n🤖 L'AVIS DE GEMINI : Un brûlot politique explosif et subversif, qui fut d'ailleurs longtemps censuré pour sa charge radicale."
    },
    {
      "id": "tt0067633",
      "type": "movie",
      "name": "Punishment Park",
      "poster": "https://image.tmdb.org/t/p/w500/4ATUqZV6Bouf76aYabZ5R1KqdlM.jpg",
      "description": "🍿 SYNOPSIS : Un faux docu sur la répression brutale des opposants à la guerre du Vietnam. Un cri de rage anti-autoritaire.\n\n🤖 L'AVIS DE GEMINI : Un faux documentaire terrifiant de réalisme, dont l'écho dystopique résonne douloureusement avec les dérives sécuritaires actuelles."
    },
    {
      "id": "tt0084628",
      "type": "movie",
      "name": "Sans Soleil",
      "poster": "https://image.tmdb.org/t/p/w500/sspJu9K03FZQP8A1cheurkiePD0.jpg",
      "description": "🍿 SYNOPSIS : Pour sa réflexion sur la manière dont le capitalisme tardif lisse la mémoire et les images.\n\n🤖 L'AVIS DE GEMINI : Un voyage poétique, philosophique et hypnotique sur les méandres du temps, de la mémoire et de notre rapport à l'image."
    },
    {
      "id": "tt0270881",
      "type": "movie",
      "name": "Life and Debt",
      "poster": null,
      "description": "🍿 SYNOPSIS : Comment le FMI et la Banque Mondiale ont détruit l'économie de la Jamaïque. L'anti-impérialisme par les chiffres.\n\n🤖 L'AVIS DE GEMINI : Une démonstration implacable et hautement didactique des ravages concrets du néolibéralisme sur les pays du Sud."
    },
    {
      "id": "tt0360845",
      "type": "movie",
      "name": "Notre Musique",
      "poster": "https://image.tmdb.org/t/p/w500/xdVNsn6om2DHOeRyyQtyrYqWKHF.jpg",
      "description": "🍿 SYNOPSIS : Une réflexion sur Sarajevo, Israël/Palestine et la dialectique des images de guerre.\n\n🤖 L'AVIS DE GEMINI : Un poème cinématographique exigeant, où Godard questionne avec brio notre responsabilité face aux images de destruction."
    },
    {
      "id": "tt0063086",
      "type": "movie",
      "name": "La Hora de los Hornos",
      "poster": null,
      "description": "🍿 SYNOPSIS : Le manifeste du 'Troisième Cinéma' argentin. Un film conçu pour être interrompu et discuté.\n\n🤖 L'AVIS DE GEMINI : Une œuvre fondatrice et incandescente, pensée bien plus comme une arme d'agitation concrète que comme une simple œuvre d'art."
    },
    {
      "id": "tt3207554",
      "type": "movie",
      "name": "Concerning Violence",
      "poster": null,
      "description": "🍿 SYNOPSIS : Les textes de Frantz Fanon illustrés par des images de la décolonisation africaine. Brutal et nécessaire.\n\n🤖 L'AVIS DE GEMINI : Une claque visuelle et intellectuelle qui redonne toute sa force organique et tranchante à la pensée anticoloniale de Fanon."
    },
    {
      "id": "tt30807534",
      "type": "movie",
      "name": "Dahomey",
      "poster": null,
      "description": "🍿 SYNOPSIS : Sur la décolonisation des esprits et la restitution des œuvres d'art. Le politique par le prisme de l'invisible.\n\n🤖 L'AVIS DE GEMINI : Une fable documentaire envoûtante qui offre une voix poétique et nécessaire aux fantômes de la spoliation coloniale."
    },
    {
      "id": "tt0069400",
      "type": "movie",
      "name": "Tout va bien",
      "poster": "https://image.tmdb.org/t/p/w500/7BaARzxivOQ5172ao39qoofEmVm.jpg",
      "description": "🍿 SYNOPSIS : Une analyse de la grève et des rapports de force en usine, portée par le Groupe Dziga Vertov.\n\n🤖 L'AVIS DE GEMINI : Une radiographie brechtienne de la société post-Mai 68, qui parvient à être à la fois formellement ludique et profondément politique."
    },
    {
      "id": "tt1645089",
      "type": "movie",
      "name": "Inside Job",
      "poster": "https://image.tmdb.org/t/p/w500/7yXXIWec24htucjsZS1sDuPLqw8.jpg",
      "description": "🍿 SYNOPSIS : L'autopsie froide et chirurgicale du braquage planétaire de 2008 par la finance.\n\n🤖 L'AVIS DE GEMINI : Un thriller documentaire glaçant qui expose avec une clarté redoutable l'impunité totale de l'oligarchie financière."
    },
    {
      "id": "tt0019652",
      "type": "movie",
      "name": "L'Argent",
      "poster": null,
      "description": "🍿 SYNOPSIS : Certes ancien, mais une critique visionnaire de la spéculation financière qui résonne encore.\n\n🤖 L'AVIS DE GEMINI : Une fresque muette éblouissante, dont la dénonciation de la voracité capitaliste et du pouvoir de l'argent n'a pas pris une seule ride."
    }
  ]
}
];

// 3. Création du Router
const addonRouter = getRouter({
    manifest: manifest,
    getMeta: ({ type, id }) => {
        const meta = DATA.find(m => m.id === id);
        return Promise.resolve({ meta: meta || null });
    },
    getCatalog: ({ type, id }) => {
        if (id === "gemini_movies") {
            return Promise.resolve({ metas: DATA });
        }
        return Promise.resolve({ metas: [] });
    }
});

// 4. Export pour Vercel
module.exports = (req, res) => {
    addonRouter(req, res, () => {
        res.statusCode = 404;
        res.end();
    });
};
