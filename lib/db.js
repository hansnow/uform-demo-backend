const fs = require('fs')
const path = require('path')
const { uuid } = require('./util')

const DB_FILE = path.join(__dirname, '../db.json')

function ensureDbExist() {
  const exist = fs.existsSync(DB_FILE)
  if (!exist) {
    fs.writeFileSync(DB_FILE, '[]', { encoding: 'utf-8' })
  }
}

function saveDbContent(content) {
  fs.writeFileSync(DB_FILE, JSON.stringify(content), { encoding: 'utf-8' })
}

exports.add = function add(name, url, schema) {
  ensureDbExist()
  const id = uuid()
  const item = { id, name, url, schema }
  const db = require(DB_FILE)
  db.push(item)
  saveDbContent(db)
  return id
}

exports.removeById = function removeById(id) {
  ensureDbExist()
  const db = require(DB_FILE)
  const idx = db.findIndex(i => i.id === id)
  if (idx > -1) {
    db.splice(idx, 1)
    saveDbContent(db)
    return true
  }
  return false
}

exports.getAll = function getAll() {
  const db = require(DB_FILE)
  const ret = db.map(i => ({ id: i.id, name: i.name }))
  return ret
}

exports.getById = function getById(id) {
  const db = require(DB_FILE)
  const item = db.find(i => i.id === id)
  return item
}
