 "use strict";
var waffle = require('./waffle.js');

var response = function (message, room_guard) {
  return {
    message: message,
    room_guard: room_guard,
  }
};

const wafflelore = response(`\
Established in 2015, Wafflebot is Yelp's foremost and best loved wafflebot.
He quickly rose to popularity by delighting users with his zany waffle-related antics and amusing Britishisms.
Wafflebot's true origins are shrouded in mystery, however many have claimed that it is the work of {from}.
For more information, please contact your team's Wafflebot deputy.`, true)

// Be sure not to add anything too general - wafflebot strips the "wafflebot" prefix in a message
module.exports = {
  'i would like a waffle':      response('{from} would rather like a waffle.', true),
  'give me a waffle':           response('{from} would rather like a waffle.', true),
  'waffle me':                  response(waffle, false),
  'cheese toastie me':          response('Yummy! Here you go! https://upload.wikimedia.org/wikipedia/commons/6/6d/Toastie-cut-and-seal.jpg', false),
  'chip butty me':              response('Yummy! Here you go! http://www.fnstatic.co.uk/images/content/slide/an-ode-to-the-chip-butty_1.jpg', false),
  'fairy cake me':              response('Yummy! Here you go! http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/7/7/1278515929248/Fairy-cakes-006.jpg', false),
  'jam roly poly me':           response('Yummy! Here you go! http://goodtoknow.media.ipcdigital.co.uk/111/00000811c/e5bb/jam-roly-poly.jpg', false),
  'bangers and mash me':        response('Yummy! Here you go! http://www.roadtripsrus.com/wp-content/uploads/2013/11/Bangers-and-mash.jpg', false),
  'baby sauce me':              response('Yummy! Here you go! http://importfood.com/media/sagb2401_1l.jpg'),
  'hobnob me':                  response('Yummy! Here you go! http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2009/6/12/1244814218926/hobnob-001.jpg', false),
  'ice cream':                  response('🍦'),
  'whois wafflebot':            wafflelore,
  'who is wafflebot':           wafflelore,
  'marley whois wafflebot':     wafflelore,
  'marley who is wafflebot':    wafflelore
};