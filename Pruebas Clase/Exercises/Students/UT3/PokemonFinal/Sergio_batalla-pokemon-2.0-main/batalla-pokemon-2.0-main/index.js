import { Pokemon } from './Pokemon.js';
import { Move } from './Move.js';
import { Type } from './Type.js';

// Lista de Pokémon (se puede cargar desde JSON en vez de hardcodear)
const pokemons = [
    { id: 1, name: "Bulbasaur", img: "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif", types: ["Grass", "Poison"], attack: 49, defense: 49, hp: 45 },
    { id: 2, name: "Ivysaur", img: "https://projectpokemon.org/images/normal-sprite/ivysaur.gif", types: ["Grass", "Poison"], attack: 62, defense: 63, hp: 60 },
    { id: 3, name: "Venusaur", img: "https://projectpokemon.org/images/normal-sprite/venusaur.gif", types: ["Grass", "Poison"], attack: 82, defense: 83, hp: 80 },
    { id: 4, name: "Charmander", img: "https://projectpokemon.org/images/normal-sprite/charmander.gif", types: ["Fire"], attack: 52, defense: 43, hp: 39 },
    { id: 5, name: "Charmeleon", img: "https://projectpokemon.org/images/normal-sprite/charmeleon.gif", types: ["Fire"], attack: 64, defense: 58, hp: 58 },
    { id: 6, name: "Charizard", img: "https://projectpokemon.org/images/normal-sprite/charizard.gif", types: ["Fire", "Flying"], attack: 84, defense: 78, hp: 78 },
    { id: 7, name: "Squirtle", img: "https://projectpokemon.org/images/normal-sprite/squirtle.gif", types: ["Water"], attack: 48, defense: 65, hp: 44 },
    { id: 8, name: "Wartortle", img: "https://projectpokemon.org/images/normal-sprite/wartortle.gif", types: ["Water"], attack: 63, defense: 80, hp: 59 },
    { id: 9, name: "Blastoise", img: "https://projectpokemon.org/images/normal-sprite/blastoise.gif", types: ["Water"], attack: 83, defense: 100, hp: 79 },
    { id: 10, name: "Caterpie", img: "https://projectpokemon.org/images/normal-sprite/caterpie.gif", types: ["Bug"], attack: 30, defense: 35, hp: 45 },
    { id: 11, name: "Metapod", img: "https://projectpokemon.org/images/normal-sprite/metapod.gif", types: ["Bug"], attack: 20, defense: 55, hp: 50 },
    { id: 12, name: "Butterfree", img: "https://projectpokemon.org/images/normal-sprite/butterfree.gif", types: ["Bug", "Flying"], attack: 45, defense: 50, hp: 60 },
    { id: 13, name: "Weedle", img: "https://projectpokemon.org/images/normal-sprite/weedle.gif", types: ["Bug", "Poison"], attack: 35, defense: 30, hp: 40 },
    { id: 14, name: "Kakuna", img: "https://projectpokemon.org/images/normal-sprite/kakuna.gif", types: ["Bug", "Poison"], attack: 25, defense: 50, hp: 45 },
    { id: 15, name: "Beedrill", img: "https://projectpokemon.org/images/normal-sprite/beedrill.gif", types: ["Bug", "Poison"], attack: 90, defense: 40, hp: 65 },
    { id: 16, name: "Pidgey", img: "https://projectpokemon.org/images/normal-sprite/pidgey.gif", types: ["Normal", "Flying"], attack: 45, defense: 40, hp: 40 },
    { id: 17, name: "Pidgeotto", img: "https://projectpokemon.org/images/normal-sprite/pidgeotto.gif", types: ["Normal", "Flying"], attack: 60, defense: 55, hp: 63 },
    { id: 18, name: "Pidgeot", img: "https://projectpokemon.org/images/normal-sprite/pidgeot.gif", types: ["Normal", "Flying"], attack: 80, defense: 75, hp: 83 },
    { id: 19, name: "Rattata", img: "https://projectpokemon.org/images/normal-sprite/rattata.gif", types: ["Normal"], attack: 56, defense: 35, hp: 30 },
    { id: 20, name: "Raticate", img: "https://projectpokemon.org/images/normal-sprite/raticate.gif", types: ["Normal"], attack: 81, defense: 60, hp: 55 },
    { id: 21, name: "Spearow", img: "https://projectpokemon.org/images/normal-sprite/spearow.gif", types: ["Normal", "Flying"], attack: 60, defense: 30, hp: 40 },
    { id: 22, name: "Fearow", img: "https://projectpokemon.org/images/normal-sprite/fearow.gif", types: ["Normal", "Flying"], attack: 90, defense: 65, hp: 65 },
    { id: 23, name: "Ekans", img: "https://projectpokemon.org/images/normal-sprite/ekans.gif", types: ["Poison"], attack: 60, defense: 44, hp: 35 },
    { id: 24, name: "Arbok", img: "https://projectpokemon.org/images/normal-sprite/arbok.gif", types: ["Poison"], attack: 85, defense: 69, hp: 60 },
    { id: 25, name: "Pikachu", img: "https://projectpokemon.org/images/normal-sprite/pikachu.gif", types: ["Electric"], attack: 55, defense: 40, hp: 35 },
    { id: 26, name: "Raichu", img: "https://projectpokemon.org/images/normal-sprite/raichu.gif", types: ["Electric"], attack: 90, defense: 55, hp: 60 },
    { id: 27, name: "Sandshrew", img: "https://projectpokemon.org/images/normal-sprite/sandshrew.gif", types: ["Ground"], attack: 75, defense: 85, hp: 50 },
    { id: 28, name: "Sandslash", img: "https://projectpokemon.org/images/normal-sprite/sandslash.gif", types: ["Ground"], attack: 100, defense: 110, hp: 75 },
    { id: 29, name: "Nidoran♀", img: "https://projectpokemon.org/images/normal-sprite/nidoran_f.gif", types: ["Poison"], attack: 47, defense: 52, hp: 55 },
    { id: 30, name: "Nidorina", img: "https://projectpokemon.org/images/normal-sprite/nidorina.gif", types: ["Poison"], attack: 62, defense: 67, hp: 70 },
    { id: 31, name: "Nidoqueen", img: "https://projectpokemon.org/images/normal-sprite/nidoqueen.gif", types: ["Poison", "Ground"], attack: 92, defense: 87, hp: 90 },
    { id: 32, name: "Nidoran♂", img: "https://projectpokemon.org/images/normal-sprite/nidoran_m.gif", types: ["Poison"], attack: 57, defense: 40, hp: 46 },
    { id: 33, name: "Nidorino", img: "https://projectpokemon.org/images/normal-sprite/nidorino.gif", types: ["Poison"], attack: 72, defense: 57, hp: 61 },
    { id: 34, name: "Nidoking", img: "https://projectpokemon.org/images/normal-sprite/nidoking.gif", types: ["Poison", "Ground"], attack: 102, defense: 77, hp: 81 },
    { id: 35, name: "Clefairy", img: "https://projectpokemon.org/images/normal-sprite/clefairy.gif", types: ["Fairy"], attack: 45, defense: 48, hp: 70 },
    { id: 36, name: "Clefable", img: "https://projectpokemon.org/images/normal-sprite/clefable.gif", types: ["Fairy"], attack: 70, defense: 73, hp: 95 },
    { id: 37, name: "Vulpix", img: "https://projectpokemon.org/images/normal-sprite/vulpix.gif", types: ["Fire"], attack: 41, defense: 40, hp: 38 },
    { id: 38, name: "Ninetales", img: "https://projectpokemon.org/images/normal-sprite/ninetales.gif", types: ["Fire"], attack: 76, defense: 75, hp: 73 },
    { id: 39, name: "Jigglypuff", img: "https://projectpokemon.org/images/normal-sprite/jigglypuff.gif", types: ["Normal", "Fairy"], attack: 45, defense: 20, hp: 115 },
    { id: 40, name: "Wigglytuff", img: "https://projectpokemon.org/images/normal-sprite/wigglytuff.gif", types: ["Normal", "Fairy"], attack: 70, defense: 45, hp: 140 },
    { id: 41, name: "Zubat", img: "https://projectpokemon.org/images/normal-sprite/zubat.gif", types: ["Poison", "Flying"], attack: 45, defense: 35, hp: 40 },
    { id: 42, name: "Golbat", img: "https://projectpokemon.org/images/normal-sprite/golbat.gif", types: ["Poison", "Flying"], attack: 80, defense: 70, hp: 75 },
    { id: 43, name: "Oddish", img: "https://projectpokemon.org/images/normal-sprite/oddish.gif", types: ["Grass", "Poison"], attack: 50, defense: 55, hp: 45 },
    { id: 44, name: "Gloom", img: "https://projectpokemon.org/images/normal-sprite/gloom.gif", types: ["Grass", "Poison"], attack: 65, defense: 70, hp: 60 },
    { id: 45, name: "Vileplume", img: "https://projectpokemon.org/images/normal-sprite/vileplume.gif", types: ["Grass", "Poison"], attack: 80, defense: 85, hp: 75 },
    { id: 46, name: "Paras", img: "https://projectpokemon.org/images/normal-sprite/paras.gif", types: ["Bug", "Grass"], attack: 70, defense: 55, hp: 35 },
    { id: 47, name: "Parasect", img: "https://projectpokemon.org/images/normal-sprite/parasect.gif", types: ["Bug", "Grass"], attack: 95, defense: 80, hp: 60 },
    { id: 48, name: "Venonat", img: "https://projectpokemon.org/images/normal-sprite/venonat.gif", types: ["Bug", "Poison"], attack: 55, defense: 50, hp: 60 },
    { id: 49, name: "Venomoth", img: "https://projectpokemon.org/images/normal-sprite/venomoth.gif", types: ["Bug", "Poison"], attack: 65, defense: 60, hp: 70 },
    { id: 50, name: "Diglett", img: "https://projectpokemon.org/images/normal-sprite/diglett.gif", types: ["Ground"], attack: 55, defense: 25, hp: 10 },
    { id: 51, name: "Dugtrio", img: "https://projectpokemon.org/images/normal-sprite/dugtrio.gif", types: ["Ground"], attack: 100, defense: 50, hp: 35 },
    { id: 52, name: "Meowth", img: "https://projectpokemon.org/images/normal-sprite/meowth.gif", types: ["Normal"], attack: 45, defense: 35, hp: 40 },
    { id: 53, name: "Persian", img: "https://projectpokemon.org/images/normal-sprite/persian.gif", types: ["Normal"], attack: 70, defense: 60, hp: 65 },
    { id: 54, name: "Psyduck", img: "https://projectpokemon.org/images/normal-sprite/psyduck.gif", types: ["Water"], attack: 52, defense: 48, hp: 50 },
    { id: 55, name: "Golduck", img: "https://projectpokemon.org/images/normal-sprite/golduck.gif", types: ["Water"], attack: 82, defense: 78, hp: 80 },
    { id: 56, name: "Mankey", img: "https://projectpokemon.org/images/normal-sprite/mankey.gif", types: ["Fighting"], attack: 80, defense: 35, hp: 40 },
    { id: 57, name: "Primeape", img: "https://projectpokemon.org/images/normal-sprite/primeape.gif", types: ["Fighting"], attack: 105, defense: 60, hp: 65 },
    { id: 58, name: "Growlithe", img: "https://projectpokemon.org/images/normal-sprite/growlithe.gif", types: ["Fire"], attack: 70, defense: 45, hp: 55 },
    { id: 59, name: "Arcanine", img: "https://projectpokemon.org/images/normal-sprite/arcanine.gif", types: ["Fire"], attack: 110, defense: 80, hp: 90 },
    { id: 60, name: "Poliwag", img: "https://projectpokemon.org/images/normal-sprite/poliwag.gif", types: ["Water"], attack: 50, defense: 40, hp: 40 },
    { id: 61, name: "Poliwhirl", img: "https://projectpokemon.org/images/normal-sprite/poliwhirl.gif", types: ["Water"], attack: 65, defense: 65, hp: 65 },
    { id: 62, name: "Poliwrath", img: "https://projectpokemon.org/images/normal-sprite/poliwrath.gif", types: ["Water", "Fighting"], attack: 85, defense: 95, hp: 90 },
    { id: 63, name: "Abra", img: "https://projectpokemon.org/images/normal-sprite/abra.gif", types: ["Psychic"], attack: 20, defense: 15, hp: 25 },
    { id: 64, name: "Kadabra", img: "https://projectpokemon.org/images/normal-sprite/kadabra.gif", types: ["Psychic"], attack: 35, defense: 30, hp: 40 },
    { id: 65, name: "Alakazam", img: "https://projectpokemon.org/images/normal-sprite/alakazam.gif", types: ["Psychic"], attack: 50, defense: 45, hp: 55 },
    { id: 66, name: "Machop", img: "https://projectpokemon.org/images/normal-sprite/machop.gif", types: ["Fighting"], attack: 80, defense: 50, hp: 70 },
    { id: 67, name: "Machoke", img: "https://projectpokemon.org/images/normal-sprite/machoke.gif", types: ["Fighting"], attack: 100, defense: 70, hp: 80 },
    { id: 68, name: "Machamp", img: "https://projectpokemon.org/images/normal-sprite/machamp.gif", types: ["Fighting"], attack: 130, defense: 80, hp: 90 },
    { id: 69, name: "Bellsprout", img: "https://projectpokemon.org/images/normal-sprite/bellsprout.gif", types: ["Grass", "Poison"], attack: 75, defense: 35, hp: 50 },
    { id: 70, name: "Weepinbell", img: "https://projectpokemon.org/images/normal-sprite/weepinbell.gif", types: ["Grass", "Poison"], attack: 90, defense: 50, hp: 65 },
    { id: 71, name: "Victreebel", img: "https://projectpokemon.org/images/normal-sprite/victreebel.gif", types: ["Grass", "Poison"], attack: 105, defense: 65, hp: 80 },
    { id: 72, name: "Tentacool", img: "https://projectpokemon.org/images/normal-sprite/tentacool.gif", types: ["Water", "Poison"], attack: 40, defense: 35, hp: 40 },
    { id: 73, name: "Tentacruel", img: "https://projectpokemon.org/images/normal-sprite/tentacruel.gif", types: ["Water", "Poison"], attack: 50, defense: 40, hp: 50 },
    { id: 74, name: "Geodude", img: "https://projectpokemon.org/images/normal-sprite/geodude.gif", types: ["Rock", "Ground"], attack: 55, defense: 45, hp: 55 },
    { id: 75, name: "Graveler", img: "https://projectpokemon.org/images/normal-sprite/graveler.gif", types: ["Rock", "Ground"], attack: 60, defense: 50, hp: 60 },
    { id: 76, name: "Golem", img: "https://projectpokemon.org/images/normal-sprite/golem.gif", types: ["Rock", "Ground"], attack: 65, defense: 55, hp: 65 },
    { id: 77, name: "Ponyta", img: "https://projectpokemon.org/images/normal-sprite/ponyta.gif", types: ["Fire"], attack: 60, defense: 45, hp: 50 },
    { id: 78, name: "Rapidash", img: "https://projectpokemon.org/images/normal-sprite/rapidash.gif", types: ["Fire"], attack: 65, defense: 55, hp: 65 },
    { id: 79, name: "Slowpoke", img: "https://projectpokemon.org/images/normal-sprite/slowpoke.gif", types: ["Water", "Psychic"], attack: 55, defense: 45, hp: 50 },
    { id: 80, name: "Slowbro", img: "https://projectpokemon.org/images/normal-sprite/slowbro.gif", types: ["Water", "Psychic"], attack: 65, defense: 50, hp: 65 },
    { id: 81, name: "Magnemite", img: "https://projectpokemon.org/images/normal-sprite/magnemite.gif", types: ["Electric", "Steel"], attack: 45, defense: 40, hp: 35 },
    { id: 82, name: "Magneton", img: "https://projectpokemon.org/images/normal-sprite/magneton.gif", types: ["Electric", "Steel"], attack: 50, defense: 50, hp: 45 },
    { id: 83, name: "Farfetch’d", img: "https://projectpokemon.org/images/normal-sprite/farfetchd.gif", types: ["Normal", "Flying"], attack: 65, defense: 55, hp: 52 },
    { id: 84, name: "Doduo", img: "https://projectpokemon.org/images/normal-sprite/doduo.gif", types: ["Normal", "Flying"], attack: 85, defense: 45, hp: 65 },
    { id: 85, name: "Dodrio", img: "https://projectpokemon.org/images/normal-sprite/dodrio.gif", types: ["Normal", "Flying"], attack: 110, defense: 70, hp: 95 },
    { id: 86, name: "Seel", img: "https://projectpokemon.org/images/normal-sprite/seel.gif", types: ["Water"], attack: 45, defense: 55, hp: 65 },
    { id: 87, name: "Dewgong", img: "https://projectpokemon.org/images/normal-sprite/dewgong.gif", types: ["Water", "Ice"], attack: 70, defense: 80, hp: 90 },
    { id: 88, name: "Grimer", img: "https://projectpokemon.org/images/normal-sprite/grimer.gif", types: ["Poison"], attack: 80, defense: 50, hp: 70 },
    { id: 89, name: "Muk", img: "https://projectpokemon.org/images/normal-sprite/muk.gif", types: ["Poison"], attack: 105, defense: 75, hp: 105 },
    { id: 90, name: "Shellder", img: "https://projectpokemon.org/images/normal-sprite/shellder.gif", types: ["Water"], attack: 65, defense: 100, hp: 30 },
    { id: 91, name: "Cloyster", img: "https://projectpokemon.org/images/normal-sprite/cloyster.gif", types: ["Water", "Ice"], attack: 95, defense: 180, hp: 50 },
    { id: 92, name: "Gastly", img: "https://projectpokemon.org/images/normal-sprite/gastly.gif", types: ["Ghost", "Poison"], attack: 35, defense: 30, hp: 30 },
    { id: 93, name: "Haunter", img: "https://projectpokemon.org/images/normal-sprite/haunter.gif", types: ["Ghost", "Poison"], attack: 50, defense: 45, hp: 45 },
    { id: 94, name: "Gengar", img: "https://projectpokemon.org/images/normal-sprite/gengar.gif", types: ["Ghost", "Poison"], attack: 65, defense: 60, hp: 60 },
    { id: 95, name: "Onix", img: "https://projectpokemon.org/images/normal-sprite/onix.gif", types: ["Rock", "Ground"], attack: 45, defense: 160, hp: 35 },
    { id: 96, name: "Drowzee", img: "https://projectpokemon.org/images/normal-sprite/drowzee.gif", types: ["Psychic"], attack: 48, defense: 45, hp: 60 },
    { id: 97, name: "Hypno", img: "https://projectpokemon.org/images/normal-sprite/hypno.gif", types: ["Psychic"], attack: 73, defense: 70, hp: 85 },
    { id: 98, name: "Krabby", img: "https://projectpokemon.org/images/normal-sprite/krabby.gif", types: ["Water"], attack: 105, defense: 90, hp: 30 },
    { id: 99, name: "Kingler", img: "https://projectpokemon.org/images/normal-sprite/kingler.gif", types: ["Water"], attack: 130, defense: 115, hp: 55 },
    { id: 100, name: "Voltorb", img: "https://projectpokemon.org/images/normal-sprite/voltorb.gif", types: ["Electric"], attack: 30, defense: 50, hp: 40 },
    { id: 101, name: "Electrode", img: "https://projectpokemon.org/images/normal-sprite/electrode.gif", types: ["Electric"], attack: 50, defense: 70, hp: 60 },
    { id: 102, name: "Exeggcute", img: "https://projectpokemon.org/images/normal-sprite/exeggcute.gif", types: ["Grass", "Psychic"], attack: 40, defense: 80, hp: 60 },
    { id: 103, name: "Exeggutor", img: "https://projectpokemon.org/images/normal-sprite/exeggutor.gif", types: ["Grass", "Psychic"], attack: 95, defense: 85, hp: 95 },
    { id: 104, name: "Cubone", img: "https://projectpokemon.org/images/normal-sprite/cubone.gif", types: ["Ground"], attack: 50, defense: 95, hp: 50 },
    { id: 105, name: "Marowak", img: "https://projectpokemon.org/images/normal-sprite/marowak.gif", types: ["Ground"], attack: 80, defense: 110, hp: 60 },
    { id: 106, name: "Hitmonlee", img: "https://projectpokemon.org/images/normal-sprite/hitmonlee.gif", types: ["Fighting"], attack: 120, defense: 53, hp: 50 },
    { id: 107, name: "Hitmonchan", img: "https://projectpokemon.org/images/normal-sprite/hitmonchan.gif", types: ["Fighting"], attack: 105, defense: 79, hp: 50 },
    { id: 108, name: "Lickitung", img: "https://projectpokemon.org/images/normal-sprite/lickitung.gif", types: ["Normal"], attack: 55, defense: 75, hp: 90 },
    { id: 109, name: "Koffing", img: "https://projectpokemon.org/images/normal-sprite/koffing.gif", types: ["Poison"], attack: 65, defense: 95, hp: 40 },
    { id: 110, name: "Weezing", img: "https://projectpokemon.org/images/normal-sprite/weezing.gif", types: ["Poison"], attack: 90, defense: 120, hp: 65 },
    { id: 111, name: "Rhyhorn", img: "https://projectpokemon.org/images/normal-sprite/rhyhorn.gif", types: ["Ground", "Rock"], attack: 85, defense: 95, hp: 80 },
    { id: 112, name: "Rhydon", img: "https://projectpokemon.org/images/normal-sprite/rhydon.gif", types: ["Ground", "Rock"], attack: 130, defense: 120, hp: 105 },
    { id: 113, name: "Chansey", img: "https://projectpokemon.org/images/normal-sprite/chansey.gif", types: ["Normal"], attack: 5, defense: 5, hp: 250 },
    { id: 114, name: "Tangela", img: "https://projectpokemon.org/images/normal-sprite/tangela.gif", types: ["Grass"], attack: 55, defense: 115, hp: 65 },
    { id: 115, name: "Kangaskhan", img: "https://projectpokemon.org/images/normal-sprite/kangaskhan.gif", types: ["Normal"], attack: 95, defense: 80, hp: 105 },
    { id: 116, name: "Horsea", img: "https://projectpokemon.org/images/normal-sprite/horsea.gif", types: ["Water"], attack: 40, defense: 70, hp: 30 },
    { id: 117, name: "Seadra", img: "https://projectpokemon.org/images/normal-sprite/seadra.gif", types: ["Water"], attack: 65, defense: 95, hp: 55 },
    { id: 118, name: "Goldeen", img: "https://projectpokemon.org/images/normal-sprite/goldeen.gif", types: ["Water"], attack: 67, defense: 60, hp: 45 },
    { id: 119, name: "Seaking", img: "https://projectpokemon.org/images/normal-sprite/seaking.gif", types: ["Water"], attack: 92, defense: 65, hp: 80 },
    { id: 120, name: "Staryu", img: "https://projectpokemon.org/images/normal-sprite/staryu.gif", types: ["Water"], attack: 45, defense: 55, hp: 30 },
    { id: 121, name: "Starmie", img: "https://projectpokemon.org/images/normal-sprite/starmie.gif", types: ["Water", "Psychic"], attack: 60, defense: 85, hp: 60 },
    { id: 122, name: "Mr. Mime", img: "https://projectpokemon.org/images/normal-sprite/mr.mime.gif", types: ["Psychic", "Fairy"], attack: 45, defense: 65, hp: 40 },
    { id: 123, name: "Scyther", img: "https://projectpokemon.org/images/normal-sprite/scyther.gif", types: ["Bug", "Flying"], attack: 110, defense: 80, hp: 70 },
    { id: 124, name: "Jynx", img: "https://projectpokemon.org/images/normal-sprite/jynx.gif", types: ["Ice", "Psychic"], attack: 50, defense: 35, hp: 65 },
    { id: 125, name: "Electabuzz", img: "https://projectpokemon.org/images/normal-sprite/electabuzz.gif", types: ["Electric"], attack: 83, defense: 57, hp: 65 },
    { id: 126, name: "Magmar", img: "https://projectpokemon.org/images/normal-sprite/magmar.gif", types: ["Fire"], attack: 95, defense: 57, hp: 65 },
    { id: 127, name: "Pinsir", img: "https://projectpokemon.org/images/normal-sprite/pinsir.gif", types: ["Bug"], attack: 125, defense: 100, hp: 65 },
    { id: 128, name: "Tauros", img: "https://projectpokemon.org/images/normal-sprite/tauros.gif", types: ["Normal"], attack: 100, defense: 95, hp: 75 },
    { id: 129, name: "Magikarp", img: "https://projectpokemon.org/images/normal-sprite/magikarp.gif", types: ["Water"], attack: 10, defense: 55, hp: 20 },
    { id: 130, name: "Gyarados", img: "https://projectpokemon.org/images/normal-sprite/gyarados.gif", types: ["Water", "Flying"], attack: 125, defense: 79, hp: 95 },
    { id: 131, name: "Lapras", img: "https://projectpokemon.org/images/normal-sprite/lapras.gif", types: ["Water", "Ice"], attack: 85, defense: 80, hp: 130 },
    { id: 132, name: "Ditto", img: "https://projectpokemon.org/images/normal-sprite/ditto.gif", types: ["Normal"], attack: 48, defense: 48, hp: 48 },
    { id: 133, name: "Eevee", img: "https://projectpokemon.org/images/normal-sprite/eevee.gif", types: ["Normal"], attack: 55, defense: 50, hp: 55 },
    { id: 134, name: "Vaporeon", img: "https://projectpokemon.org/images/normal-sprite/vaporeon.gif", types: ["Water"], attack: 65, defense: 60, hp: 130 },
    { id: 135, name: "Jolteon", img: "https://projectpokemon.org/images/normal-sprite/jolteon.gif", types: ["Electric"], attack: 65, defense: 60, hp: 65 },
    { id: 136, name: "Flareon", img: "https://projectpokemon.org/images/normal-sprite/flareon.gif", types: ["Fire"], attack: 130, defense: 60, hp: 65 },
    { id: 137, name: "Porygon", img: "https://projectpokemon.org/images/normal-sprite/porygon.gif", types: ["Normal"], attack: 60, defense: 70, hp: 65 },
    { id: 138, name: "Omanyte", img: "https://projectpokemon.org/images/normal-sprite/omanyte.gif", types: ["Rock", "Water"], attack: 40, defense: 100, hp: 35 },
    { id: 139, name: "Omastar", img: "https://projectpokemon.org/images/normal-sprite/omastar.gif", types: ["Rock", "Water"], attack: 60, defense: 125, hp: 70 },
    { id: 140, name: "Kabuto", img: "https://projectpokemon.org/images/normal-sprite/kabuto.gif", types: ["Rock", "Water"], attack: 80, defense: 90, hp: 30 },
    { id: 141, name: "Kabutops", img: "https://projectpokemon.org/images/normal-sprite/kabutops.gif", types: ["Rock", "Water"], attack: 115, defense: 105, hp: 60 },
    { id: 142, name: "Aerodactyl", img: "https://projectpokemon.org/images/normal-sprite/aerodactyl.gif", types: ["Rock", "Flying"], attack: 105, defense: 65, hp: 80 },
    { id: 143, name: "Snorlax", img: "https://projectpokemon.org/images/normal-sprite/snorlax.gif", types: ["Normal"], attack: 110, defense: 65, hp: 160 },
    { id: 144, name: "Articuno", img: "https://projectpokemon.org/images/normal-sprite/articuno.gif", types: ["Ice", "Flying"], attack: 85, defense: 100, hp: 90 },
    { id: 145, name: "Zapdos", img: "https://projectpokemon.org/images/normal-sprite/zapdos.gif", types: ["Electric", "Flying"], attack: 90, defense: 85, hp: 90 },
    { id: 146, name: "Moltres", img: "https://projectpokemon.org/images/normal-sprite/moltres.gif", types: ["Fire", "Flying"], attack: 100, defense: 90, hp: 90 },
    { id: 147, name: "Dratini", img: "https://projectpokemon.org/images/normal-sprite/dratini.gif", types: ["Dragon"], attack: 64, defense: 45, hp: 41 },
    { id: 148, name: "Dragonair", img: "https://projectpokemon.org/images/normal-sprite/dragonair.gif", types: ["Dragon"], attack: 84, defense: 65, hp: 61 },
    { id: 149, name: "Dragonite", img: "https://projectpokemon.org/images/normal-sprite/dragonite.gif", types: ["Dragon", "Flying"], attack: 134, defense: 95, hp: 91 },
    { id: 150, name: "Mewtwo", img: "https://projectpokemon.org/images/normal-sprite/mewtwo.gif", types: ["Psychic"], attack: 110, defense: 90, hp: 106 },
    { id: 151, name: "Mew", img: "https://projectpokemon.org/images/normal-sprite/mew.gif", types: ["Psychic"], attack: 100, defense: 100, hp: 100 }
];
const typeColors = {
    fire: '#f08030',
    water: '#6890f0',
    grass: '#78c850',
    electric: '#f8d030',
    psychic: '#f85888',
    fairy: '#ee99ac',
    dragon: '#7038f8',
    ice: '#98d8d8',
    normal: '#a8a878',
    poison:'#a040a0',
    bug: '#a8b820',
    ghost: '#705898',
    steel: '#b8b8d0',
    fighting: '#c03028',
    rock:'#b8a038',
    ground: '#e0c068',
    flying: '#a890f0',
    dark: '#705848',
};

