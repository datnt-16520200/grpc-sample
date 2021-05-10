const grpc = require('grpc')
const notesProto = grpc.load('proto-file/notes.proto')
const notes = [
  { id: '1', title: 'Note 1', content: 'Content 1'},
  { id: '2', title: 'Note 2', content: 'Content 2'}
]
const server = new grpc.Server()
server.addService(notesProto.noteservice.NoteService.service, {
  list: (_, callback) => {
    callback(null, notes)
  },
})
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
console.log('Server listen on port 50051')
server.start()