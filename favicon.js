// Generates the favicon dynamically using the loaded Syne font
window.addEventListener('load', () => {
  document.fonts.ready.then(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    // Black background
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, 64, 64);
    
    // Gradient 'K' in Syne
    const grad = ctx.createLinearGradient(12, 12, 52, 52);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(1, '#555555');
    
    ctx.fillStyle = grad;
    ctx.font = '800 44px Syne';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('K', 34, 36);
    
    // Create or update the favicon link
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = canvas.toDataURL('image/png');
  });
});
