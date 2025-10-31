export const fonts = {
  pixel: 'pixel-emulator'
}

export const animationsNames = {
  player: {
    stopped: 'player-stopped',
    idle: 'player-idle',
    run: 'player-run',
    jump: 'player-jump',
    airJump: 'player-air-jump',
    wallSlide: 'player-wall-slide',
    fall: 'player-fall',
    appearing: 'player-appearing',
    disappearing: 'player-disappearing'
  }
}

export const scenes = {
  boot: 'boot',
  mainMenu: 'MainMenuScene',
  pauseMenu: 'pause-menu',
  platformer: 'platformer',
  hud: 'hud',
  dialog: 'dialog'
}

export const customEvents = {
  pauseGame: 'pause-game',
  endGame: 'end-game',
  // showMainMenu: 'start-main-menu',
  moveRight: 'right',
  stopRight: 'stop-right',
  moveLeft: 'left',
  stopLeft: 'stop-left',
  jump: 'jump',
  stopJump: 'stop-jump',
  scenes: {
    shutdown: 'shutdown'
  }
}
