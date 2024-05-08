export const Sounds = []

const soundpath = [
    './sound/airport-call-157168.mp3',
    './sound/ambient-flute-notification-3-185275.mp3',
    './sound/attention_tone_sm30-96953.mp3',
    './sound/bell-172780.mp3',
    './sound/call-to-attention-123107.mp3',
    './sound/marimba-ringtone-5-185156.mp3',
    './sound/simple-notification-152054.mp3',
    './sound/simple-notification-152054.mp3',
]

soundpath.forEach((sound, index) => {
    Sounds.push({
        id:index,
        soundPath: sound
    })
})