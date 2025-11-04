function AuthBackground({ isLogin }) {
  return (
    <div className="auth-background">
      {isLogin ? (
        <>
          <img src="/public/photo_2025-10-07_23-11-17-removebg-preview.png" alt="Anime girl" className="decoration deco-1" />
          <img src="/public/429-4292752_tumblr-art-anime-neko-nekogirl-sticker-stickers-neko-removebg-preview.png" alt="Neko girl" className="decoration deco-2" />
        </>
      ) : (
        <>
          <img src="/public/kawaii-pixel-art-heart-cuteness-drawing-video-games-pixelation-pink-magenta-png-clipart-thumbnail-removebg-preview.png" alt="Cute Hearts" className="decoration deco-3" />
          <img src="/public/331-3316019_chibi-anime-santa-pink-red-sticker-cute-use-removebg-preview.png" alt="Santa girl" className="decoration deco-4" />
        </>
      )}
    </div>
  );
}

export default AuthBackground;