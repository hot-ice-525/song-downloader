const numOfLinks = 0;
let allLinks = [];

// Check if direct download links are available
const downloadLinks = document.querySelectorAll('a[href$=".mp3"]');
downloadLinks.forEach((audio) => {
  allLinks.push(audio);
  numOfLinks++;
});

// Otherwise download from audio element
// Links can either exist directly in audio element
const downloadFromAudio = document.querySelector("audio");
if (downloadFromAudio) {
  const src = downloadFromAudio.getAttribute("src");
  if (src && src.includes("https://")) {
    allLinks.push(src);
    numOfLinks++;
  }
  else if (src) {
    allLinks.push(`${location.origin}${src}`);
    numOfLinks++;
  }
  // Or they can either exist inside source child of audio
  else {
    const downloadFromSource = document.querySelector("audio > source");
    if (downloadFromSource) {
      const song = downloadFromSource.getAttribute("src");
      if (song && song.includes("https://")) {
        allLinks.push(song);
        numOfLinks++;
      }
      else if (src) {
        allLinks.push(`${location.origin}${song}`);
        numOfLinks++;
      }
    }
  }
}

export { numOfLinks, allLinks };