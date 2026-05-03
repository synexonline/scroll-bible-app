import type { Journey } from '../types';
import { STYLE_PREFIX } from '../prompts';

export const lifeOfJesus: Journey = {
  id: 'life-of-jesus',
  title: 'The Life of Jesus',
  subtitle: 'From a manger to an empty tomb',
  description: 'Walk through the most pivotal story ever told — reimagined for today.',
  coverPrompt: `${STYLE_PREFIX}, a silhouette figure walking toward golden sunrise over rolling hills, peaceful dawn atmosphere, wide cinematic composition`,
  tags: ['gospels', 'jesus', 'core', 'beginner'],
  estimatedMinutes: 90,
  chapters: [
    {
      id: 'the-arrival',
      title: 'The Arrival',
      journeyId: 'life-of-jesus',
      order: 1,
      scenes: [
        {
          id: 'loj-1-1',
          chapterId: 'the-arrival',
          order: 1,
          passage: {
            book: 'Luke',
            chapter: 2,
            verseStart: 1,
            verseEnd: 7,
            display: 'Luke 2:1-7',
          },
          originalText:
            'In those days Caesar Augustus issued a decree that a census should be taken of the entire Roman world... She wrapped him in cloths and placed him in a manger, because there was no guest room available for them.',
          interpretation:
            "The Roman emperor wanted a headcount of every person in his empire — so everyone had to travel back to their hometown to register. Joseph and Mary made the long trip to Bethlehem even though she was about to have her baby. When they arrived, every room was taken. No hotel, no Airbnb, nothing. So the most important birth in history happened in the most unlikely place — an animal shelter. The baby was laid in a feeding trough.",
          imagePrompt: `${STYLE_PREFIX}, a young couple arriving at a small ancient middle-eastern town at dusk, warm lantern light glowing from doorways, the woman riding a donkey, dusty road, evening sky with first stars appearing, intimate and tender moment, cinematic wide shot`,
          takeaway:
            "God doesn't need a VIP entrance. The biggest moments in life often start in the most unexpected, humble places.",
          reflectionQuestion:
            'When has something meaningful in your life started from humble or unexpected beginnings?',
        },
        {
          id: 'loj-1-2',
          chapterId: 'the-arrival',
          order: 2,
          passage: {
            book: 'Luke',
            chapter: 2,
            verseStart: 8,
            verseEnd: 14,
            display: 'Luke 2:8-14',
          },
          originalText:
            'And there were shepherds living out in the fields nearby, keeping watch over their flocks at night. An angel of the Lord appeared to them, and the glory of the Lord shone around them, and they were terrified.',
          interpretation:
            "Picture this: some night-shift workers are out in a field, doing the most ordinary job imaginable — watching sheep. Then suddenly the sky lights up and a messenger shows up with breaking news: the one everyone has been waiting for has just been born. Not announced to kings or politicians or influencers — but to a group of shepherds who probably smelled like livestock. They were terrified at first, but the message was simple: don't be afraid, this is good news for everyone.",
          imagePrompt: `${STYLE_PREFIX}, shepherds in a dark field at night looking up in awe at a brilliant warm light breaking through clouds above them, dramatic lighting contrast, sheep scattered in foreground, faces illuminated with wonder, cinematic composition`,
          takeaway:
            "The most important announcements aren't always made to the most important people. You don't need status to be part of something big.",
          reflectionQuestion:
            'Have you ever received unexpected news that completely changed your perspective?',
        },
        {
          id: 'loj-1-3',
          chapterId: 'the-arrival',
          order: 3,
          passage: {
            book: 'Matthew',
            chapter: 2,
            verseStart: 1,
            verseEnd: 11,
            display: 'Matthew 2:1-2, 9-11',
          },
          originalText:
            "After Jesus was born in Bethlehem in Judea, during the time of King Herod, Magi from the east came to Jerusalem and asked, 'Where is the one who has been born king of the Jews? We saw his star when it rose and have come to worship him.'",
          interpretation:
            "Meanwhile, on the other side of the world, a group of scholars and astronomers noticed something unusual in the sky — a star that didn't fit any pattern they'd ever tracked. They were so convinced it meant something that they packed up and traveled hundreds of miles across deserts to find out. These weren't Jewish believers — they were outsiders, foreigners, scientists. But they followed the evidence wherever it led them, and it led them to a child in a small town.",
          imagePrompt: `${STYLE_PREFIX}, three travelers on camels crossing a vast desert at night, following a single brilliant star in the sky, dramatic starry night sky, sand dunes, silhouette composition, deep blues and warm gold accent from the star, epic cinematic landscape`,
          takeaway:
            "Seeking truth honestly — even when it takes you somewhere unexpected — is always worth the journey.",
          reflectionQuestion:
            "What's something you've pursued even when you weren't sure where it would lead?",
        },
      ],
    },
    {
      id: 'the-beginning',
      title: 'The Beginning',
      journeyId: 'life-of-jesus',
      order: 2,
      scenes: [
        {
          id: 'loj-2-1',
          chapterId: 'the-beginning',
          order: 1,
          passage: {
            book: 'Matthew',
            chapter: 3,
            verseStart: 13,
            verseEnd: 17,
            display: 'Matthew 3:13-17',
          },
          originalText:
            'Then Jesus came from Galilee to the Jordan to be baptized by John... And a voice from heaven said, "This is my Son, whom I love; with him I am well pleased."',
          interpretation:
            "Jesus showed up at the river where his cousin John was baptizing people. John was basically telling everyone: \"Change your ways, something huge is coming.\" When Jesus walked into the water, even John was shocked — \"Why are you coming to me? I should be coming to you.\" But Jesus went through with it anyway, and in that moment the sky opened up and a voice spoke. It was like the universe hitting the confirm button: this is the one.",
          imagePrompt: `${STYLE_PREFIX}, a figure standing waist-deep in a flowing river at golden hour, arms slightly raised, beams of warm light streaming down from parting clouds above, peaceful riverside with reeds and trees, transcendent atmosphere, golden reflections on water`,
          takeaway:
            "Sometimes the most powerful leaders are the ones willing to start at the bottom — standing in line with everyone else.",
          reflectionQuestion:
            'Have you ever stepped into a situation where you didn\'t "need" to, but knew it was the right thing?',
        },
        {
          id: 'loj-2-2',
          chapterId: 'the-beginning',
          order: 2,
          passage: {
            book: 'Matthew',
            chapter: 4,
            verseStart: 1,
            verseEnd: 11,
            display: 'Matthew 4:1-11',
          },
          originalText:
            'Then Jesus was led by the Spirit into the wilderness to be tempted by the devil. After fasting forty days and forty nights, he was hungry.',
          interpretation:
            "Right after the highest moment of his life — hearing that voice of affirmation — Jesus went straight into the hardest. Forty days alone in the desert with no food. And during his weakest moment, he was offered shortcuts: instant power, instant fame, instant comfort. Every temptation was basically: \"Why struggle when you could have it all right now?\" But he turned down every shortcut because he knew that the easy path wasn't the right path.",
          imagePrompt: `${STYLE_PREFIX}, a solitary figure sitting on a rocky desert hilltop at twilight, vast empty landscape stretching to the horizon, dramatic clouds, feeling of isolation but inner strength, warm and cool tones contrasting, contemplative mood`,
          takeaway:
            "The shortcuts that look most appealing are usually the ones that cost you the most in the long run.",
          reflectionQuestion:
            "When have you been tempted to take a shortcut that you knew wasn't right?",
        },
      ],
    },
    {
      id: 'miracles-and-teachings',
      title: 'Miracles & Teachings',
      journeyId: 'life-of-jesus',
      order: 3,
      scenes: [
        {
          id: 'loj-3-1',
          chapterId: 'miracles-and-teachings',
          order: 1,
          passage: {
            book: 'Matthew',
            chapter: 14,
            verseStart: 15,
            verseEnd: 21,
            display: 'Matthew 14:15-21',
          },
          originalText:
            'Taking the five loaves and the two fish and looking up to heaven, he gave thanks and broke the loaves... They all ate and were satisfied, and the disciples picked up twelve basketfuls of broken pieces that were left over.',
          interpretation:
            "A massive crowd of 5,000+ people had been listening to Jesus all day and nobody thought to bring snacks. The disciples were like, \"Send them home, we can't feed all these people.\" All they could find was one kid's packed lunch — five pieces of bread and two fish. But Jesus took it, said thanks, broke it, and started passing it around. Somehow, not only did everyone eat until they were full, but there were twelve baskets of leftovers. More than enough.",
          imagePrompt: `${STYLE_PREFIX}, a vast crowd of diverse people sitting on a green hillside, a central figure standing and breaking bread, baskets of food being passed through the crowd, warm afternoon light, joyful atmosphere, birds eye view shifting to ground level, community and abundance`,
          takeaway:
            "What you have might not seem like enough, but when offered with the right heart, it can go further than you ever imagined.",
          reflectionQuestion:
            "When has something small you offered — time, kindness, resources — turned out to be exactly what was needed?",
        },
        {
          id: 'loj-3-2',
          chapterId: 'miracles-and-teachings',
          order: 2,
          passage: {
            book: 'Matthew',
            chapter: 14,
            verseStart: 25,
            verseEnd: 31,
            display: 'Matthew 14:25-31',
          },
          originalText:
            'Shortly before dawn Jesus went out to them, walking on the lake. When the disciples saw him walking on the lake, they were terrified. "It\'s a ghost," they said, and cried out in fear.',
          interpretation:
            "It's 3 AM. The disciples are in a boat in the middle of a storm, waves crashing, wind howling. Then they see a figure walking toward them — on the water. They freak out, thinking it's a ghost. Jesus calls out: \"Relax, it's me.\" Peter, always the bold one, says: \"If it's really you, tell me to come out there.\" So he steps out of the boat and starts walking on water too — until he looks down at the waves and starts sinking. Jesus grabs his hand: \"Why did you doubt?\"",
          imagePrompt: `${STYLE_PREFIX}, two figures on a stormy sea at night, one standing confidently on the water reaching out a hand to another who is partially submerged, dramatic waves and rain, lightning illuminating the scene, intense blue and silver tones with warm gold around the standing figure, powerful emotional moment`,
          takeaway:
            "You can do incredible things when you keep your focus on what matters — it's when you look at the chaos around you that you start to sink.",
          reflectionQuestion:
            "What \"storm\" in your life has tested your ability to stay focused on what matters?",
        },
      ],
    },
    {
      id: 'the-sermon',
      title: 'The Sermon on the Mount',
      journeyId: 'life-of-jesus',
      order: 4,
      scenes: [
        {
          id: 'loj-4-1',
          chapterId: 'the-sermon',
          order: 1,
          passage: {
            book: 'Matthew',
            chapter: 5,
            verseStart: 3,
            verseEnd: 12,
            display: 'Matthew 5:3-12',
          },
          originalText:
            'Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they will be comforted. Blessed are the meek, for they will inherit the earth.',
          interpretation:
            "Jesus sat down on a hillside and basically flipped the world's value system upside down. Society says: blessed are the powerful, the rich, the popular. Jesus says: no — blessed are the ones who feel broken, who grieve, who are gentle, who hunger for justice. He wasn't saying suffering is good. He was saying that the people the world overlooks are the ones God sees first. It's the most counterintuitive success speech ever given.",
          imagePrompt: `${STYLE_PREFIX}, a figure sitting on a grassy hillside speaking to a large diverse crowd seated below, golden afternoon light, rolling green hills in background, intimate yet grand atmosphere, warm tones, people listening intently, wide cinematic composition`,
          takeaway:
            "The world's scoreboard and God's scoreboard look completely different. What makes you valuable isn't what culture tells you.",
          reflectionQuestion:
            'Which "blessing" resonates most with where you are in life right now?',
        },
        {
          id: 'loj-4-2',
          chapterId: 'the-sermon',
          order: 2,
          passage: {
            book: 'Matthew',
            chapter: 5,
            verseStart: 43,
            verseEnd: 48,
            display: 'Matthew 5:43-48',
          },
          originalText:
            'You have heard that it was said, "Love your neighbor and hate your enemy." But I tell you, love your enemies and pray for those who persecute you.',
          interpretation:
            "This is where Jesus really lost the crowd. Loving people who love you back? Easy. Loving your enemies? That's a different level. He wasn't being naive — he was pointing out that anyone can be kind to their friends. That doesn't take strength. Real strength is refusing to let someone else's hate turn you into a hateful person. It's choosing not to become what hurt you.",
          imagePrompt: `${STYLE_PREFIX}, two figures facing each other with contrasting expressions, one hostile and one peaceful with an extended hand, dramatic lighting dividing the scene between warm and cool tones, abstract landscape background, tension and grace in one frame`,
          takeaway:
            "Loving your enemies isn't weakness — it's refusing to let hate win. It takes more strength to forgive than to fight back.",
          reflectionQuestion:
            'Is there someone in your life you struggle to show kindness to? What would it look like to try?',
        },
        {
          id: 'loj-4-3',
          chapterId: 'the-sermon',
          order: 3,
          passage: {
            book: 'Matthew',
            chapter: 7,
            verseStart: 24,
            verseEnd: 27,
            display: 'Matthew 7:24-27',
          },
          originalText:
            'Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock. The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall.',
          interpretation:
            "Jesus wrapped up the whole sermon with a construction metaphor. Two builders. Same storm. Different outcomes. One built on rock — did the hard work of digging deep into solid ground. The other took the easy route and built on sand. When the storm hit (and storms always come), only one house was left standing. His point: it's not enough to hear good advice. You have to actually live it. Knowledge without action is just sand.",
          imagePrompt: `${STYLE_PREFIX}, split composition showing two houses in a storm, one standing firm on a rocky cliff and one collapsing on sandy ground, dramatic storm clouds and rain, lightning, waves crashing, contrasting stability and destruction, cinematic dramatic scene`,
          takeaway:
            "Everyone faces storms. The difference isn't luck — it's what you built your life on before the storm arrived.",
          reflectionQuestion:
            "What foundations in your life feel rock-solid? What feels like it's built on sand?",
        },
      ],
    },
    {
      id: 'the-last-week',
      title: 'The Last Week',
      journeyId: 'life-of-jesus',
      order: 5,
      scenes: [
        {
          id: 'loj-5-1',
          chapterId: 'the-last-week',
          order: 1,
          passage: {
            book: 'Matthew',
            chapter: 21,
            verseStart: 1,
            verseEnd: 11,
            display: 'Matthew 21:1-11',
          },
          originalText:
            'A very large crowd spread their cloaks on the road, while others cut branches from the trees and spread them on the road. The crowds that went ahead of him and those that followed shouted, "Hosanna to the Son of David!"',
          interpretation:
            "Jesus rode into Jerusalem on a donkey — not a war horse, not a chariot. A donkey. The crowd went absolutely wild, throwing their coats on the ground, waving palm branches like it was a ticker-tape parade. They thought he was coming to overthrow the Roman government. They shouted \"Hosanna\" — which means \"save us.\" They wanted a political hero. What they got was something they didn't expect. Within a week, some of these same voices would be calling for his death.",
          imagePrompt: `${STYLE_PREFIX}, a figure riding a donkey through a crowded ancient city gate, people on both sides waving palm branches and throwing colorful cloaks on the road, joyful celebration, warm golden light streaming through the gate, festive atmosphere, cinematic perspective looking down the road`,
          takeaway:
            "People will cheer for you when you match their expectations and turn on you when you don't. Stay true to your purpose, not their applause.",
          reflectionQuestion:
            "Have you ever felt pressure to be what others wanted instead of who you really are?",
        },
        {
          id: 'loj-5-2',
          chapterId: 'the-last-week',
          order: 2,
          passage: {
            book: 'John',
            chapter: 13,
            verseStart: 3,
            verseEnd: 17,
            display: 'John 13:3-17',
          },
          originalText:
            'So he got up from the meal, took off his outer clothing, and wrapped a towel around his waist. After that, he poured water into a basin and began to wash his disciples\' feet.',
          interpretation:
            "The night before his death, Jesus didn't give a dramatic speech about his legacy or make demands. He got up, grabbed a towel, and started washing feet. In that culture, foot-washing was the lowest job — reserved for servants. The leader of the group got on his knees and cleaned the dirtiest part of his friends' bodies. Peter was so uncomfortable he tried to refuse. But Jesus was making a point: real leadership isn't about being served. It's about serving.",
          imagePrompt: `${STYLE_PREFIX}, an intimate candlelit room, a figure kneeling and washing another person's feet over a basin, warm golden candlelight, other figures seated around a table watching in surprise, humble and tender atmosphere, dramatic chiaroscuro lighting`,
          takeaway:
            "The greatest leaders don't demand service — they give it. True authority is earned through humility, not power.",
          reflectionQuestion:
            'When was the last time you served someone without expecting anything in return?',
        },
        {
          id: 'loj-5-3',
          chapterId: 'the-last-week',
          order: 3,
          passage: {
            book: 'Luke',
            chapter: 22,
            verseStart: 14,
            verseEnd: 20,
            display: 'Luke 22:14-20',
          },
          originalText:
            'And he took bread, gave thanks and broke it, and gave it to them, saying, "This is my body given for you; do this in remembrance of me."',
          interpretation:
            "It's their last meal together, and Jesus knows it. Instead of panic, he picks up bread and wine — the most ordinary things on the table — and gives them the deepest meaning imaginable. \"This bread is my body, broken for you. This cup is my blood, poured out for you.\" He was telling them: what's about to happen isn't an accident. It's on purpose. And every time you eat together after this, remember why. It's the original \"remember me\" — two thousand years before social media.",
          imagePrompt: `${STYLE_PREFIX}, a long table with diverse figures sharing a meal, central figure breaking bread with both hands raised, warm intimate lighting from oil lamps, rich warm colors of bread and wine on the table, emotional faces, last supper atmosphere but modern editorial style`,
          takeaway:
            "Some of the most sacred moments happen around the simplest things — a meal, a conversation, shared presence.",
          reflectionQuestion:
            'What everyday ritual in your life carries deep meaning for you?',
        },
      ],
    },
    {
      id: 'the-cross',
      title: 'The Cross',
      journeyId: 'life-of-jesus',
      order: 6,
      scenes: [
        {
          id: 'loj-6-1',
          chapterId: 'the-cross',
          order: 1,
          passage: {
            book: 'Luke',
            chapter: 22,
            verseStart: 39,
            verseEnd: 44,
            display: 'Luke 22:39-44',
          },
          originalText:
            'He withdrew about a stone\'s throw beyond them, knelt down and prayed, "Father, if you are willing, take this cup from me; yet not my will, but yours be done." And being in anguish, he prayed more earnestly.',
          interpretation:
            "After dinner, Jesus went to a garden to pray — and this wasn't a calm, collected prayer. He was terrified. He literally asked God: \"Is there any other way?\" He knew what was coming — betrayal, torture, execution — and every human instinct in him wanted to run. His sweat fell like drops of blood. But in the end, he chose to go through with it. Not because it was easy. Because he believed it mattered. This is the most honest moment of fear and courage you'll ever read.",
          imagePrompt: `${STYLE_PREFIX}, a solitary figure kneeling in a dark garden among ancient olive trees, moonlight filtering through branches, posture of anguish and surrender, deep blues and silver with a single beam of warm light from above, emotionally intense and intimate, dramatic shadows`,
          takeaway:
            "Courage isn't the absence of fear. It's feeling the fear fully and still choosing to do what matters.",
          reflectionQuestion:
            'When have you had to push through fear to do something you believed in?',
        },
        {
          id: 'loj-6-2',
          chapterId: 'the-cross',
          order: 2,
          passage: {
            book: 'Luke',
            chapter: 23,
            verseStart: 33,
            verseEnd: 34,
            display: 'Luke 23:33-34',
          },
          originalText:
            'When they came to the place called the Skull, they crucified him there, along with the criminals — one on his right, the other on his left. Jesus said, "Father, forgive them, for they do not know what they are doing."',
          interpretation:
            "They nailed him to a wooden cross between two criminals. The crowd mocked him. Soldiers gambled for his clothes. And in the middle of the worst pain imaginable — physically, emotionally, spiritually — the first words out of his mouth weren't anger or curses or even self-pity. They were: \"Forgive them. They don't understand what they're doing.\" In his darkest moment, his instinct was compassion. That tells you everything about who he was.",
          imagePrompt: `${STYLE_PREFIX}, three crosses silhouetted on a hilltop against a dramatic darkened sky, the center cross slightly larger, rays of warm light breaking through storm clouds, somber yet hopeful atmosphere, wide cinematic landscape, muted earth tones with gold light accents`,
          takeaway:
            "How you respond in your worst moment reveals your truest character. Forgiveness in the face of injustice is the ultimate strength.",
          reflectionQuestion:
            'Is there a hurt in your life where forgiveness feels impossible? What would it take to start?',
        },
        {
          id: 'loj-6-3',
          chapterId: 'the-cross',
          order: 3,
          passage: {
            book: 'Luke',
            chapter: 23,
            verseStart: 44,
            verseEnd: 46,
            display: 'Luke 23:44-46',
          },
          originalText:
            'It was now about noon, and darkness came over the whole land until three in the afternoon, for the sun stopped shining. And the curtain of the temple was torn in two. Jesus called out with a loud voice, "Father, into your hands I commit my spirit." When he had said this, he breathed his last.',
          interpretation:
            "For three hours, the sky went dark in the middle of the day. It was as if the whole world was holding its breath. Then the massive curtain in the temple — the one that symbolically separated people from God — ripped in half from top to bottom. Not from bottom to top, like a person would tear it. From top to bottom. The message was clear: the barrier is gone. Access is open. And Jesus, with his final breath, didn't scream or rage. He simply said: \"I trust you with everything I am.\"",
          imagePrompt: `${STYLE_PREFIX}, a massive ornate curtain tearing from top to bottom in a grand temple interior, dramatic light bursting through the tear, debris and fabric floating in the air, powerful sense of breakthrough and release, warm golden light contrasting with dark interior, epic cinematic moment`,
          takeaway:
            "Some things have to break before something new can begin. The end of one chapter is often the doorway to the next.",
          reflectionQuestion:
            'What "curtain" in your life needs to come down to let something new in?',
        },
      ],
    },
    {
      id: 'the-resurrection',
      title: 'The Resurrection',
      journeyId: 'life-of-jesus',
      order: 7,
      scenes: [
        {
          id: 'loj-7-1',
          chapterId: 'the-resurrection',
          order: 1,
          passage: {
            book: 'John',
            chapter: 20,
            verseStart: 1,
            verseEnd: 9,
            display: 'John 20:1-9',
          },
          originalText:
            'Early on the first day of the week, while it was still dark, Mary Magdalene went to the tomb and saw that the stone had been removed from the entrance.',
          interpretation:
            "Three days after the crucifixion, Mary went to the tomb at dawn — probably to grieve, to process, to say goodbye. But when she got there, the massive stone that sealed the entrance had been rolled away. The tomb was empty. The burial wrappings were folded and left behind. No body. No explanation. She ran to tell the others, and Peter and John sprinted to see for themselves. They stood in an empty grave and slowly realized: this wasn't a robbery. This was something they had no category for.",
          imagePrompt: `${STYLE_PREFIX}, a woman approaching a cave-like tomb at dawn, the large stone rolled away from the entrance, brilliant warm golden light emanating from inside the empty tomb, early morning atmosphere with soft mist, dramatic contrast between the dark surroundings and the radiant light, awe and wonder`,
          takeaway:
            "The story didn't end where everyone thought it would. The darkest chapter was actually the setup for the most unexpected comeback in history.",
          reflectionQuestion:
            'Have you experienced a situation that felt like the end, but turned out to be a new beginning?',
        },
        {
          id: 'loj-7-2',
          chapterId: 'the-resurrection',
          order: 2,
          passage: {
            book: 'John',
            chapter: 20,
            verseStart: 11,
            verseEnd: 18,
            display: 'John 20:11-18',
          },
          originalText:
            'Jesus said to her, "Mary." She turned toward him and cried out in Aramaic, "Rabboni!" (which means "Teacher").',
          interpretation:
            "Mary was standing outside the empty tomb crying. A man appeared behind her and she assumed he was the gardener. Then he said one word — her name. \"Mary.\" And instantly she knew. It was Jesus. Alive. Standing right there. Of all the people he could have appeared to first — the disciples, the religious leaders, the crowds — he chose Mary. A woman whose testimony wouldn't even hold up in court in that culture. He always showed up for the overlooked ones first.",
          imagePrompt: `${STYLE_PREFIX}, a woman turning around in a garden at sunrise with an expression of shock and joy, a figure standing in warm golden light with an outstretched hand, beautiful garden with flowers and morning dew, emotional reunion atmosphere, soft warm tones, intimate and powerful moment`,
          takeaway:
            "Sometimes the thing you're desperately searching for is standing right behind you, waiting for you to turn around.",
          reflectionQuestion:
            'Have you ever missed something — or someone — that was right in front of you the whole time?',
        },
        {
          id: 'loj-7-3',
          chapterId: 'the-resurrection',
          order: 3,
          passage: {
            book: 'Matthew',
            chapter: 28,
            verseStart: 16,
            verseEnd: 20,
            display: 'Matthew 28:16-20',
          },
          originalText:
            'Then Jesus came to them and said, "All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations... And surely I am with you always, to the very end of the age."',
          interpretation:
            "In his final appearance, Jesus gathered his closest friends on a mountaintop and gave them their mission: go everywhere, tell everyone, teach them everything I showed you. But the last line is the one that hit different: \"I am with you always. Until the very end.\" He wasn't leaving them with a to-do list and disappearing. He was saying: wherever you go, whatever you face, you're not alone. The story doesn't end here — it goes wherever you carry it.",
          imagePrompt: `${STYLE_PREFIX}, a group of diverse figures standing on a mountaintop at golden hour, looking out over a vast landscape of cities and villages below, warm golden sunrise, sense of mission and hope, one central figure with arms spread wide addressing the group, epic panoramic view, inspiring and hopeful atmosphere`,
          takeaway:
            "The story doesn't end with you receiving it. It continues when you share it. You're not just a reader — you're the next chapter.",
          reflectionQuestion:
            "What part of this journey has impacted you most? How will you carry it forward?",
        },
      ],
    },
  ],
};
