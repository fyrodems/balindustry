const formatFileName = (file) =>
  file
    .split('.')[0]
    .replace('â', '-')
    .replace('Ä', 'ą')
    .replace('Ä', 'ć')
    .replace('Ä', 'ę')
    .replace('Å', 'ł')
    .replace('Å', 'ń')
    .replace('Ã³', 'ó')
    .replace('Å', 'ś')
    .replace('Åº', 'ź')
    .replace('Å¼', 'ż')
    .replace('Å', 'ł')
    .toUpperCase()

const isMobile = () => {
  // Check if IOS
  let isIOS, isChromeOnIOS, isSafaraiOnIOS, isSafariBrowser

  isIOS =
    (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

  isSafariBrowser = /Safari\//.test(navigator.userAgent)
  isChromeOnIOS = isIOS && /CriOS\//.test(navigator.userAgent)
  isSafaraiOnIOS = isIOS && isSafariBrowser

  if (isChromeOnIOS || isSafaraiOnIOS) {
    return true
  }

  // check for iPad
  if (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document) ||
    navigator.maxTouchPoints > 0
  ) {
    return true
  }

  // Check if Android
  let isAndroid, isChromeBrowser

  isAndroid = /Android|android/i.test(navigator.userAgent)
  isChromeBrowser = /Chrome\//.test(navigator.userAgent)

  if (isAndroid) {
    if (isChromeBrowser) {
      return true
    } else {
      /*   const error =  'urzadzenie nie obługuje ar' */
      return false
    }
  }

  // check other devices
  /*       const mobileRegex = /Android|android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isThisMobileDevice = mobileRegex.test(navigator.userAgent);
      return isThisMobileDevice; */
  return false
}

const generateARTitle = (name) => {
  switch (name) {
    case 'SATYNIARKA': {
      return 'Satyniarka'
    }

    case 'PIEC': {
      return 'Piec komorowy'
    }

    case 'MAGAZYN': {
      return 'Magazyn pionowy blach'
    }

    default: {
      return ''
    }
  }
}

export { isMobile, formatFileName, generateARTitle }
