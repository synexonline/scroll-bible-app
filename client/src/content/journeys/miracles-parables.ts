import type { Journey } from '../types';
import { STYLE_PREFIX } from '../prompts';

export const miraclesParables: Journey = {
  id: 'miracles-parables',
  title: 'Miracles & Parables',
  subtitle: 'Stories within the story',
  description:
    "Jesus taught through stories and showed through miracles. These are the ones that hit different.",
  coverPrompt: `${STYLE_PREFIX}, an open book with golden light and miniature scenes floating above its pages, seeds growing into trees, a tiny boat on waves, a lost coin glowing, magical realism editorial illustration`,
  tags: ['parables', 'miracles', 'teachings', 'beginner'],
  estimatedMinutes: 75,
  chapters: [
    {
      id: 'stories-he-told',
      title: 'Stories He Told',
      journeyId: 'miracles-parables',
      order: 1,
      scenes: [
        {
          id: 'mp-1-1',
          chapterId: 'stories-he-told',
          order: 1,
          passage: {
            book: 'Luke',
            chapter: 15,
            verseStart: 11,
            verseEnd: 24,
            display: 'Luke 15:11-24',
          },
          originalText:
            'The younger son said to his father, "Father, give me my share of the estate." So he divided his property between them... But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son.',
          interpretation:
            "A son basically told his dad: \"I wish you were dead — give me my inheritance now.\" Then he took the money and blew it all on partying. When he was broke and literally eating pig slop, he decided to crawl back home and beg to be a servant. But here's the twist: his dad had been watching the road every day. When he spotted his son in the distance, he didn't wait for an apology. He sprinted toward him, hugged him, and threw the biggest party the neighborhood had ever seen. The son came back expecting punishment. He got a celebration.",
          imagePrompt: `${STYLE_PREFIX}, an older man running with open arms down a long dirt road toward a distant ragged figure, warm golden sunset light, emotional reunion about to happen, rolling hills and a large estate house in background, dust kicking up from running feet, overwhelming love and joy`,
          takeaway:
            "No matter how far you've gone or how badly you've messed up, the door home is always open. You don't have to earn your way back.",
          reflectionQuestion:
            'Is there an area of your life where you feel like you\'ve gone too far to come back?',
        },
        {
          id: 'mp-1-2',
          chapterId: 'stories-he-told',
          order: 2,
          passage: {
            book: 'Luke',
            chapter: 10,
            verseStart: 30,
            verseEnd: 37,
            display: 'Luke 10:30-37',
          },
          originalText:
            'A man was going down from Jerusalem to Jericho, when he was attacked by robbers. They stripped him of his clothes, beat him and went away, leaving him half dead.',
          interpretation:
            "A man gets mugged and left for dead on the side of the road. A priest walks by — sees him, crosses to the other side. A religious leader walks by — same thing. Then a Samaritan comes along. This is huge because Jews and Samaritans despised each other. It would be like your worst enemy stopping to save your life. The Samaritan bandaged his wounds, put him on his own donkey, took him to an inn, and paid for his recovery. Jesus asked: \"Which one was the real neighbor?\" The answer was obvious. And uncomfortable.",
          imagePrompt: `${STYLE_PREFIX}, a man kneeling beside an injured person on a dusty road, carefully bandaging their wounds, a donkey waiting nearby, two distant figures walking away on the road, warm compassionate lighting, contrast between the care being given and those who passed by, emotional and powerful`,
          takeaway:
            "Your neighbor isn't defined by proximity or similarity — it's anyone in front of you who needs help. Compassion doesn't check credentials.",
          reflectionQuestion:
            'When have you walked past someone who needed help? What stopped you — and what would you do differently?',
        },
        {
          id: 'mp-1-3',
          chapterId: 'stories-he-told',
          order: 3,
          passage: {
            book: 'Matthew',
            chapter: 13,
            verseStart: 3,
            verseEnd: 9,
            display: 'Matthew 13:3-9',
          },
          originalText:
            'A farmer went out to sow his seed. As he was scattering the seed, some fell along the path, and the birds came and ate it up. Some fell on rocky places... Other seed fell among thorns... Still other seed fell on good soil.',
          interpretation:
            "Jesus told a farming story that's really about how people receive truth. Same seed, four different outcomes depending on where it lands. Some hear something meaningful and immediately forget it — that's the path. Some get excited but bail when it gets hard — rocky soil. Some start strong but let worries, money, and distractions choke it out — thorns. And some actually let it take root, do the hard work of growth, and produce something real — good soil. The seed is the same every time. The difference is the soil.",
          imagePrompt: `${STYLE_PREFIX}, a split composition showing four different terrains side by side, a barren path with birds, rocky ground with wilting sprouts, thorny bushes choking small plants, and rich dark soil with tall golden wheat, a hand scattering seeds across all four, warm light on the wheat section, visual progression from death to life`,
          takeaway:
            "Everyone hears the same truth. The difference is what you do with it. Growth isn't about the message — it's about the readiness of the person receiving it.",
          reflectionQuestion:
            'Which type of soil best describes where you are right now? What would it take to become "good soil"?',
        },
        {
          id: 'mp-1-4',
          chapterId: 'stories-he-told',
          order: 4,
          passage: {
            book: 'Luke',
            chapter: 15,
            verseStart: 3,
            verseEnd: 7,
            display: 'Luke 15:3-7',
          },
          originalText:
            'Suppose one of you has a hundred sheep and loses one of them. Doesn\'t he leave the ninety-nine in the open country and go after the lost sheep until he finds it?',
          interpretation:
            "Quick math: you have 100 sheep. You lose one. You still have 99. That's a 99% success rate. Most people would call that acceptable losses and move on. But Jesus said a good shepherd leaves the 99 to go find the one. Not because the one is more valuable, but because every single one matters. He doesn't wait for the lost sheep to find its way back. He goes looking. And when he finds it, he doesn't scold it. He puts it on his shoulders and carries it home. Then throws a party.",
          imagePrompt: `${STYLE_PREFIX}, a figure carrying a small lamb on their shoulders while walking through a rocky valley at sunset, flock of sheep visible in the distance on a hilltop, warm golden light, tender and protective moment, rugged beautiful landscape, sense of relief and celebration`,
          takeaway:
            "You are never just a number. You are the one worth searching for, even when you feel lost in the crowd.",
          reflectionQuestion:
            'Have you ever felt lost or overlooked? What would it mean to know someone is actively looking for you?',
        },
        {
          id: 'mp-1-5',
          chapterId: 'stories-he-told',
          order: 5,
          passage: {
            book: 'Matthew',
            chapter: 25,
            verseStart: 14,
            verseEnd: 30,
            display: 'Matthew 25:14-30',
          },
          originalText:
            'To one he gave five bags of gold, to another two bags, and to another one bag, each according to his ability... His master replied, "Well done, good and faithful servant!"',
          interpretation:
            "A boss goes on a trip and leaves three employees with different amounts of money to manage. The first two invest theirs and double it. The third is so afraid of messing up that he buries his in the ground and does nothing. When the boss comes back, he's thrilled with the first two — not because they made the most, but because they tried. The third one played it safe out of fear, and the boss was furious. The lesson isn't about money. It's about using what you've been given instead of sitting on it out of fear.",
          imagePrompt: `${STYLE_PREFIX}, three figures in an ancient courtyard, one proudly presenting overflowing treasure, another showing modest but real gains, a third nervously holding a dirty cloth with a single buried coin, a wealthy figure evaluating them, dramatic lighting highlighting the contrast between initiative and fear`,
          takeaway:
            "Playing it safe isn't safe. The biggest risk is doing nothing with what you've been given. You're not judged on how much you start with — but on what you do with it.",
          reflectionQuestion:
            "What talent, opportunity, or resource are you sitting on that you've been afraid to use?",
        },
      ],
    },
    {
      id: 'things-he-did',
      title: 'Things He Did',
      journeyId: 'miracles-parables',
      order: 2,
      scenes: [
        {
          id: 'mp-2-1',
          chapterId: 'things-he-did',
          order: 1,
          passage: {
            book: 'John',
            chapter: 2,
            verseStart: 1,
            verseEnd: 11,
            display: 'John 2:1-11',
          },
          originalText:
            'On the third day a wedding took place at Cana in Galilee... When the wine was gone, Jesus\' mother said to him, "They have no more wine."',
          interpretation:
            "Jesus' first recorded miracle wasn't healing the sick or raising the dead. It was saving a party. A wedding ran out of wine — which in that culture was a massive embarrassment for the family. His mom nudged him: \"They're out of wine.\" He wasn't planning to go public yet, but he did it anyway. He turned about 150 gallons of water into the best wine anyone had ever tasted. The headwaiter was confused because usually you serve the good stuff first. Jesus' first act was making sure people could keep celebrating.",
          imagePrompt: `${STYLE_PREFIX}, a joyful wedding celebration in an ancient courtyard, large stone water jars in the foreground with wine being poured out, people dancing and celebrating, a figure quietly smiling near the jars, festive lights and decorations, warm joyful atmosphere with rich colors of wine and gold`,
          takeaway:
            "Sometimes the sacred shows up in the most ordinary moments — a party, a meal, a conversation. Not every miracle is dramatic. Some just keep the celebration going.",
          reflectionQuestion:
            'Where in your everyday life might you be missing something extraordinary happening quietly?',
        },
        {
          id: 'mp-2-2',
          chapterId: 'things-he-did',
          order: 2,
          passage: {
            book: 'Mark',
            chapter: 4,
            verseStart: 37,
            verseEnd: 41,
            display: 'Mark 4:37-41',
          },
          originalText:
            'A furious squall came up, and the waves broke over the boat, so that it was nearly swamped. Jesus was in the stern, sleeping on a cushion.',
          interpretation:
            "The disciples were in a boat with Jesus when a massive storm hit. Waves crashing over the sides, the boat taking on water. Everyone is panicking. And Jesus? He was asleep. On a cushion. In the middle of a storm. They woke him up: \"Don't you care if we drown?!\" He stood up, told the wind and waves to stop, and everything went dead calm. Then he looked at them: \"Why are you so afraid?\" They were more terrified of the calm than the storm. They whispered: \"Who IS this guy?\"",
          imagePrompt: `${STYLE_PREFIX}, a figure standing calmly at the bow of a small wooden boat with one hand raised, storm clouds and waves dramatically parting and calming around the boat, disciples cowering behind, the contrast between chaos retreating and perfect stillness advancing, dramatic lighting, powerful moment`,
          takeaway:
            "Peace isn't the absence of storms — it's the presence of someone who can speak into the chaos. The same thing that terrifies you might be the thing someone else can handle effortlessly.",
          reflectionQuestion:
            'What "storm" in your life needs a calming voice right now?',
        },
        {
          id: 'mp-2-3',
          chapterId: 'things-he-did',
          order: 3,
          passage: {
            book: 'John',
            chapter: 9,
            verseStart: 1,
            verseEnd: 11,
            display: 'John 9:1-11',
          },
          originalText:
            'As he went along, he saw a man blind from birth. His disciples asked him, "Rabbi, who sinned, this man or his parents, that he was born blind?"',
          interpretation:
            "The disciples saw a blind man and immediately asked: \"Whose fault is this?\" It was the default thinking — suffering must be punishment for someone's sin. Jesus shut that down immediately: \"Nobody sinned. This isn't about blame.\" Then he did something wild — he spat in the dirt, made mud, and put it on the man's eyes. Told him to go wash in a specific pool. The man did, and for the first time in his life, he could see. The religious leaders were furious because it happened on the Sabbath. They cared more about the rules than the miracle.",
          imagePrompt: `${STYLE_PREFIX}, a man washing his face in a reflecting pool, water splashing, the moment of first seeing with wide amazed eyes, reflections of a beautiful world in the water, warm golden light, other figures in background with mixed reactions of joy and disapproval, transformative moment, rich warm colors`,
          takeaway:
            "Stop asking \"whose fault is it\" and start asking \"what can be done about it.\" Not every hardship is a punishment. Some are setups for breakthroughs.",
          reflectionQuestion:
            'Have you ever been stuck looking for blame when you should have been looking for solutions?',
        },
        {
          id: 'mp-2-4',
          chapterId: 'things-he-did',
          order: 4,
          passage: {
            book: 'John',
            chapter: 11,
            verseStart: 32,
            verseEnd: 44,
            display: 'John 11:32-44',
          },
          originalText:
            'When Mary reached the place where Jesus was and saw him, she fell at his feet and said, "Lord, if you had been here, my brother would not have died." When Jesus saw her weeping, and the Jews who had come along with her also weeping, he was deeply moved in spirit and troubled. Jesus wept.',
          interpretation:
            "Lazarus, one of Jesus' close friends, had been dead for four days. His sisters were devastated: \"If you had been here, he wouldn't have died.\" And here's the most revealing moment in the whole New Testament — Jesus cried. He knew he was about to raise Lazarus from the dead. He knew the ending. But he still cried. He felt the weight of their grief. Then he walked to the tomb and shouted: \"Lazarus, come out!\" And a dead man walked out, still wrapped in burial cloths. The shortest verse in the Bible — \"Jesus wept\" — might be the most powerful.",
          imagePrompt: `${STYLE_PREFIX}, a dramatic scene at a cave tomb entrance, a figure wrapped in white cloth emerging from darkness into blinding light, people around reacting with shock and awe and tears of joy, dramatic light contrast between the dark tomb and bright daylight, dust particles in the light, resurrection moment, overwhelming emotion`,
          takeaway:
            "It's okay to feel the pain even when you know things will work out. Strength and tears aren't opposites — sometimes they come together.",
          reflectionQuestion:
            'When was the last time you let yourself fully feel something instead of rushing to fix it?',
        },
      ],
    },
    {
      id: 'encounters',
      title: 'Life-Changing Encounters',
      journeyId: 'miracles-parables',
      order: 3,
      scenes: [
        {
          id: 'mp-3-1',
          chapterId: 'encounters',
          order: 1,
          passage: {
            book: 'John',
            chapter: 4,
            verseStart: 7,
            verseEnd: 26,
            display: 'John 4:7-26',
          },
          originalText:
            'When a Samaritan woman came to draw water, Jesus said to her, "Will you give me a drink?"... The woman said to him, "I know that Messiah is coming." Jesus declared, "I, the one speaking to you — I am he."',
          interpretation:
            "Jesus was tired and sat down at a well. A Samaritan woman came to draw water — at noon, when nobody else would be there, probably because she was avoiding judgment. Jesus asked her for a drink. This broke every social rule: Jewish men didn't talk to Samaritans, and definitely not to women alone. But he wasn't interested in social rules. He had a real conversation with her — knew her whole history, didn't shame her for it, and revealed something to her that he hadn't told anyone else yet. She went from hiding from her community to running back to tell everyone.",
          imagePrompt: `${STYLE_PREFIX}, two figures sitting at an ancient stone well in the middle of the day, harsh noon sun overhead, one offering a cup to the other, intimate conversation, desert landscape, the woman's expression shifting from guarded to amazed, warm golden tones, quiet revolutionary moment`,
          takeaway:
            "The people who feel the most disqualified are often the most ready for change. Don't write anyone off — especially yourself.",
          reflectionQuestion:
            'Is there a part of your story you hide because you think it disqualifies you?',
        },
        {
          id: 'mp-3-2',
          chapterId: 'encounters',
          order: 2,
          passage: {
            book: 'Luke',
            chapter: 19,
            verseStart: 1,
            verseEnd: 10,
            display: 'Luke 19:1-10',
          },
          originalText:
            'He wanted to see who Jesus was, but because he was short he could not see over the crowd. So he ran ahead and climbed a sycamore-fig tree to see him.',
          interpretation:
            "Zacchaeus was a tax collector — which in that era meant he was a government-sanctioned thief who squeezed extra money out of his own people to get rich. Everyone hated him. When Jesus came through town, Zacchaeus wanted to see what the fuss was about, but he was too short to see over the crowd. So this wealthy, powerful man climbed a tree like a kid. Jesus looked up, called him by name, and said: \"I'm coming to your house today.\" The crowd was furious — \"He's going to eat with THAT guy?\" But by the end of the meal, Zacchaeus pledged to give half his wealth to the poor and repay everyone he'd cheated four times over.",
          imagePrompt: `${STYLE_PREFIX}, a short well-dressed man perched in a large sycamore tree looking down with a mix of curiosity and surprise, a figure below looking up with a warm smile and extended hand, large crowd surrounding them with disapproving expressions, colorful market town setting, playful yet profound moment`,
          takeaway:
            "People change when they feel seen, not when they feel judged. Curiosity — even awkward, tree-climbing curiosity — can be the start of a total life transformation.",
          reflectionQuestion:
            "Who in your life needs to feel seen rather than judged right now?",
        },
        {
          id: 'mp-3-3',
          chapterId: 'encounters',
          order: 3,
          passage: {
            book: 'John',
            chapter: 8,
            verseStart: 3,
            verseEnd: 11,
            display: 'John 8:3-11',
          },
          originalText:
            'The teachers of the law and the Pharisees brought in a woman caught in adultery... They said to Jesus, "In the Law Moses commanded us to stone such women. Now what do you say?"',
          interpretation:
            "The religious leaders dragged a woman into the public square and threw her at Jesus' feet. They said she'd been caught cheating and the law said to stone her. But this was a setup — they didn't care about her. They wanted to trap Jesus. If he said \"stone her,\" he'd contradict his message of mercy. If he said \"let her go,\" he'd contradict the law. Instead, he bent down and started writing in the dirt. Then he said: \"Whoever hasn't sinned, you throw the first stone.\" One by one, starting with the oldest, they all walked away. Then he told her: \"I don't condemn you either. Go and change your life.\"",
          imagePrompt: `${STYLE_PREFIX}, a figure crouching and writing in sandy ground with their finger, a woman standing nearby looking down with fear turning to relief, a crowd of accusers in background slowly dispersing, dramatic afternoon light, dust in the air, tension dissolving into grace, powerful intimate moment`,
          takeaway:
            "Before you judge someone else, check your own record. Grace doesn't ignore the mistake — it sees the person behind it and gives them a chance to start over.",
          reflectionQuestion:
            'When have you been quick to judge someone without considering your own imperfections?',
        },
      ],
    },
  ],
};
