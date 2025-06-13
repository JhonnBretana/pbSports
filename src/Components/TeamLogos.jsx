import React from 'react'

// NBA Team Logo Imports
import sixers from '../assets/Nba logo/76ers.svg'
import blazers from '../assets/Nba logo/blazers.svg'
import bucks from '../assets/Nba logo/bucks.png'
import bulls from '../assets/Nba logo/bulls.png'
import cavaliers from '../assets/Nba logo/cavaliers.png'
import celtics from '../assets/Nba logo/celtics.png'
import clippers from '../assets/Nba logo/clippers.png'
import grizzlies from '../assets/Nba logo/grizzlies.png'
import hawks from '../assets/Nba logo/hawks.png'
import heat from '../assets/Nba logo/heat.png'
import hornets from '../assets/Nba logo/hornets.png'
import jazz from '../assets/Nba logo/jazz.svg'
import kings from '../assets/Nba logo/kings.svg'
import knicks from '../assets/Nba logo/knicks.svg'
import lakers from '../assets/Nba logo/lakers.png'
import magic from '../assets/Nba logo/magic.svg'
import mavericks from '../assets/Nba logo/mavericks.png'
import nets from '../assets/Nba logo/nets.png'
import nuggets from '../assets/Nba logo/nuggets.png'
import pacers from '../assets/Nba logo/pacers.png'
import pelicans from '../assets/Nba logo/pelicans.svg'
import pistons from '../assets/Nba logo/pistons.png'
import raptors from '../assets/Nba logo/raptors.svg'
import rockets from '../assets/Nba logo/rockets.png'
import spurs from '../assets/Nba logo/spurs.svg'
import suns from '../assets/Nba logo/suns.svg'
import thunder from '../assets/Nba logo/thunder.svg'
import timberwolves from '../assets/Nba logo/timberwolves.svg'
import warriors from '../assets/Nba logo/warriors.png'
import wizards from '../assets/Nba logo/wizards.svg'

// Export all team logos as an object
export const teamLogos = {
  sixers,
  blazers,
  bucks,
  bulls,
  cavaliers,
  celtics,
  clippers,
  grizzlies,
  hawks,
  heat,
  hornets,
  jazz,
  kings,
  knicks,
  lakers,
  magic,
  mavericks,
  nets,
  nuggets,
  pacers,
  pelicans,
  pistons,
  raptors,
  rockets,
  spurs,
  suns,
  thunder,
  timberwolves,
  warriors,
  wizards
}

export const nbaTeams = {

  northwest: [
    { name: 'Nuggets', logo: teamLogos.nuggets, url: '/teams/nuggets' },
    { name: 'Timberwolves', logo: teamLogos.timberwolves, url: '/teams/timberwolves' },
    { name: 'Thunder', logo: teamLogos.thunder, url: '/teams/thunder' },
    { name: 'Blazers', logo: teamLogos.blazers, url: '/teams/blazers' },
    { name: 'Jazz', logo: teamLogos.jazz, url: '/teams/jazz' },

  ],
  
  western: [
    { name: 'Warriors', logo: teamLogos.warriors, url: '/teams/warriors' },
    { name: 'Clippers', logo: teamLogos.clippers, url: '/teams/clippers' },
    { name: 'Lakers', logo: teamLogos.lakers, url: '/teams/lakers' },
    { name: 'Suns', logo: teamLogos.suns, url: '/teams/suns' },
    { name: 'Kings', logo: teamLogos.kings, url: '/teams/kings'},
    { name: 'Celtics', logo: teamLogos.celtics, url: '/teams/suns' },
    { name: 'Hornets', logo: teamLogos.hornets, url: '/teams/suns' }
  ]
}

export default teamLogos
