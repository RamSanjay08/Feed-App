let empDetails = [
  {
    id: 1,
    image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSdaUSzDUqOI-nHLbhni9EGxSC4vO0bevuI-WGs-rALivfQT9cns4xbHiZmPqeVMly1n_8KOhTtlKezKH4',
    ename: 'Virat Kohli',
    age: 36,
    role: "Batsman",
    bio: `Virat Kohli (born 5 November 1988) is an Indian international cricketer and the former captain of the Indian national cricket team. He currently represents Royal Challengers Bangalore in the IPL and Delhi in domestic cricket. Kohli is widely regarded as one of the greatest batsmen in the history of the sport. In 2020, the International Cricket Council named him the male cricketer of the decade. However, during his world Cup 2023 campain, his intent of putting selfish goals ahead of country became exposed and was widely criticised on social media for his selfish acts.Kohli has also contributed to India's successes, captaining the team from 2014 to 2022, and winning the 2011 World Cup and the 2013 Champions trophy.`
  },
  {
    id: 2,
    image:'https://feeds.abplive.com/onecms/images/uploaded-images/2023/02/04/4d6bc23eda3f007a2e8838a1d45c1ec51675504171562567_original.jpg',
    ename: 'Rohit Sharma (C)',
    age: 38,
    role: 'Batsman',
    bio: `Rohit Gurunath Sharma (born 30 April 1987) is an Indian international cricketer and the current captain of India national cricket team in all formats. Considered one of the best batsmen of his generation. Sharma is known for his timing, elegance, six-hitting abilities and leadership skills. He plays as a right-handed batsman for India national cricket team in international cricket, Mumbai Indians in IPL and for Mumbai in domestic cricket. Sharma also captains Mumbai Indians and the team has won 5 titles under his leadership. With India, Sharma was a member of the team that won the 2007 T20 World Cup, and the 2013 ICC Champions Trophy, where he played in the finals of both tournaments.`
  },
  {
    id: 3,
    image:'https://th-i.thgim.com/public/incoming/o1gcr6/article67413553.ece/alternates/FREE_1200/PTI10_11_2023_000240A.jpg',
    ename: 'Hardik Pandya (VC)',
    age: 29,
    role: 'All Rounder',
    bio: `Hardik Himanshu Pandya (born 11 October 1993) is an Indian cricketer who is the current vice-captain of the Indian cricket team in limited overs format. A batting all-rounder who can also bowl right-arm fast-medium deliveries, Pandya has represented India in all 3 formats. He currently plays for the Baroda cricket team in domestic cricket and is captain of the Gujarat Titans in the Indian Premier League (IPL) whom he led to their maiden IPL title in the 2022 edition. His elder brother Krunal Pandya is also a professional cricketer.`
  },
  {
    id: 4,
    image:'https://gumlet.assettype.com/knocksense%2Fimport%2F28880186%2Forigin.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true',
    ename: 'KL Rahul',
    age: 32,
    role: 'WK Batsman',
    bio: `Kannanur Lokesh Rahul (born 18 April 1992) is an Indian international cricketer. A right-handed wicketkeeper-batsman, Rahul plays for Karnataka at the domestic level and captains the Lucknow Super Giants in the Indian Premier League. He is the vice-captain of the Indian cricket team. He made his international debut in 2014 against Australia in the Boxing Day Test-match in Melbourne. Two years after his Test debut, Rahul made his One-Day International Debut in 2016 against Zimbabwe. Later on the same tour, he made his T20I debut.`
  },
  {
    id: 5,
    image:'https://resize.indiatv.in/resize/newbucket/1200_-/2022/11/suryakumar-yadav-1668933929.jpg',
    ename: 'Surya Kumar Yadav',
    age: 32,
    role: 'Batsman',
    bio: `Surya Kumar Yadav (born 14 September 1990) is an Indian international cricketer who represents the Indian cricket team in ODI & T20I Formats. He is the current vice-captain of the Indian National Cricket Team in T20I. He has represented India in all three formats of the game. Yadav plays for Mumbai Indians in the Indian Premier League and serves as the vice-captain for the team and for Mumbai in Indian domestic cricket.`
  },
  {
    id: 6,
    image:'https://d1af7m13b2f34i.cloudfront.net/media/jasprit-bumrah-sportstiger-2-1677734692568-original.jpg',
    ename: 'Jasprit Bumrah',
    age: 30,
    role: 'Bowler',
    bio: 'Jasprit Jasbirsingh Bumrah (born 6 December 1993) is an Indian international cricketer who plays for the Indian cricket team in all formats of the game. A right-arm fast bowler with a unique bowling action, Bumrah is considered one of the best bowlers in the world. He plays for Gujarat in domestic cricket and Mumbai Indians in the Indian Premier League.'
  },
  {
    id: 7,
    image:'https://static.india.com/wp-content/uploads/2023/09/Ravindra-Jadeja-5.jpg',
    ename: 'Ravindra Jadeja',
    age: 34,
    role: 'All Rounder',
    bio: `Ravindrasinh Anirudhsinh Jadeja (born 6 December 1988), commonly known as Ravindra Jadeja, is an Indian international cricketer who represents the Indian national cricket team in all formats. He is an all-rounder, who bats left-handed and bowls left-arm orthodox spin. He is regarded as one of the best all-rounders of the last decade, becoming the fifth Indian and fifth-fastest player to score 2,000 runs and take 200 wickets in Test cricket in 2021. `
  },
  {
    id: 8,
    image:'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/ishan-kishan-023256-1x1_3.jpg?VersionId=j6sujojNfrvP5vbhfLbBqbHXYxXrU2uT',
    ename: 'Ishan Kishan',
    age: 25,
    role: 'Batsman',
    bio:`Ishan Kishan (born 18 July 1998) is an Indian international cricketer who plays for the Indian national cricket team as a wicket-keeper batsman. He made his international debut in March 2021 against England. He plays for Mumbai Indians in the Indian Premier League (IPL) and for Jharkhand in domestic cricket.`
  },
  {
    id: 9,
    image:'https://static.toiimg.com/thumb/msid-104067019,width-1280,height-720,resizemode-4/104067019.jpg',
    ename: 'Ravichandran Ashwin',
    age: 36,
    role: 'All Rounder',
    bio: `Ravichandran Ashwin (born 17 September 1986) is an Indian international cricketer from Chennai, who plays for the India cricket team. In Indian domestic cricket he plays for Tamil Nadu and for Rajasthan Royals in the Indian Premier League (IPL). He was part of the Indian team that won the 2011 Cricket World Cup and the 2013 Champions Trophy.`
  },
  {
    id: 10,
    image:'https://www.hindustantimes.com/ht-img/img/2023/08/01/1600x900/CRICKET-IND-WIS-ODI-7_1690858047374_1690858093282.jpg',
    ename: 'Shardul Thakur',
    age: 32,
    role: 'Bowler',
    bio: `Thakur was initially criticized for his lack of height for a fast bowler (he is 5 ft 9 in) and for being overweight for some time (83 kg) but he ultimately became a part of Mumbai domestic team. In November 2012, he made his first-class debut for Mumbai against Rajasthan at Jaipur in the 2012–13 Ranji Trophy.[5] He did not have a good start to his career as he took four wickets at a bowling average of 82.0 from his first four games. In 2013–14 Ranji season,`
  },
  {
    id: 11,
    image:'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202309/ap23021407083183_1-sixteen_nine-sixteen_nine.jpg?size=948:533',
    ename: 'Mohammad Siraj',
    age: 28,
    role: 'Bowler',
    bio: `Mohammed Siraj (born 13 March 1994) is an Indian international cricketer who joined the Indian national cricket team in 2017 as a Right-arm fast bowler. He plays for Royal Challengers Bangalore in the Indian Premier League and Hyderabad in domestic cricket. As of October 2023, Siraj is currently ranked World No. 2 in the ICC men's ODI bowlers rankings.`
  },
  {
    id: 12,
    image:'https://ss-i.thgim.com/public/incoming/d45pzc/article67201032.ece/alternates/LANDSCAPE_1200/AFP_33QV4Q7.jpg',
    ename: 'Kuldeep Yadav',
    age: 28,
    role: 'Bowler',
    bio: `Kuldeep Yadav (born 14 December 1994) is an Indian international cricketer. He is a bowling allrounder who bowls Left-arm unorthodox spin and is a capable lower order batter who plays for India and for Uttar Pradesh in domestic cricket. He was signed by the Delhi Capitals for the Indian Premier League. He has played for the Indian Under-19 cricket team and played in the 2014 Under-19 Cricket World Cup.`
  },
  {
    id: 13,
    image:'https://static.abplive.com/wp-content/uploads/2020/04/16163020/Shami.jpg?impolicy=abp_cdn&imwidth=650',
    ename: 'Mohammad Shami',
    age: 35,
    role: 'Bowler',
    bio: `Mohammed Shami Ahmed (born 3 September 1990) is an Indian international cricketer who plays for the Indian national cricket team in all formats of the game as a right-arm fast bowler. He plays domestically for Bengal and, in the Indian Premier League, for Gujarat Titans. He is a right-arm fast bowler, who bowls the ball off the seam and using swing, including reverse swing, to move the ball both ways. He has been described as a fine bowler at the end of a limited-overs innings and as "unplayable" at times in all formats.`
  },
  {
    id: 14,
    image:'https://cdn.scpsassam.org/wp-content/uploads/2023/07/TheNewsPocket-21.png',
    ename: 'Shubmann Gill',
    age: 27,
    role: 'Batsman',
    bio: `Shubman Gill (born 8 September 1999) is an Indian cricketer. Representing Indian cricket team at the international level, he also plays for Gujarat Titans in the Indian Premier League and Punjab in domestic cricket. Gill served as the vice-captain of the Indian Under-19 cricket team in the 2018 Under-19 Cricket World Cup and won Player of the Tournament award.[`
  },
  {
    id: 15,
    image:'https://d1af7m13b2f34i.cloudfront.net/2021/03/post_image_5b4208c.jpg',
    ename: 'Shreyas lyer',
    age: 28,
    role: 'Batsman',
    bio: `Shreyas Santosh Iyer (born 6 December 1994) is an Indian international cricketer who plays for the Indian cricket team as a right-handed batter. He has played in all formats for the Indian team. Iyer scored a century in his debut test match and a half-century in the second innings against New Zealand in November 2021 and became the first Indian player to do so.[`
  },
]

export default empDetails 