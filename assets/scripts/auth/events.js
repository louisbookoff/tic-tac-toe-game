'use strict'

const api = require('./api')
const getFormFields = require('.../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
    console.log('YEEEEEEE!')

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)


module.exports = {
  addHandlers,
}
