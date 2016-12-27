#!/bin/env node

"use strict";

let huejay = require('huejay');
let config = require('./config.json');
let _ = require('lodash');

/**
  Simple wrapper around Huejay
*/
class Hueook {

  constructor() {
    this.config = config;
    this.client = buildClient();
  }

  /*
    Returns a Promise
  */
  getLights() {
    return this.client.lights.getAll();
  }

  getLight(id) {
    return this.client.lights.getById(id);
  }

  saveLight(id, lightstate) {
    return this.client.lights.getById(id)
      .then(light => {
        let newlight = _.extend(light, lightstate);
        return this.client.lights.save(newlight);
      });
  }

  getGroups() {
    return this.client.groups.getAll();
  }

  getGroup(id) {
    return this.client.groups.getById(id);
  }

  saveGroup(id, params) {

    return this.client.groups.getById(id)
      .then(group => {
        let newgroup = _.extend(group, params);
        return this.client.groups.save(newgroup);
      });
  }

  getClient() {
    return this.client;
  }
}


function buildClient() {

  let client = new huejay.Client({
    host: config.ip,
    username: config.username,
  });
  return client;
}


function discover() {
  huejay.discover()
    .then(bridges => {
      for (let bridge of bridges) {
        console.log(`Id: ${bridge.id}, IP: ${bridge.ip}`);
      }
    })
    .catch(error => {
      console.log(`An error occurred: ${error.message}`);
    });
}



function createUser() {

  let user = new client.users.User;

  // Optionally configure a device type / agent on the user
  user.deviceType = 'alfred'; // Default is 'huejay'

  client.users.create(user)
    .then(user => {
      console.log(`New user created - Username: ${user.username}`);
    })
    .catch(error => {
      if (error instanceof huejay.Error && error.type === 101) {
        return console.log(`Link button not pressed. Try again...`);
      }

      console.log(error.stack);
    });
}


/*client.bridge.get()
  .then(bridge => {
    console.log(`Retrieved bridge ${bridge.name}`);
    console.log('  Id:', bridge.id);
    console.log('  Model Id:', bridge.modelId);
    console.log('  Model Name:', bridge.model.name);
  });

client.lights.getAll()
  .then(lights => {
    for (let light of lights) {
      console.log(`Light [${light.id}]: ${light.name}`);
      console.log(`  Type:             ${light.type}`);
      console.log(`  Unique ID:        ${light.uniqueId}`);
      console.log(`  Manufacturer:     ${light.manufacturer}`);
      console.log(`  Model Id:         ${light.modelId}`);
      console.log('  Model:');
      console.log(`    Id:             ${light.model.id}`);
      console.log(`    Manufacturer:   ${light.model.manufacturer}`);
      console.log(`    Name:           ${light.model.name}`);
      console.log(`    Type:           ${light.model.type}`);
      console.log(`    Color Gamut:    ${light.model.colorGamut}`);
      console.log(`    Friends of Hue: ${light.model.friendsOfHue}`);
      console.log(`  Software Version: ${light.softwareVersion}`);
      console.log('  State:');
      console.log(`    On:         ${light.on}`);
      console.log(`    Reachable:  ${light.reachable}`);
      console.log(`    Brightness: ${light.brightness}`);
      console.log(`    Color mode: ${light.colorMode}`);
      console.log(`    Hue:        ${light.hue}`);
      console.log(`    Saturation: ${light.saturation}`);
      console.log(`    X/Y:        ${light.xy[0]}, ${light.xy[1]}`);
      console.log(`    Color Temp: ${light.colorTemp}`);
      console.log(`    Alert:      ${light.alert}`);
      console.log(`    Effect:     ${light.effect}`);
      console.log();
    }
  });
*/

module.exports = Hueook;

/*client.lights.getById(3)
  .then(light => {
    light.on = false;
    light.brightness = 255;
    light.hue = 32554;
    light.saturation = 254;

    return client.lights.save(light);
  })
  .then(light => {
    console.log(`Updated light [${light.id}]`);
  })
  .catch(error => {
    console.log('Something went wrong');
    console.log(error.stack);
  });*/