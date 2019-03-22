id = 1;

// id: ,
// season ,
// episode ,
// quote 

let swansonQuotes = [
    {
        id: id++,
        season: 2,
        episode: 6,
        quote: "I would prefer she ask for my permission so I could say no. I like to say no, it lowers their enthusiasm.",
        img: "https://imgix.bustle.com/2016/3/8/parks-and-recreation-swanson-way.jpg",
    }, {
        id: id++,
        season: 2,
        episode: 2,
        quote: "Pain is a state of mind and a weakness that I choose not to acknowledge.",
        img: "http://swansonquotes.com/wp-content/uploads/s03-ep09-pain-1000x500.jpg"
    }, {
        id: id++,
        season: 2,
        episode: 2,
        quote: "I was born ready. I'm Ron F*cking Swanson!",
        img: "https://media.vlipsy.com/vlips/Z9SlT4kE/preview.jpg"
    }, {
        id: id++,
        season: 1,
        episode: 5,
        quote: "I enjoy government functions like I enjoy getting kicked in the nuggets with a steel toed boot.",
        img: "http://swansonquotes.com/wp-content/uploads/s01-ep05-baconshrimp-1000x500.jpg"
    }, {
        id: id++,
        season: 1,
        episode: 4,
        quote: "No, I didn’t… I didn’t do it for Leslie. I did it because I hate bureaucracy. My idea of a perfect government, is one guy who sits in a small room at a desk. And the only thing he’s allowed to decide is who to nuke. The man is chosen based on some kind of I.Q. Test, and maybe also a physical tournament, like a decathlon.",
        img: "https://i.kinja-img.com/gawker-media/image/upload/s--i70VtJrK--/c_scale,f_auto,fl_progressive,q_80,w_800/oqsgpno1yypphpxx9epy.jpg"
    }, {
        id: id++,
        season: 3,
        episode: 16,
        quote: "When I walked in this morning, and saw the flag was at half mast, I thought alright another bureaucrat ate it. But then I found out it was Li’l Sebastian. Half mast is too high. Show some damn respect.",
        img: "http://swansonquotes.com/wp-content/uploads/s03-ep16-criedtwice-1000x500.jpg"
    }, {
        id: id++,
        season: 3,
        episode: 16,
        quote: "I have cried twice in my life. Once when I was seven and I was hit by a school bus, and then again when I heard that Li’l Sebastian passed.",
        img: "http://swansonquotes.com/wp-content/uploads/s03-ep16-halfmast2-1000x500.jpg"
    }, {
        id: id++,
        season: 3,
        episode: 11,
        quote: "Ok, everyone, SHUT UP and LOOK AT ME! Welcome to Visions of Nature. This room has several paintings in it. Some are big, some are small. People did them and they are here now, I believe that after this over they’ll be hung in government buildings. Why the government is involved in an art show is beyond me. I also think it’s pointless for a human to paint scenes of nature when they can just go outside and stand in it. Anyway please do not misinterpret the fact that I am talking right now as genuine interest in art and attempt to discuss it with me further, end of speech.",
        img: "http://swansonquotes.com/wp-content/uploads/s03-ep11-artshow-1000x500.jpg"
    }
];


module.exports = {
    getAllQuotes: (req, res) => {
        res.status(200).send(swansonQuotes);
    },
    editQuote: (req, res) => {
        let { id } = req.params;
        let { season, episode, quote, img } = req.body;

        let i = swansonQuotes.findIndex(quote => +quote.id === +id);

        swansonQuotes[i] = {
            id: swansonQuotes[i].id,
            season: season || swansonQuotes[i].season,
            episode: episode || swansonQuotes[i].episode,
            quote: quote || swansonQuotes[i].quote,
            img: img || swansonQuotes[i].img 
        };

        res.status(200).send(swansonQuotes);
    },
    deleteQuote: (req, res) => {
        let { id } = req.params;

        let i = swansonQuotes.findIndex(quote => +quote.id === +id);

        swansonQuotes.splice(i, 1);
        res.status(200).send(swansonQuotes);
    },
    addQuote: (req, res) => {
        let { season, episode, quote, img } = req.body;
        
        let newQuote = {
            id: id++,
            season: season || "Ron",
            episode: episode || "Ron",
            quote: quote || "How dare you disrespect Ron by not putting in a quote",
            img: img
        }
        
        swansonQuotes.push(newQuote);

        res.status(200).send(swansonQuotes);
    },
}