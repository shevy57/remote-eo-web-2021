import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Connector1 } from '.'

const app = () => express(apiRoot, routes)

let connector1

beforeEach(async () => {
  connector1 = await Connector1.create({})
})

test('POST /connector1 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', parentConnectorId: 'test', connectorSetName: 'test', system: 'test', uri: 'test', countUri: 'test', dependentOnQueries: 'test', dependencies: 'test', exports: 'test', token: 'test', maxPageCount: 'test', fields: 'test', lastPulled: 'test', webCallEvalStatement: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.parentConnectorId).toEqual('test')
  expect(body.connectorSetName).toEqual('test')
  expect(body.system).toEqual('test')
  expect(body.uri).toEqual('test')
  expect(body.countUri).toEqual('test')
  expect(body.dependentOnQueries).toEqual('test')
  expect(body.dependencies).toEqual('test')
  expect(body.exports).toEqual('test')
  expect(body.token).toEqual('test')
  expect(body.maxPageCount).toEqual('test')
  expect(body.fields).toEqual('test')
  expect(body.lastPulled).toEqual('test')
  expect(body.webCallEvalStatement).toEqual('test')
})

test('GET /connector1 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /connector1/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${connector1.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(connector1.id)
})

test('GET /connector1/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /connector1/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${connector1.id}`)
    .send({ name: 'test', parentConnectorId: 'test', connectorSetName: 'test', system: 'test', uri: 'test', countUri: 'test', dependentOnQueries: 'test', dependencies: 'test', exports: 'test', token: 'test', maxPageCount: 'test', fields: 'test', lastPulled: 'test', webCallEvalStatement: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(connector1.id)
  expect(body.name).toEqual('test')
  expect(body.parentConnectorId).toEqual('test')
  expect(body.connectorSetName).toEqual('test')
  expect(body.system).toEqual('test')
  expect(body.uri).toEqual('test')
  expect(body.countUri).toEqual('test')
  expect(body.dependentOnQueries).toEqual('test')
  expect(body.dependencies).toEqual('test')
  expect(body.exports).toEqual('test')
  expect(body.token).toEqual('test')
  expect(body.maxPageCount).toEqual('test')
  expect(body.fields).toEqual('test')
  expect(body.lastPulled).toEqual('test')
  expect(body.webCallEvalStatement).toEqual('test')
})

test('PUT /connector1/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', parentConnectorId: 'test', connectorSetName: 'test', system: 'test', uri: 'test', countUri: 'test', dependentOnQueries: 'test', dependencies: 'test', exports: 'test', token: 'test', maxPageCount: 'test', fields: 'test', lastPulled: 'test', webCallEvalStatement: 'test' })
  expect(status).toBe(404)
})

test('DELETE /connector1/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${connector1.id}`)
  expect(status).toBe(204)
})

test('DELETE /connector1/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
