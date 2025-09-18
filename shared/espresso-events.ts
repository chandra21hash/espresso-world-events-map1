export interface EspressoEvent {
  event: string;
  city: string;
  country: string;
  coords: [number, number];
  date: string;
  status: "Past" | "Upcoming";
  link: string;
}

export const espressoEvents = {
  pastEvents: [
    {
      event: "Denver Meetup",
      city: "Denver",
      country: "USA",
      coords: [39.7392, -104.9903] as [number, number],
      date: "2023-06-20",
      status: "Past" as const,
      link: "https://luma.com/o2446knk"
    },
    {
      event: "SF Summit",
      city: "San Francisco",
      country: "USA",
      coords: [37.7749, -122.4194] as [number, number],
      date: "2023-09-12",
      status: "Past" as const,
      link: "https://luma.com/ethereum-10y-sanfrancisco"
    },
    {
      event: "NY Conference",
      city: "New York",
      country: "USA",
      coords: [40.7128, -74.0060] as [number, number],
      date: "2024-02-15",
      status: "Past" as const,
      link: "https://luma.com/yb17pn9g"
    },
    {
      event: "Cannes Forum",
      city: "Cannes",
      country: "France",
      coords: [43.5528, 7.0174] as [number, number],
      date: "2023-05-10",
      status: "Past" as const,
      link: "https://luma.com/h0lmohx9"
    },
    {
      event: "Bangkok Talk",
      city: "Bangkok",
      country: "Thailand",
      coords: [13.7563, 100.5018] as [number, number],
      date: "2024-04-18",
      status: "Past" as const,
      link: "https://luma.com/sequencing_day"
    },
    {
      event: "Brussels Meetup",
      city: "Brussels",
      country: "Belgium",
      coords: [50.8503, 4.3517] as [number, number],
      date: "2024-03-02",
      status: "Past" as const,
      link: "https://luma.com/ud8p6oww"
    },
    {
      event: "Berlin Workshop",
      city: "Berlin",
      country: "Germany",
      coords: [52.5200, 13.4050] as [number, number],
      date: "2024-07-23",
      status: "Past" as const,
      link: "https://luma.com/u407uyxp"
    }
  ],
  upcomingEvents: [
    {
      event: "Brewing the Base Layer | Espresso Happy Hour",
      city: "Seoul",
      country: "Korea",
      coords: [37.5665, 126.9780] as [number, number],
      date: "2025-09-20",
      status: "Upcoming" as const,
      link: "https://luma.com/e0u6mnoc"
    },
    {
      event: "Buenos Aires Con",
      city: "Buenos Aires",
      country: "Argentina",
      coords: [-34.6037, -58.3816] as [number, number],
      date: "2025-12-05",
      status: "Upcoming" as const,
      link: "https://x.com/EspressoSys"
    }
  ]
};