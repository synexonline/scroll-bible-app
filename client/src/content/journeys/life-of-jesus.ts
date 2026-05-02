import type { Journey } from '../types';
import { STYLE_PREFIX } from '../prompts';

export const lifeOfJesus: Journey = {
  id: 'life-of-jesus',
  title: 'The Life of Jesus',
  subtitle: 'From a manger to an empty tomb',
  description: 'Walk through the most pivotal story ever told — reimagined for today.',
  coverPrompt: `${STYLE_PREFIX}, a silhouette figure walking toward golden sunrise over rolling hills, peaceful dawn atmosphere, wide cinematic composition`,
  tags: ['gospels', 'jesus', 'core', 'beginner'],
  estimatedMinutes: 45,
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
  ],
};
