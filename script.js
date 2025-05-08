// Random website generator logic
function generateRandomURL() {
  const websites = [
    'https://www.reddit.com/r/funny/',
    'https://www.boredpanda.com/',
    'https://www.tumblr.com/',
    'https://www.twitter.com/',
    'https://www.instagram.com/',
    'https://www.snapchat.com/',
    'https://www.tiktok.com/',
    'https://www.facebook.com/',
    'https://www.pinterest.com/',
    'https://www.linkedin.com/',
    'https://www.nytimes.com/',
    'https://www.bbc.com/',
    'https://www.cnn.com/',
    'https://www.theguardian.com/',
    'https://www.aljazeera.com/',
    'https://www.npr.org/',
    'https://www.bloomberg.com/',
    'https://www.foxnews.com/',
    'https://www.reuters.com/',
    'https://www.wikipedia.org/',
    'https://www.khanacademy.org/',
    'https://www.coursera.org/',
    'https://www.edx.org/',
    'https://www.udemy.com/',
    'https://www.academia.edu/',
    'https://www.stackoverflow.com/',
    'https://www.netflix.com/',
    'https://www.youtube.com/',
    'https://www.spotify.com/',
    'https://www.twitch.tv/',
    'https://www.pandora.com/',
    'https://www.imdb.com/',
    'https://www.rottentomatoes.com/',
    'https://www.github.com/',
    'https://www.stackoverflow.com/',
    'https://www.medium.com/',
    'https://www.hackaday.com/',
    'https://www.wired.com/',
    'https://www.techcrunch.com/',
    'https://www.theverge.com/',
    'https://www.amazon.com/',
    'https://www.ebay.com/',
    'https://www.etsy.com/',
    'https://www.walmart.com/',
    'https://www.target.com/',
    'https://www.bestbuy.com/',
    'https://www.homedepot.com/',
    'https://www.aliexpress.com/',
    'https://www.roblox.com/',
    'https://www.mojang.com/',
    'https://www.steampowered.com/',
    'https://www.epicgames.com/',
    'https://www.origin.com/',
    'https://www.xbox.com/',
    'https://www.playstation.com/',
    'https://www.nintendo.com/',
    'https://www.theuselessweb.com/',
    'https://www.randomwordgenerator.com/',
    'https://www.sporcle.com/',
    'https://www.woot.com/',
    'https://www.boredbutton.com/',
    'https://www.findtheinvisiblecow.com/',
    'https://www.duckduckgo.com/',
    'https://www.wherethefuckismatt.com/',
    'https://www.staggeringbeauty.com/',
    'https://www.fallingfalling.com/',
    'https://www.nasa.gov/',
    'https://www.nationalgeographic.com/',
    'https://www.scientificamerican.com/',
    'https://www.cnn.com/space',
    'https://www.newscientist.com/',
    'https://www.popsci.com/',
    'https://www.smithsonianmag.com/',
    'https://www.funnyordie.com/',
    'https://www.9gag.com/',
    'https://www.memebase.com/',
    'https://www.dailystar.co.uk/weird-news/',
    'https://www.theonion.com/',
    'https://www.laughingplace.com/',
    'https://www.jokes.com/'
  ];

  // Generate random index for website
  const randomIndex = Math.floor(Math.random() * websites.length);
  return websites[randomIndex];
}

// Show animation and redirect
function startAnimation() {
  // Show the animation text
  const animationElement = document.getElementById('animation');
  animationElement.style.display = 'block';

  // After 2 seconds (to allow animation), redirect to a random website
  setTimeout(() => {
    const randomURL = generateRandomURL();
    window.open(randomURL, '_blank');
  }, 2000); // Delay to match the duration of the animation
}
