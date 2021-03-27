import mongoose, { Schema } from 'mongoose'

const connector1Schema = new Schema({
  name: {
    type: String
  },
  parentConnectorId: {
    type: String
  },
  connectorSetName: {
    type: String
  },
  system: {
    type: String
  },
  uri: {
    type: String
  },
  countUri: {
    type: String
  },
  dependentOnQueries: {
    type: String
  },
  dependencies: {
    type: String
  },
  exports: {
    type: String
  },
  token: {
    type: String
  },
  maxPageCount: {
    type: String
  },
  fields: {
    type: String
  },
  lastPulled: {
    type: String
  },
  webCallEvalStatement: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

connector1Schema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      parentConnectorId: this.parentConnectorId,
      connectorSetName: this.connectorSetName,
      system: this.system,
      uri: this.uri,
      countUri: this.countUri,
      dependentOnQueries: this.dependentOnQueries,
      dependencies: this.dependencies,
      exports: this.exports,
      token: this.token,
      maxPageCount: this.maxPageCount,
      fields: this.fields,
      lastPulled: this.lastPulled,
      webCallEvalStatement: this.webCallEvalStatement,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Connector1', connector1Schema)

export const schema = model.schema
export default model
