// Import all Persian translation modules
import nav from './nav.json'
import hero from './hero.json'
import about from './about.json'
import skills from './skills.json'
import resume from './resume.json'
import services from './services.json'
import contact from './contact.json'
import footer from './footer.json'
import common from './common.json'

// Merge all modules into one object
export default {
  nav,
  hero,
  about,
  skills,
  resume,
  services,
  contact,
  footer,
  ...common // Spread common to have theme and language at root level
}