let jugadorPokemon;
let oponentePokemon;

// Funciones para manipular cookies
function setCookie(nombre, valor, dias) {
    const d = new Date();
    d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${nombre}=${JSON.stringify(valor)};${expires};path=/`;
}

function getCookie(nombre) {
    const name = `${nombre}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return JSON.parse(c.substring(name.length, c.length));
        }
    }
    return null;
}

function deleteCookie(nombre) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Pantalla de Selección de Pokémon
const listaPokemons = document.getElementById('lista-pokemons');

// Función para determinar si un Pokémon es "Saini"
function esSaini() {
    return Math.random() < 0.1;  // 1% de probabilidad
}

function seleccionarPokemon(pokemonDiv, p) {
    // Quitar la selección de cualquier tarjeta previamente seleccionada
    document.querySelectorAll('.pokemon-card').forEach(card => card.classList.remove('seleccionado'));

    // Marcar la tarjeta seleccionada con borde verde
    pokemonDiv.classList.add('seleccionado');

    // Asignar el Pokémon seleccionado al jugador, con su imagen
    jugadorPokemon = new Pokemon(p.name, p.types[0], p.hp, p.attack, p.defense, [new Move('Ataque Básico', 40)], p.img);
    document.getElementById('btn-seleccionar').disabled = false;
}

