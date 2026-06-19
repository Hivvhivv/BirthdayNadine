import { motion } from "motion/react";
import {
  ArrowLeft,
  Heart,
  Download,
  Share2,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface PhotoGalleryProps {
  onBackClick: () => void;
}

interface Photo {
  src: string;
  alt: string;
  caption: string;
  hoverText: string;
  tall?: boolean;
}

interface Category {
  id: string;
  title: string;
  emoji: string;
  coverImage: string;
  description: string;
  photos: Photo[];
}

export function PhotoGallery({
  onBackClick,
}: PhotoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    string | null
  >(null);

  const categories: Category[] = [
    {
      id: "FIrst",
      title: "Our First Meet",
      emoji: "🧚‍♀️",
      coverImage:
        "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781621815/first_gotbkk.png",
      description: "A simple hello that turned into countless unforgettable memories.",
      photos: [
        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781622322/Screenshot_2021-06-11-19-49-13-23_hzthwt.jpg",
          alt: "Pim",
          caption: "Gift Hunting PIM 🎁",
          hoverText: "That day we went around looking for the gift he wanted.",
          tall: true,
        }, 

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781623103/First_draw_moaoas.png",
          alt: "Draw",
          caption: "First Artwork 🎨",
          hoverText: "The first drawing you made for me, a gift filled with creativity, effort, and love. but inside there was an unknown person",
        },
        
        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781623322/Screenshot_2022-05-24-18-47-41-41_99c04817c0de5652397fc8b56c3b3817_ywz0em.jpg",
          alt: "Couple with friends",
          caption: "My Calon pacar gueh with my friends 👫",
          hoverText: "A wonderful day spent together, filled with laughter and friendship",
          tall: true,
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781623731/Screenshot_2026-06-16_222830_d33ic7.png",
          alt: "First Holding",
          caption: "Holding Hands Modus Nadine💕",
          hoverText: "A simple touch that made my heart feel closer to yours than ever before",
          tall: true,
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781624137/IMG-20220918-WA0076_yt66hi.jpg",
          alt: "note",
          caption: "First Note From You📝",
          hoverText: "Pertama kali kamu memberikan catatan kecil yang penuh perhatian di dalam ulang tahunku",
          tall: true,
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781624329/Screenshot_2022-10-06-20-02-09-69_1c337646f29875672b5a61192b9010f9_deqlyd.jpg",
          alt: "New trend",
          caption: "First Trend We Followed👗",
          hoverText: "First time we posted about the october trend, and we look so cute in that picture",
          tall: true,
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781624690/apa_r1lzyg.png",
          alt: "Pim2",
          caption: "Whatttt ?????????? ",
          hoverText: "no description",
          tall: true,
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781625109/Screenshot_2026-06-16_225130_az4x4m.png",
          alt: "Recreate Pim",
          caption: "Recreate Pim with relationship status",
          hoverText: "HAHAHA Akhirnya ni yaa recreate foto pim dengan status baru",
          tall: true,
        },
      ],
    },
    {
      id: "dates",
      title: "Romantic Dinners",
      emoji: "🍽️",
      coverImage:
        "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781626818/%D0%A3%D0%B6%D0%B8%D0%BD_%D0%BF%D1%80%D0%B8_%D1%81%D0%B2%D0%B5%D1%87%D0%B0%D1%85___Candlelight_Dinner_ge26mp.jpg",
      description: "Every dinner date became a special memory, filled with love, smiles, and meaningful conversations.",
      photos: [
        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781631914/IMG_0356_ecsdxr.jpg",
          alt: "Romantic dinner with candles",
          caption: "Our First Anniversary Dinner ✨",
          hoverText: "The perfect way to celebrate our first milestone, surrounded by love, smiles, and happiness",
        },
        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781632199/IMG_1166_czljdo.heic",
          alt: "Our Iftar Together ",
          caption: "Date Night Magic",
          hoverText: "A special Ramadan evening filled with good food ",
          tall: true,
        },
        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781632247/IMG_2413_wjblbm.heic",
          alt: "Birthday Dinner",
          caption: "My Birthday Dinner 🎂",
          hoverText: "A special birthday celebration made even more meaningful because I got to spend it with you.",
        },

       {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781632631/IMG_5139_qm75fd.heic",
          alt: "My Girlfriend's Birthday",
          caption: "My Girlfriend's Birthday Dinner ❤️",
          hoverText: "Celebrating the most special person in my life with a wonderful evening filled with love",
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781632848/IMG_2556_snhudk.heic",
          alt: "gorlfriend's ",
          caption: "My Girl's Special Day",
          hoverText: "Seeing your smile across the table was all I needed to make the night perfect.",
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781632899/IMG_8694_kjb0ey.heic",
          alt: "Anniversary 2",
          caption: "Another Year with You ❤️",
          hoverText: "One more year of love, countless memories, and a million reasons to be thankful for having you by my side",
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781633157/IMG_4089_fdd6yp.heic",
          alt: "Celebrate",
          caption: "Celebrating Her ❤️🎂",
          hoverText: "A special dinner to celebrate the amazing girl who makes every day brighter.",
        },

       {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781633283/IMG_5675_qz8m6x.heic",
          alt: "Romanti",
          caption: "Celebrating Us 🥂",
          hoverText: "Sunny afternoons and perfect sunsets in the park with my love",
        },

       {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781633411/IMG_2830_sry2sl.heic",
          alt: "sec iftar",
          caption: "Our Second Iftar Together 🌙✨",
          hoverText: "A simple meal, a beautiful evening, and another memory added to our story",
        },

               {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781633444/IMG_5269_u7z5pg.heic",
          alt: "sec my birthday",
          caption: "My Special Birthday Night 🎂🌙",
          hoverText: "The perfect birthday celebration, sharing delicious food and beautiful moments with you.",
        },

      ],
    },
    {
      id: "beach",
      title: "My Favorite One",
      emoji: "💞",
      coverImage:
        "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781752864/download_7_avxh9s.jpg",
      description: "The prettiest part of my gallery. 🤍",
      photos: [
        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781752441/IMG-20230612-WA0022_jvor5e.jpg",
          alt: "my fav",
          caption: "Pretty as Always 🥰",
          hoverText: "Somehow she shines brighter than the sun, even on the cloudiest days",
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781753246/IMG-20221029-WA0045_ppuwu0.jpg",
          alt: "My Sunshine",
          caption: "My Sunshine 🌞",
          hoverText: "Bringing warmth wherever she goes, just like the sun on a beautiful day",
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781753428/IMG-20221031-WA0043_oqa3zb.jpg",
          alt: "Happiness",
          caption: "Happiness in Her Smile 😊",
          hoverText: "She turns ordinary days into beautiful memories.",
        },

       {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781753597/IMG-20230129-WA0025_1_exhuwg.jpg",
          alt: "Lovely",
          caption: "My Lovely Nadine 💖",
          hoverText: "The best part of every chapter in my life is having you by my side, making every moment more beautiful and meaningful",
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781753768/IMG-20221107-WA0067_vhmvo0.jpg",
          alt: "Pretty Girl",
          caption: "Pretty Girl 😍",
          hoverText: "Looking perfect in every little moment, just like she does in this photo",
        },

       {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781754072/IMG-20230630-WA0041_xsjhj6.jpg",
          alt: "Beautiful Moments",
          caption: "Beautiful Moments",
          hoverText: "Too beautiful and precious to be real.",
        },
       {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781754203/IMG-20230708-WA0097_wpa1np.jpg",
          alt: "Soft Smile",
          caption: "Soft Smile 😊",
          hoverText: "My favorite kind of happiness captured.",
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781754434/IMG-20230905-WA0070_bdfeur.jpg",
          alt: "Lucky Me",
          caption: "Lucky Me 😍",
          hoverText: "Sometimes I still can't believe you're mine and that I get to call you my girlfriend.",
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781754896/IMG-20230924-WA0044_mtgyrk.jpg",
          alt: "Simply Perfect",
          caption: "Simply Perfect 😍",
          hoverText: "Perfect in all the ways that matter most.",
        },

       {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781755109/IMG-20231221-WA0076_cyxurd.jpg",
          alt: "Forever and Always",
          caption: "Forever and Always ❤️",
          hoverText: "My favorite person through every season of life, my forever and always.",
        },

      {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781770963/IMG-20240620-WA0113_ciq2lb.jpg",
          alt: "My Daily Dose",
          caption: "My Daily Dose of Happiness 😊",
          hoverText: "comfort, and endless admiration in one beautiful person.",
        },

      {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781770962/IMG-20250621-WA0017_czqfzh.jpg",
          alt: "Lucky Me",
          caption: "Lucky Me 😍",
          hoverText: "Sometimes I still can't believe you're mine and that I get to call you my girlfriend.",
        },

      {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781771139/IMG-20250719-WA0045_dafcjs.jpg",
          alt: "Bright Eyes",
          caption: "Bright Eyes",
          hoverText: "Eyes that tell stories without saying a word 👀",
        },

      {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781771136/IMG-20250919-WA0115_jylzfu.jpg",
          alt: "My Favorite Chapter",
          caption: "My Favorite Chapter 📖",
          hoverText: "The most beautiful part of my story is the chapter where you entered and made everything better.",
        },

              {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781771137/IMG-20250806-WA0020_kax3yz.jpg",
          alt: "Effortlessly Beautiful",
          caption: "Effortlessly Beautiful",
          hoverText: "You make looking beautiful seem so easy, just like you do in this photo.",
        },

                      {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781771529/IMG-20260516-WA0134_ffean1.jpg",
          alt: "Pretty Little Thing",
          caption: "Pretty Little Thing",
          hoverText: "You're the prettiest thing I've ever seen, and you don't even know it.",
        },

       {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781771529/IMG-20251229-WA0043_zvgms7.jpg",
          alt: "Sweet Like You",
          caption: "Sweet Like You",
          hoverText: "You're so sweet, it's like you were made just for me.",
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781771621/IMG_0038_df77hf.jpg",
          alt: "Timeless Beauty",
          caption: "Timeless Beauty",
          hoverText: "You're a timeless beauty, and you always look stunning.",
         },
      ],
    },


    {
      id: "Tiny Sunshine",
      title: "Tiny Sunshine",
      emoji: "✨",
      coverImage:
        "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781803573/%C3%87%C4%B0%C3%87EK%C3%87%C4%B0_KIZ_-_WALPAPER_KIZ_jpuoff.jpg",
      description: "The little girl who grew up to be my favorite person in the world.",
      photos: [
        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781803869/IMG-20230622-WA0016_idgas5.jpg",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781803870/IMG-20230622-WA0056_uokuij.jpg ",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781803869/IMG-20230622-WA0067_l6e1or.jpg",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781806338/IMG-20210417-WA0074_obx3mg.jpg",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781803869/IMG-20230622-WA0018_gbdalx.jpg",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781803870/IMG-20230622-WA0064_byphfr.jpg",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781804039/IMG-20231007-WA0080_inx4f9.jpg",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781806441/Screenshot_2026-06-19_011342_gnr9ba.png",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781805740/Screenshot_2023-07-09-18-47-16-56_1c337646f29875672b5a61192b9010f9_dv1fi7.jpg",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781803870/IMG-20230622-WA0066_hczath.jpg",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781804060/IMG-20231007-WA0081_dmarjc.jpg",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781806650/Screenshot_2026-06-19_011631_ggttkg.png",
          alt: " ",
          caption: " ",
          hoverText: "",
          tall: true,
        },
      ],
    },
    {
      id: "nature",
      title: "Nature Escapes",
      emoji: "🌳",
      coverImage:
        "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781771942/Choose_peace_not_love_ucajga.jpg",
      description: "Peaceful moments in nature",
      photos: [
        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874441/IMG_1337_mv0bwy.heic",
          alt: "Quiet Adventures",
          caption: "Quiet Adventures",
          hoverText: "Escaping the noise and embracing the beauty around us.",
          tall: true,
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874441/IMG_0064_wdooaa.heic",
          alt: "Endless Skies",
          caption: "Endless Skies",
          hoverText: "Where the horizon stretches farther than our worries",
          tall: true,
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874442/IMG_1710_v15hkk.heic",
          alt: "Peaceful Places",
          caption: "Peaceful Places",
          hoverText: "Some places have a way of calming the soul, and this is one of them.",
          tall: true,
        },
       
        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874443/IMG_1152_khin87.heic",
          alt: "Somewhere Beautiful",
          caption: "Somewhere Beautiful",
          hoverText: "A place worth getting lost in for a while, just to find ourselves again.",
          tall: true,
        },

        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874443/IMG_3347_ymeqbf.heic",
          alt: "Green Escape",
          caption: "Green Escape",
          hoverText: "A breath of fresh air and endless greenery to remind us of the beauty in simplicity.",
          tall: true,
        },

               {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874444/IMG_3594_etwwwk.jpg",
          alt: "Nature's Masterpiece",
          caption: "Nature's Masterpiece",
          hoverText: "No artist could paint something this perfect ",
          tall: true,
        },

               {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874445/Screenshot_2026-06-19_194830_mg2y04.png",
          alt: "The Great Escape",
          caption: "The Great Escape",
          hoverText: "A place to unwind and escape the hustle and bustle of everyday life.",
          tall: true,
        },

               {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874445/IMG_4786_srrv1b.heic",
          alt: "Pretty in the Wild",
          caption: "Pretty in the Wild",
          hoverText: "Somehow the flowers have competition today, because you look just as beautiful",
          tall: true,
        },

               {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874445/IMG_5178_drcc62.heic",
          alt: "Pretty View",
          caption: "Pretty View",
          hoverText: "Not sure if I'm looking at nature or perfection, but either way, I'm mesmerized.",
          tall: true,
        },

               {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874446/IMG_1989_syghvo.heic",
          alt: "Beautiful Distraction",
          caption: "Beautiful Distraction",
          hoverText: "A moment of beauty that steals the show.",
          tall: true,
        },

               {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874447/Screenshot_2026-06-19_200226_btppjb.png",
          alt: "Camera's Favorite",
          caption: "Camera's Favorite",
          hoverText: "Somehow every photo gets better with her in it",
          tall: true,
        },

               {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874448/IMG_0164_jvuly2.heic",
          alt: "Mysterious Encounter",
          caption: "Mysterious Encounter",
          hoverText: "Exploring places that leave me speechless, but you always manage to leave me even more breathless.",
          tall: true,
        },

               {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781874449/IMG_0058_zgfwre.heic",
          alt: "Aquarium Date",
          caption: "Aquarium Date",
          hoverText: "Surrounded by thousands of fish, yet I only noticed one ",
          tall: true,
        },
      ],
    },
    {
      id: "special",
      title: "Special Moments",
      emoji: "💝",
      coverImage:
        "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781773807/download_8_tcgisw.jpg",
      description: "Those unforgettable intimate moments",
      photos: [
        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781877799/IMG-20230413-WA0079_bori7d.jpg",
          alt: "Bukber trio",
          caption: "Bukber trio",
          hoverText: "A special Ramadan evening filled with us, good food, and unforgettable memories.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781878037/IMG_0015_m9gojh.heic",
          alt: "My Wisuda Gweh",
          caption: "My Wisuda Gweh",
          hoverText: "Celebrating my graduation with my favorite people, especially you, who made the day even more special.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781878130/IMG-20230708-WA0083_s51txc.jpg",
          alt: "First Kondangan Koko ku",
          caption: "First Kondangan Koko ku",
          hoverText: "Another beautiful memory with you. Watching the bride and groom today, I couldn't help but wish that one day, it will be us celebrating our own special day together. ✨🤍",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781878389/IMG_7892_wrerqa.heic",
          alt: "Special Moment",
          caption: "Special Moment",
          hoverText: "A moment that kita pergi belorahraga bounching bareng, and it was so much fun! I love how we can be silly together and create memories that make us laugh for years to come.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781878795/IMG_0209_v7ktsx.heic",
          alt: "Special Moment with my sister",
          caption: "Special Moment with my sister",
          hoverText: "A moment shared with my sister, filled with laughter and love.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781878906/IMG_1273_d2cqvv.heic",
          alt: "first our anniversary",
          caption: "First Our Anniversary",
          hoverText: "Our first anniversary together, a milestone we celebrate with joy and love.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781879055/IMG-20231230-WA0003_zggnfa.jpg",
          alt: "celebrate my friend's birthday",
          caption: "Celebrating My Friend's Birthday",
          hoverText: "A fun celebration with my dear friend, filled with laughter",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781883301/IMG_5141_gxefsv.heic",
          alt: "your birthday dinner",
          caption: "Your Birthday Dinner",
          hoverText: "A special dinner to celebrate your birthday, filled with love and delicious food.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781883302/IMG_1793_wcydt6.heic",
          alt: "my birthday dinner",
          caption: "My Birthday Dinner",
          hoverText: "A special dinner to celebrate my own birthday, filled with love and delicious food.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781883301/IMG-20240510-WA0030_ef3axn.jpg",
          alt: "MRT DATE",
          caption: "MRT DATE",
          hoverText: "A special moment shared with my MRT, walking together in gbk and another food hunting, and it was so much fun! I love how we can be silly together and create memories that make us laugh for years to come.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781883302/IMG_4128_lxghtb.heic",
          alt: "Capping Day",
          caption: "Capping Day",
          hoverText: "A memorable day filled with excitement and celebration.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781883305/IMG_1165_cm4vbm.heic",
          alt: "Our Proper Iftar",
          caption: "Our Proper Iftar",
          hoverText: "A special moment shared during our proper Iftar, filled with gratitude and delicious food.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781884305/IMG-20240914-WA0069_zagnuz.jpg",
          alt: "Kidzania double Date",
          caption: "Kidzania double Date",
          hoverText: "A fun day spent at Kidzania with our friends, filled with laughter and excitement.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781884439/IMG-20241112-WA0049_npzb3h.jpg",
          alt: "photo with my friend",
          caption: "photo with my friend",
          hoverText: "A fun moment shared with my friend, but my favorite part was being with you, making the day even more special.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781884509/IMG-20241216-WA0025_nprdty.jpg",
          alt: "scooter date",
          caption: "Scooter Date",
          hoverText: "A fun day out on our scooters, exploring the park together.",
          tall: true,
        },


                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781884657/copy_of_img-20250115-wa0065_fvvl19.jpg",
          alt: "Bekasoy Sushi Date",
          caption: "Bekasoy Sushi Date",
          hoverText: "A delicious Sushi meal at Bekasoy, sharing bites and great conversation.",
          tall: true,
        },

                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781884768/IMG-20250919-WA0087_wu3k4e.jpg",
          alt: "Hachi Date",
          caption: "Hachi Date",
          hoverText: "kapan lagi nyamper pacar ngekos ke sunter sambil bawa buket bunga, and it was so much fun!",
          tall: true,
        },

                        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781884908/IMG-20251016-WA0060_ishho9.jpg",
          alt: "Binals jualan baju",
          caption: "Binals jualan baju",
          hoverText: "A fun day after at the bazaar, sharing laughs and enjoying the atmosphere together.",
          tall: true,
        },

                                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781885132/IMG-20260321-WA0313_kho53w.jpg",
          alt: "Eid Mubarak Celebration",
          caption: "Eid Mubarak Celebration",
          hoverText: "Celebrating Eid Mubarak with Your family,Panik banget tapi First time dateng ke acara keluarga kamu",
          tall: true,
        },

        
                        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781885235/IMG-20260429-WA0071_tm5fu6.jpg",
          alt: "my birthday dinner again",
          caption: "My Birthday Dinner Again",
          hoverText: "Enjoying a delicious birthday dinner with my favorite people in the world.",
          tall: true,
        },

                                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781885291/IMG_8697_c9jlgi.heic",
          alt: "our anniversary dinner",
          caption: "Our Anniversary Dinner",
          hoverText: "Celebrating our anniversary with a romantic dinner, maaf disini km kurang menyukainya",
          tall: true,
        },

        
                        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781885418/IMG_3407_av2xyy.heic",
          alt: "painting date",
          caption: "Painting Date",
          hoverText: "Spending a creative afternoon painting with my favorite person in home, and it was so much fun! I love how we can be silly together and create memories that make us laugh for years to come.",
          tall: true,
        },

                                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781885494/IMG_4022_q1v1z0.heic",
          alt: "Merakit bunga bersama",
          caption: "Merakit bunga bersama",
          hoverText: "Spending a lovely afternoon assembling beautiful flowers together and the result was stunning",
          tall: true,
        },

        
                        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781885573/IMG_1337_1_i3jawb.heic",
          alt: "Trip bandung together",
          caption: "Trip bandung together",
          hoverText: "Exploring the beautiful city of Bandung with my favorite person.",
          tall: true,
        },

                                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781885647/IMG_2830_sbxucf.heic",
          alt: "Our another iftar together",
          caption: "Our another iftar together",
          hoverText: "Sharing a delicious iftar Pizza and this pizza became our favorite pizza",
          tall: true,
        },

        
                        {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781885834/IMG-20260602-WA0048_ybb5ws.jpg",
          alt: "My First Bekel di Kantor",
          caption: "My First Bekel di Kantor",
          hoverText: "My first bekel at the office made by my girlfriend's hands with heart and love, and it was so delicious!",
          tall: true,
        },

                                {
          src: "https://res.cloudinary.com/dv7ul6sck/image/upload/q_auto/f_auto/v1781885995/IMG-20260614-WA0012_q5sabi.jpg",
          alt: "bonus",
          caption: "BONUSS BTR JUARAAAAA",
          hoverText: "ANJAYY BTR JUARA MPL UNTUK PERTAMA KALINYA, AND IT WAS SO MUCH FUN!",
          tall: true,
        },

      ],
    },
  ];

  const currentCategory = categories.find(
    (cat) => cat.id === selectedCategory,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-300 to-rose-400 p-6 sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            onClick={
              selectedCategory
                ? () => setSelectedCategory(null)
                : onBackClick
            }
            variant="ghost"
            className="text-white hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            {selectedCategory
              ? "Back to Categories"
              : "Back to Celebration"}
          </Button>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold text-white text-center"
          >
            {selectedCategory
              ? currentCategory?.title
              : "Our Love Story Gallery"}{" "}
            💕
          </motion.h1>

          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <Share2 size={18} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <Download size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        {!selectedCategory ? (
          // Category Selection View
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <p className="text-xl text-pink-700 max-w-3xl mx-auto">
                Choose a category to explore our beautiful
                memories together, Nadine! 💖
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                  onClick={() =>
                    setSelectedCategory(category.id)
                  }
                >
                  <Card className="overflow-hidden border-pink-200 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                    <div className="relative h-80">
                      <ImageWithFallback
                        src={category.coverImage}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="text-5xl mb-3 text-center group-hover:scale-125 transition-transform duration-300">
                          {category.emoji}
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-2 drop-shadow-lg">
                          {category.title}
                        </h3>
                        <p className="text-sm text-center text-pink-100 drop-shadow-lg">
                          {category.description}
                        </p>
                        <p className="text-xs text-center text-pink-200 mt-3 drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to view {category.photos.length}{" "}
                          {category.photos.length === 1
                            ? "photo"
                            : "photos"}{" "}
                          📸
                        </p>
                      </div>

                      {/* Floating Hearts */}
                      <motion.div
                        className="absolute top-4 right-4 text-white/90"
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                        }}
                      >
                        <Heart
                          size={28}
                          fill="currentColor"
                          className="drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Footer Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16 mb-8"
            >
              <div className="inline-flex items-center space-x-3 text-pink-600 mb-4">
                <Heart size={28} fill="currentColor" />
                <span className="text-2xl font-bold">
                  6 Beautiful Collections for Nadine
                </span>
                <Heart size={28} fill="currentColor" />
              </div>
              <motion.p
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-pink-500 text-xl italic"
              >
                Each category is filled with love and memories
                💕✨
              </motion.p>
            </motion.div>
          </>
        ) : (
          // Photo Gallery View for Selected Category
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <div className="text-6xl mb-4">
                {currentCategory?.emoji}
              </div>
              <p className="text-xl text-pink-700 max-w-3xl mx-auto">
                {currentCategory?.description}
              </p>
            </motion.div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {currentCategory?.photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="break-inside-avoid group"
                >
                  <Card className="overflow-hidden border-pink-200 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative">
                      <ImageWithFallback
                        src={photo.src}
                        alt={photo.alt}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                          photo.tall ? "h-80" : "h-64"
                        }`}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Heart Icon */}
                      <motion.div
                        className="absolute top-3 right-3 text-white/90"
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                        }}
                      >
                        <Heart
                          size={24}
                          fill="currentColor"
                          className="drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.div>

                      {/* Caption and Hover Text */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-lg font-semibold text-center drop-shadow-lg mb-2">
                          {photo.caption}
                        </p>
                        <p className="text-sm text-center text-pink-100 drop-shadow-lg italic">
                          {photo.hoverText}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Category Footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16 mb-8"
            >
              <div className="inline-flex items-center space-x-3 text-pink-600 mb-4">
                <Heart size={28} fill="currentColor" />
                <span className="text-2xl font-bold">
                  Made with endless love for Nadine
                </span>
                <Heart size={28} fill="currentColor" />
              </div>
              <motion.p
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-pink-500 text-xl italic"
              >
                Each picture holds a thousand words of love 💕✨
              </motion.p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}