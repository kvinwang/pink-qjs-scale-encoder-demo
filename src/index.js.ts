import "./polyfills.js"
import {
    createStructEncoder,
    encodeU128,
    encodeStr,
    WalkerImpl,
} from '@scale-codec/core'

interface Message {
    author: string
    timestamp: bigint
}

const encoder = createStructEncoder<Message>([
    ['author', encodeStr],
    ['timestamp', encodeU128],
])

const encoded = WalkerImpl.encode({ author: "Kevin", timestamp: 1n }, encoder);
console.log(encoded);
encoded