// Función para crear la tarjeta del Pokémon
pokemons.forEach((p) => {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('pokemon-card'); // Clase para estilo de tarjeta

    // Determina si el Pokémon es Saini
    const isSaini = esSaini();
    const pokemonImg = isSaini ? p.img.replace('normal', 'shiny') : p.img; 

    // Genera el color de fondo o el degradado según los tipos
    if (p.types.length === 1) {
        pokemonDiv.style.backgroundColor = typeColors[p.types[0].toLowerCase()];
    } else if (p.types.length > 1) {
        const gradientColors = p.types.map(type => typeColors[type.toLowerCase()]);
        pokemonDiv.style.background = `linear-gradient(45deg, ${gradientColors.join(', ')})`;
    }

    // Modifica el nombre si el Pokémon es Saini
    const nombreConEmoticono = isSaini ? `${p.name} ⭐` : p.name;

    pokemonDiv.innerHTML = `
        <img src="${pokemonImg}" alt="${p.name}">
        <h3>${nombreConEmoticono}</h3>
        <p>Ataque: ${p.attack} | Defensa: ${p.defense} | HP: ${p.hp}</p>
        <br>
        <p>Tipo: ${p.types.map(type => `<span class="pokemon-type ${type.toLowerCase()}">${type}</span>`).join(', ')}</p>
    `;

    pokemonDiv.onclick = () => seleccionarPokemon(pokemonDiv, p);
    listaPokemons.appendChild(pokemonDiv);
});

