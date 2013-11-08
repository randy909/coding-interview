var expect = require('chai-stack').expect;
var Tower = require('../../cracking/3.4.js');

it('solves the tower with an even number of disks', function() {
  var tower = new Tower(8);
  expect(tower.firstTower()).eql([1,2,3,4,5,6,7,8]);
  expect(tower.middleTower()).eql([]);
  expect(tower.lastTower()).eql([]);
  tower.solve();
  expect(tower.firstTower()).eql([]);
  expect(tower.middleTower()).eql([]);
  expect(tower.lastTower()).eql([1,2,3,4,5,6,7,8]);
});

it('solves the tower with an odd number of disks', function() {
  var tower = new Tower(7);
  expect(tower.firstTower()).eql([1,2,3,4,5,6,7]);
  expect(tower.middleTower()).eql([]);
  expect(tower.lastTower()).eql([]);
  tower.solve();
  expect(tower.firstTower()).eql([]);
  expect(tower.middleTower()).eql([]);
  expect(tower.lastTower()).eql([1,2,3,4,5,6,7]);
});
