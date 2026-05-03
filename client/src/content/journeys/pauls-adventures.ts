import type { Journey } from '../types';
import { STYLE_PREFIX } from '../prompts';

export const paulsAdventures: Journey = {
  id: 'pauls-adventures',
  title: "Paul's Adventures",
  subtitle: 'From persecutor to pioneer',
  description:
    "He started out hunting down believers. Then he became one. Follow Paul's wild ride across the ancient world.",
  coverPrompt: `${STYLE_PREFIX}, a lone traveler walking along an ancient Roman road stretching toward the horizon, dramatic sky with both storm and sunshine, Mediterranean landscape, sense of epic journey and purpose`,
  tags: ['paul', 'acts', 'letters', 'intermediate'],
  estimatedMinutes: 60,
  chapters: [
    {
      id: 'the-turnaround',
      title: 'The Turnaround',
      journeyId: 'pauls-adventures',
      order: 1,
      scenes: [
        {
          id: 'pa-1-1',
          chapterId: 'the-turnaround',
          order: 1,
          passage: {
            book: 'Acts',
            chapter: 7,
            verseStart: 57,
            verseEnd: 60,
            display: 'Acts 7:57-8:1',
          },
          originalText:
            'At this they covered their ears and, yelling at the top of their voices, they all rushed at him... And Saul approved of their killing him.',
          interpretation:
            "Before he was Paul, he was Saul — a young, ambitious religious enforcer. When Stephen, one of the first Christians, was dragged out of the city and stoned to death, Saul stood there watching and holding everyone's coats. He didn't throw a single stone, but he fully approved. In his mind, these Christians were dangerous heretics threatening everything he believed in. He wasn't evil — he was convinced he was right. That's what made him so effective, and so dangerous.",
          imagePrompt: `${STYLE_PREFIX}, a young man in ancient robes standing with arms crossed watching a disturbing scene from a distance, holding folded garments, crowd in background, conflicted expression, dust and tension in the air, dramatic side lighting, morally complex atmosphere`,
          takeaway:
            "The most dangerous people aren't the ones who know they're wrong — they're the ones who are absolutely certain they're right.",
          reflectionQuestion:
            'Have you ever been so convinced you were right that you later realized you were causing harm?',
        },
        {
          id: 'pa-1-2',
          chapterId: 'the-turnaround',
          order: 2,
          passage: {
            book: 'Acts',
            chapter: 9,
            verseStart: 1,
            verseEnd: 9,
            display: 'Acts 9:1-9',
          },
          originalText:
            'As he neared Damascus, suddenly a light from heaven flashed around him. He fell to the ground and heard a voice say to him, "Saul, Saul, why do you persecute me?"',
          interpretation:
            "Saul was on his way to Damascus with arrest warrants for Christians. He was on a mission. Then — blinding light. He hit the ground. A voice he couldn't ignore asked him a question that rewired his entire identity: \"Why are you persecuting me?\" Not \"why are you persecuting them\" — me. The very person Saul thought he was defending God against turned out to be God. He stood up blind. The man who thought he could see everything suddenly couldn't see anything. He didn't eat or drink for three days.",
          imagePrompt: `${STYLE_PREFIX}, a man fallen to the ground on a dusty road, blinding brilliant light from the sky above, other travelers shielding their eyes in confusion, dramatic radial light burst, ancient road to Damascus with city in distance, powerful transformative moment, extreme contrast between light and shadow`,
          takeaway:
            "Sometimes the biggest transformation starts with being completely knocked down. You can't see the truth until your old way of seeing is taken away.",
          reflectionQuestion:
            'Has there been a moment in your life where everything you thought you knew was suddenly challenged?',
        },
        {
          id: 'pa-1-3',
          chapterId: 'the-turnaround',
          order: 3,
          passage: {
            book: 'Acts',
            chapter: 9,
            verseStart: 10,
            verseEnd: 19,
            display: 'Acts 9:10-19',
          },
          originalText:
            '"Lord," Ananias answered, "I have heard many reports about this man and all the harm he has done to your holy people." ... But the Lord said to Ananias, "Go! This man is my chosen instrument."',
          interpretation:
            "God told a believer named Ananias to go heal the man who had been arresting and killing believers. Imagine getting that assignment. Ananias basically said: \"Are you sure? This is the guy who's been hunting us down.\" But he went anyway. He walked into the room where his enemy was sitting — blind, broken, confused — and called him \"Brother Saul.\" He touched him, and Saul could see again. The hunter was healed by the hunted. That's radical grace in action.",
          imagePrompt: `${STYLE_PREFIX}, a nervous man reaching out to touch the face of a blind man sitting in a dark room, warm golden light emanating from the point of contact, both figures showing emotion, simple ancient room with a window, healing and reconciliation atmosphere, intimate and powerful`,
          takeaway:
            "Grace means helping someone who doesn't deserve it. The person you least want to forgive might be the one most in need of it.",
          reflectionQuestion:
            'Could you extend kindness to someone who has hurt you or people you care about?',
        },
      ],
    },
    {
      id: 'the-missionary',
      title: 'The Missionary Journeys',
      journeyId: 'pauls-adventures',
      order: 2,
      scenes: [
        {
          id: 'pa-2-1',
          chapterId: 'the-missionary',
          order: 1,
          passage: {
            book: 'Acts',
            chapter: 13,
            verseStart: 2,
            verseEnd: 5,
            display: 'Acts 13:2-5',
          },
          originalText:
            'While they were worshiping the Lord and fasting, the Holy Spirit said, "Set apart for me Barnabas and Saul for the work to which I have called them."',
          interpretation:
            "Paul (formerly Saul) and his friend Barnabas got their marching orders: go. No detailed itinerary, no booking.com reservations, no guaranteed salary. Just: go tell people what you've experienced. So they did. They sailed to Cyprus, then into modern-day Turkey, walking hundreds of miles between cities. At every stop, they'd go to the local synagogue and start conversations that usually ended in either a revival or a riot. Sometimes both.",
          imagePrompt: `${STYLE_PREFIX}, two men boarding a small ancient wooden sailing ship at a Mediterranean port, bright blue sea, white buildings on the coast, sails unfurling, sense of adventure and departure, warm sunlight, birds in the sky, wide cinematic composition`,
          takeaway:
            "Sometimes the calling comes before the plan. You don't need every detail figured out — you just need to start moving.",
          reflectionQuestion:
            "What's something you've been waiting to do until everything is \"perfect\"?",
        },
        {
          id: 'pa-2-2',
          chapterId: 'the-missionary',
          order: 2,
          passage: {
            book: 'Acts',
            chapter: 16,
            verseStart: 22,
            verseEnd: 34,
            display: 'Acts 16:22-34',
          },
          originalText:
            'The crowd joined in the attack against Paul and Silas, and the magistrates ordered them to be stripped and beaten with rods... About midnight Paul and Silas were praying and singing hymns to God, and the other prisoners were listening to them.',
          interpretation:
            "Paul and Silas were beaten, stripped, and thrown into the deepest cell of a prison. Feet locked in stocks. Backs torn open. And at midnight — midnight! — they started singing. Not crying, not complaining, singing. The other prisoners were listening, probably thinking these guys were insane. Then an earthquake shook the building so hard that every door flew open and every chain fell off. The jailer was about to take his own life thinking everyone had escaped, but Paul shouted: \"We're all still here!\" The jailer fell to his knees.",
          imagePrompt: `${STYLE_PREFIX}, two men in chains inside a dark stone prison cell, singing with expressions of peace and joy despite their wounds, other prisoners listening in amazement from adjacent cells, cracks of golden light appearing in the walls and floor, earthquake atmosphere, dramatic contrast between suffering and hope`,
          takeaway:
            "Your response to a situation has more power than the situation itself. Singing in the dark changes the atmosphere for everyone around you.",
          reflectionQuestion:
            "How do you respond when things fall apart? What would it look like to choose hope in your hardest moment?",
        },
        {
          id: 'pa-2-3',
          chapterId: 'the-missionary',
          order: 3,
          passage: {
            book: 'Acts',
            chapter: 17,
            verseStart: 22,
            verseEnd: 28,
            display: 'Acts 17:22-28',
          },
          originalText:
            'Paul then stood up in the meeting of the Areopagus and said: "People of Athens! I see that in every way you are very religious... For in him we live and move and have our being."',
          interpretation:
            "Paul walked into Athens — the intellectual capital of the ancient world — and instead of attacking their beliefs, he did something genius. He noticed they had an altar labeled \"To An Unknown God.\" So he said: \"That unknown God you've been worshipping without knowing? Let me introduce you.\" He quoted their own poets. He met them where they were. He didn't come in with a wrecking ball — he built a bridge. Some laughed, some were curious, and some believed. That's how it always goes.",
          imagePrompt: `${STYLE_PREFIX}, a man standing and speaking confidently in an ancient Greek amphitheater, marble columns and statues visible, diverse crowd of philosophers and scholars listening with mixed reactions, afternoon light casting long shadows, intellectual atmosphere, warm golden tones on white marble`,
          takeaway:
            "You don't change minds by tearing down what people believe. You build bridges by finding common ground and starting the conversation there.",
          reflectionQuestion:
            'How do you approach conversations with people who see the world differently than you?',
        },
      ],
    },
    {
      id: 'the-shipwreck',
      title: 'The Shipwreck',
      journeyId: 'pauls-adventures',
      order: 3,
      scenes: [
        {
          id: 'pa-3-1',
          chapterId: 'the-shipwreck',
          order: 1,
          passage: {
            book: 'Acts',
            chapter: 27,
            verseStart: 13,
            verseEnd: 20,
            display: 'Acts 27:13-20',
          },
          originalText:
            'Before very long, a wind of hurricane force swept down... When neither sun nor stars appeared for many days and the storm continued raging, we finally gave up all hope of being saved.',
          interpretation:
            "Paul was being transported to Rome as a prisoner to stand trial before Caesar. The ship got caught in a massive storm — not a rough day at sea, a two-week nightmare. No sun. No stars. No GPS. No hope. The crew literally gave up. They threw cargo overboard. They stopped eating. They were just waiting to die. Sometimes life puts you in a storm so bad that you can't see any way out and everyone around you has quit.",
          imagePrompt: `${STYLE_PREFIX}, a wooden ship being tossed by enormous waves in a violent storm at sea, dark clouds, lightning, crew members holding on desperately, ropes and cargo flying, terrifying and chaotic, dramatic blue-black tones with flashes of white and electric blue, cinematic action scene`,
          takeaway:
            "Hopelessness is a feeling, not a fact. Just because you can't see the way out doesn't mean there isn't one.",
          reflectionQuestion:
            "Have you ever been in a situation where you genuinely felt hopeless? What got you through?",
        },
        {
          id: 'pa-3-2',
          chapterId: 'the-shipwreck',
          order: 2,
          passage: {
            book: 'Acts',
            chapter: 27,
            verseStart: 21,
            verseEnd: 26,
            display: 'Acts 27:21-26',
          },
          originalText:
            'Paul stood up before them and said: "Men, you should have taken my advice not to sail from Crete... But now I urge you to keep up your courage, because not one of you will be lost."',
          interpretation:
            "In the middle of total chaos, the prisoner became the leader. While everyone else was panicking, Paul stood up and said: \"I know this looks terrible. But I got a message last night — we're all going to survive. The ship's done for, but every single person will make it.\" Imagine being a Roman soldier and the chained-up prisoner is the calmest person on board, telling YOU to have courage. Sometimes the person with the least power in the room has the most to offer.",
          imagePrompt: `${STYLE_PREFIX}, a man standing calmly on the deck of a storm-tossed ship, speaking with authority to a group of frightened sailors and soldiers, wind and rain whipping around them, his posture confident and steady while others cling to ropes, warm light on his face contrasting with the dark storm, leadership in chaos`,
          takeaway:
            "Your title doesn't determine your influence. In a crisis, people follow the person who stays calm and speaks truth — regardless of their position.",
          reflectionQuestion:
            'When have you stepped up in a difficult situation even though you weren\'t "in charge"?',
        },
        {
          id: 'pa-3-3',
          chapterId: 'the-shipwreck',
          order: 3,
          passage: {
            book: 'Acts',
            chapter: 27,
            verseStart: 39,
            verseEnd: 44,
            display: 'Acts 27:39-44',
          },
          originalText:
            'But the ship struck a sandbar and ran aground... The soldiers planned to kill the prisoners to prevent any of them from swimming away and escaping. But the centurion wanted to spare Paul\'s life and kept them from carrying out their plan.',
          interpretation:
            "The ship hit a sandbar and started breaking apart. The soldiers' instinct was to kill all the prisoners — standard protocol, because if a prisoner escaped, the guard would be executed in their place. But the centurion in charge had seen something in Paul during the storm. He stopped the executions and ordered everyone to swim for it or grab debris and float. All 276 people made it to shore. Every single one. The ship was destroyed, but the people survived — exactly as Paul had said.",
          imagePrompt: `${STYLE_PREFIX}, people swimming and clinging to wooden debris from a broken ship, washing up on a sandy beach at dawn, a ship breaking apart in the background surf, exhausted but alive faces, warm sunrise light breaking through remaining storm clouds, relief and survival, golden morning light on the shore`,
          takeaway:
            "You might not arrive the way you planned, but you can still arrive. Sometimes getting there means losing the ship but keeping your life.",
          reflectionQuestion:
            "What plans have fallen apart in your life that still led you somewhere meaningful?",
        },
      ],
    },
    {
      id: 'pauls-letters',
      title: "Paul's Greatest Hits",
      journeyId: 'pauls-adventures',
      order: 4,
      scenes: [
        {
          id: 'pa-4-1',
          chapterId: 'pauls-letters',
          order: 1,
          passage: {
            book: 'Romans',
            chapter: 8,
            verseStart: 28,
            verseEnd: 39,
            display: 'Romans 8:28, 37-39',
          },
          originalText:
            'And we know that in all things God works for the good of those who love him... For I am convinced that neither death nor life, neither angels nor demons... nor anything else in all creation, will be able to separate us from the love of God.',
          interpretation:
            "Paul wrote this from experience — not from a comfortable study, but from a life of shipwrecks, beatings, imprisonments, and betrayals. And after all of that, his conclusion wasn't bitterness. It was this: nothing can separate you from love. Not your worst day. Not your biggest mistake. Not death itself. He listed everything he could think of — angels, demons, the present, the future, height, depth — and said: nope, none of it. This isn't blind optimism. It's hard-won conviction from someone who tested it.",
          imagePrompt: `${STYLE_PREFIX}, a man writing on a scroll by candlelight in a simple stone room, chain visible on one wrist, expression of deep conviction and peace, warm golden candlelight illuminating the parchment, shadows on stone walls, intimate and powerful, the contrast between physical imprisonment and spiritual freedom`,
          takeaway:
            "The people who speak most convincingly about hope are usually the ones who've been through the most. Tested conviction runs deeper than untested belief.",
          reflectionQuestion:
            'What conviction in your life has been tested and come out stronger?',
        },
        {
          id: 'pa-4-2',
          chapterId: 'pauls-letters',
          order: 2,
          passage: {
            book: '1 Corinthians',
            chapter: 13,
            verseStart: 4,
            verseEnd: 8,
            display: '1 Corinthians 13:4-8',
          },
          originalText:
            'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.',
          interpretation:
            "This passage gets read at almost every wedding, but Paul wasn't writing about romance. He was writing to a church that was tearing itself apart with arguments, ego, and one-upmanship. His message: you can have all the talent, knowledge, and success in the world, but without love, you're just making noise. Then he defined what love actually looks like — not a feeling, but a series of choices. Patient when it's hard. Kind when it's not returned. Not keeping score. This is love as a verb, not a noun.",
          imagePrompt: `${STYLE_PREFIX}, abstract composition of two hands reaching toward each other with warm golden light flowing between them, surrounded by a chaotic world of broken pieces reassembling, warm and cool tones merging harmoniously, concept of connection and healing, ethereal and modern`,
          takeaway:
            "Love isn't a feeling you fall into — it's a choice you make every day. And it's measured by what you do, not what you say.",
          reflectionQuestion:
            'Which part of this definition of love is hardest for you to live out?',
        },
        {
          id: 'pa-4-3',
          chapterId: 'pauls-letters',
          order: 3,
          passage: {
            book: 'Philippians',
            chapter: 4,
            verseStart: 11,
            verseEnd: 13,
            display: 'Philippians 4:11-13',
          },
          originalText:
            'I have learned to be content whatever the circumstances. I know what it is to be in need, and I know what it is to have plenty... I can do all this through him who gives me strength.',
          interpretation:
            "\"I can do all things\" is one of the most misquoted verses in history — people put it on gym walls and motivational posters. But Paul wrote this from prison. He wasn't talking about bench-pressing more weight or getting a promotion. He was saying: I've been rich and I've been broke. I've been free and I've been in chains. And I've learned to be okay in both. The \"all things\" he can do is endure any circumstance without losing his peace. That's a completely different kind of strength.",
          imagePrompt: `${STYLE_PREFIX}, a figure sitting peacefully in a bare prison cell, light streaming through a small window creating a golden beam, content expression despite sparse surroundings, simple bowl and scroll nearby, contrast between confinement and inner freedom, serene atmosphere, warm light in a cold space`,
          takeaway:
            "Contentment isn't having everything you want — it's not needing everything you want. Inner peace doesn't depend on outer circumstances.",
          reflectionQuestion:
            'What would it look like to be truly content with where you are right now — even while working toward where you want to be?',
        },
      ],
    },
  ],
};