// Selecciona el botón de selección aleatoria
const btnSeleccionarAleatorio = document.getElementById('btn-seleccionar1');

// Evento para seleccionar un Pokémon aleatorio
btnSeleccionarAleatorio.onclick = () => {
    // Elegir un índice aleatorio de la lista de Pokémon
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    const pokemonAleatorio = pokemons[randomIndex];
    
    // Buscar la tarjeta correspondiente en el DOM
    const pokemonDiv = listaPokemons.children[randomIndex];
    
    // Seleccionar el Pokémon aleatorio usando la misma lógica que el botón principal
    seleccionarPokemon(pokemonDiv, pokemonAleatorio);
};

// Función para cambiar de pantalla a la de combate
function mostrarPantallaCombate(jugadorPokemon, oponentePokemon) {
    const seleccionPokemon = document.getElementById('seleccion-pokemon');
    const pantallaCombate = document.getElementById('pantalla-combate');
    const imgJugador = document.getElementById('img-jugador');
    const imgOponente = document.getElementById('img-oponente');
    const vidaJugador = document.getElementById('vida-jugador');
    const vidaOponente = document.getElementById('vida-oponente');

    if (seleccionPokemon && pantallaCombate && imgJugador && imgOponente && vidaJugador && vidaOponente) {
        // Cambiar la visibilidad de las pantallas
        seleccionPokemon.style.display = 'none';
        pantallaCombate.style.display = 'block';

        // Asignar las imágenes de los Pokémon al jugador y al oponente
        imgJugador.src = jugadorPokemon.img;
        imgOponente.src = oponentePokemon.img;

        // Establecer las barras de vida al 100% al inicio
        vidaJugador.style.width = '100%';
        vidaOponente.style.width = '100%';

        // Actualizar el estado de los Pokémon
        actualizarEstado();
    } else {
        console.error("Uno o más elementos no se encontraron en el DOM");
    }
}

