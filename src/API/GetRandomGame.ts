import { Game } from '../Types'

function getRndInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const getRandomGame = () => {
    let randomGame:Game = {
        'Presence': getRndInteger(0, 250),
        'Storage': getRndInteger(0, 100),
        'Memory': getRndInteger(0, 32),
        'Original_Cost': getRndInteger(0, 80),
        'Controller': getRndInteger(0,1),
        'Achievements': getRndInteger(0, 250),
        'Action': getRndInteger(0, 1),
        'Adventure': getRndInteger(0, 1),
        'Casual': getRndInteger(0, 1),
        'Early Access': getRndInteger(0, 1),
        'Free to Play': getRndInteger(0, 1),
        'Indie': getRndInteger(0, 1),
        'Massively Multiplayer': getRndInteger(0, 1),
        'Racing': getRndInteger(0, 1),
        'RPG': getRndInteger(0, 1),
        'Simulation': getRndInteger(0, 1),
        'Sports': getRndInteger(0, 1),
        'Strategy': getRndInteger(0, 1),
        'Num_Platforms': getRndInteger(0, 1),
        'Android': getRndInteger(0, 1),
        'iOS': getRndInteger(0, 1),
        'Linux': getRndInteger(0, 1),
        'Macos': getRndInteger(0, 1),
        'Nintendo 3Ds': getRndInteger(0, 1),
        'Nintendo Switch': getRndInteger(0, 1),
        'PC': getRndInteger(0, 1),
        'Playstation 3': getRndInteger(0, 1),
        'Playstation 4': getRndInteger(0, 1),
        'PS Vita': getRndInteger(0, 1),
        'Web': getRndInteger(0, 1),
        'Wii': getRndInteger(0, 1),
        'Wii U': getRndInteger(0, 1),
        'Xbox 360': getRndInteger(0, 1),
        'Xbox One': getRndInteger(0, 1),
        'Is_Franchise': getRndInteger(0, 1),
        'Is_Discounted': getRndInteger(0, 1),
        'French': getRndInteger(0, 1),
        'German': getRndInteger(0, 1),
        'Italian': getRndInteger(0, 1),
        'Japanese': getRndInteger(0, 1),
        'Russian': getRndInteger(0, 1),
        'Num_Languages': getRndInteger(0, 5),
        '2D': getRndInteger(0, 1),
        'Anime': getRndInteger(0, 1),
        'Arcade': getRndInteger(0, 1),
        'Atmospheric': getRndInteger(0, 1),
        'Classic': getRndInteger(0, 1),
        'Co-op': getRndInteger(0, 1),
        'Colorful': getRndInteger(0, 1),
        'Comedy': getRndInteger(0, 1),
        'Cute': getRndInteger(0, 1),
        'Difficult': getRndInteger(0, 1),
        'Exploration': getRndInteger(0, 1),
        'FPS': getRndInteger(0, 1),
        'Family Friendly': getRndInteger(0, 1),
        'Fantasy': getRndInteger(0, 1),
        'Female Protagonist': getRndInteger(0, 1),
        'First-Person': getRndInteger(0, 1),
        'Funny': getRndInteger(0, 1),
        'Gore': getRndInteger(0, 1),
        'Great Soundtrack': getRndInteger(0, 1),
        'Horror': getRndInteger(0, 1),
        'Multiplayer': getRndInteger(0, 1),
        'Nudity': getRndInteger(0, 1),
        'Open World': getRndInteger(0, 1),
        'Pixel Graphics': getRndInteger(0, 1),
        'Platformer': getRndInteger(0, 1),
        'Point & Click': getRndInteger(0, 1),
        'Puzzle': getRndInteger(0, 1),
        'Relaxing': getRndInteger(0, 1),
        'Replay Value': getRndInteger(0, 1),
        'Retro': getRndInteger(0, 1),
        'Sandbox': getRndInteger(0, 1),
        'Sci-fi': getRndInteger(0, 1),
        'Sexual Content': getRndInteger(0, 1),
        'Shooter': getRndInteger(0, 1),
        'Singleplayer': getRndInteger(0, 1),
        'Story Rich': getRndInteger(0, 1),
        'Survival': getRndInteger(0, 1),
        'Turn-Based': getRndInteger(0, 1),
        'Violent': getRndInteger(0, 1),
        'Visual Novel': getRndInteger(0, 1),
    }

    return randomGame
}

export default getRandomGame