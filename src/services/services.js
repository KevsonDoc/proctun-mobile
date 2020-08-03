function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
    );
}

function handleLink (link) {
    return `https://img.youtube.com/vi/${getYouTubeId(link)}/hqdefault.jpg`;
}