// Evento para confirmar selección de Pokémon y cambiar de pantalla
document.getElementById('btn-seleccionar').onclick = () => {
    if (jugadorPokemon) {
        oponentePokemon = elegirOponente();
        mostrarPantallaCombate(jugadorPokemon, oponentePokemon);
    }
};

// Función para elegir un oponente aleatorio
function elegirOponente() {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    const p = pokemons[randomIndex];
    return new Pokemon(p.name, p.types[0], p.hp, p.attack, p.defense, [new Move('Ataque Básico', 40)], p.img); // Asignar la imagen
}

// Función para actualizar el estado de los Pokémon en la interfaz
function actualizarEstado() {
    document.getElementById('estado-jugador').innerText = `HP de ${jugadorPokemon.nombre}: ${jugadorPokemon.hpActual}`;
    document.getElementById('estado-oponente').innerText = `HP de ${oponentePokemon.nombre}: ${oponentePokemon.hpActual}`;
}

// Función para actualizar la barra de vida
function actualizarBarraVida(pokemon, barraId) {
    const porcentajeVida = Math.max((pokemon.hpActual / pokemon.hpMax) * 100, 0);
    const barra = document.getElementById(barraId);
    barra.style.width = `${porcentajeVida}%`;

    if (pokemon.hpActual <= 0) {
        barra.classList.add('health-zero');
    } else {
        barra.classList.remove('health-zero');
    }
}

