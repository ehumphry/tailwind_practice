const occupations = [
  {
    "id": 0,
    "title": "Software Engineer",
    "description": "A software engineer designs, develops, and maintains computer programs and systems.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 1,
    "title": "Doctor",
    "description": "A doctor diagnoses and treats illnesses and injuries to improve and maintain the health of their patients.",
    "jobOutlook": null
  },
  {
    "id": 2,
    "title": "Teacher",
    "description": "A teacher educates and guides students in a particular subject or skill, often in a school or educational setting.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 3,
    "title": "Nurse",
    "description": "A nurse provides medical care and support to patients in hospitals, clinics, and other healthcare settings.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 4,
    "title": "Plumber",
    "description": "A plumber installs, maintains, and repairs plumbing systems and fixtures, such as pipes, water heaters, and toilets.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 5,
    "title": "Electrician",
    "description": "An electrician installs, maintains, and repairs electrical systems and equipment, such as wiring, circuit breakers, and lighting fixtures.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 6,
    "title": "Chef",
    "description": "A chef creates and prepares a wide range of dishes and meals, often working in a restaurant or professional kitchen setting.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 7,
    "title": "Carpenter",
    "description": "A carpenter builds, installs, and repairs structures and fixtures made from wood, such as floors, walls, and cabinets.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 8,
    "title": "Mechanic",
    "description": "A mechanic diagnoses and repairs vehicles, such as cars, trucks, and motorcycles, to ensure they are running smoothly and safely.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 9,
    "title": "Dentist",
    "description": "A dentist examines, diagnoses, and treats problems with teeth and gums, often providing preventive care to help maintain good oral health.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 10,
    "title": "Accountant",
    "description": "An accountant tracks, analyzes, and reports on financial data, often providing advice and guidance on tax and financial planning.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 11,
    "title": "Truck Driver",
    "description": "A truck driver operates a commercial vehicle to transport goods and materials over long distances, often following strict schedules and regulations.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 12,
    "title": "Janitor",
    "description": "A janitor maintains cleanliness and order in a building or facility, often performing tasks such as cleaning, sweeping, and garbage disposal.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 13,
    "title": "Mechanical Engineer",
    "description": "A mechanical engineer designs, builds, and tests mechanical systems, such as engines, machines, and tools, often using computer simulations and prototypes.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
  },
  {
    "id": 14,
     "title": "Air Traffic Controller",
    "description": "An air traffic controller monitors and directs aircraft in the air and on the ground, ensuring safe and efficient travel for passengers and cargo.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
    },
  {
    "id": 15,
    "title": "Social Worker",
    "description": "A social worker helps people in need, often providing support, advice, and assistance with issues such as housing, healthcare, and mental health.",
    "jobOutlook": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus in massa tincidunt, eu aliquet dui porttitor. Sed sed tellus ac mauris sollicitudin vehicula. Nam sed fermentum ligula. Suspendisse potenti. Fusce aliquet est et massa tempus auctor. Aliquam erat volutpat. Aliquam erat volutpat. Aenean id justo velit. Proin ornare magna vel nisl tincidunt, at vehicula leo efficitur. Integer a eros nisi. In ut leo turpis. Vestibulum a turpis fermentum, sodales urna et, elementum nisi. Proin in lectus quis mauris vehicula eleifend."
    }
  ];
export default occupations