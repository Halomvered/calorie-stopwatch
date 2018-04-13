const activityTypes = [
    {
      description: "bicycling, mountain, competitive, racing",
      MET: 16.0
    },
    {
      description: "bicycling, BMX",
      MET: 8.5
    },
    {
      description: "bicycling, mountain, general",
      MET: 8.5
    },
    {
      description: "bicycling, <10 mph, leisure, to work or for pleasure",
      MET: 4.0
    },
    {
      description: "bicycling, to/from work, self selected pace",
      MET: 6.8
    },
    {
      description: "bicycling, on dirt or farm road, moderate pace",
      MET: 5.8
    },
    {
      description: "bicycling, general",
      MET: 7.5
    },
    {
      description: "bicycling, leisure, 5.5mph",
      MET: 3.5
    },
    {
      description: "bicycling, leisure, 9.4mph",
      MET: 5.8
    },
    {
      description: "bicycling, 10-11.9mph, leisure, slow, light effort",
      MET: 6.8
    },
    {
      description: "bicycling, 12-13.9mph, leisure, moderate effort",
      MET: 8.0
    },
    {
      description: "bicycling, 16-19 mph, racing/not drafting or > 19 mph drafting, very fast, racing general",
      MET: 12.0
    },
    {
      description: "bicycling, > 20 mph, racing, not drafting",
      MET: 15.8
    },
    {
      description: "bicycling, 12 mph, standing, hands on brake hoods, 60 rpm",
      MET: 9.0
    },
    {
      description: "unicycling",
      MET: 5.0
    },
    {
      description: "activity promoting video game (e.g., Wii Fit), light effort (e.g., balance, yoga)",
      MET: 2.3
    },
    {
      description: "activity promoting video game (e.g., Wii Fit), moderate effort (e.g., aerobic, resistance)",
      MET: 3.8
    },
    {
      description: "activity promoting video/arcade game (e.g., Exergaming, Dance Dance Revolution), vigorous effort",
      MET: 7.2
    },
    {
      description: "bicycling, stationary, general",
      MET: 7.0
    },
    {
      description: "bicycling, stationary, 30-50 watts, very light to light effort",
      MET: 3.5
    },
    {
      description: "bicycling, stationary, 101-160 watts, vigorous effort",
      MET: 8.8
    },
    {
      description: "bicycling, stationary, 161-200 watts, vigorous effort",
      MET: 11.0
    },
    {
      description: "bicycling, stationary, 201-270 watts, very vigorous effort",
      MET: 14.0
    },
    {
      description: "bicycling, stationary, RPM/Spin bike class",
      MET: 8.5
    },
    {
      description: "calisthenics (e.g., push ups, sit ups, pull-ups, jumping jacks), vigorous effort",
      MET: 8.0
    },
    {
      description: "calisthenics (e.g., push ups, sit ups, pull-ups, lunges), moderate effort",
      MET: 3.8
    },
    {
      description: "calisthenics (e.g., situps, abdominal crunches), light effort",
      MET: 2.8
    },
    {
      description: "Elliptical trainer, moderate effort",
      MET: 5.0
    },
    {
      description: "resistance (weight) training, multiple exercises, 8-15 repetitions at varied resistance",
      MET: 3.5
    },
    {
      description: "health club exercise, general",
      MET: 5.5
    },
    {
      description: "health club exercise, conditioning classes",
      MET: 7.8
    },
    {
      description: "home exercise, general",
      MET: 3.8
    },
    {
      description: "stair-treadmill ergometer, general",
      MET: 9.0
    },
    {
      description: "rope skipping, general",
      MET: 11.0
    },
    {
      description: "rowing, stationary ergometer, general, vigorous effort",
      MET: 6.0
    },
    {
      description: "rowing, stationary, general, moderate effort",
      MET: 4.8
    },
    {
      description: "rowing, stationary, 100 watts, moderate effort",
      MET: 7.0
    },
    {
      description: "rowing, stationary, 150 watts, vigorous effort",
      MET: 8.5
    },
    {
      description: "ski machine, general",
      MET: 6.8
    },
    {
      description: "slimnastics, jazzercise",
      MET: 6.0
    },
    {
      description: "stretching, mild",
      MET: 2.3
    },
    {
      description: "pilates, general",
      MET: 3.0
    },
    {
      description: "teaching exercise class (e.g., aerobic, water) ",
      MET: 6.8
    },
    {
      description: "therapeutic exercise ball, Fitball exercise",
      MET: 2.8
    },
    {
      description: "upper body exercise, arm ergometer",
      MET: 2.8
    },
    {
      description: "upper body exercise, stationary bicycle - Airdyne (arms only) 40 rpm, moderate",
      MET: 4.3
    },
    {
      description: "water aerobics, water calisthenics, water exercise",
      MET: 5.3
    },
    {
      description: "whirlpool, sitting",
      MET: 1.3
    },
    {
      description: "video exercise workouts, TV conditioning programs (e.g., yoga, stretching), light effort",
      MET: 2.3
    },
    {
      description: "video exercise workouts, TV conditioning programs (e.g., cardio-resistance), moderate effort",
      MET: 4.0
    },
    {
      description: "video exercise workouts, TV conditioning programs (e.g., cardio-resistance), vigorous effort",
      MET: 6.0
    },
    {
      description: "yoga, Power",
      MET: 4.0
    },
    {
      description: "yoga, Nadisodhana",
      MET: 2.0
    },
    {
      description: "yoga, Surya Namaskar",
      MET: 3.3
    },
    {
      description: "native New Zealander physical activities (e.g., Haka Powhiri, Moteatea, Waita Tira, Whakawatea, etc.) , general, moderate effort",
      MET: 5.3
    },
    {
      description: "native New Zealander physical activities (e.g., Haka, Taiahab), general, vigorous effort",
      MET: 6.8
    },
    {
      description: "ballet, modern, or jazz, general, rehearsal or class",
      MET: 5.0
    },
    {
      description: "ballet, modern, or jazz, performance, vigorous effort",
      MET: 6.8
    },
    {
      description: "tap",
      MET: 4.8
    },
    {
      description: "aerobic, general",
      MET: 7.3
    },
    {
      description: "aerobic, step, with 6- 8inch step",
      MET: 7.5
    },
    {
      description: "aerobic, step, with 10 - 12 inch step",
      MET: 9.5
    },
    {
      description: "aerobic, step, with 4-inch step",
      MET: 5.5
    },
    {
      description: "bench step class, general",
      MET: 8.5
    },
    {
      description: "aerobic, low impact",
      MET: 5.0
    },
    {
      description: "aerobic, high impact",
      MET: 7.3
    },
    {
      description: "ethnic or cultural dancing (e.g., Greek, Middle Eastern, hula, salsa, merengue, bamba yplena, flamenco, belly, and swing)",
      MET: 4.5
    },
    {
      description: "ballroom, fast",
      MET: 5.5
    },
    {
      description: "general dancing (e.g., disco, folk, Irish step dancing, line dancing, polka, contra, country)",
      MET: 7.8
    },
    {
      description: "ballroom, slow (e.g., waltz, foxtrot, slow dancing, samba, tango, 19th century dance, mambo, cha cha)",
      MET: 3.0
    },
    {
      description: "Anishinaabe Jingle Dancing",
      MET: 5.5
    },
    {
      description: "Caribbean dance (Abakua, Beguine, Bellair, Bongo, Brukin's, Caribbean Quadrills, Dinki Mini, Gere, Gumbay, Ibo, Jonkonnu, Kumina, Oreisha, Jambu) ",
      MET: 3.5
    },
    {
      description: "fishing, general",
      MET: 3.5
    },
    {
      description: "fishing, crab fishing",
      MET: 4.5
    },
    {
      description: "fishing, catching fish with hands",
      MET: 4.0
    },
    {
      description: "fishing related, digging worms, with shovel",
      MET: 4.3
    },
    {
      description: "fishing from river bank and walking",
      MET: 4.0
    },
    {
      description: "fishing from boat or canoe, sitting",
      MET: 2.0
    },
    {
      description: "fishing from river bank, standing",
      MET: 3.5
    },
    {
      description: "fishing in stream, in waders",
      MET: 6.0
    },
    {
      description: "fishing, ice, sitting",
      MET: 2.0
    },
    {
      description: "fishing, jog or line, standing, general",
      MET: 1.8
    },
    {
      description: "fishing, dip net, setting net and retrieving fish, general",
      MET: 3.5
    },
    {
      description: "fishing, set net, setting net and retrieving fish, general",
      MET: 3.8
    },
    {
      description: "fishing, fishing wheel, setting net and retrieving fish, general",
      MET: 3.0
    },
    {
      description: "fishing with aspear, standing",
      MET: 2.3
    },
    {
      description: "hunting, bow and arrow, or crossbow",
      MET: 2.5
    },
    {
      description: "hunting, deer, elk, large game",
      MET: 6.0
    },
    {
      description: "hunting large marine animals",
      MET: 4.0
    },
    {
      description: "hunting large game, from ahunting stand, limited walking",
      MET: 2.5
    },
    {
      description: "hunting large game from acar, plane, or boat",
      MET: 2.0
    },
    {
      description: "hunting, duck, wading",
      MET: 2.5
    },
    {
      description: "hunting, flying fox, squirrel",
      MET: 3.0
    },
    {
      description: "hunting, general",
      MET: 5.0
    },
    {
      description: "hunting, pheasants or grouse",
      MET: 6.0
    },
    {
      description: "hunting, birds",
      MET: 3.3
    },
    {
      description: "hunting, rabbit, squirrel, prairie chick, raccoon, small game",
      MET: 5.0
    },
    {
      description: "hunting, pigs, wild",
      MET: 3.3
    },
    {
      description: "trapping game, general",
      MET: 2.0
    },
    {
      description: "hunting, hiking with hunting gear",
      MET: 9.5
    },
    {
      description: "pistol shooting or trap shooting, standing",
      MET: 2.5
    },
    {
      description: "rifle exercises, shooting, lying down",
      MET: 2.3
    },
    {
      description: "rifle exercises, shooting, kneeling or standing",
      MET: 2.5
    },
    {
      description: "cleaning, sweeping carpet or floors, general",
      MET: 3.3
    },
    {
      description: "cleaning, sweeping, slow, light effort",
      MET: 2.3
    },
    {
      description: "cleaning, sweeping, slow, moderate effort",
      MET: 3.8
    },
    {
      description: "cleaning, heavy or major (e.g. wash car, wash windows, clean garage), moderate effort",
      MET: 3.5
    },
    {
      description: "cleaning, mopping, standing, moderate effort",
      MET: 3.5
    },
    {
      description: "cleaning windows, washing windows, general",
      MET: 3.2
    },
    {
      description: "mopping, standing, light effort",
      MET: 2.5
    },
    {
      description: "polishing floors, standing, walking slowly, using electric polishing machine",
      MET: 4.5
    },
    {
      description: "multiple household tasks all at once, light effort",
      MET: 2.8
    },
    {
      description: "multiple household tasks all at once, moderate effort",
      MET: 3.5
    },
    {
      description: "multiple household tasks all at once, vigorous effort",
      MET: 4.3
    },
    {
      description: "cleaning, house or cabin, general, moderate effort",
      MET: 3.3
    },
    {
      description: "dusting or polishing furniture, general",
      MET: 2.3
    },
    {
      description: "kitchen activity, general, (e.g., cooking, washing dishes, cleaning up), moderate effort",
      MET: 3.3
    },
    {
      description: "cleaning, general (straightening up, changing linen, carrying out trash, light effort",
      MET: 2.5
    },
    {
      description: "wash dishes, standing or in general (not broken into stand/walk components)",
      MET: 1.8
    },
    {
      description: "wash dishes, clearing dishes from table, walking, light effort",
      MET: 2.5
    },
    {
      description: "vacuuming, general, moderate effort",
      MET: 3.3
    },
    {
      description: "butchering animals, small",
      MET: 3.0
    },
    {
      description: "butchering animal, large, vigorous effort",
      MET: 6.0
    },
    {
      description: "cutting and smoking fish, drying fish or meat",
      MET: 2.3
    },
    {
      description: "tanning hides, general",
      MET: 4.0
    },
    {
      description: "cooking or food preparation, moderate effort",
      MET: 3.5
    },
    {
      description: "cooking or food preparation - standing or sitting or in general (not broken into stand/walk components), manual appliances, light effort",
      MET: 2.0
    },
    {
      description: "serving food, setting table, implied walking or standing",
      MET: 2.5
    },
    {
      description: "cooking or food preparation, walking",
      MET: 2.5
    },
    {
      description: "feeding household animals",
      MET: 2.5
    },
    {
      description: "putting away groceries (e.g. carrying groceries, shopping without agrocery cart), carrying packages",
      MET: 2.5
    },
    {
      description: "carrying groceries upstairs",
      MET: 7.5
    },
    {
      description: "cooking Indian bread on an outside stove",
      MET: 3.0
    },
    {
      description: "food shopping with or without agrocery cart, standing or walking",
      MET: 2.3
    },
    {
      description: "non-food shopping, with or without acart, standing or walking",
      MET: 2.3
    },
    {
      description: "ironing",
      MET: 1.8
    },
    {
      description: "knitting, sewing, light effort, wrapping presents, sitting",
      MET: 1.3
    },
    {
      description: "sewing with amachine",
      MET: 2.8
    },
    {
      description: "laundry, fold or hang clothes, put clothes in washer or dryer, packing suitcase, washing clothes by hand,\nimplied standing, light effort",
      MET: 2.0
    },
    {
      description: "laundry, hanging wash, washing clothes by hand, moderate effort",
      MET: 4.0
    },
    {
      description: "laundry, putting away clothes, gathering clothes to pack, putting away laundry,\nimplied walking",
      MET: 2.3
    },
    {
      description: "making bed, changing linens",
      MET: 3.3
    },
    {
      description: "maple syruping/sugar bushing (including carrying buckets, carrying wood)",
      MET: 5.0
    },
    {
      description: "moving furniture, household items, carrying boxes",
      MET: 5.8
    },
    {
      description: "moving, lifting light loads",
      MET: 5.0
    },
    {
      description: "organizing room",
      MET: 4.8
    },
    {
      description: "scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, moderate effort",
      MET: 3.5
    },
    {
      description: "scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, light effort",
      MET: 2.0
    },
    {
      description: "scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, vigorous effort",
      MET: 6.5
    },
    {
      description: "sweeping garage, sidewalk or outside of house",
      MET: 4.0
    },
    {
      description: "standing, packing/unpacking boxes, occasional lifting of lightweight household items, loading or unloading items in car, moderate effort",
      MET: 3.5
    },
    {
      description: "implied walking, putting away household items, moderate effort",
      MET: 3.0
    },
    {
      description: "watering  plants",
      MET: 2.5
    },
    {
      description: "building afire inside",
      MET: 2.5
    },
    {
      description: "moving household items upstairs, carrying boxes or furniture",
      MET: 9.0
    },
    {
      description: "standing, light effort tasks (pump gas, change light bulb, etc.)",
      MET: 2.0
    },
    {
      description: "walking, moderate effort tasks, non-cleaning (readying to leave, shut/lock doors, close windows, etc.)",
      MET: 3.5
    },
    {
      description: "sitting, playing with child(ren), light effort, only active periods",
      MET: 2.2
    },
    {
      description: "standing, playing with child(ren) light effort, only active periods",
      MET: 2.8
    },
    {
      description: "walking/running, playing with child(ren), moderate effort, only active periods",
      MET: 3.5
    },
    {
      description: "walking/running, playing with child(ren), vigorous effort, only active periods",
      MET: 5.8
    },
    {
      description: "walking and carrying small child, child weighing 15 lbs or more",
      MET: 3.0
    },
    {
      description: "walking and carrying small child, child weighing less than 15 lbs",
      MET: 2.3
    },
    {
      description: "child care, infant, general",
      MET: 2.5
    },
    {
      description: "child care, sitting/kneeling (e.g., dressing, bathing, grooming, feeding, occasional lifting of child), light effort, general",
      MET: 2.0
    },
    {
      description: "child care, standing (e.g., dressing, bathing, grooming, feeding, occasional lifting of child), moderate effort",
      MET: 3.0
    },
    {
      description: "reclining with baby",
      MET: 1.5
    },
    {
      description: "breastfeeding, sitting or reclining",
      MET: 2.0
    },
    {
      description: "sit, playing with animals, light effort, only active periods",
      MET: 2.5
    },
    {
      description: "stand, playing with animals, light effort, only active periods",
      MET: 2.8
    },
    {
      description: "walk/run, playing with animals, general, light effort, only active periods",
      MET: 3.0
    },
    {
      description: "walk/run, playing with animals, moderate effort, only active periods",
      MET: 4.0
    },
    {
      description: "walk/run, playing with animals, vigorous effort, only active periods",
      MET: 5.0
    },
    {
      description: "standing, bathing dog",
      MET: 3.5
    },
    {
      description: "animal care, household animals, general",
      MET: 2.3
    },
    {
      description: "elder care, disabled adult, bathing, dressing, moving into and out of bed, only active periods (formerly code = 05187) ",
      MET: 4.0
    },
    {
      description: "elder care, disabled adult, feeding, combing hair, light effort, only active periods",
      MET: 2.3
    },
    {
      description: "airplane repair",
      MET: 3.0
    },
    {
      description: "automobile body work",
      MET: 4.0
    },
    {
      description: "automobile repair, light or moderate effort",
      MET: 3.3
    },
    {
      description: "carpentry, general, workshop",
      MET: 3.0
    },
    {
      description: "carpentry, outside house, installing rain gutters,carpentry, outside house, building afence",
      MET: 6.0
    },
    {
      description: "carpentry, outside house, building afence",
      MET: 3.8
    },
    {
      description: "carpentry, finishing or refinishing cabinets or furniture",
      MET: 3.3
    },
    {
      description: "carpentry, sawing hardwood",
      MET: 6.0
    },
    {
      description: "carpentry, home remodeling tasks, moderate effort",
      MET: 4.0
    },
    {
      description: "carpentry, home remodeling tasks, light effort  ",
      MET: 2.3
    },
    {
      description: "caulking, chinking log cabin",
      MET: 5.0
    },
    {
      description: "caulking, except log cabin",
      MET: 4.5
    },
    {
      description: "cleaning gutters",
      MET: 5.0
    },
    {
      description: "excavating garage",
      MET: 5.0
    },
    {
      description: "hanging storm windows",
      MET: 5.0
    },
    {
      description: "hanging sheet rock inside house",
      MET: 5.0
    },
    {
      description: "hammering nails",
      MET: 3.0
    },
    {
      description: "home repair, general, light effort",
      MET: 2.5
    },
    {
      description: "home repair, general, moderate effort",
      MET: 4.5
    },
    {
      description: "home repair, general, vigorous effort",
      MET: 6.0
    },
    {
      description: "laying or removing carpet",
      MET: 4.5
    },
    {
      description: "laying tile or linoleum,repairing appliances",
      MET: 3.8
    },
    {
      description: "repairing appliances",
      MET: 3.0
    },
    {
      description: "painting, outside home",
      MET: 5.0
    },
    {
      description: "painting inside house,wallpapering, scraping paint",
      MET: 3.3
    },
    {
      description: "painting,",
      MET: 4.5
    },
    {
      description: "plumbing, general",
      MET: 3.0
    },
    {
      description: "put on and removal of tarp - sailboat",
      MET: 3.0
    },
    {
      description: "roofing",
      MET: 6.0
    },
    {
      description: "sanding floors with apower sander",
      MET: 4.5
    },
    {
      description: "scraping and painting sailboat or powerboat",
      MET: 4.5
    },
    {
      description: "sharpening tools",
      MET: 2.0
    },
    {
      description: "spreading dirt with ashovel",
      MET: 5.0
    },
    {
      description: "washing and waxing hull of sailboat or airplane",
      MET: 4.5
    },
    {
      description: "washing and waxing car",
      MET: 2.0
    },
    {
      description: "washing fence, painting fence, moderate effort",
      MET: 4.5
    },
    {
      description: "wiring, tapping-splicing",
      MET: 3.3
    },
    {
      description: "lying quietly and watching television",
      MET: 1.0
    },
    {
      description: "lying quietly, doing nothing, lying in bed awake, listening to music (not talking or reading)",
      MET: 1.3
    },
    {
      description: "sitting quietly and watching television",
      MET: 1.3
    },
    {
      description: "sitting quietly, general",
      MET: 1.3
    },
    {
      description: "sitting quietly, fidgeting, general, fidgeting hands",
      MET: 1.5
    },
    {
      description: "sitting, fidgeting feet",
      MET: 1.8
    },
    {
      description: "sitting, smoking",
      MET: 1.3
    },
    {
      description: "sitting, listening to music (not talking or reading) or watching amovie in atheater",
      MET: 1.5
    },
    {
      description: "sitting at adesk, resting head in hands",
      MET: 1.3
    },
    {
      description: "standing quietly, standing in aline",
      MET: 1.3
    },
    {
      description: "standing, fidgeting",
      MET: 1.8
    },
    {
      description: "reclining, writing",
      MET: 1.3
    },
    {
      description: "reclining, talking or talking on phone",
      MET: 1.3
    },
    {
      description: "reclining, reading",
      MET: 1.3
    },
    {
      description: "meditating",
      MET: 1.0
    },
    {
      description: "carrying, loading or stacking wood, loading/unloading or carrying lumber, light-to-moderate effort",
      MET: 3.3
    },
    {
      description: "carrying, loading or stacking wood, loading/unloading or carrying lumber",
      MET: 5.5
    },
    {
      description: "chopping wood, splitting logs, moderate effort",
      MET: 4.5
    },
    {
      description: "chopping wood, splitting logs, vigorous effort",
      MET: 6.3
    },
    {
      description: "clearing light brush, thinning garden, moderate effort",
      MET: 3.5
    },
    {
      description: "clearing brush/land, undergrowth, or ground, hauling branches, wheelbarrow chores, vigorous effort",
      MET: 6.3
    },
    {
      description: "digging sandbox, shoveling sand",
      MET: 5.0
    },
    {
      description: "digging, spading, filling garden, composting, light-to-moderate effort",
      MET: 3.5
    },
    {
      description: "digging, spading, filling garden, compositing,",
      MET: 5.0
    },
    {
      description: "digging, spading, filling garden, composting, vigorous effort",
      MET: 7.8
    },
    {
      description: "driving tractor",
      MET: 2.8
    },
    {
      description: "felling trees, large size",
      MET: 8.3
    },
    {
      description: "felling trees, small-medium size",
      MET: 5.3
    },
    {
      description: "gardening with heavy power tools, tilling agarden, chain saw",
      MET: 5.8
    },
    {
      description: "gardening, using containers, older adults > 60 years",
      MET: 2.3
    },
    {
      description: "irrigation channels, opening and closing ports",
      MET: 4.0
    },
    {
      description: "laying crushed rock",
      MET: 6.3
    },
    {
      description: "laying sod",
      MET: 5.0
    },
    {
      description: "mowing lawn, general",
      MET: 5.5
    },
    {
      description: "mowing lawn, riding mower",
      MET: 2.5
    },
    {
      description: "mowing lawn, walk, hand mower",
      MET: 6.0
    },
    {
      description: "mowing lawn, walk, power mower, moderate or vigorous effort",
      MET: 5.0
    },
    {
      description: "mowing lawn, power mower, light or moderate effort",
      MET: 4.5
    },
    {
      description: "operating snow blower, walking",
      MET: 2.5
    },
    {
      description: "planting, potting, transplanting seedlings or plants, light effort",
      MET: 2.0
    },
    {
      description: "planting seedlings, shrub, stooping, moderate effort",
      MET: 4.3
    },
    {
      description: "planting crops or garden, stooping, moderate effort",
      MET: 4.3
    },
    {
      description: "planting trees",
      MET: 4.5
    },
    {
      description: "raking lawn or leaves, moderate effort",
      MET: 3.8
    },
    {
      description: "raking lawn",
      MET: 4.0
    },
    {
      description: "raking roof with snow rake",
      MET: 4.0
    },
    {
      description: "riding snow blower",
      MET: 3.0
    },
    {
      description: "sacking grass, leaves",
      MET: 4.0
    },
    {
      description: "shoveling dirt or mud",
      MET: 5.5
    },
    {
      description: "shoveling snow, by hand, moderate effort",
      MET: 5.3
    },
    {
      description: "shovelling snow, by hand",
      MET: 6.0
    },
    {
      description: "shoveling snow, by hand, vigorous effort",
      MET: 7.5
    },
    {
      description: "trimming shrubs or trees, manual cutter",
      MET: 4.0
    },
    {
      description: "trimming shrubs or trees, power cutter, using leaf blower, edge, moderate effort",
      MET: 3.5
    },
    {
      description: "walking, applying fertilizer or seeding alawn, push applicator",
      MET: 3.0
    },
    {
      description: "watering lawn or garden, standing or walking",
      MET: 1.5
    },
    {
      description: "weeding, cultivating garden, light-to-moderate effort",
      MET: 3.5
    },
    {
      description: "weeding, cultivating garden",
      MET: 4.5
    },
    {
      description: "weeding, cultivating garden, using ahoe, moderate-to-vigorous effort",
      MET: 5.0
    },
    {
      description: "gardening, general, moderate effort",
      MET: 3.8
    },
    {
      description: "picking fruit off trees, picking fruits/vegetables, moderate effort",
      MET: 3.5
    },
    {
      description: "picking fruit off trees, gleaning fruits, picking fruits/vegetables, climbing ladder to pick fruit, vigorous effort",
      MET: 4.5
    },
    {
      description: "implied walking/standing - picking up yard, light, picking flowers or vegetables",
      MET: 3.3
    },
    {
      description: "walking, gathering gardening tools",
      MET: 3.0
    },
    {
      description: "wheelbarrow, pushing garden cart or wheelbarrow",
      MET: 5.5
    },
    {
      description: "yard work, general, light effort",
      MET: 3.0
    },
    {
      description: "yard work, general, moderate effort",
      MET: 4.0
    },
    {
      description: "yard work, general, vigorous effort",
      MET: 6.0
    },
    {
      description: "board game playing, sitting",
      MET: 1.5
    },
    {
      description: "casino gambling, standing",
      MET: 2.5
    },
    {
      description: "card playing, sitting",
      MET: 1.5
    },
    {
      description: "copying documents, standing",
      MET: 1.5
    },
    {
      description: "drawing, writing, painting, standing",
      MET: 1.8
    },
    {
      description: "laughing, sitting",
      MET: 1.0
    },
    {
      description: "sitting, reading, book, newspaper, etc.",
      MET: 1.3
    },
    {
      description: "sitting, writing, desk work, typing",
      MET: 1.3
    },
    {
      description: "sitting, playing traditional video game, computer game",
      MET: 1.0
    },
    {
      description: "standing, talking in person, on the phone, computer, or text messaging, light effort",
      MET: 1.8
    },
    {
      description: "sitting, talking in person, on the phone, computer, or text messaging, light effort",
      MET: 1.5
    },
    {
      description: "sitting, studying, general, including reading and/or writing, light effort",
      MET: 1.3
    },
    {
      description: "sitting, in class, general, including note-taking or class discussion",
      MET: 1.8
    },
    {
      description: "standing, reading",
      MET: 1.8
    },
    {
      description: "standing, miscellaneous",
      MET: 2.5
    },
    {
      description: "sitting, arts and crafts,  carving wood, weaving, spinning wool, light effort",
      MET: 1.8
    },
    {
      description: "sitting, arts and crafts,  carving wood, weaving, spinning wool, moderate effort",
      MET: 3.0
    },
    {
      description: "standing, arts and crafts, sand painting, carving, weaving, light effort",
      MET: 2.5
    },
    {
      description: "standing, arts and crafts, sand painting, carving, weaving, moderate effort",
      MET: 3.3
    },
    {
      description: "standing, arts and crafts, sand painting, carving, weaving, vigorous effort",
      MET: 3.5
    },
    {
      description: "retreat/family reunion activities involving sitting, relaxing, talking, eating",
      MET: 1.8
    },
    {
      description: "retreat/family reunion activities involving playing games with children",
      MET: 3.0
    },
    {
      description: "touring/traveling/vacation involving riding in avehicle",
      MET: 2.0
    },
    {
      description: "touring/traveling/vacation involving walking",
      MET: 3.5
    },
    {
      description: "camping involving standing, walking, sitting, light-to-moderate effort",
      MET: 2.5
    },
    {
      description: "sitting at asporting event, spectator",
      MET: 1.5
    },
    {
      description: "accordion, sitting",
      MET: 1.8
    },
    {
      description: "cello, sitting",
      MET: 2.3
    },
    {
      description: "conducting orchestra, standing",
      MET: 2.3
    },
    {
      description: "drums, sitting",
      MET: 3.8
    },
    {
      description: "drumming (e.g., bongo, conga, benbe), moderate, sitting",
      MET: 3.0
    },
    {
      description: "flute, sitting",
      MET: 2.0
    },
    {
      description: "horn, standing",
      MET: 1.8
    },
    {
      description: "piano, sitting",
      MET: 2.3
    },
    {
      description: "playing musical instruments, general",
      MET: 2.0
    },
    {
      description: "organ, sitting",
      MET: 2.0
    },
    {
      description: "trombone, standing",
      MET: 3.5
    },
    {
      description: "trumpet, standing",
      MET: 1.8
    },
    {
      description: "violin, sitting",
      MET: 2.5
    },
    {
      description: "woodwind, sitting",
      MET: 1.8
    },
    {
      description: "guitar, classical, folk, sitting",
      MET: 2.0
    },
    {
      description: "guitar, rock and roll band, standing",
      MET: 3.0
    },
    {
      description: "marching band, baton twirling, walking, moderate pace, general",
      MET: 4.0
    },
    {
      description: "marching band, drum major, walking",
      MET: 3.5
    },
    {
      description: "active workstation, treadmill desk, walking",
      MET: 2.3
    },
    {
      description: "airline flight attendant",
      MET: 3.0
    },
    {
      description: "bakery, general, moderate effort",
      MET: 4.0
    },
    {
      description: "bakery, light effort",
      MET: 2.0
    },
    {
      description: "bookbinding",
      MET: 2.3
    },
    {
      description: "building road, driving heavy machinery",
      MET: 6.0
    },
    {
      description: "building road, directing traffic, standing",
      MET: 2.0
    },
    {
      description: "carpentry, general, light effort",
      MET: 2.5
    },
    {
      description: "carpentry, general, moderate effort",
      MET: 4.3
    },
    {
      description: "carpentry, general, heavy or vigorous effort",
      MET: 7.0
    },
    {
      description: "carrying heavy loads (e.g., bricks, tools) ",
      MET: 8.0
    },
    {
      description: "carrying moderate loads up stairs, moving boxes 25-49 lbs",
      MET: 8.0
    },
    {
      description: "chambermaid, hotel housekeeper, making bed, cleaning bathroom, pushing cart",
      MET: 4.0
    },
    {
      description: "coal mining, drilling coal, rock",
      MET: 5.3
    },
    {
      description: "coal mining, erecting supports",
      MET: 5.0
    },
    {
      description: "coal mining, general",
      MET: 5.5
    },
    {
      description: "coal mining, shoveling coal",
      MET: 6.3
    },
    {
      description: "cook, chef",
      MET: 2.5
    },
    {
      description: "construction, outside, remodeling, new structures (e.g., roof repair, miscellaneous",
      MET: 4.0
    },
    {
      description: "custodial work, light effort (e.g., cleaning sink and toilet, dusting, vacuuming, light cleaning)",
      MET: 2.3
    },
    {
      description: "custodial work, moderate effort (e.g., electric buffer, feathering arena floors, mopping, taking out trash, vacuuming)",
      MET: 3.8
    },
    {
      description: "driving delivery truck, taxi, shuttle bus, school bus",
      MET: 2.0
    },
    {
      description: "electrical work (e.g., hook up wire, tapping-splicing)",
      MET: 3.3
    },
    {
      description: "engineer (e.g., mechanical or electrical)",
      MET: 1.8
    },
    {
      description: "farming, vigorous effort (e.g., baling hay, cleaning barn) ",
      MET: 7.8
    },
    {
      description: "farming, moderate effort (e.g., feeding animals, chasing cattle by walking and/or horseback, spreading manure, harvesting crops)",
      MET: 4.8
    },
    {
      description: "farming, light effort (e.g., cleaning animal sheds, preparing animal feed) ",
      MET: 2.0
    },
    {
      description: "farming, driving tasks (e.g., driving tractor or harvester) ",
      MET: 2.8
    },
    {
      description: "farming, feeding small animals",
      MET: 3.5
    },
    {
      description: "farming, feeding cattle, horses",
      MET: 4.3
    },
    {
      description: "farming, hauling water for animals, general hauling water",
      MET: 4.3
    },
    {
      description: "farming, taking care of animals (e.g., grooming, brushing, shearing sheep, assisting with birthing, medical care, branding), general",
      MET: 4.5
    },
    {
      description: "farming, rice, planting, grain milling activities",
      MET: 3.8
    },
    {
      description: "farming, milking by hand, cleaning pails, moderate effort",
      MET: 3.5
    },
    {
      description: "farming, milking by machine, light effort",
      MET: 1.3
    },
    {
      description: "fire fighter, general",
      MET: 8.0
    },
    {
      description: "fire fighter, raising and climbing ladder with full gear, simulated fire suppression",
      MET: 8.0
    },
    {
      description: "fire fighter, hauling hoses on ground, carrying/hoisting equipment, breaking down walls, wearing full gear",
      MET: 9.0
    },
    {
      description: "fishing, commercial, light effort",
      MET: 3.5
    },
    {
      description: "fishing, commercial, moderate effort",
      MET: 5.0
    },
    {
      description: "fishing, commercial, vigorous effort",
      MET: 7.0
    },
    {
      description: "forestry, ax chopping, slow, 1.25 kg axe, 19 blows/min, moderate effort",
      MET: 5.0
    },
    {
      description: "forestry, ax chopping, fast, 1.25 kg axe, 35 blows/min, vigorous effort",
      MET: 8.0
    },
    {
      description: "forestry, moderate effort (e.g., sawing wood with power saw, weeding, hoeing)",
      MET: 4.5
    },
    {
      description: "forestry, vigorous effort (e.g., barking, felling, or trimming trees, carrying or stacking logs, felling trees, planting seeds, sawing lumber by hand )",
      MET: 8.0
    },
    {
      description: "furriery",
      MET: 4.5
    },
    {
      description: "garbage collector, walking, dumping bins into truck",
      MET: 4.0
    },
    {
      description: "hairstylist (e.g., plaiting hair, manicure, make-up artist)",
      MET: 1.8
    },
    {
      description: "horse grooming, including feeding, cleaning stalls, bathing, brushing, clipping, longeing and exercising horses.",
      MET: 7.3
    },
    {
      description: "horse, feeding, watering, cleaning stalls, implied walking and lifting loads",
      MET: 4.3
    },
    {
      description: "horse racing, galloping",
      MET: 7.3
    },
    {
      description: "horse racing, trotting",
      MET: 5.8
    },
    {
      description: "horse racing, walking",
      MET: 3.8
    },
    {
      description: "kitchen maid",
      MET: 3.0
    },
    {
      description: "lawn keeper, yard work, general",
      MET: 4.0
    },
    {
      description: "laundry worker",
      MET: 3.3
    },
    {
      description: "locksmith",
      MET: 3.0
    },
    {
      description: "machine tooling (e.g., machining, working sheet metal, machine fitter, operating lathe, welding) light-to-moderate effort",
      MET: 3.0
    },
    {
      description: "manager, property",
      MET: 1.8
    },
    {
      description: "manual or unskilled labor, general, light effort",
      MET: 2.8
    },
    {
      description: "manual or unskilled labor, general, moderate effort",
      MET: 4.5
    },
    {
      description: "manual or unskilled labor, general, vigorous effort",
      MET: 6.5
    },
    {
      description: "masonry, concrete, moderate effort",
      MET: 4.3
    },
    {
      description: "masonry, concrete, light effort",
      MET: 2.5
    },
    {
      description: "massage therapist, standing",
      MET: 4.0
    },
    {
      description: "moving, carrying or pushing heavy objects, 75 lbs or more, only active time (e.g., desks, moving van work) ",
      MET: 7.5
    },
    {
      description: "operating heavy duty equipment, automated, not driving",
      MET: 2.5
    },
    {
      description: "orange grove work, picking fruit",
      MET: 4.5
    },
    {
      description: "painting,house, furniture, moderate effort",
      MET: 3.3
    },
    {
      description: "plumbing activities",
      MET: 3.0
    },
    {
      description: "printing, paper industry worker, standing",
      MET: 2.0
    },
    {
      description: "police, directing traffic, standing",
      MET: 2.5
    },
    {
      description: "police, driving asquad car, sitting",
      MET: 2.5
    },
    {
      description: "police, riding in asquad car, sitting",
      MET: 1.3
    },
    {
      description: "police, making an arrest, standing",
      MET: 4.0
    },
    {
      description: "postal carrier, walking to deliver mail",
      MET: 2.3
    },
    {
      description: "shoe repair, general",
      MET: 2.0
    },
    {
      description: "shoveling, digging ditches",
      MET: 7.8
    },
    {
      description: "shoveling, more than 16 pounds/minute, deep digging, vigorous effort",
      MET: 8.8
    },
    {
      description: "shoveling, less than 10 pounds/minute, moderate effort",
      MET: 5.0
    },
    {
      description: "shoveling, 10 to 15 pounds/minute, vigorous effort",
      MET: 6.5
    },
    {
      description: "sitting tasks, light effort (e.g., office work, chemistry lab work, computer work, light assembly repair, watch repair, reading, desk work)",
      MET: 1.5
    },
    {
      description: "sitting meetings, light effort, general, and/or with talking involved (e.g., eating at abusiness meeting)",
      MET: 1.5
    },
    {
      description: "sitting tasks, moderate effort (e.g., pushing heavy levers, riding mower/forklift, crane operation)",
      MET: 2.5
    },
    {
      description: "sitting, teaching stretching or yoga, or light effort exercise class",
      MET: 2.8
    },
    {
      description: "standing tasks, light effort (e.g., bartending, store clerk, assembling, filing, duplicating, librarian, putting up aChristmas tree, standing and talking at work, changing clothes when teaching physical education,standing)",
      MET: 3.0
    },
    {
      description: "standing, light/moderate effort (e.g., assemble/repair heavy parts, welding,stocking parts,auto repair,standing, packing boxes, nursing patient care)",
      MET: 3.0
    },
    {
      description: "standing, moderate effort, lifting items continuously, 10 – 20 lbs, with limited walking or resting",
      MET: 4.5
    },
    {
      description: "standing, moderate effort, intermittent lifting 50 lbs, hitch/twisting ropes",
      MET: 3.5
    },
    {
      description: "standing, moderate/heavy tasks (e.g., lifting more than 50 lbs, masonry, painting, paper hanging)",
      MET: 4.5
    },
    {
      description: " ",
      MET: " "
    },
    {
      description: "steel mill, tipping molds(Included in code 11708)",
      MET: " "
    },
    {
      description: "steel mill, moderate effort (e.g., fettling, forging, tipping molds)",
      MET: 5.3
    },
    {
      description: "steel mill, vigorous effort (e.g., hand rolling, merchant mill rolling, removing slag, tending furnace)",
      MET: 8.3
    },
    {
      description: "tailoring, cutting fabric",
      MET: 2.3
    },
    {
      description: "tailoring, general",
      MET: 2.5
    },
    {
      description: "tailoring, hand sewing",
      MET: 1.8
    },
    {
      description: "tailoring, machine sewing",
      MET: 2.5
    },
    {
      description: "tailoring, pressing",
      MET: 3.5
    },
    {
      description: "tailoring, weaving, light effort (e.g., finishing operations, washing, dyeing, inspecting cloth, counting yards, paperwork)",
      MET: 2.0
    },
    {
      description: "tailoring, weaving, moderate effort (e.g., spinning and weaving operations, delivering boxes of yam to spinners, loading of warp bean, pinwinding, conewinding, warping, cloth cutting) ",
      MET: 4.0
    },
    {
      description: "truck driving, loading and unloading truck, tying down load, standing, walking and carrying heavy loads",
      MET: 6.5
    },
    {
      description: "typing, electric, manual or computer",
      MET: 1.3
    },
    {
      description: "using heavy power tools such as pneumatic tools (e.g., jackhammers, drills) ",
      MET: 6.3
    },
    {
      description: "using heavy tools (not power) such as shovel, pick, tunnel bar, spade",
      MET: 8.0
    },
    {
      description: "walking on job, less than 2.0mph, very slow speed, in office or lab area",
      MET: 2.0
    },
    {
      description: "walking on job, 3.0mph, in office, moderate speed, not carrying anything",
      MET: 3.5
    },
    {
      description: "walking on job, 3.5mph, in office, brisk speed, not carrying anything",
      MET: 4.3
    },
    {
      description: "walking on job, 2.5mph, slow speed and carrying light objects less than 25 pounds",
      MET: 3.5
    },
    {
      description: "walking, gathering things at work, ready to leave",
      MET: 3.0
    },
    {
      description: "walking, 3.0mph, moderately and carrying light objects less than 25 lbs",
      MET: 4.5
    },
    {
      description: "walking, pushing awheelchair",
      MET: 3.5
    },
    {
      description: "walking, 3.5mph, briskly and carrying objects less than 25 pounds",
      MET: 4.8
    },
    {
      description: "walking or walk downstairs or standing, carrying objects about 25 to 49 pounds",
      MET: 5.0
    },
    {
      description: "walking or walk downstairs or standing, carrying objects about 50 to 74 pounds",
      MET: 6.5
    },
    {
      description: "walking or walk downstairs or standing, carrying objects about 75 to 99 pounds",
      MET: 7.5
    },
    {
      description: "walking or walk downstairs or standing, carrying objects about 100 pounds or over",
      MET: 8.5
    },
    {
      description: "working in scene shop, theater actor, backstage employee",
      MET: 3.0
    },
    {
      description: "jog/walk combination (jogging component of less than 10 minutes)",
      MET: 6.0
    },
    {
      description: "jogging, general",
      MET: 7.0
    },
    {
      description: "jogging, in place",
      MET: 8.0
    },
    {
      description: "jogging, on amini-tramp",
      MET: 4.5
    },
    {
      description: "running, 4mph (15 min/mile) ",
      MET: 6.0
    },
    {
      description: "running, 5mph (12 min/mile) ",
      MET: 8.3
    },
    {
      description: "running, 5.2mph (11.5min/mile)",
      MET: 9.0
    },
    {
      description: "running, 6mph (10 min/mile) ",
      MET: 9.8
    },
    {
      description: "running, 6.7mph (9min/mile) ",
      MET: 10.5
    },
    {
      description: "running, 7.5mph (8min/mile) ",
      MET: 11.8
    },
    {
      description: "running, 8mph (7.5min/mile) ",
      MET: 11.8
    },
    {
      description: "running, 9mph (6.5min/mile) ",
      MET: 12.8
    },
    {
      description: "running, 11 mph (5.5min/mile) ",
      MET: 16.0
    },
    {
      description: "running, 13 mph (4.6min/mile)",
      MET: 19.8
    },
    {
      description: "running, 14 mph (4.3min/mile) ",
      MET: 23.0
    },
    {
      description: "running, cross country",
      MET: 9.0
    },
    {
      description: "running, (Taylor code 200) ",
      MET: 8.0
    },
    {
      description: "running, training, pushing awheelchair or baby carrier",
      MET: 8.0
    },
    {
      description: "getting ready for bed, general, standing",
      MET: 2.3
    },
    {
      description: "sitting on toilet, eliminating while standing or squating",
      MET: 1.8
    },
    {
      description: "bathing, sitting",
      MET: 1.5
    },
    {
      description: "dressing, undressing, standing or sitting",
      MET: 2.5
    },
    {
      description: "eating, sitting",
      MET: 1.5
    },
    {
      description: "talking and eating or eating only, standing",
      MET: 2.0
    },
    {
      description: "taking medication, sitting or standing",
      MET: 1.5
    },
    {
      description: "grooming, washing hands, shaving, brushing teeth, putting on make-up, sitting or standing",
      MET: 2.0
    },
    {
      description: "hairstyling, standing",
      MET: 2.5
    },
    {
      description: "having hair or nails done by someone else, sitting",
      MET: 1.3
    },
    {
      description: "showering, toweling off, standing",
      MET: 2.0
    },
    {
      description: "active, vigorous effort",
      MET: 2.8
    },
    {
      description: "general, moderate effort",
      MET: 1.8
    },
    {
      description: "passive, light effort, kissing, hugging",
      MET: 1.3
    },
    {
      description: "Alaska Native Games, Eskimo Olympics, general",
      MET: 5.5
    },
    {
      description: "archery, non-hunting",
      MET: 4.3
    },
    {
      description: "badminton, competitive",
      MET: 7.0
    },
    {
      description: "badminton, social singles and doubles, general",
      MET: 5.5
    },
    {
      description: "basketball, game",
      MET: 8.0
    },
    {
      description: "basketball, non-game, general",
      MET: 6.0
    },
    {
      description: "basketball, general",
      MET: 6.5
    },
    {
      description: "basketball, officiating",
      MET: 7.0
    },
    {
      description: "basketball, shooting baskets",
      MET: 4.5
    },
    {
      description: "basketball, drills, practice",
      MET: 9.3
    },
    {
      description: "basketball, wheelchair",
      MET: 7.8
    },
    {
      description: "billiards",
      MET: 2.5
    },
    {
      description: "bowling",
      MET: 3.0
    },
    {
      description: "bowling, indoor, bowling alley",
      MET: 3.8
    },
    {
      description: "boxing, punching bag",
      MET: 5.5
    },
    {
      description: "boxing, sparring",
      MET: 7.8
    },
    {
      description: "broomball",
      MET: 7.0
    },
    {
      description: "children’s games, adults playing (e.g., hopscotch, 4-square, dodge ball, playground apparatus, t-ball, tetherball, marbles, jacks, arcade games), moderate effort",
      MET: 5.8
    },
    {
      description: "cheerleading, gymnastic moves, competitive",
      MET: 6.0
    },
    {
      description: "coaching, football, soccer, basketball, baseball, swimming, etc. ",
      MET: 4.0
    },
    {
      description: "coaching, actively playing sport with players",
      MET: 8.0
    },
    {
      description: "cricket, batting, bowling, fielding",
      MET: 4.8
    },
    {
      description: "croquet",
      MET: 3.3
    },
    {
      description: "curling",
      MET: 4.0
    },
    {
      description: "darts, wall or lawn",
      MET: 2.5
    },
    {
      description: "drag racing, pushing or driving acar",
      MET: 6.0
    },
    {
      description: "auto racing, open wheel",
      MET: 8.5
    },
    {
      description: "fencing",
      MET: 6.0
    },
    {
      description: "football, competitive",
      MET: 8.0
    },
    {
      description: "football, touch, flag, general",
      MET: 8.0
    },
    {
      description: "football, touch, flag, light effort",
      MET: 4.0
    },
    {
      description: "football or baseball, playing catch",
      MET: 2.5
    },
    {
      description: "frisbee playing, general",
      MET: 3.0
    },
    {
      description: "frisbee, ultimate",
      MET: 8.0
    },
    {
      description: "golf, general",
      MET: 4.8
    },
    {
      description: "golf, walking, carrying clubs",
      MET: 4.3
    },
    {
      description: "golf, miniature, driving range",
      MET: 3.0
    },
    {
      description: "golf, walking, pulling clubs",
      MET: 5.3
    },
    {
      description: "golf, using power cart",
      MET: 3.5
    },
    {
      description: "gymnastics, general",
      MET: 3.8
    },
    {
      description: "hacky sack",
      MET: 4.0
    },
    {
      description: "handball, team",
      MET: 8.0
    },
    {
      description: "high ropes course, multiple elements",
      MET: 4.0
    },
    {
      description: "hang gliding",
      MET: 3.5
    },
    {
      description: "hockey, field",
      MET: 7.8
    },
    {
      description: "hockey, ice, general",
      MET: 8.0
    },
    {
      description: "horseback riding, general",
      MET: 5.5
    },
    {
      description: "horse chores, feeding, watering, cleaning stalls, implied walking and lifting loads",
      MET: 4.3
    },
    {
      description: "saddling, cleaning, grooming, harnessing and unharnessing horse",
      MET: 4.5
    },
    {
      description: "horseback riding, trotting",
      MET: 5.8
    },
    {
      description: "horseback riding, canter or gallop",
      MET: 7.3
    },
    {
      description: "horseback riding,walking",
      MET: 3.8
    },
    {
      description: "horseback riding, jumping",
      MET: 9.0
    },
    {
      description: "horse cart, driving, standing or sitting",
      MET: 1.8
    },
    {
      description: "horseshoe pitching, quoits",
      MET: 3.0
    },
    {
      description: "martial arts, different types, slower pace, novice performers, practice",
      MET: 5.3
    },
    {
      description: "martial arts, different types, moderate pace (e.g., judo, jujitsu, karate, kick boxing, tae kwan do, tai-bo, Muay Thai boxing)",
      MET: 10.3
    },
    {
      description: "juggling",
      MET: 4.0
    },
    {
      description: "kickball",
      MET: 7.0
    },
    {
      description: "lacrosse",
      MET: 8.0
    },
    {
      description: "lawn bowling, bocce ball, outdoor",
      MET: 3.3
    },
    {
      description: "moto-cross, off-road motor sports, all-terrain vehicle, general",
      MET: 4.0
    },
    {
      description: "orienteering",
      MET: 9.0
    },
    {
      description: "paddleball, casual, general",
      MET: 6.0
    },
    {
      description: "polo, on horseback",
      MET: 8.0
    },
    {
      description: "racquetball, general",
      MET: 7.0
    },
    {
      description: "rock or mountain climbing(Formerly code = 17120) ",
      MET: 8.0
    },
    {
      description: "rock climbing, ascending rock, high difficulty",
      MET: 7.5
    },
    {
      description: "rock climbing, ascending or traversing rock, low-to-moderate difficulty",
      MET: 5.8
    },
    {
      description: "rock climbing, rappelling",
      MET: 5.0
    },
    {
      description: "rodeo sports, general, light effort",
      MET: 4.0
    },
    {
      description: "rodeo sports, general, moderate effort",
      MET: 5.5
    },
    {
      description: "rodeo sports, general, vigorous effort",
      MET: 7.0
    },
    {
      description: "rope jumping, moderate pace, 100-120 skips/min, general,  2foot skip, plain bounce",
      MET: 11.8
    },
    {
      description: "rope jumping, slow pace, < 100 skips/min, 2foot skip, rhythm bounce",
      MET: 8.8
    },
    {
      description: "rugby, union, team, competitive",
      MET: 8.3
    },
    {
      description: "rugby, touch, non-competitive",
      MET: 6.3
    },
    {
      description: "shuffleboard",
      MET: 3.0
    },
    {
      description: "skateboarding, general, moderate effort",
      MET: 5.0
    },
    {
      description: "skateboarding, competitive, vigorous effort",
      MET: 6.0
    },
    {
      description: "skating, roller",
      MET: 7.0
    },
    {
      description: "rollerblading, in-line skating, 14.4km/h(9.0mph), recreational pace",
      MET: 7.5
    },
    {
      description: "rollerblading, in-line skating, 17.7km/h(11.0mph), moderate pace, exercise training",
      MET: 9.8
    },
    {
      description: "rollerblading, in-line skating, 21.0to 21.7km/h(13.0to 13.6mph), fast pace, exercise training",
      MET: 12.3
    },
    {
      description: "rollerblading, in-line skating, 24.0km/h(15.0mph), maximal effort",
      MET: 14.0
    },
    {
      description: "skydiving, base jumping, bungee jumping",
      MET: 3.5
    },
    {
      description: "soccer, casual, general",
      MET: 7.0
    },
    {
      description: "softball or baseball, fast or slow pitch, general",
      MET: 5.0
    },
    {
      description: "softball, practice",
      MET: 4.0
    },
    {
      description: "softball, officiating",
      MET: 4.0
    },
    {
      description: "softball,pitching",
      MET: 6.0
    },
    {
      description: "sports spectator, very excited, emotional, physically moving  ",
      MET: 3.3
    },
    {
      description: "squash, general",
      MET: 7.3
    },
    {
      description: "table tennis, ping pong",
      MET: 4.0
    },
    {
      description: "tai chi, qi gong, general",
      MET: 3.0
    },
    {
      description: "tai chi, qi gong, sitting, light effort",
      MET: 1.5
    },
    {
      description: "tennis, general",
      MET: 7.3
    },
    {
      description: "tennis, doubles",
      MET: 6.0
    },
    {
      description: "tennis, doubles",
      MET: 4.5
    },
    {
      description: "tennis, singles",
      MET: 8.0
    },
    {
      description: "tennis, hitting balls, non-game play, moderate effort",
      MET: 5.0
    },
    {
      description: "trampoline, recreational",
      MET: 3.5
    },
    {
      description: "trampoline, competitive",
      MET: 4.5
    },
    {
      description: "volleyball",
      MET: 4.0
    },
    {
      description: "volleyball, competitive, in gymnasium",
      MET: 6.0
    },
    {
      description: "volleyball, non-competitive, 6- 9member team, general",
      MET: 3.0
    },
    {
      description: "volleyball, beach, in sand",
      MET: 8.0
    },
    {
      description: "wrestling (one match = 5minutes) ",
      MET: 6.0
    },
    {
      description: "wallyball, general",
      MET: 7.0
    },
    {
      description: "track and field (e.g., shot, discus, hammer throw) ",
      MET: 4.0
    },
    {
      description: "track and field (e.g., high jump, long jump, triple jump, javelin, pole vault) ",
      MET: 6.0
    },
    {
      description: "automobile or light truck (not asemi) driving",
      MET: 2.5
    },
    {
      description: "riding in acar or truck",
      MET: 1.3
    },
    {
      description: "riding in abus or train",
      MET: 1.3
    },
    {
      description: "flying airplane or helicopter",
      MET: 1.8
    },
    {
      description: "motor scooter, motorcycle",
      MET: 2.8
    },
    {
      description: "pushing plane in and out of hangar",
      MET: 6.0
    },
    {
      description: "truck, semi, tractor, > 1ton, or bus, driving",
      MET: 2.5
    },
    {
      description: "backpacking",
      MET: 7.0
    },
    {
      description: "backpacking, hiking or organized walking with adaypack",
      MET: 7.8
    },
    {
      description: "carrying 15 pound load (e.g. suitcase), level ground or downstairs",
      MET: 5.0
    },
    {
      description: "carrying 15 lb child, slow walking",
      MET: 2.3
    },
    {
      description: "carrying load upstairs, general",
      MET: 8.3
    },
    {
      description: "carrying 1to 15 lb load, upstairs",
      MET: 5.0
    },
    {
      description: "carrying 16 to 24 lb load, upstairs",
      MET: 6.0
    },
    {
      description: "carrying 25 to 49 lb load, upstairs",
      MET: 8.0
    },
    {
      description: "loading /unloading acar, implied walking",
      MET: 3.5
    },
    {
      description: "climbing hills, no load",
      MET: 6.3
    },
    {
      description: "climbing hills with 0to 9lb load",
      MET: 6.5
    },
    {
      description: "climbing hills with 10 to 20 lb load",
      MET: 7.3
    },
    {
      description: "climbing hills with 21 to 42 lb load",
      MET: 8.3
    },
    {
      description: "climbing hills with 42+ lb load",
      MET: 9.0
    },
    {
      description: "descending stairs",
      MET: 3.5
    },
    {
      description: "hiking, cross country",
      MET: 6.0
    },
    {
      description: "hiking or walking at anormal pace through fields and hillsides",
      MET: 5.3
    },
    {
      description: "bird watching, slow walk",
      MET: 2.5
    },
    {
      description: "marching, moderate speed, military, no pack",
      MET: 4.5
    },
    {
      description: "marching rapidly, military, no pack",
      MET: 8.0
    },
    {
      description: "pushing or pulling stroller with child or walking with children, 2.5to 3.1mph",
      MET: 4.0
    },
    {
      description: "pushing awheelchair, non-occupational  ",
      MET: 3.8
    },
    {
      description: "race walking",
      MET: 6.5
    },
    {
      description: "",
      MET: ""
    },
    {
      description: "stair climbing, using or climbing up ladder ",
      MET: 8.0
    },
    {
      description: "stair climbing, slow pace",
      MET: 4.0
    },
    {
      description: "stair climbing, fast pace",
      MET: 8.8
    },
    {
      description: "using crutches",
      MET: 5.0
    },
    {
      description: "walking, household",
      MET: 2.0
    },
    {
      description: "walking, less than 2.0mph, level, strolling, very slow",
      MET: 2.0
    },
    {
      description: "walking, 2.0mph, level, slow pace, firm surface",
      MET: 2.8
    },
    {
      description: "walking for pleasure",
      MET: 3.5
    },
    {
      description: "walking from house to car or bus, from car or bus to go places, from car or bus to and from the worksite",
      MET: 2.5
    },
    {
      description: "walking to neighbor’s house or family’s house for social reasons",
      MET: 2.5
    },
    {
      description: "walking the dog",
      MET: 3.0
    },
    {
      description: "walking, 2.5mph, level, firm surface",
      MET: 3.0
    },
    {
      description: "walking, 2.5mph, downhill",
      MET: 3.3
    },
    {
      description: "walking, 2.8to 3.2mph, level, moderate pace, firm surface",
      MET: 3.5
    },
    {
      description: "walking, 3.5mph, level, brisk, firm surface, walking for exercise",
      MET: 4.3
    },
    {
      description: "walking, 2.9to 3.5mph, uphill, 1to 5% grade",
      MET: 5.3
    },
    {
      description: "walking, 2.9to 3.5mph, uphill, 6% to 15% grade",
      MET: 8.0
    },
    {
      description: "walking, 4.0mph, level, firm surface, very brisk pace",
      MET: 5.0
    },
    {
      description: "walking, 4.5mph, level, firm surface, very, very brisk",
      MET: 7.0
    },
    {
      description: "walking, 5.0mph, level, firm surface",
      MET: 8.3
    },
    {
      description: "walking, 5.0mph, uphill, 3% grade",
      MET: 9.8
    },
    {
      description: "walking, for pleasure, work break",
      MET: 3.5
    },
    {
      description: "walking, grass track",
      MET: 4.8
    },
    {
      description: "walking, normal pace, plowed field or sand",
      MET: 4.5
    },
    {
      description: "walking, to work or class",
      MET: 4.0
    },
    {
      description: "walking, to and from an outhouse",
      MET: 2.5
    },
    {
      description: "17302",
      MET: " "
    },
    {
      description: "walking, for exercise, 3.5to 4mph, with ski poles, Nordic walking, level, moderate pace",
      MET: 4.8
    },
    {
      description: "walking, for exercise, 5.0mph, with ski poles, Nordic walking, level, fast pace",
      MET: 9.5
    },
    {
      description: "walking, for exercise, with ski poles, Nordic walking, uphill",
      MET: 6.8
    },
    {
      description: "walking, backwards, 3.5mph, level",
      MET: 6.0
    },
    {
      description: "walking, backwards, 3.5mph, uphill, 5% grade",
      MET: 8.0
    },
    {
      description: "boating, power, driving",
      MET: 2.5
    },
    {
      description: "boating, power, passenger, light",
      MET: 1.3
    },
    {
      description: "canoeing, on camping trip",
      MET: 4.0
    },
    {
      description: "canoeing, harvesting wild rice, knocking rice off the stalks",
      MET: 3.3
    },
    {
      description: "canoeing, portaging",
      MET: 7.0
    },
    {
      description: "canoeing, rowing, 2.0-3.9mph, light effort",
      MET: 2.8
    },
    {
      description: "canoeing, rowing, 4.0-5.9mph, moderate effort",
      MET: 5.8
    },
    {
      description: "canoeing, rowing, kayaking, competition, >6mph, vigorous effort",
      MET: 12.5
    },
    {
      description: "canoeing, rowing, for pleasure, general",
      MET: 3.5
    },
    {
      description: "diving, springboard or platform",
      MET: 3.0
    },
    {
      description: "kayaking, moderate effort",
      MET: 5.0
    },
    {
      description: "paddle boat",
      MET: 4.0
    },
    {
      description: "sailing, boat and board sailing, windsurfing, ice sailing, general",
      MET: 3.0
    },
    {
      description: "sailing, in competition",
      MET: 4.5
    },
    {
      description: "sailing, Sunfish/Laser/Hobby Cat, Keel boats, ocean sailing, yachting, leisure",
      MET: 3.3
    },
    {
      description: "skiing, water or wakeboarding",
      MET: 6.0
    },
    {
      description: "jet skiing, driving, in water",
      MET: 7.0
    },
    {
      description: "skindiving, moderate",
      MET: 11.8
    },
    {
      description: "skindiving, scuba diving, general",
      MET: 7.0
    },
    {
      description: "snorkeling",
      MET: 5.0
    },
    {
      description: "surfing, body or board, general",
      MET: 3.0
    },
    {
      description: "surfing, body or board, competitive",
      MET: 5.0
    },
    {
      description: "paddle boarding, standing",
      MET: 6.0
    },
    {
      description: "swimming laps, freestyle, fast, vigorous effort",
      MET: 9.8
    },
    {
      description: "swimming laps, freestyle, front crawl, slow, light or moderate effort",
      MET: 5.8
    },
    {
      description: "swimming, backstroke, general, training or competition",
      MET: 9.5
    },
    {
      description: "swimming, backstroke, recreational",
      MET: 4.8
    },
    {
      description: "swimming, breaststroke, recreational",
      MET: 5.3
    },
    {
      description: "swimming, butterfly, general",
      MET: 13.8
    },
    {
      description: "swimming, crawl, medium speed, ~50 yards/minute, vigorous effort",
      MET: 8.3
    },
    {
      description: "swimming, lake, ocean, river (Taylor Codes 280, 295) ",
      MET: 6.0
    },
    {
      description: "swimming, leisurely, not lap swimming, general",
      MET: 6.0
    },
    {
      description: "swimming, sidestroke, general",
      MET: 7.0
    },
    {
      description: "swimming, synchronized",
      MET: 8.0
    },
    {
      description: "swimming, treading water, fast, vigorous effort",
      MET: 9.8
    },
    {
      description: "swimming, treading water, moderate effort, general",
      MET: 3.5
    },
    {
      description: "tubing, floating on ariver, general",
      MET: 2.3
    },
    {
      description: "water aerobics, water calisthenics",
      MET: 5.5
    },
    {
      description: "water volleyball",
      MET: 3.0
    },
    {
      description: "water jogging",
      MET: 9.8
    },
    {
      description: "water walking, light effort, slow pace",
      MET: 2.5
    },
    {
      description: "water walking, moderate effort, moderate pace",
      MET: 4.5
    },
    {
      description: "water walking, vigorous effort, brisk pace",
      MET: 6.8
    },
    {
      description: "whitewater rafting, kayaking, or canoeing",
      MET: 5.0
    },
    {
      description: "windsurfing, not pumping for speed",
      MET: 5.0
    },
    {
      description: "windsurfing or kitesurfing, crossing trial",
      MET: 11.0
    },
    {
      description: "dog sledding, mushing",
      MET: 7.5
    },
    {
      description: "dog sledding, passenger",
      MET: 2.5
    },
    {
      description: "moving ice house, set up/drill holes",
      MET: 6.0
    },
    {
      description: "skating, ice, 9mph or less",
      MET: 5.5
    },
    {
      description: "skating, ice, general",
      MET: 7.0
    },
    {
      description: "skating, ice, rapidly, more than 9mph, not competitive",
      MET: 9.0
    },
    {
      description: "skating, speed, competitive",
      MET: 13.3
    },
    {
      description: "ski jumping, climb up carrying skis",
      MET: 7.0
    },
    {
      description: "skiing, general",
      MET: 7.0
    },
    {
      description: "skiing, cross country, 2.5mph, slow or light effort, ski walking",
      MET: 6.8
    },
    {
      description: "skiing, cross country, 4.0-4.9mph, moderate speed and effort, general",
      MET: 9.0
    },
    {
      description: "skiing, cross country, 5.0-7.9mph, brisk speed, vigorous effort",
      MET: 12.5
    },
    {
      description: "skiing, cross country, >8.0mph, elite skier, racing",
      MET: 15.0
    },
    {
      description: "skiing, cross country, hard snow, uphill, maximum, snow mountaineering",
      MET: 15.5
    },
    {
      description: "skiing, downhill, alpine or snowboarding, light effort, active time only",
      MET: 4.3
    },
    {
      description: "skiing, downhill, alpine or snowboarding, moderate effort, general, active time only",
      MET: 5.3
    },
    {
      description: "skiing, downhill, vigorous effort, racing",
      MET: 8.0
    },
    {
      description: "sledding, tobogganing, bobsledding, luge",
      MET: 7.0
    },
    {
      description: "snow shoeing, moderate effort",
      MET: 5.3
    },
    {
      description: "snow shoeing, vigorous effort",
      MET: 10.0
    },
    {
      description: "snowmobiling, driving, moderate",
      MET: 3.5
    },
    {
      description: "snowmobiling, passenger",
      MET: 2.0
    },
    {
      description: "snow shoveling, by hand, moderate effort",
      MET: 5.3
    },
    {
      description: "snow shoveling, by hand, vigorous effort",
      MET: 7.5
    },
    {
      description: "snow blower, walking and pushing",
      MET: 2.5
    },
    {
      description: "sitting in church, in service, attending aceremony, sitting quietly",
      MET: 1.3
    },
    {
      description: "sitting, playing an instrument at church",
      MET: 2.0
    },
    {
      description: "sitting in church, talking or singing, attending aceremony, sitting, active participation",
      MET: 1.8
    },
    {
      description: "sitting, reading religious materials at home",
      MET: 1.3
    },
    {
      description: "standing quietly in church, attending aceremony",
      MET: 1.3
    },
    {
      description: "standing, singing in church, attending aceremony, standing, active participation",
      MET: 2.0
    },
    {
      description: "kneeling in church or at home, praying",
      MET: 1.3
    },
    {
      description: "standing, talking in church",
      MET: 1.8
    },
    {
      description: "walking in church",
      MET: 2.0
    },
    {
      description: "walking, less than 2.0mph, very slow",
      MET: 2.0
    },
    {
      description: "walking, 3.0mph, moderate speed, not carrying anything",
      MET: 3.5
    },
    {
      description: "walking, 3.5mph, brisk speed, not carrying anything",
      MET: 4.3
    },
    {
      description: "walk/stand combination for religious purposes, usher",
      MET: 2.0
    },
    {
      description: "praise with dance or run, spiritual dancing in church",
      MET: 5.0
    },
    {
      description: "serving food at church",
      MET: 2.5
    },
    {
      description: "preparing food at church",
      MET: 2.0
    },
    {
      description: "washing dishes, cleaning kitchen at church",
      MET: 3.3
    },
    {
      description: "eating at church",
      MET: 1.5
    },
    {
      description: "eating/talking at church or standing eating, American Indian Feast days",
      MET: 2.0
    },
    {
      description: "cleaning church",
      MET: 3.3
    },
    {
      description: "general yard work at church",
      MET: 4.0
    },
    {
      description: "standing, moderate effort (e.g., lifting heavy objects, assembling at fast rate)",
      MET: 3.5
    },
    {
      description: "standing, moderate-to-heavy effort, manual labor, lifting ≥ 50 lbs, heavy maintenance",
      MET: 4.5
    },
    {
      description: "typing, electric, manual, or computer",
      MET: 1.3
    },
    {
      description: "sitting, meeting, general, and/or with talking involved",
      MET: 1.5
    },
    {
      description: "sitting, light office work, in general",
      MET: 1.5
    },
    {
      description: "sitting, moderate work",
      MET: 2.5
    },
    {
      description: "standing, light work (filing, talking, assembling)",
      MET: 2.3
    },
    {
      description: "sitting, child care, only active periods",
      MET: 2.0
    },
    {
      description: "standing, child care, only active periods",
      MET: 3.0
    },
    {
      description: "walk/run play with children, moderate, only active periods",
      MET: 3.5
    },
    {
      description: "walk/run play with children, vigorous, only active periods",
      MET: 5.8
    },
    {
      description: "standing, light/moderate work (e.g., pack boxes, assemble/repair, set up chairs/furniture)",
      MET: 3.0
    },
    {
      description: "standing, moderate (lifting 50 lbs., assembling at fast rate)",
      MET: 3.5
    },
    {
      description: "standing, moderate/heavy work",
      MET: 4.5
    },
    {
      description: "typing, electric, manual, or computer",
      MET: 1.3
    },
    {
      description: "walking, less than 2.0mph, very slow",
      MET: 2.0
    },
    {
      description: "walking, 3.0mph, moderate speed, not carrying anything",
      MET: 3.5
    },
    {
      description: "walking, 3.5mph, brisk speed, not carrying anything",
      MET: 4.3
    },
    {
      description: "walking, 2.5mph slowly and carrying objects less than 25 pounds",
      MET: 3.5
    },
    {
      description: "walking, 3.0mph moderately and carrying objects less than 25 pounds, pushing something",
      MET: 4.5
    },
    {
      description: "walking, 3.5mph, briskly and carrying objects less than 25 pounds",
      MET: 4.8
    },
    {
      description: "walk/stand combination, for volunteer purposes",
      MET: 3.0
    },
    {
      description: "Zumba - Cumbia, American Mix1",
      MET: 6.5
    },
    {
      description: "Zumba - Merengue, Salsa1",
      MET: 7.3
    },
    {
      description: "Kettlebell workout, interval or continuous kettlebell swings2,3",
      MET: 9.8
    }
  ];


  export default activityTypes;