import albinarPhoto from '../assets/images/Albinar.png';
import arborixPhoto from '../assets/images/Arborix.png';

const bloodlines = [
  {
    id: 'albinar',
    name: 'Albinar',
    boon: 'Aura of Devotion: +2 to Aura. Their spiritual conviction radiates outwards, influencing those around them.',
    drawback: 'Inward Gaze: -1 to Cognition. Their intense focus on ritual and tradition can sometimes lead to a less adaptable or analytical mindset.',
    rootAbility: 'Sanctified Spark: As a Vitality Weaving Spark ability, you can choose one additional power from the Vitality Weaving Spark list, as if you had gained it normally through leveling up. This reflects their deep connection to healing and purity.',
    photo: albinarPhoto,
    description: 'Striking and devoted, Albinar are solid white humanoids with prominently large ears and tusks, living in jungle and desert civilizations. They are deeply religious and ritualistic, their lives guided by profound faith and ancient ceremonies.',
    essenceLevel: 4,
    hpBonus: 8,
    startingJinx: 35,
    attackProwess: 10,
    defenseProwess: 6,
    avgHeight: 5,
    avgLife: 143,
  },
  {
    id: 'arborix',
    name: 'Arborix',
    boon: 'Rooted Resilience: +2 to Resilience. Their tree-like bodies are incredibly tough and resistant to harm.',
    drawback: 'Immobile Grace: -2 to Celerity. Their rooted nature makes them inherently slow and less agile in movement.',
    rootAbility: 'Forest Glide: As an Unfocused ability, you can move through any non-magical difficult terrain caused by plants (such as thorns or dense undergrowth) without expending extra movement. This reflects their natural movement through forests.',
    photo: arborixPhoto,
    description: 'Ancient and enigmatic, Arborix are malevolent, sentient tree-like beings that inhabit the deepest, darkest, and most untrodden parts of the woods. They communicate through rustling leaves and creaking branches, their intentions often hostile, their forms rooted in dark magic.',
    essenceLevel: 2,
    hpBonus: 10,
    startingJinx: 25,
    attackProwess: 6,
    defenseProwess: 12,
    avgHeight: 9,
    avgLife: 1000,
  },
];

export default bloodlines;
