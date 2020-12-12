import { conlang } from './settings'
import './style.css'

if (BUILD_ENV.APP_ENV === 'development') {
  window.document.title = `${conlang} - dev (${BUILD_ENV.APP_VERSION})`
} else {
  window.document.title = `${conlang} - ${BUILD_ENV.APP_VERSION}`
}

console.info(`************ 🚀 ${conlang} 🚀 *************`)
console.info(`** VERSION: ${BUILD_ENV.APP_VERSION}                       **`)
console.info(`** DATE:    ${BUILD_ENV.RELEASE_DATE}   **`)
console.info(`** COMMIT:  ${BUILD_ENV.COMMITHASH}                   **`)
console.info('****************** 🎵 *******************')
