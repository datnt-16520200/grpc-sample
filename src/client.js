const serverAdress = process.env.GRPC_SAMPLE_SERVER_ADRESS || 'localhost'
const serverPort = process.env.GRPC_SAMPLE_SERVER_PORT || '50051'
const grpc = require('grpc')
const PROTO_PATH = 'proto-file/notes.proto'
const NoteService = grpc.load(PROTO_PATH).NoteService
console.log('get-notes', `get list of notes from ${serverAdress}:${serverPort}`)
const client = new NoteService(`${serverAdress}:${serverPort}`,
  grpc.credentials.createInsecure())
module.exports = client