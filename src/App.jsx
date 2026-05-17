import { useState } from "react";

const C = {
  peach:"#F2A27D",peachSoft:"#FDE8D8",peachMid:"#F7C4A5",
  teal:"#7ECECA",tealSoft:"#D6F0F0",tealMid:"#A8DEDE",
  green:"#8FBF9F",greenSoft:"#D8EEE0",greenMid:"#B2D4BE",
  yellow:"#E8C96A",yellowSoft:"#FDF3D0",
  cream:"#FDF7F0",creamDark:"#F5EDE0",sand:"#E8D5B7",
  text:"#4A3728",textSoft:"#8C7060",textLight:"#B8A090",white:"#FFFCF8",
};

const phases = [
  {
    id:"menstrual",name:"Menstrual",emoji:"🌑",days:"Days 1–5",
    color:C.peach,soft:C.peachSoft,mid:C.peachMid,
    energy:2,energyLabel:"Low & Restorative",
    tagline:"Honor your body. Rest is productive.",
    hormone:"Estrogen & progesterone are at their lowest.",
    bodyFocus:"Your uterine lining sheds. Blood flow may cause fatigue, cramping, and low mood. Your body is doing significant work — give it grace and deep nourishment.",
    dailySchedule:[
      {time:"7:00 AM",icon:"🌅",title:"Gentle Wake-Up",desc:"No alarms if possible. Let your body rise naturally. Start with warm lemon water and ginger tea to soothe cramping."},
      {time:"8:00 AM",icon:"🥣",title:"Nourishing Breakfast",desc:"Warm oats with banana, chia seeds & honey. Iron-rich to replenish what your body is losing."},
      {time:"9:00 AM",icon:"💊",title:"Morning Supplements",desc:"Iron, Magnesium Glycinate, Omega-3. Take with food to avoid nausea."},
      {time:"10:00 AM",icon:"🚶‍♀️",title:"Gentle Movement Only",desc:"A slow 20-min walk or restorative yoga. No high intensity — your body needs energy for healing right now."},
      {time:"12:30 PM",icon:"🥣",title:"Lunch",desc:"Lentil & spinach soup or salmon with sweet potato. Prioritize iron and omega-3 rich foods."},
      {time:"2:00 PM",icon:"😴",title:"Rest Window",desc:"This is your permission slip to nap or lay down. Even 20 minutes dramatically helps hormone recovery."},
      {time:"4:00 PM",icon:"🍫",title:"Snack",desc:"Dark chocolate & almonds. Magnesium in both reduces cramps and mood swings naturally."},
      {time:"6:00 PM",icon:"🍲",title:"Dinner",desc:"Warming, comforting foods. Think soups, stews, and roasted root vegetables with plenty of olive oil."},
      {time:"7:30 PM",icon:"🛁",title:"Recovery Ritual",desc:"Epsom salt bath or heating pad on your abdomen. Light journaling or gentle reading — no screens."},
      {time:"9:00 PM",icon:"🌙",title:"Wind Down",desc:"Limit screens. Chamomile tea. Aim for 8–9 hours sleep — your body does its deepest repair overnight."},
    ],
    workouts:[
      {day:"Day 1–2",type:"Full Rest",exercises:[
        {name:"Legs Up The Wall",sets:"1",reps:"10 min",note:"Reduces bloating & cramps"},
        {name:"Deep Belly Breathing",sets:"1",reps:"5 min",note:"Calms nervous system"},
        {name:"Gentle Walk (optional)",sets:"1",reps:"15–20 min",note:"Only if energy allows"},
      ]},
      {day:"Day 3–4",type:"Restorative Yoga",exercises:[
        {name:"Cat-Cow Stretch",sets:"3",reps:"10 reps",note:"Slow & intentional"},
        {name:"Child's Pose",sets:"1",reps:"2 min hold",note:"Hips wide"},
        {name:"Supine Twist",sets:"2",reps:"1 min each side",note:"Releases lower back"},
        {name:"Butterfly Pose",sets:"1",reps:"90 sec hold",note:"Opens hips gently"},
      ]},
      {day:"Day 5",type:"Light Mobility",exercises:[
        {name:"Hip Circles",sets:"2",reps:"10 each side",note:""},
        {name:"Standing Forward Fold",sets:"3",reps:"30 sec",note:""},
        {name:"Bodyweight Glute Bridge",sets:"2",reps:"12 reps",note:"Slow, controlled"},
      ]},
    ],
    meals:[
      {label:"Breakfast",name:"Warm Ginger Oats",desc:"Rolled oats, ginger, lemon zest, honey, chia seeds, sliced banana",why:"Iron-rich oats replenish minerals. Ginger reduces cramping naturally."},
      {label:"Lunch",name:"Lentil & Spinach Soup",desc:"Red lentils, baby spinach, turmeric, cumin, veggie broth, crusty bread",why:"Lentils + spinach is a powerful iron combo. Turmeric is anti-inflammatory."},
      {label:"Dinner",name:"Salmon & Sweet Potato",desc:"Baked salmon, roasted sweet potato, steamed broccoli, olive oil drizzle",why:"Omega-3s reduce inflammation. Sweet potato provides steady energy."},
      {label:"Snack",name:"Dark Chocolate & Almonds",desc:"1 oz dark chocolate (70%+), small handful of raw almonds",why:"Magnesium in both eases cramps and stabilizes mood swings."},
    ],
    groceryList:["Rolled oats","Fresh ginger","Lemons","Chia seeds","Bananas","Red lentils","Baby spinach","Turmeric","Cumin","Salmon fillets","Sweet potatoes","Broccoli","Dark chocolate 70%+","Raw almonds","Olive oil","Veggie broth","Honey"],
    supplements:[
      {name:"Iron",dose:"18mg",why:"Replenishes iron lost during bleeding"},
      {name:"Magnesium Glycinate",dose:"300–400mg",why:"Reduces cramps, bloating & mood dips"},
      {name:"Omega-3 Fish Oil",dose:"1000–2000mg",why:"Powerful anti-inflammatory for cramps"},
      {name:"Vitamin D3",dose:"2000 IU",why:"Supports mood during low-energy phase"},
      {name:"Ginger Extract",dose:"500mg",why:"Natural pain relief for cramps"},
    ],
  },
  {
    id:"follicular",name:"Follicular",emoji:"🌱",days:"Days 6–13",
    color:C.green,soft:C.greenSoft,mid:C.greenMid,
    energy:4,energyLabel:"Rising & Fresh",
    tagline:"Your energy is building. Lean into it.",
    hormone:"Estrogen climbs steadily.",
    bodyFocus:"Follicles in your ovaries grow and estrogen rises. Your brain sharpens, motivation returns, and your body is primed for strength building and new challenges. This is your season of expansion.",
    dailySchedule:[
      {time:"6:30 AM",icon:"🌤️",title:"Energized Wake-Up",desc:"Your energy is naturally higher — use it. Cold splash of water, a full stretch, and set 3 clear intentions for the day."},
      {time:"7:30 AM",icon:"🥤",title:"Power Breakfast",desc:"Green smoothie bowl or eggs with greens. Your metabolism is running efficiently — fuel up with high protein and greens."},
      {time:"8:30 AM",icon:"💊",title:"Morning Supplements",desc:"B-Complex, Probiotics, Vitamin D3. These support rising estrogen and the gut-hormone connection."},
      {time:"9:30 AM",icon:"🏋️",title:"Strength Training Window",desc:"This is your prime building window. Lift heavier, try new movements, push your limits. 45–60 min sessions work well now."},
      {time:"12:00 PM",icon:"🥗",title:"Lunch",desc:"Quinoa power bowl or stir-fry with lean beef. High protein to support muscle recovery and hormone production."},
      {time:"2:00 PM",icon:"🧠",title:"Deep Work Window",desc:"Estrogen sharpens cognition. Use this afternoon block for creative thinking, strategic planning, or complex problem-solving."},
      {time:"4:30 PM",icon:"🍇",title:"Snack",desc:"Greek yogurt with berries and flaxseeds. Probiotics support your gut-hormone connection all phase long."},
      {time:"7:00 PM",icon:"🍽️",title:"Dinner",desc:"Lean proteins and cruciferous veggies. Broccoli and cauliflower help your liver process rising estrogen properly."},
      {time:"8:30 PM",icon:"📓",title:"Evening Planning",desc:"Your mind is sharp in the evenings this phase. Great time to brainstorm, journal goals, or map out the week ahead."},
      {time:"10:00 PM",icon:"🌙",title:"Wind Down",desc:"7–8 hours is enough. Your body recovers efficiently during the follicular phase — quality over quantity."},
    ],
    workouts:[
      {day:"Day 6–7",type:"Full Body Strength",exercises:[
        {name:"Goblet Squats",sets:"4",reps:"12 reps",note:"Moderate weight, full depth"},
        {name:"Dumbbell Row",sets:"3",reps:"12 each side",note:""},
        {name:"Push-Ups",sets:"3",reps:"10–15 reps",note:"Chest to floor"},
        {name:"Romanian Deadlift",sets:"3",reps:"12 reps",note:"Focus on hamstring stretch"},
      ]},
      {day:"Day 8–10",type:"Lower Body Focus",exercises:[
        {name:"Barbell Back Squat",sets:"4",reps:"10 reps",note:"Increase weight from last week"},
        {name:"Walking Lunges",sets:"3",reps:"12 each leg",note:""},
        {name:"Hip Thrust",sets:"4",reps:"12 reps",note:"Squeeze at top for 1 sec"},
        {name:"Leg Press",sets:"3",reps:"15 reps",note:""},
        {name:"Calf Raises",sets:"3",reps:"20 reps",note:""},
      ]},
      {day:"Day 11–13",type:"Upper Body + Cardio",exercises:[
        {name:"Incline Dumbbell Press",sets:"4",reps:"10 reps",note:""},
        {name:"Lat Pulldown",sets:"3",reps:"12 reps",note:""},
        {name:"Lateral Raises",sets:"3",reps:"15 reps",note:"Light, controlled"},
        {name:"Treadmill Intervals",sets:"1",reps:"20 min",note:"1 min fast / 1 min slow"},
      ]},
    ],
    meals:[
      {label:"Breakfast",name:"Green Smoothie Bowl",desc:"Spinach, frozen mango, banana, protein powder, granola, mixed berries",why:"B vitamins fuel energy metabolism. Phytoestrogens support rising hormones."},
      {label:"Lunch",name:"Quinoa Power Bowl",desc:"Quinoa, grilled chicken, chickpeas, avocado, cucumber, lemon tahini dressing",why:"Complete protein supports muscle building. Healthy fats fuel hormones."},
      {label:"Dinner",name:"Beef & Broccoli Stir-Fry",desc:"Lean beef, broccoli, snap peas, bell peppers, ginger soy sauce, brown rice",why:"Zinc in beef supports ovulation prep. Cruciferous veggies help process estrogen."},
      {label:"Snack",name:"Greek Yogurt & Berries",desc:"Full-fat Greek yogurt, mixed berries, honey, flaxseeds",why:"Probiotics support gut-hormone connection. Antioxidants from berries."},
    ],
    groceryList:["Spinach","Frozen mango","Protein powder","Granola","Mixed berries","Quinoa","Chicken breast","Chickpeas","Avocados","Cucumbers","Tahini","Lean beef","Broccoli","Snap peas","Bell peppers","Brown rice","Greek yogurt","Flaxseeds","Soy sauce","Fresh ginger"],
    supplements:[
      {name:"B-Complex",dose:"1 capsule daily",why:"Fuels rising energy and hormone production"},
      {name:"Probiotics",dose:"10–20B CFU",why:"Gut health drives estrogen balance"},
      {name:"Vitamin D3",dose:"2000 IU",why:"Supports follicle development"},
      {name:"Maca Root",dose:"500–1000mg",why:"Adaptogen for hormonal balance and energy"},
      {name:"CoQ10",dose:"200mg",why:"Boosts cellular energy for harder workouts"},
    ],
  },
  {
    id:"ovulatory",name:"Ovulatory",emoji:"☀️",days:"Days 14–16",
    color:C.yellow,soft:C.yellowSoft,mid:"#F0CC6E",
    energy:5,energyLabel:"Peak Power",
    tagline:"You are at your strongest. Go after it.",
    hormone:"Estrogen peaks. Testosterone briefly surges.",
    bodyFocus:"A mature egg is released. You feel magnetic, confident, and strong. Pain tolerance is highest, strength peaks, and your brain is firing on all cylinders. Use this window intentionally.",
    dailySchedule:[
      {time:"6:00 AM",icon:"⚡",title:"Power Morning",desc:"You'll likely wake early naturally. Channel that energy — cold shower, energizing playlist, set bold intentions for the day."},
      {time:"7:00 AM",icon:"🍳",title:"High-Protein Breakfast",desc:"Eggs, smoked salmon, greens. Your metabolism is fast — eat well and fuel your peak performance day intentionally."},
      {time:"8:00 AM",icon:"💊",title:"Morning Supplements",desc:"Zinc, Vitamin C, L-Arginine. Supports ovulation, peak workout performance, and blood flow to muscles."},
      {time:"9:00 AM",icon:"🏋️",title:"Peak Training Session",desc:"THIS is your window to lift heavy, run fast, or try that hard class. Strength, speed, and endurance are all at their max."},
      {time:"11:30 AM",icon:"🥗",title:"Post-Workout Refuel",desc:"Tuna avocado wraps or rainbow salad. Raw, anti-inflammatory foods align perfectly with this phase."},
      {time:"1:00 PM",icon:"🤝",title:"High-Value Work Time",desc:"Schedule important meetings, pitches, or creative sessions now. Communication and confidence are at their absolute peak."},
      {time:"4:00 PM",icon:"🍊",title:"Snack",desc:"Fruit & nut energy bites or fresh fruit. Natural sugars sustain your peak energy through the afternoon."},
      {time:"7:00 PM",icon:"🥗",title:"Dinner",desc:"Grilled protein and a rainbow salad. Fiber-rich and colorful to support estrogen metabolism and liver detox."},
      {time:"8:30 PM",icon:"🌿",title:"Social or Creative Time",desc:"Your social battery is completely full. Perfect for date nights, time with friends, events, or creative projects."},
      {time:"10:00 PM",icon:"🌙",title:"Wind Down",desc:"Your energy may resist sleep — dim lights an hour early and let your body decompress gently before bed."},
    ],
    workouts:[
      {day:"Day 14",type:"HIIT + Power",exercises:[
        {name:"Jump Squats",sets:"4",reps:"15 reps",note:"Explosive, land softly"},
        {name:"Burpees",sets:"3",reps:"12 reps",note:""},
        {name:"Box Jumps",sets:"4",reps:"10 reps",note:""},
        {name:"Sprints",sets:"6",reps:"30 sec on / 30 off",note:""},
      ]},
      {day:"Day 15",type:"Heavy Lifting",exercises:[
        {name:"Deadlift",sets:"5",reps:"5 reps",note:"Go heavy — your strongest day"},
        {name:"Back Squat",sets:"4",reps:"6 reps",note:"Push your PR today"},
        {name:"Bench Press",sets:"4",reps:"8 reps",note:""},
        {name:"Pull-Ups",sets:"3",reps:"Max reps",note:"Assisted if needed"},
      ]},
      {day:"Day 16",type:"Cardio + Core",exercises:[
        {name:"Running",sets:"1",reps:"30 min",note:"Moderate-high pace, enjoy it"},
        {name:"Plank Hold",sets:"3",reps:"60 sec",note:""},
        {name:"Russian Twists",sets:"3",reps:"20 reps",note:"With light weight"},
        {name:"Bicycle Crunches",sets:"3",reps:"20 reps",note:""},
      ]},
    ],
    meals:[
      {label:"Breakfast",name:"Power Egg Scramble",desc:"3 eggs, smoked salmon, spinach, cherry tomatoes, whole grain toast",why:"High protein fuels peak performance. Choline in eggs supports brain clarity."},
      {label:"Lunch",name:"Tuna Avocado Lettuce Wraps",desc:"Wild tuna, avocado, celery, lemon, Dijon mustard in butter lettuce cups",why:"Raw, anti-inflammatory foods align with ovulatory phase needs perfectly."},
      {label:"Dinner",name:"Grilled Chicken Rainbow Salad",desc:"Grilled chicken, mixed greens, radish, carrot, beet, pepitas, ACV vinaigrette",why:"Fiber-rich and colorful — supports estrogen metabolism and liver detox."},
      {label:"Snack",name:"Fruit & Nut Energy Bites",desc:"Dates, cashews, shredded coconut, dark chocolate chips — rolled into bites",why:"Natural sugars for peak energy. Zinc in cashews supports testosterone."},
    ],
    groceryList:["Eggs","Smoked salmon","Cherry tomatoes","Whole grain bread","Wild tuna canned","Butter lettuce","Celery","Dijon mustard","Chicken breast","Mixed greens","Radishes","Carrots","Beets","Pepitas","Apple cider vinegar","Dates","Cashews","Shredded coconut","Dark chocolate chips","Avocados"],
    supplements:[
      {name:"Zinc",dose:"15–25mg",why:"Supports ovulation and peak testosterone"},
      {name:"Vitamin C",dose:"500–1000mg",why:"Antioxidant support during peak phase"},
      {name:"L-Arginine",dose:"500mg",why:"Boosts blood flow and workout performance"},
      {name:"Omega-3",dose:"1000mg",why:"Anti-inflammatory support for heavy training"},
      {name:"Collagen Peptides",dose:"10g",why:"Joint support during peak intensity training"},
    ],
  },
  {
    id:"luteal",name:"Luteal",emoji:"🍂",days:"Days 17–28",
    color:C.teal,soft:C.tealSoft,mid:C.tealMid,
    energy:3,energyLabel:"Declining & Inward",
    tagline:"Nourish deeply. Move mindfully.",
    hormone:"Progesterone rises, then both hormones fall.",
    bodyFocus:"Your body prepares in case of pregnancy. Energy gradually declines, cravings increase, and PMS may emerge in the final days. This phase calls for deep nourishment, gentler movement, and more self-compassion.",
    dailySchedule:[
      {time:"7:00 AM",icon:"☁️",title:"Slow Morning",desc:"Allow extra time to wake up. Your body temperature runs higher this phase — you may feel warmer and slower. Choose herbal tea over coffee."},
      {time:"8:00 AM",icon:"🥞",title:"Comforting Breakfast",desc:"Sweet potato pancakes or oatmeal with almond butter. Complex carbs are essential now — they reduce cravings and stabilize blood sugar."},
      {time:"9:00 AM",icon:"💊",title:"Morning Supplements",desc:"Magnesium, B6, Evening Primrose Oil. These are your PMS-fighting allies — consistency really matters this phase."},
      {time:"10:30 AM",icon:"🧘",title:"Mindful Movement",desc:"Pilates, yoga, or moderate lifting only. Your ligaments are looser this phase — skip high-impact to avoid injury and unnecessary strain."},
      {time:"1:00 PM",icon:"🫘",title:"Lunch",desc:"Turkey stuffed peppers or chickpea curry. Protein plus magnesium-rich foods are essential for mood and energy right now."},
      {time:"3:00 PM",icon:"😴",title:"Energy Dip Window",desc:"Expect an afternoon slump — it's real and it's hormonal. A short walk outside or a 20-min rest beats pushing through on empty."},
      {time:"4:30 PM",icon:"🍌",title:"Snack",desc:"Banana with almond butter. Potassium reduces bloating. The magnesium in almond butter eases tension and anxiety."},
      {time:"7:00 PM",icon:"🍛",title:"Dinner",desc:"Warming, grounding meals. Curries, soups, roasted root vegetables. Your body is genuinely craving comfort and warmth right now."},
      {time:"8:00 PM",icon:"🌿",title:"Self-Care Hour",desc:"This is not the time to push through. Hot bath, face mask, gentle stretching, journaling. Protecting your energy IS productive."},
      {time:"9:30 PM",icon:"🌙",title:"Early Bedtime",desc:"Aim for 8–9 hours. Progesterone disrupts sleep quality in later stages — more time in bed compensates for lighter sleep cycles."},
    ],
    workouts:[
      {day:"Day 17–20",type:"Moderate Strength",exercises:[
        {name:"Dumbbell Squats",sets:"3",reps:"12 reps",note:"Lighter than ovulatory phase"},
        {name:"Single-Leg Deadlift",sets:"3",reps:"10 each",note:"Balance and stability focus"},
        {name:"Seated Row",sets:"3",reps:"12 reps",note:""},
        {name:"Overhead Press",sets:"3",reps:"10 reps",note:""},
      ]},
      {day:"Day 21–24",type:"Pilates + Yoga Fusion",exercises:[
        {name:"Pilates Roll-Up",sets:"3",reps:"10 reps",note:"Slow and controlled"},
        {name:"Warrior I & II Flow",sets:"2",reps:"5 breaths each",note:""},
        {name:"Glute Bridges",sets:"3",reps:"15 reps",note:"Bodyweight, pause at top"},
        {name:"Side-Lying Leg Lifts",sets:"3",reps:"15 each side",note:""},
      ]},
      {day:"Day 25–28",type:"Gentle Movement",exercises:[
        {name:"Walking",sets:"1",reps:"20–30 min",note:"Easy pace, no pressure"},
        {name:"Yin Yoga",sets:"1",reps:"30 min",note:"Hold poses 3–5 min each"},
        {name:"Foam Rolling",sets:"1",reps:"10 min",note:"Full body release"},
      ]},
    ],
    meals:[
      {label:"Breakfast",name:"Sweet Potato Protein Pancakes",desc:"Mashed sweet potato, eggs, oat flour, cinnamon, topped with almond butter",why:"Complex carbs stabilize blood sugar and reduce cravings. Cinnamon regulates insulin."},
      {label:"Lunch",name:"Turkey Stuffed Bell Peppers",desc:"Ground turkey, black beans, corn, diced tomatoes stuffed into bell peppers",why:"Progesterone needs protein. Vitamin B6 in turkey supports mood and PMS symptoms."},
      {label:"Dinner",name:"Chickpea Coconut Curry",desc:"Chickpeas, coconut milk, spinach, turmeric, curry powder over cauliflower rice",why:"Magnesium-rich chickpeas ease PMS. Turmeric reduces pre-period inflammation."},
      {label:"Snack",name:"Banana & Almond Butter",desc:"1 banana, 2 tbsp natural almond butter, sprinkle of cinnamon",why:"Potassium reduces bloating. Magnesium in almond butter eases tension and anxiety."},
    ],
    groceryList:["Sweet potatoes","Oat flour","Almond butter","Cinnamon","Ground turkey","Black beans","Corn","Bell peppers","Diced tomatoes","Chickpeas","Coconut milk","Cauliflower","Curry powder","Turmeric","Bananas","Eggs","Baby spinach"],
    supplements:[
      {name:"Magnesium Glycinate",dose:"400mg",why:"Reduces PMS, bloating, cramps & anxiety"},
      {name:"Vitamin B6",dose:"50mg",why:"Reduces mood swings and water retention"},
      {name:"Evening Primrose Oil",dose:"1000–2000mg",why:"Balances prostaglandins, eases breast tenderness"},
      {name:"Vitex (Chaste Tree)",dose:"400mg",why:"Supports progesterone and reduces PMS symptoms"},
      {name:"L-Theanine",dose:"200mg",why:"Calming without drowsiness for anxiety spikes"},
    ],
  },
];

