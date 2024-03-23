/* eslint-disable import/no-duplicates */
import QRious from 'qrious'
// import satyniarkaAndroid from '../ARModels/ARModels/SATYNIARKA.glb'
// import satyniarkaIOS from '../ARModels/ARModels/SATYNIARKA.glb'
// import satyniarkaIOS from '../assets/ARModels/SATYNIARKA.glb'

class ARMode {
  #selectedFireplace

  constructor() {
    this.#selectedFireplace = sessionStorage.getItem('selectedFireplace')
      ? sessionStorage.getItem('selectedFireplace')
      : window.location.pathname.split('/')[2]
    this.models = {
      SATYNIARKA: {},
      PIEC: {},
      MAGAZYN: {},
      SingleStation: {},
      DualStation: {},
      TwinOneaxis: {},
    }
  }

  /**
   * Weryfikuje na jakim urządzeniu pracuje użytkownik
   * @returns device - string lub null
   */
  detectDevice() {
    let device
    // Weryfikacja czy IOS
    device = this.#detectDeviceIOS()

    if (!device) {
      // Weryfikacja czy Android i jaka przeglądarka
      device = this.#detectDeviceAndroid()
    }

    if (!device) {
      // Wyświetlanie QRcode
      if (!document.getElementById('QR')) {
        this.#initializeArButtonQr()
        device = 'QR'
      }
    }

    return device
  }

  /**
   * Weryfikacja czy urządzenie jest na IOS
   * @returns deviceIOS - string ('IOS') lub null
   */
  #detectDeviceIOS() {
    let deviceIOS, isIOS, isChromeOnIOS, isSafaraiOnIOS, isSafariBrowser

    isIOS =
      (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    isSafariBrowser = /Safari\//.test(navigator.userAgent)
    isChromeOnIOS = isIOS && /CriOS\//.test(navigator.userAgent)
    isSafaraiOnIOS = isIOS && isSafariBrowser

    if (isChromeOnIOS || isSafaraiOnIOS) {
      this.#initializeArButtonIOS()
      deviceIOS = 'IOS'
    }
    return deviceIOS
  }

  /**
   * Weryfikacja czy urządzenie jest na androidzie i czy odpalane w chromie
   * @returns deviceAndroid - string ('ANDROID') lub ('ANDROIDNOTCHROME') lub null
   */
  #detectDeviceAndroid() {
    let deviceAdroid, isAndroid, isChromeBrowser

    isAndroid = /android/i.test(navigator.userAgent)
    isChromeBrowser = /Chrome\//.test(navigator.userAgent)

    if (isAndroid) {
      if (isChromeBrowser) {
        this.#initializeArButtonAndroid()
        deviceAdroid = 'ANDROID'
      } else {
        this.#initializeArButtonAndroidNotChrome()
        deviceAdroid = 'ANDROIDNOTCHROME'
      }
    }

    return deviceAdroid
  }

  /**
   * Wyświetla QrCode dla urządzenia
   */

  #initializeArButtonQr() {
    const slider = document.getElementById('sliderPanel')

    if (slider) {
      slider.style = 'visibility: hidden'
    }

    const qr = new QRious({
      element: document.getElementById('qr-code'),
      value: `${window.location.protocol}//${window.location.host}/QRView/${this.#selectedFireplace}`,
    })

    qr.background = 'transparent'
    qr.foreground = 'white'
  }

  /**
   * Wyświetla odpowiedni widok dla IOS
   */
  #initializeArButtonIOS() {
    let source, noScale, href
    source = `${window.location.protocol}//${window.location.host}${this.models[this.#selectedFireplace].IOS}`
    const applePayButtonType = null, //https://docs-assets.developer.apple.com/published/b122cc68df/10cb0534-e1f6-42ed-aadb-5390c55ad3ff.png
      //aby działał checkoutTitle muszą zostać podane checoutSubtitle i price oraz apple-button-type lub call-to-action
      checkoutTitle = null, //https://docs-assets.developer.apple.com/published/4330cf3b9b/ARKit-define-item~dark@2x.png
      checkoutSubtitle = null, //https://docs-assets.developer.apple.com/published/4330cf3b9b/ARKit-define-item~dark@2x.png
      price = null, //https://docs-assets.developer.apple.com/published/4330cf3b9b/ARKit-define-item~dark@2x.png
      callToAction = null,
      //
      customBanner = null, //bezpośredni adres URL do pliku. Musi być na szyfrowanym serwerze HTTPS
      customHeight = null //niestandardowa wysokość etykiety. Działa z custom-banner
    //
    noScale = null

    href = `${source}#`

    if (applePayButtonType != null) {
      href += `&applePayButtonType=${encodeURIComponent(applePayButtonType)}`
    }
    if (checkoutTitle != null) {
      href += `&checkoutTitle=${encodeURIComponent(checkoutTitle)}`
    }
    if (checkoutSubtitle != null) {
      href += `&checkoutSubtitle=${encodeURIComponent(checkoutSubtitle)}`
    }
    if (price != null) {
      href += `&price=${encodeURIComponent(price)}`
    }
    if (callToAction != null) {
      href += `&callToAction=${encodeURIComponent(callToAction)}`
    }
    if (customBanner != null) {
      href += `&custom=${encodeURIComponent(customBanner)}`
    }
    if (customHeight != null) {
      href += `&customHeight=${encodeURIComponent(customHeight)}`
    }
    if (noScale != null) {
      href += `&allowsContentScaling=0`
    }
    this.#activateAR(href, true)
  }

  /**
   * Wyświetla odpowiedni widok dla Android
   */
  #initializeArButtonAndroid() {
    let source = `${window.location.protocol}//${window.location.host}${this.models[this.#selectedFireplace].Android}`
    const title = this.selectedFireplaceModel,
      fallBackUrl = 'http://balindustry.pl/',
      link = null //można dodac adres url do kupna całego kominka
    let noScale = null,
      href = `intent://arvr.google.com/scene-viewer/1.0?file=${source}&mode=ar_preferred`

    if (title != null) href += `&title=${encodeURIComponent(title)}`
    if (link != null) {
      href += `&link=${encodeURIComponent(link)}`
    }
    if (noScale != null) {
      href += `&resizable=false`
    }
    href += `#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;`
    if (fallBackUrl != null) {
      href += `S.browser_fallback_url=${encodeURIComponent(fallBackUrl)};`
    }
    href += `end;`

    this.#activateAR(href, false)
  }

  /**
   * Wyświetla odpowiedni widok dla Androida i nie chrome
   */
  #initializeArButtonAndroidNotChrome() {
    document.body.innerHTML = '<h1>Urządzenie nie obsluguje AR</h1>'
  }
  /**
   * Aktywacja trybu AR
   * @param {*} href -
   * @param {*} isQuickLook
   */
  #activateAR(href, isQuickLook) {
    const anchor = document.createElement('a')
    if (isQuickLook) {
      anchor.appendChild(document.createElement('img'))
      anchor.rel = 'ar'
    }
    anchor.setAttribute('href', href)
    anchor.click()
  }
}

export default ARMode
