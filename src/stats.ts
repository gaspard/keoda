import db from './db.json'

function stats() {
  Object.keys(db).forEach(k => {
    console.log(`[${k}] ${Object.keys(db[k as keyof typeof db]).length}`)
  })
  console.log('\n')
}

stats()