const symptoms=["Cramps","Bloating","Headache","Fatigue","Mood swings","Acne","Tender breasts","Back pain","Cravings","Nausea","Spotting","Brain fog"];
const moods=["😊 Happy","😔 Low","😤 Irritable","😰 Anxious","😴 Exhausted","🥰 Loving","💪 Energized","😶 Numb"];
const flows=["None","Spotting","Light","Medium","Heavy"];

const HomeIco=()=><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const CycleIco=()=><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
const FitIco=()=><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="10" width="4" height="4" rx="1"/><rect x="18" y="10" width="4" height="4" rx="1"/><line x1="6" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="18" y2="12"/><rect x="8" y="7" width="8" height="10" rx="1"/></svg>;
const MealIco=()=><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>;

export default function FemFlow(){
  const [nav,setNav]=useState("home");
  const [cycleDay,setCycleDay]=useState(3);
  const [checkedGrocery,setCheckedGrocery]=useState({});
  const [loggedDays,setLoggedDays]=useState({1:{flow:"Medium",symptoms:["Cramps","Fatigue"],mood:"😴 Exhausted"},2:{flow:"Medium",symptoms:["Cramps","Bloating"],mood:"😔 Low"},3:{flow:"Light",symptoms:["Fatigue"],mood:"😔 Low"}});
  const [mealTab,setMealTab]=useState("Meals");
  const [fitTab,setFitTab]=useState("Split");
  const [expandedBlock,setExpandedBlock]=useState(0);

  const phaseIdx=cycleDay<=5?0:cycleDay<=13?1:cycleDay<=16?2:3;
  const phase=phases[phaseIdx];

  /* ── HOME ── */
  const HomePage=()=>(
    <div style={{paddingBottom:90}}>
      {/* Hero banner */}
      <div style={{background:`linear-gradient(150deg,${phase.soft} 0%,${C.cream} 80%)`,padding:"36px 20px 24px",borderBottom:`1px solid ${phase.mid}`}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,color:C.textLight,letterSpacing:"2px",textTransform:"uppercase",marginBottom:6}}>Good morning ✨</div>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:30,color:C.text,fontWeight:700,lineHeight:1.1,marginBottom:6}}>{phase.emoji} {phase.name} Phase</div>
        <div style={{fontSize:13,color:C.textSoft,fontStyle:"italic",marginBottom:20}}>{phase.tagline}</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:18}}>
          <span style={{background:phase.color,color:C.white,borderRadius:20,padding:"5px 14px",fontSize:11,fontWeight:700}}>Day {cycleDay}</span>
          <span style={{background:C.white,color:C.textSoft,borderRadius:20,padding:"5px 14px",fontSize:11,border:`1px solid ${phase.mid}`}}>{phase.days}</span>
          <span style={{background:C.white,color:C.textSoft,borderRadius:20,padding:"5px 14px",fontSize:11,border:`1px solid ${phase.mid}`}}>{phase.energyLabel}</span>
        </div>
        <input type="range" min={1} max={28} value={cycleDay} onChange={e=>{setCycleDay(Number(e.target.value));}} style={{width:"100%",accentColor:phase.color}}/>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:9,color:C.textLight,marginTop:2}}>
          <span>🌑 Day 1</span><span>🌱 Day 6</span><span>☀️ Day 14</span><span>🍂 Day 17</span><span>Day 28</span>
        </div>
      </div>

      <div style={{padding:"20px 16px 0"}}>
        {/* Energy meter */}
        <div style={{background:C.white,borderRadius:18,padding:"18px",marginBottom:14,boxShadow:"0 2px 14px rgba(74,55,40,0.07)"}}>
          <div style={{fontSize:10,color:C.textLight,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:10}}>Today's Energy</div>
          <div style={{display:"flex",gap:5,marginBottom:8}}>
            {[1,2,3,4,5].map(i=><div key={i} style={{flex:1,height:7,borderRadius:4,background:i<=phase.energy?phase.color:C.creamDark,transition:"all 0.4s"}}/>)}
          </div>
          <div style={{fontSize:12,color:C.textSoft,fontStyle:"italic"}}>{phase.energyLabel}</div>
        </div>

        {/* Body insight */}
        <div style={{background:C.white,borderRadius:18,padding:"18px",marginBottom:14,boxShadow:"0 2px 14px rgba(74,55,40,0.07)"}}>
          <div style={{fontSize:10,color:C.textLight,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>What's Happening In Your Body</div>
          <div style={{fontSize:12,color:phase.color,fontWeight:600,fontStyle:"italic",marginBottom:8}}>{phase.hormone}</div>
          <div style={{fontSize:13,color:C.textSoft,lineHeight:1.8}}>{phase.bodyFocus}</div>
        </div>

        {/* Daily Schedule */}
        <div style={{background:C.white,borderRadius:18,padding:"18px",marginBottom:14,boxShadow:"0 2px 14px rgba(74,55,40,0.07)"}}>
          <div style={{fontSize:10,color:C.textLight,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:16}}>Your Day — {phase.name} Phase</div>
          {phase.dailySchedule.map((slot,i)=>(
            <div key={i} style={{display:"flex",gap:12}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:38}}>
                <div style={{width:36,height:36,borderRadius:"50%",background:phase.soft,border:`1px solid ${phase.mid}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{slot.icon}</div>
                {i<phase.dailySchedule.length-1&&<div style={{width:1.5,flex:1,background:phase.mid,minHeight:20,margin:"4px 0"}}/>}
              </div>
              <div style={{flex:1,paddingBottom:i<phase.dailySchedule.length-1?18:0}}>
                <div style={{fontSize:10,color:C.textLight,marginBottom:1,letterSpacing:"0.5px"}}>{slot.time}</div>
                <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:4,fontFamily:"'Cormorant Garamond',serif",fontSize:15}}>{slot.title}</div>
                <div style={{fontSize:12,color:C.textSoft,lineHeight:1.7}}>{slot.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick nav cards */}
        <div style={{fontSize:10,color:C.textLight,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:10}}>Quick Access</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[{label:"Today's Workout",icon:"🏋️",sub:"View your split",page:"fitness"},{label:"Meal Plan",icon:"🥗",sub:"Today's meals",page:"meals"},{label:"Log Symptoms",icon:"📝",sub:"Track your cycle",page:"cycle"},{label:"Grocery List",icon:"🛒",sub:"Shop by phase",page:"meals"}].map(item=>(
            <button key={item.label} onClick={()=>{setNav(item.page);if(item.label==="Grocery List")setMealTab("Grocery List");}}
              style={{background:C.white,border:`1px solid ${phase.mid}`,borderRadius:16,padding:"16px 14px",cursor:"pointer",textAlign:"left",boxShadow:"0 2px 10px rgba(74,55,40,0.06)",transition:"transform 0.15s"}}>
              <div style={{fontSize:22,marginBottom:8}}>{item.icon}</div>
              <div style={{fontSize:12,fontWeight:700,color:C.text,marginBottom:2}}>{item.label}</div>
              <div style={{fontSize:11,color:C.textLight}}>{item.sub}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  /* ── CYCLE ── */
  const CyclePage=()=>{
    const [activeLog,setActiveLog]=useState(null);
    const [localLog,setLocalLog]=useState({flow:"None",symptoms:[],mood:""});
    const save=day=>{setLoggedDays(p=>({...p,[day]:localLog}));setActiveLog(null);};
    const open=day=>{setLocalLog(loggedDays[day]||{flow:"None",symptoms:[],mood:""});setActiveLog(day);};
    const togSym=s=>setLocalLog(p=>({...p,symptoms:p.symptoms.includes(s)?p.symptoms.filter(x=>x!==s):[...p.symptoms,s]}));
    return(
      <div style={{paddingBottom:90}}>
        <div style={{background:`linear-gradient(150deg,${C.peachSoft} 0%,${C.cream} 80%)`,padding:"36px 20px 20px",borderBottom:`1px solid ${C.peachMid}`}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,color:C.text,fontWeight:700,marginBottom:4}}>🌸 Cycle Tracker</div>
          <div style={{fontSize:13,color:C.textSoft,fontStyle:"italic"}}>Log your period, symptoms & mood each day</div>
        </div>
        <div style={{padding:"20px 16px"}}>
          {/* Phase legend */}
          <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
            {phases.map(p=><div key={p.id} style={{background:p.soft,border:`1px solid ${p.mid}`,borderRadius:20,padding:"4px 10px",fontSize:10,color:p.color,fontWeight:700}}>{p.emoji} {p.name} {p.days}</div>)}
          </div>
          {/* Calendar */}
          <div style={{background:C.white,borderRadius:18,padding:"16px",marginBottom:16,boxShadow:"0 2px 14px rgba(74,55,40,0.07)"}}>
            <div style={{fontSize:10,color:C.textLight,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:12}}>Tap any day to log</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:5}}>
              {Array.from({length:28},(_,i)=>{
                const d=i+1;
                const ph=d<=5?phases[0]:d<=13?phases[1]:d<=16?phases[2]:phases[3];
                const isToday=d===cycleDay;
                const hasLog=!!loggedDays[d];
                return(
                  <button key={d} onClick={()=>open(d)} style={{background:isToday?phase.color:hasLog?ph.soft:C.creamDark,border:isToday?`2px solid ${phase.color}`:`1px solid ${ph.mid}`,borderRadius:10,padding:"7px 2px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
                    <div style={{fontSize:11,fontWeight:isToday?700:500,color:isToday?C.white:C.text}}>{d}</div>
                    <div style={{fontSize:8}}>{ph.emoji}</div>
                    {hasLog&&<div style={{width:4,height:4,borderRadius:"50%",background:isToday?C.white:ph.color}}/>}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Log panel */}
          {activeLog&&(
            <div style={{background:C.white,borderRadius:18,padding:20,marginBottom:16,boxShadow:"0 4px 24px rgba(74,55,40,0.1)",border:`1px solid ${C.sand}`}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:700,color:C.text,marginBottom:16}}>📝 Day {activeLog}</div>
              <div style={{marginBottom:14}}>
                <div style={{fontSize:10,color:C.textLight,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>Flow</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  {flows.map(f=><button key={f} onClick={()=>setLocalLog(p=>({...p,flow:f}))} style={{background:localLog.flow===f?C.peach:C.creamDark,border:`1px solid ${localLog.flow===f?C.peach:C.sand}`,borderRadius:20,padding:"7px 13px",fontSize:12,cursor:"pointer",color:localLog.flow===f?C.white:C.text,fontWeight:localLog.flow===f?700:400}}>{f}</button>)}
                </div>
              </div>
              <div style={{marginBottom:14}}>
                <div style={{fontSize:10,color:C.textLight,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>Mood</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  {moods.map(m=><button key={m} onClick={()=>setLocalLog(p=>({...p,mood:m}))} style={{background:localLog.mood===m?C.teal:C.creamDark,border:`1px solid ${localLog.mood===m?C.teal:C.sand}`,borderRadius:20,padding:"7px 10px",fontSize:11,cursor:"pointer",color:localLog.mood===m?C.white:C.text,fontWeight:localLog.mood===m?700:400}}>{m}</button>)}
                </div>
              </div>
              <div style={{marginBottom:18}}>
                <div style={{fontSize:10,color:C.textLight,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>Symptoms</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  {symptoms.map(s=><button key={s} onClick={()=>togSym(s)} style={{background:localLog.symptoms.includes(s)?C.green:C.creamDark,border:`1px solid ${localLog.symptoms.includes(s)?C.green:C.sand}`,borderRadius:20,padding:"7px 10px",fontSize:11,cursor:"pointer",color:localLog.symptoms.includes(s)?C.white:C.text,fontWeight:localLog.symptoms.includes(s)?700:400}}>{s}</button>)}
                </div>
              </div>
              <div style={{display:"flex",gap:8}}>
                <button onClick={()=>save(activeLog)} style={{flex:1,background:C.peach,border:"none",borderRadius:14,padding:"13px",fontSize:13,fontWeight:700,color:C.white,cursor:"pointer",fontFamily:"'Cormorant Garamond',serif",letterSpacing:"0.5px"}}>Save ✓</button>
                <button onClick={()=>setActiveLog(null)} style={{background:C.creamDark,border:"none",borderRadius:14,padding:"13px 18px",fontSize:13,color:C.textSoft,cursor:"pointer"}}>Cancel</button>
              </div>
            </div>
          )}
          {/* Recent logs */}
          <div style={{fontSize:10,color:C.textLight,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:10}}>Recent Logs</div>
          {Object.entries(loggedDays).sort((a,b)=>Number(b[0])-Number(a[0])).map(([day,log])=>(
            <div key={day} style={{background:C.white,borderRadius:14,padding:"14px 16px",marginBottom:10,boxShadow:"0 1px 8px rgba(74,55,40,0.06)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                <div style={{fontSize:13,fontWeight:700,color:C.text,fontFamily:"'Cormorant Garamond',serif"}}>Day {day}</div>
                <div style={{fontSize:12,color:C.textSoft}}>{log.mood}</div>
              </div>
              <div style={{fontSize:12,color:C.textSoft,marginBottom:6}}>Flow: <strong style={{color:C.text}}>{log.flow}</strong></div>
              {log.symptoms.length>0&&<div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                {log.symptoms.map(s=><span key={s} style={{background:C.peachSoft,color:C.peach,fontSize:10,borderRadius:10,padding:"3px 8px",fontWeight:600}}>{s}</span>)}
              </div>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  /* ── FITNESS ── */
  const FitnessPage=()=>(
    <div style={{paddingBottom:90}}>
      <div style={{background:`linear-gradient(150deg,${C.greenSoft} 0%,${C.cream} 80%)`,padding:"36px 20px 20px",borderBottom:`1px solid ${C.greenMid}`}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,color:C.text,fontWeight:700,marginBottom:4}}>🏋️ Fitness</div>
        <div style={{fontSize:13,color:C.textSoft,fontStyle:"italic"}}>Synced to your {phase.name} phase energy</div>
      </div>
      <div style={{background:C.white,display:"flex",borderBottom:`1px solid ${C.sand}`}}>
        {["Split","Supplements"].map(t=><button key={t} onClick={()=>setFitTab(t)} style={{flex:1,padding:"13px",border:"none",background:"none",fontSize:12,cursor:"pointer",color:fitTab===t?C.green:C.textLight,borderBottom:fitTab===t?`2.5px solid ${C.green}`:"2.5px solid transparent",fontWeight:fitTab===t?700:400}}>{t}</button>)}
      </div>
      <div style={{padding:"20px 16px"}}>
        {fitTab==="Split"&&(
          <>
            <div style={{background:C.white,borderRadius:14,padding:"14px 16px",marginBottom:14,boxShadow:"0 1px 8px rgba(74,55,40,0.06)",borderLeft:`3px solid ${C.green}`}}>
              <div style={{fontSize:13,color:C.textSoft,lineHeight:1.8}}>During your <strong style={{color:C.text}}>{phase.name}</strong> phase, your energy is <em>{phase.energyLabel.toLowerCase()}</em>. Every workout below is designed to work <em>with</em> your hormones — not against them.</div>
            </div>
            {phase.workouts.map((block,bi)=>(
              <div key={bi} style={{background:C.white,borderRadius:18,marginBottom:12,overflow:"hidden",boxShadow:"0 2px 12px rgba(74,55,40,0.06)"}}>
                <button onClick={()=>setExpandedBlock(expandedBlock===bi?null:bi)} style={{width:"100%",background:"none",border:"none",padding:"16px 18px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{textAlign:"left"}}>
                    <div style={{fontSize:10,color:C.green,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase"}}>{block.day}</div>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontWeight:700,color:C.text,marginTop:2}}>{block.type}</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{background:C.greenSoft,padding:"3px 10px",borderRadius:20,fontSize:10,color:C.green,fontWeight:700}}>{block.exercises.length} moves</div>
                    <div style={{fontSize:14,color:C.textLight}}>{expandedBlock===bi?"▲":"▼"}</div>
                  </div>
                </button>
                {expandedBlock===bi&&(
                  <div style={{padding:"0 18px 16px"}}>
                    {block.exercises.map((ex,ei)=>(
                      <div key={ei} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"11px 0",borderTop:`1px solid ${C.creamDark}`}}>
                        <div>
                          <div style={{fontSize:13,fontWeight:600,color:C.text}}>{ex.name}</div>
                          {ex.note&&<div style={{fontSize:11,color:C.textLight,marginTop:2}}>{ex.note}</div>}
                        </div>
                        <div style={{fontSize:11,color:C.green,fontWeight:700,textAlign:"right",marginLeft:12,flexShrink:0,background:C.greenSoft,padding:"3px 8px",borderRadius:10}}>{ex.sets}×{ex.reps}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
        {fitTab==="Supplements"&&(
          <>
            <div style={{fontSize:13,color:C.textSoft,marginBottom:16,lineHeight:1.7,fontStyle:"italic"}}>Your supplement stack for the {phase.name} phase — each one chosen for what your hormones need right now.</div>
            {phase.supplements.map((s,i)=>(
              <div key={i} style={{background:C.white,borderRadius:16,padding:"16px",marginBottom:10,display:"flex",gap:14,alignItems:"flex-start",boxShadow:"0 1px 8px rgba(74,55,40,0.06)"}}>
                <div style={{background:C.greenSoft,width:44,height:44,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>💊</div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
                    <div style={{fontSize:14,fontWeight:700,color:C.text}}>{s.name}</div>
                    <div style={{background:C.greenSoft,padding:"2px 8px",borderRadius:20,fontSize:10,color:C.green,fontWeight:700,flexShrink:0,marginLeft:8}}>{s.dose}</div>
                  </div>
                  <div style={{fontSize:12,color:C.textSoft,lineHeight:1.55}}>{s.why}</div>
                </div>
              </div>
            ))}
            <div style={{background:C.yellowSoft,borderRadius:12,padding:14,marginTop:4,borderLeft:`3px solid ${C.yellow}`}}>
              <div style={{fontSize:12,color:C.textSoft,lineHeight:1.6}}>⚠️ Always consult a healthcare provider before starting new supplements.</div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  /* ── MEALS ── */
  const MealsPage=()=>(
    <div style={{paddingBottom:90}}>
      <div style={{background:`linear-gradient(150deg,${C.yellowSoft} 0%,${C.cream} 80%)`,padding:"36px 20px 20px",borderBottom:`1px solid ${C.yellow}`}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,color:C.text,fontWeight:700,marginBottom:4}}>🌿 Nourishment</div>
        <div style={{fontSize:13,color:C.textSoft,fontStyle:"italic"}}>Meals & groceries for your {phase.name} phase</div>
      </div>
      <div style={{background:C.white,display:"flex",borderBottom:`1px solid ${C.sand}`}}>
        {["Meals","Grocery List"].map(t=><button key={t} onClick={()=>setMealTab(t)} style={{flex:1,padding:"13px",border:"none",background:"none",fontSize:12,cursor:"pointer",color:mealTab===t?C.peach:C.textLight,borderBottom:mealTab===t?`2.5px solid ${C.peach}`:"2.5px solid transparent",fontWeight:mealTab===t?700:400}}>{t}</button>)}
      </div>
      <div style={{padding:"20px 16px"}}>
        {mealTab==="Meals"&&(
          <>
            <div style={{fontSize:13,color:C.textSoft,marginBottom:16,lineHeight:1.7,fontStyle:"italic"}}>Every meal is chosen to work with your {phase.name} phase hormones — nourishing your body from the inside out.</div>
            {phase.meals.map((meal,i)=>(
              <div key={i} style={{background:C.white,borderRadius:18,padding:18,marginBottom:14,boxShadow:"0 2px 12px rgba(74,55,40,0.06)"}}>
                <div style={{fontSize:10,color:C.peach,fontWeight:700,textTransform:"uppercase",letterSpacing:"1.5px",marginBottom:5}}>{meal.label}</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:700,color:C.text,marginBottom:7}}>{meal.name}</div>
                <div style={{fontSize:13,color:C.textSoft,lineHeight:1.7,marginBottom:12}}>{meal.desc}</div>
                <div style={{background:C.peachSoft,borderRadius:12,padding:"10px 14px",borderLeft:`3px solid ${C.peach}`}}>
                  <div style={{fontSize:9,color:C.peach,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:4}}>Why This Works</div>
                  <div style={{fontSize:12,color:C.textSoft,lineHeight:1.6}}>{meal.why}</div>
                </div>
              </div>
            ))}
          </>
        )}
        {mealTab==="Grocery List"&&(
          <>
            <div style={{fontSize:13,color:C.textSoft,marginBottom:16,fontStyle:"italic",lineHeight:1.6}}>Your {phase.name} phase shopping list — tap each item to check it off as you go 🛒</div>
            <div style={{background:C.white,borderRadius:18,padding:"4px 18px",boxShadow:"0 2px 12px rgba(74,55,40,0.06)"}}>
              {phase.groceryList.map((item,i)=>{
                const key=`${phase.id}-${i}`;
                const checked=checkedGrocery[key];
                return(
                  <div key={i} onClick={()=>setCheckedGrocery(p=>({...p,[key]:!p[key]}))} style={{display:"flex",alignItems:"center",gap:12,padding:"13px 0",borderBottom:i<phase.groceryList.length-1?`1px solid ${C.creamDark}`:"none",cursor:"pointer"}}>
                    <div style={{width:22,height:22,borderRadius:7,border:`2px solid ${checked?C.peach:C.sand}`,background:checked?C.peach:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.2s"}}>
                      {checked&&<span style={{color:C.white,fontSize:12,fontWeight:700}}>✓</span>}
                    </div>
                    <span style={{fontSize:14,color:checked?C.textLight:C.text,textDecoration:checked?"line-through":"none",transition:"all 0.2s"}}>{item}</span>
                  </div>
                );
              })}
            </div>
            <div style={{textAlign:"center",marginTop:14,fontSize:12,color:C.textLight,fontStyle:"italic"}}>
              {phase.groceryList.filter((_,i)=>checkedGrocery[`${phase.id}-${i}`]).length} of {phase.groceryList.length} items checked
            </div>
          </>
        )}
      </div>
    </div>
  );

  /* ── BOTTOM NAV ── */
  const NavBtn=({id,icon,label})=>{
    const on=nav===id;
    return(
      <button onClick={()=>setNav(id)} style={{flex:1,background:"none",border:"none",padding:"10px 4px 6px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
        <div style={{color:on?C.peach:C.textLight,transition:"color 0.2s"}}>{icon}</div>
        <div style={{fontSize:9,fontWeight:on?700:400,color:on?C.peach:C.textLight,letterSpacing:"0.5px",textTransform:"uppercase",transition:"color 0.2s"}}>{label}</div>
        {on&&<div style={{width:16,height:2,borderRadius:2,background:C.peach}}/>}
      </button>
    );
  };

  return(
    <div style={{fontFamily:"Georgia,serif",background:C.cream,minHeight:"100vh",maxWidth:480,margin:"0 auto",position:"relative"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');input[type=range]{height:4px;border-radius:4px;}`}</style>
      <div style={{overflowY:"auto",height:"100vh",paddingBottom:72}}>
        {nav==="home"&&<HomePage/>}
        {nav==="cycle"&&<CyclePage/>}
        {nav==="fitness"&&<FitnessPage/>}
        {nav==="meals"&&<MealsPage/>}
      </div>
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,background:C.white,borderTop:`1px solid ${C.sand}`,display:"flex",paddingBottom:6,boxShadow:"0 -4px 24px rgba(74,55,40,0.08)",zIndex:100}}>
        <NavBtn id="home" icon={<HomeIco/>} label="Home"/>
        <NavBtn id="cycle" icon={<CycleIco/>} label="Cycle"/>
        <NavBtn id="fitness" icon={<FitIco/>} label="Fitness"/>
        <NavBtn id="meals" icon={<MealIco/>} label="Nourish"/>
      </div>
    </div>
  );
}