// Guardar el estado del Pokémon en cookies después de cada turno
function guardarEstadoPokemon() {
    setCookie('jugadorPokemon', {
        nombre: jugadorPokemon.nombre,
        hpActual: jugadorPokemon.hpActual,
        movimientos: jugadorPokemon.movimientos,
        tipo: jugadorPokemon.tipo
    }, 1);

    setCookie('oponentePokemon', {
        nombre: oponentePokemon.nombre,
        hpActual: oponentePokemon.hpActual,
        movimientos: oponentePokemon.movimientos,
        tipo: oponentePokemon.tipo
    }, 1);
}

// Cargar el estado del Pokémon desde las cookies al iniciar
function cargarEstadoPokemon() {
    const estadoJugador = getCookie('jugadorPokemon');
    const estadoOponente = getCookie('oponentePokemon');

    if (estadoJugador && estadoOponente) {
        jugadorPokemon = new Pokemon(
            estadoJugador.nombre,
            estadoJugador.tipo,
            estadoJugador.hpMax,
            estadoJugador.ataque,
            estadoJugador.defensa,
            estadoJugador.movimientos,
            estadoJugador.img
        );
        jugadorPokemon.hpActual = estadoJugador.hpActual;

        oponentePokemon = new Pokemon(
            estadoOponente.nombre,
            estadoOponente.tipo,
            estadoOponente.hpMax,
            estadoOponente.ataque,
            estadoOponente.defensa,
            estadoOponente.movimientos,
            estadoOponente.img
        );
        oponentePokemon.hpActual = estadoOponente.hpActual;

        actualizarEstado();
        mostrarPantallaCombate(jugadorPokemon, oponentePokemon);
    }
}

