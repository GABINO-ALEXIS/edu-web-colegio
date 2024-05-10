export class ValidationError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ValidationError'
  }
}
export class ConnectionError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ConnectionError'
  }
}
export class CollectionReferenceError extends Error {
  constructor (message) {
    super(message)
    this.name = 'CollectionReferenceError'
  }
}
export class DocumentsReferenceError extends Error {
  constructor (message) {
    super(message)
    this.name = 'DocumentsReferenceError'
  }
}
export class ProcessReferenceError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ProcessReferenceError'
  }
}
