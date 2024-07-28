import { write } from "fs"

const newsData = [
    {
        id: 1,
        title: "Judul Berita 1",
        category: "Kategori 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
        image: "/aset/hero.png",
        writer: "Nadya afriyani",
        date: "27 juni 2024"
      },
      {
        id: 2,
        title: "Judul Berita 2",
        category: "Kategori 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
        image: "/aset/hero.png",
        writer: "Nadya afriyani",
        date: "27 juni 2024"
      },
      {
        id: 3,
        title: "Judul Berita 3",
        category: "Kategori 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
        image: "/aset/hero.png",
        writer: "Nadya afriyani",
        date: "27 juni 2024"
      },
      {
        id: 4,
        title: "Judul Berita 4",
        category: "Kategori 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
        image: "/aset/hero.png",
        writer: "Nadya afriyani",
        date: "27 juni 2024"
      },
      {
        id: 5,
        title: "Judul Berita 5",
        category: "Kategori 5",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
        image: "/aset/hero.png",
        writer: "Nadya afriyani",
        date: "27 juni 2024"
      },
      {
        id: 6,
        title: "Judul Berita 6",
        category: "Kategori 6",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
        image: "/aset/hero.png",
        writer: "Nadya afriyani",
        date: "27 juni 2024"
      },
      {
        id: 7,
        title: "Judul Berita 7",
        category: "Kategori 7",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
        image: "/aset/hero.png",
        writer: "nadya afriyani",
        date: "27 juni 2024"
      },
      {
        id: 8,
        title: "Judul Berita 8",
        category: "Kategori 8",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
        image: "/aset/hero.png",
        writer: "nadya afriyani",
        date: "27 juni 2024"
      },
      {
        id: 9,
        title: "Judul Berita 9",
        category: "Kategori 9",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
        image: "/aset/hero.png",
        writer: "Nadya afriyani",
        date: "27 juni 2024"
      },
      {
        id: 10,
        title: "Judul Berita 10",
        category: "Kategori 10",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
        image: "/aset/hero.png",
        writer: "Nadya afriyani",
        date: "27 juni 2024"
      },
      {
        id: 11,
        title: "Judul Berita 11",
        category: "Kategori 11",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
        image: "/aset/hero.png",
        writer: "Nadya afriyani",
        date: "27 juni 2024"
      },
]

export default newsData