// Botón de ataque
document.getElementById('btn-ataque').onclick = () => {
    if (jugadorPokemon) {
        jugadorPokemon.attack(jugadorPokemon.movimientos[0], oponentePokemon);
        actualizarEstado();
        actualizarBarraVida(oponentePokemon, 'vida-oponente');
        guardarEstadoPokemon();  // Guardar estado después de cada ataque
        verificarFinCombate();

        if (oponentePokemon.hpActual > 0) {
            setTimeout(() => oponenteTurno(), 1000);
        }
    }
};

// Turno del oponente
document.getElementById('btn-curar').onclick = () => {
    if (jugadorPokemon && jugadorPokemon.hpActual > 0) {
        jugadorPokemon.heal();  // Curar al jugador
        actualizarEstado();  // Actualizar el estado en la interfaz
        actualizarBarraVida(jugadorPokemon, 'vida-jugador');  // Actualizar la barra de vida del jugador
        guardarEstadoPokemon();  // Guardar el estado después de curar

        // Verificar si la batalla continúa
        verificarFinCombate();

        // Si el oponente sigue con vida, realiza su turno
        if (oponentePokemon.hpActual > 0) {
            setTimeout(() => oponenteTurno(), 1000);  // Esperar 1 segundo antes de que el oponente actúe
        }
    }
};

