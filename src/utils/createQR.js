import QRious from 'qrious'
import { isMobile } from './utils'

export const initializeArButton = (link) => {
  if (!isMobile()) {
    const qr = new QRious({
      element: document.getElementById('qr-code'),
      value: link,
    })

    qr.background = 'transparent'
    qr.foreground = 'black'
  }
}
