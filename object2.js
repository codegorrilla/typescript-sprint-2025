var dogProfile = function (profile) {
  //return `${profile.name} is a ${profile.breed} and it's color is ${profile.color}`;
  console.log(
    ''
      .concat(profile.name, ' is a ')
      .concat(profile.breed, " and it's color is ")
      .concat(profile.color)
  );
};
var bruno = {
  breed: 'Doberman',
  name: 'Bruno',
  color: 'Brown',
  age: 2,
  owner: { first: 'Simon', last: 'Todd' },
};
var myDog = dogProfile(bruno);
var calcProfit = function (earning) {
  return (
    'The '
      .concat(earning.name, ' which is a ')
      .concat(earning.type, ' game, has earned a net profit of ') +
    earning.profit * 0.3232 +
    'USD for the year '.concat(earning.year)
  );
};
var detail = function (gameProfile) {
  return '<br> '
    .concat(gameProfile.name, ' has been developed by ')
    .concat(gameProfile.studio.developer, ' and is marketed by ')
    .concat(gameProfile.studio.market, ' is an ')
    .concat(gameProfile.type, ' game and is released on ')
    .concat(gameProfile.year, '<br> and is it a multiplayer game: ')
    .concat(gameProfile.multiplayer);
};
var lou = {
  name: 'Last of US',
  type: 'Adventure',
  studio: { developer: 'Naughty Dog', market: 'Sony' },
  multiplayer: false,
  year: 2012,
  profit: 30000,
};
var gameProfit = calcProfit(lou);
var gameDetail = detail(lou);
document.documentElement.innerHTML = gameProfit + gameDetail;
