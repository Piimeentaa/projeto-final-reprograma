// require('dotenv-safe').load()
const express = require('express');
const router = express.Router();
const controller = require("../Controllers/ListafilmesController")
const jwt = require('jsonwebtoken')
const SEGREDO = process.env.SEGREDO

// const autenticar = (request, response, next) => {
//   const authHeader = request.get('authorization')
//   let autenticado = false

//   if (!authHeader) {
//     return response.status(401).send('Você precisa fazer login!')
//   }

//   const token = authHeader.split(' ')[1]

//   jwt.verify(token, SEGREDO, (error, decoded) => {
//     if (error) {
//       autenticado = false
//     } else {
//       if (decoded.grupo == 'comum' || decoded.grupo == 'admin') {
//         autenticado = true
//       } else {
//         autenticado = false
//       }
//     }
//   })

//   if (!autenticado) {
//     return response.status(403).send('Acesso negado.')
//   }

//   next()
// }

// const autenticarAdmin = (request, response, next) => {
//   const authHeader = request.get('authorization')
//   let autenticado = false

//   if (!authHeader) {
//     return response.status(401).send('Você precisa fazer login!')
//   }

//   const token = authHeader.split(' ')[1]

//   jwt.verify(token, SEGREDO, (error, decoded) => {
//     if (error) {
//       autenticado = false
//     } else {
//       if (decoded.grupo == 'admin') {
//         autenticado = true
//       } else {
//         autenticado = false
//       }
//     }
//   })

//   if (!autenticado) {
//     return response.status(403).send('Acesso negado.')
//   }

//   next()
// }

router.get('',  controller.getAll)
router.post('/criar', controller.add)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)



// router.post('', controller.add)
// router.post('/admin', controller.addAdmin)
// router.get('/:id', controller.getById)
// router.patch('/:id', controller.update)
// router.delete('/:id', autenticar, controller.remove)
// router.post('/:treinadorId/pokemons', autenticar, controller.addPokemon)
// router.patch('/:treinadorId/pokemons/:pokemonId/treinar', autenticar, controller.treinarPokemon)
// router.get('/:id/pokemons', autenticar, controller.getPokemons)
// router.patch('/:treinadorId/pokemons/:pokemonId', autenticar, controller.updatePokemon)
// router.get('/:treinadorId/pokemons/:pokemonId', autenticar, controller.getPokemonById)
// router.post('/login', controller.login)

module.exports = router