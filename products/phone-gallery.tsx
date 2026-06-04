const phoneImages: Record<number, { type: string; url: string }[]> = {
  63: [
    { type: 'Front', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Back', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Side', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Box & Accessories', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Unboxing', url: '/placeholder.svg?height=500&width=300' },
  ],
  64: [
    { type: 'Front', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Back', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Side', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Box & Accessories', url: '/placeholder.svg?height=500&width=300' },
  ],
  65: [
    { type: 'Front', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Back', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Side', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Box & Accessories', url: '/placeholder.svg?height=500&width=300' },
  ],
  66: [
    { type: 'Front', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Back', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Side', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Box & Accessories', url: '/placeholder.svg?height=500&width=300' },
  ],
  67: [
    { type: 'Front', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Back', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Side', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Box & Accessories', url: '/placeholder.svg?height=500&width=300' },
  ],
  68: [
    { type: 'Front', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Back', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Side', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Box & Accessories', url: '/placeholder.svg?height=500&width=300' },
  ],
  69: [
    { type: 'Front', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Back', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Side', url: '/placeholder.svg?height=500&width=300' },
    { type: 'Box & Accessories', url: '/placeholder.svg?height=500&width=300' },
  ],
};

const getPhoneImage = (productId: number, imageType: string) => {
  const icons: Record<string, string> = {
    Front: '📱',
    Back: '📱',
    Side: '📱',
    'Box & Accessories': '📦',
    Unboxing: '🎁',
  };

  return icons[imageType] || '📱';
};

const getImages = () => {
  return phoneImages[product.id] || [];
};