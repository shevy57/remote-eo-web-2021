import { Connector1 } from '.'

let connector1

beforeEach(async () => {
  connector1 = await Connector1.create({ name: 'test', parentConnectorId: 'test', connectorSetName: 'test', system: 'test', uri: 'test', countUri: 'test', dependentOnQueries: 'test', dependencies: 'test', exports: 'test', token: 'test', maxPageCount: 'test', fields: 'test', lastPulled: 'test', webCallEvalStatement: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = connector1.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(connector1.id)
    expect(view.name).toBe(connector1.name)
    expect(view.parentConnectorId).toBe(connector1.parentConnectorId)
    expect(view.connectorSetName).toBe(connector1.connectorSetName)
    expect(view.system).toBe(connector1.system)
    expect(view.uri).toBe(connector1.uri)
    expect(view.countUri).toBe(connector1.countUri)
    expect(view.dependentOnQueries).toBe(connector1.dependentOnQueries)
    expect(view.dependencies).toBe(connector1.dependencies)
    expect(view.exports).toBe(connector1.exports)
    expect(view.token).toBe(connector1.token)
    expect(view.maxPageCount).toBe(connector1.maxPageCount)
    expect(view.fields).toBe(connector1.fields)
    expect(view.lastPulled).toBe(connector1.lastPulled)
    expect(view.webCallEvalStatement).toBe(connector1.webCallEvalStatement)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = connector1.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(connector1.id)
    expect(view.name).toBe(connector1.name)
    expect(view.parentConnectorId).toBe(connector1.parentConnectorId)
    expect(view.connectorSetName).toBe(connector1.connectorSetName)
    expect(view.system).toBe(connector1.system)
    expect(view.uri).toBe(connector1.uri)
    expect(view.countUri).toBe(connector1.countUri)
    expect(view.dependentOnQueries).toBe(connector1.dependentOnQueries)
    expect(view.dependencies).toBe(connector1.dependencies)
    expect(view.exports).toBe(connector1.exports)
    expect(view.token).toBe(connector1.token)
    expect(view.maxPageCount).toBe(connector1.maxPageCount)
    expect(view.fields).toBe(connector1.fields)
    expect(view.lastPulled).toBe(connector1.lastPulled)
    expect(view.webCallEvalStatement).toBe(connector1.webCallEvalStatement)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