// Función para el turno del oponente
function oponenteTurno() {
    // Determinar si el oponente atacará o se curará
    const accionOponente = Math.random() < 0.5 ? 'ataque' : 'curar';  // 50% de probabilidad para atacar o curar

    if (accionOponente === 'ataque') {
        oponentePokemon.attack(oponentePokemon.movimientos[0], jugadorPokemon);  // Oponente ataca
        actualizarEstado();  // Actualizar el estado después del ataque
        actualizarBarraVida(jugadorPokemon, 'vida-jugador');  // Actualizar la barra de vida del jugador
        guardarEstadoPokemon();  // Guardar el estado después de atacar
    } else if (accionOponente === 'curar') {
        oponentePokemon.heal();  // Oponente se cura
        actualizarEstado();  // Actualizar el estado después de curarse
        actualizarBarraVida(oponentePokemon, 'vida-oponente');  // Actualizar la barra de vida del oponente
        guardarEstadoPokemon();  // Guardar el estado después de curarse
    }

    // Verificar si la batalla terminó
    verificarFinCombate();
}
// Verificar si la batalla ha terminado
function verificarFinCombate() {
    if (oponentePokemon.hpActual <= 0) {
        alert(`${jugadorPokemon.nombre} ganó la batalla!`);
        reiniciarJuego();
    } else if (jugadorPokemon.hpActual <= 0) {
        alert(`${oponentePokemon.nombre} ganó la batalla!`);
        reiniciarJuego();
    }
}
// Llamar a este script después de que se haya cargado el DOM
document.getElementById('limpiar-mensajes').onclick = () => {
    // Limpiar el contenido del contenedor de mensajes
    document.getElementById('mensajes-combate').innerHTML = '';
};

// Reiniciar el juego
function reiniciarJuego() {
    document.getElementById('pantalla-combate').style.display = 'none';
    document.getElementById('seleccion-pokemon').style.display = 'block';
    document.getElementById('btn-seleccionar').disabled = true;
    jugadorPokemon = null;
    oponentePokemon = null;
    deleteCookie('jugadorPokemon');
    deleteCookie('oponentePokemon');
}
